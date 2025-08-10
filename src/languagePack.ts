/* eslint-disable sonarjs/no-duplicate-string */

import BannerImageDesktopHu from "./banner-desktop-hu.jpg";
import BannerImageDesktopEn from "./banner-desktop-en.jpg";
import BannerImageMobileHu from "./banner-mobile-hu.jpg";
import BannerImageMobileEn from "./banner-mobile-en.jpg";

import BabelCampLogo from "./supporter-babel-camp.png";
import GobeLogo from "./supporter-gobe.png";
import GyongyviragosLogo from "./supporter-gyongyviragos-folkmuhely.png";
import HalmosBelaProgram from "./supporter-halmos-bela-program.png";
import NemzetiKulturalisAlap from "./supporter-nemzeti-kulturalis-alap.png";
import HagyomanyokHaza from "./supporter-hagyomanyok-haza.png";

const accommodationUrl = "mailto:hospitality.babelcamp@gmail.com";
const houseRulesUrl = "https://boglart.babelcamp.hu/#hazirend";
const registrationFormUrl = "https://forms.gle/Z4y4g3CXbcJgaz8r9";
const contactUrl = "mailto:info@boglart.hu";

export interface LanguagePack {
  meta: {
    description: string;
    keywords: string;
  };
  otherLanguage: string;
  bannerImageDesktop: string;
  bannerImageMobile: string;
  bannerAltText: string;
  ticketPurchase: {
    caption: string;
    link: string;
  };
  socialMedia: {
    instagram: string;
    facebook: string;
  };
  aboutHeading: string;
  aboutText: string;
  programmeHeading: string;
  furtherProgrammeHeading: string;
  furtherProgrammeText: string;
  programme: {
    day: string;
    schedule: {
      time: string;
      name: string;
      location: string;
    }[];
  }[];
  frequentlyAskedQuestionsHeading: string;
  frequentlyAskedQuestions: {
    question: string;
    answer: string;
  }[];
  supportersHeading: string;
  supporters: {
    name: string;
    logo: string;
    url: string;
  }[];
  mapTitle: string;
  footer: {
    copyright: string;
    accommodation: {
      caption: string;
      url: string;
    };
    houseRules: {
      caption: string;
      url: string;
    };
    contact: {
      caption: string;
      url: string;
    };
    booking: {
      caption: string;
      url: string;
    };
  };
  cookieConsent: {
    text: string;
    button: string;
  };
}

