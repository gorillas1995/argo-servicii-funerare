import type { StockAspect } from "@/lib/stock-images";
import {
  ACTE_1,
  BUCURESTI_1,
  CEREMONIE_1,
  CEREMONIE_2,
  FLORI_1,
  REPATRIERE,
  SICRIU_1,
  SPRIJIN_1,
  SPRIJIN_2,
} from "@/lib/stock-images";

/** Optional photograph attached to a content section. */
export type SectionImage = {
  src: string;
  alt: string;
  aspect?: StockAspect;
  objectPosition?: string;
};

/** Content for all inner pages. */
export type PageSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  image?: SectionImage;
};

export type PageFaq = {
  question: string;
  answer: string;
};

export type PageContent = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  eyebrow: string;
  h1: string;
  intro: string;
  sections: PageSection[];
  faqs: PageFaq[];
  relatedSlugs: string[];
  /** Page-level supporting photo shown near the top of the article. */
  image?: string;
  imageAlt?: string;
  imageAspect?: StockAspect;
  breadcrumbLabel: string;
  isSector?: boolean;
};

export const pages: Record<string, PageContent> = {
  "agentia-funerara-argo": {
    slug: "agentia-funerara-argo",
    title: "Agenția Funerară Argo",
    metaTitle: "Agentia Funerara Argo ☎️ 0785.165.165",
    description:
      "Agenția Funerară Argo, înființată în 1992. Servicii funerare complete în București și Ilfov, cu peste 30 de ani de experiență. Telefon: 0785.165.165.",
    eyebrow: "Despre noi",
    breadcrumbLabel: "Despre noi",
    h1: "Agenția Funerară Argo — servicii funerare din 1992",
    intro:
      "Agentia Funerara Argo este o firma de pompe funebre infiintata in 1992 ce ofera servicii funerare complete in Bucuresti Sector 1.2.3.4.5.6 si judetul Ilfov la preturi accesibile oricui.",
    sections: [
      {
        heading: "Firmă de pompe funebre autorizată DSP",
        paragraphs: [
          "Suntem autorizati DSP conform legii funerare 102 / 2014 respectiv HG 741/2016 si indeplinim toate conditiile si normele in vigoare cu privire la organizarea procesiunilor de inhumare sau incinerare.",
        ],
      },
      {
        heading:
          "Peste 30 de ani de experiență și peste 25.000 de familii sprijinite",
        paragraphs: [
          "Echipa noastra are o experienta de peste 30 ani in acest domeniu si a reusit sa oficializeze funerariile a peste 25.000 de persoane trecute in nefiinta, oferind familiilor acestora tot sprijinul necesar pentru a depasi momentele grele.",
          "Seriozitatea, profesionalismul si empatia ne definesc existenta si ne plaseaza in topul firmelor de profil, fiind compania etalon ce a impus un standard ridicat al calitatii.",
        ],
      },
      {
        heading: "5,0 stele și 2.683 de recenzii Google",
        paragraphs: [
          "Agentia Funerara Argo are unul din cele mai bune ratinguri Google dintre toate firmele de pompe funebre din Bucuresti cu 2683 de recenzii pozitive, oferite de cei ce au apelat si beneficiat de serviciile si produsele puse la dispozitie de compania noastra.",
        ],
      },
    ],
    faqs: [
      {
        question: "În ce zone interveniți?",
        answer:
          "Acoperim București — toate cele 6 sectoare — și întregul județ Ilfov. Pentru repatriere, coordonăm transportul funerar internațional oriunde este nevoie.",
      },
      {
        question: "Cât de rapid răspundeți?",
        answer:
          "Dispeceratul Argo este disponibil non-stop. La apel, vă oferim o primă evaluare și, dacă este necesar, deplasare rapidă la domiciliu sau la locul indicat.",
      },
    ],
    relatedSlugs: [
      "servicii-funerare-bucuresti",
      "preturi-servicii-funerare-bucuresti",
      "firma-pompe-funebre",
      "servicii-funerare-judetul-ilfov",
    ],
  },
  "preturi-servicii-funerare-bucuresti": {
    slug: "preturi-servicii-funerare-bucuresti",
    title: "Preturi Servicii Funerare Bucuresti",
    metaTitle: "Preturi Servicii Funerare Bucuresti ☎️ 0785.165.165",
    description:
      "Servicii funerare complete in Bucuresti. Preturi transparente, pachete avantajoase si asistenta 24 din 24. Oferte la ☎️ 0785.165.165",
    eyebrow: "Prețuri transparente",
    breadcrumbLabel: "Prețuri",
    h1: "Prețuri servicii funerare",
    intro:
      "Punem la dispozitie pachete funerare complete ce au la baza servicii si produse specifice pentru organizarea completa a procesiunilor de inhumare si incinerare.",
    image:
      "https://pompe-funebrebucuresti.ro/wp-content/uploads/2024/01/pachet-funerar-ieftin.jpg",
    sections: [
      {
        heading:
          "Fără servicii sau produse lipsă, fără costuri ascunse, fără tarife extra",
        paragraphs: [
          "Puteti opta pentru unul din pachetele funerare prezentate mai jos sau putem configura unul in functie de necesitatile sau bugetul dumneavoastra.",
          "Am reusit cu brio sa multumim din toate punctele de vedere cele peste 25.000 de familii ce au apelat la Agentia Funerara Argo in cei 30 ani de experienta si am depasit toate situatiile neprevazute generate de un asemenea eveniment.",
        ],
      },
      {
        heading: "Ce influențează prețul final?",
        paragraphs: [
          "Costul unei ceremonii funerare depinde de tipul sicriului, distanța de transport, necesitatea depunerii la capelă, coroanele alese și dacă este vorba de înmormântare sau incinerare. Vă ghidăm pas cu pas, ca să știți exact ce plătiți.",
          "Pentru familii care doresc o soluție rapidă și clară, vă recomandăm să începeți cu unul dintre pachetele standard și să ajustăm împreună detaliile.",
        ],
      },
    ],
    faqs: [
      {
        question: "Ce înseamnă „cu talonul de pensie”?",
        answer:
          "Pachetele pot fi achitate folosind ajutorul de deces aferent talonului de pensie, conform legislației. Vă explicăm diferența de preț și actele necesare la telefon.",
      },
      {
        question: "Pot solicita o ofertă pe telefon?",
        answer:
          "Da. Apelați 0785.165.165 sau scrieți pe WhatsApp. În câteva minute vă oferim o estimare și opțiuni potrivite familiei dumneavoastră.",
      },
    ],
    relatedSlugs: [
      "servicii-funerare-bucuresti",
      "pompe-funebre-bucuresti",
      "firma-pompe-funebre",
      "servicii-funerare-sector-1",
    ],
  },
  "servicii-funerare-bucuresti": {
    slug: "servicii-funerare-bucuresti",
    title: "Servicii Funerare Bucuresti",
    metaTitle: "Servicii Funerare Bucuresti ☎️ 0785.165.165",
    description:
      "Servicii funerare non stop in Bucuresti. Sicrie, transport, coroane si pachete accesibile. Asistenta ☎️ 0785.165.165",
    eyebrow: "Servicii complete",
    breadcrumbLabel: "Servicii",
    h1: "Servicii funerare complete non-stop în București și Ilfov",
    intro:
      "Agentia Funerara Argo este o firma de pompe funebre autorizata DSP ce ofera servicii funerare complete non stop de pompe funebre in Bucuresti Sectoarele 1.2.3.4.5.6 si in tot judetul Ilfov la cele mai optime preturi.",
    sections: [
      {
        heading: "Alături de dumneavoastră 24/7",
        paragraphs: [
          "Echipa noastra este alaturi de dumneavoastra 24/7 (program non-stop) cu profesionalism, empatie si respect, asigurand organizarea integrala a procesiunilor de inhumare sau incinerare, la preturi accesibile si transparente.",
        ],
      },
      {
        heading: "De ce să alegeți agenția noastră funerară?",
        paragraphs: [],
        bullets: [
          "Disponibilitate Non Stop 24/7: Intervenim rapid in orice sector din Bucuresti si in toate localitatile din Ilfov.",
          "Pachete funerare accesibile: Oferim optiuni adaptate oricarui buget, inclusiv servicii decontate prin ajutorul de deces / inmormantare Casa de Pensii (CNPP).",
          "Consiliere gratuita si suport pas cu pas: Va ghidam in toate demersurile legale si administrative necesare.",
        ],
        image: SPRIJIN_2,
      },
      {
        heading: "Servicii de pregătire a trupului neînsuflețit",
        paragraphs: [],
        bullets: [
          "Constatare deces: Medici pentru eliberarea certificatului constatator al decesului.",
          "Imbalsamare si tanatopraxie: Personal medical autorizat cu mare experienta.",
          "Igienizare si estetica funerara: Toaletare, igienizare si servicii de impachetare.",
          "Asezare si manipulare: Depunerea persoanei decedate in sicriu si manipulare.",
        ],
      },
      {
        heading: "Servicii administrative pentru eliberarea documentelor",
        paragraphs: [],
        bullets: [
          "Perfectare acte de stare civila: Obtinerea certificatului de deces, adeverintei de inhumarea sau incinerare si a autorizatiilor sanitare de la DSP.",
          "Dosar ajutor de deces: Pregatirea si depunerea completa a dosarului pentru ajutorul de inmormantare la CNPP a persoanei recent decedate.",
          "Acte incinerare umane si loc de veci: Intocmirea documentatiei la crematoriu si concesionare a locului de veci.",
        ],
        image: ACTE_1,
      },
      {
        heading: "Transport funerar",
        paragraphs: [],
        bullets: [
          "Transport funerar autorizat: Transport cu masini si autospeciale funerare omologate in Bucuresti, Ilfov si tot teritoriul Romaniei.",
          "Transport apartinatori: Microbuze confortabile pentru cortegiul funerar.",
          "Preluare aeroport: Preluarea sicriului direct de la zona Cargo a aeroporturilor Otopeni (Henri Coanda) sau Baneasa ( Aurel Vlaicu ).",
        ],
      },
      {
        heading:
          "Repatrierea persoanelor decedate și transport funerar internațional",
        paragraphs: [
          "Servicii complete de repatriere a corpurilor neinsufletite din strainatate (pasaport mortuar, sigilare sicriu de plumb, documente vama).",
        ],
      },
      {
        heading: "Organizarea ceremoniei funerare la cimitir",
        paragraphs: [],
        bullets: [
          "Depunere la capela sau biserica: Transportul si depunerea defunctului la capela cimitirului sau la biserica parohiala de care apartinea defunctul (a).",
          "Echipa religioasa:  Prezenta preotului, dascalului si a corului bisericesc pentru oficierea slujbei de inhumare.",
          "Pomeni si parastase: Organizarea mesei de pomenire (catering funerar, pachete de dulce sau post, coliva, colaci).",
          "Echipamente speciale: Inchiriere capac frigorific pentru sicriu si a tuturor efectelor funerare conexe.",
        ],
        image: CEREMONIE_1,
      },
    ],
    faqs: [
      {
        question:
          "Cum pot solicita un serviciu funerar in Bucuresti sau Ilfov?",
        answer:
          "Ne puteti contacta telefonic la orice ora din zi sau din noapte. Echipa noastra de consiliere funerara se deplaseaza in cel mai scurt timp la adresa indicata in orice Sector din Bucuresti (1.2.3.4.5.6) sau localitate din Ilfov.",
      },
      {
        question: "Se pot acoperi costurile prin ajutorul de deces?",
        answer:
          "Da. Serviciile noastre pot fi decontate integral sau partial pe baza talonului de pensie si a certificatului de deces si prin ajutorul de inmormantare acordat de Casa Nationala de Pensii Publice (CNPP).",
      },
    ],
    relatedSlugs: [
      "preturi-servicii-funerare-bucuresti",
      "pompe-funebre-bucuresti",
      "repatriere-decedati-romania",
      "servicii-funerare-sector-3",
    ],
  },
  "pompe-funebre-bucuresti": {
    slug: "pompe-funebre-bucuresti",
    title: "Pompe Funebre Bucuresti",
    metaTitle: "Pompe Funebre Bucuresti ☎️ 0785.165.165",
    description:
      "Pompe funebre complete in Bucuresti. Organizare procesiuni de inhumare si incinerare. Consiliere ☎️ 0785.165.165",
    eyebrow: "Produse funerare",
    breadcrumbLabel: "Produse",
    h1: "Pompe funebre București — produse și organizare completă",
    intro:
      "Agenția Funerară Argo oferă pompe funebre complete în București: sicrie, coroane, accesorii, organizare de procesiuni de înhumare și incinerare. Vă consiliem la 0785.165.165 pentru alegerea potrivită familiei dumneavoastră.",
    sections: [
      {
        heading: "Produse funerare pe care le puteți alege",
        paragraphs: [
          "Gama noastră include sicrie din lemn de diferite tipuri și finisaje, coroane și jerbe florale, batiste, prosoape, colivă și elemente pentru pomană. Vă ajutăm să combinați produsele într-un pachet coerent, fără cheltuieli inutile.",
          "Pentru familii care doresc o soluție rapidă, pachetele Argo includ deja produsele esențiale; restul se adaugă la cerere.",
        ],
        bullets: [
          "Sicrie standard și premium",
          "Coroane, jerbe și aranjamente florale",
          "Accesorii: batiste, prosoape, lumânări",
          "Pachete funerare complete, gata de organizare",
        ],
        // Illustrative stock photo — not a specific Argo product listing
        image: SICRIU_1,
      },
      // Full product catalogue listed for SEO and family browsing
      {
        heading: "Gama completa de produse funerare",
        paragraphs: [
          "Oferim o gama completa de produse funerare, disponibile la cerere sau incluse in pachetele Argo:",
        ],
        bullets: [
          "Sicrie traditionale (esenta brad)",
          "Sicrie lux (esenta stejar, frasin sau nuc)",
          "Accesorii sicriu (manere, suruburi, crucifix)",
          "Garnituri sicriu (respete satin, matase)",
          "Set orare (orar mic sau orar mare)",
          "Cruci (fabricate din lemn, fier, marmura sau granit)",
          "Monumente funerare",
          "Poze ceramica (alb-negru sau color)",
          "Felinare ornamentale din fier forjat",
          "Catafalc cu lumini",
          "Capac frigorific",
          "Candele, lumanari, toiag",
          "Coroane, jerbe, aranjamente florale",
          "Iconite sfintite, articole religioase",
          "Urne funerare",
          "Prosoape, batiste, esarfe",
          "Doliu (piept/usa)",
          "Coliva si colaci (Cap, Arhanghel, Prescura)",
          "Pachete produse (de dulce sau de post)",
          "Vase mancare gatita (dulce/post)",
        ],
        // Floral category illustration — not claimed as exact Argo stock
        image: FLORI_1,
      },
      {
        heading: "Procesiuni de înhumare și incinerare",
        paragraphs: [
          "Pe lângă produse, organizăm procesiunea funerară: transport, depunere la capelă, coordonare cu biserica sau crematoriul și asistență pe tot parcursul ceremoniei.",
          "Consilierea este gratuită — sunați pentru a afla ce produse și servicii se potrivesc situației dumneavoastră.",
        ],
      },
    ],
    faqs: [
      {
        question: "Pot vedea sicriele înainte de a decide?",
        answer:
          "Da. Vă prezentăm opțiunile disponibile (inclusiv foto și detalii de material) și vă ghidăm spre alegerea potrivită bugetului și tradiției familiei.",
      },
      {
        question: "Livrați produsele în toată Capitala?",
        answer:
          "Da. Livrăm și organizăm în toate sectoarele Bucureștiului și în Ilfov, în cadrul serviciilor funerare Argo.",
      },
    ],
    relatedSlugs: [
      "servicii-funerare-bucuresti",
      "preturi-servicii-funerare-bucuresti",
      "servicii-funerare-sector-2",
      "firma-pompe-funebre",
    ],
  },
  "repatriere-decedati-romania": {
    slug: "repatriere-decedati-romania",
    title: "Repatriere Decedati Romania",
    metaTitle: "Repatriere Decedati Romania ☎️ +40785.165.165",
    description:
      "Repatriere decedati in Romania. Transport funerar international rapid si complet. Intocmire acte si asistenta ☎️ +40785.165.165",
    eyebrow: "Repatriere internațională",
    breadcrumbLabel: "Repatriere",
    h1: "Repatriere decedați și transport funerar internațional",
    intro:
      "Oferim servicii de repatriere decedati in Romania si transport funerar international din orice colt al lumii in conditii de maxima siguranta si la preturi accesibile oricui.",
    image: REPATRIERE.src,
    imageAlt: REPATRIERE.alt,
    imageAspect: REPATRIERE.aspect,
    sections: [
      {
        heading: "Sprijin complet pentru familie",
        paragraphs: [
          "Aparitia unui deces în afara granitelor tarii este o încercare extrem de dificila pentru orice familie, aducand pe langa suferința sufleteasca sa o presiune logistica uriasa. În aceste momente delicate, o firma specializată în repatriere decedati preia întreaga responsabilitate legala, administrativă și logistică pentru aducerea persoanei trecute în neființă înapoi acasă, în condiții de deplină siguranță, demnitate și respect.",
          "Echipa de servicii funerare internaționale intervine prompt pentru a ghida familia pas cu pas, gestionând complet procesul prin:",
          "Pe scurt, o firma de repatriere reprezinta un partener de încredere care transforma un proces birocratic și logistic complex într-un serviciu rapid, sigur și complet, oferind familiilor linistea necesară pentru a-și lua ramas-bun de la cei dragi.",
        ],
        bullets: [
          "1. Preluarea birocratiei transfrontaliere: Obtinerea pasaportului mortuar, a certificatului de deces international, precum și a tuturor avizelor sanitare și vamale necesare de la ambasade, consulate sau autoritati locale.",
          "2. Pregatirea medico-legala și specifica: Efectuarea procedurilor de tanatopraxie (îmbalsamare) și sigilarea ermetica a trupului în sicriu dublu (lemn și zinc), conform normelor sanitare europene și internationale.",
          "3. Transport funerar autorizat: Organizarea tranzitului intern și international – fie rutier, cu autospeciale funerare izoterme și frigorifice de ultima generatie, fie aerian (cargo) – de la spital/morga direct la adresa sau cimitirul indicat din Romania.",
          "4. Consiliere și asistenta 24/7: Oferirea unui sprijin permanent și transparent, scutind familia îndurerată de drumuri obositoare, bariere lingvistice și proceduri legale complicate într-o tara straina.",
        ],
      },
      {
        heading:
          "Ce trebuie să faceți când se produce decesul unui apropiat în străinătate?",
        paragraphs: [
          "Cand o persoană draga trece în nefiinta în afara tarii, primul pas este pastrarea calmului și contactarea unei companii funerare specializate în servicii funerare internaționale.",
        ],
      },
      {
        heading: "Pasul 1: Anunțarea autorităților locale",
        paragraphs: [
          "Dacă decesul a avut loc la spital, cadrul medical elibereaza certificatul constatator de deces.",
          "Daca decesul a avut loc la domiciliu sau în urma unui accident, trebuie apelat numărul unic de urgenta din tara respectiva (ex: 112 în UE).",
        ],
      },
      {
        heading: "Pasul 2: Contactarea firmei de servicii funerare",
        paragraphs: [
          "Ne ocupam preluarea documentelor de la spital/morga și de comunicarea cu Consulatul sau Ambasada Romaniei.",
        ],
      },
      {
        heading: "Pasul 3: Întocmirea dosarului medico-legal și consular",
        paragraphs: [
          "Obtinerea pasaportului mortuar (documentul oficial ce permite tranzitul transfrontalier). Declararea decesului la Consulatul Romaniei sau la starea civila locala (pentru obtinerea extrasului/certificatului de deces international).",
        ],
      },
      {
        heading: "Pasul 4: Pregătirea și transportul",
        paragraphs: [
          "Îmbalsamarea (tanatopraxia) este obligatorie pentru transportul internațional.",
          "Asezarea în sicriul frigorific/de zinc special închis ermetic.",
          "Transportul rutier cu autospeciala funerara frigorifica sau transportul aerian.",
        ],
      },
      {
        heading: "Documente necesare pentru repatrierea decedaților",
        paragraphs: [
          "Pentru ca procesul de transport funerar international să se desfasoare fara întarzieri, sunt necesare urmatoarele acte:",
        ],
        bullets: [
          "Certificatul constatator al decesului (eliberat de medicul din tara în care a survenit decesul).",
          "Certificatul de deces international (sau eliberat de autoritatile locale / Consulat).",
          "Pasaportul mortuar (eliberat de Ambasada/Consulat sau de autoritatile sanitare din tara de provenienta).",
          "Certificatul de îmbalsamare (Tanatopraxie).",
          "Autorizația de transport funerar / Avizul sanitar de tranzit.",
          "Actul de identitate al persoanei decedate (Pasaport sau Carte de Identitate).",
          "Actul de identitate al apartinatorului / imputernicitului.",
        ],
      },
      {
        heading: "Repatriere — Europa",
        paragraphs: [
          "Albania, Andorra, Austria, Azerbaidjan, Belarus, Belgia, Bosnia și Herțegovina, Bulgaria, Cehia, Cipru, Croația, Danemarca, Elveția, Estonia, Finlanda, Franța, Georgia, Germania, Grecia, Irlanda, Islanda, Italia, Kazahstan, Letonia, Liechtenstein, Lituania, Luxemburg, Macedonia de Nord, Malta, Moldova, Monaco, Muntenegru, Norvegia, Olanda, Polonia, Portugalia, Regatul Unit, România, Rusia, San Marino, Serbia, Slovacia, Slovenia, Spania, Suedia, Turcia, Ucraina, Ungaria, Vatican.",
        ],
      },
      {
        heading: "Repatriere — Asia",
        paragraphs: [
          "Afganistan, Arabia Saudită, Armenia, Azerbaidjan, Bahrain, Bangladesh, Bhutan, Brunei, Cambodgia, China, Cipru, Coreea de Nord, Coreea de Sud, Emiratele Arabe Unite, Filipine, Georgia, India, Indonezia, Iordania, Irak, Iran, Israel, Japonia, Kazahstan, Kargazstan, Kuweit, Laos, Liban, Malaezia, Maldive, Mongolia, Myanmar, Nepal, Oman, Pakistan, Qatar, Rusia, Singapore, Siria, Sri Lanka, Tadjikistan, Thailanda, Timorul de Est, Turcia, Turkmenistan, Uzbekistan, Vietnam, Yemen.",
        ],
      },
      {
        heading: "Repatriere — Africa",
        paragraphs: [
          "Africa de Sud, Algeria, Angola, Benin, Botswana, Burkina Faso, Burundi, Camerun, Capul Verde, Republica Centrafricană, Ciad, Comore, Republica Democratică Congo, Republica Congo, Coasta de Fildeș, Djibouti, Egipt, Eritreea, Eswatini, Etiopia, Gabon, Gambia, Ghana, Guineea, Guineea-Bissau, Guineea Ecuatorială, Kenya, Lesoto, Liberia, Libia, Madagascar, Malawi, Mali, Mauritania, Mauritius, Maroc, Mozambic, Namibia, Niger, Nigeria, Rwanda, Senegal, Seychelles, Sierra Leone, Somalia, Sudan, Sudanul de Sud, Tanzania, Togo, Tunisia, Uganda, Zambia, Zimbabwe.",
        ],
      },
      {
        heading: "Repatriere — Statele Unite ale Americii",
        paragraphs: [
          "Alabama, Alaska, Arizona, Arkansas, California, Carolina de Nord, Carolina de Sud, Colorado, Connecticut, Dakota de Nord, Dakota de Sud, Delaware, Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana, Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana, Nebraska, Nevada, New Hampshire, New Jersey, New York, Noul Mexic, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, Tennessee, Texas, Utah, Vermont, Virginia, Virginia de Vest, Washington, Wisconsin, Wyoming.",
        ],
      },
      {
        heading: "Repatriere — America de Nord",
        paragraphs: [
          "Antigua și Barbuda, Bahamas, Barbados, Belize, Canada, Costa Rica, Cuba, Dominica, El Salvador, Grenada, Guatemala, Haiti, Honduras, Jamaica, Mexic, Nicaragua, Panama, Republica Dominicană, Trinidad-Tobago.",
        ],
      },
      {
        heading: "Repatriere — America de Sud",
        paragraphs: [
          "Argentina, Bolivia, Brazilia, Chile, Columbia, Ecuador, Guyana, Paraguay, Peru, Surinam, Uruguay, Venezuela.",
        ],
      },
      {
        heading: "Repatriere — Australia",
        paragraphs: [
          "Australia, Fiji, Insulele Marshall, Insulele Solomon, Kiribati, Micronezia, Nauru, Noua Zeelandă, Palau, Papua Noua Guinee, Samoa, Tonga, Tuvalu, Vanuatu.",
        ],
      },
      {
        heading: "Cât costă repatrierea unei persoane decedate?",
        paragraphs: [
          "Costul serviciului de repatriere decedati variaza în funcție de mai mulți factori specifici:",
          "Nota de transparenta: Pentru o estimare exacta și corecta, adaptata cazului dumneavoastra, contactați dispecerul nostru. Oferim deviz clar, fara costuri ascunse.",
        ],
        bullets: [
          "1. Distanta parcursa (numărul de kilometri dus-întors).",
          "2. Țara din care se face repatrierea și taxele administrative/consulare locale.",
          "3. Tipul de transport ales (rutier frigorific sau aerian cargo).",
          "4. Tipul de sicriu ales (sicriul de lemn exterior și sicriul interior de zinc zincat sunt obligatorii prin lege).",
          "5. Serviciile medico-legale specifice (tanatopraxie, îmbracare, cosmetizare, depozitare la morga).",
        ],
      },
      {
        heading: "De ce să alegeți serviciile noastre de repatriere?",
        paragraphs: [],
        bullets: [
          "Experienta și profesionalism: Sute de repatrieri efectuate cu succes din întreaga Europa.",
          "Autospeciale autorizate: Flota funerara moderna si omologata international, dotata cu sisteme de refrigerare de ultima generatie.",
          "Consiliere Non-Stop: Suntem alaturi de dumneavoastra la orice ora din zi sau din noapte (24/7).",
          "Preluarea integrala a birocratiei: Ne ocupam de toate actele legale, traduceri, legalizari și avize sanitare.",
          "Transparenta financiara: Fara comisioane ascunse, prețuri corecte stabilite de la început.",
        ],
      },
      {
        heading: "Serviciu de preluare din zona cargo a aeroportului",
        paragraphs: [
          "Punem la dispozitie serviciul de preluare din zona cargo a aeroportului:",
          "Apoi efectuam transferul persoanei decedate catre orice destinatie din Romania. Desfasuram aceasta activitate cu masini funerare omologate conforme cu prevederile legale in materie si punem la dispozitie personal calificat pentru manipularea sicriului de zinc atat la aeroport cat si la destinatie.",
        ],
        bullets: [
          "Bucuresti - Otopeni Henri Coanda",
          "Bucuresti - Baneasa Aurel Vlaicu",
          "Timisoara - Traian Vuia",
          "Cluj-Napoca - Aeroportul International Someseni",
          "Iasi – Aeroportul International Iasi",
          "Sibiu - Aeroportul International Sibiu",
          "Bacau - Aeroportul International Bacau",
          "Targu Mures – Aeroportul Transilvania",
          "Constanta - Aeroportul International Mihail Kogalniceanu",
          "Oradea - Aeroportul International Oradea",
          "Craiova - Aeroportul International Craiova",
          "Satu Mare - Aeroportul Satu Mare",
          "Suceava – Aeroportul Suceava Salcea",
          "Baia Mare - Aeroportul International Tautii Magheraus",
        ],
      },
      {
        heading: "Serviciul de expatriere decedați din România",
        paragraphs: [
          "Decesul unei persoane straine sau ale carei dorinte au fost sa fie înmormantata în tara natala necesita un proces riguros de expatriere. Serviciul de expatriere decedati din Romania presupune organizarea completa a transportului funerar international, gestionarea întregii birocratii transfrontaliere și asigurarea conditiilor medico-legale specifice pentru ca trupul neinsufletit să ajunga în siguranta in tara de destinatie.",
          "Firma noastra de servicii funerare internationale ofera sprijin complet familiilor și ambasadelor, preluand toate demersurile logistice si administrative din Romania catre orice stat din Europa sau din lume.",
        ],
      },
      {
        heading: "Ce include serviciul de expatriere decedați din România?",
        paragraphs: [
          "Expatrierea unui decedat este o procedură medico-legala și logistica strict reglementata. Echipa noastra specializata preia toate responsabilitatile de la locul decesului pana la predarea în tara de destinatie:",
        ],
        bullets: [
          "1. Preluarea și depozitarea frigorifica: Preluarea trupului de la spital, IML (Institutul de Medicina Legala) sau domiciliu și depozitarea în spatii frigorifice autorizate.",
          "2. Proceduri de tanatopraxie (imbalsamare): Îmbalsamarea profesionala obligatorie pentru transportul transfrontier și eliberarea certificatului aferent.",
          "3. Echipare conform normelor internaționale: Pregatirea sicriului dublu obligatoriu (sicriu interior din zinc sigilat ermetic și sicriu exterior din lemn masiv), prevazut cu filtru de purificare a aerului și sigiliu vamal.",
          "4. Obținerea actelor: Baza legala pentru parasirea teritoriului Romaniei include obținerea pasaportului mortuar (eliberat de Direcția de Sanatate Publică - DSP), a certificatului de deces international, precum si a avizelor sanitare și vamale.",
          "5. Coordonare cu ambasadele și consulatele: Preluarea comunicarii cu reprezentantele diplomatice ale tarii de origine pentru obtinerea tuturor aprobarilor de tranzit sau import funerar.",
        ],
      },
      {
        heading: "Transport funerar internațional pentru expatriere",
        paragraphs: [
          "Transport rutier: Cu autospeciale funerare izoterme și frigorifice omologate UE, pentru destinatii din Europa.",
          "Transport aerian cargo: Organizarea zborului de pe aeroporturile internationale din Romania pana la aeroportul din tara de sosire.",
        ],
      },
    ],
    faqs: [
      {
        question: "Cat dureaza repatrierea unui decedat din Europa în Romania?",
        answer:
          "În medie, procesul durează între 2 și 5 zile lucratoare. Durata depinde de rapiditatea cu care autoritatile din tara respectiva (spital, politie, stare civila, consulat) elibereaza documentele necesare și pasaportul mortuar.",
      },
      {
        question: "Este obligatoriu sicriul de zinc pentru repatriere?",
        answer:
          "Da. Conform reglementărilor internationale privind transportul funerar transfrontalier, trupul neinsufletit trebuie asezat într-un sicriu de zinc închis ermetic (sigilat cu plumb/cositor), introdus ulterior într-un sicriu din lemn masiv.",
      },
      {
        question: "Se poate plati repatrierea cu ajutorul de deces?",
        answer:
          "Da, în functie de legislație și de situatia persoanei decedate (dacă a fost asigurata/pensionara în Romania sau în tara unde lucra), se poate solicita ajutorul de deces sau sprijinul financiar prevazut de legislația asigurarilor sociale. Echipa noastra va ofera consultanta pentru pregatirea dosarului.",
      },
      {
        question:
          "Ce facem dacă decesul a survenit în urma unui accident sau a unei anchete judiciare?",
        answer:
          "În aceste cazuri, repatrierea se poate efectua numai după obținerea avizului de la Procuratura / Politia locala din tara respectivă. Noi mentinem legatura directa cu organele de anchetă pentru eliberarea neîntarziata a trupului.",
      },
    ],
    relatedSlugs: [
      "servicii-funerare-bucuresti",
      "firma-pompe-funebre",
      "agentia-funerara-argo",
      "preturi-servicii-funerare-bucuresti",
    ],
  },
  "informatii-servicii-funerare": {
    slug: "informatii-servicii-funerare",
    title: "Informatii Servicii Funerare Bucuresti",
    metaTitle: "Informatii Servicii Funerare Bucuresti ☎️ 0785.165.165",
    description:
      "Ghid cu sfaturi utile despre demersuri funerare, drepturi, ajutoare deces si datini. Informatii clare de la specialisti ☎️ 0785.165.165",
    eyebrow: "Ghidul familiei",
    breadcrumbLabel: "Blog",
    h1: "Ce trebuie să faceți dacă vă confruntați cu decesul cuiva apropiat?",
    intro:
      "Pierderea unei persoane dragi este un moment extrem de dificil, iar cunoasterea pasilor legali și organizatorici te poate ajuta să treci mai usor peste aspectele birocratice. Procedura difera ușor în functie de locul în care a survenit decesul (domiciliu, spital, azil sau spatiu public).",
    sections: [
      {
        heading: "1. Decesul survenit acasă, din cauze naturale",
        paragraphs: [
          "Nu misca persoana decedata pana la sosirea medicului apoi sunati la medicul de familie (daca decesul are loc în timpul programului de lucru) sau la o firma de servicii funerare autorizata ori serviciu de ambulanta. Medicul va elibera certificatul medical constatator al decesului (CMCD). Pentru eliberarea acestuia vei avea nevoie de:",
        ],
        bullets: [
          "Actul de identitate al decedatului (ei) (buletin / carte de identitate);",
          "Certificatul de nastere și de casatorie (dacă este cazul).",
          "Fisa sau istoricul medical  (adeverințe de la medicul de familie, externari spital.) care să ateste bolile de care suferea.",
          "Important: Dacă decesul a fost brusc, violent sau exista suspiciuni privind cauza mortii, sunati imediat la numărul de urgenta 112. În acest caz, constatarea este facuta de Politie și de Medicina Legala (IML).",
        ],
      },
      {
        heading: "2. Decesul survenit la spital",
        paragraphs: [
          "Cadrul medical se ocupă de constatarea decesului și eliberarea certificatului medical constatator al decesului. Trupul neînsuflețit este depus la morga spitalului timp de cel puțin 24 de ore. Aparținătorii se prezintă la morga spitalului cu actele de identitate pentru ridicarea certificatului constatator și preluarea trupului neinsufletit.",
        ],
      },
      {
        heading:
          "3. Obținerea certificatului de deces la Oficiul de Stare Civilă",
        paragraphs: [
          "După obținerea certificatului constatator de la medic, trebuie înregistrat decesul la Oficiul de Stare Civilă din cadrul primăriei pe raza căreia s-a produs decesul.",
        ],
      },
      {
        heading: "Termene pentru declararea decesului",
        paragraphs: [],
        bullets: [
          "3 zile de la data producerii decesului (pentru cauze naturale);",
          "48 de ore de la momentul găsirii cadavrului sau al decesului (în caz de sinucidere, accident, moarte violentă sau cadavru găsit).",
        ],
      },
      {
        heading: "Documente necesare la Starea Civilă",
        paragraphs: [],
        bullets: [
          "1.\tCertificatul Medical Constatator al Decesului (original);",
          "2.\tActul de identitate al persoanei decedate (original);",
          "3.\tCertificatul de naștere și de căsătorie al decedatului (original și copie);",
          "4.\tLivretul militar (dacă este cazul, pentru bărbații sub 60 de ani);",
          "5.\tActul de identitate al persoanei care declară decesul (original și copie).",
        ],
      },
      {
        heading: "4. Organizarea funeraliilor",
        paragraphs: [],
        bullets: [
          "Contactarea unei firme de servicii funerare: Acestea oferă servicii de îmbălsămare, toaletare, sicriu, transport funerar și depunere la capelă.",
          "Îmbălsămarea: Este obligatorie prin lege dacă trupul urmează să fie depus la capelă sau transportat în altă localitate. Medicul eliberează un certificat de îmbălsămare.",
          "Stabilirea locului de veci: Contactarea administrației cimitirului unde există locul de veci sau achiziționarea/concesionarea unuia.",
        ],
      },
    ],
    faqs: [
      {
        question:
          "Cum pot solicita un serviciu funerar in Bucuresti sau Ilfov?",
        answer:
          "Ne puteti contacta telefonic la orice ora din zi sau din noapte. Echipa noastra de consiliere funerara se deplaseaza in cel mai scurt timp la adresa indicata in orice Sector din Bucuresti (1.2.3.4.5.6) sau localitate din Ilfov.",
      },
      {
        question: "Se pot acoperi costurile prin ajutorul de deces?",
        answer:
          "Da. Serviciile noastre pot fi decontate integral sau partial pe baza talonului de pensie si a certificatului de deces si prin ajutorul de inmormantare acordat de Casa Nationala de Pensii Publice (CNPP).",
      },
    ],
    relatedSlugs: [
      "servicii-funerare-bucuresti",
      "preturi-servicii-funerare-bucuresti",
      "firma-pompe-funebre",
      "agentia-funerara-argo",
    ],
  },
  "firma-pompe-funebre": {
    slug: "firma-pompe-funebre",
    title: "Firma Pompe Funebre Bucuresti",
    metaTitle: "Firma Pompe Funebre Bucuresti ☎️ 0785.165.165",
    description:
      "Firma de pompe funebre din Bucuresti. Servicii, produse, pachete accesibile si sprijin dedicat. Contactati-ne ☎️ 0785.165.165",
    eyebrow: "Contact",
    breadcrumbLabel: "Contact",
    h1: "Firma de pompe funebre București — contactați Agenția Argo",
    intro:
      "Agenția Funerară Argo este firma de pompe funebre din București pe care o puteți contacta non-stop. Oferim servicii, produse și pachete accesibile, cu sprijin dedicat. Apelați 0785.165.165 sau scrieți pe WhatsApp.",
    sections: [
      {
        heading: "Cum ne contactați",
        paragraphs: [
          "Cel mai rapid canal este telefonul: 0785.165.165. Dispeceratul răspunde 24/7, inclusiv noaptea și în weekend. Pentru mesaje scurte sau fotografii de documente, folosiți WhatsApp pe același număr.",
          "Spuneți-ne zona (sector sau localitate din Ilfov) și situația — vă ghidăm imediat spre pașii următori.",
        ],
        bullets: [
          "Telefon / WhatsApp: 0785.165.165",
          "Dispecerat non-stop, București și Ilfov",
          "Pachete funerare accesibile",
          "Sprijin pentru acte, transport și ceremonie",
        ],
      },
      {
        heading: "Zone deservite",
        paragraphs: [
          "Intervenim în Sector 1, 2, 3, 4, 5, 6 și în tot județul Ilfov. Fiecare zonă are o pagină dedicată cu detalii locale — alegeți sectorul din meniu sau din lista de mai jos.",
          "Pentru repatrierea din străinătate, folosiți același număr: +40785.165.165.",
        ],
      },
    ],
    faqs: [
      {
        question: "Aveți sediu cu program de vizitare?",
        answer:
          "Pentru urgențe, intervenim la telefon și la fața locului. Detaliile de întâlnire le stabilim odată cu organizarea — prioritatea este sprijinul rapid pentru familie.",
      },
      {
        question: "Pot solicita o ofertă fără a mă angaja?",
        answer:
          "Da. Prima consultație este informativă. Vă prezentăm opțiunile și prețurile, iar dumneavoastră decideți în ritmul potrivit.",
      },
    ],
    relatedSlugs: [
      "servicii-funerare-sector-1",
      "servicii-funerare-sector-3",
      "servicii-funerare-judetul-ilfov",
      "servicii-funerare-bucuresti",
    ],
  },
  "servicii-funerare-sector-1": {
    slug: "servicii-funerare-sector-1",
    title: "Servicii Funerare Sector 1",
    metaTitle: "Servicii Funerare Sector 1 ☎️ 0785.165.165",
    description:
      "Servicii funerare in Sector 1 Bucuresti. Preturi transparente, pachete accesibile si asistenta non stop. Contact ☎️ 0785.165.165",
    eyebrow: "București · Sector 1",
    breadcrumbLabel: "Sector 1",
    isSector: true,
    h1: "Servicii Funerare Sector 1 București | Pompe Funebre Non-Stop",
    intro:
      "Pierderea unei persoane dragi este unul dintre cele mai dificile momente din viață. În astfel de clipe, aveți nevoie de un partener de încredere care să preia întreaga responsabilitate a organizării procesiunii funerare, oferindu-vă sprijin, respect și transparență totală.",
    image: BUCURESTI_1.src,
    imageAlt: BUCURESTI_1.alt,
    imageAspect: BUCURESTI_1.aspect,
    sections: [
      {
        heading: "Servicii funerare complete în Sectorul 1 București",
        paragraphs: [
          "Agentia Funerara Argo este o firma de pompe funebre autorizata DSP, ce ofera servicii funerare complete în Sectorul 1 București, disponibile non-stop (24/7), acoperind toate cartierele și reperele majore din zonă cu servicii si produse specifice pentru organizarea de înmormântări sau incinerări.",
        ],
      },
      {
        heading:
          "Ce include un pachet complet cu servicii si produse funerare în Sectorul 1?",
        paragraphs: [
          "Un serviciu funerar complet include toate etapele necesare pentru o înhumare sau incinerare realizată în condiții legale și cu respectarea tradițiilor:",
        ],
        bullets: [
          "1. Constatarea decesului și îmbrăcarea: Medicul constatator eliberează Certificatul Medical Constatator al Decesului (CMCD), urmat de servicii profesionale de balsamare / tanatopraxie și cosmetizare.",
          "2. Sicriu complet echipat: Alegerea sicriului cu accesoriile necesare si pregătirea acestuia.",
          "3. Manipulare și transport funerar: Preluare de la domiciliu, spital sau azil din Sectorul 1 cu mașini funerare autorizate (autorizație DSP) către capelă sau cimitir.",
          "4. Organizare pomană și parastas: Pachete alimentare conforme cu cerințele sanitare (dulce sau de post), colivă, colaci și prosoape, batiste, lumanari, doliu.",
          "5. Consiliere pentru ajutorul de deces: Sprijin complet în întocmirea dosarului pentru Casa de Pensii Sector 1 (CNPP) – de multe ori, serviciile pot fi acoperite integral în baza taloanelor de pensie, fără costuri avansate din partea familiei.",
        ],
      },
      {
        heading: "Arie acoperire în cartierele din Sectorul 1",
        paragraphs: [
          "Datorită poziționării noastre strategice, intervenim rapid (în medie 15 - 30 minute) in caz de urgenta în orice zonă din Sectorul 1:",
          "Aviației, Agronomie, Amzei, Aviatorilor, Baneasa, Banu Manta, Bazilescu, Berzei, Bucureștii Noi, Buzesti, Calea Grivitei, Cartierul Francez, Chitila, Clucerului, Damaroaia, Dimitrie Pompeiu, Dinicu Golescu, Domenii, Dorobanți, Expozitiei, Ficusului, Floreasca, Gara de Nord & Basarab, Gheorghe Ionescu Sisesti, Herastrau, Henri Coanda, Iancu de Hunedoara, Iancu Nicolae, Ion Mihalache, Ion Mincu, Kiseleff, Laminorului, Nordului, Odaii, Pajura, Piata & Calea Victoriei, Pipera, Poligrafiei, Primăverii, Regimentului, Straulesti, Stirbei Voda, Titulescu, Vatra Noua.",
        ],
      },
      {
        heading: "Preluare de la morga spitalelor din Sectorul 1",
        paragraphs: [
          "Intocmim toate formalitatile si perfectam documentele pentru preluarea persoanelor decedate de la morga spitalelor din Sectorul 1: Spitalul Clinic de Urgență Floreasca, Spitalul Elias, Spitalul Militar Central, Spitalul Sfânta Maria, Spitalul C.F. Witting, Spitalul Clinic De Arsi, Spitalul CF2, Spitalul Agrippa Ionescu, Spitalul Euroclinic, Spitalul Life Memorial, Spitalul Ponderas, Institutul Geriatrie Ana Aslan.",
        ],
      },
      {
        heading: "Depunere la capelele cimitirelor din Sectorul 1",
        paragraphs: [
          "Efectuam depunere la capelele cimitirelor din Sector 1: Cimitirul Străulești 1 si 2, Cimitirul Dămăroaia, Cimitirul Băneasa, Cimitirul Sfânta Vineri, Cimitirul Sfantul Nicolae, Cimitirul Bucurestii Noi, Cimitirul Evreiesc Israelit.",
        ],
      },
    ],
    faqs: [
      {
        question: "Cât costă un pachet funerar în Sectorul 1?",
        answer:
          "Costul variază în funcție de opțiunile alese (sicriu, număr de pachete, transport). Oferim pachete funerare gratuite în baza ajutorului de deces acordat de Casa de Pensii, ceea ce înseamnă că familia nu trebuie să achite diferențe dacă se încadrează în valoarea plafonului pe anul in curs acordat de stat.",
      },
      {
        question:
          "În cât timp ajunge echipa funerară la locul decesului în Sectorul 1?",
        answer:
          "Echipa noastră de intervenție este disponibilă 24 de ore din 24, 7 zile din 7. În Sectorul 1 ajungem la adresa indicată în aproximativ 15 – 30 de minute de la initierea apelului telefonic catre dispecerul nostru de serviciu.",
      },
      {
        question: "Ce acte sunt necesare pentru obținerea ajutorului de deces?",
        answer:
          "Pentru a solicita ajutorul de deces în Sectorul 1 aveți nevoie de: Certificat de deces (original și copie); Certificat de naștere și de căsătorie al decedatului; Cuponul de pensie al persoanei decedate; Actul de identitate al solicitantului (care dovedește că a suportat cheltuielile de înmormântare).",
      },
      {
        question: "De ce să alegeți serviciile noastre funerare?",
        answer:
          "Transparență financiară 100%: Fără taxe ascunse sau costuri suplimentare neprevăzute. Disponibilitate Non-Stop: Suntem alături de dumneavoastră la orice oră din zi sau din noapte. Preluare proceduri birocratice: Ne ocupăm de obținerea tuturor avizelor necesare (DSP, Starea Civilă, Certificat de Deces). Empatie și respect: Personalul nostru este instruit să acționeze cu maximă discreție și profesionalism.",
      },
      {
        question: "Aveți nevoie de asistență funerară imediată în Sectorul 1?",
        answer:
          "Echipa noastră este pregătită să vă ajute în cel mai scurt timp. Sunați acum la numarul companiei noastre pentru consiliere gratuită și intervenție rapidă.",
      },
    ],
    relatedSlugs: [
      "servicii-funerare-sector-2",
      "servicii-funerare-sector-6",
      "preturi-servicii-funerare-bucuresti",
      "firma-pompe-funebre",
    ],
  },
  "servicii-funerare-sector-2": {
    slug: "servicii-funerare-sector-2",
    title: "Servicii Funerare Sector 2",
    metaTitle: "Servicii Funerare Sector 2 ☎️ 0785.165.165",
    description:
      "Servicii funerare in Sector 2 Bucuresti. Sicrie, batiste, prosoape, pomana la preturi accesibile. Info la ☎️ 0785.165.165",
    eyebrow: "București · Sector 2",
    breadcrumbLabel: "Sector 2",
    isSector: true,
    h1: "Servicii funerare Sector 2 București — asistență non-stop",
    intro:
      "Agenția Funerară Argo oferă servicii funerare complete non-stop în Sectorul 2 din București. Consiliere, documente, transport funerar și depunere la capelă. Telefon: 0785.165.165.",
    image: CEREMONIE_1.src,
    imageAlt: CEREMONIE_1.alt,
    imageAspect: CEREMONIE_1.aspect,
    sections: [
      {
        heading: "Arie de acoperire în cartierele din Sectorul 2",
        paragraphs: [
          "In cazul unui deces intervenim rapid (în medie 15 - 30 minute) in caz de urgenta în orice zonă din Sectorul 2:",
          "Armeneasca , Andronache , Avrig , Baicului , Barbu Vacarescu , Bulevardul Basarabia , Bulevardul Carol I , Bulevardul Chisinau , Calea Mosilor , Colentina, Dacia , Delfinului , Doamna Ghica , Doamna Oltea , Dobroesti , Electronicii , Fabrica de Glucoza , Fainari , Ferdinand , Foisorul de Foc , Fundeni , Ghica Tei , Gradina Icoanei , Iancului , Lacul Tei , Lizeanu , Maica Domnului , Maior Coravu , Maria Rosetti , Mihai Eminescu , Morarilor , Obor , Pantelimon , Pache Protopopescu , Petricani , Plumbuita , Polona , Socului , Soseaua Stefan cel Mare , Sportului , Tei Toboc , Teiul Doamnei , Vasile Lascar , Vatra Luminoasa , Verdi , Vergului , Viitorului.",
        ],
      },
      {
        heading: "Preluare de la morga spitalelor din Sectorul 2",
        paragraphs: [
          "Intocmim toate formalitatile si perfectam documentele pentru preluarea persoanelor decedate de la morga spitalelor din Sectorul 2: Spitalul Sfantul Pantelimon, Spitalul Colentina, Spitalul Fundeni, Spitalul Dimitrie Gerota, Spitalul Sfantul Stefan, Spitalul Nicolae Malaxa, Spitalul Ion Cantacuzino, Spitalul Judetean Ilfov, Spitalul Monza, Institutul Matei Bals.",
        ],
      },
      {
        heading: "Depunere la capelele cimitirelor din Sectorul 2",
        paragraphs: [
          "Facilitam depunere la capelele cimitirelor din Sector 2 : Cimitirul Reinvierea, Cimitirul Andronache, Cimitirul Pantelimon 2, Cimitirul Iancu Nou, Cimitirul Armenesc, Cimitirul Marcuta.",
        ],
      },
    ],
    faqs: [
      {
        question: "Cât de repede interveniți în Sectorul 2?",
        answer:
          "În caz de urgență, intervenim în medie în 15–30 de minute. Timpul de sosire depinde de adresă și de condițiile de trafic; confirmați detaliile la 0785.165.165.",
      },
      {
        question:
          "Vă ocupați de documentele pentru preluare și de depunerea la capelă?",
        answer:
          "Da. Ne ocupăm de formalitățile și documentele pentru preluarea persoanelor decedate de la morga spitalelor din Sectorul 2 și de depunerea la capelele cimitirelor din zonă.",
      },
    ],
    relatedSlugs: [
      "pompe-funebre-bucuresti",
      "servicii-funerare-sector-1",
      "servicii-funerare-sector-3",
      "preturi-servicii-funerare-bucuresti",
    ],
  },
  "servicii-funerare-sector-3": {
    slug: "servicii-funerare-sector-3",
    title: "Servicii Funerare Sector 3",
    metaTitle: "Servicii Funerare Sector 3 ☎️ 0785.165.165",
    description:
      "Servicii funerare in Sector 3 Bucuresti. Consiliere, intocmire documente si avize. Consultanta la ☎️ 0785.165.165",
    eyebrow: "București · Sector 3",
    breadcrumbLabel: "Sector 3",
    isSector: true,
    h1: "Servicii funerare Sector 3 București — asistență non-stop",
    intro:
      "Agenția Funerară Argo oferă servicii funerare complete non-stop în Sectorul 3 din București. Consiliere, documente, transport funerar și depunere la capelă. Telefon: 0785.165.165.",
    image: ACTE_1.src,
    imageAlt: ACTE_1.alt,
    imageAspect: ACTE_1.aspect,
    sections: [
      {
        heading: "Arie de acoperire în cartierele din Sectorul 3",
        paragraphs: [
          "Ne deplasam rapid imediat dupa apel (în medie 15 - 30 minute) in caz de urgenta în orice zonă din Sectorul 3  : Baba Novac , Balta Alba , Bobocica , Bulevardul Basarabia , Bulevardul Chisinau , Bulevardul I.C. Bratianu , Barajul Dunarii / Lotrului , Calea Calarasilor , Campia Libertatii , Camill Ressu , Centrul Vechi , Coltei , Complex Antilopa , Constantin Brancusi , Corneliu Coposu , Costin Georgian , Decebal , Delea Noua / Veche , Diham , Dristor , Dudesti , Elie Radu , Energeticienilor , Faur , Fizicienilor , Ilioara , Industriilor , Invingatorilor , 1 Decembrie 1918 , 23 August , Jean Steriadi , Liviu Rebreanu , Lucretiu Patrascanu , Macaralei , Mantuleasa , Mihai Bravu , Morarilor , Muncii , , Nerva Traian , Nicolae Grigorescu , Octavian Goga , Ozana , Piata Alba Iulia , Racari , Republica , Salajan , Strada Ramnicu Sarat / Valcea , Soseaua Garii Catelu , Splaiul Unirii , Strada Traian , Teilor , Theodor Pallady , Titan , Trapezului , Udriste , Unirii , Victor Babes , Zizin.",
        ],
      },
      {
        heading: "Preluare de la morga spitalelor din Sectorul 3",
        paragraphs: [
          "Ne ocupam de intocmirea formalitatilor si perfectam documentele pentru preluarea persoanelor decedate de la morga spitalelor din Sectorul 3: Spitalul Coltea, Spitalul Victor Babes, Spitalul Titan Constantin Gorgos, Spitalul MedLife Titan.",
        ],
      },
      {
        heading: "Depunere la capelele cimitirelor din Sectorul 3",
        paragraphs: [
          "Depunem trupul neinsufletit al persoanelor decedate la capelele cimitirelor din Sector 3 : Cimitirul Izvorul Nou, Cimitirul Salajan, Cimitirul Dudesti, Cimitirul Catolic Cioplea.",
        ],
      },
    ],
    faqs: [
      {
        question: "Cât de repede interveniți în Sectorul 3?",
        answer:
          "În caz de urgență, intervenim în medie în 15–30 de minute. Timpul de sosire depinde de adresă și de condițiile de trafic; confirmați detaliile la 0785.165.165.",
      },
      {
        question:
          "Vă ocupați de documentele pentru preluare și de depunerea la capelă?",
        answer:
          "Da. Ne ocupăm de formalitățile și documentele pentru preluarea persoanelor decedate de la morga spitalelor din Sectorul 3 și de depunerea la capelele cimitirelor din zonă.",
      },
    ],
    relatedSlugs: [
      "servicii-funerare-bucuresti",
      "servicii-funerare-sector-2",
      "servicii-funerare-sector-4",
      "firma-pompe-funebre",
    ],
  },
  "servicii-funerare-sector-4": {
    slug: "servicii-funerare-sector-4",
    title: "Servicii Funerare Sector 4",
    metaTitle: "Servicii Funerare Sector 4 ☎️ 0785.165.165",
    description:
      "Servicii funerare in Sector 4 Bucuresti. Deplasare urgenta, intocmire acte deces, pachete cu produse. Consiliere ☎️ 0785.165.165",
    eyebrow: "București · Sector 4",
    breadcrumbLabel: "Sector 4",
    isSector: true,
    h1: "Servicii funerare Sector 4 București — asistență non-stop",
    intro:
      "Agenția Funerară Argo oferă servicii funerare complete non-stop în Sectorul 4 din București. Consiliere, documente, transport funerar și depunere la capelă. Telefon: 0785.165.165.",
    image: SPRIJIN_1.src,
    imageAlt: SPRIJIN_1.alt,
    imageAspect: SPRIJIN_1.aspect,
    sections: [
      {
        heading: "Arie de acoperire în cartierele din Sectorul 4",
        paragraphs: [
          "Daca decesul intervine la domiciliu ne deplasam (în medie 15 - 30 minute) in caz de urgenta în orice zonă din Sectorul 4  : Aparatorii Patriei , Alexandru Obregia , Alunisului , Aurel Persu , Berceni , Budapesta , Bulevardul Abatorului , Bulevardul Marasesti , Calea Serban Voda , Constantin Brancoveanu , Cutitul de Argint , Dimitrie Cantemir , Dimitrie Leonida , Drumul Gazarului , Eroii Revolutiei , Emil Racovita , George Bacovia , Gheorghe Sincai , Grigore Marin , Huedin , Ira, Iriceanu , 11 Iunie , Iuliu Hateganu , Izvorul Rece , Lamotesti , Luica , Martisor , Metalurgiei , Mitropolie , Nitu Vasile , Oltenitei , Parcul Carol , Panselelor , Patriarhie , Principatele Unite , Progresul , Radu Voda , Secuilor , Soldanului , Stoian Militaru , Strada Turnu Magurele , Straja , Timpuri Noi , Tineretului , Toporasi , Tomesti , Trestiana , Vacaresti , Vitan Barzesti , Vulcan.",
        ],
      },
      {
        heading: "Preluare de la morga spitalelor din Sectorul 4",
        paragraphs: [
          "Rezolvam toate documentele si procedurile pentru preluarea persoanelor decedate de la morga spitalelor din Sectorul 4: Spitalul Bagdasar Arseni, Spitalul Sfantul Luca, Spitalul Sfantul Ioan, Spitalul Alexandru Obregia, Spitalul Metropolitan Monza, Institutul Medicina Legala Mina Minovici ( INMIL ).",
        ],
      },
      {
        heading: "Depunere la capelele cimitirelor din Sectorul 4",
        paragraphs: [
          "Oferim serviciul de depunere a persoanelor decedate la capelele cimitirelor din Sector 4 : Cimitirul Bellu ( Ortodox, Catolic, Militar ), Cimitirul Berceni 2, Cimitirul Metalurgiei, Cimitirul Eternitatea, Cimitirul Progresu, Cimitirul Evanghelic Lutheran, Cimitirul Evreiesc, Cimitirul Eroii Revolutiei, Cimitirul Caramidarii de Jos, Cimitirul Adormirea Maicii Domnului, Cimitirul Cutitul de Argint.",
        ],
      },
    ],
    faqs: [
      {
        question: "Cât de repede interveniți în Sectorul 4?",
        answer:
          "În caz de urgență, intervenim în medie în 15–30 de minute. Timpul de sosire depinde de adresă și de condițiile de trafic; confirmați detaliile la 0785.165.165.",
      },
      {
        question:
          "Vă ocupați de documentele pentru preluare și de depunerea la capelă?",
        answer:
          "Da. Ne ocupăm de formalitățile și documentele pentru preluarea persoanelor decedate de la morga spitalelor din Sectorul 4 și de depunerea la capelele cimitirelor din zonă.",
      },
    ],
    relatedSlugs: [
      "servicii-funerare-sector-3",
      "servicii-funerare-sector-5",
      "preturi-servicii-funerare-bucuresti",
      "servicii-funerare-bucuresti",
    ],
  },
  "servicii-funerare-sector-5": {
    slug: "servicii-funerare-sector-5",
    title: "Servicii Funerare Sector 5",
    metaTitle: "Servicii Funerare Sector 5 ☎️ 0785.165.165",
    description:
      "Servicii funerare in Sector 5 Bucuresti.Organizare procesiune funerara completa, transport autorizat, depunere capela. Sunati la ☎️ 0785.165.165",
    eyebrow: "București · Sector 5",
    breadcrumbLabel: "Sector 5",
    isSector: true,
    h1: "Servicii funerare Sector 5 București — asistență non-stop",
    intro:
      "Agenția Funerară Argo oferă servicii funerare complete non-stop în Sectorul 5 din București. Consiliere, documente, transport funerar și depunere la capelă. Telefon: 0785.165.165.",
    image: CEREMONIE_2.src,
    imageAlt: CEREMONIE_2.alt,
    imageAspect: CEREMONIE_2.aspect,
    sections: [
      {
        heading: "Arie de acoperire în cartierele din Sectorul 5",
        paragraphs: [
          "In cazul unui deces imprevizibil ne deplasam (în medie 15 - 30 minute) in caz de urgenta în orice zonă din Sector 5  :  Amurgului , Antiaeriana , Barca , Bulevardul Natiunile Unite , Bulevardul Eroii Sanitari , Buzoieni , Calea Rahovei , Cismigiu , Cotroceni , Confort Urban , Doctor Carol Davila , Doina , Drumul Sarii , Dumbrava Noua , Echinoctiului , Electromagnetica , Eroilor , Eroii Sanitari , Ferentari , Garoafei , Gazelei , George Cosbuc , Humulesti , Iacob Andrei , Ilina , Izvor , Libertatii , Livezilor , Margeanului , Malcoci , Mihail Kogalniceanu , Nasaud , Panduri , Pecineaga , Petre Ispirescu , Pieptanari , Pucheni , Rahova , Regina Elisabeta , 13 Septembrie , Soseaua Alexandriei , Splaiul Independentiei , Sebastian , Soseaua Salaj , Spatarul Preda , Stefan Odobleja , Strada Teius , Tiparnitei , Trafic Greu , Uranus , Valtoare , Veseliei , Vigoniei , Viilor , Zetari.",
        ],
      },
      {
        heading: "Preluare de la morga spitalelor din Sectorul 5",
        paragraphs: [
          "Preluam persoanele decedate de la morga spitalelor din Sectorul 5: Spitalul Universitar Municipal, Spitalul Panduri Theodor Burghele, Institutul Pneumologie Marius Nasta.",
        ],
      },
      {
        heading: "Depunere la capelele cimitirelor din Sectorul 5",
        paragraphs: [
          "Ne ocupam de depunerea persoanelor decedate la capelele cimitirelor din Sector 5 : Cimitirul Tudor Vladimirescu, Cimitirul Pace Voua.",
        ],
      },
    ],
    faqs: [
      {
        question: "Cât de repede interveniți în Sectorul 5?",
        answer:
          "În caz de urgență, intervenim în medie în 15–30 de minute. Timpul de sosire depinde de adresă și de condițiile de trafic; confirmați detaliile la 0785.165.165.",
      },
      {
        question:
          "Vă ocupați de documentele pentru preluare și de depunerea la capelă?",
        answer:
          "Da. Ne ocupăm de formalitățile și documentele pentru preluarea persoanelor decedate de la morga spitalelor din Sectorul 5 și de depunerea la capelele cimitirelor din zonă.",
      },
    ],
    relatedSlugs: [
      "servicii-funerare-sector-4",
      "servicii-funerare-sector-6",
      "servicii-funerare-bucuresti",
      "pompe-funebre-bucuresti",
    ],
  },
  "servicii-funerare-sector-6": {
    slug: "servicii-funerare-sector-6",
    title: "Servicii Funerare Sector 6",
    metaTitle: "Servicii Funerare Sector 6 ☎️ 0785.165.165",
    description:
      "Servicii funerare in Sector 6 Bucuresti. Servicii de pompe funebre la preturi accesibile oricui. Apelati ☎️ 0785.165.165",
    eyebrow: "București · Sector 6",
    breadcrumbLabel: "Sector 6",
    isSector: true,
    h1: "Servicii funerare Sector 6 București — asistență non-stop",
    intro:
      "Agenția Funerară Argo oferă servicii funerare complete non-stop în Sectorul 6 din București. Consiliere, documente, transport funerar și depunere la capelă. Telefon: 0785.165.165.",
    image: FLORI_1.src,
    imageAlt: FLORI_1.alt,
    imageAspect: FLORI_1.aspect,
    sections: [
      {
        heading: "Arie de acoperire în cartierele din Sectorul 6",
        paragraphs: [
          "Daca decesul survine neprevazut ne deplasam (în medie 15 - 30 minute) in caz de urgenta în orice zonă din Sector 6  : Apusului , Barsanesti , Bulevardul 1 Mai , Bulevardul Iuliu Maniu , Bulevardul Timisoara , Bulevardul 1864 , Bulgarus , Cartier Brancusi , Cartierul Latin , Compozitorilor , Constructorilor , Cooperativei , Crangasi , Crizantemelor , Dreptatii , Dezrobirii , Dimri Residence , Drumul Taberei , Favorit , Ghencea , Ghidigeni , Ghindarilor , Giulesti , Giulesti Sarbi , Gorjului , Granitului , Grozavesti , Haiducului , Liniei , Lujerului , Margelelor , Militari , Militari Residence , Moghioros , Orizont , Pacii , Petrache Poenaru , Petre Popovat , Plevnei , Politehnica , Porumbacu , Preciziei , Prelungirea Ghencea , Rasadnitei , Rasaritului , Raul Doamnei , Razoare , Regie , Romancierilor , Sfantul Ilie , Semanantoarea , Sergent Nutu Ion , Soseaua Orhideelor , Strada Brasov , Strada Moinesti , Strada Sibiu , Strada Targu Neam , Strada Valea Oltului , Timonierului , Tincani , Tricodava , Uverturii , Vasile Milea , Veteranilor , Valea Argesului , Valea Cascadelor , Valea Furcii , Valea Ialomitei , Valea Lunga , Vijeliei , Virtutii , Vintila Mihaescu , Vladeasa .",
        ],
      },
      {
        heading: "Preluare de la morga spitalelor din Sectorul 6",
        paragraphs: [
          "Preluam persoanele decedate de la morga spitalelor din Sectorul 6: Spitalul CF Witing, Spitalul Welborn.",
        ],
      },
      {
        heading: "Depunere la capelele cimitirelor din Sectorul 6",
        paragraphs: [
          "Depunem trupul neinsufletit al persoanelor decedate la capelele cimitirelor din Sector 6 : Cimitirul Ghencea ( Civil, Militar, 2 Domnesti ), Cimitirul Parohial Militari, Cimitirul Calvin, Cimitirul Giulesti Sarbi, Cimitirul Sfantul Ilie, Cimitirul Adormirea Maicii Domnului, Cimitirul Vest, Cimitirul Buna Vestire, Cimitirul Arhangheli Mihail si Gavril ( A1 ), Cimitirul Sarindar, Cimitirul Eroilor Turci.",
        ],
      },
    ],
    faqs: [
      {
        question: "Cât de repede interveniți în Sectorul 6?",
        answer:
          "În caz de urgență, intervenim în medie în 15–30 de minute. Timpul de sosire depinde de adresă și de condițiile de trafic; confirmați detaliile la 0785.165.165.",
      },
      {
        question:
          "Vă ocupați de documentele pentru preluare și de depunerea la capelă?",
        answer:
          "Da. Ne ocupăm de formalitățile și documentele pentru preluarea persoanelor decedate de la morga spitalelor din Sectorul 6 și de depunerea la capelele cimitirelor din zonă.",
      },
    ],
    relatedSlugs: [
      "servicii-funerare-sector-5",
      "servicii-funerare-sector-1",
      "preturi-servicii-funerare-bucuresti",
      "firma-pompe-funebre",
    ],
  },
  "servicii-funerare-judetul-ilfov": {
    slug: "servicii-funerare-judetul-ilfov",
    title: "Servicii Funerare Judetul Ilfov",
    metaTitle: "Servicii Funerare Judetul Ilfov ☎️ 0785.165.165",
    description:
      "Servicii funerare complete în județul Ilfov. Firmă autorizată DSP, cu peste 30 de ani de experiență. Dispecerat non-stop: 0785.165.165.",
    eyebrow: "Județul Ilfov",
    breadcrumbLabel: "Ilfov",
    isSector: true,
    h1: "Servicii funerare județul Ilfov — asistență non-stop",
    intro:
      "Agenția Funerară Argo, înființată în 1992, oferă servicii funerare complete în toate localitățile județului Ilfov, cu peste 30 de ani de experiență. Dispecerat non-stop: 0785.165.165.",
    image: SPRIJIN_2.src,
    imageAlt: SPRIJIN_2.alt,
    imageAspect: SPRIJIN_2.aspect,
    sections: [
      {
        heading: "Arie de acoperire în județul Ilfov",
        paragraphs: [
          "Indiferent unde se intampla decesul ne deplasam (în medie 15 - 30 minute) in caz de urgenta în orice localitate din Judetul Ilfov  : Afumati , Balaceanca , Balotesti , Balta Neagra , Balteni , Berceni , Bragadiru , Branesti , Buciumeni , Buda , Buftea , Burias , Caciulati , Caldararu , Catelu , Cernica , Chiajna , Chitila , Ciofliceni , Ciolpani , Ciorogarla , Clinceni , Corbeanca , Cornetu , Cozieni , Creata , Cretesti , Cretuleasca , Darasti , Darvari , Dascalu , Dimieni , Dobroesti , Domnesti , Dragomiresti-Deal , Dragomirești-Vale , Dudu , Dumbraveni , Fundeni , Gagu , Ganeasa , Ghermanesti , Glina , Gruiu , Gradistea , Islaz , Izvorani , Jilava , Lipia , Luparia , Magurele , Maineasca , Manolache , Merii Petchii , Micsunesti-Moara , Micsunestii Mari , Moara Domneasca , Moara Vlasiei , Mogosoaia , Nuci, Odaile , Olteni , Ordoneanu , Ostraru , Otopeni , Pantelimon , Pasarea , Peris , Petresti , Petrichioaia , Piscu , Piteasca , Popesti – Leordeni , Posta , Rosu , Runcu , Saftica , Santu-Floresti , Silistea Snagovului , Sindrilita , Sintesti , Sitaru , Snagov , Stefanestii de Jos & Sus , Surlari , Tamasi , Tancabesti , Tanganu , Teghes , Tunari , Vadu Anei , Vanatori , Vidra , Vladiceasca , Voluntari , Zurbaua.",
        ],
      },
      {
        heading: "Preluare de la morga spitalelor din județul Ilfov",
        paragraphs: [
          "Preluam persoanele decedate de la morga spitalelor din Judetul Ilfov: Institutul National Ana Aslan ( Otopeni ), Spitalul Cardiovascular Agrippa Ionescu ( Balotesti ), Spitalul Sfantul Sava ( Pantelimon ), Spitalul Orasenesc ( Voluntari ).",
        ],
      },
      {
        heading: "Depunere la capelele cimitirelor din Ilfov",
        paragraphs: [
          "Ne ocupam de depunerea persoanelor decedate la capelele cimitirelor din toate localitatile judetului Ilfov",
        ],
      },
    ],
    faqs: [
      {
        question: "Costă mai mult transportul în Ilfov?",
        answer:
          "Distanța poate influența costul transportului; vă comunicăm clar înainte de confirmare. Pachetele de bază rămân accesibile.",
      },
      {
        question: "Ajungeți și noaptea în Ilfov?",
        answer:
          "Da. Dispeceratul non-stop acoperă județul Ilfov la fel ca Bucureștiul.",
      },
    ],
    relatedSlugs: [
      "servicii-funerare-sector-1",
      "servicii-funerare-bucuresti",
      "agentia-funerara-argo",
      "firma-pompe-funebre",
    ],
  },
};

/** All slugs for SSG and sitemap. */
export const allSlugs = Object.keys(pages);

export function getPage(slug: string): PageContent | undefined {
  return Object.prototype.hasOwnProperty.call(pages, slug)
    ? pages[slug]
    : undefined;
}

export function getRelatedPages(slugs: string[]): PageContent[] {
  return slugs
    .map((slug) => getPage(slug))
    .filter((page): page is PageContent => page !== undefined);
}
