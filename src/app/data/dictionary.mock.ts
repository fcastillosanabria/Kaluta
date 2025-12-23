// ------------------ COMPANY DATA ------------------
export interface CompanyInfo {
  type: 'company';
  title: string;
  description: string;
  image: string;
  info: {
    tipo: string;
    fundacion: string;
    fundador: string;
    desarrolladores: string;
    web: string;
    facebook?: string;
    instagram?: string;
    youtube?: string;
  };
}

export const COMPANY_DATA: CompanyInfo = {
  type: 'company',
  title: 'Urpi Dictionary',
  description:
    'Urpi Dictionary es una iniciativa digital de base cultural y tecnológica orientada a la preservación, difusión y revitalización de lenguas originarias del Perú, mediante el uso de herramientas digitales accesibles, escalables y culturalmente responsables. El proyecto nace como una respuesta a la pérdida progresiva de lenguas ancestrales, fenómeno que pone en riesgo no solo la comunicación, sino también la cosmovisión, la memoria colectiva y la identidad cultural de comunidades originarias. En este contexto, Urpi Dictionary se plantea como una plataforma digital innovadora que articula tecnología, educación y cultura.',
  image: 'assets/img/logoUrpiDictionaryBlanco.png',
  info: {
    tipo: 'Organización sin fines de lucro',
    fundacion: 'Cañete, Lima – 2003',
    fundador: 'Francis Castillo',
    desarrolladores: 'Francis Castillo',
    web: 'https://urpidictionary.com',
  },
};



// ------------------ WORD DATA ------------------

export interface DictionaryWord {
  type: 'word';
  titleEspanol: string;
  titleEspanolAudio: string;
  titleJaqaru: string;
  titleJaqaruAudio: string;
  description: string;
  image: string;

  info: Record<string, string>; // 👈 CLAVE DEL PROBLEMA

  ejemplos: {
    ejemplo: string;
    traduccion: string;
  }[];
}

export const DICTIONARY_WORDS: DictionaryWord[] = [
  {
    type: 'word',
    titleEspanol: 'Gato',
    titleEspanolAudio: 'gato.mp3',
    titleJaqaru: 'Mishi',
    titleJaqaruAudio: 'mishi.mp3',
    description: 'El gato es un mamífero doméstico...',
    image: 'assets/img/gato.png',
    info: {
      Tamaño: 'Pequeño',
      Peso: '4 – 6 kg',
      Longevidad: '12 – 18 años',
    },
    ejemplos: [
      { ejemplo: 'El gato duerme', traduccion: 'Mishi punu' },
      { ejemplo: 'El gato come', traduccion: 'Mishi mikun' },
    ],
  },
  {
    type: 'word',
    titleEspanol: 'Oveja',
    titleEspanolAudio: 'oveja.mp3',
    titleJaqaru: 'wakcha',
    titleJaqaruAudio: 'wakcha.mp3',
    description: 'Animal mamífero de granja.',
    image: 'https://lh3.googleusercontent.com/d/1WkKBHEEgRtScnE8aqsHRN60lfPznbRMp=s220?authuser=0',

    info: {
      Tipo: 'Objeto',
      Material: 'Madera',
      Uso: 'Comer, trabajar',
      Forma: 'Rectangular',
    },

    ejemplos: [
      {
        ejemplo: 'La oveja es grande',
        traduccion: 'Tiyana jach’a',
      },
    ],
  },
  {
    type: 'word',
    titleEspanol: 'Perro',
    titleEspanolAudio: 'perro.mp3',
    titleJaqaru: 'jallq’u',
    titleJaqaruAudio: 'jallq’u.mp3',
    description: 'perro; jawch’iri jallq’u = perro mordedor, perro bravo; phiña jallq’u = perro bravo. V. áshara, qata.',
    image: 'https://lh3.googleusercontent.com/d/1rROQ5yHBs8QR_cZxI7qLJfy5_K1jVT6p=s220?authuser=0',

    info: {
      Tipo: 'Objeto',
      Material: 'Madera',
      Uso: 'Comer, trabajar',
      Forma: 'Rectangular',
    },

    ejemplos: [
      {
        ejemplo: 'El perro esta habriento',
        traduccion: 'perro; jawch’iri jallq’u = perro mordedor, perro bravo; phiña jallq’u = perro bravo. V. áshara, qata.',
      },
    ],
  },
  {
    type: 'word',
    titleEspanol: 'Dos',
    titleEspanolAudio: 'dos.mp3',
    titleJaqaru: 'paja',
    titleJaqaruAudio: 'paja.mp3',
    description: 'Número ordinal.',
    image: 'https://lh3.googleusercontent.com/d/1YfmXXVs5xNm6U-DudWbrQAv9DqNOmsDk=s220?authuser=0',

    info: {
      Tipo: 'Numero',
      Material: 'Madera',
      Uso: 'Comer, trabajar',
      Forma: 'Rectangular',
    },

    ejemplos: [
      {
        ejemplo: 'La mesa es grande',
        traduccion: 'Tiyana jach’a',
      },
    ],
  },
];
