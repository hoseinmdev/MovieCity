import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: "fa",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    fa: {
      translation: {
        UnlimitedMoviesTitle: "آرشیو بینهایت از فیلم , نمایش تلویزیونی و...",
        WatchAnywhereAnytime: "هرجا و هر زمان تماشا کن ...",
        WatchAnywhereAnytimeDesc:
          "فیلم ها و برنامه های تلویزیونی نامحدود را در تلفن، رایانه لوحی، لپ تاپ و تلویزیون خود پخش کنید",
        ReadyToWatch: "آماده ای !؟",
        GetStarted: "بزن بریم",
        EnjoyOnYourTv: "با تلویزیون خودت فیلم هارو تماشا کن",
        EnjoyOnYourTvDesc:
          "در تلویزیون های هوشمند و سایر پخش کننده های بلوری تماشا کنید",
        ProfileForKids: "ایجاد پروفایل برای کودکان",
        ProfileForKidsDesc:
          "بچه‌ها را با شخصیت‌های مورد علاقه‌شان در فضایی که فقط برای آنها ساخته شده به ماجراجویی بفرستید",
        DownloadAndSeeOffline: "دانلود کن و آفلاین ببین",
        DownloadAndSeeOfflineDesc: "رایگان و بدون محدودیت",
        FrequentlyAskedQuestions: "سوالات متداول",
        AboutMovieCity: "درباره مووی سیتی",
        AboutMovieCityDesc:
          "مووی سیتی یک سرویس پخش است که طیف گسترده‌ای از برنامه‌های تلویزیونی، فیلم‌ها، انیمیشن‌ها، مستندها و موارد دیگر را در هزاران دستگاه متصل به اینترنت ارائه می‌کند. هر زمان که بخواهید می‌توانید هر چقدر که بخواهید تماشا کنید, همیشه چیز جدیدی برای کشف وجود دارد و هر هفته برنامه های تلویزیونی و فیلم های جدید اضافه می شود!",
        WhereCanIWatch: "کجا میتونم تماشا کنم ؟",
        WhereCanIWatchDesc:
          "هرجا و هر زمان , با تلویزیون هوشمند, لپتاپ, تبلت یا موبایل خود وارد سایت شوید و فیلم تماشا کنید",
        IsMovieCityGoodForKids: "مووی سیتی مناسب بچه هاست ؟",
        IsMovieCityGoodForKidsDesc: "بله محتوای سایت بازبینی شده است :))))",
        RevisedSiteContent: "محتوای ارائه شده در مووی سیتی بازبینی شده است",
        myNumber: "شماره تماس : +989222365685",
        material:
          "تمامی حقوق مادی و معنوی این سایت متعلق به حسین محمودی میباشد",
        email: "ایمیل : hoseinmdev@gmail.com",
        theNun2: "فیلم راهبه 2",
        theNun2Desc:
          "یک کشیش به قتل می رسد. یک شر در حال گسترش است. دنباله این فیلم موفق جهانی خواهر آیرین را دنبال می کند که بار دیگر با والاک، راهبه شیطان روبرو می شود.",
        jawan: "فیلم جوان",
        jawanDesc:
          "یک انسان عادی به خاطر اشتباهی که مرتکب نشده مجازات می شود. واقعه نادرست چگونه بر او تأثیر می گذارد و چگونه آن را رفع می کند؟ چگونه بر کسانی که او را در این مشکل قرار دادند غلبه کرد؟…",
        missionImbossible7: "ماموریت غیرممکن ۷ - روزشمار مرگ",
        missionImbossible7Desc:
          "در فیلم ماموریت غیر ممکن 7 : ایتن هانت از طرف MIF ماموریت پیدا می‌‌کند تا نگذارد یک فناوری مرموز به نام «انتیتی» که یک هوش مصنوعی قدرتمند است به دست افراد نادرست بیفتد. او در این راه با دشمنانی مواجه می‌‌شود که انتظار آن را نداشته است…",
        spiderman: "انیمیشن مرد عنکبوتی",
        spidermanDesc:
          "این اولین قسمت از دنباله دو قسمتی مرد عنکبوتی: به درون دنیای عنکبوتی (۲۰۱۸) است و در مولتی‌ورس مشترک از جهان‌های متناوب به نام «دنیای عنکبوتی» روایت می‌شود.",
        ahsokaDesc:
          "پس از سقوط امپراتوری کهکشان، آسوکا تانو، شوالیه سابق جدای، درباره تهدید تازه ای که متوجه یک کهکشان آسیب پذیر است تحقیق می کند.",
        ahsoka: "سریال آسوکا",
        retribution: "فیلم قصاص",
        equalizer: "فیلم اکولایزر 3",
        equalizerDesc:
          "رابرت مک کال خود را در خانه خود در جنوب ایتالیا می بیند اما متوجه می شود که دوستانش تحت کنترل رؤسای جنایی محلی هستند. همانطور که وقایع مرگبار می شوند، مک کال می داند که باید چه کاری انجام دهد: با مقابله با مافیا، محافظ دوستانش شود.",
        oppenheimer: "فیلم اوپنهاینمر",
        oppenheimerDesc:
          "در فیلم اوپنهایمر : داستان این فیلم با تمرکز روی جولیوس رابرت اوپنهایمر، به ماجرای گروهی از دانشمندان پروژه‌ی منهتن می‌پردازد که بمب‌های اتم استفاده‌شده در شهرهای هیروشیما و ناکازاکی کشور ژاپن را برای ارتش آمریکا تولید کردند. تسلیم امپراطوری ژاپن در پی بمباران اتمی، به جنگ اقیانوس آرام خاتمه داد. اثر جدید نولان براساس کتاب «پرومته آمریکایی: پیروزی و تراژدی جی رابرت اوپنهایمر» نوشته‌ی کای برد و مارتین جی شروین فقید ساخته می‌شود.",
        meg2: "مگ 2 ( گودال )",
        meg2Desc:
          "در فیلم مگ 2 گودال : جوناس تیلور در حال تحقیق روی مگالودون (کوسه منقرض شده) جوانی است که با توجه به کمبود نسلش در اسارت نگهداری میشود. این کوسه نادر در مکانی بنام درازگودال ماریانا پیدا شده که بسیاری از افراد بدنبال کسب اطلاعات بیشتر در این زمینه هستند و...",
        transformers: "فیلم تبدیل شوندگان 7",
        transformersDesc:
          "داستان فیلم Transformers: Rise of the Beasts درباره شخصیتی پر اشتباه و آسیب پذیر است که در زندگی خود مرتکب اشتباهاتی شده و حالا تصمیم دارد تا با کمک کردن به اپتیموس پرایم این اشتباهات را جبران کند.",
        littleMermaid: "فیلم پری دریایی کوچولو",
        littleMermaidDesc:
          "آریل، یک پری دریایی جوان، با یک جادوگر دریایی معامله می‌کند: صدای زیبایش در مقابل پاهای انسانی تا بتواند دنیای بالای آب را کشف کند.",
        elmental: "انیمیشن المنتال",
        elmentalDesc:
          "انیمیشن Elemental امبر و وید را دنبال می کند، در شهری که ساکنان آتش، آب، زمین و هوا با هم زندگی می کنند.",
        flash: "فیلم فلش",
        flashDesc:
          "در فیلم The Flash بری آلن برای نجات جان مادر خود به گذشته سفر می‌کند و این کار او باعث تغییرات ناخواسته ای در جدول زمانی می‌شود...",
        exteraction2: "فیلم استخراج 2",
        exteraction2Desc:
          "پس از اینکه در فیلم اول مرده فرض می‌شود، تایلر راک، مزدور بلک آپ برای یک مأموریت پرمخاطره دیگر بازمی‌گردد...",
        coldHearted: "فیلم سنگ دل",
        coldHeartedDesc:
          "ریچل استون، مامور اطلاعاتی یک آژانس بین‌المللی است که باید ماموریت خطرناکی را برای محافظت از یک سلاح مرموز که با نام قلب شناخته می‌شود، آغاز کند. حال ریچل استون وظیفه دارد تا این سلاح را از افتادن به دست دشمن در امان نگه دارد و…",
        topMovie: "فیلم برتر",
        topContent: "مطالب برگزیده",
        download: "دانلود",
        comingSoon: "بزودی",
        lastestMovies: "آخرین فیلم ها",
        joker2: "فیلم جوکر 2",
        generalV: "فیلم ژنرال V",
        aHuntingInVenice: "فیلم a Hunting In Venice",
        sawX: "فیلم اره X",
        promisedLand: "فیلم سرزمین موعود",
        reptile: "فیلم خزنده",
        marvels: "فیلم مارول ها",
        director: "کارگردان",
        actors: "بازیگران :",
        action: "اکشن , ماجراجویی",
        scary: "ترسناک , رازآلود",
        biography: "بیوگرافی",
        trailer: "تیزر",
        aCommentFrom: "یک نظر از ",
        usersComments: "نظرات کاربران"
      },
    },
    en: {
      translation: {
        UnlimitedMoviesTitle: "Ultimated movies, TV shows, and more ...",
        WatchAnywhereAnytime: "Watch anywhere, anytime...",
        WatchAnywhereAnytimeDesc:
          "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV",
        ReadyToWatch: "Ready to watch !?",
        GetStarted: "Get Started",
        EnjoyOnYourTv: "Enjoy on your TV",
        EnjoyOnYourTvDesc:
          "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more",
        ProfileForKids: "Create profiles for kids",
        ProfileForKidsDesc:
          "Send kids on adventures with their favorite characters in a space made just for them—free with your membership",
        DownloadAndSeeOffline: "Download your shows to watch offline",
        DownloadAndSeeOfflineDesc: "It is free",
        FrequentlyAskedQuestions: "Frequently Asked Questions",
        AboutMovieCity: "About Movie City",
        AboutMovieCityDesc:
          "Movie City is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. You can watch as much as you want, whenever you want – all for one low monthly price. There is always something new to discover and new TV shows and movies are added every week!",
        WhereCanIWatch: "Where can i watch?",
        WhereCanIWatchDesc:
          "Watch anywhere, anytime including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you are on the go and without an internet connection. Take Movie City with you anywhere.",
        IsMovieCityGoodForKids: "Is Movie City good for kids?",
        IsMovieCityGoodForKidsDesc:
          "Yes, all site content has been reviewed :))) ",
        RevisedSiteContent:
          "The content provided in Movie City has been reviewed.",
        myNumber: "Number : +989222365685",
        material:
          "All material and moral rights of this site belong to Hossein Mahmoudi",
        email: "Email : hoseinmdev@gmail.com",
        theNun2: "The Nun 2 2023",
        theNun2Desc:
          "A priest is murdered. An evil is spreading. The sequel to the worldwide hit follows Sister Irene as she once again encounters Valak, the evil nun.",
        jawan: "Jawan 2023",
        jawanDesc:
          "A common man is punished for a mistake he did not commit. How does the false event affect him and how does he fix it? How did he overcome those who put him in this problem?",

        missionImbossible7: "The movie Mission Impossible 7 - Death Diary",
        missionImbossible7Desc:
          " In the film Mission Impossible 7: Ethan Hunt gets a mission from the MIF to prevent a mysterious technology called Entity, which is a powerful artificial intelligence, from falling into the wrong hands. In this way, he encounters enemies that he did not expect...",
        spiderman: " Spider-Man: Across the Spider-Verse 2023 ",
        spidermanDesc: `spidermanDesc:"This is the first episode of the two-part sequel to Spider-Man: Into the Spider-Verse (2018) and is set in a shared multiverse of alternate universes called Spider-Man.`,

        ahsoka: "Ahsoka 2023",
        ahsokaDesc:
          "After the fall of the Galactic Empire, former Jedi Knight Asuka Tano investigates a new threat to a vulnerable galaxy.",
        retribution: "Retribution 2023",
        equalizer: "The Equalizer 3 2023",
        equalizerDesc:
          "Robert McCall finds himself at home in southern Italy, only to discover that his friends are under the control of local crime bosses. As events turn deadly, McCall knows what he must do: protect his friends by taking on the mafia.",
        oppenheimer: "Oppenheimer 2023",
        oppenheimerDesc: `In the movie Oppenheimer: The story of this movie, focusing on Julius Robert Oppenheimer, deals with the story of a group of Manhattan Project scientists who produced the atomic bombs used in the cities of Hiroshima and Nagasaki in Japan for the US Army. Surrender of the Japanese Empire after the atomic bombing ended the Pacific War. Nolan's new work is based on the book "American Prometheus: The Triumph and Tragedy of J. Robert Oppenheimer" by Kai Byrd and the late Martin J. Sherwin.`,

        meg2: "The Meg 2 2023",
        meg2Desc:
          "In the movie Mag 2 Pit: Jonas Taylor is researching a young megalodon (extinct shark) that is kept in captivity due to the lack of its generation. This rare shark was found in a place called the Mariana Trench, where many people are looking for more information in this field and...",

        transformers: "Transformers 7 2023",
        transformersDesc:
          "The story of Transformers: Rise of the Beasts is about a flawed and vulnerable character who has made mistakes in his life and now decides to make amends by helping Optimus Prime.",
        littleMermaidDesc:
          "Ariel, a young mermaid, trades a sea witch: his beautiful voice for human feet so he can explore the world above water.",
        littleMermaid: "Little Mermaid 2023",
        elmental: "Elmental 2023",
        elmentalDesc:
          "Elemental Animation follows Ember and Wade, in a city where the inhabitants of fire, water, earth and air live together.",
        flash: "Flash 2023",
        flashDesc:
          "In The Flash, Barry Allen travels back in time to save his mother's life, and his work causes unwanted changes in the timeline...",
        exteraction2: "Exteraction 2 2023",
        exteraction2Desc:
          "After being presumed dead in the first film, Black Ops mercenary Tyler Rock returns for another dangerous mission...",
        coldHearted: "Cold Hearted 2023",
        coldHeartedDesc:
          "Rachel Stone is an intelligence agent for an international agency who must embark on a dangerous mission to protect a mysterious weapon known as the Heart. Now, Rachel Stone has the duty to protect this weapon from falling into the hands of the enemy and...",
        topMovie: "Top Movie",
        topContent: "Top Content",
        download: "Download",
        comingSoon: "Coming Soon",
        lastestMovies: "Latest Movies",
        joker2: "Joker 2 2023",
        generalV: "Gen V 2023",
        aHuntingInVenice: "a Hunting In Venice 2023",
        sawX: "Saw X 2023",
        promisedLand: "Promised Land 2023",
        reptile: "Reptile 2023",
        marvels: "Marvels 2023",
        director: "Director",
        actors: "Actors : ",
        action: "Action",
        scary: "Scary",
        biography: "Biography",
        trailer: "Trailer",
        aCommentFrom: "A comment from ",
        usersComments: "Users Comments",
      },
    },
  },
});

export default i18n;
