/**
 * ==========================================================================
 * SCRIPT.JS — Portfolio Khalil Al-khairy
 * Features: Scroll-Spy, Smooth Scroll, Dark Mode, Multi-Language, Skill Bars, Contact Form
 * ==========================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
    initDarkMode();
    initLanguage();
    initScrollSpy();
    initSmoothScroll();
    initHamburgerMenu();
    initSkillBarObserver();
    initContactForm();
});

/* ==========================================================================
   DARK MODE
   ========================================================================== */
function initDarkMode() {
    const toggle = document.getElementById("theme-toggle");
    const html   = document.documentElement;

    // Load saved preference
    const saved = localStorage.getItem("theme") || "light";
    html.setAttribute("data-theme", saved);

    toggle.addEventListener("click", () => {
        const current = html.getAttribute("data-theme");
        const next    = current === "dark" ? "light" : "dark";
        html.setAttribute("data-theme", next);
        localStorage.setItem("theme", next);
    });
}

/* ==========================================================================
   MULTI-LANGUAGE (ID / EN / AR)
   ========================================================================== */
const translations = {
    id: {
        nav_about:        "About Me",
        nav_experience:   "Experience",
        nav_skills:       "Skills",
        nav_education:    "Education",
        nav_certificates: "Certificates",
        nav_work:         "Work",
        nav_contact:      "Contact",
        nav_status:       "Open to Work",
        about_subtext:    "Membangun pengalaman digital yang bersih, fungsional, dan penuh tujuan. Mahasiswa Informatika sekaligus pendidik yang percaya bahwa teknologi dan nilai-nilai baik bisa berjalan beriringan.",
        about_cv:         "📄 Lihat & Download CV",
        intro_heading:    "Introduction",
        intro_title:      "Frontend Developer & Graphic Designer based in Bogor",
        intro_p1:         "Halo! Saya <strong>Khalil</strong> — mahasiswa Informatika di Stikom El Rahma Sejahtera, Bogor. Saya memiliki ketertarikan mendalam pada <em>pengembangan web</em>, <em>desain UI/UX</em>, dan <em>desain grafis</em>.",
        intro_p2:         "Di luar dunia digital, saya juga aktif sebagai <em>Pengajar Al-Quran</em> dan Wali Kamar di Pondok Al Ihsan Baron Bogor — sebuah peran yang mengajarkan saya kepemimpinan, empati, dan kedisiplinan tinggi. Saya percaya bahwa karya terbaik lahir dari kombinasi antara keahlian teknis dan nilai-nilai yang kuat.",
        arabic_translation: '"Sebaik-baik manusia adalah yang paling bermanfaat bagi manusia lainnya."',
        exp_title:        "Experience & Organizations",
        exp_badge:        "History",
        exp1_title:       "Member of Sector Ngedit Training",
        exp1_desc:        "Mengintegrasikan keahlian motion graphics dan pengeditan video komprehensif untuk merancang konten visual yang estetis, interaktif, dan relevan dengan tren masa kini.",
        exp2_title:       "Member of Smelt Solunity Public Relations Division",
        exp2_desc:        "Menjalankan fungsi kehumasan dengan membina hubungan baik antar lembaga, menangani layanan informasi publik, serta merancang strategi untuk meningkatkan kesadaran brand organisasi.",
        exp3_title:       "Student Council Religious Division",
        exp3_desc:        "Memimpin divisi kerohanian dalam mengelola kegiatan keislaman, kajian rutin, dan peringatan hari besar agama untuk memperkuat lingkungan sekolah yang religius dan berakhlakul karimah.",
        skills_title:     "Expertise & Hardskills",
        skills_badge:     "Capabilities",
        skills_core_heading:       "Core Expertise",
        skills_core_text:          "Web Programming, UI/UX Architecture, Residential Life Leadership, Social Media Assets / Micro-Content, Visual Design & Photo Editing.",
        skills_proficiency_heading: "Skill Proficiency",
        skill1_name:      "Tech & Coding (HTML, CSS, JS)",
        skill2_name:      "Creative Design (Canva, Figma, Lightroom, Capcut)",
        skill3_name:      "Dormitory Management & Leadership",
        softskills_heading: "Softskills",
        edu_title:        "Education Journey",
        edu1_level:       "Junior High School",
        edu2_level:       "High School",
        edu3_level:       "Informatics Study Program",
        cert_title:       "Sertifikat & Penghargaan",
        cert_badge:       "Awards",
        cert1_title:      "Certificate of Appreciation",
        cert1_desc:       "Penghargaan atas kontribusi aktif dalam kegiatan organisasi dan pengembangan komunitas.",
        cert2_title:      "Sertifikat Apresiasi – Liqo Syawal 2026",
        cert2_desc:       "Apresiasi atas keikutsertaan aktif dalam kegiatan Liqo Syawal 2026.",
        cert3_title:      "Certificate of Appreciation – GDG Bogor",
        cert3_desc:       "Sebagai Peserta (As a Participant) yang diselenggarakan oleh Hery Novai Ramadhan, Google Developer Organizer dari Google Developer Group Bogor.",
        work_title:       "Featured Projects",
        work_badge:       "Portfolio",
        proj1_cat:        "Video Production",
        proj1_title:      "Short-Form Content Editing",
        proj1_desc:       "Pengeditan video vertikal dinamis untuk TikTok/Reels menggunakan CapCut PC. Berfokus pada retensi penonton melalui <i>dynamic captions</i>, <i>cut</i> cepat, dan <i>audio mixing</i>.",
        proj2_cat:        "Visual Identity & Campaign",
        proj2_title:      "Ramadan Seasonal Campaign – Visual Identity & Poster",
        proj2_desc:       "Perancangan visual identity dan materi poster kampanye Ramadan. Menggabungkan elemen estetika islami dengan desain grafis modern untuk menciptakan konten yang berkesan dan relevan.",
        proj3_cat:        "Web Development",
        proj3_title:      "Interactive To-Do List App",
        proj3_desc:       "Aplikasi manajemen tugas yang berhasil di-<i>hosting</i> di GitHub Pages. Dibangun menggunakan manipulasi DOM JavaScript lengkap dengan fitur kalkulasi status tugas dan hapus data.",
        contact_title:    "Get In Touch",
        contact_badge:    "Contact",
        form_name:        "Nama",
        form_email:       "Email",
        form_message:     "Pesan",
        form_name_ph:     "Masukkan nama kamu...",
        form_email_ph:    "Masukkan email kamu...",
        form_message_ph:  "Tulis pesanmu di sini...",
        form_submit:      "Kirim Pesan ✉️",
        form_success:     "Pesan terkirim! Terima kasih 🎉",
        form_error:       "Terjadi kesalahan. Coba lagi.",
        contact_or:       "Atau hubungi langsung:",
        social_wa:        "WhatsApp",
        social_ig:        "Instagram",
        social_gh:        "GitHub",
        social_li:        "LinkedIn",
        img_placeholder:  "Upload foto di sini",
        footer_text:      "Dirancang & Dibangun oleh Khalil Al-Khairy Abdul Hakim",
    },

    en: {
        nav_about:        "About Me",
        nav_experience:   "Experience",
        nav_skills:       "Skills",
        nav_education:    "Education",
        nav_certificates: "Certificates",
        nav_work:         "Work",
        nav_contact:      "Contact",
        nav_status:       "Open to Work",
        about_subtext:    "Building clean, functional, and purposeful digital experiences. An Informatics student and educator who believes that technology and strong values go hand in hand.",
        about_cv:         "📄 View & Download CV",
        intro_heading:    "Introduction",
        intro_title:      "Frontend Developer & Graphic Designer based in Bogor",
        intro_p1:         "Hello! I'm <strong>Khalil</strong> — an Informatics student at Stikom El Rahma, Bogor. I have a deep interest in <em>web development</em>, <em>UI/UX design</em>, and <em>graphic design</em>.",
        intro_p2:         "Outside the digital world, I'm also active as a <em>Qur'an Teacher</em> and Dormitory Supervisor at Pondok Al Ihsan Baron Bogor — roles that have taught me leadership, empathy, and discipline. I believe the best work comes from combining technical skills with strong values.",
        arabic_translation: '"The best of people are those who bring the most benefit to others."',
        exp_title:        "Experience & Organizations",
        exp_badge:        "History",
        exp1_title:       "Member of Sector Ngedit Training",
        exp1_desc:        "Integrating motion graphics skills and comprehensive video editing to design visual content that is aesthetic, interactive, and relevant to current trends.",
        exp2_title:       "Member of Smelt Solunity Public Relations Division",
        exp2_desc:        "Carrying out public relations functions by fostering good inter-institutional relations, handling public information services, and designing strategies to increase organizational brand awareness.",
        exp3_title:       "Student Council Religious Division",
        exp3_desc:        "Leading the religious division in managing Islamic activities, regular studies, and religious holiday celebrations to strengthen a morally sound school environment.",
        skills_title:     "Expertise & Hardskills",
        skills_badge:     "Capabilities",
        skills_core_heading:       "Core Expertise",
        skills_core_text:          "Web Programming, UI/UX Architecture, Residential Life Leadership, Social Media Assets / Micro-Content, Visual Design & Photo Editing.",
        skills_proficiency_heading: "Skill Proficiency",
        skill1_name:      "Tech & Coding (HTML, CSS, JS)",
        skill2_name:      "Creative Design (Canva, Figma, Lightroom, CapCut)",
        skill3_name:      "Dormitory Management & Leadership",
        softskills_heading: "Softskills",
        edu_title:        "Education Journey",
        edu1_level:       "Junior High School",
        edu2_level:       "High School",
        edu3_level:       "Informatics Study Program",
        cert_title:       "Certificates & Awards",
        cert_badge:       "Awards",
        cert1_title:      "Certificate of Appreciation",
        cert1_desc:       "Recognition for active contributions to organizational activities and community development.",
        cert2_title:      "Appreciation Certificate – Liqo Syawal 2026",
        cert2_desc:       "Recognition for active participation in the Liqo Syawal 2026 event.",
        cert3_title:      "Certificate of Appreciation – GDG Bogor",
        cert3_desc:       "As a Participant in an event organized by Hery Novai Ramadhan, Google Developer Organizer from Google Developer Group Bogor.",
        work_title:       "Featured Projects",
        work_badge:       "Portfolio",
        proj1_cat:        "Video Production",
        proj1_title:      "Short-Form Content Editing",
        proj1_desc:       "Dynamic vertical video editing for TikTok/Reels using CapCut PC. Focused on audience retention through <i>dynamic captions</i>, fast <i>cuts</i>, and <i>audio mixing</i>.",
        proj2_cat:        "Visual Identity & Campaign",
        proj2_title:      "Ramadan Seasonal Campaign – Visual Identity & Poster",
        proj2_desc:       "Designing visual identity and poster materials for a Ramadan campaign. Combining Islamic aesthetic elements with modern graphic design to create impactful and relevant content.",
        proj3_cat:        "Web Development",
        proj3_title:      "Interactive To-Do List App",
        proj3_desc:       "A task management app hosted on GitHub Pages, built using JavaScript DOM manipulation with task status calculation and data deletion features.",
        contact_title:    "Get In Touch",
        contact_badge:    "Contact",
        form_name:        "Name",
        form_email:       "Email",
        form_message:     "Message",
        form_name_ph:     "Enter your name...",
        form_email_ph:    "Enter your email...",
        form_message_ph:  "Write your message here...",
        form_submit:      "Send Message ✉️",
        form_success:     "Message sent! Thank you 🎉",
        form_error:       "Something went wrong. Please try again.",
        contact_or:       "Or reach me directly:",
        social_wa:        "WhatsApp",
        social_ig:        "Instagram",
        social_gh:        "GitHub",
        social_li:        "LinkedIn",
        img_placeholder:  "Upload photo here",
        footer_text:      "Designed & Built by Khalil Al-Khairy Abdul Hakim",
    },

    ar: {
        nav_about:        "عني",
        nav_experience:   "الخبرة",
        nav_skills:       "المهارات",
        nav_education:    "التعليم",
        nav_certificates: "الشهادات",
        nav_work:         "الأعمال",
        nav_contact:      "تواصل",
        nav_status:       "متاح للعمل",
        about_subtext:    "أبني تجارب رقمية نظيفة وعملية وهادفة. طالب في تقنية المعلومات ومعلم يؤمن بأن التكنولوجيا والقيم الحسنة يسيران جنبًا إلى جنب.",
        about_cv:         "📄 عرض وتحميل السيرة الذاتية",
        intro_heading:    "مقدمة",
        intro_title:      "مطور واجهات ومصمم جرافيك في بوغور",
        intro_p1:         "مرحباً! أنا <strong>خليل</strong> — طالب في تخصص المعلوماتية بجامعة ستيكوم الرحمة، بوغور. لديّ اهتمام عميق بـ<em>تطوير الويب</em> و<em>تصميم واجهات المستخدم</em> و<em>التصميم الجرافيكي</em>.",
        intro_p2:         "خارج العالم الرقمي، أعمل أيضاً كـ<em>معلم قرآن</em> ومشرف سكن في معهد الإحسان بارون بوغور — أدوار علّمتني القيادة والتعاطف والانضباط. أؤمن بأن أفضل الأعمال تنشأ من الجمع بين المهارة التقنية والقيم الراسخة.",
        arabic_translation: '"خَيْرُ النَّاسِ أَنْفَعُهُمْ لِلنَّاسِ"',
        exp_title:        "الخبرة والمنظمات",
        exp_badge:        "السجل",
        exp1_title:       "عضو في تدريب Sector Ngedit",
        exp1_desc:        "دمج مهارات الرسوم المتحركة وتحرير الفيديو لتصميم محتوى بصري جمالي وتفاعلي يتوافق مع اتجاهات العصر.",
        exp2_title:       "عضو في قسم العلاقات العامة بـ Smelt Solunity",
        exp2_desc:        "تنفيذ وظائف العلاقات العامة من خلال بناء علاقات جيدة بين المؤسسات وتقديم خدمات المعلومات العامة وتصميم استراتيجيات لتعزيز الوعي بالعلامة التجارية.",
        exp3_title:       "قسم الشؤون الدينية في مجلس الطلاب",
        exp3_desc:        "قيادة القسم الديني لإدارة الأنشطة الإسلامية والدراسات المنتظمة واحتفالات الأعياد الدينية لتعزيز بيئة مدرسية دينية وأخلاقية.",
        skills_title:     "الخبرات والمهارات",
        skills_badge:     "القدرات",
        skills_core_heading:       "الخبرات الأساسية",
        skills_core_text:          "برمجة الويب، هندسة UI/UX، إدارة السكن، أصول وسائل التواصل الاجتماعي، التصميم البصري وتحرير الصور.",
        skills_proficiency_heading: "مستوى المهارات",
        skill1_name:      "التقنية والبرمجة (HTML, CSS, JS)",
        skill2_name:      "التصميم الإبداعي (Canva, Figma, Lightroom, CapCut)",
        skill3_name:      "إدارة السكن والقيادة",
        softskills_heading: "المهارات الشخصية",
        edu_title:        "المسيرة التعليمية",
        edu1_level:       "المرحلة الإعدادية",
        edu2_level:       "المرحلة الثانوية",
        edu3_level:       "برنامج دراسات المعلوماتية",
        cert_title:       "الشهادات والجوائز",
        cert_badge:       "الجوائز",
        cert1_title:      "شهادة تقدير",
        cert1_desc:       "تقدير على المساهمة الفعّالة في الأنشطة التنظيمية وتطوير المجتمع.",
        cert2_title:      "شهادة تقدير – لقاء شوال 2026",
        cert2_desc:       "تقدير على المشاركة الفعّالة في فعاليات لقاء شوال 2026.",
        cert3_title:      "شهادة تقدير – GDG Bogor",
        cert3_desc:       "كمشارك في فعالية نظّمها Hery Novai Ramadhan، منظّم Google Developer من مجموعة Google Developer Group Bogor.",
        work_title:       "المشاريع المميزة",
        work_badge:       "المحفظة",
        proj1_cat:        "إنتاج الفيديو",
        proj1_title:      "تحرير المحتوى القصير",
        proj1_desc:       "تحرير فيديوهات عمودية ديناميكية لـTikTok/Reels باستخدام CapCut. التركيز على الاحتفاظ بالمشاهدين من خلال التسميات الديناميكية والقطع السريع ومزج الصوت.",
        proj2_cat:        "الهوية البصرية والحملات",
        proj2_title:      "حملة رمضان الموسمية – الهوية البصرية والملصق",
        proj2_desc:       "تصميم الهوية البصرية ومواد الملصق لحملة رمضان. الجمع بين عناصر الجماليات الإسلامية والتصميم الجرافيكي الحديث لإنشاء محتوى مؤثر وذي صلة.",
        proj3_cat:        "تطوير الويب",
        proj3_title:      "تطبيق قائمة المهام التفاعلي",
        proj3_desc:       "تطبيق لإدارة المهام مستضاف على GitHub Pages. مبني باستخدام JavaScript مع ميزات حساب حالة المهام وحذف البيانات.",
        contact_title:    "تواصل معي",
        contact_badge:    "التواصل",
        form_name:        "الاسم",
        form_email:       "البريد الإلكتروني",
        form_message:     "الرسالة",
        form_name_ph:     "أدخل اسمك...",
        form_email_ph:    "أدخل بريدك الإلكتروني...",
        form_message_ph:  "اكتب رسالتك هنا...",
        form_submit:      "إرسال الرسالة ✉️",
        form_success:     "تم إرسال الرسالة! شكراً 🎉",
        form_error:       "حدث خطأ. يرجى المحاولة مرة أخرى.",
        contact_or:       "أو تواصل مباشرة:",
        social_wa:        "واتساب",
        social_ig:        "إنستغرام",
        social_gh:        "GitHub",
        social_li:        "LinkedIn",
        img_placeholder:  "ارفع صورة هنا",
        footer_text:      "صمّمه وبناه خليل الخيري عبد الحكيم",
    }
};

