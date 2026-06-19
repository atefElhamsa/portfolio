import React, { createContext, useContext, useState, useEffect } from "react";

const translations = {
  en: {
    // Navbar
    navHome: "Home",
    navAbout: "About me",
    navSkills: "Skills",
    navProjects: "Projects",
    navContact: "Contact me",
    navTitle: "Navigation",

    // Floating Action WhatsApp
    chatWithMe: "Chat with Me",

    // Hero
    availableOpportunities: "Available for Opportunities",
    im: "I'm",
    name: "Atef Elhamsa",
    typewriterFlutterDev: "A Flutter Developer",
    typewriterInstructor: "Flutter Instructor",
    typewriterUIUX: "UI/UX Designer",
    typewriterMobileSpec: "Mobile Specialist",
    heroDesc: "Crafting high-performance, beautiful cross-platform mobile experiences with Flutter, Dart, and state-of-the-art UI architectures.",
    techStack: "Tech Stack:",
    completedProjects: "Completed Projects",
    certifiedSpecialist: "Certified Specialist",
    activeInstructor: "Flutter Instructor",
    active: "Active",
    viewCv: "View CV",
    contactMe: "Contact Me",
    scrollDown: "Scroll Down",

    // Aboutme
    aboutTitle: "About Me",
    aboutRole: "Flutter Developer & Instructor",
    aboutDesc: "Passionate Flutter Developer skilled in Dart, Flutter, and cross-platform mobile development. I specialize in building responsive, user-friendly mobile applications with clean, efficient code and modern UI designs. With experience in state management solutions like Provider, Riverpod, and Bloc, as well as Firebase and RESTful APIs, I focus on delivering seamless performance and engaging user experiences. Continuously learning and exploring new technologies, I strive to create innovative, high-quality mobile applications.",
    expEducation: "Experience & Education",
    myTechStack: "My Tech Stack",
    techStackDesc: "A specialized toolkit focused on creating ultra-performance, pixel-perfect mobile applications and fast-loading web interfaces.",

    // Timeline
    timelineItiDate: "July 2025 – August 2025",
    timelineNtiDate: "May 2025 – July 2025",
    timelineCoreDate: "June 2025 – October 2025",
    itiCamp: "Intensive Code Camp – Summer Internship",
    ntiCamp: "Intensive Code Camp – Internship",
    itiInst: "Information Technology Institute (ITI)",
    ntiInst: "National Telecommunication Institute (NTI)",
    tantaBranch: "Tanta Branch – Egypt",
    tantaEgypt: "Tanta – Egypt",
    coreAcad: "Core Academy",
    roleInstructor: "Instructor",
    roleDev: "Mobile App Developer using Flutter",
    teachingFlutter: "Teaching Mobile App Development using Flutter",

    // Projects
    myWork: "My Work",
    featuredProjects: "Featured Projects",
    projectsDesc: "A curation of mobile applications developed with Flutter, demonstrating state management, API integration, responsiveness, and polished user interfaces.",
    filterAll: "All",
    filterEcommerce: "E-Commerce & API",
    filterUtility: "Utility",
    filterUIUX: "UI/UX & Dashboards",
    btnCode: "Code",
    btnDemo: "Demo",
    btnDownload: "Try for Windows",
    techStackLabel: "Tech Stack:",

    // Project Names & Descriptions
    projBmiName: "BMI Calculator",
    projBmiDesc: "BmiApp is a Flutter application that calculates Body Mass Index (BMI) based on user input for height and weight.",
    projQuizName: "Quiz App",
    projQuizDesc: "Interactive quiz app developed, offering multiple-choice questions, and tracking user scores.",
    projTodoName: "Note App (Todo)",
    projTodoDesc: "A simple note-taking app built using Flutter, allowing users to create, save, archive, and manage notes efficiently.",
    projNewsName: "NewsApp (News wave)",
    projNewsDesc: "A news aggregator app was built using Api, fetching, and displaying the latest headlines from various sources.",
    projCandyName: "E-commerce App (MrCandy)",
    projCandyDesc: "A feature-rich mobile application built using Flutter with Api for seamless online shopping experiences. It includes user authentication, product browsing, cart management, and order processing functionalities.",
    projDashName: "Responsive Dashboard App",
    projDashDesc: "A responsive dashboard application built using Flutter, featuring adaptive layouts and interactive components for an optimal user experience across devices.",
    projQualiverseName: "Qualiverse — AI-Powered Accreditation System",
    projQualiverseDesc: "An enterprise-grade Flutter Desktop application built to automate academic accreditation using AI. It streamlines complex reporting, smart evidence management, and role-based workflows for higher education. Architected with Clean Architecture and BLoC, the app features robust state management, proactive token refresh logic, full localization (RTL/LTR), and responsive dashboards, showcasing a deep understanding of scalable software engineering.",

    // Contact
    getInTouch: "Get In Touch",
    contactMeTitle: "Contact Me",
    contactDesc: "Have a project in mind, a job opportunity, or just want to say hello? Drop a message below or reach out via social channels.",
    email: "Email",
    phone: "Phone",
    location: "Location",
    tantaEgyptLoc: "Tanta, Egypt",
    connectWithMe: "Connect with me",
    formName: "Name",
    formNamePlaceholder: "Enter your name",
    formEmail: "Email",
    formEmailPlaceholder: "Enter your email",
    formMessage: "Message",
    formMessagePlaceholder: "Write your message here...",
    formSend: "Send Message",

    // Footer
    allRightsReserved: "All rights reserved.",
    footerBuiltWith: "Built with React & Tailwind CSS • Crafted with care",
  },
  ar: {
    // Navbar
    navHome: "الرئيسية",
    navAbout: "من أنا",
    navSkills: "المهارات",
    navProjects: "المشاريع",
    navContact: "اتصل بي",
    navTitle: "التنقل",

    // Floating Action WhatsApp
    chatWithMe: "تحدث معي",

    // Hero
    availableOpportunities: "متاح لفرص العمل",
    im: "أنا",
    name: "عاطف الهمسة",
    typewriterFlutterDev: "مطور فلاتر (Flutter)",
    typewriterInstructor: "محاضر فلاتر (Flutter)",
    typewriterUIUX: "مصمم واجهات UI/UX",
    typewriterMobileSpec: "أخصائي تطبيقات هاتف",
    heroDesc: "ابتكار تطبيقات هاتف مميزة، عالية الأداء وجميلة عبر الأنظمة باستخدام Flutter و Dart وبنيات واجهة مستخدم حديثة.",
    techStack: "التقنيات:",
    completedProjects: "مشاريع مكتملة",
    certifiedSpecialist: "أخصائي معتمد",
    activeInstructor: "مدرب فلاتر",
    active: "نشط",
    viewCv: "السيرة الذاتية",
    contactMe: "تواصل معي",
    scrollDown: "انزل للأسفل",

    // Aboutme
    aboutTitle: "من أنا",
    aboutRole: "مطور ومدرب فلاتر (Flutter)",
    aboutDesc: "مطور فلاتر شغوف ومتميز في Dart و Flutter وتطوير تطبيقات الهاتف متعددة الأنظمة. أتميز ببناء تطبيقات هاتف متجاوبة وسهلة الاستخدام مع كود نظيف وفعال وتصميمات واجهة مستخدم حديثة. مع خبرة في حلول إدارة الحالة (State Management) مثل Provider و Riverpod و Bloc، بالإضافة إلى Firebase و RESTful APIs، أركز على تقديم أداء سلس وتجارب مستخدم جذابة. أتعلم باستمرار وأستكشف تقنيات جديدة، وأسعى جاهداً لإنشاء تطبيقات هاتف مبتكرة وعالية الجودة.",
    expEducation: "الخبرة والتعليم",
    myTechStack: "المهارات والتقنيات",
    techStackDesc: "مجموعة أدوات متخصصة تركز على إنشاء تطبيقات هاتف فائقة الأداء ومثالية البكسل وواجهات ويب سريعة التحميل.",

    // Timeline
    timelineItiDate: "يوليو 2025 – أغسطس 2025",
    timelineNtiDate: "مايو 2025 – يوليو 2025",
    timelineCoreDate: "يونيو 2025 – أكتوبر 2025",
    itiCamp: "معسكر الكود المكثف – تدريب صيفي",
    ntiCamp: "معسكر الكود المكثف – تدريب",
    itiInst: "معهد تكنولوجيا المعلومات (ITI)",
    ntiInst: "المعهد القومي للاتصالات (NTI)",
    tantaBranch: "فرع طنطا – مصر",
    tantaEgypt: "طنطا – مصر",
    coreAcad: "أكاديمية كور (Core Academy)",
    roleInstructor: "محاضر",
    roleDev: "مطور تطبيقات هاتف باستخدام Flutter",
    teachingFlutter: "تدريس تطوير تطبيقات الهاتف باستخدام Flutter",

    // Projects
    myWork: "أعمالي",
    featuredProjects: "المشاريع المميزة",
    projectsDesc: "مجموعة مختارة من تطبيقات الهاتف التي تم تطويرها باستخدام Flutter، لتوضيح إدارة الحالة، وربط واجهات برمجة التطبيقات (APIs)، والتجاوب، وواجهات مستخدم مصقولة.",
    filterAll: "الكل",
    filterEcommerce: "التجارة الإلكترونية والـ API",
    filterUtility: "أدوات ومرافق",
    filterUIUX: "واجهات ولوحات تحكم",
    btnCode: "الكود",
    btnDemo: "عرض حي",
    btnDownload: "جرب التطبيق (Windows)",
    techStackLabel: "التقنيات:",

    // Project Names & Descriptions
    projBmiName: "حاسبة كتلة الجسم",
    projBmiDesc: "تطبيق BmiApp هو تطبيق Flutter يحسب مؤشر كتلة الجسم (BMI) بناءً على مدخلات الطول والوزن من المستخدم.",
    projQuizName: "تطبيق الاختبارات",
    projQuizDesc: "تطبيق اختبارات تفاعلي تم تطويره لتقديم أسئلة اختيار من متعدد وتتبع نتائج المستخدمين.",
    projTodoName: "تطبيق المهام والملاحظات",
    projTodoDesc: "تطبيق بسيط لتدوين الملاحظات والمهام تم بناؤه باستخدام Flutter ليتيح إنشاء وحفظ وأرشفة وإدارة الملاحظات بفعالية.",
    projNewsName: "تطبيق الأخبار (News Wave)",
    projNewsDesc: "تطبيق مجمع أخبار تم بناؤه باستخدام API لجلب وعرض أحدث الأخبار والعناوين من مصادر مختلفة.",
    projCandyName: "متجر إلكتروني (MrCandy)",
    projCandyDesc: "تطبيق هاتف متكامل للتجارة الإلكترونية تم بناؤه بـ Flutter و API لتوفير تجربة تسوق سلسة. يشمل التوثيق، تصفح المنتجات، السلة، والطلبات.",
    projDashName: "لوحة تحكم متجاوبة",
    projDashDesc: "تطبيق لوحة تحكم متجاوبة باستخدام Flutter، يتميز بتخطيطات متكيفة ومكونات تفاعلية لتجربة مستخدم مثالية على جميع الأجهزة.",
    projQualiverseName: "Qualiverse — نظام اعتماد أكاديمي بالذكاء الاصطناعي",
    projQualiverseDesc: "تطبيق سطح مكتب متقدم (Desktop App) تم تطويره باستخدام Flutter لأتمتة عمليات الاعتماد الأكاديمي وضمان الجودة في الجامعات بالاعتماد على الذكاء الاصطناعي. يدير التطبيق نظام صلاحيات معقد، ورفع الملفات الكبيرة، ولوحات تحكم تفاعلية. تم بناء المشروع باستخدام Clean Architecture و BLoC، مع تطبيق آليات حماية متقدمة مثل (Proactive Token Refresh) لضمان استقرار الجلسات، مما يعكس القدرة على بناء أنظمة برمجية ضخمة وقابلة للتوسع.",

    // Contact
    getInTouch: "تواصل معي",
    contactMeTitle: "اتصل بي",
    contactDesc: "هل لديك مشروع، فرصة عمل، أو ترغب فقط في قول مرحباً؟ أرسل لي رسالة أدناه أو تواصل معي عبر وسائل التواصل الاجتماعي.",
    email: "البريد الإلكتروني",
    phone: "الهاتف",
    location: "الموقع",
    tantaEgyptLoc: "طنطا، مصر",
    connectWithMe: "اتصل بي عبر",
    formName: "الاسم",
    formNamePlaceholder: "أدخل اسمك الكريم",
    formEmail: "البريد الإلكتروني",
    formEmailPlaceholder: "أدخل بريدك الإلكتروني",
    formMessage: "الرسالة",
    formMessagePlaceholder: "اكتب رسالتك هنا...",
    formSend: "إرسال الرسالة",

    // Footer
    allRightsReserved: "جميع الحقوق محفوظة.",
    footerBuiltWith: "بني باستخدام React & Tailwind CSS • صنع بكل حب وعناية",
  }
};

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguageState] = useState(() => {
    // 1. Check local storage
    const savedLang = localStorage.getItem("portfolio_lang");
    if (savedLang === "en" || savedLang === "ar") {
      return savedLang;
    }
    // 2. Check browser settings
    const browserLang = navigator.language || navigator.userLanguage;
    if (browserLang && browserLang.startsWith("ar")) {
      return "ar";
    }
    return "en";
  });

  const setLanguage = (lang) => {
    if (lang === "en" || lang === "ar") {
      setLanguageState(lang);
      localStorage.setItem("portfolio_lang", lang);
    }
  };

  useEffect(() => {
    const dir = language === "ar" ? "rtl" : "ltr";
    document.documentElement.dir = dir;
    document.documentElement.lang = language;

    // Smooth scroll to top when language changes
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [language]);

  const t = (key) => {
    return translations[language][key] || translations["en"][key] || key;
  };

  const isRtl = language === "ar";

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRtl }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
