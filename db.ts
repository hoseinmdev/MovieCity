export interface MoviePropTypes {
  _id: string;
  imageUrl: string;
  backgroundImageUrl?: string;
  homePageImageUrl?: string;
  movieName: string;
  director?: string;
  genre?: string;
  description?: string;
  imdbScore: number;
  popularity: number;
  top?: boolean;
  new?: boolean;
  actors?: { name: string; imageUrl: string }[];
  comments?: { sender: string; text: string }[];
  downloadLinks?: { quality: number; size: number; link: string }[];
  trailer?:string
}

const allMovies = [
  // TOP
  {
    id: "dsdsdad3qwedasfsagfeadsaf",
    movieName: `jawan`,
    trailer: "https://trailer.uptvs.com/trailer/Jawan Trailer.mp4",
    actors: [
      {
        name: "Shahrukh Khan",
        imageUrl:
          "https://m.media-amazon.com/images/M/MV5BZDk1ZmU0NGYtMzQ2Yi00N2NjLTkyNWEtZWE2NTU4NTJiZGUzXkEyXkFqcGdeQXVyMTExNDQ2MTI@._V1_.jpg",
      },
      {
        name: "Nayanthara ",
        imageUrl:
          "https://images.firstpost.com/wp-content/uploads/2023/04/yamiga.jpg?impolicy=website&width=320&height=180",
      },
      {
        name: "Vijay Sethupathi",
        imageUrl:
          "https://in.bmscdn.com/iedb/artist/images/website/poster/large/vijay-sethupathi-32355-16-09-2017-03-30-38.jpg",
      },
    ],
    comments: [
      { sender: "sorena", text: "greatCommentText" },
      { sender: "kamran", text: "goodCommentText" },
      { sender: "sam", text: "soSoCommentText" },
      { sender: "iliya", text: "badCommentText" },
    ],
    downloadLinks: [
      {
        quality: 720,
        size: 1300,
        link: "https://uptv.upera.tv/2932379-0-720.mp4?ref=7xk&uptv=1696244549",
      },
      {
        quality: 480,
        size: 924,
        link: "https://uptv.upera.tv/2932379-0-480.mp4?ref=7xk&uptv=1696244549",
      },
    ],
    genre: "action",
    description: "jawanDesc",
    homePageImageUrl:
      "https://www.uptvs.com/wp-contents/uploads/2023/09/Jawan-2023-Header.jpg",
    imdbScore: 9,
    imageUrl: "https://filmr.ir/wp-content/uploads/2023/04/JAWAN-poster.jpg",
    backgroundImageUrl:
      "https://filmr.ir/wp-content/uploads/2023/04/JAWAN-cover.jpg",
    popularity: 87,
    top: true,
    new: true,
  },
  {
    id: "dsdsdad3qwedeqweqweqwasfsagfeadsaf",
    movieName: `theNun2`,
    trailer: "https://trailer.uptvs.com/trailer/THE-NUN-II-2023-Trailer.mp4",
    genre: "scary",
    actors: [
      {
        name: "Bonnie Aarons",
        imageUrl:
          "https://q9c3t4p4.rocketcdn.me/wp-content/uploads/2021/04/jakobs-wife-bonnie-aarons.png",
      },
      {
        name: "Storm Reid ",
        imageUrl:
          "https://images.mubicdn.net/images/cast_member/405582/cache-269680-1607108879/image-w856.jpg?size=800x",
      },
    ],
    downloadLinks: [
      {
        quality: 720,
        size: 1000,
        link: "https://uptv.upera.tv/2932354-0-720.mp4?ref=7xk&uptv=1696247829",
      },
      {
        quality: 480,
        size: 705,
        link: "https://uptv.upera.tv/2932354-0-480.mp4?ref=7xk&uptv=1696247829",
      },
    ],
    comments: [
      { sender: "sorena", text: "greatCommentText" },
      { sender: "kamran", text: "goodCommentText" },
      { sender: "sam", text: "soSoCommentText" },
      { sender: "iliya", text: "badCommentText" },
    ],
    description: "theNun2Desc",
    director: "Michael Chaves",
    imdbScore: 9,
    imageUrl:
      "https://filmr.ir/wp-content/uploads/2022/09/The-Nun-2-poster-filmr.jpg",
    homePageImageUrl:
      "https://www.uptvs.com/wp-contents/uploads/2023/09/The-Nun-2-2023-Header.jpg",
    backgroundImageUrl:
      "https://filmr.ir/wp-content/uploads/2022/09/The-Nun-2-cover-filmr.jpg",
    popularity: 87,
    top: true,
    new: true,
  },
  {
    id: "dsdsdad3qwedeeqweqwsfsagfeadsaf",
    movieName: `ahsoka`,
    genre: "action",
    trailer: "https://trailer.uptvs.com/trailer/Ahsoka-2023-Trailer.mp4",
    downloadLinks: [],
    actors: [
      {
        name: "David Tennant",
        imageUrl:
          "https://i.guim.co.uk/img/static/sys-images/Guardian/About/General/2011/8/16/1313494479736/David-Tennant--008.jpg?width=465&dpr=1&s=none",
      },
      {
        name: "Diana Lee Inosanto",
        imageUrl:
          "https://static.wikia.nocookie.net/marvelmovies/images/d/db/Diana_Lee_Inosanto.jpg/revision/latest?cb=20230125210123",
      },
      {
        name: " Eman Esfandi",
        imageUrl:
          "https://static.wikia.nocookie.net/starwars/images/1/15/EmanEsfandi.jpg/revision/latest?cb=20230409175106",
      },
    ],
    comments: [
      { sender: "sorena", text: "greatCommentText" },
      { sender: "kamran", text: "goodCommentText" },
      { sender: "sam", text: "soSoCommentText" },
      { sender: "iliya", text: "badCommentText" },
    ],
    director: "Bryan Woods",
    description: "ahsokaDesc",
    imdbScore: 8,
    imageUrl:
      "https://lumiere-a.akamaihd.net/v1/images/p_disneyplusoriginals_ahsoka_midseason_1784_v1_935ef8b2.jpeg",
    backgroundImageUrl:
      "https://ntvb.tmsimg.com/assets/p24938637_b_h8_ab.jpg?w=960&h=540",
    homePageImageUrl:
      "https://ntvb.tmsimg.com/assets/p24938637_b_h8_ab.jpg?w=960&h=540",
    popularity: 87,
    top: true,
    new: true,
  },
  {
    id: "dsdsdad3qwedeqweqweqwasfsagfeadsafqeqw",
    movieName: `equalizer`,
    trailer:
      "https://trailer.uptvs.com/trailer/THE-EQUALIZER-3-2023-Trailer.mp4",

    actors: [
      {
        name: "Andrea Dodero",
        imageUrl:
          "https://blackewhite.com/wp-content/uploads/2022/05/ANDREA-DODERO-8004_640x640_acf_cropped.jpg",
      },
      {
        name: "Andrea Scarduzio",
        imageUrl:
          "https://m.media-amazon.com/images/M/MV5BOTA3MWZjNjAtZDIwYi00Mzc1LWE1NzItNDQ5ZDg4NmY4ZTg4XkEyXkFqcGdeQXVyMTI5MzU2Njg@._V1_.jpg",
      },
    ],
    downloadLinks: [
      {
        quality: 720,
        size: 1100,
        link: "https://naabmovie.metafilm.ir/content/download/4fa2e51a-0641-4a15-b682-48f68e9bea89/e6c8db0c-e38f-46de-ab81-36f8ee4b4f98/HD720",
      },
      {
        quality: 480,
        size: 669,
        link: "https://naabmovie.metafilm.ir/content/download/4fa2e51a-0641-4a15-b682-48f68e9bea89/e6c8db0c-e38f-46de-ab81-36f8ee4b4f98/HD480",
      },
    ],
    comments: [
      { sender: "sorena", text: "greatCommentText" },
      { sender: "kamran", text: "goodCommentText" },
      { sender: "sam", text: "soSoCommentText" },
      { sender: "iliya", text: "badCommentText" },
    ],
    director: "Antoine Fuqua",
    description: "equalizerDesc",
    genre: "action",
    imdbScore: 7,
    imageUrl:
      "https://filmr.ir/wp-content/uploads/2022/07/The-Equalizer-3-poster.jpg",
    backgroundImageUrl:
      "https://filmr.ir/wp-content/uploads/2022/07/The-Equalizer-3-cover.jpg",
    homePageImageUrl:
      "https://www.hindustantimes.com/ht-img/img/2023/09/15/550x309/Screenshot_2023-09-15_191633_1694785633032_1694785640984.png",
    popularity: 87,
    top: true,
    new: true,
  },
  {
    id: "dsdsdad3qeqwewqeqwdsadsadasd",
    movieName: `oppenheimer`,
    trailer: "https://trailer.uptvs.com/trailer/Oppenheimer-2023-Trailer.mp4",
    genre: "biography",
    actors: [
      {
        name: "casey affleck",
        imageUrl:
          "https://m.media-amazon.com/images/M/MV5BZjg5ZWM2ZTYtOGM1Yi00NzY4LThlMDctMWM4NTdlYTRhODRhXkEyXkFqcGdeQXVyMTYzOTczNTY5._V1_.jpg",
      },
      {
        name: "cillian murphy",
        imageUrl:
          "https://cdn.britannica.com/10/215010-050-A44F9280/Irish-actor-Cillian-Murphy-2017.jpg",
      },
      {
        name: "David Dastmalchian",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/8/8e/David_Dastmalchian_by_Gage_Skidmore.jpg",
      },
    ],
    downloadLinks: [
      {
        quality: 720,
        size: 1600,
        link: "https://naabmovie.metafilm.ir/content/download/4fa2e51a-0641-4a15-b682-48f68e9bea89/7476e3e7-8715-4c07-8f49-941340bdcc74/HD720",
      },
      {
        quality: 480,
        size: 922,
        link: "https://naabmovie.metafilm.ir/content/download/4fa2e51a-0641-4a15-b682-48f68e9bea89/7476e3e7-8715-4c07-8f49-941340bdcc74/HD480",
      },
    ],
    comments: [
      { sender: "sorena", text: "greatCommentText" },
      { sender: "kamran", text: "goodCommentText" },
      { sender: "sam", text: "soSoCommentText" },
      { sender: "iliya", text: "badCommentText" },
    ],
    description: "oppenheimerDesc",
    director: "Christopher Nolan",
    imageUrl:
      "https://filmr.ir/wp-content/uploads/2021/12/Oppenheimer-poster-min.jpg",
    backgroundImageUrl:
      "https://filmr.ir/wp-content/uploads/2021/12/Oppenheimer-cover-min.jpg",
    imdbScore: 9,
    homePageImageUrl:
      "https://movies.universalpictures.com/media/06-opp-dm-mobile-banner-1080x745-now-pl-f01-071223-64bab982784c7-1.jpg",
    popularity: 87,
    top: true,
    new: true,
  },
  {
    id: "dsdsdad3qwvcxvcxweqweqwasfsagfeadsaf",
    movieName: `missionImbossible7`,

    actors: [
      {
        name: "Tom Cruise",
        imageUrl:
          "https://cdn.britannica.com/68/178268-050-5B4E7FB6/Tom-Cruise-2013.jpg",
      },
      {
        name: "Cary Elwes",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTemVJYu_kbiV-7l39CJn21-TkuAQZ-TyvACT2azn5VjtJ6l9yhgCQHAFc7bJ8NT43XK5Z41qqOWTiZ1Kk",
      },
      {
        name: "Charles Parnell",
        imageUrl:
          "https://static.wikia.nocookie.net/venturebrothers/images/8/8e/Charles_Parnell.png/revision/latest?cb=20210917030348",
      },
    ],
    trailer:
      "https://trailer.uptvs.com/trailer/Mission-Impossible-Dead-Reckoning-Part-One-Part-2-Trailer.mp4",
    downloadLinks: [
      {
        quality: 720,
        size: 1400,
        link: "https://naabmovie.metafilm.ir/content/download/4fa2e51a-0641-4a15-b682-48f68e9bea89/225790d5-3794-41e9-b6da-e8f07559a71a/HD720",
      },
      {
        quality: 480,
        size: 821,
        link: "https://naabmovie.metafilm.ir/content/download/4fa2e51a-0641-4a15-b682-48f68e9bea89/225790d5-3794-41e9-b6da-e8f07559a71a/HD480",
      },
    ],
    comments: [
      { sender: "sorena", text: "greatCommentText" },
      { sender: "kamran", text: "goodCommentText" },
      { sender: "sam", text: "soSoCommentText" },
      { sender: "iliya", text: "badCommentText" },
    ],
    director: "Christopher McQuarrie",
    description: "missionImbossible7Desc",
    imdbScore: 9,
    imageUrl: "https://filmr.ir/wp-content/uploads/2023/05/filmr-1.jpg",
    backgroundImageUrl:
      "https://filmr.ir/wp-content/uploads/2022/05/Mission-Impossible-Dead-Reckoning-Part-One-cover.jpg",
    homePageImageUrl:
      "https://www.thestatesman.com/wp-content/uploads/2023/07/IMG_4200.jpeg",
    popularity: 87,
    top: true,
    new: true,
  },
  {
    id: "d3qwedeqweqweqwasfsagfeadsaf",
    movieName: `spiderman`,
    trailer:
      "https://trailer.uptvs.com/trailer/SPIDER-MAN-Across-the-Spider-Verse-Trailer.mp4",

    actors: [
      {
        name: "Amandla Stenberg",
        imageUrl:
          "https://m.media-amazon.com/images/M/MV5BYTAyYmViNTctNjlmOS00ZTI0LWI0NzUtNDQyM2Q0N2ExYTMzXkEyXkFqcGdeQXVyMTE1MTYxNDAw._V1_FMjpg_UX1000_.jpg",
      },
      {
        name: "Andy Samberg",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Andy_Samberg.png/220px-Andy_Samberg.png",
      },
    ],
    downloadLinks: [
      {
        quality: 720,
        size: 1600,
        link: "https://naabmovie.metafilm.ir/content/download/4fa2e51a-0641-4a15-b682-48f68e9bea89/8c2bbded-dbbb-49ed-857d-176f793a115c/HD720",
      },
      {
        quality: 480,
        size: 964,
        link: "https://naabmovie.metafilm.ir/content/download/4fa2e51a-0641-4a15-b682-48f68e9bea89/8c2bbded-dbbb-49ed-857d-176f793a115c/HD480",
      },
    ],
    comments: [
      { sender: "sorena", text: "greatCommentText" },
      { sender: "kamran", text: "goodCommentText" },
      { sender: "sam", text: "soSoCommentText" },
      { sender: "iliya", text: "badCommentText" },
    ],
    director: "Joaquim Dos Santos",
    description: "spidermanDesc",
    imdbScore: 8,
    imageUrl:
      "https://filmr.ir/wp-content/uploads/2022/12/Spider-Man-Across-the-Spider-Verse-poster.jpg",
    backgroundImageUrl:
      "https://filmr.ir/wp-content/uploads/2020/12/Spider-Man-Into-the-Spider-Verse-2-cover.jpg",
    homePageImageUrl:
      "https://images.thedirect.com/media/article_full/spider-verse-2-trailer.jpg",
    popularity: 87,
    top: true,
    new: true,
  },
  {
    id: "dsdsdad3qwedeqw456456agfeadsaf",
    movieName: `meg2`,
    trailer:
      "https://trailer.uptvs.com/trailer/Meg%202-%20The%20Trench%202023%20trailer.mp4",
    genre: "action",
    actors: [
      {
        name: "Jason Statham",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIEGDOPlx8-r7-xMe1P04xHD9ffNTm4ChGTnm46OQqPNbBp3rYLfBYtQQuQSvzTDmirkKOqw&s=10",
      },
      {
        name: "Jing Wu",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT863e_76-_U7YyVD-j5LSir1uUYWub8A7JeD5VcqTyiQKjAfke",
      },
      {
        name: "Sienna Guillory",
        imageUrl: "https://flxt.tmsimg.com/assets/219662_v9_bb.jpg",
      },
    ],
    downloadLinks: [
      {
        quality: 720,
        size: 1200,
        link: "https://naabmovie.metafilm.ir/content/download/4fa2e51a-0641-4a15-b682-48f68e9bea89/f7d098b6-3679-47fc-b8d2-6e040bdc1162/HD720",
      },
      {
        quality: 480,
        size: 737,
        link: "https://naabmovie.metafilm.ir/content/download/4fa2e51a-0641-4a15-b682-48f68e9bea89/f7d098b6-3679-47fc-b8d2-6e040bdc1162/HD480",
      },
    ],
    comments: [
      { sender: "sorena", text: "greatCommentText" },
      { sender: "kamran", text: "goodCommentText" },
      { sender: "sam", text: "soSoCommentText" },
      { sender: "iliya", text: "badCommentText" },
    ],
    description: "meg2Desc",
    director: " Ben Wheatley",
    imdbScore: 7,
    imageUrl:
      "https://filmr.ir/wp-content/uploads/2023/01/The-Meg-2-The-Trench-poster.jpg",
    backgroundImageUrl:
      "https://filmr.ir/wp-content/uploads/2023/01/The-Meg-2-The-Trench-cover.jpg",
    homePageImageUrl: "https://www.megmovie.net/images/share.jpg",
    popularity: 87,
    top: true,
    new: true,
  },

  // Common
  {
    id: "dsdsdad3qwedeqw456456agfeadseqweqwaf",
    movieName: `transformers`,
    trailer:
      "https://trailer.uptvs.com/trailer/Transformers-Rise-of-the-Beasts-Trailer.mp4",
    director: "Steven Caple Jr",
    genre: "action",
    actors: [
      {
        name: "Anthony Ramos",
        imageUrl:
          "https://m.media-amazon.com/images/M/MV5BMmM5YjA4ZDktM2I1NC00ZWRhLThjMzItZGZhNTRlMTdkZGVkXkEyXkFqcGdeQXVyNTkyMTE5Nzg@._V1_FMjpg_UX1000_.jpg",
      },
      {
        name: "Dominique Fishback",
        imageUrl: "https://flxt.tmsimg.com/assets/865444_v9_bb.jpg",
      },
      {
        name: "Luna Lauren Velez",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYUYf1jmNvEo-gP7hQn3EumktohcqQI58I9g&usqp=CAU",
      },
    ],
    downloadLinks: [
      {
        quality: 720,
        size: 1200,
        link: "https://naabmovie.metafilm.ir/content/download/4fa2e51a-0641-4a15-b682-48f68e9bea89/79541974-6a55-402d-8a40-b90ee64044c0/HD720",
      },
      {
        quality: 480,
        size: 669,
        link: "https://naabmovie.metafilm.ir/content/download/4fa2e51a-0641-4a15-b682-48f68e9bea89/79541974-6a55-402d-8a40-b90ee64044c0/HD480",
      },
    ],
    comments: [
      { sender: "sorena", text: "greatCommentText" },
      { sender: "kamran", text: "goodCommentText" },
      { sender: "sam", text: "soSoCommentText" },
      { sender: "iliya", text: "badCommentText" },
    ],
    imdbScore: 6,
    description: "transformersDesc",
    imageUrl:
      "https://filmr.ir/wp-content/uploads/2022/01/Transformers-Rise-of-the-Beasts-poster.jpg",
    backgroundImageUrl:
      "https://filmr.ir/wp-content/uploads/2021/06/Transformers-Rise-of-the-Beasts-cover-min.jpg",
    popularity: 79,
  },
  {
    id: "dsdsdad3qwedeqw456456a321321gfeadseqweqwaf",
    movieName: `littleMermaid`,
    trailer:
      "https://trailer.uptvs.com/trailer/The%20Little%20Mermaid%202023%20Trailer.mp4",
    genre: "fantasy",
    actors: [
      {
        name: "Art Malik",
        imageUrl: "https://flxt.tmsimg.com/assets/72476_v9_bb.jpg",
      },
      {
        name: "Awkwafina",
        imageUrl:
          "https://m.media-amazon.com/images/M/MV5BMTU0NTUwNjkyN15BMl5BanBnXkFtZTgwMjM0NzEzMTI@._V1_.jpg",
      },
    ],
    downloadLinks: [
      {
        quality: 720,
        size: 1200,
        link: "https://naabmovie.metafilm.ir/content/download/4fa2e51a-0641-4a15-b682-48f68e9bea89/47c37244-b5f6-4fc3-9834-6b599adc6b73/HSHD720",
      },
      {
        quality: 480,
        size: 657,
        link: "https://naabmovie.metafilm.ir/content/download/4fa2e51a-0641-4a15-b682-48f68e9bea89/47c37244-b5f6-4fc3-9834-6b599adc6b73/HSHD480",
      },
    ],
    comments: [
      { sender: "sorena", text: "greatCommentText" },
      { sender: "kamran", text: "goodCommentText" },
      { sender: "sam", text: "soSoCommentText" },
      { sender: "iliya", text: "badCommentText" },
    ],
    director: "Rob Marshall",
    description: "littleMermaidDesc",
    imdbScore: 7,
    imageUrl:
      "https://filmr.ir/wp-content/uploads/2023/03/The-Little-Mermaid-psoter.jpg",
    backgroundImageUrl:
      "https://filmr.ir/wp-content/uploads/2023/03/The-Little-Mermaid-cover.jpg",
    popularity: 85,
  },
  {
    id: "dsdsdad3qw2321321g321313feadseqweqwaf",
    movieName: `elmental`,
    genre: "fantasy",
    trailer: "https://trailer.uptvs.com/trailer/Elemental-2022-Trailer.mp4",
    actors: [
      {
        name: "Alex Kapp",
        imageUrl:
          "https://m.media-amazon.com/images/M/MV5BMTc4NDg4MDUzMl5BMl5BanBnXkFtZTYwODYyMDY3._V1_.jpg",
      },
      {
        name: "Ben Morris",
        imageUrl:
          "https://m.media-amazon.com/images/M/MV5BZWYzMGIwMDItNDcwMC00OTlkLWI3ZTgtMDg2YTk3ZGQ1MmVjXkEyXkFqcGdeQXVyMTMyMDYyNTA0._V1_FMjpg_UX1000_.jpg",
      },
    ],
    downloadLinks: [
      {
        quality: 720,
        size: 950,
        link: "https://naabmovie.metafilm.ir/content/download/4fa2e51a-0641-4a15-b682-48f68e9bea89/53adfb0c-e6ca-4fba-8b4f-790ca609a1b9/HD720",
      },
      {
        quality: 480,
        size: 527,
        link: "https://naabmovie.metafilm.ir/content/download/4fa2e51a-0641-4a15-b682-48f68e9bea89/53adfb0c-e6ca-4fba-8b4f-790ca609a1b9/HD480",
      },
    ],
    comments: [
      { sender: "sorena", text: "greatCommentText" },
      { sender: "kamran", text: "goodCommentText" },
      { sender: "sam", text: "soSoCommentText" },
      { sender: "iliya", text: "badCommentText" },
    ],
    director: "Peter Sohn",
    description: "elmentalDesc",
    imdbScore: 7,
    imageUrl:
      "https://filmr.ir/wp-content/uploads/2023/03/Elemental-poster.jpg",
    backgroundImageUrl:
      "https://filmr.ir/wp-content/uploads/2022/06/Elemental-cover-filmr.jpg",
    popularity: 86,
  },
  {
    id: "d78978998qw2321321g321313feadseqweqwaf",
    movieName: `flash`,
    trailer: "https://trailer.uptvs.com/trailer/The-Flash-2023Trailer.mp4",
    downloadLinks: [
      {
        quality: 720,
        size: 1400,
        link: "https://naabmovie.metafilm.ir/content/download/4fa2e51a-0641-4a15-b682-48f68e9bea89/a4d1abca-7aa0-4187-a4bb-961334c9168b/HD720",
      },
      {
        quality: 480,
        size: 773,
        link: "https://naabmovie.metafilm.ir/content/download/4fa2e51a-0641-4a15-b682-48f68e9bea89/a4d1abca-7aa0-4187-a4bb-961334c9168b/HD480",
      },
    ],
    genre: "action",
    actors: [
      {
        name: "Antje Traue",
        imageUrl:
          "https://static.wikia.nocookie.net/newdcmovieuniverse/images/6/6b/Antje_Traue_1280027223.jpg/revision/latest/scale-to-width-down/640?cb=20110507222404",
      },
      {
        name: "Ben Affleck",
        imageUrl:
          "https://cdn.britannica.com/33/242333-050-95A19CE8/Actor-Ben-Affleck-premiere-AIR-March-2023.jpg",
      },
      {
        name: "Eric Tiede",
        imageUrl:
          "https://static.wikia.nocookie.net/walkingdead/images/4/41/Eric_Tiede.jpg/revision/latest?cb=20220529101104",
      },
    ],
    comments: [
      { sender: "sorena", text: "greatCommentText" },
      { sender: "kamran", text: "goodCommentText" },
      { sender: "sam", text: "soSoCommentText" },
      { sender: "iliya", text: "badCommentText" },
    ],
    director: "Eric Dean Seaton",
    description: "flashDesc",
    imdbScore: 8,
    imageUrl:
      "https://filmr.ir/wp-content/uploads/2023/02/The-Flash-poster.jpg",
    backgroundImageUrl:
      "https://filmr.ir/wp-content/uploads/2023/07/The-Flash-1.jpg",
    popularity: 83,
  },
  {
    id: "d78978998qw232456453261321g321313feadseqweqwaf",
    movieName: `exteraction2`,
    trailer: "https://trailer.uptvs.com/trailer/EXTRACTION-2-2023-Trailer.mp4",
    genre: "action",
    actors: [
      {
        name: "Adam Bessa",
        imageUrl: "https://flxt.tmsimg.com/assets/1189476_v9_aa.jpg",
      },
      {
        name: "Chris Hemsworth",
        imageUrl:
          "https://publish.purewow.net/wp-content/uploads/sites/2/2023/09/chris-hemsworth-daughter-thor.jpg?resize=720%2C780",
      },
      {
        name: "Golshifteh Farahani",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Golshifteh_Farahani_at_Berlinale_2023.jpg/1200px-Golshifteh_Farahani_at_Berlinale_2023.jpg",
      },
    ],
    downloadLinks: [
      {
        quality: 720,
        size: 1200,
        link: "https://naabmovie.metafilm.ir/content/download/4fa2e51a-0641-4a15-b682-48f68e9bea89/fd27223f-7050-4414-8826-819a0ee54fde/HD720",
      },
      {
        quality: 480,
        size: 669,
        link: "https://naabmovie.metafilm.ir/content/download/4fa2e51a-0641-4a15-b682-48f68e9bea89/fd27223f-7050-4414-8826-819a0ee54fde/HD480",
      },
    ],
    comments: [
      { sender: "sorena", text: "greatCommentText" },
      { sender: "kamran", text: "goodCommentText" },
      { sender: "sam", text: "soSoCommentText" },
      { sender: "iliya", text: "badCommentText" },
    ],
    director: "Sam Hargrave",
    description: "exteraction2Desc",
    imdbScore: 8,
    imageUrl:
      "https://filmr.ir/wp-content/uploads/2023/06/Extraction-2-poster.jpg",
    backgroundImageUrl:
      "https://filmr.ir/wp-content/uploads/2023/06/Extraction-2-cover.jpg",
    popularity: 45,
  },
  {
    id: "d78978998qw2324564561321g321313feadseqweqwaf",
    movieName: `coldHearted`,
    trailer:
      "https://trailer.uptvs.com/trailer/Heart-of-Stone-2023-Trailer.mp4",
    genre: "action",
    actors: [
      {
        name: "Gal Gadot",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/5/5b/Gal_Gadot_cropped_lighting_corrected_2b.jpg",
      },
      {
        name: "Jamie Dornan",
        imageUrl: "https://flxt.tmsimg.com/assets/490764_v9_bb.jpg",
      },
      {
        name: "Matthias Schweighöfer",
        imageUrl:
          "https://wikibio.in/wp-content/uploads/2021/04/Matthias-Schweighofer.jpg",
      },
    ],
    downloadLinks: [
      {
        quality: 720,
        size: 1100,
        link: "https://naabmovie.metafilm.ir/content/download/4fa2e51a-0641-4a15-b682-48f68e9bea89/db07834f-7543-49d9-a5aa-757ecd95f702/HD720",
      },
      {
        quality: 480,
        size: 665,
        link: "https://naabmovie.metafilm.ir/content/download/4fa2e51a-0641-4a15-b682-48f68e9bea89/db07834f-7543-49d9-a5aa-757ecd95f702/HD480",
      },
    ],
    comments: [
      { sender: "sorena", text: "greatCommentText" },
      { sender: "kamran", text: "goodCommentText" },
      { sender: "sam", text: "soSoCommentText" },
      { sender: "iliya", text: "badCommentText" },
    ],
    director: "Tom Harper",
    description: "coldHeartedDesc",
    imdbScore: 6,
    imageUrl:
      "https://filmr.ir/wp-content/uploads/2023/08/Heart-of-Stone-poster.jpg",
    backgroundImageUrl:
      "https://filmr.ir/wp-content/uploads/2023/08/Heart-of-Stone-cover.jpg",
    popularity: 40,
  },
];

export const comingSoonMoviesList = [
  {
    movieName: "joker2",
    imageUrl:
      "https://www.uptvs.com/wp-contents/uploads/2022/12/joker-2-jadval.jpg",
  },
  {
    movieName: "generalV",
    imageUrl: "https://www.uptvs.com/wp-contents/uploads/2022/12/gen-v.jpg",
  },
  {
    movieName: "aHuntingInVenice",
    imageUrl: "https://www.uptvs.com/wp-contents/uploads/2023/05/venice-2.jpg",
  },
  {
    movieName: "sawX",
    imageUrl: "https://www.uptvs.com/wp-contents/uploads/2023/09/saw-1.jpg",
  },
  {
    movieName: "promisedLand",
    imageUrl: "https://www.uptvs.com/wp-contents/uploads/2023/09/land-2.jpg",
  },
  {
    movieName: "reptile",
    imageUrl:
      "https://www.uptvs.com/wp-contents/uploads/2023/09/Reptile-2-1.jpg",
  },
  {
    movieName: "marvels",
    imageUrl: "https://www.uptvs.com/wp-contents/uploads/2023/05/marvels-2.jpg",
  },
];
export default allMovies;
