import type { CampsiteConfig } from "../types";

/**
 * Seecamping Mentl — Familie Lauritsch, am Südufer des Ossiacher Sees
 * (Villach-Landskron, Kärnten). Alle Texte/Fakten belegt aus camping-mentl.at
 * (Stand-Scrape 2026-06). Quellenbelege siehe leads/camping-mentl/REPORT.md.
 *
 * Bilder = ausschließlich eigene Mentl-Fotos sowie von der eigenen Website
 * publizierte Regions-/Aktivitätsbilder (Region Villach Tourismus), kopiert nach
 * /public/campsites/camping-mentl/. Jedes Bild wurde per Vision geprüft.
 *
 * EHRLICH:
 * - Der Platz liegt DIREKT am sonnigen Südufer des Ossiacher Sees → "am See" belegt.
 * - Stellplatz-/Campingpreise pro Nacht stehen NICHT auf der Quelle (campingpreise-Seite
 *   nicht im Scrape; nur Wochen-Pauschalen + Unterkunftspreise). Buchungs-Kategorien =
 *   reale Unterkunftspreise pro Nacht (Quelle: Preisliste 2026 / accommodation-rates).
 *   priceNote weist Stellplatzpreise als "auf Anfrage" aus. Kein Preis ist erfunden →
 *   pricesArePlaceholder: false.
 * - Auszeichnungen: nur unbenannte Qualitäts-/Bewertungs-Badges im Footer, keine klar
 *   benannte Auszeichnung belegt (Auszeichnungs-Seite nicht im Scrape) → awards: [].
 * - Keine Koordinaten auf der Quelle → coords ausgelassen (Karte aus, Adresse zeigt).
 */
const IMG = "/campsites/camping-mentl";

