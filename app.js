(() => {
  // =========================
  // 1) I18N (BG / EN) — GLOBAL
  // =========================
  const TRANSLATIONS = {
    bg: {
      // NAV
      nav_project: "Проектът",
      nav_partners: "Партньори",
      nav_contact: "Контакт",

      // HOME
      home_h1: "Стандартът за Cane Corso в България",
      home_lead:
        "Платформа за любители на породата и подбрани партньори: <strong>развъдници, ветеринарни клиники, ветеринарни аптеки, зоомагазини и дресьори</strong>.",
      home_btn_owner: "🐕 Интерес (собственик / развъдник)",
      home_btn_partner: "🏆 Интерес (партньор)",
      home_note: "Партньорствата са <strong>поетапни</strong> и с <strong>подбор</strong>. Без масовка.",
      home_card_h2: "Какво получаваш",
      home_card_li1: "Ясна насока за породата: характер, грижа, отговорно отглеждане.",
      home_card_li2: "Сигнал за качество: партньори, които държат на стандарт.",
      home_card_li3: "Канал за връзка: бърза ориентация към правилните хора и услуги.",
      home_card_h3: "За кого е",
      home_card_p:
        "За хора, които уважават силата на Cane Corso и искат контрол, стабилен характер и отговорност.",
      home_card_link: "Прочети за проекта →",
      strip_h2: "Едно място. Един стандарт.",
      strip_p: "Не реклама. Не “списък”. А система, която дава доверие.",
      strip_btn: "Виж категориите партньори",

      // PROJECT
      project_h1: "Проектът",
      project_lead:
        "UNICO SUO GENERE е създаден като платформа за Cane Corso в България, където фокусът е върху <strong>стандарта</strong>, <strong>отговорността</strong> и <strong>доверените партньори</strong>.",
      project_card1_h2: "Какво е",
      project_card1_p:
        "Място за информация, ориентация и подбрани участници от екосистемата на породата — от собственици до професионални партньори.",
      project_card2_h2: "Какво НЕ е",
      project_card2_li1: "Не е “обяви и търговия на всяка цена”.",
      project_card2_li2: "Не е “всеки може да се добави”.",
      project_card2_li3: "Не е шумна реклама без стойност.",
      project_card3_h2: "Цел",
      project_card3_p:
        "Да се изгради доверие и стандарт около Cane Corso — чрез ясни правила, добра практика и видимост на качествените партньори.",
      project_card4_h2: "Кой стои зад проекта",
      project_card4_p:
        "Проектът е създаден и ръководен от <strong>Stefano De Tanini</strong>. Ако искаш да участваш като партньор — заяви интерес през формата.",
      project_card4_btn: "Заяви интерес",

      // PARTNERS
      partners_h1: "Партньори",
      partners_lead:
        "Категориите са подбрани така, че да покриват реалните нужди на породата. <strong>Регистрацията е поетапна и с подбор.</strong>",
      partners_breeders_h2: "Развъдници",
      partners_breeders_p: "Фокус върху качество, отговорност и репутация.",
      partners_vet_h2: "Ветеринарни клиники",
      partners_vet_p: "Предимство за опит с едри породи и реална практика.",
      partners_pharm_h2: "Ветеринарни аптеки",
      partners_pharm_p: "Проверени продукти, коректни консултации и наличности.",
      partners_shop_h2: "Зоомагазини",
      partners_shop_p: "Качествена храна и екипировка, подходящи за едрите породи.",
      partners_trainer_h2: "Дресьори",
      partners_trainer_p: "Контрол, социализация, послушание — стабилен характер, не показност.",
      partners_join_h2: "Искаш да участваш?",
      partners_join_p: "Заяви интерес и ще се свържем с теб за следващи стъпки.",
      partners_join_btn: "Заяви интерес",

      // CONTACT (page texts)
      contact_title: "Контакт / Интерес — UNICO SUO GENERE",
      contact_badge: "FOUNDATION • APPLICATION",
      contact_h1: "Контакт / Интерес",
      contact_lead:
        "Това е <strong>първият филтър</strong> за участие в UNICO SUO GENERE — Cane Corso Bulgaria. Заявките се разглеждат <strong>поетапно</strong> и с <strong>подбор</strong>.",
      contact_benefits_h2: "Какво получаваш",
      benefit_1: "Премиум видимост за Cane Corso",
      benefit_2: "Подбор и качество – без масовка",
      benefit_3: "Ясна структура и доверие",
      contact_accept_h3: "Кого приемаме",
      chip_owners: "Любители",
      chip_breeders: "Развъдници",
      chip_vets: "Вет. клиники",
      chip_pharm: "Вет. аптеки",
      chip_shops: "Зоомагазини",
      chip_trainers: "Дресьори",
      contact_form_h2: "Заявка за участие",
      contact_form_p: "Попълваш за 30 секунди. После натискаш Submit в Google Form.",
      contact_btn: "Продължи към Google Form →",
      label_role: "Тип заявка",
      label_city: "Град",
      label_name: "Име / Организация",
      label_contact: "Телефон или имейл",
      label_message: "Кратко съобщение",
      opt_dash: "—",
      opt_owner: "Собственик / Любител",
      opt_breeder: "Развъдник",
      opt_vet: "Ветеринарна клиника",
      opt_pharm: "Ветеринарна аптека",
      opt_shop: "Зоомагазин",
      opt_trainer: "Дресьор",
      ph_city: "напр. Kardzhali",
      ph_name: "напр. STEFAN TANANOV",
      ph_contact: "0888... или email@...",
      ph_message: "Напиши 2–3 изречения…",
      msg_required: "Моля, попълни всички задължителни полета.",
      msg_opened: "✅ Формата се отвори с попълнени данни. Натисни Submit в Google Form.",

      // FOOTER (ако имаш такива ключове)
      footer_home: "Начало",
      footer_project: "Проектът",
      footer_partners: "Партньори",
      footer_contact: "Контакт",
    },

    en: {
      // NAV
      nav_project: "Project",
      nav_partners: "Partners",
      nav_contact: "Contact",

      // HOME
      home_h1: "The Cane Corso Standard in Bulgaria",
      home_lead:
        "A platform for breed enthusiasts and selected partners: <strong>breeders, veterinary clinics, veterinary pharmacies, pet shops, and trainers</strong>.",
      home_btn_owner: "🐕 Interest (owner / breeder)",
      home_btn_partner: "🏆 Interest (partner)",
      home_note: "Partnerships are <strong>phased</strong> and <strong>curated</strong>. No mass listing.",
      home_card_h2: "What you get",
      home_card_li1: "Clear guidance: temperament, care, responsible ownership.",
      home_card_li2: "A quality signal: partners who stand for standards.",
      home_card_li3: "A direct channel: faster orientation to the right people and services.",
      home_card_h3: "Who it’s for",
      home_card_p:
        "For people who respect the power of the Cane Corso and want control, stable temperament, and responsibility.",
      home_card_link: "Read about the project →",
      strip_h2: "One place. One standard.",
      strip_p: "Not ads. Not a “list”. A system built on trust.",
      strip_btn: "See partner categories",

      // PROJECT
      project_h1: "Project",
      project_lead:
        "UNICO SUO GENERE is a Cane Corso platform in Bulgaria focused on <strong>standards</strong>, <strong>responsibility</strong>, and <strong>trusted partners</strong>.",
      project_card1_h2: "What it is",
      project_card1_p:
        "A place for information, orientation, and curated members of the breed ecosystem — from owners to professional partners.",
      project_card2_h2: "What it is NOT",
      project_card2_li1: "Not “ads and selling at any cost”.",
      project_card2_li2: "Not “anyone can be listed”.",
      project_card2_li3: "Not loud promotion without value.",
      project_card3_h2: "Goal",
      project_card3_p:
        "To build trust and standards around the Cane Corso — via clear principles, good practice, and visibility for quality partners.",
      project_card4_h2: "Who leads it",
      project_card4_p:
        "Created and led by <strong>Stefano De Tanini</strong>. If you want to join as a partner — submit interest via the form.",
      project_card4_btn: "Submit interest",

      // PARTNERS
      partners_h1: "Partners",
      partners_lead:
        "Categories are designed to cover real needs of the breed. <strong>Registration is phased and curated.</strong>",
      partners_breeders_h2: "Breeders",
      partners_breeders_p: "Focus on quality, responsibility, and reputation.",
      partners_vet_h2: "Veterinary clinics",
      partners_vet_p: "Preference for experience with large breeds and real practice.",
      partners_pharm_h2: "Veterinary pharmacies",
      partners_pharm_p: "Verified products, correct guidance, and availability.",
      partners_shop_h2: "Pet shops",
      partners_shop_p: "Quality food and equipment suitable for large breeds.",
      partners_trainer_h2: "Trainers",
      partners_trainer_p: "Control, socialization, obedience — stable temperament, not show.",
      partners_join_h2: "Want to join?",
      partners_join_p: "Submit interest and we’ll contact you with next steps.",
      partners_join_btn: "Submit interest",

      // CONTACT
      contact_title: "Contact / Interest — UNICO SUO GENERE",
      contact_badge: "FOUNDATION • APPLICATION",
      contact_h1: "Contact / Interest",
      contact_lead:
        "This is the <strong>first filter</strong> to participate in UNICO SUO GENERE — Cane Corso Bulgaria. Applications are reviewed <strong>in phases</strong> and with <strong>selection</strong>.",
      contact_benefits_h2: "What you get",
      benefit_1: "Premium Cane Corso visibility",
      benefit_2: "Curated selection — no mass listings",
      benefit_3: "Clear structure and trust",
      contact_accept_h3: "Who we accept",
      chip_owners: "Owners",
      chip_breeders: "Breeders",
      chip_vets: "Vet clinics",
      chip_pharm: "Vet pharmacies",
      chip_shops: "Pet shops",
      chip_trainers: "Trainers",
      contact_form_h2: "Application",
      contact_form_p: "Takes about 30 seconds. Then press Submit in Google Form.",
      contact_btn: "Continue to Google Form →",
      label_role: "Application type",
      label_city: "City",
      label_name: "Name / Organization",
      label_contact: "Phone or email",
      label_message: "Short message",
      opt_dash: "—",
      opt_owner: "Owner / Enthusiast",
      opt_breeder: "Breeder",
      opt_vet: "Veterinary clinic",
      opt_pharm: "Veterinary pharmacy",
      opt_shop: "Pet shop",
      opt_trainer: "Trainer",
      ph_city: "e.g. Kardzhali",
      ph_name: "e.g. STEFAN TANANOV",
      ph_contact: "phone or email",
      ph_message: "Write 2–3 sentences…",
      msg_required: "Please fill in all required fields.",
      msg_opened: "✅ Opened Google Form with prefilled data. Press Submit there.",

      // FOOTER (ако имаш такива ключове)
      footer_home: "Home",
      footer_project: "Project",
      footer_partners: "Partners",
      footer_contact: "Contact",
    }
  };

  function getLang() {
    const v = localStorage.getItem("lang");
    return v === "en" ? "en" : "bg";
  }

  function setLang(lang) {
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;

    // translate HTML blocks
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      const val = TRANSLATIONS[lang] && TRANSLATIONS[lang][key];
      if (val !== undefined) el.innerHTML = val;
    });

    // placeholders (only for elements that have data-ph)
    document.querySelectorAll("[data-ph]").forEach(el => {
      const key = el.getAttribute("data-ph");
      const val = TRANSLATIONS[lang] && TRANSLATIONS[lang][key];
      if (val) el.setAttribute("placeholder", val);
    });

    // active language button
    document.querySelectorAll("[data-lang]").forEach(b => {
      b.classList.toggle("active", b.getAttribute("data-lang") === lang);
    });
  }

  // bind language buttons
  document.querySelectorAll("[data-lang]").forEach(btn => {
    btn.addEventListener("click", () => setLang(btn.getAttribute("data-lang")));
  });

  setLang(getLang());

  // =========================
  // 2) GOOGLE FORM PREFILL (CONTACT PAGE ONLY)
  // =========================
  const GOOGLE_FORM =
    "https://docs.google.com/forms/d/e/1FAIpQLSc9i25eb1H-_WDMq3MYP01BX3VY7DYPQnhz4jYPUHAFnEMe_A/viewform";

  const ENTRY = {
    role: "entry.1075007662",
    name: "entry.846041715",
    city: "entry.1776734978",
    contact: "entry.19307366",
    message: "entry.1546581931",
  };

  const form = document.getElementById("siteInterestForm");
  const toast = document.getElementById("toast");

  function showToast(text) {
    if (!toast) return;
    if (!text) {
      toast.hidden = true;
      toast.textContent = "";
      return;
    }
    toast.hidden = false;
    toast.textContent = text;
  }

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const lang = getLang();

      const roleEl = document.getElementById("role");
      const nameEl = document.getElementById("name");
      const cityEl = document.getElementById("city");
      const contactEl = document.getElementById("contact");
      const messageEl = document.getElementById("message");

      const v = {
        role: roleEl ? roleEl.value : "",
        name: nameEl ? nameEl.value.trim() : "",
        city: cityEl ? cityEl.value.trim() : "",
        contact: contactEl ? contactEl.value.trim() : "",
        message: messageEl ? messageEl.value.trim() : "",
      };

      if (!v.role || !v.name || !v.city || !v.contact) {
        showToast(TRANSLATIONS[lang].msg_required);
        return;
      }

      // Map EN role values back to BG (Google Form options are BG)
      const roleMapENtoBG = {
        "Owner / Enthusiast": "Собственик / Любител",
        "Breeder": "Развъдник",
        "Veterinary clinic": "Ветеринарна клиника",
        "Veterinary pharmacy": "Ветеринарна аптека",
        "Pet shop": "Зоомагазин",
        "Trainer": "Дресьор",
      };
      if (lang === "en" && roleMapENtoBG[v.role]) v.role = roleMapENtoBG[v.role];

      const p = new URLSearchParams({ usp: "pp_url" });
      p.set(ENTRY.role, v.role);
      p.set(ENTRY.name, v.name);
      p.set(ENTRY.city, v.city);
      p.set(ENTRY.contact, v.contact);
      p.set(ENTRY.message, v.message || "");

      window.open(GOOGLE_FORM + "?" + p.toString(), "_blank", "noopener");
      showToast(TRANSLATIONS[lang].msg_opened);
    });
  }

  // YEAR
  const y = document.getElementById("y");
  if (y) y.textContent = new Date().getFullYear();
})();
