const articles = [
  {
    source: {
      id: null,
      name: "Hollywood Reporter",
    },
    author: "Alex Weprin",
    title:
      "‘Pokemon Go’ Studio Niantic Sold in $3.5B Deal to Mobile Gaming Giant Scopely - Hollywood Reporter",
    description:
      "Niantic will sell its gaming business to Scopely, including 'Pokemon Go,' 'Pikmin Bloom' in a deal that transforms the mobile gaming landscape.",
    url: "http://www.hollywoodreporter.com/business/digital/pokemon-go-studio-niantic-sold-scopely-1236161480/",
    urlToImage:
      "https://www.hollywoodreporter.com/wp-content/uploads/2025/03/Scopely-and-Niantic_Header.png?crop=0px%2C4px%2C1920px%2C1074px&resize=1440%2C810",
    publishedAt: "2025-03-12T12:03:33Z",
    content:
      "In a deal that reshapes the mobile video game landscape, Scopely is acquiring the gaming business of Niantic for $3.5 billion, bringing franchises like Pokémon Go, Pikmin Bloom, and Monster Hunter No… [+3718 chars]",
  },
  {
    source: {
      id: null,
      name: "Yahoo Entertainment",
    },
    author: "P R Sanjai and Alisha Sachdev",
    title:
      "Musk’s Starlink Signs Pact With Ambani’s Jio After Rival Bharti - Yahoo Finance",
    description:
      "(Bloomberg) -- Follow Bloomberg India on WhatsApp for exclusive content and analysis on what billionaires, businesses and markets are doing. Sign up...",
    url: "https://finance.yahoo.com/news/musk-starlink-signs-pact-ambani-083705215.html",
    urlToImage:
      "https://s.yimg.com/ny/api/res/1.2/CzoF_xlPxKRV4bltIATFJQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/bloomberg_technology_68/f59a191c8809286496c93792f2c659fd",
    publishedAt: "2025-03-12T12:00:54Z",
    content:
      "(Bloomberg) -- Follow Bloomberg India on WhatsApp for exclusive content and analysis on what billionaires, businesses and markets are doing. Sign up here.\r\nMost Read from Bloomberg\r\nBillionaire Mukes… [+5240 chars]",
  },
  {
    source: {
      id: null,
      name: "MarketWatch",
    },
    author: "Steve Goldstein",
    title:
      "Goldman Sachs becomes first major Wall Street bank to lower S&P 500 target - MarketWatch",
    description:
      "Wall Street’s new math: Tariffs lower stock-market valuations",
    url: "https://www.marketwatch.com/story/goldman-sachs-flinches-and-lowers-its-s-p-500-target-the-mechanics-are-the-interesting-part-7586d58b",
    urlToImage: "https://images.mktw.net/im-32588512/social",
    publishedAt: "2025-03-12T10:50:00Z",
    content:
      "Steven Goldstein is based in London and responsible for MarketWatch's coverage of financial markets in Europe, with a particular focus on global macro and commodities. Previously, he was Washington b… [+121 chars]",
  },
  {
    source: {
      id: "abc-news",
      name: "ABC News",
    },
    author: "ABC News",
    title:
      "Ceasefire 'in Russia's hands,' Ukraine says after US meeting in Saudi Arabia - ABC News",
    description: null,
    url: "https://abcnews.go.com/International/ceasefire-russias-hands-ukraine-after-us-meeting-saudi/story?id\\\\u003d119703072",
    urlToImage: null,
    publishedAt: "2025-03-12T10:18:45Z",
    content: null,
  },
  {
    source: {
      id: "techcrunch",
      name: "TechCrunch",
    },
    author: "Lorenzo Franceschi-Bicchierai",
    title:
      "North Korean government hackers snuck spyware on Android app store - TechCrunch",
    description:
      "Cybersecurity firm Lookout found several samples of a North Korean spyware it calls KoSpy.",
    url: "https://techcrunch.com/2025/03/12/north-korean-government-hackers-snuck-spyware-on-android-app-store/",
    urlToImage:
      "https://techcrunch.com/wp-content/uploads/2025/03/kim-jong-un-tv-cellphone.jpg?resize=1200,850",
    publishedAt: "2025-03-12T10:00:00Z",
    content:
      "A group of hackers with links to the North Korean regime uploaded Android spyware onto the Google Play app store and were able to trick some people into downloading it, according to cybersecurity fir… [+4197 chars]",
  },
  {
    source: {
      id: "cnn",
      name: "CNN",
    },
    author: "Christian Edwards",
    title:
      "Cargo ship captain arrested in North Sea collision with US-flagged tanker is Russian national, owner says - CNN",
    description:
      "The captain of the Solong cargo ship who was arrested after crashing into an oil tanker off the English coast is a Russian national, the vessel’s owner said Wednesday, as maritime experts search for answers.",
    url: "https://www.cnn.com/2025/03/12/uk/solong-captain-russian-stena-north-sea-crash-intl-gbr/index.html",
    urlToImage:
      "https://media.cnn.com/api/v1/images/stellar/prod/ap25069715339981.jpg?c=16x9&q=w_800,c_fill",
    publishedAt: "2025-03-12T09:54:00Z",
    content:
      "The captain of the Solong cargo ship who was arrested after crashing into a US-flagged tanker off the English coast is a Russian national, the vessels owner said Wednesday, as maritime experts search… [+2533 chars]",
  },
  {
    source: {
      id: null,
      name: "NBCSports.com",
    },
    author: "Michael David Smith",
    title:
      'Chris Godwin says he was "really close" to leaving but felt like Tampa was home - NBC Sports',
    description:
      "Buccaneers wide receiver Chris Godwin decided to stay with the only NFL team he has ever played for and sign a three-year contract in Tampa Bay, but he strongly considered leaving.",
    url: "https://www.nbcsports.com/nfl/profootballtalk/rumor-mill/news/chris-godwin-says-he-was-really-close-to-leaving-but-felt-like-tampa-was-home",
    urlToImage:
      "https://nbcsports.brightspotcdn.com/dims4/default/a0bd6ff/2147483647/strip/true/crop/4567x2569+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fnbc-sports-production-nbc-sports.s3.us-east-1.amazonaws.com%2Fbrightspot%2F5e%2F2d%2F6f99bdee4cedbc8d621d82023051%2Fhttps-delivery-gettyimages.com%2Fdownloads%2F2203908091",
    publishedAt: "2025-03-12T09:51:05Z",
    content:
      "Buccaneers wide receiver Chris Godwin decided to stay with the only NFL team he has ever played for and sign a three-year contract in Tampa Bay, but he strongly considered leaving.\r\nGodwin said on NF… [+1037 chars]",
  },
  {
    source: {
      id: null,
      name: "Variety",
    },
    author: "Aramide Tinubu",
    title:
      "Amanda Seyfried Leads Peacock’s Stellar Serial Killer Mystery ‘Long Bright River’: TV Review - Variety",
    description:
      'In Peacock\'s TV adaptation of "Long Bright River" Amanda Seyfried portrays a Philadelphia cop desperate to stop a serial killer and find her sister.',
    url: "https://variety.com/2025/tv/tv-reviews/long-bright-river-review-peacock-1236330715/",
    urlToImage:
      "https://variety.com/wp-content/uploads/2025/03/NUP_203990_00445.jpg?w=1000&h=563&crop=1",
    publishedAt: "2025-03-12T08:01:00Z",
    content:
      "Peacock‘s “Long Bright River,” based on Liz Moore’s best-selling novel and adapted to television by Moore and Nikki Toscano, offers audiences a much more distinctive tale than the typical murder myst… [+4252 chars]",
  },
  {
    source: {
      id: null,
      name: "Vatican News",
    },
    author: "Vatican News",
    title:
      "Pope Francis rests well overnight amid improvement - Vatican News - English",
    description:
      "Pope Francis had a restful night and is continuing his treatment and physical therapy, the Holy See Press Office said on Wednesday, two days after the Pope's doctors said his prognosis was no longer guarded even if he requires more time in the hospital.",
    url: "https://www.vaticannews.va/en/pope/news/2025-03/pope-francis-rests-well-overnight-amid-continuous-improvement.html",
    urlToImage:
      "https://www.vaticannews.va/content/dam/vaticannews/agenzie/images/ansa/2025/03/11/14/1741698193975.jpg/_jcr_content/renditions/cq5dam.thumbnail.cropped.1500.844.jpeg",
    publishedAt: "2025-03-12T07:58:58Z",
    content:
      "By Vatican News\r\nPope Francis had a restful night, according to a statement published on Wednesday morning by the Holy See Press Office. The Pope continued following the spiritual exercises of the Ro… [+1370 chars]",
  },
  {
    source: {
      id: "the-washington-post",
      name: "The Washington Post",
    },
    author: "Kelly Kasulis Cho",
    title:
      "Texas measles outbreak grows, while New York and California report new cases - The Washington Post",
    description:
      "Counties in California, New York and Maryland detected their first measles cases of the year. The CDC has warned travelers to be vigilant as spring break begins.",
    url: "https://www.washingtonpost.com/health/2025/03/12/measles-suffolk-county-new-york-los-angeles-lax/",
    urlToImage:
      "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/2GBL5PJEHJH3OZCVWMLX25HZEI.jpg&w=1440",
    publishedAt: "2025-03-12T07:54:03Z",
    content:
      "Los Angeles County in California, Suffolk County in New York and Howard County in Maryland detected their first confirmed cases of measles this year, while Oklahoma reported two possible cases, local… [+4191 chars]",
  },
  {
    source: {
      id: "al-jazeera-english",
      name: "Al Jazeera English",
    },
    author: "Abid Hussain",
    title:
      "Deadly Pakistan train hijack: What happened, who was rescued, what’s next? - Al Jazeera English",
    description:
      "Baloch separatist group claims responsibility, says it has killed six security personnel as it holds hundreds hostage.",
    url: "https://www.aljazeera.com/news/2025/3/11/deadly-pakistan-train-hijack-what-happened-and-whats-next",
    urlToImage:
      "https://www.aljazeera.com/wp-content/uploads/2025/03/2024-08-27T131054Z_322806705_RC2AO9AR942D_RTRMADP_3_PAKISTAN-ATTACK-1741710242.jpg?resize=1920%2C1440",
    publishedAt: "2025-03-12T07:41:15Z",
    content:
      "Islamabad, Pakistan Pakistans security forces say they have rescued 155 passengers from a train that was hijacked by a group of separatists as it was travelling on Tuesday from Quetta, the provincial… [+10977 chars]",
  },
  {
    source: {
      id: null,
      name: "CBS Sports",
    },
    author: "",
    title:
      "2025 NFL free agency Day 2 grades: Falcons get 'A+' for Leonard Floyd deal, Bills get 'C' for adding Joey Bosa - CBS Sports",
    description:
      "Which teams are doing the best out of the gate in free agency?",
    url: "https://www.cbssports.com/nfl/news/2025-nfl-free-agency-day-2-grades-falcons-get-a-for-leonard-floyd-deal-bills-get-c-for-adding-joey-bosa/",
    urlToImage:
      "https://sportshub.cbsistatic.com/i/r/2025/03/12/c93c73e4-ddf4-4c2f-ac98-d5ef41ee5107/thumbnail/1200x675/5f31294adcf5dd16e374a1b1332062a6/leonardfloyd.jpg",
    publishedAt: "2025-03-12T06:08:00Z",
    content:
      "The 2025 NFL offseason is firing on all cylinders now. A day after several teams agreed to noteworthy deals, including the signings of quarterbacks Justin Fields and Sam Darnold, Day 2 of free agency… [+6905 chars]",
  },
  {
    source: {
      id: "the-washington-post",
      name: "The Washington Post",
    },
    author:
      "Nick Mourtoupalas, Chris Alcantara, Janice Kai Chen, Kati Perry, Hannah Dormido",
    title:
      "How every House member voted on the bill to avert a government shutdown - The Washington Post",
    description:
      "The House passed a measure to extend federal funding through September. See how your lawmaker voted.",
    url: "https://www.washingtonpost.com/politics/interactive/2025/03/11/house-vote-count-government-shutdown-continuing-resolution/",
    urlToImage:
      "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/KTPAWFVUZVH5PBUM2G34CID6VU.jpg&w=1200",
    publishedAt: "2025-03-12T05:57:00Z",
    content:
      "The House passed a measure Tuesday to avert a government shutdown set to begin Saturday by extending federal funding levels through September.\r\nThe continuing resolution, backed by Speaker Mike Johns… [+3262 chars]",
  },
  {
    source: {
      id: null,
      name: "Space.com",
    },
    author: "Monisha Ravisetti",
    title:
      "SpaceX rocket launches NASA SPHEREx space telescope and PUNCH solar probes - Space.com",
    description:
      "The duo launched on a SpaceX Falcon 9 rocket at 11:10 p.m. EST (0310 March 12 GMT).",
    url: "https://www.space.com/space-exploration/missions/spacex-rocket-launches-nasa-spherex-space-telescope-and-punch-solar-probes",
    urlToImage:
      "https://cdn.mos.cms.futurecdn.net/FpfRS8SzcE8NeErKRVYvuN-1200-80.jpg",
    publishedAt: "2025-03-12T04:14:40Z",
    content:
      "There was a glimmer in the air tonight at Vandenberg Space Force Base in California, and it wasn't only because a SpaceX Falcon 9 rocket took to the skies carrying precious NASA cargo.\r\nAs the agency… [+9491 chars]",
  },
];

module.exports = articles;