let currentLang = "id";

function initLanguage() {
    const saved = localStorage.getItem("language") || "id";
    applyLanguage(saved);

    document.querySelectorAll(".lang-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const lang = btn.getAttribute("data-lang");
            applyLanguage(lang);
            localStorage.setItem("language", lang);
        });
    });
}

function applyLanguage(lang) {
    currentLang = lang;
    const t = translations[lang];
    if (!t) return;

    // Update active button
    document.querySelectorAll(".lang-btn").forEach(btn => {
        btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
    });

    // Update all elements with data-i18n
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (t[key] !== undefined) {
            el.innerHTML = t[key];
        }
    });

    // Update placeholder attributes
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
        const key = el.getAttribute("data-i18n-placeholder");
        if (t[key] !== undefined) {
            el.setAttribute("placeholder", t[key]);
        }
    });

    // RTL for Arabic
    const html = document.documentElement;
    if (lang === "ar") {
        html.setAttribute("dir", "rtl");
        html.setAttribute("lang", "ar");
    } else {
        html.setAttribute("dir", "ltr");
        html.setAttribute("lang", lang);
    }
}

/* ==========================================================================
   SCROLL SPY — Highlights active nav item based on scroll position
   ========================================================================== */
function initScrollSpy() {
    const sections = document.querySelectorAll(".portfolio-section[id]");
    const navItems = document.querySelectorAll(".nav-item[data-target]");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute("id");
                navItems.forEach(item => {
                    item.classList.toggle("active", item.getAttribute("data-target") === id);
                });
            }
        });
    }, {
        rootMargin: "-30% 0px -60% 0px",  // triggers when section is in middle of viewport
        threshold: 0
    });

    sections.forEach(section => observer.observe(section));
}

