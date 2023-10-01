export interface MoviePropTypes {
  id: string;
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
}

const allMovies = [
  // TOP
  {
    id: "dsdsdad3qwedasfsagfeadsaf",
    movieName: `jawan`,
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
    director: "Steven Caple Jr",
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
