"use client";

import { useEffect, useMemo, useState, type ReactNode } from "react";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  ChevronRight,
  Clock3,
  HeartHandshake,
  Hospital,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
} from "lucide-react";
import {
  LazyMotion,
  MotionConfig,
  domAnimation,
  useReducedMotion,
} from "motion/react";
import * as m from "motion/react-m";
import type { PageContent, PageSection } from "@/lib/pages";
import { getRelatedPages } from "@/lib/pages";
import { phone, phoneHref, whatsappHref } from "@/lib/site";
import { SupportingImage } from "@/components/supporting-image";

type PageShellProps = {
  page: PageContent;
  children?: ReactNode;
  /** Primary content shown right after the hero (e.g. package catalog on Prețuri). */
  lead?: ReactNode;
};
type SectionKind = "areas" | "hospitals" | "cemeteries" | "default";
type Anchor = { id: string; label: string };

export function PageShell({ page, children, lead }: PageShellProps) {
  const reduceMotion = useReducedMotion();
  // Lead mode puts a centerpiece (packages) above the essay — used on Prețuri
  const hasLead = Boolean(lead);
  const packagesId = "pachete";
  const sections = useMemo(
    () =>
      page.sections.map((section, index) => ({
        section,
        number: index + 1,
        id: `argo-${page.slug}-${index + 1}`,
      })),
    [page.sections, page.slug],
  );
  const faqId = `argo-${page.slug}-faq`;
  const anchors = useMemo<Anchor[]>(
    () => [
      ...(hasLead ? [{ id: packagesId, label: "Pachete" }] : []),
      ...sections.map(({ id, section }) => ({ id, label: section.heading })),
      ...(page.faqs.length
        ? [{ id: faqId, label: "Întrebări frecvente" }]
        : []),
    ],
    [hasLead, sections, page.faqs.length, faqId],
  );
  const [activeId, setActiveId] = useState(anchors[0]?.id ?? "");
  const related = getRelatedPages(page.relatedSlugs);

  useEffect(() => {
    setActiveId(anchors[0]?.id ?? "");
    if (!("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-15% 0px -55% 0px", threshold: 0 },
    );
    anchors.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, [anchors]);

  return (
    <LazyMotion features={domAnimation}>
      <MotionConfig
        reducedMotion="user"
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="argo-page">
          <style>{STYLES}</style>

          <header className={`argo-hero${hasLead ? " argo-hero-lead" : ""}`}>
            <div className="argo-container">
              <Breadcrumbs page={page} />
              <div className="argo-hero-grid">
                <div>
                  <div className="argo-eyebrow">
                    <span className="argo-gold-line" aria-hidden="true" />
                    {page.eyebrow}
                  </div>
                  <h1>{page.h1}</h1>
                  <p className="argo-intro">{page.intro}</p>
                  {/* Lead pages (Prețuri) skip the dual CTAs — the mobile dock covers contact */}
                  {!hasLead && <ContactActions />}
                  <div className="argo-assurances">
                    <span>
                      <Clock3 aria-hidden="true" />
                      Asistență non-stop
                    </span>
                    {hasLead ? (
                      <>
                        <span>
                          <ShieldCheck aria-hidden="true" />
                          Cu talonul de pensie
                        </span>
                        <span>
                          <Check aria-hidden="true" />
                          Fără costuri ascunse
                        </span>
                      </>
                    ) : (
                      <span>
                        <HeartHandshake aria-hidden="true" />
                        Sprijin pentru familie
                      </span>
                    )}
                  </div>
                </div>
                {!hasLead && (
                  <div className="argo-hero-aside">
                    <Reveal>
                      <SupportCard />
                    </Reveal>
                  </div>
                )}
              </div>
            </div>
          </header>

          {/* Package catalog (or other centerpiece) sits above the essay */}
          {hasLead && (
            <div id={packagesId} className="argo-lead scroll-mt-[calc(var(--ap-header-offset)+12px)]">
              <div className="argo-container">{lead}</div>
            </div>
          )}

          <div className="argo-container argo-main">
            {/* Chip nav is redundant when packages already lead the page */}
            {!hasLead && anchors.length > 0 && (
              <div className="argo-mobile-nav">
                <div className="argo-nav-caption">
                  <span>Găsiți rapid informația</span>
                  <ArrowRight aria-hidden="true" />
                </div>
                <nav
                  aria-label="Navigare rapidă în pagină"
                  className="argo-chips"
                >
                  {anchors.map((anchor, index) => (
                    <a
                      key={anchor.id}
                      href={`#${anchor.id}`}
                      className={activeId === anchor.id ? "is-active" : ""}
                      aria-current={
                        activeId === anchor.id ? "location" : undefined
                      }
                    >
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      {anchor.label}
                    </a>
                  ))}
                </nav>
              </div>
            )}

            <div className="argo-content-grid">
              <article className="argo-article" aria-label={page.title}>
                {/* Page figure sits near the top so it is not buried under long essays */}
                {!hasLead && page.image && (
                  <Reveal>
                    <SupportingImage
                      src={page.image}
                      alt={
                        page.imageAlt ??
                        `${page.title} — Agenția Funerară Argo`
                      }
                      aspect={page.imageAspect ?? "16/9"}
                      sizes="(max-width: 1024px) 100vw, 720px"
                      className="argo-page-figure"
                    />
                  </Reveal>
                )}
                {sections.map(({ section, id, number }) => (
                  <ContentSection
                    key={id}
                    section={section}
                    id={id}
                    number={number}
                    isSector={Boolean(page.isSector)}
                  />
                ))}
                {children && <div className="argo-extra">{children}</div>}
              </article>

              <aside className="argo-sidebar" aria-label="Cuprins și asistență">
                {anchors.length > 0 && (
                  <div className="argo-toc">
                    <span className="argo-overline">PAS CU PAS</span>
                    <h2>Pe această pagină</h2>
                    <nav aria-label="Cuprinsul paginii">
                      {anchors.map((anchor, index) => (
                        <a
                          key={anchor.id}
                          href={`#${anchor.id}`}
                          className={activeId === anchor.id ? "is-active" : ""}
                          aria-current={
                            activeId === anchor.id ? "location" : undefined
                          }
                        >
                          <span>{String(index + 1).padStart(2, "0")}</span>
                          {anchor.label}
                        </a>
                      ))}
                    </nav>
                  </div>
                )}
                <div className="argo-sidebar-help">
                  <HeartHandshake aria-hidden="true" />
                  <p>Nu trebuie să parcurgeți singuri fiecare pas.</p>
                  <a href={phoneHref}>
                    Vorbiți cu echipa noastră{" "}
                    <ArrowUpRight aria-hidden="true" />
                  </a>
                </div>
              </aside>
            </div>
          </div>

          {page.faqs.length > 0 && (
            <section
              id={faqId}
              className="argo-faq-section"
              aria-labelledby={`${faqId}-heading`}
            >
              <div className="argo-container argo-faq-grid">
                <div className="argo-faq-intro">
                  <span className="argo-overline">CLARITATE, PAS CU PAS</span>
                  <h2 id={`${faqId}-heading`}>
                    Răspunsuri la
                    <br />
                    întrebările dumneavoastră.
                  </h2>
                  <p>
                    Pentru detalii despre situația dumneavoastră, ne puteți
                    contacta oricând.
                  </p>
                  <a href={phoneHref} className="argo-text-link">
                    <Phone aria-hidden="true" />
                    {phone}
                  </a>
                </div>
                <div className="argo-faq-list">
                  {page.faqs.map((faq, index) => (
                    <FaqItem
                      key={`${page.slug}-${index}`}
                      id={`${faqId}-${index}`}
                      question={faq.question}
                      answer={faq.answer}
                      number={index + 1}
                    />
                  ))}
                </div>
              </div>
            </section>
          )}

          {related.length > 0 && (
            <section className="argo-related-section">
              <div className="argo-container">
                <div className="argo-section-heading">
                  <div>
                    <span className="argo-overline">INFORMAȚII ȘI SPRIJIN</span>
                    <h2>Vă putem ajuta și cu</h2>
                  </div>
                  <span className="argo-related-hint">
                    Explorați serviciile noastre{" "}
                    <ArrowDown aria-hidden="true" />
                  </span>
                </div>
                <div className="argo-related-grid">
                  {related.map((rel, index) => (
                    <Reveal key={rel.slug}>
                      <Link href={`/${rel.slug}`} className="argo-related-card">
                        <div className="argo-related-top">
                          <span>{String(index + 1).padStart(2, "0")}</span>
                          <ArrowUpRight aria-hidden="true" />
                        </div>
                        <h3>{rel.breadcrumbLabel}</h3>
                        <p>{rel.intro}</p>
                        <span className="argo-related-link">
                          Vedeți detaliile <ArrowRight aria-hidden="true" />
                        </span>
                      </Link>
                    </Reveal>
                  ))}
                </div>
              </div>
            </section>
          )}

          <section className="argo-bottom-section">
            <div className="argo-container">
              <Reveal>
                <div className="argo-bottom-card">
                  <div className="argo-bottom-copy">
                    <span className="argo-overline">
                      ALĂTURI DE DUMNEAVOASTRĂ
                    </span>
                    <h2>
                      Un singur apel.
                      <br />
                      Sprijin pentru fiecare pas.
                    </h2>
                    <p>Dispecerat non-stop în București și Ilfov.</p>
                  </div>
                  <ContactActions light />
                </div>
              </Reveal>
            </div>
          </section>

          <nav className="argo-mobile-dock" aria-label="Contact rapid">
            <div className="argo-dock-copy">
              <span className="argo-status-dot" />
              <div>
                <span>Asistență non-stop</span>
                <strong>{phone}</strong>
              </div>
            </div>
            <m.a
              href={phoneHref}
              className="argo-button argo-button-primary"
              whileTap={reduceMotion ? undefined : { scale: 0.97 }}
            >
              <Phone aria-hidden="true" />
              Sună acum
            </m.a>
            <m.a
              href={whatsappHref}
              className="argo-dock-whatsapp"
              aria-label="Scrieți pe WhatsApp"
              whileTap={reduceMotion ? undefined : { scale: 0.94 }}
            >
              <MessageCircle aria-hidden="true" />
            </m.a>
          </nav>
        </div>
      </MotionConfig>
    </LazyMotion>
  );
}

function Reveal({ children }: { children: ReactNode }) {
  const reduceMotion = useReducedMotion();
  return (
    <m.div
      initial={false}
      whileInView={
        reduceMotion ? undefined : { y: [14, 0], opacity: [0.88, 1] }
      }
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </m.div>
  );
}

function ContactActions({ light = false }: { light?: boolean }) {
  const reduceMotion = useReducedMotion();
  return (
    <div className={`argo-actions${light ? " argo-actions-light" : ""}`}>
      <m.a
        href={phoneHref}
        className="argo-button argo-button-primary"
        whileTap={reduceMotion ? undefined : { scale: 0.98 }}
      >
        <Phone aria-hidden="true" />
        <span>
          Sunați-ne <strong>{phone}</strong>
        </span>
        <ArrowUpRight aria-hidden="true" />
      </m.a>
      <m.a
        href={whatsappHref}
        className="argo-button argo-button-secondary"
        whileTap={reduceMotion ? undefined : { scale: 0.98 }}
      >
        <MessageCircle aria-hidden="true" />
        WhatsApp
      </m.a>
    </div>
  );
}

function SupportCard() {
  return (
    <div className="argo-support-card">
      <div className="argo-status">
        <span className="argo-status-dot" />
        Disponibili non-stop · 24/7
      </div>
      <HeartHandshake className="argo-support-symbol" aria-hidden="true" />
      <h2>
        Suntem aici.
        <br />
        Vă ascultăm.
      </h2>
      <p>
        Spuneți-ne cu ce vă confruntați. Echipa noastră vă îndrumă cu grijă și
        respect.
      </p>
      <a href={phoneHref} className="argo-support-phone">
        <Phone aria-hidden="true" />
        {phone}
        <ArrowUpRight aria-hidden="true" />
      </a>
      <div className="argo-support-foot">
        <ShieldCheck aria-hidden="true" />
        București și Ilfov
      </div>
    </div>
  );
}

function ContentSection({
  section,
  id,
  number,
  isSector,
}: {
  section: PageSection;
  id: string;
  number: number;
  isSector: boolean;
}) {
  const kind = getSectionKind(section.heading, isSector);
  const Icon =
    kind === "hospitals"
      ? Hospital
      : kind === "default"
        ? HeartHandshake
        : MapPin;
  const bullets = section.bullets ?? [];
  const ordered =
    bullets.length > 0 && bullets.every((item) => /^\d+\.\s*/.test(item));
  const ListTag = ordered ? "ol" : "ul";
  const photo = section.image;
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={`argo-section argo-section-${kind}`}
    >
      <Reveal>
        <div className={`argo-card${photo ? " argo-card-with-photo" : ""}`}>
          <div className="argo-card-body">
            <div className="argo-card-top">
              <span className="argo-section-number">
                {String(number).padStart(2, "0")}
              </span>
              <span className="argo-section-icon">
                <Icon aria-hidden="true" />
              </span>
            </div>
            <h2 id={`${id}-heading`}>{section.heading}</h2>
            <div className="argo-section-copy">
              {section.paragraphs.map((text, index) => (
                <SectionParagraph key={index} text={text} kind={kind} />
              ))}
              {bullets.length > 0 && (
                <ListTag className="argo-service-list">
                  {bullets.map((bullet, index) => (
                    <li key={index}>
                      <span
                        className={`argo-service-marker${ordered ? " is-number" : ""}`}
                        aria-hidden="true"
                      >
                        {ordered ? String(index + 1).padStart(2, "0") : <Check />}
                      </span>
                      <div>
                        <LabelledText
                          text={
                            ordered ? bullet.replace(/^\d+\.\s*/, "") : bullet
                          }
                        />
                      </div>
                    </li>
                  ))}
                </ListTag>
              )}
            </div>
          </div>
          {photo && (
            <SupportingImage
              src={photo.src}
              alt={photo.alt}
              aspect={photo.aspect}
              objectPosition={photo.objectPosition}
              className="argo-section-photo"
              sizes="(max-width: 768px) 100vw, 360px"
            />
          )}
        </div>
      </Reveal>
    </section>
  );
}

