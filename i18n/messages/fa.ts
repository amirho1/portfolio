import type { PortfolioMessages } from "../types";

export const faMessages: PortfolioMessages = {
  locale: "fa",
  direction: "rtl",
  homePath: "/fa",
  alternatePath: "/",
  common: {
    skipToContent: "رفتن به محتوای نمونه‌کارها",
    languageSwitcherLabel: "تغییر زبان",
    alternateLanguage: "English",
    portfolioJourneyLabel: "مسیر مرور نمونه‌کارها",
    stationLabel: "{index}؛ {label}",
    nowArriving: "ایستگاه بعد",
    loadingPortfolio: "در حال بارگذاری نمونه‌کارها",
    closeDialog: "بستن",
  },
  seo: {
    title: "امیرحسین سلیقه دار | مهندس نرم‌افزار و توسعه‌دهنده فرانت‌اند",
    description:
      "نمونه‌کارها و سوابق امیرحسین سلیقه دار، مهندس نرم‌افزار و برنامه‌نویس فرانت‌اند متخصص React، Next.js و TypeScript با تجربه ساخت محصولات هوش مصنوعی و رابط‌های بلادرنگ.",
    siteName: "وب‌سایت و نمونه‌کارهای امیرحسین سلیقه دار",
    imageAlt:
      "تصویر امیرحسین سلیقه دار، مهندس نرم‌افزار و توسعه‌دهنده فرانت‌اند",
    keywords: [
      "امیرحسین سلیقه دار",
      "مهندس نرم‌افزار",
      "برنامه نویس فرانت اند",
      "توسعه دهنده React",
      "برنامه نویس Next.js",
      "متخصص TypeScript",
      "ساخت محصول هوش مصنوعی",
      "نمونه کار برنامه نویسی وب",
    ],
    manifestShortName: "امیرهو",
    manifestDescription:
      "وب‌سایت شخصی، نمونه‌کارها و سوابق مهندسی نرم‌افزار امیرحسین سلیقه دار.",
    category: "فناوری و مهندسی نرم‌افزار",
  },
  profile: {
    name: "امیرحسین سلیقه دار",
    alternateName: "Amir Hossein Salighedar",
    givenName: "امیرحسین",
    familyName: "سلیقه دار",
    title: "مهندس نرم‌افزار و توسعه‌دهنده فرانت‌اند",
    email: "amirhosseinsalighedar@gmail.com",
    introduction:
      "مهندس نرم‌افزاری که برای حل مسئله‌های واقعی در نقطه تلاقی فناوری و تجربه انسانی اشتیاق دارد.",
    biography:
      "حوزه کاری من میان مهندسی دقیق فرانت‌اند و ساخت کاربردی محصول قرار دارد. از سال ۲۰۲۰ در شکل‌دادن به اپلیکیشن‌های کاربرمحور، پلتفرم‌های داخلی و ابزارهای آزمایشی نقش داشته‌ام و هم‌زمان دانش عمیقی در جاوااسکریپت و تایپ‌اسکریپت ساخته‌ام.",
    direction:
      "تمرکز فعلی من بر محصولات مبتنی بر هوش مصنوعی، رابط‌های بلادرنگ، ابزارهای توسعه‌دهندگان و سیستم‌هایی است که کارهای پیچیده را ساده و قابل‌فهم می‌کنند.",
    additionalBiography:
      "از یادگیری عمیق سیستم‌ها و به‌اشتراک‌گذاشتن آموخته‌ها لذت می‌برم و به‌راحتی میان جزئیات رابط کاربری و معماری پشتیبان آن حرکت می‌کنم.",
    resumeHref: "/AmirhosseinSalighedarResume.pdf",
    avatarAlt: "امیرحسین سلیقه دار، مهندس نرم‌افزار",
  },
  stations: [
    { id: "home", index: "۰۱", label: "ورود", shortLabel: "خانه" },
    {
      id: "projects",
      index: "۰۲",
      label: "پروژه‌های منتخب",
      shortLabel: "پروژه‌ها",
    },
    {
      id: "experience",
      index: "۰۳",
      label: "سوابق کاری",
      shortLabel: "سوابق",
    },
    { id: "about", index: "۰۴", label: "درباره من", shortLabel: "درباره" },
    {
      id: "contact",
      index: "۰۵",
      label: "ارتباط",
      shortLabel: "ارتباط",
    },
  ],
  hero: {
    brandLabel: "صفحه اصلی نمونه‌کارهای امیرحسین سلیقه دار",
    monogram: "AS",
    brandName: "امیرحسین · سلیقه دار",
    arrival: "ایستگاه ۰۱ · نمونه‌کارها",
    titleFirst: "امیرحسین",
    titleSecond: "سلیقه دار",
    exploreWork: "مشاهده پروژه‌های منتخب",
    highlightsLabel: "خلاصه سوابق حرفه‌ای",
    highlights: [
      { label: "مسیر", value: "ساخت محصولات وب از سال ۲۰۲۰" },
      { label: "تخصص", value: "مهندسی فرانت‌اند · سیستم‌های محصول" },
      {
        label: "تمرکز فعلی",
        value: "هوش مصنوعی · رابط‌های بلادرنگ",
      },
    ],
    nightService: "سرویس شب · ۰۱",
    destinationLabel: "مقصد",
    destinationValue: "پروژه‌های منتخب",
    signalLabel: "وضعیت",
    signalValue: "سیستم‌ها فعال‌اند",
    scrollCue: "ادامه مسیر در پایین صفحه",
  },
  projectsSection: {
    station: "ایستگاه ۰۲",
    kicker: "گزارش پروژه‌ها",
    title: "پروژه‌های",
    titleEmphasis: "منتخب",
    description:
      "پلتفرم‌های محصول، سیستم‌های تعاملی و ابزارهای توسعه‌دهندگان؛ هر پروژه برای تبدیل یک ایده دشوار به تجربه‌ای ساده و کاربردی ساخته شده است.",
    roleLabel: "نقش من",
    technologiesLabel: "فناوری‌های استفاده‌شده در پروژه {project}",
    privateLinkLabel: "{status} · لینک عمومی ندارد",
    speechVisualLabel: "تبدیل موج صوتی به متن ساختاریافته",
    liveTranscription: "تبدیل زنده گفتار به متن",
    speechTimestamp: "۰۰:۲۴:۱۸",
    speechStatus: "رونویسی ← خلاصه ← خروجی ساختاریافته",
  },
  projects: [
    {
      id: "insta-shop",
      index: "۰۱",
      eyebrow: "پلتفرم تجارت الکترونیک",
      title: "اینستاشاپ",
      summary:
        "فروشگاه‌سازی که اطلاعات محصولات اینستاگرام را به فروشگاه‌های اختصاصی تبدیل می‌کند و در کنار آن، بازاری برای جست‌وجو و مقایسه محصولات در اختیار کاربران می‌گذارد.",
      role: "مهندسی فول‌استک محصول",
      technologies: ["Next.js", "React", "TypeScript", "Prisma", "PostgreSQL"],
      responsibilities: [
        "طراحی و پیاده‌سازی فرایند ساخت فروشگاه و تجربه اختصاصی هر کسب‌وکار.",
        "توسعه جریان‌های محصول، وب‌سایت، احراز هویت و داشبورد مدیریت کسب‌وکار.",
        "اتصال فروشگاه‌ساز B2B به بازار آنلاین کاربرمحور.",
      ],
      status: "محصول خصوصی",
      image: "/projects/insta-shop.webp",
      imageAlt: "نمای مفهومی بازار آنلاین و فروشگاه‌ساز اینستاشاپ",
      links: [],
    },
    {
      id: "hashtag-network",
      index: "۰۲",
      eyebrow: "چیدمان تعاملی گالری",
      title: "شبکه هشتگ",
      summary:
        "یک چیدمان تعاملی در گالری که ارتباط بازدیدکنندگان را بر اساس هشتگ‌های مشترک نمایش می‌دهد و معنای واقعی ارتباط‌های الگوریتمی را به پرسش می‌گیرد.",
      role: "مهندسی مصورسازی تعاملی",
      technologies: ["Electron", "React", "TypeScript", "D3", "WebSockets"],
      responsibilities: [
        "طراحی مسیر ورود بازدیدکننده با QR و انتخاب هشتگ‌ها.",
        "ساخت شبکه زنده مبتنی بر نیروی گراف برای نمایش روی صفحه گالری.",
        "پیاده‌سازی معماری محلی و پایدار برای اجرای یک‌ماهه نمایشگاه.",
      ],
      status: "چیدمان خصوصی",
      image: "/projects/hashtag-network.jpg",
      imageAlt:
        "نقشه چیدمان شبکه هشتگ با گره‌های بازدیدکنندگان در فضای کارخانه",
      links: [],
    },
    {
      id: "javascript-runtime",
      index: "۰۴",
      eyebrow: "آموزش برنامه‌نویسی",
      title: "مصورسازی محیط اجرای جاوااسکریپت",
      summary:
        "شبیه‌سازی تعاملی که کد جاوااسکریپت را تحلیل می‌کند و اجرای همگام و ناهمگام را در پشته فراخوانی، صف‌ها، Web API و حلقه رویداد مرحله‌به‌مرحله نشان می‌دهد.",
      role: "سازنده و مهندس فرانت‌اند",
      technologies: ["TypeScript", "JavaScript", "SCSS", "Runtime internals"],
      responsibilities: [
        "مدل‌سازی تابع‌ها، async/await، setTimeout و پردازش صف‌ها برای آموزش.",
        "طراحی رابط مرحله‌به‌مرحله برای نمایش واضح ترتیب اجرای کد.",
        "انتشار پروژه به‌عنوان دموی تعاملی متن‌باز.",
      ],
      status: "متن‌باز",
      image: "/runtime-visualization-screen-shoot.webp",
      imageAlt:
        "مصورساز اجرای جاوااسکریپت شامل ویرایشگر، پشته فراخوانی، صف‌ها و Web API",
      links: [
        {
          label: "مشاهده دموی آنلاین",
          href: "https://amirho1.github.io/JavaScript-Runtime-Environment/",
        },
        {
          label: "مشاهده کد منبع",
          href: "https://github.com/amirho1/JavaScript-Runtime-Environment",
        },
      ],
    },
    {
      id: "react-special-cursor",
      index: "۰۵",
      eyebrow: "کتابخانه متن‌باز React",
      title: "React Special Cursor",
      summary:
        "کتابخانه‌ای قابل‌سفارشی‌سازی برای React که امکان طراحی نشانگر متفاوت برای هر عنصر، نمایش محتوا درون نشانگر و غیرفعال‌سازی خودکار در موبایل را فراهم می‌کند.",
      role: "سازنده و نگه‌دارنده کتابخانه",
      technologies: ["React", "TypeScript", "SCSS", "Jest", "Webpack"],
      responsibilities: [
        "طراحی API مبتنی بر کلاس برای تخصیص سبک‌های متفاوت نشانگر به عناصر صفحه.",
        "فراهم‌کردن امکان نمایش متن و عناصر سفارشی درون نشانگر.",
        "بسته‌بندی کتابخانه تایپ‌اسکریپت همراه با تست خودکار و رفتار مناسب موبایل.",
      ],
      status: "متن‌باز · بسته npm",
      image: "/projects/react-special-cursor.webp",
      imageAlt:
        "رابط تیره با حلقه‌های طلایی و بنفش نشانگر که روی کارت‌ها تغییر شکل می‌دهند",
      links: [
        {
          label: "مشاهده دموی آنلاین",
          href: "https://amirho1.github.io/react-special-cursor/",
        },
        {
          label: "مشاهده بسته npm",
          href: "https://www.npmjs.com/package/react-special-cursor",
        },
        {
          label: "مشاهده کد منبع",
          href: "https://github.com/amirho1/react-special-cursor",
        },
      ],
    },
  ],
  experienceSection: {
    station: "ایستگاه ۰۳",
    kicker: "آرشیو سوابق",
    title: "مسیر",
    titleEmphasis: "حرفه‌ای",
    description:
      "مسیر کاری من از محصولات کاربرمحور و سامانه‌های مدیریت دانش تا SaaS بلادرنگ و زیرساخت‌های مقیاس‌پذیر فرانت‌اند امتداد دارد.",
    technologiesLabel: "فناوری‌های استفاده‌شده در {company}",
  },
  experiences: [
    {
      company: "ادورا مدیا (Edora Media)",
      role: "توسعه‌دهنده ارشد فرانت‌اند",
      period: "مهر ۱۴۰۴ تا اسفند ۱۴۰۴",
      highlights: [
        "ساخت پنل مدیریت مقیاس‌پذیر با معماری مونوریپو، Next.js و TypeScript.",
        "توسعه مدیریت پویای مسیر دوره‌ها و فرم‌ساز قابل‌استفاده مجدد مشابه Google Forms.",
        "ساخت پرتال مستقل پرداخت دانشجویان با Vite و یکپارچه‌سازی Stripe و اعتبار ویژه.",
        "دستیابی به پوشش تست ۱۰۰ درصدی با Jest برای افزایش پایداری و نگهداشت‌پذیری.",
      ],
      technologies: [
        "TypeScript",
        "Next.js",
        "Zod",
        "Jest",
        "Axios",
        "TanStack Query",
        "React",
        "Monorepo",
      ],
    },
    {
      company: "زودپز (Zood-paz)",
      role: "مهندس فرانت‌اند",
      period: "اسفند ۱۴۰۳ تا خرداد ۱۴۰۴",
      highlights: [
        "توسعه پلتفرم SaaS با چت‌بات مبتنی بر مدل زبانی برای برنامه‌نویسی با کمک هوش مصنوعی.",
        "خودکارسازی فرایند ساخت پروژه کاربران با esbuild و React Router.",
        "پیاده‌سازی Server-Sent Events برای ارتباط بلادرنگ.",
        "نگه‌داری مونوریپوی محصول با Turborepo.",
      ],
      technologies: [
        "LLM applications",
        "React Router",
        "esbuild",
        "SSE",
        "Turborepo",
      ],
    },
    {
      company: "آریانا لبز · پیمانکار ایرانسل",
      role: "توسعه‌دهنده فرانت‌اند",
      period: "اردیبهشت ۱۴۰۲ تا اسفند ۱۴۰۳",
      highlights: [
        "توسعه پلتفرم مدیریت دانش و چندین اپلیکیشن وب.",
        "همکاری با تیم‌های چندتخصصی برای ارائه یکپارچه‌سازی‌های پایدار محصول.",
        "حفظ کیفیت در سامانه‌های متصل و رابط‌های مختلف فرانت‌اند.",
      ],
    },
    {
      company: "Comviva و Saie Group · پیمانکار ایرانسل",
      role: "توسعه‌دهنده وب",
      period: "خرداد ۱۴۰۱ تا فروردین ۱۴۰۲",
      highlights: [
        "توسعه و نگه‌داری نسخه قدیمی وب‌اپلیکیشن ایرانسل من.",
        "همکاری میان‌تیمی برای یکپارچه‌سازی تغییرات با سامانه‌های موجود.",
        "کمک به پایداری و توسعه مستمر یک محصول پرمخاطب.",
      ],
    },
    {
      company: "فن‌آگین",
      role: "توسعه‌دهنده جونیور فرانت‌اند",
      period: "۱۳۹۹ تا ۱۴۰۰",
      highlights: [
        "آغاز مسیر حرفه‌ای فرانت‌اند با توسعه قابلیت‌های یک پلتفرم CRM.",
        "ساخت پایه‌های مهندسی اپلیکیشن وب و توسعه محصول در مسیر حرفه‌ای من.",
      ],
    },
  ],
  aboutSection: {
    station: "ایستگاه ۰۴",
    kicker: "معرفی مسافر",
    title: "درباره",
    titleEmphasis: "مهندس",
    portraitTicket: "مسافر · AS 01",
    headline: "ساخت رابط‌های آرام برای سیستم‌های پیچیده.",
    resumeLabel: "دریافت رزومه",
    skillsEyebrow: "فهرست مهارت‌های فنی",
    skillsDescription:
      "مجموعه‌ای از ابزارهایی که برای تبدیل ایده‌های محصول به سیستم‌های قابل‌اعتماد استفاده می‌کنم.",
    strengths: [
      {
        id: "product",
        title: "فرانت‌اند با نگاه محصولی",
        description:
          "معماری رابط کاربری با تعادل میان وضوح، نگهداشت‌پذیری و محدودیت‌های واقعی محصول.",
      },
      {
        id: "ai",
        title: "جریان‌های کاری مبتنی بر هوش مصنوعی",
        description:
          "طراحی تجربه‌های محصول برای مدل‌های زبانی، تبدیل گفتار، خودکارسازی و داده‌های جریانی.",
      },
      {
        id: "systems",
        title: "کنجکاوی درباره سیستم‌ها",
        description:
          "درک عمیق محیط اجرا، ابزارها و جریان داده‌ای که زیر رابط قابل‌مشاهده کار می‌کند.",
      },
    ],
  },
  skills: [
    { name: "JavaScript", mark: "JS" },
    { name: "TypeScript", mark: "TS", href: "https://www.typescriptlang.org/" },
    { name: "React", mark: "R", href: "https://react.dev/" },
    { name: "Next.js", mark: "N", href: "https://nextjs.org/" },
    { name: "NestJS", mark: "NS", href: "https://docs.nestjs.com/" },
    { name: "Node.js", mark: "ND", href: "https://nodejs.org/" },
    { name: "Tailwind CSS", mark: "TW", href: "https://tailwindcss.com/" },
    { name: "Sass / SCSS", mark: "SC", href: "https://sass-lang.com/" },
    { name: "Git", mark: "GT", href: "https://git-scm.com/" },
    { name: "Material UI", mark: "UI", href: "https://mui.com/material-ui/" },
    { name: "LangChain", mark: "LC", href: "https://www.langchain.com/" },
    { name: "PostgreSQL", mark: "PG", href: "https://www.postgresql.org/" },
  ],
  contactSection: {
    station: "ایستگاه پایانی",
    kicker: "واگن ۰۵ · ارتباط",
    title: "بیایید",
    titleEmphasis: "مقصد بعدی را بسازیم.",
    description:
      "برای گفت‌وگو درباره محصولات سنجیده، رابط‌های کاربری بلندپروازانه و مسئله‌های جذاب مهندسی همیشه آماده‌ام.",
    conversationLabel: "شروع گفت‌وگو",
    resumeLabel: "رزومه",
    detailsLabel: "راه‌های ارتباط با امیرحسین سلیقه دار",
    ticketCode: "AS · ۰۵",
    fromLabel: "از",
    fromValue: "ایده‌های خوب",
    toLabel: "به",
    toValue: "نرم‌افزار کاربردی",
    directLine: "ایمیل مستقیم",
    socialProfilesLabel: "شبکه‌های اجتماعی و حرفه‌ای",
    socialProfileLabel: "صفحه امیرحسین در {network}",
    copyrightLabel: "© {year} {name}",
    footerNote: "سفری آرام در میان تجربه‌های مهندسی محصول.",
  },
  socials: [
    { name: "GitHub", href: "https://github.com/amirho1", icon: "github" },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/amirho/",
      icon: "linkedin",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/amirhosseinsalighedar/",
      icon: "instagram",
    },
    { name: "X", href: "https://x.com/the_Amirhos", icon: "x" },
  ],
  assistant: {
    dockLabel: "بازکردن راهنمای هوشمند نمونه‌کارها",
    guideLabel: "راهنمای نمونه‌کارها",
    askLabel: "پرسش از راهنمای هوشمند",
    localLabel: "راهنمای محلی نمونه‌کارها",
    title: "راهنمای هوشمند",
    description:
      "درباره پروژه‌ها و تجربه‌های امیرحسین بپرسید. پاسخ‌ها فقط از محتوای تأییدشده همین وب‌سایت ساخته می‌شوند و پیامی به سرویس هوش مصنوعی خارجی ارسال نمی‌شود.",
    initialMessage:
      "خوش آمدید. می‌توانم برای مرور پروژه‌ها، تجربه کاری، مهارت‌های فنی و راه‌های ارتباط با امیرحسین کمک کنم.",
    suggestionsLabel: "پرسش‌های پیشنهادی",
    suggestions: [
      "مهم‌ترین پروژه‌های امیرحسین کدام‌اند؟",
      "آیا امیرحسین برای تیم فرانت‌اند ما مناسب است؟",
      "چه تجربه‌ای در هوش مصنوعی و سیستم‌های بلادرنگ دارد؟",
      "چطور با امیرحسین تماس بگیرم؟",
    ],
    inputLabel: "پرسش از راهنمای هوشمند",
    placeholder: "درباره تجربه‌های امیرحسین بپرسید…",
    sendLabel: "ارسال پرسش",
    responses: {
      contact: {
        text: "می‌توانید از راه ایمیل با امیرحسین در تماس باشید. رزومه و پروفایل‌های حرفه‌ای او نیز در بخش ارتباط قرار دارند.",
        target: "#contact",
        actionLabel: "رفتن به بخش ارتباط",
      },
      ai: {
        text: "امیرحسین در زودپز روی محصول برنامه‌نویسی مبتنی بر مدل زبانی کار کرده و برای محصولات تعاملی ارتباط بلادرنگ با Server-Sent Events ساخته است.",
        target: "#projects",
        actionLabel: "مشاهده پروژه‌های مرتبط",
      },
      frontend: {
        text: "امیرحسین از سال ۲۰۲۰ به‌صورت حرفه‌ای در نقش‌های فرانت‌اند فعالیت دارد. جاوااسکریپت، تایپ‌اسکریپت، React، Next.js و تبدیل جریان‌های پیچیده به رابط‌های روشن از توانمندی‌های اصلی او هستند.",
        target: "#experience",
        actionLabel: "مرور سوابق کاری",
      },
      projects: {
        text: "پروژه‌های منتخب امیرحسین شامل اینستاشاپ، چیدمان گالری شبکه هشتگ، مصورساز متن‌باز محیط اجرای جاوااسکریپت و کتابخانه React Special Cursor است.",
        target: "#projects",
        actionLabel: "مشاهده پروژه‌ها",
      },
      experience: {
        text: "مسیر حرفه‌ای امیرحسین از توسعه CRM در فن‌آگین آغاز شده و با محصولات ایرانسل، سامانه‌های دانش آریانا لبز، SaaS هوشمند زودپز و سیستم‌های فرانت‌اند ادورا مدیا ادامه یافته است.",
        target: "#experience",
        actionLabel: "مشاهده مسیر حرفه‌ای",
      },
      about: {
        text: "امیرحسین مهندسی فرانت‌اند را با نگاه فول‌استک محصول ترکیب می‌کند. پایه کار او JavaScript و TypeScript است و در React، Next.js، NestJS، Node.js و یکپارچه‌سازی‌های بلادرنگ و هوش مصنوعی تجربه دارد.",
        target: "#about",
        actionLabel: "مطالعه درباره امیرحسین",
      },
      fallback: {
        text: "می‌توانم بر اساس اطلاعات تأییدشده این وب‌سایت درباره پروژه‌ها، سوابق، مهارت‌ها و راه‌های ارتباط پاسخ بدهم. درباره بهترین پروژه‌ها، تناسب با تیم فرانت‌اند یا تجربه هوش مصنوعی بپرسید.",
      },
    },
  },
};
