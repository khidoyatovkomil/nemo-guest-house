/* =========================================================
   NEMO GUEST HOUSE
   INDEPENDENT HEADER + LANGUAGES + MOBILE MENU
   ========================================================= */

(() => {
    "use strict";
    console.log("NEMO CUSTOM JS VERSION 3 LOADED");

    /* =====================================================
       CONFIG
       ===================================================== */

    const LANGUAGES = {
        ru: {
            short: "RU",
            name: "Русский"
        },

        uz: {
            short: "UZ",
            name: "O‘zbekcha"
        },

        en: {
            short: "EN",
            name: "English"
        }
    };


    /* =====================================================
       TRANSLATIONS
       ===================================================== */

    const translations = {

        ru: {

            "Stay":
                "Номера",

            "Story":
                "О нас",

            "Book a stay":
                "Забронировать",

            "39.7681° N, 64.4556° E — Old Bukhara":
                "39.780566° N, 64.4069443° E — Бухара",

            "A quiet courtyard, steps from the old city.":
                "Тихий дворик в нескольких шагах от старого города.",

            "Небольшой семейный гостевой дом в сердце Бухары — for slow mornings, cool shade, and a warm welcome.":
                "Небольшой семейный гостевой дом в сердце Бухары — для спокойных утр, прохлады и тёплого приёма.",

            "Breakfast included":
                "Завтрак включён",

            "Free Wi-Fi":
                "Бесплатный Wi-Fi",

            "Free parking":
                "Бесплатная парковка",

            "Why stay with us":
                "Почему стоит остановиться у нас",

            "Stay close to the city, and closer to its rhythm.":
                "Будьте рядом с городом и ближе к его ритму.",

            "Quiet courtyard":
                "Тихий дворик",

            "A shaded place to return to after Bukhara’s streets and sun.":
                "Уютное место, куда приятно возвращаться после улиц и солнца Бухары.",

            "Home-cooked breakfast":
                "Домашний завтрак",

            "Fresh tea, seasonal fruit, and the kind of morning that asks nothing of you.":
                "Свежий чай, сезонные фрукты и утро, которому ничего от вас не нужно.",

            "Personal hospitality":
                "Личное гостеприимство",

            "Our family will gladly help you plan a route through the old city, one turn at a time.":
                "Наша семья с радостью поможет проложить маршрут по старому городу — шаг за шагом.",

            "A place to linger":
                "Место, где хочется задержаться",

            "Rooms":
                "Номера",

            "Simple rooms. Unhurried mornings.":
                "Простые номера. Неторопливые утра.",

            "Standard":
                "Стандарт",

            "For 2 guests · $50 / night":
                "Для 2 гостей · $50 / ночь",

            "A restful, light-filled room for two — with thoughtful essentials and a cool place to land.":
                "Светлый и спокойный номер для двоих — со всем необходимым для комфортного отдыха.",

            "Apartment":
                "Апартаменты",

            "For 2 guests · $70 / night":
                "Для 2 гостей · $70 / ночь",

            "More space to spread out, settle in, and enjoy the gentle pace of the courtyard.":
                "Больше пространства, чтобы расположиться с комфортом и наслаждаться спокойным ритмом дворика.",

            "Family Apartment":
                "Семейные апартаменты",

            "Up to 4 guests · $100 / night":
                "До 4 гостей · $100 / ночь",

            "An easy, generous base for families travelling through the old city together.":
                "Просторный вариант для семьи, путешествующей вместе по старому городу.",

            "Our story":
                "О нас",

            "A home made for travellers.":
                "Дом, созданный для путешественников.",

            "Nemo Guest House is family-run, with the care of a home rather than the formality of a hotel. We welcome guests with tea, share our favourite turns through Bukhara, and keep the courtyard ready for the quiet hours in between.":
                "Nemo Guest House — семейный гостевой дом, где важны уют и забота, а не формальность отеля. Мы встречаем гостей чаем, делимся любимыми маршрутами по Бухаре и бережём дворик для спокойных часов отдыха.",

            "From our door":
                "От нашего дома",

            "Lyabi-Hauz":
                "Ляби-Хауз",

            "Ark fortress":
                "Крепость Арк",

            "Kalyan Minaret":
                "Минарет Калян",

            "Old bazaar":
                "Старый базар",

            "5 min walk":
                "5 мин пешком",

            "10 min walk":
                "10 мин пешком",

            "7 min walk":
                "7 мин пешком",

            "Contact & book":
                "Связаться и забронировать",

            "Make it a slow stay.":
                "Пусть отдых будет неспешным.",

            "Write to us directly to ask a question, arrange a room, or share your arrival plans. We’ll respond personally.":
                "Напишите нам напрямую: задайте вопрос, выберите номер или сообщите о планах приезда. Мы ответим лично.",

            "Guest notes":
                "Отзывы гостей",

            "“The kindest welcome, the best breakfast, and a courtyard we never wanted to leave.”":
                "«Самый тёплый приём, лучший завтрак и дворик, из которого совсем не хотелось уходить».",

            "— Elena, Moscow":
                "— Елена, Москва",

            "Old Bukhara · Uzbekistan":
                "Бухара · Узбекистан"
        },


        uz: {

            "Stay":
                "Xonalar",

            "Story":
                "Biz haqimizda",

            "Book a stay":
                "Bron qilish",

            "39.7681° N, 64.4556° E — Old Bukhara":
                "39.780566° N, 64.4069443° E — Buxoro",

            "A quiet courtyard, steps from the old city.":
                "Eski shahardan bir necha qadam naridagi sokin hovli.",

            "Небольшой семейный гостевой дом в сердце Бухары — for slow mornings, cool shade, and a warm welcome.":
                "Buxoro markazidagi kichik oilaviy mehmon uyi — sokin tonglar, salqin soya va iliq kutib olish uchun.",

            "Breakfast included":
                "Nonushta kiritilgan",

            "Free Wi-Fi":
                "Bepul Wi-Fi",

            "Free parking":
                "Bepul avtoturargoh",

            "Why stay with us":
                "Nega bizda qolish kerak",

            "Stay close to the city, and closer to its rhythm.":
                "Shaharga yaqin, uning ritmiga esa yanada yaqin bo‘ling.",

            "Quiet courtyard":
                "Sokin hovli",

            "A shaded place to return to after Bukhara’s streets and sun.":
                "Buxoro ko‘chalari va quyoshidan keyin qaytish uchun salqin va osoyishta joy.",

            "Home-cooked breakfast":
                "Uy nonushtasi",

            "Fresh tea, seasonal fruit, and the kind of morning that asks nothing of you.":
                "Yangi choy, mavsumiy mevalar va sizdan hech narsani talab qilmaydigan sokin tong.",

            "Personal hospitality":
                "Samimiy mehmondo‘stlik",

            "Our family will gladly help you plan a route through the old city, one turn at a time.":
                "Oilamiz eski shahar bo‘ylab sayohat yo‘nalishini rejalashda mamnuniyat bilan yordam beradi.",

            "A place to linger":
                "Shoshilmasdan qolish uchun joy",

            "Rooms":
                "Xonalar",

            "Simple rooms. Unhurried mornings.":
                "Oddiy xonalar. Shoshilmas tonglar.",

            "Standard":
                "Standart",

            "For 2 guests · $50 / night":
                "2 mehmon uchun · $50 / tun",

            "A restful, light-filled room for two — with thoughtful essentials and a cool place to land.":
                "Ikki kishi uchun yorug‘ va osoyishta xona — qulay dam olish uchun barcha zarur narsalar bilan.",

            "Apartment":
                "Apartament",

            "For 2 guests · $70 / night":
                "2 mehmon uchun · $70 / tun",

            "More space to spread out, settle in, and enjoy the gentle pace of the courtyard.":
                "Ko‘proq joy, qulay joylashish va hovlining sokin ritmidan bahramand bo‘lish uchun.",

            "Family Apartment":
                "Oilaviy apartament",

            "Up to 4 guests · $100 / night":
                "4 mehmongacha · $100 / tun",

            "An easy, generous base for families travelling through the old city together.":
                "Eski shahar bo‘ylab birga sayohat qilayotgan oilalar uchun keng va qulay variant.",

            "Our story":
                "Biz haqimizda",

            "A home made for travellers.":
                "Sayohatchilar uchun yaratilgan uy.",

            "Nemo Guest House is family-run, with the care of a home rather than the formality of a hotel. We welcome guests with tea, share our favourite turns through Bukhara, and keep the courtyard ready for the quiet hours in between.":
                "Nemo Guest House — mehmonxona rasmiyligidan ko‘ra uy iliqligini qadrlaydigan oilaviy mehmon uyi. Mehmonlarni choy bilan kutib olamiz, Buxorodagi sevimli yo‘nalishlarimizni ulashamiz va hovlini osoyishta dam olish uchun tayyor tutamiz.",

            "From our door":
                "Uyimizdan",

            "Lyabi-Hauz":
                "Labi Hovuz",

            "Ark fortress":
                "Ark qal’asi",

            "Kalyan Minaret":
                "Kalon minorasi",

            "Old bazaar":
                "Eski bozor",

            "5 min walk":
                "5 daqiqa piyoda",

            "10 min walk":
                "10 daqiqa piyoda",

            "7 min walk":
                "7 daqiqa piyoda",

            "Contact & book":
                "Bog‘lanish va bron",

            "Make it a slow stay.":
                "Shoshilmay dam oling.",

            "Write to us directly to ask a question, arrange a room, or share your arrival plans. We’ll respond personally.":
                "Savol berish, xona tanlash yoki kelish rejangizni bildirish uchun bizga to‘g‘ridan-to‘g‘ri yozing. Shaxsan javob beramiz.",

            "Guest notes":
                "Mehmonlar fikri",

            "“The kindest welcome, the best breakfast, and a courtyard we never wanted to leave.”":
                "«Eng samimiy kutib olish, eng yaxshi nonushta va tark etishni istamagan hovli».",

            "— Elena, Moscow":
                "— Elena, Moskva",

            "Old Bukhara · Uzbekistan":
                "Buxoro · O‘zbekiston"
        },

        en: {
            "Небольшой семейный гостевой дом в сердце Бухары — for slow mornings, cool shade, and a warm welcome.":
                "A cozy family guest house in the heart of Bukhara — for slow mornings, cool shade, and a warm welcome.",

            "39.7681° N, 64.4556° E — Old Bukhara":
                "39.780566° N, 64.4069443° E — Bukhara",
        }
    };


    /* =====================================================
       STORAGE
       ===================================================== */

    const STORAGE_KEY = "nemo-language";

    let currentLanguage =
        localStorage.getItem(STORAGE_KEY) || "ru";

    let isApplyingLanguage = false;


    /* =====================================================
       HELPERS
       ===================================================== */

    function normalizeText(value) {

        return String(value || "")
            .replace(/\u00a0/g, " ")
            .replace(/\s+/g, " ")
            .trim();
    }


    function translatedText(original, language) {

        return (
            translations[language]?.[original] ||
            original
        );
    }


    /* =====================================================
       SAVE ORIGINAL TEXT
       ===================================================== */

    const originalNodes = new Map();


    function collectOriginalText() {

        const root =
            document.querySelector("#main");

        if (!root) return;


        const walker =
            document.createTreeWalker(
                root,
                NodeFilter.SHOW_TEXT
            );


        let node;


        while (node = walker.nextNode()) {

            const text =
                normalizeText(node.nodeValue);

            if (!text) continue;


            if (!originalNodes.has(node)) {

                originalNodes.set(
                    node,
                    text
                );
            }
        }
    }


    /* =====================================================
       APPLY LANGUAGE
       ===================================================== */

    function applyLanguage(language) {

        currentLanguage = language;

        document.documentElement.lang =
            language;


        document.title =
            language === "ru"
                ? "Nemo Guest House — Бухара"
                : language === "uz"
                    ? "Nemo Guest House — Buxoro"
                    : "Nemo Guest House — Bukhara";


        collectOriginalText();


        isApplyingLanguage = true;

        originalNodes.forEach(
            (original, node) => {

                if (!node.isConnected)
                    return;


                node.nodeValue =
                    translatedText(
                        original,
                        language
                    );
            }
        );

        setTimeout(() => {
            isApplyingLanguage = false;
        }, 0);


        /* update header */

        const languageButton =
            document.querySelector(
                "#nemo-language-current"
            );


        if (languageButton) {

            languageButton.textContent =
                LANGUAGES[language].short;
        }


        document
            .querySelectorAll(
                ".nemo-language-option"
            )
            .forEach(button => {

                button.classList.toggle(
                    "active",
                    button.dataset.language === language
                );
            });


        /* update mobile menu */

        const mobileLinks =
            document.querySelectorAll(
                ".nemo-mobile-link"
            );


        mobileLinks.forEach(link => {

            const key =
                link.dataset.translationKey;

            link.textContent =
                translatedText(
                    key,
                    language
                );
        });

        /* update desktop nav */

document
    .querySelectorAll(
        ".nemo-desktop-link"
    )
    .forEach(link => {

        const key =
            link.dataset.translationKey;

        if (key) {
            link.textContent =
                translatedText(
                    key,
                    language
                );
        }
    });


        /* remember */

        localStorage.setItem(
            STORAGE_KEY,
            language
        );
        document.dispatchEvent(
            new CustomEvent(
                "nemo:language-changed",
                { detail: { language } }
            )
        );
    }


    /* =====================================================
       FIX STORY TARGET
       ===================================================== */

    function fixAnchors() {

        document
            .querySelectorAll(
                'a[href*="#story"]'
            )
            .forEach(link => {

                link.setAttribute(
                    "href",
                    "#story-1"
                );
            });
    }


    /* =====================================================
       SCROLL TO SECTION
       ===================================================== */

    function scrollToTarget(selector) {

        const target =
            document.querySelector(selector);


        if (!target) return;


        const headerHeight =
            window.innerWidth <= 809
                ? 70
                : 82;


        const top =
            target.getBoundingClientRect().top
            + window.scrollY
            - headerHeight;


        window.scrollTo({

            top,

            behavior: "smooth"
        });
    }


    /* =====================================================
       CREATE HEADER
       ===================================================== */

    function createHeader() {

        if (
            document.querySelector(
                "#nemo-header"
            )
        ) {
            return;
        }


        const header =
            document.createElement("header");


        header.id =
            "nemo-header";


        header.innerHTML = `

            <div class="nemo-header-inner">

                <button
                    id="nemo-mobile-menu-button"
                    type="button"
                    aria-label="Open menu"
                    aria-expanded="false"
                >
                    <span></span>
                </button>


                <a
                    href="#top"
                    class="nemo-logo"
                    id="nemo-logo"
                >
                    Nemo Guest House
                </a>


                <nav
                    class="nemo-desktop-nav"
                    aria-label="Primary navigation"
                >

                    <a
                        href="#rooms"
                        class="nemo-desktop-link"
                        data-translation-key="Stay"
                    >
                        Stay
                    </a>

                    <a
                        href="#story-1"
                        class="nemo-desktop-link"
                        data-translation-key="Story"
                    >
                        Story
                    </a>

                    <a
                        href="#book"
                        class="nemo-desktop-link"
                        data-translation-key="Book a stay"
                    >
                        Book a stay
                    </a>

                </nav>


                <div id="nemo-language">

                    <button
                        id="nemo-language-button"
                        type="button"
                        aria-expanded="false"
                        aria-haspopup="true"
                    >

                        <span
                            id="nemo-language-current"
                        >
                            RU
                        </span>

                        <span
                            id="nemo-language-chevron"
                        >
                           ⌄
                        </span>

                    </button>


                    <div
                        id="nemo-language-menu"
                    >

                        <button
                            type="button"
                            class="nemo-language-option"
                            data-language="ru"
                        >
                            Русский
                        </button>

                        <button
                            type="button"
                            class="nemo-language-option"
                            data-language="uz"
                        >
                            O‘zbekcha
                        </button>

                        <button
                            type="button"
                            class="nemo-language-option"
                            data-language="en"
                        >
                            English
                        </button>

                    </div>

                </div>

            </div>
        `;


        document.body.appendChild(header);


        /* =================================================
           MOBILE MENU
           ================================================= */


        const mobileMenu =
            document.createElement("div");


        mobileMenu.id =
            "nemo-mobile-menu";


        mobileMenu.innerHTML = `

            <div class="nemo-mobile-menu-inner">

                <div
                    class="nemo-mobile-eyebrow"
                >
                    Nemo Guest House · Bukhara
                </div>


                <a
                    href="#rooms"
                    class="nemo-mobile-link"
                    data-translation-key="Stay"
                >
                    Stay
                </a>


                <a
                    href="#story-1"
                    class="nemo-mobile-link"
                    data-translation-key="Story"
                >
                    Story
                </a>


                <a
                    href="#book"
                    class="nemo-mobile-link"
                    data-translation-key="Book a stay"
                >
                    Book a stay
                </a>


                <div
                    class="nemo-mobile-footer"
                >
                    Old Bukhara · Uzbekistan
                </div>

            </div>
        `;


        document.body.appendChild(
            mobileMenu
        );


        /* =================================================
           EVENTS
           ================================================= */


        const mobileButton =
            document.querySelector(
                "#nemo-mobile-menu-button"
            );


        function setMobileMenu(open) {

            document.body.classList.toggle(
                "nemo-menu-open",
                open
            );


            mobileMenu.classList.toggle(
                "open",
                open
            );


            mobileButton.setAttribute(
                "aria-expanded",
                String(open)
            );


            mobileButton.setAttribute(
                "aria-label",
                open
                    ? "Close menu"
                    : "Open menu"
            );
        }


        mobileButton.addEventListener(
            "click",
            () => {

                const open =
                    !mobileMenu.classList.contains(
                        "open"
                    );

                setMobileMenu(open);
            }
        );


        /* desktop nav */

        document
            .querySelectorAll(
                ".nemo-desktop-link"
            )
            .forEach(link => {

                link.addEventListener(
                    "click",
                    event => {

                        event.preventDefault();

                        const target =
                            link.getAttribute(
                                "href"
                            );

                        scrollToTarget(
                            target
                        );
                    }
                );
            });


        /* mobile nav */

        document
            .querySelectorAll(
                ".nemo-mobile-link"
            )
            .forEach(link => {

                link.addEventListener(
                    "click",
                    event => {

                        event.preventDefault();


                        const target =
                            link.getAttribute(
                                "href"
                            );


                        setMobileMenu(false);


                        setTimeout(
                            () => {

                                scrollToTarget(
                                    target
                                );

                            },
                            350
                        );
                    }
                );
            });


        /* logo */

        document
            .querySelector(
                "#nemo-logo"
            )
            .addEventListener(
                "click",
                event => {

                    event.preventDefault();

                    window.scrollTo({

                        top: 0,

                        behavior: "smooth"
                    });
                }
            );


        /* language button */

        const language =
            document.querySelector(
                "#nemo-language"
            );


        const languageButton =
            document.querySelector(
                "#nemo-language-button"
            );


        languageButton.addEventListener(
            "click",
            event => {

                event.stopPropagation();


                const open =
                    !language.classList.contains(
                        "open"
                    );


                language.classList.toggle(
                    "open",
                    open
                );


                languageButton.setAttribute(
                    "aria-expanded",
                    String(open)
                );
            }
        );


        document
            .querySelectorAll(
                ".nemo-language-option"
            )
            .forEach(button => {

                button.addEventListener(
                    "click",
                    () => {

                        const languageCode =
                            button.dataset.language;


                        applyLanguage(
                            languageCode
                        );


                        language.classList.remove(
                            "open"
                        );


                        languageButton.setAttribute(
                            "aria-expanded",
                            "false"
                        );
                    }
                );
            });


        /* close dropdown */

        document.addEventListener(
            "click",
            event => {

                if (
                    !language.contains(
                        event.target
                    )
                ) {

                    language.classList.remove(
                        "open"
                    );


                    languageButton.setAttribute(
                        "aria-expanded",
                        "false"
                    );
                }
            }
        );


        /* close mobile menu with ESC */

        document.addEventListener(
            "keydown",
            event => {

                if (
                    event.key === "Escape"
                ) {

                    setMobileMenu(false);

                    language.classList.remove(
                        "open"
                    );
                }
            }
        );


        /* close mobile menu after resize */

        window.addEventListener(
            "resize",
            () => {

                if (
                    window.innerWidth > 809
                ) {

                    setMobileMenu(false);
                }
            }
        );
    }


    /* =====================================================
       SCROLL STATE
       ===================================================== */

    function initScrollState() {

        function update() {

            document.body.classList.toggle(
                "nemo-scrolled",
                window.scrollY > 35
            );
        }


        update();


        window.addEventListener(
            "scroll",
            update,
            {
                passive: true
            }
        );
    }


    /* =====================================================
       REVEAL ANIMATIONS
       ===================================================== */

    function initRevealAnimations() {

        if (
            !("IntersectionObserver" in window)
        ) {
            return;
        }


        const selectors = [

            '[data-framer-name="Why Stay"]',

            '[data-framer-name="Rooms"]',

            '[data-framer-name="Our Story"]',

            '[data-framer-name="Nearby"]',

            '[data-framer-name="Book Your Stay"]',

            '[data-framer-name="Guest Notes"]'
        ];


        const elements =
            document.querySelectorAll(
                selectors.join(",")
            );


        if (!elements.length) {
            return;
        }


        elements.forEach(
            element => {

                element.classList.add(
                    "nemo-reveal"
                );
            }
        );


        const observer =
            new IntersectionObserver(
                entries => {

                    entries.forEach(
                        entry => {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.classList.add(
                                    "nemo-visible"
                                );


                                observer.unobserve(
                                    entry.target
                                );
                            }
                        }
                    );
                },
                {
                    threshold: .12,

                    rootMargin:
                        "0px 0px -45px 0px"
                }
            );


        elements.forEach(
            element => {

                observer.observe(
                    element
                );
            }
        );
    }


    /* =====================================================
   ROOM PHOTO GALLERIES + LIGHTBOX
   ===================================================== */

const roomGalleries = {
    standard: [
        "images/st-1.jpg",
        "images/st-5.jpg",
        "images/st-3.jpg",
        "images/st-4.jpg",
        "images/st-6.jpg",
        "images/st-2.jpg",
    ],
    apartment: [
        "images/ap-5.jpg",
        "images/ap-2.jpg",
        "images/ap-3.jpg",
        "images/ap-1.jpg",
        "images/ap-4.jpg",
        "images/ap-6.jpg",
    ],
    family: [
        "images/fa-4.jpg",
        "images/fa-1.jpg",
        "images/fa-3.jpg",
        "images/fa-5.jpg",
        "images/fa-6.jpg",
        "images/fa-2.jpg",
        "images/fa-7.jpg",
    ]
};

const roomIndex = { standard: 0, apartment: 0, family: 0 };

const roomSelectors = {
    standard: ".framer-ftj993-container [data-framer-name='Room Image'] img",
    apartment: '[data-framer-name="Apartment"] [data-framer-name="Room Image"] img',
    family: '[data-framer-name="Family Apartment"] [data-framer-name="Room Image"] img'
};

const roomFallbackSelectors = {
    standard: ".framer-ftj993-container img",
    apartment: '[data-framer-name="Apartment"] img',
    family: '[data-framer-name="Family Apartment"] img'
};

function getRoomImg(key) {
    return document.querySelector(roomSelectors[key]) ||
           document.querySelector(roomFallbackSelectors[key]);
}

let lightboxKey = null;
let lightboxEl = null;

/* ---- ставим нужную фотку ---- */

function setRoomPhoto(key, index, updateLightbox) {
    const photos = roomGalleries[key];
    if (!photos || !photos.length) return;

    const wrapped = ((index % photos.length) + photos.length) % photos.length;
    roomIndex[key] = wrapped;

    const img = getRoomImg(key);
    if (img) {
        // сбрасываем framer-овские srcset/sizes, ставим свой src
        img.removeAttribute("srcset");
        img.removeAttribute("sizes");
        if (img.getAttribute("src") !== photos[wrapped]) {
            img.setAttribute("src", photos[wrapped]);
        }
    }

    if (updateLightbox && lightboxKey === key) {
        renderLightbox();
    }
}

/* ---- навешиваем стрелки/подсказку/клик ---- */

function initRoomCarousels() {
    Object.keys(roomSelectors).forEach(key => {
        const img = getRoomImg(key);
        if (!img) return;

        const wrapper =
            img.closest('[data-framer-name="Room Image"]') ||
            img.parentElement;

        wrapper.classList.add("nemo-room-photo");

        // страхуемся от повторного добавления
        if (!wrapper.dataset.nemoCarouselReady) {
            wrapper.dataset.nemoCarouselReady = "1";

            // подсказка при hover
            if (!wrapper.querySelector(".nemo-room-hint")) {
                const hint = document.createElement("div");
                hint.className = "nemo-room-hint";
                hint.innerHTML = `
                    <span class="nemo-room-hint-icon">⤢</span>
                    <span class="nemo-room-hint-text">View photos</span>
                `;
                wrapper.appendChild(hint);
            }

            // стрелки
            const prev = document.createElement("button");
            prev.type = "button";
            prev.className = "nemo-room-arrow nemo-room-prev";
            prev.setAttribute("aria-label", "Previous photo");
            prev.innerHTML = "‹";

            const next = document.createElement("button");
            next.type = "button";
            next.className = "nemo-room-arrow nemo-room-next";
            next.setAttribute("aria-label", "Next photo");
            next.innerHTML = "›";

            wrapper.appendChild(prev);
            wrapper.appendChild(next);

            prev.addEventListener("click", event => {
                event.preventDefault();
                event.stopPropagation();
                setRoomPhoto(key, roomIndex[key] - 1, false);
            });

            next.addEventListener("click", event => {
                event.preventDefault();
                event.stopPropagation();
                setRoomPhoto(key, roomIndex[key] + 1, false);
            });

            // клик по фото (не по стрелке) — открыть лайтбокс
            wrapper.addEventListener("click", event => {
                if (event.target.closest(".nemo-room-arrow")) return;
                openLightbox(key, roomIndex[key]);
            });
        }

        // всегда синхронизируем актуальный src
        setRoomPhoto(key, roomIndex[key], false);
    });
}

/* ---- переприменение после ре-рендера Framer ---- */

function reapplyRoomPhotos() {
    Object.keys(roomGalleries).forEach(key => {
        const img = getRoomImg(key);
        if (!img) return;
        const expected = roomGalleries[key][roomIndex[key]];
        if (img.getAttribute("src") !== expected) {
            img.removeAttribute("srcset");
            img.removeAttribute("sizes");
            img.setAttribute("src", expected);
        }
    });
}

/* ---- сам лайтбокс ---- */

function createLightbox() {
    if (lightboxEl) return;

    lightboxEl = document.createElement("div");
    lightboxEl.id = "nemo-lightbox";

    lightboxEl.innerHTML = `
        <button type="button" class="nemo-lightbox-close" aria-label="Close">×</button>
        <button type="button" class="nemo-lightbox-arrow nemo-lightbox-prev" aria-label="Previous photo">‹</button>
        <img class="nemo-lightbox-image" alt="">
        <button type="button" class="nemo-lightbox-arrow nemo-lightbox-next" aria-label="Next photo">›</button>
        <div class="nemo-lightbox-counter"></div>
    `;

    document.body.appendChild(lightboxEl);

    lightboxEl.querySelector(".nemo-lightbox-close")
        .addEventListener("click", closeLightbox);

    lightboxEl.querySelector(".nemo-lightbox-prev")
        .addEventListener("click", e => {
            e.stopPropagation();
            if (lightboxKey) setRoomPhoto(lightboxKey, roomIndex[lightboxKey] - 1, true);
        });

    lightboxEl.querySelector(".nemo-lightbox-next")
        .addEventListener("click", e => {
            e.stopPropagation();
            if (lightboxKey) setRoomPhoto(lightboxKey, roomIndex[lightboxKey] + 1, true);
        });

    lightboxEl.addEventListener("click", event => {
        if (event.target === lightboxEl) closeLightbox();
    });

    document.addEventListener("keydown", event => {
        if (!lightboxEl.classList.contains("open")) return;
        if (event.key === "Escape") closeLightbox();
        if (event.key === "ArrowLeft"  && lightboxKey) setRoomPhoto(lightboxKey, roomIndex[lightboxKey] - 1, true);
        if (event.key === "ArrowRight" && lightboxKey) setRoomPhoto(lightboxKey, roomIndex[lightboxKey] + 1, true);
    });
}

function renderLightbox() {
    if (!lightboxKey) return;
    const photos = roomGalleries[lightboxKey];
    const index  = roomIndex[lightboxKey];

    lightboxEl.querySelector(".nemo-lightbox-image").src = photos[index];
    lightboxEl.querySelector(".nemo-lightbox-counter").textContent =
        (index + 1) + " / " + photos.length;
}

function openLightbox(key, index) {
    createLightbox();
    lightboxKey = key;
    roomIndex[key] = index;
    renderLightbox();
    lightboxEl.classList.add("open");
    document.body.classList.add("nemo-lightbox-open");
}

function closeLightbox() {
    if (!lightboxEl) return;
    lightboxEl.classList.remove("open");
    document.body.classList.remove("nemo-lightbox-open");
    lightboxKey = null;
}


/* =====================================================
   CUSTOM DOM OVERRIDES
   Переприменяет наши правки после гидрации Framer:
   WhatsApp / Telegram links + Instagram icon in footer
   ===================================================== */

function applyCustomDomOverrides() {

    /* --- WhatsApp --- */
    document
        .querySelectorAll('[data-framer-name="WhatsApp Booking"]')
        .forEach(el => {
            const want = "https://wa.me/998907188585";
            if (el.getAttribute("href") !== want) {
                el.setAttribute("href", want);
                el.setAttribute("target", "_blank");
                el.setAttribute("rel", "noopener");
            }
        });

    /* --- Telegram --- */
    document
        .querySelectorAll('[data-framer-name="Telegram Booking"]')
        .forEach(el => {
            const want = "https://t.me/nemo_guesthouse";
            if (el.getAttribute("href") !== want) {
                el.setAttribute("href", want);
                el.setAttribute("target", "_blank");
                el.setAttribute("rel", "noopener");
            }
        });

    /* --- Instagram в футере --- */
    const footer =
        document.querySelector('[data-framer-name="Nemo Footer"]');

    if (footer && !footer.querySelector(".nemo-instagram")) {

        const title =
            footer.querySelector(".framer-51n73u") ||
            footer.firstElementChild;

        if (title) {

            /* оборачиваем название в бренд-обёртку, если её нет */
            let brand = title.parentElement;

            if (!brand.classList.contains("nemo-footer-brand")) {
                const wrapper = document.createElement("div");
                wrapper.className = "nemo-footer-brand";

                title.parentNode.insertBefore(wrapper, title);
                wrapper.appendChild(title);

                brand = wrapper;
            }

            /* добавляем иконку */
            const ig = document.createElement("a");
            ig.href = "https://www.instagram.com/nemo_guest_house";
            ig.className = "nemo-instagram";
            ig.target = "_blank";
            ig.rel = "noopener";
            ig.setAttribute("aria-label", "Instagram");
            ig.innerHTML =
                '<svg viewBox="0 0 24 24" fill="none" ' +
                'stroke="currentColor" stroke-width="1.6" ' +
                'stroke-linecap="round" stroke-linejoin="round" ' +
                'width="16" height="16" aria-hidden="true">' +
                '<rect x="3" y="3" width="18" height="18" rx="5" ry="5"/>' +
                '<circle cx="12" cy="12" r="4"/>' +
                '<circle cx="17.4" cy="6.6" r="0.9" fill="currentColor" stroke="none"/>' +
                '</svg>';

            brand.appendChild(ig);
        }
    }
}


    /* =====================================================
       WATCH FRAMER HYDRATION
       ===================================================== */

    function observeHydration() {
    const root = document.querySelector("#main");
    if (!root) return;

    let scheduled = false;

    function runOnce() {
        if (scheduled) return;
        scheduled = true;

        // даём браузеру «успокоиться» перед нашими правками
        requestAnimationFrame(() => {
            scheduled = false;

            applyLanguage(currentLanguage);
            reapplyRoomPhotos();
            initRoomCarousels();
            applyCustomDomOverrides();
            initReviewsCarousel();
        });
    }

    const observer = new MutationObserver(() => {
        // игнорируем мутации, которые вызваны нашими же правками
        if (isApplyingLanguage) return;
        runOnce();
    });

    observer.observe(root, {
        childList: true,
        subtree: true
        // ⚠️ characterData убрано — именно оно вызывало лавину
    });
}


    /* =====================================================
       INITIALIZATION
       ===================================================== */

    let initialized = false;


    function init() {

        if (initialized) {
            return;
        }


        /*
         * Wait until Framer's server HTML exists.
         */

        if (
            !document.querySelector(
                "#main"
            )
        ) {

            requestAnimationFrame(
                init
            );

            return;
        }


        initialized = true;


        /*
         * Create OUR header outside
         * of Framer's DOM.
         */

        createHeader();

        initRoomCarousels();

        applyCustomDomOverrides();

        initReviewsCarousel();
        initReviewsCarousel();

        fixAnchors();

        collectOriginalText();

        initScrollState();

        initRevealAnimations();

        applyLanguage(currentLanguage);

        applyCustomDomOverrides();
        initReviewsCarousel();
        observeHydration();
    }


    /* =====================================================
       START
       ===================================================== */

    if (
        document.readyState === "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            init
        );

    } else {

        init();
    }


    /* =====================================================
   REVIEWS CAROUSEL
   ===================================================== */

