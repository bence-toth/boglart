/* eslint-disable sonarjs/no-duplicate-string */

import BannerImageHu from "./banner.jpg";
import BannerImageMobileHu from "./banner-mobile.jpg";
import BabelCampLogo from "./supporter-babel-camp.png";
import GobeLogo from "./supporter-gobe.png";
import GyongyviragosLogo from "./supporter-gyongyviragos-folkmuhely.png";
import HalmosBelaProgram from "./supporter-halmos-bela-program.png";
import NemzetiKulturalisAlap from "./supporter-nemzeti-kulturalis-alap.png";

export interface LanguagePack {
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

// TODO: Update all text

export const hu: LanguagePack = {
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
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae placeat quas ea! Quaerat quas ipsum recusandae cum repellat, exercitationem voluptatibus ullam labore architecto necessitatibus possimus eaque impedit in iure. Sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. At libero incidunt illum et cumque laborum quae pariatur blanditiis voluptate, maiores itaque facilis eos vel quibusdam laboriosam ratione ducimus esse ea.|Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit quam a vero blanditiis, aliquam ex esse! Velit itaque vitae atque qui eum, et quaerat quod beatae magnam repellendus alias quas. Lorem ipsum dolor sit amet consectetur adipisicing elit.Vel voluptate soluta nobis? Eligendi quibusdam modi at optio illum, sunt ad dicta.|Tenetur nulla quod ab tempora atque libero nisi laboriosam?",
  programmeHeading: "Programok",
  furtherProgrammeHeading: "További programok",
  furtherProgrammeText:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae placeat quas ea! Quaerat quas ipsum recusandae cum repellat, exercitationem voluptatibus ullam labore architecto necessitatibus possimus eaque impedit in iure. Sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. At libero incidunt illum et cumque laborum quae pariatur blanditiis voluptate, maiores itaque facilis eos vel quibusdam laboriosam ratione ducimus esse ea.|Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit quam a vero blanditiis, aliquam ex esse! Velit itaque vitae atque qui eum, et quaerat quod beatae magnam repellendus alias quas. Lorem ipsum dolor sit amet consectetur adipisicing elit.Vel voluptate soluta nobis? Eligendi quibusdam modi at optio illum, sunt ad dicta.|Tenetur nulla quod ab tempora atque libero nisi laboriosam?",
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
      question: "Some question I have",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sequi iusto numquam. Dolorem provident debitis cum ad? Eveniet quis, commodi quae nesciunt tenetur blanditiis, laudantium sed nulla consequatur quam delectus.",
    },
    {
      question: "How about this other question?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum repellat, adipisci necessitatibus illo veritatis eaque cupiditate et similique odit expedita aliquam, id molestias iste magni! Earum pariatur quidem laboriosam dignissimos.",
    },
    {
      question: "This is the last question. Pinky promise?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam voluptatibus quod a, itaque tempore, porro rem autem impedit commodi doloremque quaerat quo sequi distinctio veritatis odit. Maxime possimus nemo voluptas?",
    },
  ],
  supportersHeading: "Támogatóink",
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
    // TODO: Add missing links
    accommodation: {
      caption: "Szállásfoglalás",
      url: "",
    },
    houseRules: {
      caption: "Házirend",
      url: "",
    },
    contact: {
      caption: "Kapcsolat",
      url: "",
    },
    booking: {
      caption: "Booking",
      url: "mailto:allearsmanagement@gmail.com",
    },
  },
};

// TODO: Translate text
// TODO: Add English banners
export const en: LanguagePack = {
  ...hu,
  otherLanguage: "Magyar",
  ticketPurchase: {
    caption: "Buy tickets",
    link: "https://tixa.hu/V_Boglart_Fesztival_20240828_Balatonboglar",
  },
};
