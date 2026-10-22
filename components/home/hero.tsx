import { getImageProps } from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  FileText,
  HeartHandshake,
  MapPin,
  MessageCircle,
  Phone,
  Truck,
} from "lucide-react";
import { HeroParallax } from "@/components/home/hero-parallax";
import { heroImages, phone, phoneHref, whatsappHref } from "@/lib/site";

/** Server component: copy and the optimized picture are present in the first HTML. */
export function Hero() {
  const {
    props: { srcSet: desktopSrcSet },
  } = getImageProps({
    src: heroImages.desktop.src,
    alt: heroImages.alt,
    width: heroImages.desktop.width,
    height: heroImages.desktop.height,
    sizes: "100vw",
    priority: true,
  });

  const {
    props: { srcSet: mobileSrcSet, ...mobileImg },
  } = getImageProps({
    src: heroImages.mobile.src,
    alt: heroImages.alt,
    width: heroImages.mobile.width,
    height: heroImages.mobile.height,
    sizes: "100vw",
    priority: true,
  });

  return (
    <section className="argo-hh" aria-labelledby="argo-home-heading">
      <style>{HERO_STYLES}</style>

      <HeroParallax strength={10}>
        <picture className="argo-hh-picture">
          <source
            media="(min-width: 768px)"
            srcSet={desktopSrcSet}
            sizes="100vw"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            {...mobileImg}
            srcSet={mobileSrcSet}
            alt={heroImages.alt}
            className="argo-hh-image"
            fetchPriority="high"
            loading="eager"
            decoding="async"
          />
        </picture>
      </HeroParallax>

      <div className="argo-hh-wash" aria-hidden="true" />
      <div className="argo-hh-orbit" aria-hidden="true" />

      <div className="argo-hh-inner">
        <div className="argo-hh-topline">
          <div className="argo-hh-availability">
            <span className="argo-hh-dot" aria-hidden="true" />
            Alături de dumneavoastră, non-stop
          </div>
          <span className="argo-hh-location">
            <MapPin aria-hidden="true" />
            București & Ilfov
          </span>
        </div>

        <div className="argo-hh-copy">
          <p className="argo-hh-eyebrow">
            <span aria-hidden="true" />
            Agenția Funerară Argo
          </p>
          <h1 id="argo-home-heading">
            Servicii funerare,<span>cu grijă și respect.</span>
          </h1>
          <p className="argo-hh-description">
            Asistență funerară completă în București și Ilfov — acte, transport
            și ceremonie. Ne ocupăm de fiecare detaliu, cu discreție.
          </p>

          <div className="argo-hh-actions">
            <a
              href={phoneHref}
              className="argo-hh-call"
              aria-label={`Sunați Agenția Funerară Argo la ${phone}`}
            >
              <span className="argo-hh-call-icon">
                <Phone aria-hidden="true" />
              </span>
              <span className="argo-hh-call-copy">
                <span>Dispecerat non-stop · Sunați-ne</span>
                <strong>{phone}</strong>
              </span>
              <ArrowUpRight className="argo-hh-call-arrow" aria-hidden="true" />
            </a>
            <div className="argo-hh-secondary-actions">
              <Link
                href="/servicii-funerare-bucuresti"
                className="argo-hh-services"
              >
                Vedeți serviciile
                <ArrowUpRight aria-hidden="true" />
              </Link>
              <a href={whatsappHref} className="argo-hh-whatsapp">
                <MessageCircle aria-hidden="true" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="argo-hh-visual-space">
          <div className="argo-hh-note">
            <HeartHandshake aria-hidden="true" />
            <div>
              <span>Sprijin pentru familie</span>
              <p>Cu grijă. Pas cu pas.</p>
            </div>
          </div>
        </div>

        <div className="argo-hh-footer">
          <div className="argo-hh-service">
            <FileText aria-hidden="true" />
            <span>Acte și avize</span>
          </div>
          <div className="argo-hh-service">
            <Truck aria-hidden="true" />
            <span>Transport</span>
          </div>
          <div className="argo-hh-service">
            <HeartHandshake aria-hidden="true" />
            <span>Ceremonie</span>
          </div>
          <a
            href="#statistici"
            className="argo-hh-scroll"
            aria-label="Descoperiți mai multe despre Agenția Funerară Argo"
          >
            <span>Descoperiți</span>
            <span className="argo-hh-scroll-icon">
              <ArrowDown aria-hidden="true" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

const HERO_STYLES = `
.argo-hh{--hh-ink:#192f38;--hh-muted:#55686d;--hh-gold:#9b7949;--hh-header-height:72px;position:relative;isolation:isolate;overflow:hidden;background:#edf0e8;color:var(--hh-ink);border-bottom:1px solid #dee3d9;font-family:inherit;-webkit-font-smoothing:antialiased}
.argo-hh *{box-sizing:border-box}
.argo-hh :where(h1,p){margin:0}
.argo-hh a{color:inherit;text-decoration:none;-webkit-tap-highlight-color:transparent}
.argo-hh a:focus-visible{outline:3px solid #a88a55;outline-offset:5px}
.argo-hh svg{flex-shrink:0;width:20px;height:20px;stroke-width:1.6}
.argo-hh .argo-hh-picture{display:block;width:100%;height:100%}
.argo-hh .argo-hh-image{display:block;width:100%;height:100%;object-fit:cover;object-position:center bottom}
.argo-hh .argo-hh-wash{position:absolute;inset:0;pointer-events:none;background:linear-gradient(180deg,rgba(249,250,246,.98) 0%,rgba(249,250,246,.96) 29%,rgba(249,250,246,.89) 46%,rgba(246,248,241,.35) 67%,rgba(241,244,235,.08) 82%,rgba(241,244,235,.5) 100%)}
.argo-hh .argo-hh-orbit{position:absolute;right:-175px;top:80px;width:300px;height:300px;border:1px solid #9fae931c;border-radius:50%;box-shadow:0 0 0 38px #9fae9307,0 0 0 76px #9fae9304;pointer-events:none}
.argo-hh .argo-hh-inner{position:relative;z-index:1;width:min(1240px,calc(100% - 40px));margin-inline:auto;display:flex;flex-direction:column;min-height:max(760px,calc(100svh - var(--hh-header-height)));padding-block:23px 20px}
.argo-hh .argo-hh-topline{display:flex;align-items:center;justify-content:space-between;gap:16px}
.argo-hh .argo-hh-availability{display:inline-flex;align-items:center;gap:8px;width:fit-content;padding:9px 12px;background:#f7faf3c9;border:1px solid #dbe3d3;border-radius:999px;font-size:10px;font-weight:550;line-height:1.5;letter-spacing:.01em;color:#526749}
.argo-hh .argo-hh-dot{display:block;width:5px;height:5px;flex-shrink:0;border-radius:50%;background:#819d71;box-shadow:0 0 0 4px #819d7110}
.argo-hh .argo-hh-location{display:none;align-items:center;gap:6px;color:#5f7165;font-size:11px}
.argo-hh .argo-hh-location svg{width:14px;height:14px}
.argo-hh .argo-hh-copy{max-width:650px;margin-top:28px}
.argo-hh .argo-hh-eyebrow{display:flex;align-items:center;gap:10px;color:var(--hh-gold);font-size:10px;line-height:1.6;letter-spacing:.14em;font-weight:600;text-transform:uppercase}
.argo-hh .argo-hh-eyebrow>span{display:block;width:24px;height:1px;background:#ab8e5c}
.argo-hh h1{margin-top:15px;font-family:inherit;font-size:clamp(34px,8.8vw,58px);line-height:1.12;letter-spacing:-.048em;font-weight:550;max-width:680px;text-wrap:balance;overflow-wrap:break-word}
.argo-hh h1>span{display:block;color:#7c694c;font-family:Georgia,'Times New Roman',serif;font-style:italic;font-weight:400;letter-spacing:-.055em;font-size:1.06em;line-height:1.18;margin-top:3px}
.argo-hh .argo-hh-description{max-width:460px;margin-top:20px;font-size:15px;line-height:1.85;color:var(--hh-muted);letter-spacing:-.01em}
.argo-hh .argo-hh-actions{max-width:390px;margin-top:25px}
.argo-hh .argo-hh-call{display:flex;align-items:center;gap:13px;padding:13px 16px;background:#1b3540;color:#fff;border:1px solid #26444e;border-radius:15px;min-height:70px;box-shadow:0 8px 25px #19323b16;transition:background .2s,transform .2s,box-shadow .2s}
.argo-hh .argo-hh-call-icon{width:37px;height:37px;display:grid;place-items:center;flex-shrink:0;background:#ffffff0d;border:1px solid #ffffff15;border-radius:11px}
.argo-hh .argo-hh-call-icon svg{width:18px;height:18px;color:#e6dec8}
.argo-hh .argo-hh-call-copy{display:grid;gap:4px}
.argo-hh .argo-hh-call-copy>span{font-size:10px;line-height:1.4;font-weight:450;letter-spacing:.015em;color:#c8d5d5}
.argo-hh .argo-hh-call-copy strong{font-size:22px;line-height:1.1;font-weight:550;letter-spacing:-.025em;font-variant-numeric:tabular-nums}
.argo-hh .argo-hh-call-arrow{margin-left:auto;width:19px;height:19px;color:#d5c6a5}
.argo-hh .argo-hh-secondary-actions{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:9px;margin-top:10px}
.argo-hh .argo-hh-services,.argo-hh .argo-hh-whatsapp{display:flex;align-items:center;justify-content:center;gap:8px;min-height:48px;padding:11px 13px;border:1px solid #d5ded0;background:#ffffffb8;border-radius:12px;font-size:12px;font-weight:550;line-height:1.5;transition:background .2s,border-color .2s,transform .2s}
.argo-hh .argo-hh-services{justify-content:space-between}
.argo-hh .argo-hh-services svg{width:16px;height:16px;color:#7c866d}
.argo-hh .argo-hh-whatsapp{color:#4f7050}
.argo-hh .argo-hh-whatsapp svg{width:17px;height:17px}
.argo-hh .argo-hh-visual-space{flex:1;min-height:145px;display:flex;align-items:flex-end;padding-block:22px}
.argo-hh .argo-hh-note{display:flex;align-items:center;gap:10px;width:fit-content;max-width:250px;padding:12px 15px;border:1px solid #ffffffb3;border-radius:14px;background:#f9fbf3e6;box-shadow:0 5px 24px #1f392209;backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px)}
.argo-hh .argo-hh-note>svg{width:26px;height:26px;color:#8e7a54;stroke-width:1.2}
.argo-hh .argo-hh-note span{display:block;font-size:9px;line-height:1.5;letter-spacing:.035em;color:#77816d}
.argo-hh .argo-hh-note p{font-size:13px;line-height:1.5;letter-spacing:-.02em;font-weight:550;margin-top:2px;color:#354b3c}
.argo-hh .argo-hh-footer{display:grid;grid-template-columns:repeat(3,minmax(0,1fr)) 39px;align-items:center;gap:6px;padding:13px 12px;border:1px solid #ffffffb8;border-radius:16px;background:#f9faf4e8;box-shadow:0 6px 30px #1b35210a;backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px)}
.argo-hh .argo-hh-service{display:flex;flex-direction:column;gap:6px;align-items:flex-start;min-width:0;padding-left:5px}
.argo-hh .argo-hh-service svg{width:17px;height:17px;color:#809070;stroke-width:1.4}
.argo-hh .argo-hh-service>span{font-size:10px;line-height:1.4;font-weight:550;color:#55684e}
.argo-hh .argo-hh-scroll{display:flex;align-items:center;justify-content:flex-end;gap:12px;min-height:44px}
.argo-hh .argo-hh-scroll>span:first-child{display:none}
.argo-hh .argo-hh-scroll-icon{display:grid;place-items:center;width:36px;height:36px;border:1px solid #d6dfcc;border-radius:50%;background:#eaf0e4;color:#59734e}
.argo-hh .argo-hh-scroll-icon svg{width:15px;height:15px;animation:argo-hh-nudge 3s ease-in-out 2}
@keyframes argo-hh-nudge{0%,65%,100%{transform:translateY(0)}80%{transform:translateY(3px)}}
@media(hover:hover){.argo-hh .argo-hh-call:hover{background:#294b56;box-shadow:0 10px 28px #19323b25;transform:translateY(-2px)}.argo-hh .argo-hh-services:hover,.argo-hh .argo-hh-whatsapp:hover{background:#fff;border-color:#aebfa2;transform:translateY(-1px)}}
.argo-hh .argo-hh-call:active,.argo-hh .argo-hh-services:active,.argo-hh .argo-hh-whatsapp:active{transform:scale(.985)}
@media(max-width:359px){.argo-hh .argo-hh-inner{width:calc(100% - 30px);padding-top:19px}.argo-hh h1{font-size:31px}.argo-hh .argo-hh-copy{margin-top:24px}.argo-hh .argo-hh-description{font-size:14px}.argo-hh .argo-hh-availability{font-size:9px}.argo-hh .argo-hh-call-copy strong{font-size:21px}.argo-hh .argo-hh-service>span{font-size:9px}.argo-hh .argo-hh-footer{padding-inline:10px}}
@media(min-width:640px){.argo-hh .argo-hh-inner{width:min(1240px,calc(100% - 64px));padding-top:30px}.argo-hh .argo-hh-location{display:flex}.argo-hh .argo-hh-availability{font-size:11px}.argo-hh .argo-hh-copy{margin-top:36px}.argo-hh .argo-hh-eyebrow{font-size:11px}.argo-hh .argo-hh-description{font-size:16px}.argo-hh .argo-hh-service{flex-direction:row;align-items:center;gap:10px}.argo-hh .argo-hh-service>span{font-size:12px}.argo-hh .argo-hh-service svg{width:20px;height:20px}.argo-hh .argo-hh-footer{padding:18px 22px;gap:16px}.argo-hh .argo-hh-note{padding:15px 19px}.argo-hh .argo-hh-note p{font-size:15px}}
@media(min-width:768px){.argo-hh{--hh-header-height:80px}.argo-hh .argo-hh-image{object-position:right center}.argo-hh .argo-hh-wash{background:linear-gradient(90deg,rgba(249,250,246,.98) 0%,rgba(249,250,246,.94) 24%,rgba(249,250,246,.78) 43%,rgba(249,250,246,.2) 66%,rgba(249,250,246,.04) 100%),linear-gradient(0deg,rgba(240,244,235,.75) 0%,transparent 25%)}.argo-hh .argo-hh-inner{min-height:clamp(720px,calc(100svh - var(--hh-header-height)),880px);padding-bottom:25px}.argo-hh .argo-hh-copy{margin-top:clamp(44px,7vh,90px);max-width:610px}.argo-hh h1{font-size:clamp(46px,5vw,72px)}.argo-hh .argo-hh-description{max-width:450px}.argo-hh .argo-hh-visual-space{min-height:70px;justify-content:flex-end}.argo-hh .argo-hh-note{margin-right:15px}.argo-hh .argo-hh-footer{grid-template-columns:repeat(3,minmax(0,1fr)) auto}.argo-hh .argo-hh-scroll>span:first-child{display:block;font-size:10px;font-weight:550;letter-spacing:.04em;color:#718166}.argo-hh .argo-hh-scroll-icon{width:39px;height:39px}.argo-hh .argo-hh-orbit{top:60px;right:-150px;width:550px;height:550px}}
@media(min-width:1100px){.argo-hh .argo-hh-inner{width:min(1240px,calc(100% - 96px))}.argo-hh .argo-hh-copy{max-width:670px}.argo-hh .argo-hh-description{max-width:470px;font-size:17px}.argo-hh .argo-hh-actions{max-width:410px}.argo-hh .argo-hh-call{min-height:76px;padding:14px 19px}.argo-hh .argo-hh-call-copy strong{font-size:25px}.argo-hh .argo-hh-footer{padding:20px 28px}.argo-hh .argo-hh-service>span{font-size:13px}}
@media(prefers-reduced-motion:reduce){.argo-hh *,.argo-hh *:before,.argo-hh *:after{animation:none!important;transition:none!important}.argo-hh .argo-hh-call:active,.argo-hh .argo-hh-services:active,.argo-hh .argo-hh-whatsapp:active,.argo-hh .argo-hh-call:hover,.argo-hh .argo-hh-services:hover,.argo-hh .argo-hh-whatsapp:hover{transform:none}}
`;
