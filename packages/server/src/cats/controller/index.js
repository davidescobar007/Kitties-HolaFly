const cats = [
  {
    id: 0,
    name: 'Leo',
    gender: 'male',
    imageFileName: 'leo.jpeg',
    description:
      'Leo is a supercute boy who really wants his forever home for Christmas. He is quite a chilled cat and is used to people and other cats. Come and meet Leo and give him the loving home he is yearning for.',
    age: '10 years old',
  },
  {
    id: 1,
    name: 'Jasmine',
    gender: 'female',
    imageFileName: 'jasmine.jpeg',
    description:
      'Jasmine is a beautiful young girl who will make a wonderful pet to any household. She is loving and fun and gets on with other cats. Please come and meet Jasmin at the cat shelter and I am sure you will fall in love with her.',
    age: '2 years old',
  },
  {
    id: 2,
    name: 'MARTHA',
    gender: 'female',
    imageFileName: 'martha.jpeg',
    description:
      "MARTHA is a very friendly girl who has sadly come into the care of the RSPCA after her owner died. Martha is 12 years old. Martha loves all humans, both male & female but isn't too keen on children so will need an adult only household. Martha loves both indoors & outdoors.",
    age: '12 years old',
  },
  {
    id: 3,
    name: 'Toby',
    gender: 'male',
    imageFileName: 'toby.jpeg',
    description:
      "Toby came into us as an injured stray. A member of the public reported him to us as he was struggling to eat with an apparent mouth injury and was becoming very skinny. He'd been treated and has started to put weight on again. He is super friendly and even has a love heart shaped marking on his side!",
    age: '7 years old',
  },
  {
    id: 4,
    name: 'Vienna',
    gender: 'female',
    imageFileName: 'vienna.jpeg',
    description:
      "Vienna was brought to us by an Animal Rescue Officer after she was found abandoned, covered in fleas and with nasty sores on her feet. Her feet have healed well and she's been treated for fleas and worms. She is very friendly and would love a new home.",
    age: '8 years old',
  },
  {
    id: 5,
    name: 'Joey',
    gender: 'male',
    imageFileName: 'joey.jpeg',
    description:
      "I'm a sweet older gentleman who sadly lost my home at the ripe old age of 16 and was found straying. My DOB may say I'm older but my mind and body tells me different! I get about very well and and love to potter around and see what everyone else is up to! I'm an easy going chap with people and will always come to say hello. I love my food and will happily have anything that is on offer!",
    age: '14 years old',
  },
  {
    id: 6,
    name: 'Mary',
    gender: 'female',
    imageFileName: 'mary.jpeg',
    description:
      "Our Mary is the second of our lovely Mama cats who've raised their babies and are now on the lookout for their furever (retirement!) home! Mary and Mumma are sisters, but they don't need to be rehomed together. They've been in separate foster homes and haven't missed each other.",
    age: 'around a year old',
  },
];

module.exports.getCatList = async (res) => {
  setTimeout(() => {
    return res.status(200).json(cats);
  }, 1900);
};

module.exports.getCat = async (req, res) => {
  const cat = cats.find((item) => req.params.catId === item.name);
  setTimeout(() => {
    return res.status(200).json(cat);
  }, 1900);
};
