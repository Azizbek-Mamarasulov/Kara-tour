interface ContentData {
  image: string;
  title: string;
  description: string[];
}

interface Referance {
  reference: {
    title: string;
    link: string;
  };
  licenseReference: {
    title: string;
    link: string;
  };
}

interface Location {
  latitude: number;
  longitude: number;
}

export interface Data {
  id: number;
  title: string;
  image: string;
  content: ContentData[];
  location: Location;
  reference: Referance;
  rating: number;
}

export const places: Data[] = [
  {
    id: 1,
    title: "Ayaz qala",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Ayaz-Kala-2.jpg/960px-Ayaz-Kala-2.jpg",
    content: [
      {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Ayaz-Kala_01.jpg/960px-Ayaz-Kala_01.jpg",
        title: "Ayaz qala 1",
        description: [
          "Ayaz Qalʼa 1 — miloddan avvalgi 4-asr oxiri yoki 3-asr boshlariga taalluqli qalʼadir. Shu davrda Xorazm Forslardan mustaqil bo‘lgan edi. Ayaz Qalʼa 1 qishloq xo‘jaligi joylashgan hududlarni ko‘chmanchi bosqinchilaridan himoya qilish uchun qurilgan qal’alar zanjirining bir qismi bo‘lgan. Qalʼa balandligi taxminan 100 metr bo‘lgan tepalik ustida joylashgan bo‘lib, atrofdagi tekisliklarga keng ko‘rinish beradi. Qalʼaning reja shakli to‘rtburchak bo‘lib, tomonlari 182 va 152 metrni tashkil etadi. Uning asosiy o‘qi janubdan shimolga qarab yo‘naltirilgan.",
          "Janubiy oxirida to‘rtburchak kirish eshigi joylashgan bo‘lib, bu Xorazm chegarasidagi qal’alarda keng tarqalgan element hisoblanadi. Dushmanlar kirish yo‘li janubi-sharq devorlariga parallel keladi va bosqinchi yuqoridan hujumga moyil edi. Ikkita to‘rtburchak minoralar bilan himoyalangan katta kirish eshigi kichik to‘rtburchak xonaga olib boradi. Ushbu xona atrofidan baland devorlar joylashgan bo‘lib, agar birinchi eshik buzilsa, o‘qchilar dushmanga yuqoridan o‘q otishi mumkin edi.",
        ],
      },
      {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Ayaz-Kala-2.jpg/960px-Ayaz-Kala-2.jpg",
        title: "Ayaz qala 2",
        description: [
          "Ayaz Qalʼa 2 — milodiy 6–8-asrlarga oid, Afrigʻiylar davrida qurilgan feodal qal'adir. U Ayaz Qalʼa 1 ning janubi-gʻarbida joylashgan, balandligi taxminan 40 metr boʻlgan konus shaklidagi tepalik ustiga qurilgan. Qalʼaning kirish qismi janubi-gʻarbiy tomonda joylashgan boʻlib, asosiy binosi yumaloq shaklda qurilgan.",
          "6–8-asrlarda Xorazmda Afrigʻiylar sulolasi hukmronlik qilgan. Shu davrda “dehqonlar” deb ataluvchi yangi feodal yer egalari sinfi shakllangan. Ular qadimgi zodagonlar, saroy aʼzolari yoki harbiy xizmatlari uchun mukofotlangan askarlar avlodidan bo‘lgan. Ularning qishloq xo‘jaligi mulklari “rustoq” deb atalgan. Dehqonlar “donjon” — kichik kvadrat shakldagi, mudofaa devori bilan o‘ralgan qal’alarda yashagan. Bunday qal’alardan biri — Yakkaparson, Ayaz Qalʼadan 10 km janubda joylashgan.",
          "Ayaz Qalʼa 2 pahsa (xom loy qorishmasi) asosida to‘rtburchak loy g‘ishtlardan qurilgan. Tashqi devorlarining yuqori qismlari tishli bezaklar (merlonlar) bilan bezatilgan, pastki qismlari esa mudofaa devori va o‘qlar uchun teshiklar bilan mustahkamlangan. Qalʼaning janubiy tomonida 50 metr uzunlikdagi odam qo‘li bilan qurilgan nishab zinapoya mavjud edi.",
          "Asosiy bino saroy sifatida foydalanilgan bo‘lib, yashash xonalari, ko‘p ustunli marosim zallari va devoriy rasmlar bilan bezatilgan olov maʼbadi mavjud bo‘lgan. Bu inshoot, ehtimol, Xorazmshohga sodiq bo‘lgan feodal zodagonning qarorgohi bo‘lgan. Binoning o‘zi milodiy 4-asrda qurilgan va ikki marta yong‘in natijasida vayron bo‘lgan. Biroq saroy 6–7-asrlarda ham yashash uchun foydalanilgan. Qalʼaning etagida keng shahar majmuasi joylashgan bo‘lgan.",
        ],
      },
      {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/UZ_Ayaz_Kale_a3.jpg/960px-UZ_Ayaz_Kale_a3.jpg",
        title: "Ayaz qala 3",
        description: [
          "Qalʼa 3 - milodiy 1–2-asrlarga taalluqli mustahkamlangan garnizon hisoblanadi. Shimoli-sharqiy burchakdagi yirik bino miloddan avvalgi 5- yoki 4-asrlarda qurilgan bo‘lishi mumkin. Hudud maydoni taxminan 5 gektarni tashkil etadi.",
          "Ayaz Qalʼa 3 ning mudofaa devori Karakalpakistondagi eng katta qal’alardan biridir. U Ayaz Qalʼa 1 dan 66 foiz katta. Qalʼa parallelogram shaklida bo‘lib, tomonlari 260 va 180 metr uzunlikda. Tashqi devorining tuzilishi Ayaz Qalʼa 1 ga o‘xshash. Tashqi devorlarining qalinligi 7,5 metr. Aylana shaklidagi kuzatuv minoralari 8 metr o‘lchamda. Qalʼa pastki qismlari pahsa (xom loy aralashmasi), yuqori qismlari esa g‘ishtdan qurilgan. Kirish g‘arbiy tomonda joylashgan bo‘lib, tashqi devorning S shaklidagi cho‘zilishi orqali amalga oshiriladi. Qal’aning ichki qismi bo‘sh.",
          "Shimoli-sharqiy burchakdagi yirik binolar maydoni 2,400 m² ni tashkil etadi. Bu bino 40 xonaga bo‘lingan bo‘lib, ularni 2 ta markaziy koridor 4 guruhga ajratadi. Binolar atrofida tor koridor qoldiqlari mavjud. Janub va sharq devorlarida 2×2 metr o‘lchamdagi to‘rtburchak kuzatuv minoralari joylashgan.",
          "Ayaz Qalʼa 3 ning Kushon davrida garnizon yoki mahalliy dehqonlarning boshpana joyi sifatida ishlatilgani taxmin qilinadi. Shuningdek, Ayaz Qalʼa 1 kichik harbiy post sifatida foydalanilgan bo‘lishi mumkin.",
        ],
      },
    ],
    location: {
      latitude: 42.0108375,
      longitude: 61.0271719,
    },
    reference: {
      reference: {
        title: "Ushbu ma'lumot wikipediadan tarjima qilingan",
        link: "https://en.wikipedia.org/wiki/Ayaz-Kala",
      },
      licenseReference: {
        title: "Creative Commons Attribution-ShareAlike 4.0 International",
        link: "https://creativecommons.org/licenses/by-sa/4.0/",
      },
    },
    rating: 5,
  },
  {
    id: 2,
    title: "Qizil Qal’a",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Kyzyl-Kala_fortress%2C_1st_century_CE.jpg/800px-Kyzyl-Kala_fortress%2C_1st_century_CE.jpg",
    content: [
      {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Kyzyl-Kala_fortress%2C_1st_century_CE.jpg/800px-Kyzyl-Kala_fortress%2C_1st_century_CE.jpg",
        title: "Qizil Qal’a",
        description: [
          `Qizil Qal’a (Qizil Qal’a deb ham ataladi) – hozirgi Qoraqalpog‘istonda joylashgan qadimgi Chorasmiy qal’asidir. Qal’a milodiy 1–4-asrlarda qurilgan. Qizil Qal’a kichikroq qal’a bo‘lib, Toproq Qal’aga yaqin, taxminan 1 km g‘arbda joylashgan. U ehtimol Toproq Qal’ani himoya qilish uchun qurilgan. Qizil Qal’a 12-asrda bir marta qayta tiklangan. Yaqinda qal’a asl ko‘rinishini ko‘rsatish maqsadida zamonaviy restavratsiya dasturi asosida tiklangan. Bu inshoot hozirgi O‘zbekiston hududidagi "Ellik qal’a vohasi"ning bir qismidir. Qizil Qal’a Xorazmshohlar davlati hukmdori Muhammad II tomonidan so‘nggi bor egallangan, undan so‘ng esa u Mo‘g‘ullar tomonidan bosib olingan.`,
        ],
      },
    ],
    location: {
      latitude: 41.930028,
      longitude: 60.784111,
    },
    reference: {
      reference: {
        title: "Ushbu ma'lumot wikipediadan tarjima qilingan",
        link: "https://en.wikipedia.org/wiki/Kyzyl-Kala",
      },
      licenseReference: {
        title: "Creative Commons Attribution-ShareAlike 4.0 International",
        link: "https://creativecommons.org/licenses/by-sa/4.0/",
      },
    },
    rating: 5,
  },
  {
    id: 3,
    title: "Chilpik",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Karakalpakstan_Chilpyk_Tower_of_Silence_%28dakhma%29_1st_cent_BCE-1st_cent_CE_Zoroastrian_%284%29.jpg/960px-Karakalpakstan_Chilpyk_Tower_of_Silence_%28dakhma%29_1st_cent_BCE-1st_cent_CE_Zoroastrian_%284%29.jpg",
    content: [
      {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Karakalpakstan_Chilpyk_Tower_of_Silence_%28dakhma%29_1st_cent_BCE-1st_cent_CE_Zoroastrian_%284%29.jpg/960px-Karakalpakstan_Chilpyk_Tower_of_Silence_%28dakhma%29_1st_cent_BCE-1st_cent_CE_Zoroastrian_%284%29.jpg",
        title: "Chilpik",
        description: [
          "Chilpiq Dahmasi – bu balandligi 15 metr, diametri 65 metr bo‘lgan halqasimon inshoot bo‘lib, balandligi 35 metr bo‘lgan tabiiy konussimon tepalik tepasida joylashgan. Uning devorlari antik davrga xos bo‘lgan paxsa g‘ishtlardan qurilgan bo‘lib, pastki qismida qalinligi 5 metrni, yuqori qismida esa 2–3 metrni tashkil etadi.",
          "Devor perimetri bo‘ylab sufa joylashgan bo‘lib, bu yerda marhumlar poklanish uchun yotqizilgan. Zardushtiylikda suv va yerning najaslanishini oldini olish uchun jasadlar qushlar (ayniqsa, yirtqich qushlar) va quyosh nurlari tasiri ostida yo‘q bo‘lishi uchun ochiq holda qoldirilgan. Go‘shtsiz qolgan suyaklar esa ossuariy (suyak saqlash idishlari) ichiga yig‘ilgan va tepalik yon bag‘riga yoki ichki markazdan quyosh nurlaridek yon tomonlarga ketgan naus deb ataluvchi maxsus qabrxonalarga ko‘milgan.",
          "Inshootga kirish g‘arbiy-shimoliy tomonda joylashgan bo‘lib, bu yerda qadimiy darvoza va Amudaryo tomonga qarab tushuvchi loy zinapoyaning (taxminan 20 metr) izlari saqlanib qolgan. Ushbu rampali yo‘laklar daryoning g‘arbiy sohili bilan bog‘langan. Zardushtiy kosmologiyada quyosh botadigan yo‘nalish – g‘arb – o‘lim bilan bog‘liq deb qaralgan. Shu sababli zinapoya va unga ulangan poydevor tepalikning aynan g‘arbiy tomonida qurilgan bo‘lishi ehtimol.",
          "Chilpiqning o‘ziga xos jihati — bu yerda topilgan ossuariylar sonining nisbatan ozligi. Bu holat tadqiqotchilar – S. P. Tolstov va Yu. P. Manilov – da Chilpiq «podshoh dahmasi» bo‘lgan, ya’ni bu yerda faqat qadimgi Xorazm hukmdorlarining jasadlari zardushtiy marosimlar asosida qushlarga tashlab yuborilgan degan fikrni ilgari surishga sabab bo‘lgan.",
          "Shuningdek, qazilmalar davomida turli asrlarga oid murakkab geometrik shakllarda, qiyshaygan holda chizilgan qadimiy yozuvlar ham topilgan.",
        ],
      },
    ],
    location: {
      latitude: 42.2642403,
      longitude: 60.0697723,
    },
    reference: {
      reference: {
        title: "Ushbu ma'lumot wikipediadan tarjima qilingan",
        link: "https://ru.wikipedia.org/wiki/%D0%A7%D0%B8%D0%BB%D0%BF%D1%8B%D0%BA",
      },
      licenseReference: {
        title: "Creative Commons Attribution-ShareAlike 4.0 International",
        link: "https://creativecommons.org/licenses/by-sa/4.0/",
      },
    },
    rating: 5,
  },
  {
    id: 4,
    title: "Mizdarxon",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Mizdarkhan.jpg/500px-Mizdarkhan.jpg",
    content: [
      {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Mizdarkhan.jpg/500px-Mizdarkhan.jpg",
        title: "Mizdarxon",
        description: [
          "Mizdarkhan yodgorliklar majmuasi Xo‘jayli (yoki Xo‘jeyli) qishlog‘i yaqinidagi uchta tepalikda joylashgan. Bu yerda devorlarining qalinligi 10 metrga yetgan qadimiy qal’a qoldiqlari mavjud bo‘lib, bu shahar bir paytlar qanday gullab-yashnagan va mustahkam himoyalangan bo‘lganini yaqqol tasavvur etishga imkon beradi. Qal’a ichida ikki muhim inshoot – olov ma’badi va saroy xarobalari saqlanib qolgan.",
          `Qal’aga qarama-qarshi tepalikda asl zardushtiy qabristoni joylashgan. Zardushtiylar musulmonlardan farqli ravishda o‘liklarni ko‘mishmagan – jasadlar maxsus tekis tomli "daxma" deb ataladigan minoralarga qo‘yilib, qushlar tomonidan yeb ketilishi uchun qoldirilgan. Keyin esa tozalangan suyaklar maxsus idishlarga – ossuariylarga joylanib, saqlangan. Bu yerda shunday ossuariylar topilgan.`,
          "Mizdarkhanning g‘arbiy chekkasida, 11-asrga oid Yusuf Eshan maqbarasi va o‘rta asrlarga oid boshqa yirik maqbaralar joylashgan. Bu maqbaralar musulmonlar qabristoni hisoblanadi. Ayrim maqbaralar go‘zal naqshinkor plitkalar bilan bezatilgan.",
        ],
      },
    ],
    location: {
      latitude: 42.4014462,
      longitude: 59.3890818,
    },
    reference: {
      reference: {
        title: "Ushbu ma'lumot wikipediadan tarjima qilingan",
        link: "https://en.wikipedia.org/wiki/Mizdarkhan",
      },
      licenseReference: {
        title: "Creative Commons Attribution-ShareAlike 4.0 International",
        link: "https://creativecommons.org/licenses/by-sa/4.0/",
      },
    },
    rating: 5,
  },
];
