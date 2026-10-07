/** Unique on-page SEO content for every inner slug. Meta titles/descriptions match the client brief. */

export type PageSection = {
  heading: string
  paragraphs: string[]
  bullets?: string[]
}

export type PageFaq = {
  question: string
  answer: string
}

export type PageContent = {
  slug: string
  title: string
  metaTitle: string
  description: string
  eyebrow: string
  h1: string
  intro: string
  sections: PageSection[]
  faqs: PageFaq[]
  relatedSlugs: string[]
  image?: string
  breadcrumbLabel: string
  isSector?: boolean
}

export const pages: Record<string, PageContent> = {
  'agentia-funerara-argo': {
    slug: 'agentia-funerara-argo',
    title: 'Agenția Funerară Argo',
    metaTitle: 'Agentia Funerara Argo ☎️ 0785.165.165',
    description:
      'Agentia Funerara Argo ofera servicii funerare complete in Bucuresti si Ilfov. Informatii la ☎️ 0785.165.165',
    eyebrow: 'Despre noi',
    breadcrumbLabel: 'Despre noi',
    h1: 'Agenția Funerară Argo — sprijin cu respect în București și Ilfov',
    intro:
      'De peste 20 de ani, Agenția Funerară Argo însoțește familiile din București și județul Ilfov în momentele cele mai grele. Oferim servicii funerare complete, cu discreție, calm și profesionalism — de la primul apel până la încheierea ceremoniei.',
    sections: [
      {
        heading: 'Cine suntem și cum lucrăm',
        paragraphs: [
          'Argo este o firmă de pompe funebre autorizată, dedicată familiilor care au nevoie de claritate și sprijin real. Ascultăm, explicăm fiecare pas și preluăm sarcinile administrative și logistice, astfel încât dumneavoastră să vă puteți concentra pe cei dragi.',
          'Acționăm non-stop, 24 de ore din 24, în toate cele 6 sectoare ale Capitalei și în localitățile din Ilfov. Un singur apel la 0785.165.165 este suficient pentru a începe organizarea.',
        ],
        bullets: [
          'Asistență funerară completă, disponibilă non-stop',
          'Acoperire în București (Sector 1–6) și județul Ilfov',
          'Transport funerar autorizat și repatriere internațională',
          'Sprijin pentru documente, avize și toate formalitățile',
        ],
      },
      {
        heading: 'Valori care ne ghidează',
        paragraphs: [
          'Respectul față de familie și față de memoria celui trecut în neființă stă la baza fiecărei acțiuni. Lucrăm fără presiune comercială, cu prețuri transparente și soluții adaptate bugetului și tradițiilor familiei.',
          'Fie că organizați o înmormântare tradițională, o incinerare sau o repatrierea decedatului din străinătate, echipa noastră vă rămâne alături cu empatie și experiență.',
        ],
      },
    ],
    faqs: [
      {
        question: 'În ce zone interveniți?',
        answer:
          'Acoperim București — toate cele 6 sectoare — și întregul județ Ilfov. Pentru repatriere, coordonăm transportul funerar internațional oriunde este nevoie.',
      },
      {
        question: 'Cât de rapid răspundeți?',
        answer:
          'Dispeceratul Argo este disponibil non-stop. La apel, vă oferim o primă evaluare și, dacă este necesar, deplasare rapidă la domiciliu sau la locul indicat.',
      },
    ],
    relatedSlugs: [
      'servicii-funerare-bucuresti',
      'preturi-servicii-funerare-bucuresti',
      'firma-pompe-funebre',
      'servicii-funerare-judetul-ilfov',
    ],
  },

  'preturi-servicii-funerare-bucuresti': {
    slug: 'preturi-servicii-funerare-bucuresti',
    title: 'Preturi Servicii Funerare Bucuresti',
    metaTitle: 'Preturi Servicii Funerare Bucuresti ☎️ 0785.165.165',
    description:
      'Servicii funerare complete in Bucuresti. Preturi transparente, pachete avantajoase si asistenta 24 din 24. Oferte la ☎️ 0785.165.165',
    eyebrow: 'Prețuri transparente',
    breadcrumbLabel: 'Prețuri',
    h1: 'Prețuri servicii funerare București — pachete clare, fără surprize',
    intro:
      'Pachete funerare complete la cele mai accesibile prețuri, inclusiv cu talonul de pensie. Mai jos găsiți ofertele de înhumare (0–6.700 Ron) și incinerare (900 Ron). Orice pachet poate fi adaptat bugetului și dorințelor familiei.',
    image: 'https://pompe-funebrebucuresti.ro/wp-content/uploads/2024/01/pachet-funerar-ieftin.jpg',
    sections: [
      {
        heading: 'Pachete cu talonul de pensie',
        paragraphs: [
          'Puteți opta pentru unul dintre pachetele prezentate sau putem configura un pachet personalizat cu servicii și produse funerare, ținând cont de buget, necesități și tradiții.',
          'Asistența este disponibilă 24 din 24. Sunăți la 0785.165.165 pentru o ofertă rapidă.',
        ],
        bullets: [
          'Înhumare de la 0 Ron cu talonul de pensie',
          'Pachete 900 · 1.300 · 1.600 · 1.900 · 2.400 · 2.700 · 6.700 Ron',
          'Incinerare 900 Ron cu talonul de pensie',
          'Consultanță și personalizare, fără costuri ascunse',
        ],
      },
      {
        heading: 'Ce influențează prețul final',
        paragraphs: [
          'Costul unei ceremonii funerare depinde de tipul sicriului, distanța de transport, necesitatea depunerii la capelă, coroanele alese și dacă este vorba de înmormântare sau incinerare. Vă ghidăm pas cu pas, ca să știți exact ce plătiți.',
          'Pentru familii care doresc o soluție rapidă și clară, vă recomandăm să începeți cu unul dintre pachetele standard și să ajustăm împreună detaliile.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Ce înseamnă „cu talonul de pensie”?',
        answer:
          'Pachetele pot fi achitate folosind ajutorul de deces aferent talonului de pensie, conform legislației. Vă explicăm diferența de preț și actele necesare la telefon.',
      },
      {
        question: 'Pot solicita o ofertă pe telefon?',
        answer:
          'Da. Apelați 0785.165.165 sau scrieți pe WhatsApp. În câteva minute vă oferim o estimare și opțiuni potrivite familiei dumneavoastră.',
      },
    ],
    relatedSlugs: [
      'servicii-funerare-bucuresti',
      'pompe-funebre-bucuresti',
      'firma-pompe-funebre',
      'servicii-funerare-sector-1',
    ],
  },

  'servicii-funerare-bucuresti': {
    slug: 'servicii-funerare-bucuresti',
    title: 'Servicii Funerare Bucuresti',
    metaTitle: 'Servicii Funerare Bucuresti ☎️ 0785.165.165',
    description:
      'Servicii funerare non stop in Bucuresti. Sicrie, transport, coroane si pachete accesibile. Asistenta ☎️ 0785.165.165',
    eyebrow: 'Servicii complete',
    breadcrumbLabel: 'Servicii',
    h1: 'Servicii funerare București — organizare completă, non-stop',
    intro:
      'Oferim servicii funerare non-stop în București: organizare înmormântare și incinerare, transport autorizat, sicrie, coroane, pachete accesibile și întocmire documente. Un apel la 0785.165.165 pune în mișcare întreaga echipă Argo.',
    sections: [
      {
        heading: 'Ce includ serviciile noastre',
        paragraphs: [
          'De la preluarea de la domiciliu sau spital până la procesiune și depunere la capelă, ne ocupăm de fiecare detaliu. Lucrăm cu personal calificat și mijloace de transport special autorizate.',
          'Familiile pot alege pachete complete sau servicii punctuale — transport, acte, produse funerare — în funcție de nevoi.',
        ],
        bullets: [
          'Organizare înmormântare și incinerare',
          'Întocmire documente, avize și autorizații',
          'Transport funerar și depunere la capelă',
          'Sicrie, coroane, jerbe și pachete funerare',
        ],
      },
      {
        heading: 'Acoperire locală și urgențe',
        paragraphs: [
          'Intervenim în toate sectoarele Bucureștiului și în Ilfov. Pentru urgențe nocturne sau de weekend, dispeceratul rămâne deschis — același număr, același nivel de atenție.',
          'Dacă decedatul se află în străinătate, consultați pagina de repatriere; coordonăm documentele și transportul internațional.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Organizați și incinerări?',
        answer:
          'Da. Vă ajutăm cu programarea la crematoriu, transportul, urna și toate formalitățile aferente, cu respect față de dorințele familiei.',
      },
      {
        question: 'Cât durează organizarea?',
        answer:
          'Depinde de tipul ceremoniei și de documentele necesare. În multe cazuri putem începe imediat după primul apel și vă ținem la curent cu fiecare etapă.',
      },
    ],
    relatedSlugs: [
      'preturi-servicii-funerare-bucuresti',
      'pompe-funebre-bucuresti',
      'repatriere-decedati-romania',
      'servicii-funerare-sector-3',
    ],
  },

  'pompe-funebre-bucuresti': {
    slug: 'pompe-funebre-bucuresti',
    title: 'Pompe Funebre Bucuresti',
    metaTitle: 'Pompe Funebre Bucuresti ☎️ 0785.165.165',
    description:
      'Pompe funebre complete in Bucuresti. Organizare procesiuni de inhumare si incinerare. Consiliere ☎️ 0785.165.165',
    eyebrow: 'Produse funerare',
    breadcrumbLabel: 'Produse',
    h1: 'Pompe funebre București — produse și organizare completă',
    intro:
      'Agenția Funerară Argo oferă pompe funebre complete în București: sicrie, coroane, accesorii, organizare de procesiuni de înhumare și incinerare. Vă consiliem la 0785.165.165 pentru alegerea potrivită familiei dumneavoastră.',
    sections: [
      {
        heading: 'Produse funerare pe care le puteți alege',
        paragraphs: [
          'Gama noastră include sicrie din lemn de diferite tipuri și finisaje, coroane și jerbe florale, batiste, prosoape, colivă și elemente pentru pomană. Vă ajutăm să combinați produsele într-un pachet coerent, fără cheltuieli inutile.',
          'Pentru familii care doresc o soluție rapidă, pachetele Argo includ deja produsele esențiale; restul se adaugă la cerere.',
        ],
        bullets: [
          'Sicrie standard și premium',
          'Coroane, jerbe și aranjamente florale',
          'Accesorii: batiste, prosoape, lumânări',
          'Pachete funerare complete, gata de organizare',
        ],
      },
      {
        heading: 'Procesiuni de înhumare și incinerare',
        paragraphs: [
          'Pe lângă produse, organizăm procesiunea funerară: transport, depunere la capelă, coordonare cu biserica sau crematoriul și asistență pe tot parcursul ceremoniei.',
          'Consilierea este gratuită — sunați pentru a afla ce produse și servicii se potrivesc situației dumneavoastră.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Pot vedea sicriele înainte de a decide?',
        answer:
          'Da. Vă prezentăm opțiunile disponibile (inclusiv foto și detalii de material) și vă ghidăm spre alegerea potrivită bugetului și tradiției familiei.',
      },
      {
        question: 'Livrați produsele în toată Capitala?',
        answer:
          'Da. Livrăm și organizăm în toate sectoarele Bucureștiului și în Ilfov, în cadrul serviciilor funerare Argo.',
      },
    ],
    relatedSlugs: [
      'servicii-funerare-bucuresti',
      'preturi-servicii-funerare-bucuresti',
      'servicii-funerare-sector-2',
      'firma-pompe-funebre',
    ],
  },

  'repatriere-decedati-romania': {
    slug: 'repatriere-decedati-romania',
    title: 'Repatriere Decedati Romania',
    metaTitle: 'Repatriere Decedati Romania ☎️ +40785.165.165',
    description:
      'Repatriere decedati in Romania. Transport funerar international rapid si complet. Intocmire acte si asistenta ☎️ +40785.165.165',
    eyebrow: 'Repatriere internațională',
    breadcrumbLabel: 'Repatriere',
    h1: 'Repatriere decedăți România — transport funerar internațional',
    intro:
      'Agenția Funerară Argo asigură repatrierea decedăților în România: transport funerar internațional, întocmire acte, coordonare cu autorități și consulate. Asistență dedicată la +40785.165.165.',
    sections: [
      {
        heading: 'Cum se desfășoară repatrierea',
        paragraphs: [
          'Repatrierea unui decedat din străinătate implică documente medicale, certificate, autorizații de transport și, uneori, colaborare cu ambasade sau consulate. Noi preluăm aceste demersuri și vă ținem la curent la fiecare etapă.',
          'Transportul se face cu mijloace specializate, respectând legislația țării de plecare și a României. La sosire, putem continua cu organizarea ceremoniei în București sau Ilfov.',
        ],
        bullets: [
          'Coordonare cu autorități și consulate',
          'Transport funerar internațional autorizat',
          'Întocmirea documentelor necesare',
          'Asistență pentru familie, de la primul apel',
        ],
      },
      {
        heading: 'Când să ne contactați',
        paragraphs: [
          'Contactați-ne imediat ce aflați vestea, chiar dacă încă sunteți în străinătate. Cu cât începem mai devreme, cu atât procedurile curg mai rapid și cu mai puțin stres pentru familie.',
          'Numărul dedicat pentru repatriere: +40785.165.165 (același dispecerat non-stop).',
        ],
      },
    ],
    faqs: [
      {
        question: 'Din ce țări puteți aduce decedatul?',
        answer:
          'Coordonăm repatrierea din majoritatea țărilor europene și din alte destinații, în funcție de reglementările locale. Spuneți-ne țara și orașul — verificăm rapid pașii concreți.',
      },
      {
        question: 'Cât durează o repatriere?',
        answer:
          'Durata variază după țară, tipul documentelor și disponibilitatea transportului. Vă oferim o estimare realistă după prima discuție.',
      },
    ],
    relatedSlugs: [
      'servicii-funerare-bucuresti',
      'firma-pompe-funebre',
      'agentia-funerara-argo',
      'preturi-servicii-funerare-bucuresti',
    ],
  },

  'informatii-servicii-funerare': {
    slug: 'informatii-servicii-funerare',
    title: 'Informatii Servicii Funerare Bucuresti',
    metaTitle: 'Informatii Servicii Funerare Bucuresti ☎️ 0785.165.165',
    description:
      'Ghid cu sfaturi utile despre demersuri funerare, drepturi, ajutoare deces si datini. Informatii clare de la specialisti ☎️ 0785.165.165',
    eyebrow: 'Ghidul familiei',
    breadcrumbLabel: 'Blog',
    h1: 'Informații servicii funerare București — ghid clar pentru familie',
    intro:
      'Acest ghid reunește sfaturi practice despre demersuri funerare, drepturi, ajutorul de deces și datini. Informațiile sunt oferite de specialiștii Agenției Funerare Argo — pentru detalii personalizate, sunați la 0785.165.165.',
    sections: [
      {
        heading: 'Acte și demersuri funerare',
        paragraphs: [
          'După un deces, familia are nevoie de certificatul medical constatator, certificatul de deces de la primărie și, după caz, autorizații pentru transport sau incinerare. Vă ghidăm prin fiecare document, ca să nu pierdeți timp prețios.',
          'Dacă decesul a avut loc în spital, procedura diferă ușor față de decesul la domiciliu — vă explicăm diferențele la telefon și vă însoțim la instituțiile necesare.',
        ],
        bullets: [
          'Certificat medical și certificat de deces',
          'Autorizații pentru transport și capelă',
          'Pași pentru înmormântare sau incinerare',
          'Sprijin la instituțiile publice',
        ],
      },
      {
        heading: 'Ajutorul de deces și drepturile familiei',
        paragraphs: [
          'În România, familiile pot beneficia de ajutor de deces, în condițiile legii. Vă informăm ce acte sunt necesare și cum se depune cererea, fără a înlocui consultanța oficială a caselor de pensii sau a angajatorului.',
          'Dreptul la o ceremonie demnă nu depinde de buget: avem pachete accesibile și soluții adaptate fiecărei situații.',
        ],
      },
      {
        heading: 'Datini și tradiții, explicate cu respect',
        paragraphs: [
          'Multe familii doresc să păstreze datinile: priveghi, pomană, colivă, prosoape și batiste. Vă ajutăm să le integrați în organizare, fără a complica inutil demersurile.',
          'Dacă aveți întrebări despre ce este obligatoriu și ce este opțional, specialiștii noștri vă răspund clar și cu empatie.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Unde găsesc ajutor practic, nu doar informații?',
        answer:
          'Acest ghid este un punct de plecare. Pentru organizare concretă, apelați dispeceratul Argo la 0785.165.165 — intervenim non-stop în București și Ilfov.',
      },
      {
        question: 'Publicați articole noi pe blog?',
        answer:
          'Da, vom adăuga treptat articole detaliate. Între timp, pagina de contact și serviciile noastre rămân principalele canale de sprijin.',
      },
    ],
    relatedSlugs: [
      'servicii-funerare-bucuresti',
      'preturi-servicii-funerare-bucuresti',
      'firma-pompe-funebre',
      'agentia-funerara-argo',
    ],
  },

  'firma-pompe-funebre': {
    slug: 'firma-pompe-funebre',
    title: 'Firma Pompe Funebre Bucuresti',
    metaTitle: 'Firma Pompe Funebre Bucuresti ☎️ 0785.165.165',
    description:
      'Firma de pompe funebre din Bucuresti. Servicii, produse, pachete accesibile si sprijin dedicat. Contactati-ne ☎️ 0785.165.165',
    eyebrow: 'Contact',
    breadcrumbLabel: 'Contact',
    h1: 'Firma de pompe funebre București — contactați Agenția Argo',
    intro:
      'Agenția Funerară Argo este firma de pompe funebre din București pe care o puteți contacta non-stop. Oferim servicii, produse și pachete accesibile, cu sprijin dedicat. Apelați 0785.165.165 sau scrieți pe WhatsApp.',
    sections: [
      {
        heading: 'Cum ne contactați',
        paragraphs: [
          'Cel mai rapid canal este telefonul: 0785.165.165. Dispeceratul răspunde 24/7, inclusiv noaptea și în weekend. Pentru mesaje scurte sau fotografii de documente, folosiți WhatsApp pe același număr.',
          'Spuneți-ne zona (sector sau localitate din Ilfov) și situația — vă ghidăm imediat spre pașii următori.',
        ],
        bullets: [
          'Telefon / WhatsApp: 0785.165.165',
          'Dispecerat non-stop, București și Ilfov',
          'Pachete funerare accesibile',
          'Sprijin pentru acte, transport și ceremonie',
        ],
      },
      {
        heading: 'Zone deservite',
        paragraphs: [
          'Intervenim în Sector 1, 2, 3, 4, 5, 6 și în tot județul Ilfov. Fiecare zonă are o pagină dedicată cu detalii locale — alegeți sectorul din meniu sau din lista de mai jos.',
          'Pentru repatrierea din străinătate, folosiți același număr: +40785.165.165.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Aveți sediu cu program de vizitare?',
        answer:
          'Pentru urgențe, intervenim la telefon și la fața locului. Detaliile de întâlnire le stabilim odată cu organizarea — prioritatea este sprijinul rapid pentru familie.',
      },
      {
        question: 'Pot solicita o ofertă fără a mă angaja?',
        answer:
          'Da. Prima consultație este informativă. Vă prezentăm opțiunile și prețurile, iar dumneavoastră decideți în ritmul potrivit.',
      },
    ],
    relatedSlugs: [
      'servicii-funerare-sector-1',
      'servicii-funerare-sector-3',
      'servicii-funerare-judetul-ilfov',
      'servicii-funerare-bucuresti',
    ],
  },

  'servicii-funerare-sector-1': {
    slug: 'servicii-funerare-sector-1',
    title: 'Servicii Funerare Sector 1',
    metaTitle: 'Servicii Funerare Sector 1 ☎️ 0785.165.165',
    description:
      'Servicii funerare in Sector 1 Bucuresti. Preturi transparente, pachete accesibile si asistenta non stop. Contact ☎️ 0785.165.165',
    eyebrow: 'București · Sector 1',
    breadcrumbLabel: 'Sector 1',
    isSector: true,
    h1: 'Servicii funerare Sector 1 București — asistență non-stop',
    intro:
      'Agenția Funerară Argo oferă servicii funerare în Sector 1 București: prețuri transparente, pachete accesibile și asistență non-stop. Deplasare rapidă în zone precum Dorobanți, Aviatorilor, Floreasca, Primăverii sau Băneasa. Contact: 0785.165.165.',
    sections: [
      {
        heading: 'Pompe funebre în Sector 1',
        paragraphs: [
          'Sectorul 1 reunește cartiere cu trafic intens și instituții medicale importante. Știm cum să organizăm preluarea, transportul și documentele fără a adăuga stres familiei.',
          'Vă oferim pachete funerare cu costuri clare — de la soluții esențiale la ceremonii complete — și consultanță gratuită la telefon.',
        ],
        bullets: [
          'Deplasare rapidă în Sector 1',
          'Prețuri transparente, fără costuri ascunse',
          'Pachete funerare accesibile',
          'Asistență non-stop, 24/7',
        ],
      },
      {
        heading: 'Ce putem organiza local',
        paragraphs: [
          'Transport funerar autorizat, întocmire acte, depunere la capelă, sicrie și coroane — totul coordonat dintr-un singur loc. Dacă familia locuiește în Ilfov sau în alt sector, putem adapta traseul ceremoniei.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Cât de repede ajungeți în Sector 1?',
        answer:
          'Dispeceratul mobilizează echipa imediat după apel. În condiții normale, intervenim rapid în tot Sectorul 1; confirmați adresa la 0785.165.165.',
      },
      {
        question: 'Aveți pachete pentru Sector 1?',
        answer:
          'Da. Aceleași pachete transparente ca în restul Capitalei, cu transport și organizare adaptate zonei dumneavoastră.',
      },
    ],
    relatedSlugs: [
      'servicii-funerare-sector-2',
      'servicii-funerare-sector-6',
      'preturi-servicii-funerare-bucuresti',
      'firma-pompe-funebre',
    ],
  },

  'servicii-funerare-sector-2': {
    slug: 'servicii-funerare-sector-2',
    title: 'Servicii Funerare Sector 2',
    metaTitle: 'Servicii Funerare Sector 2 ☎️ 0785.165.165',
    description:
      'Servicii funerare in Sector 2 Bucuresti. Sicrie, batiste, prosoape, pomana la preturi accesibile. Info la ☎️ 0785.165.165',
    eyebrow: 'București · Sector 2',
    breadcrumbLabel: 'Sector 2',
    isSector: true,
    h1: 'Servicii funerare Sector 2 — sicrie, pomană și produse accesibile',
    intro:
      'În Sector 2 București, Argo asigură servicii funerare complete: sicrie, batiste, prosoape, pomană și organizare ceremonie, la prețuri accesibile. Acoperim cartiere precum Colentina, Tei, Pantelimon, Obor sau Ștefan cel Mare. Info: 0785.165.165.',
    sections: [
      {
        heading: 'Produse funerare pentru familiile din Sector 2',
        paragraphs: [
          'Multe familii din Sector 2 doresc o ceremonie tradițională, cu pomană și accesorii. Vă ajutăm să alegeți sicriul, batistele, prosoapele și elementele de pomană fără a depăși bugetul.',
          'Livrăm și organizăm local, cu transport autorizat și personal dedicat.',
        ],
        bullets: [
          'Sicrie la prețuri accesibile',
          'Batiste, prosoape și accesorii pentru pomană',
          'Organizare înmormântare sau incinerare',
          'Consiliere rapidă la telefon',
        ],
      },
      {
        heading: 'Sprijin de la primul apel',
        paragraphs: [
          'Un apel la 0785.165.165 este suficient pentru a începe: aflăm situația, propunem un pachet și ne deplasăm dacă este nevoie. Lucrăm non-stop, inclusiv în weekend.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Includeți pomana în pachet?',
        answer:
          'Da, pachetele tradiționale pot include elemente pentru pomană. Vă spunem exact ce este inclus și ce se poate adăuga.',
      },
      {
        question: 'Livrați produse doar în Sector 2?',
        answer:
          'Nu — livrăm în toată Capitala și Ilfov. Sectorul 2 este însă o zonă în care intervenim frecvent și rapid.',
      },
    ],
    relatedSlugs: [
      'pompe-funebre-bucuresti',
      'servicii-funerare-sector-1',
      'servicii-funerare-sector-3',
      'preturi-servicii-funerare-bucuresti',
    ],
  },

  'servicii-funerare-sector-3': {
    slug: 'servicii-funerare-sector-3',
    title: 'Servicii Funerare Sector 3',
    metaTitle: 'Servicii Funerare Sector 3 ☎️ 0785.165.165',
    description:
      'Servicii funerare in Sector 3 Bucuresti. Consiliere, intocmire documente si avize. Consultanta la ☎️ 0785.165.165',
    eyebrow: 'București · Sector 3',
    breadcrumbLabel: 'Sector 3',
    isSector: true,
    h1: 'Servicii funerare Sector 3 — consiliere și întocmire documente',
    intro:
      'Pentru familiile din Sector 3 București, Agenția Funerară Argo oferă consiliere, întocmire documente și avize funerare, alături de transport și organizare completă. Zone precum Titan, Dristor, Vitan, Dudești sau Nicolae Grigorescu. Consultanță: 0785.165.165.',
    sections: [
      {
        heading: 'Documente și avize, fără birocrație stresantă',
        paragraphs: [
          'Sectorul 3 este dens populat, iar familiile au adesea nevoie de ghidaj clar pentru certificate, autorizații de transport și programări. Noi preluăm aceste demersuri și vă explicăm fiecare pas pe înțeles.',
          'Consilierea inițială este gratuită — sunați oricând, zi sau noapte.',
        ],
        bullets: [
          'Întocmire acte de deces și avize',
          'Consiliere pas cu pas',
          'Transport funerar în Sector 3',
          'Pachete cu produse și ceremonie',
        ],
      },
      {
        heading: 'Organizare funerară locală',
        paragraphs: [
          'Dincolo de documente, organizăm sicriul, coroanele, capela și procesiunea. Dacă doriți incinerare, vă ajutăm cu programarea și urna.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Mă ajutați doar cu actele, fără pachet complet?',
        answer:
          'Da. Puteți solicita doar consiliere și întocmire documente, sau un pachet complet — alegerea este a familiei.',
      },
      {
        question: 'Lucrați cu spitalele din zonă?',
        answer:
          'Da. Colaborăm frecvent pentru preluări din unități medicale din București, inclusiv din aria Sectorului 3.',
      },
    ],
    relatedSlugs: [
      'servicii-funerare-bucuresti',
      'servicii-funerare-sector-2',
      'servicii-funerare-sector-4',
      'firma-pompe-funebre',
    ],
  },

  'servicii-funerare-sector-4': {
    slug: 'servicii-funerare-sector-4',
    title: 'Servicii Funerare Sector 4',
    metaTitle: 'Servicii Funerare Sector 4 ☎️ 0785.165.165',
    description:
      'Servicii funerare in Sector 4 Bucuresti. Deplasare urgenta, intocmire acte deces, pachete cu produse. Consiliere ☎️ 0785.165.165',
    eyebrow: 'București · Sector 4',
    breadcrumbLabel: 'Sector 4',
    isSector: true,
    h1: 'Servicii funerare Sector 4 — deplasare urgentă și pachete complete',
    intro:
      'În Sector 4 București intervenim urgent: deplasare rapidă, întocmire acte de deces și pachete cu produse funerare. Acoperim Berceni, Olteniței, Văcărești, Tineretului și zonele limitrofe. Consiliere: 0785.165.165.',
    sections: [
      {
        heading: 'Urgențe funerare în Sector 4',
        paragraphs: [
          'Când timpul presează, dispeceratul Argo mobilizează echipa pentru preluare, transport autorizat și demararea actelor. Nu lăsăm familia să caute soluții pe cont propriu în mijlocul nopții.',
          'Pachetele noastre includ produsele esențiale; restul se adaugă după nevoile ceremoniei.',
        ],
        bullets: [
          'Deplasare urgentă la domiciliu sau spital',
          'Întocmire acte de deces',
          'Pachete cu sicriu, transport și accesorii',
          'Consiliere calmă, non-stop',
        ],
      },
      {
        heading: 'De la urgență la ceremonie',
        paragraphs: [
          'După primul pas, continuăm cu organizarea procesiunii, coroanelor și — dacă doriți — a pomanei. Totul rămâne sub coordonarea aceluiași consultant.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Interveniți noaptea în Sector 4?',
        answer:
          'Da. Dispeceratul este non-stop. Apelați 0785.165.165 oricând aveți nevoie.',
      },
      {
        question: 'Ce include un pachet tipic?',
        answer:
          'De obicei: sicriu, transport, consultanță pentru acte. Pachetele complete adaugă coroane, capelă și elemente tradiționale — detaliem la telefon.',
      },
    ],
    relatedSlugs: [
      'servicii-funerare-sector-3',
      'servicii-funerare-sector-5',
      'preturi-servicii-funerare-bucuresti',
      'servicii-funerare-bucuresti',
    ],
  },

  'servicii-funerare-sector-5': {
    slug: 'servicii-funerare-sector-5',
    title: 'Servicii Funerare Sector 5',
    metaTitle: 'Servicii Funerare Sector 5 ☎️ 0785.165.165',
    description:
      'Servicii funerare in Sector 5 Bucuresti.Organizare procesiune funerara completa, transport autorizat, depunere capela. Sunati la ☎️ 0785.165.165',
    eyebrow: 'București · Sector 5',
    breadcrumbLabel: 'Sector 5',
    isSector: true,
    h1: 'Servicii funerare Sector 5 — procesiune, transport și capelă',
    intro:
      'Agenția Funerară Argo organizează în Sector 5 București procesiuni funerare complete: transport autorizat, depunere la capelă și coordonare ceremonială. Zone precum Rahova, Ferentari, 13 Septembrie sau Cotroceni. Sunați la 0785.165.165.',
    sections: [
      {
        heading: 'Procesiune funerară completă în Sector 5',
        paragraphs: [
          'O procesiune bine organizată înseamnă traseu clar, personal dedicat, transport special și respect față de ritmul familiei și al bisericii. Ne ocupăm de aceste detalii ca dumneavoastră să nu trebuiască.',
          'Depunerea la capelă și legătura cu slujba religioasă fac parte din serviciile noastre standard, la cerere.',
        ],
        bullets: [
          'Organizare procesiune funerară completă',
          'Transport funerar autorizat',
          'Depunere la capelă',
          'Coordonare cu biserica sau crematoriul',
        ],
      },
      {
        heading: 'Sprijin local, răspuns rapid',
        paragraphs: [
          'Echipa Argo cunoaște bine Sectorul 5 și rutele eficiente către cimitire și capele. Un apel este suficient pentru a începe organizarea.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Organizați și incinerări din Sector 5?',
        answer:
          'Da. Asigurăm transportul, programarea și toate formalitățile pentru incinerare, apoi urna și ceremoniile ulterioare, dacă familia dorește.',
      },
      {
        question: 'Pot alege doar transport și capelă?',
        answer:
          'Da. Serviciile se pot combina: transport, capelă, produse sau pachet complet — după nevoile dumneavoastră.',
      },
    ],
    relatedSlugs: [
      'servicii-funerare-sector-4',
      'servicii-funerare-sector-6',
      'servicii-funerare-bucuresti',
      'pompe-funebre-bucuresti',
    ],
  },

  'servicii-funerare-sector-6': {
    slug: 'servicii-funerare-sector-6',
    title: 'Servicii Funerare Sector 6',
    metaTitle: 'Servicii Funerare Sector 6 ☎️ 0785.165.165',
    description:
      'Servicii funerare in Sector 6 Bucuresti. Servicii de pompe funebre la preturi accesibile oricui. Apelati ☎️ 0785.165.165',
    eyebrow: 'București · Sector 6',
    breadcrumbLabel: 'Sector 6',
    isSector: true,
    h1: 'Servicii funerare Sector 6 — pompe funebre accesibile',
    intro:
      'În Sector 6 București, Agenția Funerară Argo oferă servicii de pompe funebre la prețuri accesibile oricui. Intervenim în Drumul Taberei, Militari, Crângași, Giulești sau Regie. Apelați 0785.165.165.',
    sections: [
      {
        heading: 'Pompe funebre accesibile în Sector 6',
        paragraphs: [
          'Știm că bugetul contează, mai ales în momente grele. De aceea propunem pachete clare, de la soluții esențiale la ceremonii complete, fără costuri ascunse și fără presiune.',
          'Același standard de respect și discreție, indiferent de pachetul ales.',
        ],
        bullets: [
          'Prețuri accesibile, oferte transparente',
          'Transport și organizare în Sector 6',
          'Sicrie, coroane și accesorii',
          'Dispecerat non-stop',
        ],
      },
      {
        heading: 'De la primul apel la ceremonia finală',
        paragraphs: [
          'Vă ascultăm, propunem o soluție realistă și ne ocupăm de acte, transport și produse. Familia rămâne informată la fiecare pas.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Există un pachet economic pentru Sector 6?',
        answer:
          'Da. Pachetul de înhumare 0 Ron cu talonul de pensie este gândit pentru familiile care au nevoie de o soluție demnă și accesibilă. Detalii la 0785.165.165.',
      },
      {
        question: 'Acoperiți și zona Militari / Drumul Taberei?',
        answer:
          'Da. Intervenim în toate cartierele Sectorului 6, zi și noapte.',
      },
    ],
    relatedSlugs: [
      'servicii-funerare-sector-5',
      'servicii-funerare-sector-1',
      'preturi-servicii-funerare-bucuresti',
      'firma-pompe-funebre',
    ],
  },

  'servicii-funerare-judetul-ilfov': {
    slug: 'servicii-funerare-judetul-ilfov',
    title: 'Servicii Funerare Judetul Ilfov',
    metaTitle: 'Servicii Funerare Judetul Ilfov ☎️ 0785.165.165',
    description:
      'Servicii funerare in tot Judetul Ilfov. Firma de pompe funebre autorizata cu peste 20 ani experiente. Dispecerat ☎️ 0785.165.165',
    eyebrow: 'Județul Ilfov',
    breadcrumbLabel: 'Ilfov',
    isSector: true,
    h1: 'Servicii funerare județul Ilfov — firmă autorizată, 20+ ani experiență',
    intro:
      'Agenția Funerară Argo asigură servicii funerare în tot județul Ilfov. Suntem o firmă de pompe funebre autorizată, cu peste 20 de ani de experiență. Dispecerat: 0785.165.165.',
    sections: [
      {
        heading: 'Acoperire în localitățile din Ilfov',
        paragraphs: [
          'Intervenim în localități precum Voluntari, Popești-Leordeni, Bragadiru, Chiajna, Otopeni, Buftea, Măgurele, Pantelimon și în restul județului. Transportul funerar și organizarea se adaptează distanței și tipului ceremoniei.',
          'Indiferent dacă decesul a avut loc în Ilfov sau în București, putem coordona traseul către cimitir, capelă sau crematoriu.',
        ],
        bullets: [
          'Acoperire în toate localitățile din Ilfov',
          'Transport autorizat și organizare completă',
          'Consiliere și întocmire documente',
          'Dispecerat disponibil 24 de ore din 24',
        ],
      },
      {
        heading: 'Experiență și discreție',
        paragraphs: [
          'Cu peste două decenii de activitate, știm cum să lucrăm cu familiile din mediul periurban și rural: respectăm tradițiile locale și ritmul fiecărei comunități.',
          'Un apel la dispecerat este suficient pentru a primi sprijin imediat.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Costă mai mult transportul în Ilfov?',
        answer:
          'Distanța poate influența costul transportului; vă comunicăm clar înainte de confirmare. Pachetele de bază rămân accesibile.',
      },
      {
        question: 'Ajungeți și noaptea în Ilfov?',
        answer:
          'Da. Dispeceratul non-stop acoperă județul Ilfov la fel ca Bucureștiul.',
      },
    ],
    relatedSlugs: [
      'servicii-funerare-sector-1',
      'servicii-funerare-bucuresti',
      'agentia-funerara-argo',
      'firma-pompe-funebre',
    ],
  },
}

/** All slugs for SSG and sitemap. */
export const allSlugs = Object.keys(pages)

export function getPage(slug: string): PageContent | undefined {
  return pages[slug]
}

export function getRelatedPages(slugs: string[]): PageContent[] {
  return slugs.map((s) => pages[s]).filter(Boolean) as PageContent[]
}
