export interface MovieDataType {
  id: string;
  title: string;
  thumbnail: {
    trending?: {
      small: string;
      large: string;
    };
    regular: {
      small: string;
      medium: string;
      large: string;
    };
  };
  year: number;
  category: string;
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean;
  description : string;
}

export const moviesData = [
  {
    id: "1",
    title: "Beyond Earth",
    thumbnail: {
      trending: {
        small: "/thumbnails/beyond-earth/trending/small.jpg",
        large: "/thumbnails/beyond-earth/trending/large.jpg",
      },
      regular: {
        small: "/thumbnails/beyond-earth/regular/small.jpg",
        medium: "/thumbnails/beyond-earth/regular/medium.jpg",
        large: "/thumbnails/beyond-earth/regular/large.jpg",
      },
    },
    year: 2019,
    category: "Movie",
    rating: "PG",
    isBookmarked: false,
    isTrending: true,
    description: "Beyond Earth is a thrilling sci-fi adventure that takes audiences on a breathtaking journey through space. Set in the not-too-distant future, the movie explores humanity's quest to explore the unknown and push the boundaries of what is possible. The story follows a group of astronauts on a mission to find a new habitable planet as Earth faces an impending ecological disaster. Along the way, they encounter mysterious alien civilizations, navigate through treacherous cosmic phenomena, and confront their deepest fears. The film boasts stunning visual effects, creating awe-inspiring depictions of distant galaxies, alien landscapes, and futuristic spacecraft. The cast delivers stellar performances, bringing depth and emotion to their characters' struggles and triumphs. The plot is filled with twists and turns, keeping viewers on the edge of their seats until the very end. Themes of exploration, survival, and the resilience of the human spirit are central to the narrative, making it a thought-provoking and inspiring cinematic experience. Beyond Earth is not just a spectacle of special effects but also a poignant story that delves into the philosophical questions of our existence and our place in the universe. It challenges us to think about the future of our planet and the possibilities that lie beyond our own world. Whether you are a fan of science fiction or simply enjoy epic storytelling, Beyond Earth is a must-watch film that will leave a lasting impression. Its combination of breathtaking visuals, compelling characters, and profound themes make it a standout in the genre, offering a cinematic journey that is both entertaining and enlightening."
  },
  {
    id: "2",
    title: "Bottom Gear",
    thumbnail: {
      trending: {
        small: "/thumbnails/bottom-gear/trending/small.jpg",
        large: "/thumbnails/bottom-gear/trending/large.jpg",
      },
      regular: {
        small: "/thumbnails/bottom-gear/regular/small.jpg",
        medium: "/thumbnails/bottom-gear/regular/medium.jpg",
        large: "/thumbnails/bottom-gear/regular/large.jpg",
      },
    },
    year: 2021,
    category: "Movie",
    rating: "PG",
    isBookmarked: false,
    isTrending: true,
    description: "Bottom Gear is an exhilarating action-comedy that revs up the excitement from start to finish. Set in the fast-paced world of underground racing, the movie follows a ragtag team of drivers who come together to compete in a high-stakes race that could change their lives forever. As they navigate dangerous roads and fierce competition, the team must overcome personal rivalries and unexpected obstacles. The film features high-octane car chases, stunning stunts, and a soundtrack that keeps the adrenaline pumping. The characters are brought to life with humor and heart, making audiences root for them through every twist and turn. Bottom Gear is a fun and thrilling ride that combines comedy and action in a way that appeals to car enthusiasts and general audiences alike."
  },
  {
    id: "3",
    title: "Undiscovered Cities",
    thumbnail: {
      trending: {
        small: "/thumbnails/undiscovered-cities/trending/small.jpg",
        large: "/thumbnails/undiscovered-cities/trending/large.jpg",
      },
      regular: {
        small: "/thumbnails/undiscovered-cities/regular/small.jpg",
        medium: "/thumbnails/undiscovered-cities/regular/medium.jpg",
        large: "/thumbnails/undiscovered-cities/regular/large.jpg",
      },
    },
    year: 2019,
    category: "TV Series",
    rating: "E",
    isBookmarked: false,
    isTrending: true,
    description: "Undiscovered Cities takes viewers on an awe-inspiring journey to some of the most hidden and fascinating urban landscapes across the globe. Each episode delves into the history, culture, and secrets of a different city, uncovering stories that have been long forgotten or are yet to be told. The series showcases stunning cinematography, capturing the essence of each location with breathtaking visuals. With a mix of expert interviews, historical reenactments, and immersive storytelling, Undiscovered Cities brings to light the unique charm and mystery of these less-known urban centers. It's a must-watch for history buffs, travel enthusiasts, and anyone with a curious mind about the world around them."
  },
  {
    id: "4",
    title: "1998",
    thumbnail: {
      trending: {
        small: "/thumbnails/1998/trending/small.jpg",
        large: "/thumbnails/1998/trending/large.jpg",
      },
      regular: {
        small: "/thumbnails/1998/regular/small.jpg",
        medium: "/thumbnails/1998/regular/medium.jpg",
        large: "/thumbnails/1998/regular/large.jpg",
      },
    },
    year: 2021,
    category: "Movie",
    rating: "18+",
    isBookmarked: false,
    isTrending: true,
    description: "1998 is a gripping drama that explores the intense social and political upheavals of its titular year. The film follows a diverse group of characters whose lives intersect amid the chaos of a rapidly changing world. With themes of love, loss, and resilience, 1998 paints a vivid picture of a society on the brink. The film's narrative is driven by powerful performances and a script that weaves together personal and historical events seamlessly. It's a poignant reminder of the struggles and triumphs that defined an era, making it a compelling watch for anyone interested in history and human drama."
  },
  {
    id: "5",
    title: "Dark Side of the Moon",
    thumbnail: {
      trending: {
        small: "/thumbnails/dark-side-of-the-moon/trending/small.jpg",
        large: "/thumbnails/dark-side-of-the-moon/trending/large.jpg",
      },
      regular: {
        small: "/thumbnails/dark-side-of-the-moon/regular/small.jpg",
        medium: "/thumbnails/dark-side-of-the-moon/regular/medium.jpg",
        large: "/thumbnails/dark-side-of-the-moon/regular/large.jpg",
      },
    },
    year: 2018,
    category: "TV Series",
    rating: "PG",
    isBookmarked: true,
    isTrending: true,
    description: "Dark Side of the Moon is a riveting sci-fi series that delves into the mysteries and wonders of space exploration. Set in a near-future where lunar colonization is a reality, the show follows a team of astronauts as they uncover strange phenomena on the far side of the moon. The series combines scientific accuracy with imaginative storytelling, creating a world that feels both real and fantastical. With its intriguing plot twists, complex characters, and stunning visual effects, Dark Side of the Moon keeps viewers on the edge of their seats. It's a thought-provoking exploration of humanity's place in the cosmos."
  },
  {
    id: "6",
    title: "The Great Lands",
    thumbnail: {
      regular: {
        small: "/thumbnails/the-great-lands/regular/small.jpg",
        medium: "/thumbnails/the-great-lands/regular/medium.jpg",
        large: "/thumbnails/the-great-lands/regular/large.jpg",
      },
    },
    year: 2019,
    category: "Movie",
    rating: "E",
    isBookmarked: false,
    isTrending: false,
    description: "The Great Lands is an epic historical drama that takes viewers back to a time of great kingdoms and legendary heroes. The film tells the story of a young warrior who embarks on a quest to unite warring tribes and bring peace to his homeland. Filled with grand battles, political intrigue, and deep character development, The Great Lands is a sweeping saga that captures the imagination. The movie's lush cinematography and meticulously crafted sets transport audiences to another era, making it a visually stunning experience. It's a tale of courage, honor, and the enduring human spirit."
  },
  {
    id: "7",
    title: "The Diary",
    thumbnail: {
      regular: {
        small: "/thumbnails/the-diary/regular/small.jpg",
        medium: "/thumbnails/the-diary/regular/medium.jpg",
        large: "/thumbnails/the-diary/regular/large.jpg",
      },
    },
    year: 2019,
    category: "TV Series",
    rating: "PG",
    isBookmarked: false,
    isTrending: false,
    description: "The Diary is an emotional and thought-provoking TV series that chronicles the lives of a group of teenagers as they navigate the trials and tribulations of adolescence. Each episode focuses on a different character, revealing their innermost thoughts and struggles through the pages of their personal diaries. The series tackles a range of issues, from friendship and family dynamics to mental health and self-identity. With its heartfelt storytelling and relatable characters, The Diary resonates deeply with audiences of all ages. It's a poignant reminder of the challenges and triumphs of growing up, making it a must-watch for anyone who appreciates authentic, character-driven drama."
  },
  {
    id: "8",
    title: "Earth’s Untouched",
    thumbnail: {
      regular: {
        small: "/thumbnails/earths-untouched/regular/small.jpg",
        medium: "/thumbnails/earths-untouched/regular/medium.jpg",
        large: "/thumbnails/earths-untouched/regular/large.jpg",
      },
    },
    year: 2017,
    category: "Movie",
    rating: "18+",
    isBookmarked: true,
    isTrending: false,
    description: "Earth’s Untouched is a powerful environmental documentary that sheds light on the impact of human activity on our planet. The film takes viewers to some of the most pristine and untouched regions of the world, showcasing the beauty and diversity of nature. Through stunning visuals and compelling storytelling, Earth’s Untouched highlights the urgent need for conservation and sustainable practices. The documentary features interviews with leading scientists, activists, and indigenous communities who are fighting to protect their homelands. It's an eye-opening and inspiring film that calls for action to preserve the Earth for future generations."
  },
  {
    id: "9",
    title: "No Land Beyond",
    thumbnail: {
      regular: {
        small: "/thumbnails/no-land-beyond/regular/small.jpg",
        medium: "/thumbnails/no-land-beyond/regular/medium.jpg",
        large: "/thumbnails/no-land-beyond/regular/large.jpg",
      },
    },
    year: 2019,
    category: "Movie",
    rating: "E",
    isBookmarked: false,
    isTrending: false,
    description: "No Land Beyond is a heartwarming adventure film that follows a group of friends as they set out on a journey to discover a legendary place rumored to hold unimaginable treasures. Along the way, they face numerous challenges and learn important life lessons about friendship, perseverance, and the true meaning of wealth. The film's beautiful landscapes and engaging storyline captivate audiences of all ages. No Land Beyond is a feel-good movie that combines excitement with heartfelt moments, making it a perfect family-friendly watch. Its message of exploring the unknown and cherishing relationships resonates long after the credits roll."
  },
  {
    id: "10",
    title: "During the Hunt",
    thumbnail: {
      regular: {
        small: "/thumbnails/during-the-hunt/regular/small.jpg",
        medium: "/thumbnails/during-the-hunt/regular/medium.jpg",
        large: "/thumbnails/during-the-hunt/regular/large.jpg",
      },
    },
    year: 2016,
    category: "TV Series",
    rating: "PG",
    isBookmarked: false,
    isTrending: false,
    description: "During the Hunt is a gripping crime thriller series that follows a seasoned detective and his rookie partner as they track down a notorious serial killer. Each episode unfolds a new layer of the mystery, keeping viewers on the edge of their seats. The series is known for its intense plot twists, complex characters, and dark, atmospheric setting. The chemistry between the lead actors and the meticulous attention to detail in the storytelling make During the Hunt a standout in the crime genre. It's a must-watch for fans of suspense and detective stories, offering a thrilling ride from start to finish."
  },
  {
    id: "11",
    title: "Auto Pilot",
    thumbnail: {
      regular: {
        small: "/thumbnails/autosport-the-series/regular/small.jpg",
        medium: "/thumbnails/autosport-the-series/regular/medium.jpg",
        large: "/thumbnails/autosport-the-series/regular/large.jpg",
      },
    },
    year: 2019,
    category: "Movie",
    rating: "E",
    isBookmarked: true,
    isTrending: false,
    description: "Auto Pilot is a futuristic comedy that explores the hilarious consequences of over-reliance on technology. Set in a world where self-driving cars have become the norm, the film follows a quirky inventor who creates an AI with a mind of its own. When the AI starts causing chaos, the inventor must find a way to regain control. The movie is filled with laugh-out-loud moments, witty dialogue, and clever social commentary. Auto Pilot's engaging plot and lovable characters make it a delightful watch for audiences of all ages. It's a fun and thought-provoking take on our tech-obsessed society."
  },
  {
    id: "12",
    title: "Same Answer II",
    thumbnail: {
      regular: {
        small: "/thumbnails/same-answer-2/regular/small.jpg",
        medium: "/thumbnails/same-answer-2/regular/medium.jpg",
        large: "/thumbnails/same-answer-2/regular/large.jpg",
      },
    },
    year: 2017,
    category: "Movie",
    rating: "E",
    isBookmarked: false,
    isTrending: false,
    description: "Same Answer II is a heartwarming sequel that continues the story of a group of friends as they navigate the ups and downs of life. This installment focuses on their efforts to overcome personal challenges and maintain their close-knit bond. The film's relatable characters, emotional depth, and uplifting message make it a standout in the drama genre. With its beautiful cinematography and compelling performances, Same Answer II captures the essence of friendship and resilience. It's a touching and inspiring film that resonates with viewers, offering a poignant reminder of the importance of staying true to oneself and supporting those we love."
  },
  {
    id: "13",
    title: "Below Echo",
    thumbnail: {
      regular: {
        small: "/thumbnails/below-echo/regular/small.jpg",
        medium: "/thumbnails/below-echo/regular/medium.jpg",
        large: "/thumbnails/below-echo/regular/large.jpg",
      },
    },
    year: 2016,
    category: "TV Series",
    rating: "PG",
    isBookmarked: false,
    isTrending: false,
    description: "Below Echo is a suspenseful and mysterious TV series that delves into the world of paranormal investigations. The show follows a team of experts as they explore haunted locations and uncover the truth behind eerie phenomena. Each episode presents a new case, blending scientific inquiry with supernatural intrigue. The series is known for its chilling atmosphere, captivating storytelling, and well-researched content. Below Echo keeps viewers hooked with its blend of horror and investigative drama. It's a must-watch for fans of the paranormal and those who enjoy unraveling mysteries that lie beyond the ordinary."
  },
  {
    id: "14",
    title: "The Rockies",
    thumbnail: {
      regular: {
        small: "/thumbnails/the-rockies/regular/small.jpg",
        medium: "/thumbnails/the-rockies/regular/medium.jpg",
        large: "/thumbnails/the-rockies/regular/large.jpg",
      },
    },
    year: 2015,
    category: "TV Series",
    rating: "E",
    isBookmarked: false,
    isTrending: false,
    description: "The Rockies is a breathtaking nature documentary series that explores the majestic Rocky Mountains. Each episode showcases the diverse wildlife, stunning landscapes, and unique ecosystems found in this iconic mountain range. The series combines stunning cinematography with insightful commentary, offering viewers an immersive experience of the Rockies' natural beauty. The Rockies is not only visually spectacular but also educational, highlighting the importance of conservation and the delicate balance of nature. It's a must-watch for nature lovers and anyone who appreciates the wonders of the great outdoors."
  },
  {
    id: "15",
    title: "Relentless",
    thumbnail: {
      regular: {
        small: "/thumbnails/relentless/regular/small.jpg",
        medium: "/thumbnails/relentless/regular/medium.jpg",
        large: "/thumbnails/relentless/regular/large.jpg",
      },
    },
    year: 2017,
    category: "Movie",
    rating: "PG",
    isBookmarked: true,
    isTrending: false,
    description: "Relentless is an inspiring sports drama that tells the story of a young athlete's journey to greatness. Faced with numerous obstacles, the protagonist must dig deep and find the strength to persevere. The film captures the highs and lows of competitive sports, highlighting the dedication and determination required to succeed. With its compelling narrative and powerful performances, Relentless is a testament to the human spirit and the pursuit of excellence. It's a motivational film that resonates with audiences, offering a poignant reminder that true champions are made through hard work and resilience."
  },
  {
    id: "16",
    title: "Community of Ours",
    thumbnail: {
      regular: {
        small: "/thumbnails/community-of-ours/regular/small.jpg",
        medium: "/thumbnails/community-of-ours/regular/medium.jpg",
        large: "/thumbnails/community-of-ours/regular/large.jpg",
      },
    },
    year: 2018,
    category: "TV Series",
    rating: "18+",
    isBookmarked: false,
    isTrending: false,
    description: "Community of Ours is a compelling drama series that delves into the lives of residents in a tight-knit neighborhood. Each episode explores the personal struggles, triumphs, and interconnected stories of various characters. The series tackles themes of community, identity, and social change, offering a nuanced portrayal of contemporary life. With its rich character development and thought-provoking storylines, Community of Ours resonates deeply with viewers. It's a powerful exploration of human relationships and the impact of societal issues on everyday lives. The series is both heartwarming and challenging, making it a standout in the drama genre."
  },
  {
    id: "17",
    title: "Van Life",
    thumbnail: {
      regular: {
        small: "/thumbnails/van-life/regular/small.jpg",
        medium: "/thumbnails/van-life/regular/medium.jpg",
        large: "/thumbnails/van-life/regular/large.jpg",
      },
    },
    year: 2015,
    category: "Movie",
    rating: "PG",
    isBookmarked: false,
    isTrending: false,
    description: "Van Life is a feel-good documentary that explores the growing trend of living on the road. The film follows several individuals and families who have chosen to convert vans and other vehicles into mobile homes, embracing a minimalist and adventurous lifestyle. Through personal stories and stunning visuals, Van Life showcases the freedom and challenges of life on the move. The documentary offers insight into the motivations behind this lifestyle choice, the community that has formed around it, and the profound sense of fulfillment that comes from living closer to nature. It's an inspiring and uplifting film that celebrates alternative ways of living."
  },
  {
    id: "18",
    title: "The Heiress",
    thumbnail: {
      regular: {
        small: "/thumbnails/the-heiress/regular/small.jpg",
        medium: "/thumbnails/the-heiress/regular/medium.jpg",
        large: "/thumbnails/the-heiress/regular/large.jpg",
      },
    },
    year: 2020,
    category: "Movie",
    rating: "18+",
    isBookmarked: false,
    isTrending: false,
    description: "The Heiress is a thrilling drama that delves into the dark and glamorous world of high society. The film centers around a young woman who inherits a vast fortune under mysterious circumstances. As she navigates the treacherous waters of wealth and power, she uncovers secrets that threaten to unravel her life. The Heiress is filled with intrigue, betrayal, and unexpected twists, keeping viewers on the edge of their seats. With its lavish settings and compelling performances, the movie offers a captivating look at the lengths people will go to protect their interests and the true cost of living a life of privilege."
  },
  {
    id: "19",
    title: "Off the Track",
    thumbnail: {
      regular: {
        small: "/thumbnails/off-the-track/regular/small.jpg",
        medium: "/thumbnails/off-the-track/regular/medium.jpg",
        large: "/thumbnails/off-the-track/regular/large.jpg",
      },
    },
    year: 2019,
    category: "Movie",
    rating: "PG",
    isBookmarked: true,
    isTrending: false,
    description: "Off the Track is an inspiring sports drama that follows the journey of a young athlete determined to break into the world of professional track and field. Faced with numerous challenges, including personal setbacks and fierce competition, the protagonist's relentless drive and perseverance are put to the test. The film beautifully captures the spirit of determination, the joy of victory, and the pain of defeat. With its heartfelt story and dynamic performances, Off the Track is a motivational tale that resonates with viewers, celebrating the human spirit and the pursuit of dreams against all odds."
  },
  {
    id: "20",
    title: "Whispering Pines",
    thumbnail: {
      regular: {
        small: "/thumbnails/whispering-hill/regular/small.jpg",
        medium: "/thumbnails/whispering-hill/regular/medium.jpg",
        large: "/thumbnails/whispering-hill/regular/large.jpg",
      },
    },
    year: 2018,
    category: "TV Series",
    rating: "18+",
    isBookmarked: false,
    isTrending: false,
    description: "Whispering Pines is a gripping mystery series set in a small town with dark secrets. The show follows a tenacious detective as she investigates a series of bizarre and unexplained events that begin to unravel the close-knit community. Each episode brings new twists and turns, revealing the hidden lives of the town's residents and the eerie history that haunts them. With its atmospheric setting, complex characters, and suspenseful plot, Whispering Pines keeps viewers hooked from the first episode to the last. It's a must-watch for fans of mystery and suspense, offering a deep dive into the unknown."
  },
  {
    id: "21",
    title: "112",
    thumbnail: {
      regular: {
        small: "/thumbnails/112/regular/small.jpg",
        medium: "/thumbnails/112/regular/medium.jpg",
        large: "/thumbnails/112/regular/large.jpg",
      },
    },
    year: 2013,
    category: "TV Series",
    rating: "PG",
    isBookmarked: false,
    isTrending: false,
    description: "112 is a gripping TV series that follows the lives of paramedics working in a bustling urban environment. The show provides an inside look at the high-stakes world of emergency medical services, focusing on the challenges and triumphs faced by the team as they respond to life-and-death situations. Each episode offers a mix of heart-pounding action and emotional storytelling, highlighting the dedication and bravery of those who work tirelessly to save lives. With its realistic portrayal of emergency response and compelling character development, 112 is a must-watch for fans of medical dramas and action-packed TV series."
  },
  {
    id: "22",
    title: "Lone Heart",
    thumbnail: {
      regular: {
        small: "/thumbnails/lone-heart/regular/small.jpg",
        medium: "/thumbnails/lone-heart/regular/medium.jpg",
        large: "/thumbnails/lone-heart/regular/large.jpg",
      },
    },
    year: 2017,
    category: "Movie",
    rating: "E",
    isBookmarked: true,
    isTrending: false,
    description: "Lone Heart is a poignant drama that tells the story of a solitary rancher struggling to keep his family legacy alive. Set against the backdrop of vast, rugged landscapes, the film explores themes of isolation, resilience, and the changing face of rural America. As the protagonist battles financial hardships and personal demons, he forms an unlikely bond with a young drifter, leading to a journey of redemption and self-discovery. With its beautifully shot scenery and powerful performances, Lone Heart is a moving exploration of the human spirit and the ties that bind us to our roots."
  },
  {
    id: "23",
    title: "Production Line",
    thumbnail: {
      regular: {
        small: "/thumbnails/production-line/regular/small.jpg",
        medium: "/thumbnails/production-line/regular/medium.jpg",
        large: "/thumbnails/production-line/regular/large.jpg",
      },
    },
    year: 2018,
    category: "TV Series",
    rating: "PG",
    isBookmarked: false,
    isTrending: false,
    description: "Production Line is an engaging TV series that delves into the intricacies of modern manufacturing. The show provides a behind-the-scenes look at various factories, showcasing the processes and technologies that bring everyday products to life. Each episode focuses on a different industry, from automotive to electronics, offering viewers a comprehensive understanding of how things are made. Through expert interviews, detailed demonstrations, and real-world examples, Production Line highlights the innovation and craftsmanship that drive the manufacturing sector. It's an educational and fascinating series for anyone interested in engineering, technology, and industrial processes."
  },
  {
    id: "24",
    title: "Dogs",
    thumbnail: {
      regular: {
        small: "/thumbnails/dogs/regular/small.jpg",
        medium: "/thumbnails/dogs/regular/medium.jpg",
        large: "/thumbnails/dogs/regular/large.jpg",
      },
    },
    year: 2016,
    category: "TV Series",
    rating: "E",
    isBookmarked: true,
    isTrending: false,
    description: "Dogs is a heartwarming documentary series that celebrates the profound bond between humans and their canine companions. Each episode tells the story of a different dog and its owner, highlighting the unique ways in which these animals impact our lives. From working dogs to family pets, the series explores the diverse roles that dogs play in our world, offering insight into their intelligence, loyalty, and emotional support. With its touching narratives and captivating visuals, Dogs is a must-watch for animal lovers, showcasing the deep connection and unconditional love that dogs bring into our lives."
  },
  {
    id: "25",
    title: "Asia in 24 Days",
    thumbnail: {
      regular: {
        small: "/thumbnails/asia-in-24-days/regular/small.jpg",
        medium: "/thumbnails/asia-in-24-days/regular/medium.jpg",
        large: "/thumbnails/asia-in-24-days/regular/large.jpg",
      },
    },
    year: 2020,
    category: "TV Series",
    rating: "PG",
    isBookmarked: false,
    isTrending: false,
    description: "Asia in 24 Days is an exhilarating travel series that takes viewers on a whirlwind journey through the diverse and vibrant continent of Asia. Hosted by a charismatic travel enthusiast, the show covers 24 cities in 24 days, offering an immersive experience of the rich cultures, stunning landscapes, and bustling urban centers of Asia. Each episode features local cuisine, historic landmarks, and hidden gems, providing a comprehensive and authentic look at each destination. With its fast-paced and visually stunning presentation, Asia in 24 Days is a must-watch for travel aficionados and anyone looking to explore the wonders of Asia."
  },
  {
    id: "26",
    title: "The Tasty Tour",
    thumbnail: {
      regular: {
        small: "/thumbnails/the-tasty-tour/regular/small.jpg",
        medium: "/thumbnails/the-tasty-tour/regular/medium.jpg",
        large: "/thumbnails/the-tasty-tour/regular/large.jpg",
      },
    },
    year: 2016,
    category: "TV Series",
    rating: "PG",
    isBookmarked: false,
    isTrending: false,
    description: "The Tasty Tour is a delightful culinary travel series that explores the world’s most delicious and diverse cuisines. Hosted by a renowned chef, each episode takes viewers to a different country, uncovering local food traditions, unique ingredients, and mouth-watering dishes. From bustling street markets to high-end restaurants, The Tasty Tour offers an in-depth look at the culinary culture of each destination. The show not only highlights the flavors and techniques of various cuisines but also tells the stories of the people behind the food. It's a feast for the senses and a must-watch for food lovers and travel enthusiasts alike."
  },
  {
    id: "27",
    title: "Darker",
    thumbnail: {
      regular: {
        small: "/thumbnails/darker/regular/small.jpg",
        medium: "/thumbnails/darker/regular/medium.jpg",
        large: "/thumbnails/darker/regular/large.jpg",
      },
    },
    year: 2017,
    category: "Movie",
    rating: "18+",
    isBookmarked: true,
    isTrending: false,
    description: "Darker is a psychological thriller that delves into the twisted mind of its protagonist. The film follows a troubled detective who is drawn into a web of deceit and danger as he investigates a series of gruesome murders. As he digs deeper, he begins to question his own sanity and the motives of those around him. Darker is a chilling and suspenseful movie that keeps viewers on the edge of their seats with its intricate plot, atmospheric cinematography, and intense performances. It's a must-watch for fans of dark, mind-bending thrillers that explore the depths of human psychology."
  },
  {
    id: "28",
    title: "Unresolved Cases",
    thumbnail: {
      regular: {
        small: "/thumbnails/unresolved-cases/regular/small.jpg",
        medium: "/thumbnails/unresolved-cases/regular/medium.jpg",
        large: "/thumbnails/unresolved-cases/regular/large.jpg",
      },
    },
    year: 2018,
    category: "TV Series",
    rating: "18+",
    isBookmarked: false,
    isTrending: false,
    description: "Unresolved Cases is a compelling crime series that re-examines cold cases and unsolved mysteries. Each episode delves into a different case, exploring the evidence, interviewing key players, and uncovering new leads. The show combines thorough investigative work with gripping storytelling, shedding light on the complexities of each case and the impact on the victims' families. Unresolved Cases offers a deep dive into the world of true crime, appealing to fans of detective stories and investigative journalism. It's a thought-provoking series that seeks justice and closure for those affected by these enduring mysteries."
  },
  {
    id: "29",
    title: "Mission: Saturn",
    thumbnail: {
      regular: {
        small: "/thumbnails/mission-saturn/regular/small.jpg",
        medium: "/thumbnails/mission-saturn/regular/medium.jpg",
        large: "/thumbnails/mission-saturn/regular/large.jpg",
      },
    },
    year: 2017,
    category: "Movie",
    rating: "PG",
    isBookmarked: true,
    isTrending: false,
    description: "Mission: Saturn is a visually stunning sci-fi adventure that takes viewers on an epic journey to the ringed planet. The film follows a team of astronauts as they embark on a daring mission to explore Saturn and its mysterious moons. As they encounter unexpected challenges and make groundbreaking discoveries, the crew must work together to survive the harsh conditions of space. With its breathtaking special effects, compelling storyline, and strong character development, Mission: Saturn is a thrilling and immersive experience that captivates audiences and ignites the imagination. It's a must-see for fans of space exploration and science fiction."
  },
  {
    id: "30",
    title: "Remote Work",
    thumbnail: {
      regular: {
        small: "/thumbnails/relentless/regular/small.jpg",
        medium: "/thumbnails/relentless/regular/medium.jpg",
        large: "/thumbnails/relentless/regular/large.jpg",
      },
    },
    year: 2019,
    category: "TV Series",
    rating: "E",
    isBookmarked: true,
    isTrending: false,
    description: "Remote Work is an insightful documentary series that explores the rise of remote work and its impact on the modern workforce. The series delves into the challenges and benefits of working from home, highlighting personal stories from individuals across various industries. It examines the changing dynamics of work-life balance, productivity, and mental health. Through expert interviews, real-world examples, and practical advice, Remote Work offers a comprehensive look at how remote work is reshaping the future of work. It's an essential watch for anyone navigating the new normal of remote employment or interested in the evolving workplace."
  },
];