const campingMentl: CampsiteConfig = {
  name: "Seecamping Mentl",
  shortName: "Mentl",
  slug: "camping-mentl",
  ort: "Villach-Landskron",
  region: "Kärnten",
  brandKind: "Seecamping am Ossiacher See",
  see: "Ossiacher See",
  regionLong: "Ossiacher See · Region Villach · Kärnten · Österreich",

  claim: "Ihr Campingurlaub direkt am Ossiacher See",
  claimEmphasis: "direkt am Ossiacher See",
  intro:
    "Familiengeführter Campingplatz am sonnigen Südufer des Ossiacher Sees — mit großzügigen Stellplätzen, Seeblick und vielfältigem Freizeitangebot, eingebettet zwischen der Gerlitzen Alpe und den Ossiacher Tauern.",

  logo: { src: `${IMG}/logo-seecamping-mentl.png`, alt: "Seecamping Mentl am Ossiacher See – Logo" },

  statement: {
    text: "Bei uns am Südufer wird Ihr Campingurlaub zum echten Highlight — familiengeführt, sonnig und mitten in der Kärntner Natur.",
    emphasis: "zum echten Highlight",
  },

  pillars: [
    {
      title: "Direkt am Südufer",
      text: "Idyllisch am sonnigen Südufer des Ossiacher Sees gelegen — mit eigener Liegewiese, Steg und Badetemperaturen von bis zu 27 °C.",
      image: { src: `${IMG}/liegewiese-am-see.webp`, alt: "Liegewiese und Badesteg am Ossiacher See beim Seecamping Mentl" },
    },
    {
      title: "Spieleland Atlantis",
      text: "Großer Spielturm, eigener Kleinkinderbereich und der Felsenpfad „Wächter Ossion“ — bei Mentl wird der Familienurlaub am See zum Abenteuer.",
      image: { src: `${IMG}/spieleland-atlantis.webp`, alt: "Kinderspielplatz Spieleland Atlantis am Seecamping Mentl" },
    },
    {
      title: "Stellplätze mit Seeblick",
      text: "Großzügige Stellplätze mit traumhaftem Seeblick, Stromanschluss an allen Plätzen und Wasser-/Abwasseranschluss an 90 % der Plätze.",
      image: { src: `${IMG}/stellplatz-mit-seeblick.webp`, alt: "Stellplatz mit Seeblick am Südufer des Ossiacher Sees" },
    },
  ],

  usps: [
    "Familiengeführt",
    "Direkt am Südufer des Ossiacher Sees",
    "Stellplätze mit Seeblick",
    "Strom an allen Stellplätzen",
    "Spieleland Atlantis & Felsenpfad",
    "Café, Hofladen & Restaurant am Platz",
    "SUP- & Bike-Verleih",
  ],

  trust: {
    heading: "Worauf Sie sich bei Familie Lauritsch verlassen können",
    headingEmphasis: "verlassen",
    intro:
      "Persönlich geführt von Familie Lauritsch, direkt am sonnigen Südufer des Ossiacher Sees — mit moderner Sanitäranlage, Strom an allen Stellplätzen und herzlicher Gastfreundschaft.",
  },

  // Keine klar benannte Auszeichnung auf der Quelle belegt → ehrlich leer (Band zeigt nur USP-Pills).
  awards: [],

  saison: { von: "Mai", bis: "September" },

  hero: {
    aerial: { src: `${IMG}/hero-luftaufnahme.webp`, alt: "Luftaufnahme: Seecamping Mentl direkt am Südufer des Ossiacher Sees" },
    sunset: { src: `${IMG}/see-panorama.webp`, alt: "Abendstimmung am Ossiacher See mit Blick auf die Berge" },
  },

  camping: {
    heading: "Camping direkt am Ossiacher See",
    intro:
      "Unser familienfreundlicher Campingplatz liegt am sonnigen Südufer des Ossiacher Sees — eingebettet zwischen Gerlitzen Alpe und Ossiacher Tauern, mit Strom an allen Stellplätzen, moderner Sanitäranlage und allem, was Camper am Wasser brauchen.",
    features: [
      {
        title: "Wassersport am See",
        text: "Direkter Seezugang, SUP- und Bike-Verleih, Beachvolleyball und Tischtennis — der Ossiacher See liegt Ihnen zu Füßen.",
        image: { src: `${IMG}/kajak-am-see.webp`, alt: "Kajaks am Ufer des Ossiacher Sees beim Seecamping Mentl" },
      },
      {
        title: "Café Mentl & Hofladen",
        text: "Frisches Gebäck am Morgen, Kaffee und Kuchen am Nachmittag, regionale Spezialitäten und ein SB-Terminal fast rund um die Uhr.",
        image: { src: `${IMG}/cafe-hofladen.webp`, alt: "Café Mentl und Hofladen mit frischem Gebäck am Campingplatz" },
      },
      {
        title: "Restaurant Tamara",
        text: "Direkt gegenüber dem Campingplatz: schmackhafte Steaks und hausgebrannte Schnäpse im Restaurant Tamara.",
        image: { src: `${IMG}/restaurant-tamara.webp`, alt: "Restaurant Tamara gegenüber dem Seecamping Mentl" },
      },
      {
        title: "Alles am Platz",
        text: "Rezeption, Café und Shop am Platz, ein Supermarkt rund 200 m entfernt und der Bootssteg der Ossiacher See Schifffahrt etwa 400 m vom Campingplatz.",
        image: { src: `${IMG}/rezeption-cafe-pension.webp`, alt: "Rezeption, Café und Shop am Seecamping Mentl" },
      },
    ],
  },

  mobilheime: {
    heading: "Zimmer, Apartments & Mobile Homes",
    intro:
      "Wer Campingflair mag, aber nicht auf ein weiches Bett verzichten will: gemütliche Einzelzimmer, moderne Apartments und exklusive Mobile Homes in erster Seereihe — alle Services des Campingplatzes inklusive.",
    items: [
      {
        name: "Einzelzimmer",
        kind: "Frühstückspension",
        text: "Gemütliches Einzelzimmer mit Balkon, großer Sonnenterrasse und Flatscreen-SAT-TV — fürs Frühstück gibt es alles im Hofladen.",
        image: { src: `${IMG}/einzelzimmer.webp`, alt: "Einzelzimmer mit Balkon am Seecamping Mentl" },
        priceFrom: 60,
        features: ["1 Person", "Balkon & Sonnenterrasse", "SAT-TV"],
      },
      {
        name: "Ferienwohnung",
        kind: "Apartment",
        text: "Helle Ferienwohnung mit eigener Küche, Wohn-Essbereich und Terrasse in Seerichtung — ideal für Familien.",
        image: { src: `${IMG}/ferienwohnung-wohnen.webp`, alt: "Wohnbereich der Ferienwohnung am Seecamping Mentl" },
        priceFrom: 100,
        features: ["bis 4 Personen", "ca. 50 m²", "eigene Küche", "Terrasse in Seerichtung"],
      },
      {
        name: "Ferienwohnung mit Seeblick",
        kind: "Apartment",
        text: "Apartment mit Schlafzimmer-Balkon und Seeblick, Kochecke und zusätzlichem großem Eck-Balkon — Urlaub mit Weitblick.",
        image: { src: `${IMG}/ferienwohnung-seeblick.webp`, alt: "Ferienwohnung mit Balkon und Seeblick am Seecamping Mentl" },
        priceFrom: 105,
        features: ["bis 4 Personen", "Balkon & Seeblick", "Kochecke", "2 SAT-TV"],
      },
      {
        name: "Mobile Home „Nordic Mood“",
        kind: "Mobile Home",
        text: "Exklusives Mobile Home in erhöhter 1. Seereihe mit fantastischem Blick auf See und Gerlitzen — Frühstück bei Sonnenaufgang auf der 8 × 3 m großen Veranda.",
        image: { src: `${IMG}/mobile-home.webp`, alt: "Mobile Home mit großer Veranda in erster Seereihe am Ossiacher See" },
        priceFrom: 205,
        features: ["4 Personen", "1. Seereihe", "8 × 3 m Veranda", "Seeblick"],
      },
    ],
  },

  aktivitaeten: {
    heading: "Aktivurlaub zwischen Berg & See",
    intro:
      "Mediterran-alpin im Herzen der Alpe-Adria-Region Villach: Wassersport, Wandern, Biken und actionreiche Ausflüge — rund um den Ossiacher See wird es nie langweilig.",
    items: [
      {
        title: "Stand-up-Paddeln & Segeln",
        text: "Surfen, Segeln und SUP auf dem Ossiacher See — Anfänger wie Fortgeschrittene kommen hier auf ihre Kosten.",
        image: { src: `${IMG}/sup-segeln.webp`, alt: "Stand-up-Paddeln und Segeln auf dem Ossiacher See" },
      },
      {
        title: "Wasserski & Wakeboard",
        text: "Wasserski, Wakeboard und Bananenfahrten hinter dem Motorboot — Wasserspaß für Groß und Klein.",
        image: { src: `${IMG}/wasserski-wakeboard.webp`, alt: "Wasserski am Ossiacher See" },
      },
      {
        title: "Ossiacher See Schifffahrt",
        text: "Zwei komfortable Schiffe und zwei Anlegestellen in unmittelbarer Nähe — entdecken Sie den See vom Wasser aus.",
        image: { src: `${IMG}/schifffahrt.webp`, alt: "Schiff der Ossiacher See Schifffahrt vor dem Stift Ossiach" },
      },
      {
        title: "Wandern & Bergwelt",
        text: "Von der Gerlitzen Alpe bis zu den Ossiacher Tauern: Touren mit weitem Blick über See und Berge.",
        image: { src: `${IMG}/wandern.webp`, alt: "Wandern mit Bergpanorama rund um den Ossiacher See" },
      },
      {
        title: "Paragleiten von der Gerlitzen",
        text: "Die Gerlitzen Alpe am Nordufer zählt zu Österreichs schönsten Flugbergen — mit atemberaubendem Blick über den See.",
        image: { src: `${IMG}/paragleiten-gerlitzen.webp`, alt: "Paragleiten von der Gerlitzen Alpe über dem Ossiacher See" },
      },
      {
        title: "Sommerrodelbahn",
        text: "Unvergesslicher Familienspaß: die Sommerrodelbahn am Ossiacher See — 760 m auf zwei parallelen Bahnen.",
        image: { src: `${IMG}/sommerrodelbahn.webp`, alt: "Sommerrodelbahn am Ossiacher See" },
      },
    ],
  },

  anreise: {
    heading: "So finden Sie zu uns",
    modes: [
      { title: "Mit dem Auto", text: "Sie finden uns an der Ossiacher See Süduferstraße 265 in 9523 Villach-Landskron, am sonnigen Südufer des Sees." },
      { title: "Mit Bahn & Bus", text: "Nächster Knotenpunkt ist Villach; von dort gelangen Sie mit Bus oder Transfer an den Ossiacher See." },
      { title: "Mit dem Schiff", text: "Gleich zwei Anlegestellen der Ossiacher See Schifffahrt liegen in unmittelbarer Nähe — der Bootssteg ist rund 400 m entfernt." },
    ],
  },

  galerie: {
    heading: "Eindrücke vom Ossiacher See",
    headingEmphasis: "Ossiacher See",
    intro:
      "Türkises Wasser, sonnige Liegewiesen und die Bergwelt rundherum — ein paar Eindrücke von Seecamping Mentl und seiner Region.",
    tag: "Mai bis September",
    moreCount: 8,
    images: [
      { src: `${IMG}/blick-ossiacher-see.webp`, alt: "Blick über den türkisen Ossiacher See" },
      { src: `${IMG}/ausblick-ferienwohnung.webp`, alt: "Seeblick vom Balkon einer Ferienwohnung am Seecamping Mentl" },
      { src: `${IMG}/laufen-am-see.webp`, alt: "Rafting im klaren Gebirgswasser der Region Villach" },
      { src: `${IMG}/golf-region.webp`, alt: "Golfen mit Bergpanorama in der Region Villach" },
    ],
  },

  booking: {
    heading: "Verfügbarkeit & Anfrage",
    intro:
      "Wählen Sie Zeitraum, Unterkunft und Personen — Familie Lauritsch meldet sich persönlich mit Ihrer Verfügbarkeit.",
    pricesArePlaceholder: false,
    priceNote:
      "ab-Preise pro Nacht je nach Saison (Mai–September) · Endreinigung € 35 bei Apartment & Mobile Home · Stellplatz- und Campingpreise auf Anfrage",
    highlight: {
      title: "Wochen-Pauschalen",
      text: "Beliebte Angebote wie „Fit in den Frühling“ (€ 195 / 2 Pers. / 7 Nächte) oder die „Atlantiswochen im Juni“ (€ 270 / 4 Pers. / 7 Nächte) — entspannter Campingurlaub zum Fixpreis.",
    },
    categories: [
      // Reale Unterkunftspreise pro Nacht (ab-Wert = niedrigster Saisonpreis), Quelle: Preisliste 2026 / accommodation-rates.
      { id: "einzelzimmer", label: "Einzelzimmer", perNight: 60 },
      { id: "ferienwohnung", label: "Ferienwohnung", perNight: 100 },
      { id: "mobilehome", label: "Mobile Home", perNight: 205 },
    ],
  },

  kontakt: {
    coords: { lat: 46.654525, lng: 13.9372 },
    tel: "+43 4242 41886",
    telHref: "tel:+43424241886",
    mail: "info@camping-mentl.at",
    facebook: "https://www.facebook.com/seecampingmentl/",
    adresse: "Ossiachersee-Süduferstraße 265 · 9523 Villach-Landskron · Kärnten",
  },

  languages: ["DE", "EN"],

  nav: [
    {
      label: "Camping",
      href: "#camping",
      children: [
        { label: "Stellplätze mit Seeblick", href: "#camping" },
        { label: "Liegewiese & See", href: "#camping" },
        { label: "Sanitär & Strom", href: "#camping" },
      ],
    },
    {
      label: "Unterkünfte",
      href: "#mobilheime",
      children: [
        { label: "Zimmer", href: "#mobilheime" },
        { label: "Apartments", href: "#mobilheime" },
        { label: "Mobile Homes", href: "#mobilheime" },
      ],
    },
    {
      label: "Kulinarik",
      href: "#camping",
      children: [
        { label: "Café Mentl", href: "#camping" },
        { label: "Hofladen", href: "#camping" },
        { label: "Restaurant Tamara", href: "#camping" },
      ],
    },
    {
      label: "Aktiv",
      href: "#aktivitaeten",
      children: [
        { label: "Wassersport", href: "#aktivitaeten" },
        { label: "Wandern & Biken", href: "#aktivitaeten" },
        { label: "Ausflüge", href: "#aktivitaeten" },
      ],
    },
    {
      label: "Preise & Lage",
      href: "#booking",
      children: [
        { label: "Preise", href: "#booking" },
        { label: "Anreise", href: "#anreise" },
        { label: "Kontakt", href: "#anreise" },
      ],
    },
  ],
};

export { campingMentl };
export default campingMentl;