export const hu: LanguagePack = {
  meta: {
    description:
      "Családias világzenei fesztivál és népzenei kurzus a Balaton partján",
    keywords: "fesztivál, világzene, népzene, kurzus, Balaton, Balatonboglár",
  },
  otherLanguage: "English",
  bannerImageDesktop: BannerImageDesktopHu,
  bannerImageMobile: BannerImageMobileHu,
  bannerAltText: "6. Boglart, 2025, Balatonboglár, Babel Camp",
  ticketPurchase: {
    caption: "Jegyvásárlás",
    link: "https://www.tixa.hu/vi-boglart-fesztival-20250827",
  },
  socialMedia: {
    instagram: "https://www.instagram.com/boglart.feszt/",
    facebook: "https://www.facebook.com/boglartfeszt",
  },
  aboutHeading: "A fesztiválról",
  aboutText:
    "A Boglart egy családias fesztivál a Balaton partján. Különlegessége, hogy egyszerre népzenei kurzus, világzenei fesztivál és zeneipari fórum; az alkotók és a közönség egy térben találkozhatnak, beszélgethetnek, szórakozhatnak, eszmét cserélhetnek. A rendezvényt a közösség hozza létre, a népzenét tanulók is részt vesznek a közös táncházakban, a fellépő előadók mesterkurzusokat tartanak, az oktatók saját zenekaraikkal is koncerteznek. A programok nyilvánosak, a közönség megtapasztalhatja a művészek életének különböző oldalait, emellett a fiatal zenészek számára is szakmai fejlődési lehetőséget nyújt. A Babel Camp hangulatos, vadregényes helyszíne kiválóan alkalmas arra, hogy nyugodt, meghitt és változatos négy napot lehessen eltölteni a fesztiválon.",
  programmeHeading: "Koncertek",
  furtherProgrammeHeading: "Programok",
  furtherProgrammeText: `[Népzenei kurzusok](${registrationFormUrl}), amiket a Góbé és a Pásztorhóra zenekar tagjai tartanak egyéb meghívott tanárokkal, valamint néptánc kurzus;|Világzenei workshopok a fellépő előadókkal;|Zeneipari fejlesztő előadások;|Táncházak;|Civil falu a helyi és regionális civil szervezetek bevonásával.|A tanárok listáját, pontos előadásokat [a Facebook oldalunkon](https://www.facebook.com/boglartfeszt) hirdetjük.|Idén is várnak különféle zeneipari előadások, networking lehetőségek, ezúttal külföldi meghívottakkal.|Külföldi kiemelt vendégeink:|• Ronja Grafström (SWE) – zenész, zenepedagógus, szervező|• Lee Taul (EE) – a Viljandi Folk Music Festival fiatal zenekarokért felelős szervezője, zenész, zenepedagógus|• Kirsika Meresmaa (EE) – a Viljandi Folk Music Festival egyik munkatársa, zenei menedzser|• Horváth Tamás (RS) – a Malomfesztivál főszervezője|• Kathryn Döhner és Christopher Schloebeck (DE) – a leisnigi Kulturbahnhof klub vezetői|• Gondi Mátyás (RO) – a Double Rise fesztivál főszervezője`,
  programme: [
    {
      day: "Augusztus 27., szerda",
      schedule: [
        { time: "18:30", name: "", location: "" },
        {
          time: "19:00",
          name: "Varga István „Kiscsipás” és zenekara (RO)",
          location: "Nagyszínpad",
        },
        { time: "19:15", name: "", location: "" },
        { time: "19:45", name: "", location: "" },
        { time: "20:00", name: "Pontos (GR/HU)", location: "Nagyszínpad" },
        { time: "20:15", name: "", location: "" },
        { time: "20:30", name: "", location: "" },
        { time: "21:00", name: "Kaptza", location: "Nagyszínpad" },
        { time: "21:30", name: "", location: "" },
        { time: "22:00", name: "", location: "" },
        { time: "22:15", name: "Pásztorhóra", location: "Nagyszínpad" },
        {
          time: "23:00",
          name: "Közös táncház",
          location: "Romkocsma",
        },
      ],
    },
    {
      day: "Augusztus 28., csütörtök",
      schedule: [
        { time: "18:30", name: "Ysra", location: "Kisszínpad" },
        { time: "19:00", name: "", location: "" },
        { time: "19:15", name: "Wolfolks", location: "Nagyszínpad" },
        { time: "19:45", name: "", location: "" },
        {
          time: "20:00",
          name: "Trio Playadito (AR/HU)",
          location: "Kisszínpad",
        },
        { time: "20:15", name: "", location: "" },
        { time: "20:30", name: "Alterne (BE/DK/EE)", location: "Nagyszínpad" },
        { time: "21:00", name: "", location: "" },
        { time: "21:30", name: "Afrikora (SN)", location: "Kisszínpad" },
        { time: "22:00", name: "Rézeleje", location: "Nagyszínpad" },
        { time: "22:15", name: "", location: "" },
        {
          time: "23:00",
          name: "Közös táncház",
          location: "Romkocsma",
        },
      ],
    },
    {
      day: "Augusztus 29., péntek",
      schedule: [
        { time: "18:30", name: "Budapest Folk Duo", location: "Kisszínpad" },
        { time: "19:00", name: "Amaro Duho", location: "Nagyszínpad" },
        { time: "19:15", name: "", location: "" },
        { time: "19:45", name: "Okos Viola", location: "Kisszínpad" },
        { time: "20:00", name: "", location: "" },
        { time: "20:15", name: "Veja (HR)", location: "Nagyszínpad" },
        { time: "20:30", name: "", location: "" },
        { time: "21:00", name: "", location: "" },
        { time: "21:30", name: "Obadu", location: "Kisszínpad" },
        { time: "22:00", name: "Zajnal", location: "Nagyszínpad" },
        { time: "22:15", name: "", location: "" },
        {
          time: "23:00",
          name: "Közös táncház",
          location: "Romkocsma",
        },
      ],
    },
    {
      day: "Augusztus 30., szombat",
      schedule: [
        { time: "18:30", name: "Roma Big Band", location: "Kisszínpad" },
        { time: "19:00", name: "Puli", location: "Nagyszínpad" },
        { time: "19:15", name: "", location: "" },
        { time: "19:45", name: "Akleja (DE)", location: "Kisszínpad" },
        { time: "20:00", name: "Góbé", location: "Nagyszínpad" },
        { time: "20:15", name: "", location: "" },
        { time: "20:30", name: "", location: "" },
        { time: "21:00", name: "Akleja (DE)", location: "Kisszínpad" },
        { time: "21:30", name: "", location: "" },
        {
          time: "22:00",
          name: "Cimbalom Guachacha (CL)",
          location: "Nagyszínpad",
        },
        { time: "22:15", name: "", location: "" },
        {
          time: "23:00",
          name: "Közös táncház",
          location: "Romkocsma",
        },
      ],
    },
  ],
  frequentlyAskedQuestionsHeading: "Gyakran ismételt kérdések",
  frequentlyAskedQuestions: [
    {
      question: "Lehet sátrazni a fesztivál területén?",
      answer: `Sajnos sátrazásra a területen belül nincs lehetőség, de [szállásfoglalásra igen](${accommodationUrl}).|Ha pedig mindenképp sátorozni szeretnél, [ebben a kempingben](https://sellocamping.hu/) teheted meg Balatonbogláron (kb. 15 perc séta a fesztivál helyszínétől).`,
    },
    {
      question: "Lesz étkezési lehetőség a fesztivál területén?",
      answer:
        "Igen, többféle lehetőséggel is készülünk. Sajnos nincs lehetőségünk felkészülni speciális étrendekre (pl. vegán, gluténmentes), allergiákra, ilyen esetben nyugodtan hozd be a számodra megfelelő ételt, a megmelegítésben tudunk segíteni.|Természetesen alkoholmentes és alkoholos italok vásárlására a koncerthelyszíneknél lesz lehetőség.",
    },
    {
      question: "Van étkezési vagy vásárlási lehetőség a településen?",
      answer:
        "Természetesen igen, a Babel Camp 1 km-es körzetében van élelmiszerbolt, gyógyszertár, orvosi ügyelet, bankautomata, nemzeti dohánybolt, fagyizó, és minden, amire szükségetek lehet.",
    },
    {
      question: "Milyen időtartamra szólnak a jegyek?",
      answer:
        "A napijegyek az adott napon reggel 9 órától a következő nap reggel 10 óráig szólnak.|A hétvégi jegyek péntek reggel 9 órától vasárnap délig szólnak.|A hetijegyek szerda reggel 9 órától vasárnap délig szólnak.|A kurzusjegyek csak a zenei, táncos kurzusra és a workshopokra szólnak, és a teljes rendezvényre a fesztivál jegyekkel együtt érvényesek.|A jegyek érvényességi ideje nem érinti a szállásfoglalást. Az újonnan érkezők a szobájukatt 14 órától foglalhatják el.",
    },
    {
      question: "Hányszor közlekedhetek ki-be a jeggyel?",
      answer:
        "Akárhányszor. A jegy nem csak egyszeri belépésre jogosít fel, nyugodtan ugorj le a Balatonhoz és csobbanj egyet két program között.",
    },
    {
      question:
        "Szeretnék jelentkezni a hangszeres/táncos kurzusra, ezt hogyan tehetem meg?",
      answer: `A legszuperebb az lenne, ha kitöltenéd [a jelentkezési lapot](${registrationFormUrl}).|Azonban, ha hirtelen felindulásból találod ki, hogy jönnél, a helyszínen is jelentkezhetsz, ha pedig kérdéseid vannak, [írj nekünk](${contactUrl}).`,
    },
    {
      question:
        "Szeretnék jelentkezni a hangszeres/táncos kurzusra, de nincsen saját hangszerem, mit tegyek?",
      answer: `[Írj nekünk](${contactUrl}) legkésőbb a fesztivál előtti héten, ha tudunk szerezni hangszert neked, megoldjuk! De azért szeretnénk jelezni, hogy a kurzusaink elsősorban nem olyanoknak szólnak, akik ott szeretnének elkezdeni játszani valamilyen hangszeren – ebben az esetben is írj, és megpróbáljuk a számodra legmegfelelőbb kurzust ajánlani.`,
    },
    {
      question:
        "Szeretnék jelentkezni a hangszeres/táncos kurzusra, de nem tudok minden nap ott lenni, lehetséges ez?",
      answer: `Alapvetően igen, de mivel egy meghatározott anyaggal haladnak a csoportok, ezt a tanárokkal is meg kell beszélnünk, és azt ajánljuk, ha tudsz, végig legyél jelen. [Írj nekünk](${contactUrl}) és kitalálunk valamilyen megoldást!`,
    },
    {
      question:
        "Érdekel a táncházas program is, de soha nem jártam még ilyenen, van lehetőség becsatlakozni?",
      answer:
        "Van, a táncházak alatt tánctanítás is lesz, így nyugodtan csatlakozhatsz újdonsült folkarcként is.",
    },
    {
      question:
        "Tömegközlekedéssel érkezem, hogyan közelítsem meg a helyszínt?",
      answer: `Legegyszerűbb Budapestről vonattal lejutni. A menetrendet [megtalálod az Elvirán](https://elvira.mav-start.hu/).|Amennyiben máshonnan érkezel és elakadsz, [írj nekünk](${contactUrl}), igyekszünk segíteni.`,
    },
    {
      question: "Autóval érkezem, van lehetőség ingyen parkolásra?",
      answer:
        "Igen, korlátozott számban van parkolóhely a Babel Camp területén, és a településen számtalan helyen tudsz parkolni a közelben. A városban a legtöbb parkolóhely fizetős.",
    },
    {
      question: "Mennyire akadálymentesített a fesztivál?",
      answer: `A helyszín teljesen akadálymentesített, de ha további kérdéseid, speciális igényeid, szükségleteid vannak, [keress minket](${contactUrl}) előzetesen vagy a helyszínen, és segítünk mindenben.`,
    },
    {
      question: "Van Balatonbogláron ingyenes strand?",
      answer:
        "Igen, van, a fesztiválterülethez legközelebb eső strand a Platán strand.",
    },
    {
      question: "Mennyire állatbarát a fesztivál?",
      answer: `Személyesen nagyon azok vagyunk, de mivel sok az ember és a mindenfelé heverő hangszer, megköszönjük, ha [egyeztetsz velünk](${contactUrl}), ha kedvenced lehoznád a fesztiválra.`,
    },
    {
      question:
        "Szeretnék felajánlani egy saját programot, felajánlani valamit a fesztiválnak, önkénteskedni. Lehetséges ez?",
      answer: `Természetesen, [írj nekünk](${contactUrl}). Minden ötletet, felajánlást, hozzájárulást, részvételi szándékot szívesen fogadunk. A fesztiválunk pont a közösségépítésről szól!`,
    },
  ],
  supportersHeading: "Támogatók",
  supporters: [
    {
      name: "Halmos Béla Program",
      logo: HalmosBelaProgram,
      url: "https://halmosbelaprogram.hu/",
    },
    {
      name: "Góbé",
      logo: GobeLogo,
      url: "https://www.gobeband.com/",
    },
    {
      name: "Nemzeti Kulturális Alap",
      logo: NemzetiKulturalisAlap,
      url: "https://nka.hu/",
    },
    {
      name: "Gyöngyvirágos Folkműhely",
      logo: GyongyviragosLogo,
      url: "https://www.facebook.com/folkmuhely/",
    },
    {
      name: "Babel Camp",
      logo: BabelCampLogo,
      url: "https://babelcamp.hu/",
    },
    {
      name: "Hagyományok Háza",
      logo: HagyomanyokHaza,
      url: "https://hagyomanyokhaza.hu/hu",
    },
  ],
  mapTitle: "Babel Camp",
  footer: {
    copyright: "© 2024-2025, Góbé Kulturális Egyesület",
    accommodation: {
      caption: "Szállásfoglalás",
      url: accommodationUrl,
    },
    houseRules: {
      caption: "Házirend",
      url: houseRulesUrl,
    },
    contact: {
      caption: "Kapcsolat",
      url: contactUrl,
    },
    booking: {
      caption: "Booking",
      url: "mailto:allearsmanagement@gmail.com",
    },
  },
  cookieConsent: {
    text: "Sütik használatával javítjuk a felhasználói élményt. Elfogadod az analitikai célú sütiket?",
    button: "Elfogadom",
  },
};

