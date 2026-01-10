// src/main.js
const LANG_KEY = 'usg-lang';

const translations = {
  bg: {
    // NAV
    nav_manifesto: 'Манифест',
    nav_standard: 'Стандарт',
    nav_project: 'Проектът',
    nav_partners: 'Партньори',
    nav_registry: 'Регистър',
    nav_contact: 'Контакт',
    nav_login: 'Вход',
    nav_register: 'Регистрация',
    nav_add_dog: 'Добави куче',
    nav_admin: 'Админ',
    nav_logout: 'Изход',

    footer_contact: 'Контакт',

    // HOME
    home_title: 'UNICO SUO GENERE — Cane Corso',
    home_h1: 'UNICO SUO GENERE',
    home_lead: 'Платформа за Cane Corso в България — по стандарт UNICO SUO GENERE.',
    home_cta_manifesto: 'Прочети манифеста →',
    home_cta_registry: 'Виж регистъра →',
    home_cta_add: 'Добави куче →',
    home_block1_h2: 'Регистър',
    home_block1_p: 'Публичен списък с одобрени кучета. Всяка заявка се преглежда преди публикуване.',
    home_block1_cta: 'Отвори регистъра →',
    home_block2_h2: 'Стандарт',
    home_block2_p: 'Българско разклонение на стандарта: екстериор, темперамент, здраве и функционалност.',
    home_block2_cta: 'Отвори стандарта →',
    home_block3_h2: 'Участие',
    home_block3_p: 'Влез в профила си, за да подаваш заявки и да качваш материали.',
    home_block3_login: 'Вход →',
    home_block3_register: 'Регистрация →',
    home_block3_add: 'Добави куче →',

    // MANIFESTO
    manifesto_title: 'Манифест — UNICO SUO GENERE',
    manifesto_h1: 'Манифест',
    manifesto_lead: 'UNICO SUO GENERE е позиция. Не е мода. Това е отговорност към породата Cane Corso.',
    manifesto_why_h2: 'Защо съществуваме',
    manifesto_why_li1: 'Да пазим породния тип и функционалността — преди всичко.',
    manifesto_why_li2: 'Да отличаваме истинските представители от имитациите.',
    manifesto_why_li3: 'Да създадем българско разклонение със собствена школа и критерии.',
    manifesto_values_h2: 'Нашите принципи',
    manifesto_values_li1: 'Истина: без фалшив блясък и празни титли.',
    manifesto_values_li2: 'Практика: стандартът идва от реален опит, не от копиране.',
    manifesto_values_li3: 'Отговорност: здраве, характер, контрол и социализация.',
    manifesto_statement_h2: 'Изявление',
    manifesto_statement_p1:
      'Cane Corso не е за всеки. Това е куче със сила, интелект и инстинкт — и изисква човек със стабилен характер.',
    manifesto_statement_p2:
      'Тук не “събираме бройки”. Тук изграждаме качество. Поставяме граници. Носим отговорност.',

    // STANDARD (твоята страница)
    standard_title: 'Стандарт — UNICO SUO GENERE',
    standard_h1: 'Стандарт (Българско разклонение)',
    standard_lead:
      'Тук ще публикуваме реален стандарт за Cane Corso в България — изграден върху практика, отговорност и експертна преценка.',
    standard_what_h2: 'Какво означава „стандарт“',
    standard_what_li1: 'Екстериор: пропорции, глава, костна система, движения.',
    standard_what_li2: 'Темперамент: стабилен характер, контрол, социализация.',
    standard_what_li3: 'Здраве: тестове, грижа, отговорно развъждане.',
    standard_download_h2: 'Документ',
    standard_download_p: 'Финалният документ ще бъде наличен тук (PDF). До тогава можеш да изпратиш предложения/материали.',
    standard_cta: 'Изпрати материал →',
    upload_standard_h2: 'Качи материал за стандарта',
    upload_standard_p: 'PDF/DOCX/снимки — всичко, което подкрепя стандарта. Ще го прегледаме и ако е релевантно, ще го включим.',
    upload_label_name: 'Име',
    upload_label_contact: 'Имейл / Телефон',
    upload_label_file: 'Файл',
    upload_label_message: 'Бележка',
    upload_btn_send: 'Изпрати →',
    upload_ph_name: 'например: Иван Иванов',
    upload_ph_contact: 'имейл или телефон',
    upload_ph_message: 'кратка бележка (по желание)',

    // REGISTRY
    registry_title: 'Регистър — UNICO SUO GENERE',
    registry_h1: 'Регистър',
    registry_lead: 'Публичен списък с одобрени Cane Corso. Всяка заявка се преглежда преди публикуване.',
    registry_search_label: 'Търси по име',
    registry_search_ph: 'например: Ares',
    registry_filter_label: 'Филтър',
    registry_filter_all: 'Всички',
    registry_filter_male: 'Мъжко',
    registry_filter_female: 'Женско',
    registry_filter_btn: 'Приложи →',
    registry_clear_btn: 'Изчисти',

    // DOG
    dog_title: 'Профил — UNICO SUO GENERE',
    dog_subtitle: 'Профил в регистъра UNICO SUO GENERE',
    dog_photos_h2: 'Снимки',
    dog_details_h2: 'Детайли',
    dog_field_gender: 'Пол:',
    dog_field_color: 'Цвят:',
    dog_field_birth: 'Рождена дата:',
    dog_field_city: 'Град:',
    dog_field_owner: 'Собственик:',
    dog_field_kennel: 'Развъдник:',
    dog_field_status: 'Статус:',
    dog_back_btn: '← Назад към регистъра',
    dog_approve_btn: 'Одобри',
    dog_reject_btn: 'Отхвърли',
    dog_notes_h2: 'Описание',
    dog_notes_p: '(Тук ще се визуализира описанието/бележката към профила.)',

    // LOGIN
    login_title: 'Вход — UNICO SUO GENERE',
    login_h1: 'Вход',
    login_lead: 'Влез в профила си, за да управляваш заявки и съдържание.',
    login_label_email: 'Имейл',
    login_ph_email: 'name@example.com',
    login_label_password: 'Парола',
    login_ph_password: '******',
    login_btn: 'Вход →',
    login_no_account: 'Нямаш профил?',
    login_go_register: 'Регистрация →',

    // REGISTER
    register_title: 'Регистрация — UNICO SUO GENERE',
    register_h1: 'Регистрация',
    register_lead: 'Създай профил, за да подаваш заявки и да качваш материали.',
    register_label_email: 'Имейл',
    register_ph_email: 'name@example.com',
    register_label_password: 'Парола',
    register_ph_password: '******',
    register_label_repass: 'Повтори парола',
    register_ph_repass: '******',
    register_btn: 'Регистрация →',
    register_have_account: 'Имаш профил?',
    register_go_login: 'Вход →',

    // ADD DOG
    add_dog_title: 'Добави куче — UNICO SUO GENERE',
    add_dog_h1: 'Добави куче',
    add_dog_lead: 'Подай заявка за включване в регистъра. Всяка заявка се преглежда преди публикуване.',
    add_dog_label_name: 'Име на кучето',
    add_dog_ph_name: 'например: Ares',
    add_dog_label_gender: 'Пол',
    add_dog_gender_choose: 'Избери',
    add_dog_gender_male: 'Мъжко',
    add_dog_gender_female: 'Женско',
    add_dog_label_color: 'Цвят',
    add_dog_ph_color: 'например: black',
    add_dog_label_birth: 'Рождена дата',
    add_dog_label_city: 'Град',
    add_dog_ph_city: 'например: Plovdiv',
    add_dog_label_owner: 'Собственик',
    add_dog_ph_owner: 'име на собственик',
    add_dog_label_kennel: 'Развъдник (ако има)',
    add_dog_ph_kennel: 'име на развъдник',
    add_dog_label_desc: 'Описание / бележка',
    add_dog_ph_desc: 'кратко описание',
    add_dog_label_photos: 'Снимки',
    add_dog_photos_hint: 'Препоръчително: поне 3 снимки (стойка, профил, лице).',
    add_dog_btn: 'Изпрати заявка →',

    // ADMIN
    admin_title: 'Админ — UNICO SUO GENERE',
    admin_h1: 'Админ панел',
    admin_lead: 'Прегледай заявките и реши кои профили да се публикуват в регистъра.',
    admin_pending_h2: 'Чакащи заявки',
    admin_refresh_btn: 'Обнови',
    admin_stats_h2: 'Статус',
    admin_stats_pending: 'Чакащи:',
    admin_stats_approved: 'Одобрени:',
    admin_stats_rejected: 'Отхвърлени:',
    admin_notes_h2: 'Бележки',
    admin_notes_p: 'Одобрените профили стават видими в “Регистър”. Отхвърлените остават скрити.'
  },

  en: {
    // NAV
    nav_manifesto: 'Manifesto',
    nav_standard: 'Standard',
    nav_project: 'Project',
    nav_partners: 'Partners',
    nav_registry: 'Registry',
    nav_contact: 'Contact',
    nav_login: 'Login',
    nav_register: 'Register',
    nav_add_dog: 'Add Dog',
    nav_admin: 'Admin',
    nav_logout: 'Logout',

    footer_contact: 'Contact',

    // HOME
    home_title: 'UNICO SUO GENERE — Cane Corso',
    home_h1: 'UNICO SUO GENERE',
    home_lead: 'A Cane Corso platform in Bulgaria — built on the UNICO SUO GENERE standard.',
    home_cta_manifesto: 'Read the manifesto →',
    home_cta_registry: 'View the registry →',
    home_cta_add: 'Add a dog →',
    home_block1_h2: 'Registry',
    home_block1_p: 'Public list of approved dogs. Every submission is reviewed before publishing.',
    home_block1_cta: 'Open registry →',
    home_block2_h2: 'Standard',
    home_block2_p: 'Bulgarian branch: structure, temperament, health, and functionality.',
    home_block2_cta: 'Open standard →',
    home_block3_h2: 'Participation',
    home_block3_p: 'Sign in to submit requests and upload materials.',
    home_block3_login: 'Login →',
    home_block3_register: 'Register →',
    home_block3_add: 'Add a dog →',

    // MANIFESTO
    manifesto_title: 'Manifesto — UNICO SUO GENERE',
    manifesto_h1: 'Manifesto',
    manifesto_lead: 'UNICO SUO GENERE is a position. Not a trend. It is responsibility to the Cane Corso breed.',
    manifesto_why_h2: 'Why we exist',
    manifesto_why_li1: 'Protect breed type and functionality — above all.',
    manifesto_why_li2: 'Separate true representatives from imitations.',
    manifesto_why_li3: 'Build a Bulgarian branch with its own school and criteria.',
    manifesto_values_h2: 'Our principles',
    manifesto_values_li1: 'Truth: no fake shine and empty titles.',
    manifesto_values_li2: 'Practice: the standard comes from real work, not copying.',
    manifesto_values_li3: 'Responsibility: health, character, control and socialization.',
    manifesto_statement_h2: 'Statement',
    manifesto_statement_p1:
      'Cane Corso is not for everyone. It is powerful, intelligent and instinct-driven — and requires a stable handler.',
    manifesto_statement_p2:
      'We do not “collect numbers”. We build quality. We set boundaries. We take responsibility.',

    // STANDARD
    standard_title: 'Standard — UNICO SUO GENERE',
    standard_h1: 'Standard (Bulgarian branch)',
    standard_lead:
      'Here we publish a real Cane Corso standard for Bulgaria — built on practice, responsibility and expert judgement.',
    standard_what_h2: 'What “standard” means',
    standard_what_li1: 'Structure: proportions, head, bone, movement.',
    standard_what_li2: 'Temperament: stable character, control, socialization.',
    standard_what_li3: 'Health: tests, care, responsible breeding.',
    standard_download_h2: 'Document',
    standard_download_p: 'The final document will be available here (PDF). Until then, you can send proposals/materials.',
    standard_cta: 'Send material →',
    upload_standard_h2: 'Upload material for the standard',
    upload_standard_p: 'PDF/DOCX/photos — anything that supports the standard. We review and include what is relevant.',
    upload_label_name: 'Name',
    upload_label_contact: 'Email / Phone',
    upload_label_file: 'File',
    upload_label_message: 'Note',
    upload_btn_send: 'Send →',
    upload_ph_name: 'e.g. John Doe',
    upload_ph_contact: 'email or phone',
    upload_ph_message: 'short note (optional)',

    // REGISTRY
    registry_title: 'Registry — UNICO SUO GENERE',
    registry_h1: 'Registry',
    registry_lead: 'Public list of approved Cane Corso. Every submission is reviewed before publishing.',
    registry_search_label: 'Search by name',
    registry_search_ph: 'e.g. Ares',
    registry_filter_label: 'Filter',
    registry_filter_all: 'All',
    registry_filter_male: 'Male',
    registry_filter_female: 'Female',
    registry_filter_btn: 'Apply →',
    registry_clear_btn: 'Clear',

    // DOG
    dog_title: 'Profile — UNICO SUO GENERE',
    dog_subtitle: 'Profile in the UNICO SUO GENERE registry',
    dog_photos_h2: 'Photos',
    dog_details_h2: 'Details',
    dog_field_gender: 'Gender:',
    dog_field_color: 'Color:',
    dog_field_birth: 'Birth date:',
    dog_field_city: 'City:',
    dog_field_owner: 'Owner:',
    dog_field_kennel: 'Kennel:',
    dog_field_status: 'Status:',
    dog_back_btn: '← Back to registry',
    dog_approve_btn: 'Approve',
    dog_reject_btn: 'Reject',
    dog_notes_h2: 'Description',
    dog_notes_p: '(The description/note will appear here.)',

    // LOGIN
    login_title: 'Login — UNICO SUO GENERE',
    login_h1: 'Login',
    login_lead: 'Sign in to manage submissions and content.',
    login_label_email: 'Email',
    login_ph_email: 'name@example.com',
    login_label_password: 'Password',
    login_ph_password: '******',
    login_btn: 'Login →',
    login_no_account: "Don't have an account?",
    login_go_register: 'Register →',

    // REGISTER
    register_title: 'Register — UNICO SUO GENERE',
    register_h1: 'Register',
    register_lead: 'Create an account to submit requests and upload materials.',
    register_label_email: 'Email',
    register_ph_email: 'name@example.com',
    register_label_password: 'Password',
    register_ph_password: '******',
    register_label_repass: 'Repeat password',
    register_ph_repass: '******',
    register_btn: 'Register →',
    register_have_account: 'Already have an account?',
    register_go_login: 'Login →',

    // ADD DOG
    add_dog_title: 'Add Dog — UNICO SUO GENERE',
    add_dog_h1: 'Add a dog',
    add_dog_lead: 'Submit a request to be included in the registry. Every submission is reviewed before publishing.',
    add_dog_label_name: 'Dog name',
    add_dog_ph_name: 'e.g. Ares',
    add_dog_label_gender: 'Gender',
    add_dog_gender_choose: 'Choose',
    add_dog_gender_male: 'Male',
    add_dog_gender_female: 'Female',
    add_dog_label_color: 'Color',
    add_dog_ph_color: 'e.g. black',
    add_dog_label_birth: 'Birth date',
    add_dog_label_city: 'City',
    add_dog_ph_city: 'e.g. Plovdiv',
    add_dog_label_owner: 'Owner',
    add_dog_ph_owner: 'owner name',
    add_dog_label_kennel: 'Kennel (if any)',
    add_dog_ph_kennel: 'kennel name',
    add_dog_label_desc: 'Description / note',
    add_dog_ph_desc: 'short description',
    add_dog_label_photos: 'Photos',
    add_dog_photos_hint: 'Recommended: at least 3 photos (stance, profile, face).',
    add_dog_btn: 'Submit →',

    // ADMIN
    admin_title: 'Admin — UNICO SUO GENERE',
    admin_h1: 'Admin panel',
    admin_lead: 'Review submissions and decide which profiles to publish in the registry.',
    admin_pending_h2: 'Pending submissions',
    admin_refresh_btn: 'Refresh',
    admin_stats_h2: 'Status',
    admin_stats_pending: 'Pending:',
    admin_stats_approved: 'Approved:',
    admin_stats_rejected: 'Rejected:',
    admin_notes_h2: 'Notes',
    admin_notes_p: 'Approved profiles become visible in “Registry”. Rejected profiles remain hidden.'
  }
};

function getLang() {
  return localStorage.getItem(LANG_KEY) || 'bg';
}

function setLang(lang) {
  localStorage.setItem(LANG_KEY, lang);
  applyTranslations(lang);
}

function applyTranslations(lang) {
  // title
  const titleEl = document.querySelector('title[data-i18n]');
  if (titleEl) {
    const key = titleEl.dataset.i18n;
    const v = translations[lang]?.[key];
    if (v) document.title = v;
  }

  // text nodes
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    if (el.tagName.toLowerCase() === 'title') return;
    const key = el.dataset.i18n;
    const v = translations[lang]?.[key];
    if (v) el.textContent = v;
  });

  // placeholders
  document.querySelectorAll('[data-ph]').forEach((el) => {
    const key = el.dataset.ph;
    const v = translations[lang]?.[key];
    if (v) el.setAttribute('placeholder', v);
  });
}

function initLangButtons() {
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });
}

function setYear() {
  const y = document.getElementById('y');
  if (y) y.textContent = new Date().getFullYear();
}

document.addEventListener('DOMContentLoaded', () => {
  initLangButtons();
  applyTranslations(getLang());
  setYear();
});

