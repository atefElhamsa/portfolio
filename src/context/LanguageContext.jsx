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
    typewriterFullStack: "Full Stack Developer",
    typewriterFlutterNode: "Flutter & Node.js Developer",
    typewriterInstructor: "Tech Instructor",
    typewriterUIUX: "Flutter Specialist",
    typewriterMobileSpec: "UI/UX Designer",
    professionTitle: "Software Engineer & Tech Instructor",
    heroDesc: "Crafting high-performance, beautiful cross-platform mobile experiences and robust backends with Flutter, Node.js, and state-of-the-art architectures.",
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
    aboutRole: "Full Stack Developer · Flutter & Node.js · Tech Instructor",
    aboutDesc: "Passionate Full Stack Developer skilled in Flutter, Node.js, and cross-platform mobile development. I specialize in building responsive, high-performance mobile applications and robust backends with clean, scalable code and modern UI designs. With extensive experience in state management solutions like BLoC, Riverpod, and Provider, alongside Firebase, Node.js, and RESTful APIs, I focus on delivering seamless performance and engaging user experiences.",
    expEducation: "Experience & Education",
    myTechStack: "My Tech Stack",
    techStackDesc: "A specialized toolkit focused on creating ultra-performance, pixel-perfect mobile applications and fast-loading web interfaces.",
    lvlSolidFoundation: "Solid Foundation",
    lvlPixelPerfect: "Pixel Perfect",
    lvlCoreLogic: "Core Logic",
    lvlDeepExpertise: "Deep Expertise",
    lvlProductionReady: "Production Ready",
    lvlComplexStates: "Complex States",
    lvlCiCdFlow: "CI/CD & Flow",
    lvlAppArchitecture: "App Architecture",
    lvlFullIntegration: "Full Integration",
    lvlBackendSetup: "Backend Setup",
    lvlReactiveData: "Reactive Data",
    lvlSystemDesign: "System Design",
    lvlLocalStorage: "Local Storage",
    lvlVersionControl: "Version Control",
    lvlStateManagement: "State Management",
    lvlBackendScripts: "Backend & Scripts",
    lvlAdaptiveLayouts: "Adaptive Layouts",
    lvlAutomation: "Automation",
    lvlCurrentlyLearning: "Currently Learning",

    // Experience & Education Unified
    expEduSectionTitle: "Experience & Education",
    expEduSectionDesc: "A structured overview of my professional work experience, technical teaching, and academic background.",
    sectionWorkTitle: "Work & Teaching Experience",
    sectionWorkSubtitle: "Professional instruction, custom systems & mobile dev",
    sectionEduTitle: "Education & Internships",
    sectionEduSubtitle: "University degree & intensive technical code camps",
    workCurrentLabel: "Present",
    workLocationOnline: "Online / Remote",
    tantaEgypt: "Tanta, Egypt",
    cairoEgypt: "Cairo, Egypt",

    // Work Experience Items
    workRoleProgrammingInstructor: "Programming Instructor (Online)",
    workRoleCcInstructor: "Programming & Flutter Instructor | Custom Software Solutions",
    workRoleInstructor: "Flutter Instructor",
    workCompanyCAC: "Communication Academy Community",
    workCompanyCcAcademy: "C&C Academy (CAD & Code)",
    workCompanyCoreAcademy: "Core Academy",
    workPeriodCAC: "2024 – Present",
    workPeriodCc: "August 2026 – Present",
    workPeriodCore: "June 2025 – October 2025",
    workDescCAC: "Teaching programming fundamentals, JavaScript, and Python to students online. Focusing on algorithmic thinking, problem solving, and hands-on coding exercises.",
    workDescCc: "Teaching Python, C++, and Flutter development online. Architecting custom software systems, enterprise business solutions, and tailor-made mobile applications for clients.",
    workDescCore: "Conducted structured Flutter & Dart courses for beginners, designed curriculum modules, and guided students through practical mobile app development.",

    // Education & Internships Items
    eduDegree: "B.Sc. in Computers & Information",
    eduInstitution: "Tanta University",
    eduFaculty: "Faculty of Computers & Information",
    eduPeriod: "2022 – June 2026",
    eduDesc: "Graduated with strong foundations in Computer Science & Software Engineering. Graduation Project: QualiVerse (AI-Powered Academic Accreditation System with Flutter Desktop).",

    internItiTitle: "Mobile App Developer – Intensive Code Camp",
    internItiCompany: "Information Technology Institute (ITI)",
    internItiBranch: "Tanta Branch – Egypt",
    internItiPeriod: "July 2025 – August 2025",
    internItiDesc: "Completed an intensive summer code camp focused on Flutter & Dart. Applied Clean Architecture, BLoC state management, Firebase, and REST API integration.",

    internNtiTitle: "Mobile App Development Trainee",
    internNtiCompany: "National Telecommunication Institute (NTI)",
    internNtiBranch: "Tanta Branch – Egypt",
    internNtiPeriod: "May 2025 – July 2025",
    internNtiDesc: "Underwent intensive hands-on training developing cross-platform mobile apps with Flutter, focusing on responsive UI, Dio/HTTP networking, and clean state handling.",

    // Projects
    myWork: "My Work",
    featuredProjects: "Featured Projects",
    projectsDesc: "A curation of mobile applications developed with Flutter, demonstrating state management, API integration, responsiveness, and polished user interfaces.",
    filterAll: "All",
    filterEducation: "Education & Mobile",
    filterEcommerce: "E-Commerce & API",
    filterUtility: "Utility",
    filterUIUX: "UI/UX & Dashboards",
    btnCode: "Code",
    btnDemo: "Demo",
    btnDownload: "Try for Windows",
    btnPlayStore: "Google Play",
    btnAppStore: "App Store",
    liveOnStore: "Live on App Store & Google Play",
    viewScreenshots: "View Screenshots",
    closeModal: "Close",
    techStackLabel: "Tech Stack:",

    // Project Badges
    badgeGraduationProject: "Graduation Project · AI-Powered",
    badgeLiveGooglePlay: "Live on App Store & Google Play · Official Academy App",

    // Project Names & Descriptions
    projCcAcademyName: "C&C Academy — Learning Platform",
    projCcAcademyDesc: "The official mobile application for C&C Academy (CAD & Code), published live on the Apple App Store and Google Play. An interactive educational platform delivering structured courses in programming, software engineering, and CAD design. Features progress tracking, interactive learning modules, and up-to-date resources for aspiring developers.",
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
    typewriterFullStack: "مطور شامل (Full Stack)",
    typewriterFlutterNode: "مطور Flutter و Node.js",
    typewriterInstructor: "محاضر تقني",
    typewriterUIUX: "أخصائي فلاتر (Flutter)",
    typewriterMobileSpec: "مصمم واجهات UI/UX",
    professionTitle: "مهندس برمجيات ومحاضر تقني",
    heroDesc: "ابتكار تطبيقات هاتف مميزة وواجهات خلفية قوية، عالية الأداء وجميلة عبر الأنظمة باستخدام Flutter و Node.js وبنيات واجهة مستخدم حديثة.",
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
    aboutRole: "مطور شامل · Flutter & Node.js · محاضر تقني",
    aboutDesc: "مطور شامل شغوف ومتميز في تطوير تطبيقات الهاتف والواجهات الخلفية باستخدام Flutter و Node.js. أتميز ببناء تطبيقات متجاوبة، فائقة الأداء وسهلة الاستخدام مع كود نظيف وفعال وتصميمات واجهة مستخدم حديثة. مع خبرة متقدمة في حلول إدارة الحالة مثل BLoC و Riverpod و Provider، بالإضافة إلى Firebase، Node.js، و RESTful APIs، أركز على تقديم أداء سلس وتجارب مستخدم جذابة.",
    expEducation: "الخبرة والتعليم",
    myTechStack: "المهارات والتقنيات",
    techStackDesc: "مجموعة أدوات متخصصة تركز على إنشاء تطبيقات هاتف فائقة الأداء ومثالية البكسل وواجهات ويب سريعة التحميل.",
    lvlSolidFoundation: "أساس قوي",
    lvlPixelPerfect: "دقة متناهية",
    lvlCoreLogic: "منطق أساسي",
    lvlDeepExpertise: "خبرة عميقة",
    lvlProductionReady: "جاهز للإنتاج",
    lvlComplexStates: "إدارة الحالات المعقدة",
    lvlCiCdFlow: "تكامل وتسليم مستمر",
    lvlAppArchitecture: "هيكلة التطبيقات",
    lvlFullIntegration: "دمج كامل",
    lvlBackendSetup: "إعداد الواجهة الخلفية",
    lvlReactiveData: "بيانات تفاعلية",
    lvlSystemDesign: "تصميم الأنظمة",
    lvlLocalStorage: "تخزين محلي",
    lvlVersionControl: "التحكم في الإصدارات",
    lvlStateManagement: "إدارة الحالة",
    lvlBackendScripts: "الخلفية والبرمجة النصية",
    lvlAdaptiveLayouts: "تصميم متكيف",
    lvlAutomation: "الأتمتة المستمرة",
    lvlCurrentlyLearning: "أتعلمه حالياً",

    // Experience & Education Unified
    expEduSectionTitle: "الخبرة والتعليم",
    expEduSectionDesc: "نظرة متكاملة ومنظمة على مساري المهني، التدريس التقني، ومعسكرات التدريب والتعليم الأكاديمي.",
    sectionWorkTitle: "الخبرة العملية والتدريس",
    sectionWorkSubtitle: "تدريس البرمجة، تطوير الأنظمة المخصصة وتطبيقات الهاتف",
    sectionEduTitle: "التعليم والمعسكرات التدريبية",
    sectionEduSubtitle: "الدرجة الجامعية ومعسكرات التدريب الصيفية المكثفة",
    workCurrentLabel: "حالياً",
    workLocationOnline: "أونلاين (عن بُعد)",
    tantaEgypt: "طنطا، مصر",
    cairoEgypt: "القاهرة، مصر",

    // Work Experience Items
    workRoleProgrammingInstructor: "محاضر برمجة (أونلاين)",
    workRoleCcInstructor: "محاضر برمجة وفلاتر ومطور أنظمة",
    workRoleInstructor: "محاضر Flutter",
    workCompanyCAC: "Communication Academy Community",
    workCompanyCcAcademy: "أكاديمية C&C (CAD & Code)",
    workCompanyCoreAcademy: "أكاديمية كور (Core Academy)",
    workPeriodCAC: "2024 – الحاضر",
    workPeriodCc: "أغسطس 2026 – الحاضر",
    workPeriodCore: "يونيو 2025 – أكتوبر 2025",
    workDescCAC: "تدريس أساسيات البرمجة، لغة JavaScript، ولغة Python للطلاب أونلاين، مع التركيز على التفكير المنطقي، وحل المشكلات البرمجية، وتطبيق مشاريع عملية.",
    workDescCc: "تدريس لغات البرمجة Python و C++ وتطوير تطبيقات الهاتف بـ Flutter أونلاين. تصميم وتطوير أنظمة برمجية مخصصة وتطبيقات متكاملة لأصحاب الأعمال والمشاريع.",
    workDescCore: "تقديم دورات تدريبية مكثفة للمبتدئين في Flutter و Dart، وتصميم المحتوى التدريبي، ومتابعة الطلاب في إنجاز مشاريع التطبيقات.",

    // Education & Internships Items
    eduDegree: "بكالوريوس الحاسبات والمعلومات",
    eduInstitution: "جامعة طنطا",
    eduFaculty: "كلية الحاسبات والمعلومات",
    eduPeriod: "2022 – يونيو 2026",
    eduDesc: "التخرج بأساس قوي في علوم الحاسب وهندسة البرمجيات. مشروع التخرج: QualiVerse (نظام اعتماد أكاديمي ذكي مدعوم بالذكاء الاصطناعي وتطبيق Flutter Desktop).",

    internItiTitle: "مطور تطبيقات هاتف – معسكر صيفي مكثف",
    internItiCompany: "معهد تكنولوجيا المعلومات (ITI)",
    internItiBranch: "فرع طنطا – مصر",
    internItiPeriod: "يوليو 2025 – أغسطس 2025",
    internItiDesc: "إتمام معسكر صيفي مكثف في تطوير تطبيقات الهاتف بـ Flutter و Dart، وتطبيق معمارية Clean Architecture، وإدارة الحالة بـ BLoC، وتكامل Firebase و REST APIs.",

    internNtiTitle: "متدرب تطوير تطبيقات الهاتف",
    internNtiCompany: "المعهد القومي للاتصالات (NTI)",
    internNtiBranch: "فرع طنطا – مصر",
    internNtiPeriod: "مايو 2025 – يوليو 2025",
    internNtiDesc: "تدريب عملي مكثف على تطوير تطبيقات متعددة المنصات باستخدام Flutter، مع التركيز على الواجهات المتجاوبة (Responsive UI)، واستدعاء الـ APIs عبر Dio/HTTP.",

    // Projects
    myWork: "أعمالي",
    featuredProjects: "المشاريع المميزة",
    projectsDesc: "مجموعة مختارة من تطبيقات الهاتف التي تم تطويرها باستخدام Flutter، لتوضيح إدارة الحالة، وربط واجهات برمجة التطبيقات (APIs)، والتجاوب، وواجهات مستخدم مصقولة.",
    filterAll: "الكل",
    filterEducation: "التعليم وتطبيقات الهاتف",
    filterEcommerce: "التجارة الإلكترونية والـ API",
    filterUtility: "أدوات ومرافق",
    filterUIUX: "واجهات ولوحات تحكم",
    btnCode: "الكود",
    btnDemo: "عرض حي",
    btnDownload: "جرب التطبيق (Windows)",
    btnPlayStore: "Google Play",
    btnAppStore: "App Store",
    liveOnStore: "متاح على App Store و Google Play",
    viewScreenshots: "عرض لقطات الشاشة",
    closeModal: "إغلاق",
    techStackLabel: "التقنيات:",

    // Project Badges
    badgeGraduationProject: "مشروع التخرج · مدعوم بالذكاء الاصطناعي",
    badgeLiveGooglePlay: "متاح على App Store و Google Play · التطبيق الرسمي للأكاديمية",

    // Project Names & Descriptions
    projCcAcademyName: "أكاديمية C&C — منصة التعليم التقني",
    projCcAcademyDesc: "التطبيق الرسمي لأكاديمية C&C (CAD & Code) المنشور رسمياً على متجري Apple App Store و Google Play. منصة تعليمية متكاملة لتقديم دورات تدريبية متقدمة في البرمجة وهندسة البرمجيات والتصميم الهندسي، مع تتبع تقدم الطلاب والدروس التطبيقية لتأهيل الكوادر لسوق العمل التقني.",
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