const reviewsData = [
    {
        ru: {
            text: "Nemo Guest House в Бухаре — это как попасть в гости к друзьям, у которых есть бассейн, мангал и отличный вкус. Двор-оазис с зеленью, шезлонгами и бассейном после пыльных прогулок по Бухаре — именно то, что нужно. Номер просторный, с кондиционером, чайником и нормальным душем. Завтрак подают во внутреннем дворике — сытный, местный, жена оценила лепёшки и свежий чай. Парковка бесплатная прямо у входа. Лайфхак: берите комнату с окнами во двор — на улицу выходит шумновато. Хозяин говорит по-русски, подскажет где поесть и что посмотреть.",
            author: "— Евгений Тео"
        },
        uz: {
            text: "Buxorodagi Nemo Guest House — hovuz, mangal va ajoyib didga ega do'stlaringiznikiga mehmonga borgandek. Buxoro bo'ylab sayr qilgandan keyin ko'katlar, shezlonglar va hovuz bilan oazis hovli — aynan kerak narsa. Xona keng, konditsioner, choynak va yaxshi dush bilan. Nonushta ichki hovlida beriladi — to'ydiradigan, mahalliy, xotinim non va yangi choyni qadrladi. Avtoturargoh bepul, kiraverishda. Layfxak: hovliga qaraydigan xonani oling — ko'chaga shovqinli. Xo'jayin rus tilida gapiradi, qayerda ovqatlanish va nima ko'rishni aytib beradi.",
            author: "— Evgeniy Teo"
        },
        en: {
            text: "Nemo Guest House in Bukhara is like visiting friends who have a pool, a grill, and great taste. A courtyard-oasis with greenery, sun loungers and a pool after dusty walks around Bukhara — exactly what you need. The room is spacious, with air conditioning, a kettle and a proper shower. Breakfast is served in the inner courtyard — hearty, local, my wife appreciated the flatbread and fresh tea. Free parking right at the entrance. Life hack: take a room with windows facing the courtyard — the street side is a bit noisy. The host speaks Russian, will tell you where to eat and what to see.",
            author: "— Evgeny Teo"
        }
    },
    {
        ru: {
            text: "Очень классный гостевой дом! Вежливые, гостеприимные и отзывчивые хозяева. Есть круглосуточный мини-бар с прохладительными напитками. Завтраки большие и вкусные, плов обалденный! Нодир всегда подсказывал где вкусно покушать, где и какие сувениры купить, какие достопримечательности посмотреть за городом. Рекомендуем!",
            author: "— Владимир Елизаров"
        },
        uz: {
            text: "Juda zo'r mehmon uyi! Muloyim, mehmondo'st va g'amxo'r xo'jayinlar. Kechayu kunduz salqin ichimliklar bilan mini-bar mavjud. Nonushtalar katta va mazali, palov ajoyib! Nodir har doim qayerda mazali ovqatlanish, qanday suvenirlar sotib olish, shahar tashqarisida qanday diqqatga sazovor joylarni ko'rishni aytib berardi. Tavsiya qilamiz!",
            author: "— Vladimir Yelizarov"
        },
        en: {
            text: "A very cool guest house! Polite, hospitable and responsive hosts. There's a 24-hour mini bar with refreshing drinks. Breakfasts are big and tasty, the pilaf is amazing! Nodir always suggested where to eat well, where and what souvenirs to buy, what sights to see outside the city. We recommend!",
            author: "— Vladimir Elizarov"
        }
    },
    {
        ru: {
            text: "Рекомендую гостевой дом к посещению. Очень гостеприимные и очень внимательные хозяева, вкусная еда, чистые номера и тишина улицы. И особенно отмечу — в 10 минутах все достопримечательности Бухары!",
            author: "— Наталья Акименко"
        },
        uz: {
            text: "Mehmon uyini tashrif buyurishni tavsiya qilaman. Juda mehmondo'st va g'amxo'r xo'jayinlar, mazali taom, toza xonalar va ko'cha tinchligi. Va ayniqsa ta'kidlayman — 10 daqiqada Buxoroning barcha diqqatga sazovor joylari!",
            author: "— Natalya Akimenko"
        },
        en: {
            text: "I recommend this guest house for a visit. Very hospitable and very attentive hosts, delicious food, clean rooms and quiet street. And I especially note — in 10 minutes, all the sights of Bukhara!",
            author: "— Natalya Akimenko"
        }
    }
];