export const en: LanguagePack = {
  meta: {
    description:
      "Cozy world music festival and folk music camp on the shores of Lake Balaton",
    keywords: "festival, world music, folk music, Balaton, Balatonboglár",
  },
  otherLanguage: "Magyar",
  bannerImageDesktop: BannerImageDesktopEn,
  bannerImageMobile: BannerImageMobileEn,
  bannerAltText: "6. Boglart, 2025, Balatonboglár, Babel Camp",
  ticketPurchase: {
    caption: "Tickets",
    link: "https://www.tixa.hu/vi-boglart-fesztival-20250827",
  },
  socialMedia: {
    instagram: "https://www.instagram.com/boglart.feszt/",
    facebook: "https://www.facebook.com/boglartfeszt",
  },
  aboutHeading: "About the festival",
  aboutText:
    "Boglart is a family-friendly festival on the shores of Lake Balaton. Its uniqueness lies in being simultaneously a folk music course, a world music festival, and a music industry forum; it offers a safe space where creators and the audience can meet, converse, enjoy themselves, and exchange ideas. The event is community-driven, with folk music learners participating in dance houses, performers giving masterclasses, and instructors also performing with their own bands. The programs are open to the public, allowing the audience to experience different aspects of the artists’ lives while providing young musicians with opportunities for professional development. The charming, wild setting of Babel Camp is perfect for spending a peaceful, intimate, and diverse four days at the festival.",
  programmeHeading: "Concerts",
  furtherProgrammeHeading: "Programmes",
  furtherProgrammeText: `[Folk music courses](${registrationFormUrl}) taught by members of the bands Góbé and Pásztorhóra, along with other invited teachers, as well as a folk dance course;|World music workshops with the performing artists;|Music industry development masterclasses;|Dance houses;|Civil village involving local and regional civil organizations.|We will announce the list of teachers and topics of workshops and masterclasses [on our Facebook page](https://www.facebook.com/boglartfeszt).|This year will once again feature various music industry talks, networking opportunities, and this time, international guests.|Our highlighted international guests:|• Ronja Grafström (SWE) – musician, music educator, organizer|• Lee Taul (EE) – organizer responsible for young bands at the Viljandi Folk Music Festival, musician, music educator|• Kirsika Meresmaa (EE) – team member of the Viljandi Folk Music Festival, music manager|• Tamás Horváth (RS) – main organizer of the Malom Festival|• Kathryn Döhner and Christopher Schloebeck (DE) – managers of the Kulturbahnhof club in Leisnig|• Mátyás Gondi (RO) – main organizer of the Double Rise Festival`,
  programme: [
    {
      day: "Wednesday, 27 August",
      schedule: [
        { time: "18:30", name: "", location: "" },
        {
          time: "19:00",
          name: "Varga István „Kiscsipás” és zenekara (RO)",
          location: "Main Stage",
        },
        { time: "19:15", name: "", location: "" },
        { time: "19:45", name: "", location: "" },
        { time: "20:00", name: "Pontos (GR/HU)", location: "Main Stage" },
        { time: "20:15", name: "", location: "" },
        { time: "20:30", name: "", location: "" },
        { time: "21:00", name: "Kaptza", location: "Main Stage" },
        { time: "21:30", name: "", location: "" },
        { time: "22:00", name: "", location: "" },
        { time: "22:15", name: "Pásztorhóra", location: "Main Stage" },
        {
          time: "23:00",
          name: "Dance house with the bands",
          location: "Ruin pub",
        },
      ],
    },
    {
      day: "Thursday, 28 August",
      schedule: [
        { time: "18:30", name: "Ysra", location: "Small Stage" },
        { time: "19:00", name: "", location: "" },
        { time: "19:15", name: "Wolfolks", location: "Main Stage" },
        { time: "19:45", name: "", location: "" },
        {
          time: "20:00",
          name: "Trio Playadito (AR/HU)",
          location: "Small Stage",
        },
        { time: "20:15", name: "", location: "" },
        { time: "20:30", name: "Alterne (BE/DK/EE)", location: "Main Stage" },
        { time: "21:00", name: "", location: "" },
        { time: "21:30", name: "Afrikora (SN)", location: "Small Stage" },
        { time: "22:00", name: "Rézeleje", location: "Main Stage" },
        { time: "22:15", name: "", location: "" },
        {
          time: "23:00",
          name: "Dance house with the bands",
          location: "Ruin pub",
        },
      ],
    },
    {
      day: "Friday, 29 August",
      schedule: [
        { time: "18:30", name: "Budapest Folk Duo", location: "Small Stage" },
        { time: "19:00", name: "Amaro Duho", location: "Main Stage" },
        { time: "19:15", name: "", location: "" },
        { time: "19:45", name: "Okos Viola", location: "Small Stage" },
        { time: "20:00", name: "", location: "" },
        { time: "20:15", name: "Veja (HR)", location: "Main Stage" },
        { time: "20:30", name: "", location: "" },
        { time: "21:00", name: "", location: "" },
        { time: "21:30", name: "Obadu", location: "Small Stage" },
        { time: "22:00", name: "Zajnal", location: "Main Stage" },
        { time: "22:15", name: "", location: "" },
        {
          time: "23:00",
          name: "Dance house with the bands",
          location: "Ruin pub",
        },
      ],
    },
    {
      day: "Saturday, 30 August",
      schedule: [
        { time: "18:30", name: "Roma Big Band", location: "Small Stage" },
        { time: "19:00", name: "Puli", location: "Main Stage" },
        { time: "19:15", name: "", location: "" },
        { time: "19:45", name: "Akleja (DE)", location: "Small Stage" },
        { time: "20:00", name: "Góbé", location: "Main Stage" },
        { time: "20:15", name: "", location: "" },
        { time: "20:30", name: "", location: "" },
        { time: "21:00", name: "Akleja (DE)", location: "Small Stage" },
        { time: "21:30", name: "", location: "" },
        {
          time: "22:00",
          name: "Cimbalom Guachacha (CL)",
          location: "Main Stage",
        },
        { time: "22:15", name: "", location: "" },
        {
          time: "23:00",
          name: "Dance house with the bands",
          location: "Ruin pub",
        },
      ],
    },
  ],
  frequentlyAskedQuestionsHeading: "Frequently Asked Questions",
  frequentlyAskedQuestions: [
    {
      question: "Can I camp on the festival grounds?",
      answer: `Unfortunately, camping is not allowed within the festival area, but [you can book accommodations](${accommodationUrl}).|If you still prefer camping, you can do so [at this campsite](https://sellocamping.hu/) in Balatonboglár (about a 15-minute walk away from the festival).`,
    },
    {
      question: "Will there be dining options at the festival site?",
      answer:
        "Yes, we have several options available on-site, also, there are many other options nearby the festival area, in the village. Unfortunately, we cannot accommodate special diets (e.g., vegan, gluten-free) or allergies, so feel free to bring your own suitable food, and we can assist with heating it up.|Alcoholic and non-alcoholic beverages will be available at the festival area.",
    },
    {
      question: "Are there dining or shopping options in the town?",
      answer:
        "Of course, within a 1 km radius of Babel Camp, there is a grocery store, pharmacy, medical service, ATM, tobacco shop, ice cream stand, and everything else you might need.",
    },
    {
      question: "What is the duration of the tickets?",
      answer:
        "Day tickets are valid from 9 AM on the given day until 10 AM the following day.|Weekend tickets are valid from 9 AM on Friday until noon on Sunday.|Week tickets are valid from 9 AM on Wednesday until noon on Sunday.|Course tickets are valid for the music and dance courses and workshops only, and are valid for the entire event when combined with festival tickets.|The validity period of the tickets is independent of your booked accommodation. New arrivals will be able to check in to their rooms from 2 PM.",
    },
    {
      question: "How many times can I enter and exit with my ticket?",
      answer:
        "As many times as you like. The ticket allows multiple entries, so feel free to take a dip in Lake Balaton between events.",
    },
    {
      question:
        "I want to register for an instrumental/dance course, how can I do this?",
      answer: `The best way would be to fill out [the registration form](${registrationFormUrl}).|However, if you decide to join at the last minute, you can register on-site, and if you have any questions, drop us a message.`,
    },
    {
      question:
        "I want to register for an instrumental/dance course but don’t have my own instrument, what should I do?",
      answer: `[Reach out to us](${contactUrl}) no later than the week before the festival, and if we can find an instrument for you, we will arrange it. But please note that our courses are not primarily for those who want to start playing an instrument at the festival – if you are an absolute beginner, reach out to us, and we will try to recommend the most suitable course for you.`,
    },
    {
      question:
        "I want to register for an instrumental/dance course but can’t be there every day, is this possible?",
      answer: `In general, yes. However, since the groups progress with specific material, we need to discuss this with the teachers, and we recommend that you be present throughout if possible. [Reach out to us](${contactUrl}) and we will find a solution.`,
    },
    {
      question:
        "I’m interested in the dance house program, but I’ve never attended one before. Is it possible to join?",
      answer:
        "Yes, dance instruction will be provided during the dance houses, so feel free to join even if you’re new to folk dancing.",
    },
    {
      question: "I am arriving by public transport, how do I reach the venue?",
      answer: `The easiest way is to take the train from Budapest. The timetable [can be found on Elvira](https://elvira.mav-start.hu/).|If you are coming from another location and need help, [reach out to us](${contactUrl}), and we will do our best to assist you.`,
    },
    {
      question: "I am arriving by car, is there free parking available?",
      answer:
        "Yes, there is a limited number of parking spaces at Babel Camp, and there are plenty of places to park nearby in the town. Most parking spaces in the city require a fee.",
    },
    {
      question: "Is the festival accessible?",
      answer: `The venue is fully accessible, but if you have further questions, special needs, or requirements, [please contact us](${contactUrl}) in advance or on-site, and we will help you.`,
    },
    {
      question: "Is there a free public beach in Balatonboglár?",
      answer:
        "Yes, there is. The nearest beach to the festival site is Platán Beach.",
    },
    {
      question: "Is the festival pet-friendly?",
      answer: `We are very pet-friendly. However, since there are many people and musical instruments lying around, we appreciate it if you [let us know](${contactUrl}) that you are bringing your pet with us beforehand.`,
    },
    {
      question:
        "I would like to offer a programme, volunteer, or contribute something to the festival. Is this possible?",
      answer: `Of course, [reach out to us](${contactUrl}). We welcome all ideas, offers, contributions, and initiatives. Our festival is all about community building!`,
    },
  ],
  supportersHeading: "Supporters",
  supporters: [
    {
      name: "Halmos Béla Program",
      logo: HalmosBelaProgram,
      url: "https://halmosbelaprogram.hu/en/",
    },
    {
      name: "Góbé",
      logo: GobeLogo,
      url: "https://www.gobeband.com/gobe/",
    },
    {
      name: "Nemzeti Kulturális Alap",
      logo: NemzetiKulturalisAlap,
      url: "https://nka.hu/",
    },
    {
      name: "Gyöngyvirágos Folkműhely",
      logo: GyongyviragosLogo,
      url: "https://www.facebook.com/folkmuhely/",
    },
    {
      name: "Babel Camp",
      logo: BabelCampLogo,
      url: "https://babelcamp.hu/",
    },
    {
      name: "Hagyományok Háza",
      logo: HagyomanyokHaza,
      url: "https://hagyomanyokhaza.hu/en",
    },
  ],
  mapTitle: "Babel Camp",
  footer: {
    copyright: "© 2024-2025, Góbé Kulturális Egyesület",
    accommodation: {
      caption: "Accommodation",
      url: accommodationUrl,
    },
    houseRules: {
      caption: "General rules",
      url: houseRulesUrl,
    },
    contact: {
      caption: "Contact",
      url: contactUrl,
    },
    booking: {
      caption: "Booking",
      url: "mailto:allearsmanagement@gmail.com",
    },
  },
  cookieConsent: {
    text: "We use cookies to improve your experience. Do you accept analytics cookies?",
    button: "I accept",
  },
};
