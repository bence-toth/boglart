/* eslint-disable sonarjs/no-duplicate-string */

import BannerImageHu from "./banner.jpg";
import BannerImageMobileHu from "./banner-mobile.jpg";
import BabelCampLogo from "./supporter-babel-camp.png";
import GobeLogo from "./supporter-gobe.png";
import GyongyviragosLogo from "./supporter-gyongyviragos-folkmuhely.png";
import HalmosBelaProgram from "./supporter-halmos-bela-program.png";
import NemzetiKulturalisAlap from "./supporter-nemzeti-kulturalis-alap.png";

// TODO: Fix URL
const accommodationUrl = "https://boglart.babelcamp.hu";
// TODO: Fix URL
const houseRulesUrl = "https://boglart.babelcamp.hu";
const registrationFormUrl = "https://forms.gle/qe8DUvJMWxkrQHCs6";
const contactUrl = "mailto:info@boglart.hu";

export interface LanguagePack {
  meta: {
    url: string;
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
    url: "";
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
}

export const hu: LanguagePack = {
  meta: {
    description:
      "Családias világzenei fesztivál és népzenei kurzus a Balaton partján",
    keywords: "fesztivál, világzene, népzene, kurzus, Balaton, Balatonboglár",
    url: "https://boglart.hu",
  },
  otherLanguage: "English",
  bannerImageDesktop: BannerImageHu,
  bannerImageMobile: BannerImageMobileHu,
  bannerAltText: "5. Boglart, 2024, Balatonboglár, Babel Camp",
  ticketPurchase: {
    caption: "Jegyvásárlás",
    link: "https://tixa.hu/V_Boglart_Fesztival_20240828_Balatonboglar",
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
  furtherProgrammeText: `[Népzenei kurzusok](${registrationFormUrl}), amiket a Góbé, a Pásztorhóra és a Tindia zenekar tagjai tartanak egyéb meghívott tanárokkal, valamint néptánc kurzus;|Világzenei workshopok a fellépő előadókkal;|Zeneipari fejlesztő előadások;|Táncházak;|Civil falu a helyi és regionális civil szervezetek bevonásával.|A tanárok listáját, pontos előadásokat [a Facebook oldalunkon](https://www.facebook.com/boglartfeszt) hirdetjük.`,
  programme: [
    {
      day: "2024-08-28",
      schedule: [
        {
          time: "19:00",
          name: "Meybahar [HU/GR]",
          location: "Nagyszínpad",
        },
        {
          time: "20:00",
          name: "Obadu Live Act",
          location: "Civil falu",
        },
        {
          time: "20:30",
          name: "Nogaband [SK]",
          location: "Nagyszínpad",
        },
        {
          time: "22:00",
          name: "Tindia",
          location: "Romkocsma",
        },
        {
          time: "23:00",
          name: "Vonós és moldvai táncház",
          location: "Romkocsma",
        },
      ],
    },
    {
      day: "2024-08-29",
      schedule: [
        {
          time: "19:00",
          name: "Boyongó",
          location: "Nagyszínpad",
        },
        {
          time: "20:00",
          name: "Obadu Live Act",
          location: "Civil falu",
        },
        {
          time: "20:30",
          name: "Ferenczi György és az 1ső Pesti Rackák",
          location: "Nagyszínpad",
        },
        {
          time: "22:00",
          name: "Kapcza Banda",
          location: "Romkocsma",
        },
        {
          time: "23:00",
          name: "Vonós és moldvai táncház",
          location: "Romkocsma",
        },
      ],
    },
    {
      day: "2024-08-30",
      schedule: [
        {
          time: "19:00",
          name: "Times New Román",
          location: "Nagyszínpad",
        },
        {
          time: "20:00",
          name: "Obadu Live Act",
          location: "Civil falu",
        },
        {
          time: "20:30",
          name: "Poklade",
          location: "Nagyszínpad",
        },
        {
          time: "22:00",
          name: "Pásztorhóra",
          location: "Romkocsma",
        },
        {
          time: "23:00",
          name: "Vonós, moldvai és nemzetiségi táncház",
          location: "Romkocsma",
        },
      ],
    },
    {
      day: "2024-08-31",
      schedule: [
        {
          time: "19:00",
          name: "Alterne Trio (BE/EE/DK)",
          location: "Nagyszínpad",
        },
        {
          time: "20:00",
          name: "Obadu Live Act",
          location: "Civil falu",
        },
        {
          time: "20:30",
          name: "Góbé",
          location: "Nagyszínpad",
        },
        {
          time: "22:00",
          name: "Zajnal",
          location: "Romkocsma",
        },
        {
          time: "23:00",
          name: "Vonós és moldvai táncház",
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
        "Igen, többféle lehetőséggel is készülünk. Sajnos nincs lehetőségünk felkészülni speciális étrendekre (pl. vegán, gluténmentes), allergiákra, ilyen esetben nyugodtan hozd be a számodra megfelelő ételt, a megmelegítésben tudunk segíteni.|Természetesen alkoholmentes és alkoholos italok fogyasztására a koncerthelyszíneknél lesz lehetőség.",
    },
    {
      question: "Van étkezési vagy vásárlási lehetőség a településen?",
      answer:
        "Természetesen igen, a Babel Camp 1 km-es körzetében van élelmiszerbolt, gyógyszertár, orvosi ügyelet, bankautomata, nemzeti dohánybolt, fagyizó, és minden, amire szükségetek lehet.",
    },
    {
      question: "Milyen időtartamra szólnak a jegyek?",
      answer:
        "A napijegyek az adott napon reggel 9 órától a következő nap reggel 10 óráig szólnak.|A hétvégi jegyek péntek reggel 9 órától vasárnap délig szólnak.|A hetijegyek szerda reggel 9 órától vasárnap délig szólnak.|A kurzusjegyek csak a zenei, táncos kurzusra és a workshopokra szólnak, és a teljes rendezvényre a fesztivál jegyekkel együtt érvényesek.",
    },
    {
      question: "Hányszor közlekedhetek ki-be a jeggyel?",
      answer:
        "Akárhányszor. A jegy nem csak egyszeri belépésre jogosít fel, nyugodtan ugorj le a Balatonhoz és csobbanj egyet két program között.",
    },
    {
      question:
        "Szeretnék jelentkezni a hangszeres/táncos kurzusra, ezt hogyan tehetem meg?",
      answer: `A legszuperebb az lenne, ha kitöltenéd [a jelentkezési lapot](${registrationFormUrl}).|Azonban, ha hirtelen felindulásból találod ki, hogy jönnél, a helyszínen is jelentkezhetsz, ha pedig kérdéseid vannak, írj nekünk.`,
    },
    {
      question:
        "Szeretnék jelentkezni a hangszeres/táncos kurzusra, de nincsen saját hangszerem, mit tegyek?",
      answer:
        "Írj nekünk legkésőbb a fesztivál előtti héten, ha tudunk szerezni hangszert neked, megoldjuk! De azért szeretnénk jelezni, hogy a kurzusaink elsősorban nem olyanoknak szólnak, akik ott szeretnének elkezdeni játszani valamilyen hangszeren – ebben az esetben is írj, és megpróbáljuk a számodra legmegfelelőbb kurzust ajánlani.",
    },
    {
      question:
        "Szeretnék jelentkezni a hangszeres/táncos kurzusra, de nem tudok minden nap ott lenni, lehetséges ez?",
      answer:
        "Alapvetően igen, de mivel egy meghatározott anyaggal haladnak a csoportok, ezt a tanárokkal is meg kell beszélnünk, és azt ajánljuk, ha tudsz, végig legyél jelen. Írj nekünk és kitalálunk valamilyen megoldást!",
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
      answer:
        "Legegyszerűbb Budapestről vonattal lejutni. A menetrendet [megtalálod az Elvirán](https://elvira.mav-start.hu/)|Amennyiben máshonnan érkezel és elakadsz, írj nekünk, igyekszünk segíteni.",
    },
    {
      question: "Autóval érkezem, van lehetőség ingyen parkolásra?",
      answer:
        "Igen, korlátozott számban van parkolóhely a Babel Camp területén, és a településen számtalan helyen tudsz parkolni a közelben.",
    },
    {
      question: "Mennyire akadálymentesített a fesztivál?",
      answer:
        "A helyszín teljesen akadálymentesített, de ha további kérdéseid, speciális igényeid, szükségleteid vannak, keress minket előzetesen vagy a helyszínen, és segítünk mindenben.",
    },
    {
      question: "Van Balatonbogláron ingyenes strand?",
      answer:
        "Igen, van, a fesztiválterülethez legközelebb eső strand a Platán strand.",
    },
    {
      question: "Mennyire állatbarát a fesztivál?",
      answer:
        "Személyesen nagyon azok vagyunk, de mivel sok az ember és a mindenfelé heverő hangszer, megköszönjük, ha egyeztetsz velünk, ha kedvenced lehoznád a fesztiválra.",
    },
    {
      question:
        "Szeretnék felajánlani egy saját programot, felajánlani valamit a fesztiválnak, önkénteskedni. Lehetséges ez?",
      answer:
        "Természetesen, írj nekünk. Minden ötletet, felajánlást, hozzájárulást, részvételi szándékot szívesen fogadunk. A fesztiválunk pont a közösségépítésről szól!",
    },
  ],
  supportersHeading: "Támogatók",
  supporters: [
    // TODO: Add URLs
    {
      name: "Halmos Béla Program",
      logo: HalmosBelaProgram,
      url: "",
    },
    {
      name: "Góbé",
      logo: GobeLogo,
      url: "",
    },
    {
      name: "Nemzeti Kulturális Alap",
      logo: NemzetiKulturalisAlap,
      url: "",
    },
    {
      name: "Babel Camp",
      logo: BabelCampLogo,
      url: "",
    },
    {
      name: "Gyöngyvirágos Folkműhely",
      logo: GyongyviragosLogo,
      url: "",
    },
  ],
  mapTitle: "Babel Camp",
  footer: {
    copyright: "© 2024, Góbé Kulturális Egyesület",
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
};

export const en: LanguagePack = {
  meta: {
    description:
      "Cozy world music festival and folk music camp on the shores of Lake Balaton",
    keywords: "festival, world music, folk music, Balaton, Balatonboglár",
    url: "https://boglart.hu?language=en",
  },
  otherLanguage: "Magyar",
  // TODO: Add English banners
  bannerImageDesktop: BannerImageHu,
  bannerImageMobile: BannerImageMobileHu,
  bannerAltText: "5. Boglart, 2024, Balatonboglár, Babel Camp",
  ticketPurchase: {
    caption: "Tickets",
    link: "https://tixa.hu/V_Boglart_Fesztival_20240828_Balatonboglar",
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
  furtherProgrammeText: `[Folk music courses](${registrationFormUrl}) taught by members of the bands Góbé, Pásztorhóra, and Tindia, along with other invited teachers, as well as a folk dance course;|World music workshops with the performing artists;|Music industry development masterclasses;|Dance houses;|Civil village involving local and regional civil organizations.|We will announce the list of teachers and topics of workshops and masterclasses [on our Facebook page](https://www.facebook.com/boglartfeszt).`,
  programme: [
    {
      day: "28 August 2024",
      schedule: [
        {
          time: "7:00 PM",
          name: "Meybahar [HU/GR]",
          location: "Main Stage",
        },
        {
          time: "8:00 PM",
          name: "Obadu Live Act",
          location: "Civil Village",
        },
        {
          time: "8:30 PM",
          name: "Nogaband [SK]",
          location: "Main Stage",
        },
        {
          time: "10:00 PM",
          name: "Tindia",
          location: "Ruin Pub",
        },
        {
          time: "11:00 PM",
          name: "Vonós és moldvai táncház",
          location: "Ruin Pub",
        },
      ],
    },
    {
      day: "29 August 2024",
      schedule: [
        {
          time: "7:00 PM",
          name: "Boyongó",
          location: "Main Stage",
        },
        {
          time: "8:00 PM",
          name: "Obadu Live Act",
          location: "Civil Village",
        },
        {
          time: "8:30 PM",
          name: "Ferenczi György és az 1ső Pesti Rackák",
          location: "Main Stage",
        },
        {
          time: "10:00 PM",
          name: "Kapcza Banda",
          location: "Ruin Pub",
        },
        {
          time: "11:00 PM",
          name: "Vonós és moldvai táncház",
          location: "Ruin Pub",
        },
      ],
    },
    {
      day: "30 August 2024",
      schedule: [
        {
          time: "7:00 PM",
          name: "Times New Román",
          location: "Main Stage",
        },
        {
          time: "8:00 PM",
          name: "Obadu Live Act",
          location: "Civil Village",
        },
        {
          time: "8:30 PM",
          name: "Poklade",
          location: "Main Stage",
        },
        {
          time: "10:00 PM",
          name: "Pásztorhóra",
          location: "Ruin Pub",
        },
        {
          time: "11:00 PM",
          name: "Vonós, moldvai és nemzetiségi táncház",
          location: "Ruin Pub",
        },
      ],
    },
    {
      day: "31 August 2024",
      schedule: [
        {
          time: "7:00 PM",
          name: "Alterne Trio (BE/EE/DK)",
          location: "Main Stage",
        },
        {
          time: "8:00 PM",
          name: "Obadu Live Act",
          location: "Civil Village",
        },
        {
          time: "8:30 PM",
          name: "Góbé",
          location: "Main Stage",
        },
        {
          time: "10:00 PM",
          name: "Zajnal",
          location: "Ruin Pub",
        },
        {
          time: "11:00 PM",
          name: "Vonós és moldvai táncház",
          location: "Ruin Pub",
        },
      ],
    },
  ],
  frequentlyAskedQuestionsHeading: "Frequently Asked Questions",
  frequentlyAskedQuestions: [
    {
      question: "Can I camp on the festival grounds?",
      answer: `Unfortunately, camping is not allowed within the festival area, but [you can book accommodations](${accommodationUrl}).|If you still prefer camping, you can do so [at this campsite](https://sellocamping.hu/) in Balatonboglár (about a 15-minute walk away from the festival)`,
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
        "Day tickets are valid from 9 AM on the given day until 10 AM the following day.|Weekend tickets are valid from 9 AM on Friday until noon on Sunday.|Week tickets are valid from 9 AM on Wednesday until noon on Sunday.|Course tickets are valid for the music and dance courses and workshops only, and are valid for the entire event when combined with festival tickets.",
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
      answer:
        "Reach out to us no later than the week before the festival, and if we can find an instrument for you, we will arrange it. But please note that our courses are not primarily for those who want to start playing an instrument at the festival – if you are an absolute beginner, reach out to us, and we will try to recommend the most suitable course for you.",
    },
    {
      question:
        "I want to register for an instrumental/dance course but can’t be there every day, is this possible?",
      answer:
        "In general, yes. However, since the groups progress with specific material, we need to discuss this with the teachers, and we recommend that you be present throughout if possible. Reach out to us and we will find a solution.",
    },
    {
      question:
        "I’m interested in the dance house program, but I’ve never attended one before. Is it possible to join?",
      answer:
        "Yes, dance instruction will be provided during the dance houses, so feel free to join even if you’re new to folk dancing.",
    },
    {
      question: "I am arriving by public transport, how do I reach the venue?",
      answer:
        "The easiest way is to take the train from Budapest. The timetable [can be found on Elvira](https://elvira.mav-start.hu/).|If you are coming from another location and need help, reach out to us, and we will do our best to assist you.",
    },
    {
      question: "I am arriving by car, is there free parking available?",
      answer:
        "Yes, there is a limited number of parking spaces at Babel Camp, and there are plenty of places to park nearby in the town.",
    },
    {
      question: "Is the festival accessible?",
      answer:
        "The venue is fully accessible, but if you have further questions, special needs, or requirements, please contact us in advance or on-site, and we will help you.",
    },
    {
      question: "Is there a free public beach in Balatonboglár?",
      answer:
        "Yes, there is. The nearest beach to the festival site is Platán Beach.",
    },
    {
      question: "Is the festival pet-friendly?",
      answer:
        "We are very pet-friendly. However, since there are many people and musical instruments lying around, we appreciate it if you discuss bringing your pet with us beforehand.",
    },
    {
      question:
        "I would like to offer a programme, volunteer, or contribute something to the festival. Is this possible?",
      answer:
        "Of course, reach out to us. We welcome all ideas, offers, contributions, and initiatives. Our festival is all about community building!",
    },
  ],
  supportersHeading: "Támogatók",
  supporters: [
    // TODO: Add URLs
    {
      name: "Halmos Béla Program",
      logo: HalmosBelaProgram,
      url: "",
    },
    {
      name: "Góbé",
      logo: GobeLogo,
      url: "",
    },
    {
      name: "Nemzeti Kulturális Alap",
      logo: NemzetiKulturalisAlap,
      url: "",
    },
    {
      name: "Babel Camp",
      logo: BabelCampLogo,
      url: "",
    },
    {
      name: "Gyöngyvirágos Folkműhely",
      logo: GyongyviragosLogo,
      url: "",
    },
  ],
  mapTitle: "Babel Camp",
  footer: {
    copyright: "© 2024, Góbé Kulturális Egyesület",
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
};
