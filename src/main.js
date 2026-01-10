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

    // FOOTER
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

    home_brand_sub: 'Българският стандарт и регистър за Cane Corso — качество, контрол, отговорност.',
    home_brand_note: 'Това е платформа за собственици, развъдници и общност, която държи на породния тип и истината.',
    home_brand_standard_btn: 'Стандарт →',
    home_cta_join: 'Стани част →',
    home_note: 'Всеки профил се публикува след преглед и одобрение.',

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

    // (ако ги ползваш в HTML)
    manifesto_brand_sub: 'Позиция. Не тенденция. Отговорност към породата Cane Corso.',
    manifesto_left_note: 'Тук не търсим “харесвания”. Тук поставяме стандарт и носим отговорност.',
    manifesto_left_standard_btn: 'Стандарт →',
    manifesto_left_registry_btn: 'Регистър →',
    manifesto_cta_registry: 'Виж регистъра →',
    manifesto_cta_standard: 'Прочети стандарта →',
    manifesto_note: 'UNICO SUO GENERE — by Stefano De Tanini',

    // STANDARD
    standard_title: 'Стандарт — UNICO SUO GENERE',
    standard_h1: 'Стандарт (Българско разклонение)',
    standard_lead:
      'Тук ще публикуваме реален стандарт за Cane Corso в България — изграден върху практика, отговорност и експертна преценка.',
    standard_what_h2: 'Какво означава „стандарт“',
    standard_what_li1: 'Екстериор: пропорции, глава, костна система, движения.',
    standard_what_li2: 'Темперамент: стабилен характер, контрол, социализация.',
    standard_what_li3: 'Здраве: тестове, грижа, отговорно развъждане.',
    standard_download_h2: 'Документ',
    standard_download_p:
      'Финалният документ ще бъде наличен тук (PDF). До тогава можеш да изпратиш предложения/материали.',
    standard_cta: 'Изпрати материал →',

    upload_standard_h2: 'Качи материал за стандарта',
    upload_standard_p:
      'PDF/DOCX/снимки — всичко, което подкрепя стандарта. Ще го прегледаме и ако е релевантно, ще го включим.',
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

    registry_brand_sub: 'Публичен регистър с одобрени Cane Corso в България.',
    registry_brand_note: 'Видими са само одобрени профили. За включване — направи регистрация и подай заявка.',
    registry_brand_register_btn: 'Регистрация →',
    registry_brand_add_btn: 'Добави куче →',
    registry_brand_standard_btn: 'Стандарт →',
    registry_hint: 'Натисни върху профил, за да видиш детайли.',

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
    dog_status_h2: 'Статус',
    dog_status_loading: 'Зареждане...',
    dog_left_note: 'Само одобрени профили са публични. Админ може да одобрява/отхвърля заявки.',
    dog_left_standard_btn: 'Стандарт →',
    dog_photos_note: 'Ако няма снимки, профилът не е завършен.',
    dog_admin_note: 'Одобрение/отхвърляне влияе на видимостта в регистъра.',

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
    login_brand_sub: 'Вход за собственици и партньори на Cane Corso в България.',
    login_brand_note: 'Ако нямаш профил — направи регистрация и подай заявка за включване.',
    login_brand_register_btn: 'Регистрация →',
    login_brand_registry_btn: 'Регистър →',

    // BRAND BULLETS
    brand_b1: 'Cane Corso само.',
    brand_b2: 'Качество, здраве, темперамент.',
    brand_b3: 'Одобрение преди публикуване.',

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
    register_brand_sub: 'Регистрация за собственици, развъдници и партньори.',
    register_brand_note: 'След регистрация ще можеш да подадеш заявка и да качиш снимки за профил в регистъра.',
    register_brand_login_btn: 'Вход →',
    register_brand_registry_btn: 'Регистър →',

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
    add_dog_brand_sub: 'Подай заявка за включване в регистъра. Всяка заявка се преглежда.',
    add_dog_brand_note:
      'Снимки: препоръчително — стойка, профил и лице. Колкото по-ясни са данните, толкова по-бърза е верификацията.',
    add_dog_brand_registry_btn: 'Регистър →',
    add_dog_brand_standard_btn: 'Стандарт →',

    // ADMIN
    admin_title: 'Админ — UNICO SUO GENERE',
    admin_h1: 'Админ панел',
    admin_lead: 'Прегледай заявките и реши кои профили да се публикуват в регистъра.',
    admin_pending_h2: 'Чакащи заявки',
    admin_refresh_btn: 'Обнови',
    admin_stats_h2: 'Статистика',
    admin_stats_pending: 'Чакащи:',
    admin_stats_approved: 'Одобрени:',
    admin_stats_rejected: 'Отхвърлени:',
    admin_notes_h2: 'Бележки',
    admin_notes_p: 'Одобрените профили стават видими в “Регистър”. Отхвърлените профили остават скрити.',
    admin_brand_sub: 'Админ панел — преглед и одобрение на заявки.',
    admin_stat_pending: 'Чакащи',
    admin_stat_approved: 'Одобрени',
    admin_stat_rejected: 'Отхвърлени',
    admin_stats_note: 'Статистиката се обновява автоматично при действия.',
    admin_left_note: 'Одобрение → профилът става публичен в регистъра. Отхвърляне → остава скрит.',
    admin_left_registry_btn: 'Регистър →',
    admin_left_standard_btn: 'Стандарт →',
    admin_hint: 'Отвори профил, за да видиш детайли и снимки. Одобри/отхвърли директно от картата или от профила.',

    // CONTACT
    contact_title: 'Контакт — UNICO SUO GENERE',
    contact_h1: 'Контакт',
    contact_lead: 'Свържи се с нас за въпроси, партньорства или предложения.',
    contact_label_name: 'Име',
    contact_label_email: 'Имейл',
    contact_label_message: 'Съобщение',
    contact_btn: 'Изпрати →',
    contact_ph_name: 'твоето име',
    contact_ph_email: 'name@example.com',
    contact_ph_message: 'напиши твоето съобщение',
    contact_brand_sub: 'Свържи се с нас за въпроси, партньорства или предложения.',
    contact_brand_note: 'Пишеш директно до екипа на UNICO SUO GENERE. Всеки сигнал и предложение се разглеждат лично.',
    contact_brand_partners_btn: 'Партньори →',
    contact_brand_registry_btn: 'Регистър →',

    // PARTNERS
    partners_title: 'Партньори — UNICO SUO GENERE',
    partners_h1: 'Партньори',
    partners_lead: 'Работим с хора и организации, които уважават породата и споделят отговорен подход.',
    partners_types_h2: 'Кого търсим',
    partners_types_li1: 'Развъдници и собственици, които работят по качество, не по количество.',
    partners_types_li2: 'Ветеринарни клиники и специалисти по диагностика/ортопедия.',
    partners_types_li3: 'Треньори и центрове за социализация и контрол.',
    partners_types_li4: 'Брандове за храна, добавки и оборудване с доказано качество.',
    partners_offer_h2: 'Какво предлагаме',
    partners_offer_li1: 'Публично присъствие в секция “Партньори”.',
    partners_offer_li2: 'Съвместни инициативи и кампании в общността.',
    partners_offer_li3: 'Ясни правила и нулева толерантност към подвеждащи практики.',
    partners_apply_h2: 'Заявка за партньорство',
    partners_apply_p: 'Опиши дейността си и как виждаш партньорството. Ще се свържем при интерес.',
    partners_label_name: 'Име',
    partners_label_org: 'Организация',
    partners_label_contact: 'Имейл / Телефон',
    partners_label_site: 'Уебсайт / Профил',
    partners_label_message: 'Кратко описание',
    partners_btn: 'Изпрати →',
    partners_ph_name: 'име и фамилия',
    partners_ph_org: 'име на развъдник/клиника/бранд',
    partners_ph_contact: 'контакт',
    partners_ph_site: 'линк (по желание)',
    partners_ph_message: 'какво правите и какво предлагате',
    partners_brand_sub: 'Партньорства, основани на реално качество и отговорност.',
    partners_brand_note: 'Търсим хора и организации, които работят дългосрочно и споделят същите ценности.',
    partners_brand_contact_btn: 'Контакт →',
    partners_brand_project_btn: 'Проектът →',

    // PROJECT
    project_title: 'Проектът — UNICO SUO GENERE',
    project_h1: 'Проектът',
    project_lead:
      'UNICO SUO GENERE е платформа за Cane Corso в България — регистър, стандарт и ясни правила за качество.',
    project_goal_h2: 'Цел',
    project_goal_p:
      'Да създадем единна точка за доверие: регистър на одобрени кучета, публикуван стандарт и общност, която поставя здраве, темперамент и породен тип на първо място.',
    project_audience_h2: 'За кого е',
    project_audience_li1: 'Собственици на Cane Corso, които искат ясно признание и коректност.',
    project_audience_li2: 'Развъдници, които работят отговорно и търсят качествена среда.',
    project_audience_li3: 'Хора, които търсят реална информация, а не рекламен шум.',
    project_features_h2: 'Основни функционалности',
    project_feat1_h3: 'Публичен регистър',
    project_feat1_p: 'Видими са само одобрени профили. Всеки профил има снимки и основни данни за кучето.',
    project_feat2_h3: 'Подаване на заявка',
    project_feat2_p: 'Регистрирани потребители могат да подават заявка за включване и да качват снимки.',
    project_feat3_h3: 'Админ одобрение',
    project_feat3_p: 'Админ панел за преглед, одобрение и отхвърляне на заявки преди публикуване в регистъра.',
    project_feat4_h3: 'Документи и материали',
    project_feat4_p: 'В секция “Стандарт” потребителите могат да изпращат материали (документи/снимки) за преглед и включване.',
    project_feat5_h3: 'Двуезичен интерфейс',
    project_feat5_p: 'Сайтът поддържа BG/EN, за да е достъпен и за международна аудитория.',
    project_feat6_h3: 'Ясна идентичност',
    project_feat6_p: 'Премиум визия в черно/злато и ясна марка: UNICO SUO GENERE — by Stefano De Tanini.',
    project_rules_h2: 'Правила за включване',
    project_rules_li1: 'Регистърът е само за Cane Corso.',
    project_rules_li2: 'Допускат се и кучета без родословие, ако са реални представители на породата.',
    project_rules_li3: 'Всяка заявка подлежи на експертна верификация и одобрение.',
    project_cta_h2: 'Следваща стъпка',
    project_cta_p:
      'Ако имаш Cane Corso и искаш профил в регистъра — създай акаунт и подай заявка с коректни данни и снимки.',
    project_cta_register: 'Регистрация →',
    project_cta_login: 'Вход →',
    project_cta_add: 'Добави куче →',
    project_cta_registry: 'Регистър →',
    project_brand_sub: 'Платформа за българската общност на Cane Corso — стандарт, регистър и отговорност.',
    project_b1: 'Ясни правила и критерии',
    project_b2: 'Проверка и одобрение',
    project_b3: 'Общност и партньорства',
    project_left_note: 'Проектът е създаден, за да защити породата от компромиси и да изгради култура на качество.',
    project_left_registry_btn: 'Регистър →',
    project_left_standard_btn: 'Стандарт →',
    project_cta_join: 'Регистрация →',
    project_note: 'UNICO SUO GENERE — by Stefano De Tanini',

    // 404 (existing + NEW)
    notfound_title: 'Страницата не е намерена — UNICO SUO GENERE',
    notfound_h1: '404',
    notfound_lead: 'Страницата не е намерена.',
    notfound_brand_sub: 'Пътят е важен — но понякога страницата липсва.',
    notfound_left_note: 'Ако смяташ, че това е грешка — свържи се с нас и ще я оправим.',
    notfound_contact_btn: 'Контакт →',
    notfound_registry_btn: 'Регистър →',
    notfound_tip: 'Провери адреса или използвай бутоните по-долу.',
    notfound_home_btn: 'Начало →',
    notfound_manifesto_btn: 'Манифест →',
    notfound_standard_btn: 'Стандарт →',
    notfound_note: 'UNICO SUO GENERE — by Stefano De Tanini',

    // TERMS (existing + NEW sections)
    terms_title: 'Общи условия — UNICO SUO GENERE',
    terms_h1: 'Общи условия',
    terms_lead: 'Настоящите условия уреждат използването на платформата UNICO SUO GENERE.',
    terms_brand_sub: 'Правила за използване на платформата.',
    terms_left_note: 'Използвайки платформата, ти се съгласяваш с условията по-долу.',
    terms_left_privacy_btn: 'Поверителност →',
    terms_left_contact_btn: 'Контакт →',
    terms_sec1_h2: '1. Обхват',
    terms_sec1_p:
      'Платформата е предназначена за информация, регистрация и представяне на Cane Corso кучета и свързани партньори.',
    terms_sec2_h2: '2. Регистрация',
    terms_sec2_p: 'Потребителите носят отговорност за предоставената информация. Всяка заявка подлежи на преглед и одобрение.',
    terms_sec3_h2: '3. Съдържание',
    terms_sec3_p:
      'Забранено е публикуването на невярна, подвеждаща или неуместна информация. Администраторът има право да премахва съдържание.',
    terms_sec4_h2: '4. Отговорност',
    terms_sec4_p:
      'Платформата не носи отговорност за действията на потребителите или за последици от използването на публикувана информация.',
    terms_sec5_h2: '5. Промени',
    terms_sec5_p:
      'Условията могат да бъдат актуализирани по всяко време. Продължаването на използването означава съгласие с промените.',
    terms_note: 'UNICO SUO GENERE — by Stefano De Tanini',

    // PRIVACY (existing + NEW sections)
    privacy_title: 'Поверителност — UNICO SUO GENERE',
    privacy_h1: 'Поверителност',
    privacy_lead:
      'Настоящата политика описва как се събират, използват и защитават личните данни в UNICO SUO GENERE.',
    privacy_brand_sub: 'Защита на личните данни и прозрачност.',
    privacy_left_note: 'Ние уважаваме личните ти данни и ги използваме отговорно.',
    privacy_left_terms_btn: 'Условия →',
    privacy_left_contact_btn: 'Контакт →',
    privacy_sec1_h2: '1. Какви данни събираме',
    privacy_sec1_p: 'Име, имейл, контактна информация и данни, предоставени доброволно при регистрация или контакт.',
    privacy_sec2_h2: '2. Как използваме данните',
    privacy_sec2_p: 'Данните се използват за управление на профили, заявки, комуникация и поддръжка на платформата.',
    privacy_sec3_h2: '3. Съхранение и защита',
    privacy_sec3_p: 'Прилагаме технически и организационни мерки за защита на информацията от неоторизиран достъп.',
    privacy_sec4_h2: '4. Споделяне',
    privacy_sec4_p: 'Лични данни не се споделят с трети страни, освен ако това не се изисква по закон.',
    privacy_sec5_h2: '5. Права на потребителите',
    privacy_sec5_p: 'Всеки потребител има право на достъп, корекция и изтриване на своите данни.',
    privacy_note: 'UNICO SUO GENERE — by Stefano De Tanini',
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

    // FOOTER
    footer_contact: 'Contact',

    // HOME
    home_title: 'UNICO SUO GENERE — Cane Corso',
    home_h1: 'UNICO SUO GENERE',
    home_lead: 'A Cane Corso platform in Bulgaria — built on the UNICO SUO GENERE standard.',
    home_cta_manifesto: 'Read the manifesto →',
    home_cta_registry: 'View registry →',
    home_cta_add: 'Add dog →',

    home_block1_h2: 'Registry',
    home_block1_p: 'Public list of approved dogs. Every submission is reviewed before publishing.',
    home_block1_cta: 'Open registry →',

    home_block2_h2: 'Standard',
    home_block2_p: 'Bulgarian branch: structure, temperament, health and functionality.',
    home_block2_cta: 'Open standard →',

    home_block3_h2: 'Participation',
    home_block3_p: 'Sign in to submit requests and upload materials.',
    home_block3_login: 'Login →',
    home_block3_register: 'Register →',
    home_block3_add: 'Add dog →',

    home_brand_sub: 'The Bulgarian standard and registry for Cane Corso — quality, control, responsibility.',
    home_brand_note: 'A platform for owners, kennels and a community that values breed type and truth.',
    home_brand_standard_btn: 'Standard →',
    home_cta_join: 'Join →',
    home_note: 'Every profile is published after review and approval.',

    // MANIFESTO (FIXED: removed BG duplicates)
    manifesto_title: 'Manifesto — UNICO SUO GENERE',
    manifesto_h1: 'Manifesto',
    manifesto_lead: 'UNICO SUO GENERE is a position. Not a trend. It is responsibility to the Cane Corso breed.',
    manifesto_brand_sub: 'A position. Not a trend. Responsibility to the Cane Corso breed.',
    manifesto_left_note: 'We are not chasing “likes”. We set a standard and take responsibility.',
    manifesto_left_standard_btn: 'Standard →',
    manifesto_left_registry_btn: 'Registry →',
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
    manifesto_cta_registry: 'View registry →',
    manifesto_cta_standard: 'Read the standard →',
    manifesto_note: 'UNICO SUO GENERE — by Stefano De Tanini',

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
    standard_download_p:
      'The final document will be available here (PDF). Until then, you can send proposals/materials.',
    standard_cta: 'Send material →',

    upload_standard_h2: 'Upload material for the standard',
    upload_standard_p:
      'PDF/DOCX/photos — anything that supports the standard. We review and include what is relevant.',
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
    registry_brand_sub: 'A public registry of approved Cane Corso in Bulgaria.',
    registry_brand_note: 'Only approved profiles are visible. To join — register and submit a request.',
    registry_brand_register_btn: 'Register →',
    registry_brand_add_btn: 'Add dog →',
    registry_brand_standard_btn: 'Standard →',
    registry_hint: 'Click a profile to view details.',

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
    dog_status_h2: 'Status',
    dog_status_loading: 'Loading...',
    dog_left_note: 'Only approved profiles are public. Admin can approve/reject submissions.',
    dog_left_standard_btn: 'Standard →',
    dog_photos_note: 'If there are no photos, the profile is not complete.',
    dog_admin_note: 'Approve/reject affects visibility in the registry.',

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
    login_brand_sub: 'Sign in for Cane Corso owners and partners in Bulgaria.',
    login_brand_note: 'No account yet? Register and submit a request to be included.',
    login_brand_register_btn: 'Register →',
    login_brand_registry_btn: 'Registry →',

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
    register_brand_sub: 'Registration for owners, kennels and partners.',
    register_brand_note: 'After registering you can submit a request and upload photos for a registry profile.',
    register_brand_login_btn: 'Login →',
    register_brand_registry_btn: 'Registry →',

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
    add_dog_brand_sub: 'Submit a registry request. Every request is reviewed.',
    add_dog_brand_note:
      'Photos: recommended — stance, profile and face. The clearer the data, the faster the verification.',
    add_dog_brand_registry_btn: 'Registry →',
    add_dog_brand_standard_btn: 'Standard →',

    // ADMIN
    admin_title: 'Admin — UNICO SUO GENERE',
    admin_h1: 'Admin panel',
    admin_lead: 'Review submissions and decide which profiles to publish in the registry.',
    admin_pending_h2: 'Pending submissions',
    admin_refresh_btn: 'Refresh',
    admin_stats_h2: 'Stats',
    admin_stats_pending: 'Pending:',
    admin_stats_approved: 'Approved:',
    admin_stats_rejected: 'Rejected:',
    admin_notes_h2: 'Notes',
    admin_notes_p: 'Approved profiles become visible in “Registry”. Rejected profiles remain hidden.',
    admin_brand_sub: 'Admin panel — review and approve submissions.',
    admin_stat_pending: 'Pending',
    admin_stat_approved: 'Approved',
    admin_stat_rejected: 'Rejected',
    admin_stats_note: 'Stats update automatically after actions.',
    admin_left_note: 'Approve → profile becomes public in the registry. Reject → stays hidden.',
    admin_left_registry_btn: 'Registry →',
    admin_left_standard_btn: 'Standard →',
    admin_hint: 'Open a profile to view details and photos. Approve/reject from the card or from the profile page.',

    // CONTACT (FIXED: removed BG lines)
    contact_title: 'Contact — UNICO SUO GENERE',
    contact_h1: 'Contact',
    contact_lead: 'Contact us for questions, partnerships or proposals.',
    contact_label_name: 'Name',
    contact_label_email: 'Email',
    contact_label_message: 'Message',
    contact_btn: 'Send →',
    contact_ph_name: 'your name',
    contact_ph_email: 'name@example.com',
    contact_ph_message: 'write your message',
    contact_brand_sub: 'Contact us for questions, partnerships or proposals.',
    contact_brand_note: 'You are writing directly to the UNICO SUO GENERE team. Every message is reviewed personally.',
    contact_brand_partners_btn: 'Partners →',
    contact_brand_registry_btn: 'Registry →',

    // PARTNERS
    partners_title: 'Partners — UNICO SUO GENERE',
    partners_h1: 'Partners',
    partners_lead: 'We work with people and organizations who respect the breed and share a responsible approach.',
    partners_types_h2: 'Who we are looking for',
    partners_types_li1: 'Kennels and owners focused on quality, not quantity.',
    partners_types_li2: 'Veterinary clinics and diagnostic/orthopedic specialists.',
    partners_types_li3: 'Trainers and centers for socialization and control.',
    partners_types_li4: 'Food/supplement/equipment brands with proven quality.',
    partners_offer_h2: 'What we offer',
    partners_offer_li1: 'Public presence in the “Partners” section.',
    partners_offer_li2: 'Joint initiatives and community campaigns.',
    partners_offer_li3: 'Clear rules and zero tolerance for misleading practices.',
    partners_apply_h2: 'Partnership request',
    partners_apply_p: 'Describe what you do and how you see the partnership. We will contact you if interested.',
    partners_label_name: 'Name',
    partners_label_org: 'Organization',
    partners_label_contact: 'Email / Phone',
    partners_label_site: 'Website / Profile',
    partners_label_message: 'Short description',
    partners_btn: 'Send →',
    partners_ph_name: 'full name',
    partners_ph_org: 'kennel/clinic/brand name',
    partners_ph_contact: 'contact',
    partners_ph_site: 'link (optional)',
    partners_ph_message: 'what you do and what you offer',
    partners_brand_sub: 'Partnerships built on real quality and responsibility.',
    partners_brand_note: 'We are looking for people and organizations who think long-term and share the same values.',
    partners_brand_contact_btn: 'Contact →',
    partners_brand_project_btn: 'Project →',

    // PROJECT
    project_title: 'Project — UNICO SUO GENERE',
    project_h1: 'Project',
    project_lead:
      'UNICO SUO GENERE is a Cane Corso platform in Bulgaria — registry, standard and clear quality rules.',
    project_goal_h2: 'Goal',
    project_goal_p:
      'Build a trusted single point: a registry of approved dogs, a published standard, and a community that puts health, temperament and breed type first.',
    project_audience_h2: 'Who it is for',
    project_audience_li1: 'Cane Corso owners who want clarity and fairness.',
    project_audience_li2: 'Responsible kennels seeking a quality environment.',
    project_audience_li3: 'People looking for real information, not marketing noise.',
    project_features_h2: 'Core features',
    project_feat1_h3: 'Public registry',
    project_feat1_p: 'Only approved profiles are visible. Each profile has photos and essential dog data.',
    project_feat2_h3: 'Submission flow',
    project_feat2_p: 'Registered users can submit a request and upload photos.',
    project_feat3_h3: 'Admin approval',
    project_feat3_p: 'Admin panel to review, approve or reject submissions before publishing.',
    project_feat4_h3: 'Documents and materials',
    project_feat4_p: 'In “Standard”, users can send materials (docs/photos) for review and possible inclusion.',
    project_feat5_h3: 'Bilingual UI',
    project_feat5_p: 'BG/EN language support for international accessibility.',
    project_feat6_h3: 'Clear identity',
    project_feat6_p: 'Premium black/gold look and a clear brand: UNICO SUO GENERE — by Stefano De Tanini.',
    project_rules_h2: 'Inclusion rules',
    project_rules_li1: 'Registry is only for Cane Corso.',
    project_rules_li2: 'Dogs without pedigree can be included if they are true representatives of the breed.',
    project_rules_li3: 'Every submission is reviewed and approved by expert verification.',
    project_cta_h2: 'Next step',
    project_cta_p:
      'If you have a Cane Corso and want a registry profile — create an account and submit a request with correct data and photos.',
    project_cta_register: 'Register →',
    project_cta_login: 'Login →',
    project_cta_add: 'Add a dog →',
    project_cta_registry: 'Registry →',
    project_brand_sub: 'A platform for the Bulgarian Cane Corso community — standard, registry and responsibility.',
    project_b1: 'Clear rules and criteria',
    project_b2: 'Review and approval',
    project_b3: 'Community and partnerships',
    project_left_note: 'The project exists to protect the breed from compromises and to build a culture of quality.',
    project_left_registry_btn: 'Registry →',
    project_left_standard_btn: 'Standard →',
    project_cta_join: 'Register →',
    project_note: 'UNICO SUO GENERE — by Stefano De Tanini',

    // 404 (NEW keys)
    notfound_title: 'Page not found — UNICO SUO GENERE',
    notfound_h1: '404',
    notfound_lead: 'Page not found.',
    notfound_brand_sub: 'The path matters — but sometimes a page is missing.',
    notfound_left_note: 'If you believe this is a mistake — contact us and we will fix it.',
    notfound_contact_btn: 'Contact →',
    notfound_registry_btn: 'Registry →',
    notfound_tip: 'Check the URL or use the buttons below.',
    notfound_home_btn: 'Home →',
    notfound_manifesto_btn: 'Manifesto →',
    notfound_standard_btn: 'Standard →',
    notfound_note: 'UNICO SUO GENERE — by Stefano De Tanini',

    // TERMS (NEW keys)
    terms_title: 'Terms & Conditions — UNICO SUO GENERE',
    terms_h1: 'Terms & Conditions',
    terms_lead: 'These terms govern the use of the UNICO SUO GENERE platform.',
    terms_brand_sub: 'Rules for using the platform.',
    terms_left_note: 'By using the platform, you agree to the terms below.',
    terms_left_privacy_btn: 'Privacy →',
    terms_left_contact_btn: 'Contact →',
    terms_sec1_h2: '1. Scope',
    terms_sec1_p: 'The platform provides information, registration and presentation of Cane Corso dogs and related partners.',
    terms_sec2_h2: '2. Registration',
    terms_sec2_p: 'Users are responsible for the information they provide. Each submission is reviewed and approved.',
    terms_sec3_h2: '3. Content',
    terms_sec3_p: 'False, misleading or inappropriate content is forbidden. The administrator may remove content.',
    terms_sec4_h2: '4. Liability',
    terms_sec4_p: 'The platform is not responsible for user actions or consequences of using published information.',
    terms_sec5_h2: '5. Changes',
    terms_sec5_p: 'These terms may be updated at any time. Continued use means acceptance of the changes.',
    terms_note: 'UNICO SUO GENERE — by Stefano De Tanini',

    // PRIVACY (NEW keys)
    privacy_title: 'Privacy Policy — UNICO SUO GENERE',
    privacy_h1: 'Privacy',
    privacy_lead: 'This policy describes how personal data is collected, used and protected within UNICO SUO GENERE.',
    privacy_brand_sub: 'Personal data protection and transparency.',
    privacy_left_note: 'We respect your personal data and use it responsibly.',
    privacy_left_terms_btn: 'Terms →',
    privacy_left_contact_btn: 'Contact →',
    privacy_sec1_h2: '1. What data we collect',
    privacy_sec1_p: 'Name, email, contact information and data you voluntarily provide when registering or contacting us.',
    privacy_sec2_h2: '2. How we use data',
    privacy_sec2_p: 'Data is used for profile/submission management, communication and platform support.',
    privacy_sec3_h2: '3. Storage and protection',
    privacy_sec3_p: 'We apply technical and organizational measures to protect information from unauthorized access.',
    privacy_sec4_h2: '4. Sharing',
    privacy_sec4_p: 'Personal data is not shared with third parties unless required by law.',
    privacy_sec5_h2: '5. User rights',
    privacy_sec5_p: 'Users have the right to access, correct and delete their data.',
    privacy_note: 'UNICO SUO GENERE — by Stefano De Tanini',
  }
};

function getLang() {
  return localStorage.getItem(LANG_KEY) || 'bg';
}

function setLang(lang) {
  localStorage.setItem(LANG_KEY, lang);
  applyTranslations(lang);
  setActiveLangButton(lang);
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

function setActiveLangButton(lang) {
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    if (btn.dataset.lang === lang) btn.classList.add('active');
    else btn.classList.remove('active');
  });
}

function setYear() {
  const y = document.getElementById('y');
  if (y) y.textContent = new Date().getFullYear();
}

document.addEventListener('DOMContentLoaded', () => {
  initLangButtons();
  const lang = getLang();
  applyTranslations(lang);
  setActiveLangButton(lang);
  setYear();
});
