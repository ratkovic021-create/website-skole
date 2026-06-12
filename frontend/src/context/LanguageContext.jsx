import { createContext, useContext, useState } from "react";

const translations = {
  sr: {
    nav: {
      languages: "Jezici",
      classes: "Časovi",
      about: "O nama",
      location: "Lokacija",
    },
    hero: {
      reviews: "5.0 · 27 recenzija na Google-u",
      h1a: "Reči koje",
      h1b: "otvaraju",
      h1c: "svet.",
      desc: "Škola stranih jezika u srcu Novog Sada. Već godinama predajemo engleski, nemački, ruski i srpski za strance — s posvećenošću, metodom i ljudskim pristupom koji se pamti.",
      call: "Pozovite nas",
      languages: "Engleski · Nemački\nRuski · Srpski",
      langCard: "4 jezika",
    },
    about: {
      tag: "✦ O školi",
      h2a: "Mali razredi.",
      h2b: "Veliki napredak.",
      desc: "Verujemo da se jezik uči razgovorom, a ne formularima. Naši predavači su profesori sa višegodišnjim iskustvom koji individualno prate svakog polaznika — od prvog susreta sa azbukom do tečne konverzacije.",
      stat1: "Ocena na Google-u",
      stat2: "Recenzija polaznika",
      stat3: "Posvećenost svakom polazniku",
      quote: "„Atmosfera je topla, predavači posvećeni, a napredak vidljiv već posle prvih nekoliko časova.“",
      quoteAuthor: "— polaznik škole, Novi Sad",
    },
    services: {
      tag: "✦ Tipovi nastave",
      h2a: "Pronađite svoj",
      h2b: "ritam učenja.",
      intro: "Grupno ili individualno, online ili u učionici — svaki polaznik ima svoj put.",
      classes: [
        { title: "Grupni časovi", desc: "Manje grupe u kojima ima prostora za svakog. Učenje uz razgovor i interakciju." },
        { title: "Individualni časovi", desc: "Program u potpunosti prilagođen vašem tempu i ciljevima." },
        { title: "Online časovi", desc: "Časovi uživo, gde god se nalazite." },
        { title: "Časovi za odrasle", desc: "Profesionalni i opšti kursevi za poslovno okruženje." },
      ],
      levelsTag: "✦ Nivoi",
      levels: [
        { name: "Početni nivo", small: "A1 — A2" },
        { name: "Srednji nivo", small: "B1 — B2" },
        { name: "Napredni nivo", small: "C1 — C2" },
      ],
      ctaText: "Nismo sigurni koji program je",
      ctaItalic: "pravi za vas?",
      ctaBtn: "Pozovite",
    },
    languages: {
      tag: "✦ Jezici koje predajemo",
      h2a: "Četiri jezika.",
      h2b: "Jedna metoda.",
      desc: "Bilo da krećete od nule ili usavršavate ono što već znate — kod nas ćete pronaći program po meri.",
      list: [
        { name: "Engleski jezik", blurb: "Od osnovnih kurseva do akademskog i poslovnog engleskog." },
        { name: "Nemački jezik", blurb: "Strukturirani program za sve uzraste i nivoe." },
        { name: "Ruski jezik", blurb: "Ćirilica, izgovor i konverzacija od početnog nivoa." },
        { name: "Srpski za strance", blurb: "Prijatan i strpljiv pristup za sve koji uče srpski." },
      ],
      levels: ["Početni", "Srednji", "Napredni"],
    },
    location: {
      tag: "✦ Posetite nas",
      h2a: "U srcu",
      h2b: "Novog Sada.",
      addressLabel: "Adresa",
      callLabel: "Pozovite nas",
      hoursLabel: "Radno vreme",
      bookBtn: "Zakažite probni čas",
      days: ["Ponedeljak", "Utorak", "Sreda", "Četvrtak", "Petak", "Subota", "Nedelja"],
      closed: "Zatvoreno",
    },
    footer: {
      desc: "Škola stranih jezika u Novom Sadu. Engleski, nemački, ruski i srpski za strance — za sve uzraste i nivoe.",
      contact: "Kontakt",
      address: "Adresa",
      copy: "Škola stranih jezika",
      tagline: "Reči koje otvaraju svet.",
    },
  },

  en: {
    nav: {
      languages: "Languages",
      classes: "Classes",
      about: "About",
      location: "Location",
    },
    hero: {
      reviews: "5.0 · 27 Google reviews",
      h1a: "Words that",
      h1b: "open",
      h1c: "the world.",
      desc: "A foreign language school in the heart of Novi Sad. For years, we have been teaching English, German, Russian and Serbian to foreigners — with dedication, method and a human touch you will remember.",
      call: "Call us",
      languages: "English · German\nRussian · Serbian",
      langCard: "4 languages",
    },
    about: {
      tag: "✦ About us",
      h2a: "Small classes.",
      h2b: "Big progress.",
      desc: "We believe language is learned through conversation, not forms. Our teachers are professors with years of experience who individually follow each student — from the first encounter with the alphabet to fluent conversation.",
      stat1: "Google rating",
      stat2: "Student reviews",
      stat3: "Dedication to every student",
      quote: "\"The atmosphere is warm, the teachers are dedicated, and progress is visible after just the first few lessons.\"",
      quoteAuthor: "— school student, Novi Sad",
    },
    services: {
      tag: "✦ Types of classes",
      h2a: "Find your",
      h2b: "learning rhythm.",
      intro: "Group or individual, online or in the classroom — every student has their own path.",
      classes: [
        { title: "Group classes", desc: "Small groups where there is room for everyone. Learning through conversation and interaction." },
        { title: "Individual classes", desc: "A program fully tailored to your pace and goals." },
        { title: "Online classes", desc: "Live sessions from wherever you are." },
        { title: "Adult classes", desc: "Professional and general courses for the business environment." },
      ],
      levelsTag: "✦ Levels",
      levels: [
        { name: "Beginner", small: "A1 — A2" },
        { name: "Intermediate", small: "B1 — B2" },
        { name: "Advanced", small: "C1 — C2" },
      ],
      ctaText: "Not sure which program is",
      ctaItalic: "right for you?",
      ctaBtn: "Call us",
    },
    languages: {
      tag: "✦ Languages we teach",
      h2a: "Four languages.",
      h2b: "One method.",
      desc: "Whether you are starting from scratch or perfecting what you already know — you will find a program tailored for you.",
      list: [
        { name: "English", blurb: "From beginner courses to academic and business English." },
        { name: "German", blurb: "Structured program for all ages and levels." },
        { name: "Russian", blurb: "Cyrillic, pronunciation and conversation from beginner level." },
        { name: "Serbian for foreigners", blurb: "A friendly and patient approach for those learning Serbian." },
      ],
      levels: ["Beginner", "Intermediate", "Advanced"],
    },
    location: {
      tag: "✦ Visit us",
      h2a: "In the heart",
      h2b: "of Novi Sad.",
      addressLabel: "Address",
      callLabel: "Call us",
      hoursLabel: "Working hours",
      bookBtn: "Book a trial class",
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      closed: "Closed",
    },
    footer: {
      desc: "Foreign language school in Novi Sad. English, German, Russian and Serbian for foreigners — for all ages and levels.",
      contact: "Contact",
      address: "Address",
      copy: "Foreign language school",
      tagline: "Words that open the world.",
    },
  },

  ru: {
    nav: {
      languages: "Языки",
      classes: "Занятия",
      about: "О нас",
      location: "Адрес",
    },
    hero: {
      reviews: "5.0 · 27 отзывов на Google",
      h1a: "Слова, которые",
      h1b: "открывают",
      h1c: "мир.",
      desc: "Школа иностранных языков в самом сердце Нови Сада. Уже много лет мы преподаём английский, немецкий, русский и сербский — с посвящением, методом и человеческим подходом, который запоминается.",
      call: "Позвоните нам",
      languages: "Английский · Немецкий\nРусский · Сербский",
      langCard: "4 языка",
    },
    about: {
      tag: "✦ О школе",
      h2a: "Маленькие группы.",
      h2b: "Большой прогресс.",
      desc: "Мы верим, что язык учится через разговор, а не через формуляры. Наши преподаватели — профессора с многолетним опытом, которые индивидуально следят за каждым студентом — от первого знакомства с алфавитом до свободного разговора.",
      stat1: "Оценка на Google",
      stat2: "Отзывов учеников",
      stat3: "Забота о каждом ученике",
      quote: "«Атмосфера тёплая, преподаватели посвящённые, а прогресс заметен уже после первых нескольких занятий.»",
      quoteAuthor: "— ученик школы, Нови Сад",
    },
    services: {
      tag: "✦ Типы занятий",
      h2a: "Найдите свой",
      h2b: "ритм обучения.",
      intro: "Групповые или индивидуальные, онлайн или в классе — у каждого студента свой путь.",
      classes: [
        { title: "Групповые занятия", desc: "Небольшие группы, в которых есть место для каждого. Обучение через разговор и взаимодействие." },
        { title: "Индивидуальные занятия", desc: "Программа, полностью адаптированная к вашему темпу и целям." },
        { title: "Онлайн занятия", desc: "Занятия в реальном времени, где бы вы ни находились." },
        { title: "Занятия для взрослых", desc: "Профессиональные и общие курсы для деловой среды." },
      ],
      levelsTag: "✦ Уровни",
      levels: [
        { name: "Начальный уровень", small: "A1 — A2" },
        { name: "Средний уровень", small: "B1 — B2" },
        { name: "Продвинутый уровень", small: "C1 — C2" },
      ],
      ctaText: "Не уверены, какая программа",
      ctaItalic: "подходит вам?",
      ctaBtn: "Позвоните",
    },
    languages: {
      tag: "✦ Языки, которые мы преподаём",
      h2a: "Четыре языка.",
      h2b: "Один метод.",
      desc: "Начинаете с нуля или совершенствуете то, что уже знаете — у нас вы найдёте программу по мере.",
      list: [
        { name: "Английский язык", blurb: "От базовых курсов до академического и делового английского." },
        { name: "Немецкий язык", blurb: "Структурированная программа для всех возрастов и уровней." },
        { name: "Русский язык", blurb: "Кириллица, произношение и разговор с начального уровня." },
        { name: "Сербский для иностранцев", blurb: "Дружелюбный и терпеливый подход для изучающих сербский." },
      ],
      levels: ["Начальный", "Средний", "Продвинутый"],
    },
    location: {
      tag: "✦ Посетите нас",
      h2a: "В сердце",
      h2b: "Нови Сада.",
      addressLabel: "Адрес",
      callLabel: "Позвоните нам",
      hoursLabel: "Рабочее время",
      bookBtn: "Записаться на пробный урок",
      days: ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"],
      closed: "Закрыто",
    },
    footer: {
      desc: "Школа иностранных языков в Нови Саде. Английский, немецкий, русский и сербский для иностранцев — для всех возрастов и уровней.",
      contact: "Контакт",
      address: "Адрес",
      copy: "Школа иностранных языков",
      tagline: "Слова, которые открывают мир.",
    },
  },
};

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("sr");
  const t = translations[lang];
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