function SectionParagraph({ text, kind }: { text: string; kind: SectionKind }) {
  const list = getLocalList(text, kind);
  if (!list) return <p className="argo-paragraph">{text}</p>;
  const collapse = kind === "areas" && list.items.length > 12;
  return (
    <div className="argo-local-block">
      {list.intro && <p className="argo-paragraph">{list.intro}</p>}
      <LocalItems
        items={collapse ? list.items.slice(0, 8) : list.items}
        kind={kind}
      />
      {collapse && (
        <details className="argo-expand">
          <summary>
            <span>Vedeți toate cele {list.items.length} de zone</span>
            <ChevronDown aria-hidden="true" />
          </summary>
          <LocalItems items={list.items.slice(8)} kind={kind} />
        </details>
      )}
    </div>
  );
}

function LocalItems({ items, kind }: { items: string[]; kind: SectionKind }) {
  return (
    <ul
      className={`argo-local-list${kind === "areas" ? " argo-area-list" : ""}`}
    >
      {items.map((item, index) => (
        <li key={index}>
          <span aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  );
}

function FaqItem({
  question,
  answer,
  id,
  number,
}: {
  question: string;
  answer: string;
  id: string;
  number: number;
}) {
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  return (
    <div className={`argo-faq-item${open ? " is-open" : ""}`}>
      <h3>
        <button
          id={`${id}-button`}
          type="button"
          aria-expanded={open}
          aria-controls={`${id}-answer`}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="argo-faq-number">
            {String(number).padStart(2, "0")}
          </span>
          <span>{question}</span>
          <span className="argo-faq-toggle">
            <ChevronDown aria-hidden="true" />
          </span>
        </button>
      </h3>
      <m.div
        id={`${id}-answer`}
        role="region"
        aria-labelledby={`${id}-button`}
        aria-hidden={!open}
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: reduceMotion ? 0 : 0.28 }}
        className="argo-faq-panel"
      >
        <div className="argo-faq-answer">
          <FaqAnswer question={question} answer={answer} />
        </div>
      </m.div>
    </div>
  );
}

function FaqAnswer({ question, answer }: { question: string; answer: string }) {
  const colon = answer.indexOf(":");
  const items =
    /acte|documente/i.test(question) && colon >= 0
      ? answer
          .slice(colon + 1)
          .split(";")
          .map((item) => item.trim())
          .filter(Boolean)
      : [];
  if (items.length < 2) return <p>{answer}</p>;
  return (
    <>
      <p>{answer.slice(0, colon + 1)}</p>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}

function LabelledText({ text }: { text: string }) {
  const colon = text.indexOf(":");
  if (colon < 1 || colon > 110) return <>{text}</>;
  return (
    <>
      <strong>{text.slice(0, colon + 1)}</strong>
      {text.slice(colon + 1)}
    </>
  );
}

function Breadcrumbs({ page }: { page: PageContent }) {
  return (
    <nav aria-label="Breadcrumb" className="argo-breadcrumbs">
      <ol>
        <li>
          <Link href="/">Acasă</Link>
        </li>
        <li aria-hidden="true">
          <ChevronRight />
        </li>
        {page.isSector && (
          <>
            <li>Sectoare</li>
            <li aria-hidden="true">
              <ChevronRight />
            </li>
          </>
        )}
        <li aria-current="page">{page.breadcrumbLabel}</li>
      </ol>
    </nav>
  );
}

function getSectionKind(heading: string, isSector: boolean): SectionKind {
  if (!isSector) return "default";
  if (/morg|spital/i.test(heading)) return "hospitals";
  if (/cimitir/i.test(heading)) return "cemeteries";
  if (/cartier|acoperire|localit/i.test(heading)) return "areas";
  return "default";
}

function splitLocalItems(text: string): string[] {
  const items: string[] = [];
  let depth = 0;
  let start = 0;
  for (let index = 0; index < text.length; index += 1) {
    if (text[index] === "(") depth += 1;
    if (text[index] === ")") depth = Math.max(0, depth - 1);
    if (text[index] === "," && depth === 0) {
      items.push(text.slice(start, index).trim());
      start = index + 1;
    }
  }
  items.push(text.slice(start).trim());
  return items.filter(Boolean);
}

function getLocalList(
  text: string,
  kind: SectionKind,
): { intro: string; items: string[] } | null {
  if (kind === "default") return null;
  const colon = text.indexOf(":");
  const intro = colon >= 0 ? text.slice(0, colon + 1) : "";
  const body = colon >= 0 ? text.slice(colon + 1).trim() : text.trim();
  if (!body || (colon < 0 && kind !== "areas")) return null;
  const items = splitLocalItems(body);
  if (items.length < 3 || (colon < 0 && items.some((item) => item.length > 90)))
    return null;
  return { intro, items };
}

const STYLES = `
.argo-page{--ap-ink:#192e36;--ap-muted:#56676d;--ap-gold:#a38250;--ap-line:#e5e7e2;--ap-paper:#f6f7f3;--ap-navy:#172f38;--ap-header-offset:96px;background:var(--ap-paper);color:var(--ap-ink);font-family:inherit;-webkit-font-smoothing:antialiased;isolation:isolate}
.argo-page *{box-sizing:border-box}
/* .argo-lead / .argo-extra keep Tailwind styles (e.g. primary button text-white) */
.argo-page :where(h1,h2,h3,p,ul,ol,figure):not(:where(.argo-extra *,.argo-lead *)){margin:0}
.argo-page :where(ul,ol):not(:where(.argo-extra *,.argo-lead *)){padding:0}
.argo-page a:not(:where(.argo-extra *,.argo-lead *)){color:inherit;text-decoration:none}
.argo-page button:not(:where(.argo-extra *,.argo-lead *)){font:inherit}
.argo-page svg:not(:where(.argo-extra *,.argo-lead *)){width:20px;height:20px;flex-shrink:0;stroke-width:1.65}
.argo-page :where(a,button,summary):focus-visible{outline:3px solid #ac8a52;outline-offset:5px}
.argo-page ::selection{background:#dfd2b9;color:#142c35}
.argo-page .argo-container{width:min(1200px,calc(100% - 40px));margin-inline:auto}
.argo-page .argo-hero{position:relative;overflow:hidden;background:radial-gradient(ellipse at 94% 0%,#e6ebdf 0%,transparent 49%),linear-gradient(145deg,#fafaf7,#f3f5ef);border-bottom:1px solid var(--ap-line);padding:24px 0 42px}
.argo-page .argo-hero-lead{padding-bottom:28px;border-bottom:0}
.argo-page .argo-hero-lead .argo-hero-grid{padding-top:28px;gap:24px}
.argo-page .argo-hero-lead h1{font-size:clamp(28px,6.5vw,44px);margin-top:14px}
.argo-page .argo-hero-lead .argo-intro{margin-top:14px;font-size:15px;max-width:540px}
.argo-page .argo-lead{padding:8px 0 28px;background:linear-gradient(180deg,#f3f5ef 0%,var(--ap-paper) 72%)}
.argo-page .argo-hero:after{content:'';position:absolute;pointer-events:none;width:360px;height:360px;border:1px solid #a3b6a324;border-radius:50%;right:-235px;top:75px;box-shadow:0 0 0 48px #a3b6a308,0 0 0 96px #a3b6a305}
.argo-page .argo-breadcrumbs{font-size:12px;color:var(--ap-muted);position:relative;z-index:1}
.argo-page .argo-breadcrumbs ol{display:flex;align-items:center;flex-wrap:wrap;gap:7px;list-style:none}
.argo-page .argo-breadcrumbs li{display:flex;align-items:center}
.argo-page .argo-breadcrumbs svg{width:12px;height:12px;opacity:.55}
.argo-page .argo-breadcrumbs [aria-current]{color:var(--ap-ink);font-weight:600}
.argo-page .argo-hero-grid{display:grid;gap:40px;padding-top:35px;position:relative;z-index:1}
.argo-page .argo-eyebrow{display:flex;align-items:center;gap:10px;font-size:11px;line-height:1.5;font-weight:650;letter-spacing:.13em;text-transform:uppercase;color:#786342}
.argo-page .argo-gold-line{display:block;width:26px;height:1px;background:var(--ap-gold)}
.argo-page h1{font-family:inherit;font-size:clamp(34px,7.6vw,66px);line-height:1.09;letter-spacing:-.048em;font-weight:550;max-width:850px;margin-top:18px;overflow-wrap:anywhere;text-wrap:balance}
.argo-page .argo-intro{font-size:16px;line-height:1.85;letter-spacing:-.012em;color:var(--ap-muted);max-width:660px;margin-top:22px;white-space:pre-line}
.argo-page .argo-actions{display:flex;gap:10px;flex-wrap:wrap;margin-top:28px}
.argo-page .argo-button{min-height:54px;display:inline-flex;align-items:center;justify-content:center;gap:10px;border-radius:13px;padding:13px 18px;font-size:14px;font-weight:600;line-height:1.4;border:1px solid transparent;transition:background .2s,border-color .2s,box-shadow .2s}
.argo-page .argo-button-primary{background:var(--ap-navy);color:white;box-shadow:0 6px 15px #172f3814}
.argo-page .argo-button-primary>span{display:flex;gap:8px;align-items:center}
.argo-page .argo-button-primary strong{font-weight:600;font-variant-numeric:tabular-nums}
.argo-page .argo-button-primary>svg:last-child:not(:first-child){width:16px;height:16px;opacity:.65}
.argo-page .argo-button-secondary{background:#ffffffb8;border-color:#dce2d8;color:var(--ap-ink)}
.argo-page .argo-assurances{display:flex;flex-wrap:wrap;gap:12px 20px;margin-top:22px;color:#63716b;font-size:11px;font-weight:500}
.argo-page .argo-assurances>span{display:flex;align-items:center;gap:7px}
.argo-page .argo-assurances svg{width:15px;height:15px;color:#70846e}
.argo-page .argo-hero-aside{display:none}
.argo-page .argo-support-card{position:relative;overflow:hidden;background:linear-gradient(135deg,#24434c,#172e37);color:#fff;border-radius:24px;padding:30px;box-shadow:0 18px 50px #172f3812}
.argo-page .argo-support-card:before{content:'';position:absolute;border:1px solid #ffffff0d;width:280px;height:280px;border-radius:50%;right:-150px;top:55px;pointer-events:none}
.argo-page .argo-status{display:flex;align-items:center;gap:8px;font-size:11px;font-weight:500;color:#d2e1d8}
.argo-page .argo-status-dot{display:inline-block;flex-shrink:0;width:6px;height:6px;border-radius:50%;background:#a2be9f;box-shadow:0 0 0 4px #a2be9f13}
.argo-page .argo-support-symbol{width:35px;height:35px;color:#d1bd94;margin-top:34px;stroke-width:1}
.argo-page .argo-support-card h2{font-size:33px;letter-spacing:-.04em;line-height:1.14;font-weight:500;margin-top:17px;color:#fff}
.argo-page .argo-support-card p{color:#c4d1d2;font-size:14px;line-height:1.85;margin-top:15px}
.argo-page .argo-support-phone{display:flex;gap:10px;align-items:center;border-top:1px solid #ffffff20;padding-top:22px;margin-top:25px;font-size:22px;letter-spacing:-.025em;font-weight:500;color:white}
.argo-page .argo-support-phone svg:last-child{margin-left:auto;width:17px;height:17px;color:#cbb68f}
.argo-page .argo-support-foot{display:flex;align-items:center;gap:7px;margin-top:15px;font-size:11px;color:#bccdca}
.argo-page .argo-support-foot svg{width:14px;height:14px}
.argo-page .argo-main{padding-top:25px;padding-bottom:46px}
.argo-page .argo-mobile-nav{margin-bottom:25px}
.argo-page .argo-nav-caption{display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;font-size:11px;letter-spacing:.02em;color:var(--ap-muted);font-weight:600}
.argo-page .argo-nav-caption svg{width:15px;height:15px}
.argo-page .argo-chips{display:flex;gap:8px;overflow:auto;padding:3px 3px 10px;margin-inline:-3px;scrollbar-width:thin;scrollbar-color:#ccd4ca transparent}
.argo-page .argo-chips a{flex:0 0 auto;display:flex;align-items:center;gap:9px;max-width:285px;padding:12px 14px;min-height:46px;border:1px solid var(--ap-line);background:#fff;border-radius:12px;font-size:12px;line-height:1.4;font-weight:550}
.argo-page .argo-chips a>span{font-size:10px;color:#8b968d;font-variant-numeric:tabular-nums}
.argo-page .argo-chips a.is-active{color:#fff;background:var(--ap-navy);border-color:var(--ap-navy)}
.argo-page .argo-chips a.is-active>span{color:#c8c3ac}
.argo-page .argo-content-grid{display:grid;gap:38px;align-items:start}
.argo-page .argo-article{min-width:0;display:grid;gap:18px}
.argo-page .argo-section{scroll-margin-top:calc(var(--ap-header-offset) + 20px);min-width:0}
.argo-page .argo-card{background:#fff;border:1px solid #e5e9e1;border-radius:21px;padding:22px;box-shadow:0 3px 4px #213a2b01,0 12px 35px #213a2b03;overflow:hidden}
.argo-page .argo-card-top{display:flex;justify-content:space-between;align-items:center;margin-bottom:17px}
.argo-page .argo-section-number{color:#9b825c;font-size:11px;font-weight:600;letter-spacing:.1em;display:flex;align-items:center;gap:10px;font-variant-numeric:tabular-nums}
.argo-page .argo-section-number:after{content:'';width:26px;height:1px;background:#e1d7c3}
.argo-page .argo-section-icon{width:35px;height:35px;display:grid;place-items:center;background:#f3f6ef;border-radius:11px;color:#627860}
.argo-page .argo-section-icon svg{width:18px;height:18px;stroke-width:1.4}
.argo-page .argo-card h2{font-size:24px;line-height:1.22;letter-spacing:-.035em;font-weight:550;max-width:670px;text-wrap:balance}
.argo-page .argo-section-copy{display:grid;gap:20px;margin-top:20px}
.argo-page .argo-paragraph{font-size:15px;line-height:1.95;color:var(--ap-muted);overflow-wrap:anywhere;white-space:pre-line}
.argo-page .argo-service-list{list-style:none;display:grid;gap:0}
.argo-page .argo-service-list li{display:flex;align-items:flex-start;gap:13px;padding:19px 0;border-top:1px solid #edf0e9;font-size:15px;line-height:1.85;color:var(--ap-muted)}
.argo-page .argo-service-list li:last-child{padding-bottom:0}
.argo-page .argo-service-marker{display:grid;place-items:center;flex-shrink:0;width:27px;height:27px;background:#edf3e9;color:#66825f;border-radius:9px;margin-top:2px}
.argo-page .argo-service-marker svg{width:14px;height:14px;stroke-width:2}
.argo-page .argo-service-marker.is-number{background:var(--ap-navy);color:#eee8d8;font-size:10px;letter-spacing:.02em}
.argo-page .argo-service-list li>div{min-width:0;overflow-wrap:anywhere}
.argo-page .argo-service-list strong{display:block;margin-bottom:5px;font-weight:600;color:var(--ap-ink);line-height:1.55}
.argo-page .argo-local-block{display:grid;gap:16px}
.argo-page .argo-local-list{list-style:none;display:grid;gap:9px}
.argo-page .argo-local-list li{display:flex;align-items:flex-start;gap:8px;min-width:0;padding:12px 13px;background:#f6f8f3;border:1px solid #ebefe6;border-radius:11px;font-size:13px;line-height:1.7;overflow-wrap:anywhere;color:#4c6259}
.argo-page .argo-local-list li>span{width:4px;height:4px;background:#92a58a;border-radius:50%;flex-shrink:0;margin-top:9px}
.argo-page .argo-area-list{grid-template-columns:repeat(2,minmax(0,1fr))}
.argo-page .argo-expand summary{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:48px;padding:11px 0;cursor:pointer;list-style:none;font-size:12px;font-weight:600;color:#526c56;border-bottom:1px solid #e9eee4}
.argo-page summary::-webkit-details-marker{display:none}
.argo-page .argo-expand summary svg{width:16px;height:16px;transition:transform .25s}
.argo-page .argo-expand[open] summary svg{transform:rotate(180deg)}
.argo-page .argo-expand[open] .argo-local-list{margin-top:14px}
.argo-page .argo-sidebar{display:none}
.argo-page .argo-toc{background:#fff;border:1px solid var(--ap-line);border-radius:20px;padding:24px 19px}
.argo-page .argo-overline{display:block;font-size:10px;letter-spacing:.16em;font-weight:650;color:#8e754f;line-height:1.6}
.argo-page .argo-toc h2{font-size:19px;font-weight:550;letter-spacing:-.025em;margin-top:7px;padding-inline:5px}
.argo-page .argo-toc>.argo-overline{padding-inline:5px}
.argo-page .argo-toc nav{display:grid;gap:4px;margin-top:18px;max-height:48vh;overflow:auto;scrollbar-width:thin}
.argo-page .argo-toc a{display:flex;gap:11px;padding:12px 10px;border-radius:10px;font-size:12px;line-height:1.7;color:#60716c;border:1px solid transparent;transition:background .2s,color .2s}
.argo-page .argo-toc a>span{font-size:10px;color:#9b9f93;margin-top:1px;flex-shrink:0}
.argo-page .argo-toc a.is-active{background:#f0f4ec;color:#2e5141;border-color:#e6ecdf}
.argo-page .argo-sidebar-help{padding:24px 12px 0}
.argo-page .argo-sidebar-help>svg{width:25px;height:25px;color:#a28658;stroke-width:1.3}
.argo-page .argo-sidebar-help p{font-size:15px;line-height:1.65;color:#60716c;margin-top:12px;max-width:230px}
.argo-page .argo-sidebar-help a{display:flex;align-items:center;gap:8px;font-size:12px;font-weight:600;margin-top:16px}
.argo-page .argo-sidebar-help a svg{width:15px;height:15px}
.argo-page .argo-page-figure{width:100%}
.argo-page .argo-card-with-photo{display:grid;gap:20px}
.argo-page .argo-card-body{min-width:0}
.argo-page .argo-section-photo{width:100%;margin:0}
@media(min-width:768px){.argo-page .argo-card-with-photo{grid-template-columns:minmax(0,1fr) minmax(200px,280px);align-items:start;gap:28px}}
.argo-page .argo-extra{min-width:0}
.argo-page .argo-faq-section{background:#edf1e9;border-block:1px solid #e3e9dc;padding:46px 0;scroll-margin-top:calc(var(--ap-header-offset) + 20px)}
.argo-page .argo-faq-grid{display:grid;gap:28px}
.argo-page .argo-faq-intro h2,.argo-page .argo-section-heading h2{font-size:30px;font-weight:550;line-height:1.15;letter-spacing:-.04em;margin-top:12px;text-wrap:balance}
.argo-page .argo-faq-intro p{font-size:14px;line-height:1.9;color:var(--ap-muted);margin-top:16px;max-width:310px}
.argo-page .argo-text-link{display:inline-flex;align-items:center;gap:9px;font-size:16px;font-weight:600;margin-top:20px}
.argo-page .argo-text-link svg{width:17px;height:17px;color:#6a805f}
.argo-page .argo-faq-list{display:grid;gap:10px;align-content:start;min-width:0}
.argo-page .argo-faq-item{background:#ffffffd9;border:1px solid #e0e6da;border-radius:15px;overflow:hidden;transition:background .25s,border-color .25s,box-shadow .25s}
.argo-page .argo-faq-item.is-open{background:#fff;border-color:#b9c9ab;box-shadow:0 5px 18px #263c2510}
.argo-page .argo-faq-item h3{font-size:inherit}
.argo-page .argo-faq-item button{display:flex;align-items:flex-start;gap:11px;width:100%;border:0;background:none;text-align:left;cursor:pointer;padding:20px 16px;font-size:14px;line-height:1.7;font-weight:550;color:var(--ap-ink)}
.argo-page .argo-faq-number{font-size:10px;line-height:2.4;color:#9c8967;flex-shrink:0;font-variant-numeric:tabular-nums}
.argo-page .argo-faq-item button>span:nth-child(2){flex:1;min-width:0}
.argo-page .argo-faq-toggle{display:grid;place-items:center;width:25px;height:25px;border-radius:50%;background:#edf2e8;color:#68815b;flex-shrink:0}
.argo-page .argo-faq-toggle svg{width:14px;height:14px;transition:transform .25s}
.argo-page .argo-faq-item.is-open .argo-faq-toggle svg{transform:rotate(180deg)}
.argo-page .argo-faq-panel{overflow:hidden}
.argo-page .argo-faq-answer{padding:0 18px 22px 40px;font-size:14px;line-height:1.95;color:var(--ap-muted);overflow-wrap:anywhere;white-space:pre-line}
.argo-page .argo-faq-answer ul{padding-left:18px;list-style:disc;margin-top:12px}
.argo-page .argo-faq-answer li+li{margin-top:8px}
.argo-page .argo-related-section{padding:44px 0}
.argo-page .argo-section-heading{display:flex;align-items:flex-end;justify-content:space-between;gap:20px;margin-bottom:23px}
.argo-page .argo-related-hint{display:none;align-items:center;gap:8px;font-size:12px;color:var(--ap-muted)}
.argo-page .argo-related-hint svg{width:15px;height:15px}
.argo-page .argo-related-grid{display:grid;gap:12px;grid-template-columns:repeat(2,minmax(0,1fr))}
.argo-page .argo-related-grid>div{min-width:0;height:100%}
.argo-page .argo-related-card{display:flex;flex-direction:column;height:100%;background:#fff;border:1px solid var(--ap-line);padding:18px;border-radius:17px;transition:border-color .25s,box-shadow .25s,transform .25s}
.argo-page .argo-related-top{display:flex;align-items:center;justify-content:space-between;color:#9a8462;font-size:10px;letter-spacing:.06em}
.argo-page .argo-related-top svg{width:17px;height:17px;color:#647963}
.argo-page .argo-related-card h3{font-size:18px;line-height:1.25;letter-spacing:-.025em;font-weight:550;margin-top:23px;overflow-wrap:anywhere}
.argo-page .argo-related-card p{display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;font-size:12px;line-height:1.8;color:var(--ap-muted);margin-top:10px}
.argo-page .argo-related-link{display:flex;align-items:center;gap:6px;font-size:11px;font-weight:600;padding-top:22px;margin-top:auto;color:#526e54}
.argo-page .argo-related-link svg{width:13px;height:13px}
.argo-page .argo-bottom-section{padding:0 0 40px}
.argo-page .argo-bottom-card{position:relative;overflow:hidden;background:linear-gradient(125deg,#24444d,#172d36);border-radius:23px;padding:30px 24px;color:#fff}
.argo-page .argo-bottom-card:after{content:'';position:absolute;width:230px;height:230px;border:1px solid #d0bf991a;border-radius:50%;right:-140px;top:-45px;pointer-events:none}
.argo-page .argo-bottom-card .argo-overline{color:#c8b68e}
.argo-page .argo-bottom-card h2{color:#fff;font-size:32px;line-height:1.13;font-weight:500;letter-spacing:-.04em;margin-top:15px}
.argo-page .argo-bottom-copy p{font-size:13px;color:#c4d1d2;margin-top:17px;line-height:1.8}
.argo-page .argo-actions-light .argo-button-primary{background:#e5d9be;color:#20383e;box-shadow:none}
.argo-page .argo-actions-light .argo-button-secondary{background:#ffffff08;border-color:#ffffff26;color:#f3f5ee}
.argo-page .argo-mobile-dock{position:fixed;left:0;right:0;bottom:0;z-index:40;display:flex;align-items:center;gap:10px;padding:12px 18px calc(12px + env(safe-area-inset-bottom,0px));background:#f9faf6f2;border-top:1px solid #dfe5d8;box-shadow:0 -5px 24px #1b33250c;backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px)}
.argo-page .argo-dock-copy{display:flex;align-items:center;gap:8px;margin-right:auto;min-width:0}
.argo-page .argo-dock-copy>div{display:grid;gap:4px}
.argo-page .argo-dock-copy>div>span{font-size:9px;color:#6e7d70;line-height:1.2}
.argo-page .argo-dock-copy strong{font-size:13px;font-weight:600;color:#283d33;white-space:nowrap}
.argo-page .argo-mobile-dock .argo-button{min-height:48px;padding:11px 15px;font-size:13px;border-radius:12px;gap:8px}
.argo-page .argo-mobile-dock .argo-button svg{width:16px;height:16px}
.argo-page .argo-dock-whatsapp{display:grid;place-items:center;flex-shrink:0;width:48px;height:48px;border:1px solid #cfddc8;background:#edf4e7;color:#4e7650;border-radius:12px}
@media(hover:hover){.argo-page .argo-button-primary:hover{background:#294852;box-shadow:0 7px 20px #172f3822}.argo-page .argo-button-secondary:hover{background:#fff;border-color:#b7c7b0}.argo-page .argo-actions-light .argo-button-primary:hover{background:#eee5d0}.argo-page .argo-actions-light .argo-button-secondary:hover{background:#ffffff14}.argo-page .argo-toc a:hover{background:#f6f8f2}.argo-page .argo-related-card:hover{transform:translateY(-4px);border-color:#b9c8ae;box-shadow:0 10px 30px #23372409}}
@media(max-width:1023px){.argo-page{padding-bottom:calc(90px + env(safe-area-inset-bottom,0px))}}
@media(max-width:600px){.argo-page .argo-actions{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:8px}.argo-page .argo-actions .argo-button{padding:13px 14px}.argo-page .argo-actions .argo-button-primary>span{display:grid;gap:2px;text-align:left;font-size:10px;font-weight:450}.argo-page .argo-actions .argo-button-primary strong{font-size:14px}.argo-page .argo-actions .argo-button-primary>svg:last-child:not(:first-child){display:none}.argo-page .argo-actions .argo-button-secondary{font-size:12px}.argo-page .argo-actions-light .argo-button-primary>span{font-size:10px}.argo-page .argo-actions-light .argo-button-primary strong{font-size:14px}}
@media(max-width:360px){.argo-page .argo-container{width:calc(100% - 28px)}.argo-page .argo-card{padding:19px}.argo-page .argo-dock-copy{display:none}.argo-page .argo-mobile-dock .argo-button{flex:1}.argo-page .argo-related-grid{grid-template-columns:1fr}.argo-page h1{font-size:32px}.argo-page .argo-actions .argo-button{padding-inline:11px}}
@media(min-width:640px){.argo-page .argo-container{width:min(1200px,calc(100% - 64px))}.argo-page .argo-hero{padding:30px 0 58px}.argo-page .argo-hero-lead{padding-bottom:36px}.argo-page .argo-hero-lead .argo-hero-grid{padding-top:36px}.argo-page .argo-lead{padding:12px 0 40px}.argo-page .argo-hero-grid{padding-top:45px}.argo-page .argo-card{padding:34px}.argo-page .argo-card h2{font-size:29px}.argo-page .argo-paragraph{font-size:16px}.argo-page .argo-local-list{grid-template-columns:repeat(2,minmax(0,1fr))}.argo-page .argo-area-list{grid-template-columns:repeat(3,minmax(0,1fr))}.argo-page .argo-faq-item button{font-size:15px;padding:23px}.argo-page .argo-faq-answer{padding-left:48px;padding-right:24px;font-size:15px}.argo-page .argo-related-card{padding:24px}.argo-page .argo-related-card h3{font-size:21px}.argo-page .argo-related-card p{font-size:13px}.argo-page .argo-related-hint{display:flex}.argo-page .argo-bottom-card{padding:40px}.argo-page .argo-bottom-card h2{font-size:40px}}
@media(min-width:1024px){.argo-page .argo-hero-grid{grid-template-columns:minmax(0,1fr) 310px;gap:64px;align-items:center}.argo-page .argo-hero-lead .argo-hero-grid{grid-template-columns:1fr}.argo-page .argo-hero-aside{display:block}.argo-page h1{font-size:clamp(45px,4.6vw,64px)}.argo-page .argo-hero-lead h1{font-size:clamp(36px,3.8vw,48px)}.argo-page .argo-lead{padding:16px 0 48px}.argo-page .argo-main{padding-block:58px 70px}.argo-page .argo-mobile-nav{display:none}.argo-page .argo-content-grid{grid-template-columns:minmax(0,1fr) 270px;gap:44px}.argo-page .argo-article{gap:25px}.argo-page .argo-card{padding:38px}.argo-page .argo-sidebar{display:block;position:sticky;top:calc(var(--ap-header-offset) + 20px);max-height:calc(100dvh - var(--ap-header-offset) - 36px);overflow-y:auto;padding-right:4px;scrollbar-width:thin}.argo-page .argo-faq-section{padding-block:68px}.argo-page .argo-faq-grid{grid-template-columns:minmax(0,.8fr) minmax(0,1.2fr);gap:80px}.argo-page .argo-faq-intro h2{font-size:38px}.argo-page .argo-related-section{padding-block:65px}.argo-page .argo-related-grid{grid-template-columns:repeat(4,minmax(0,1fr));gap:16px}.argo-page .argo-bottom-card{display:flex;align-items:center;justify-content:space-between;gap:30px;padding:48px}.argo-page .argo-bottom-card .argo-actions{flex-direction:column;margin:0;min-width:235px}.argo-page .argo-mobile-dock{display:none}.argo-page .argo-bottom-section{padding-bottom:60px}}
@media(prefers-reduced-motion:reduce){.argo-page *,.argo-page *:before,.argo-page *:after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}
`;