let reviewsIndex = 0;

function initReviewsCarousel() {

    const container = document.querySelector(
    '.framer-43g82y[data-framer-name="Guest Quote"]'
);

if (!container) return;

/* если наша карусель уже есть — ничего не делаем */
if (container.querySelector(".nemo-reviews")) return;

    // скрываем оригинальный одиночный отзыв
    Array.from(container.children).forEach(child => {
        if (!child.classList.contains("nemo-reviews")) {
            child.style.display = "none";
        }
    });

    const carousel = document.createElement("div");
    carousel.className = "nemo-reviews";

    carousel.innerHTML = `
        <div class="nemo-reviews-viewport">
            <div class="nemo-reviews-track"></div>
        </div>
        <div class="nemo-reviews-controls">
            <button type="button" class="nemo-reviews-arrow nemo-reviews-prev" aria-label="Previous review">‹</button>
            <span class="nemo-reviews-counter"></span>
            <button type="button" class="nemo-reviews-arrow nemo-reviews-next" aria-label="Next review">›</button>
        </div>
    `;

    container.appendChild(carousel);

    const track    = carousel.querySelector(".nemo-reviews-track");
    const counter  = carousel.querySelector(".nemo-reviews-counter");
    const prevBtn  = carousel.querySelector(".nemo-reviews-prev");
    const nextBtn  = carousel.querySelector(".nemo-reviews-next");

    reviewsData.forEach(() => {
        const slide = document.createElement("div");
        slide.className = "nemo-review";
        slide.innerHTML = `
            <p class="nemo-review-text"></p>
            <p class="nemo-review-author"></p>
        `;
        track.appendChild(slide);
    });

        function render() {
        const lang =
            document.documentElement.lang || "ru";

        const slides =
            track.querySelectorAll(".nemo-review");

        slides.forEach((slide, i) => {
            const data =
                reviewsData[i][lang] ||
                reviewsData[i].ru;

            slide.querySelector(".nemo-review-text").textContent =
                "“" + data.text + "”";

            slide.querySelector(".nemo-review-author").textContent =
                data.author;

            /* Показываем только активный слайд — он задаёт высоту */
            slide.classList.toggle(
                "active",
                i === reviewsIndex
            );
        });

        counter.textContent =
            (reviewsIndex + 1) + " / " + reviewsData.length;
    }

    function go(delta) {
        reviewsIndex =
            (reviewsIndex + delta + reviewsData.length) %
            reviewsData.length;
        render();
    }

    prevBtn.addEventListener("click", () => go(-1));
    nextBtn.addEventListener("click", () => go(1));

    document.addEventListener(
        "nemo:language-changed",
        render
    );

    render();
}
})();