import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "fa",
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
        myNumber: "شماره تماس : +989222365685",
        material:
          "تمامی حقوق مادی و معنوی این سایت متعلق به حسین محمودی میباشد",
        email: "ایمیل : hoseinmdev@gmail.com",
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
        myNumber: "Number : +989222365685",
        material:
          "All material and moral rights of this site belong to Hossein Mahmoudi",
        email: "Email : hoseinmdev@gmail.com",
      },
    },
  },
});

export default i18n;