/* ==========================================================================
   SMOOTH SCROLL — Handles nav link clicks
   ========================================================================== */
function initSmoothScroll() {
    document.querySelectorAll(".nav-item[href^='#']").forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const target   = document.getElementById(targetId);
            if (target) {
                target.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    });
}

/* ==========================================================================
   HAMBURGER MENU
   ========================================================================== */
function initHamburgerMenu() {
    const hamburger = document.getElementById("hamburger-menu");
    const navMenu   = document.getElementById("nav-menu");

    if (!hamburger || !navMenu) return;

    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("open");
    });

    // Close on nav item click
    navMenu.querySelectorAll(".nav-item").forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("open");
        });
    });
}

/* ==========================================================================
   SKILL BARS — Animate when section scrolls into view
   ========================================================================== */
function initSkillBarObserver() {
    const skillsSection = document.getElementById("skills");
    if (!skillsSection) return;

    let animated = false;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animated) {
                animated = true;
                triggerSkillBars();
            }
        });
    }, { threshold: 0.3 });

    observer.observe(skillsSection);
}

function triggerSkillBars() {
    const fills = document.querySelectorAll(".progress-bar-fill");

    // Reset first for animation effect
    fills.forEach(fill => { fill.style.width = "0%"; });

    setTimeout(() => {
        fills.forEach(fill => {
            fill.style.width = fill.getAttribute("data-progress");
        });
    }, 150);
}

/* ==========================================================================
   CONTACT FORM — Formspree AJAX submission
   ========================================================================== */
function initContactForm() {
    const form    = document.getElementById("contact-form");
    const success = document.getElementById("form-success");
    const error   = document.getElementById("form-error");
    const btn     = document.getElementById("btn-submit");

    if (!form) return;

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        // Hide previous messages
        success.style.display = "none";
        error.style.display   = "none";

        // Disable button while sending
        btn.disabled     = true;
        btn.textContent  = "Mengirim...";

        try {
            const response = await fetch(form.action, {
                method:  "POST",
                body:    new FormData(form),
                headers: { "Accept": "application/json" }
            });

            if (response.ok) {
                form.reset();
                success.style.display = "block";
                btn.textContent = translations[currentLang]?.form_submit || "Kirim Pesan ✉️";
            } else {
                const data = await response.json();
                if (data.errors) {
                    error.style.display = "block";
                }
                btn.textContent = translations[currentLang]?.form_submit || "Kirim Pesan ✉️";
            }
        } catch (err) {
            error.style.display = "block";
            btn.textContent = translations[currentLang]?.form_submit || "Kirim Pesan ✉️";
        } finally {
            btn.disabled = false;
        }
    });
}