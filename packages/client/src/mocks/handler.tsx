import { rest } from 'msw';

export const handlers = [
  rest.get('https://localhost:5000/kittens', (req, res, ctx) => {
    // successful response
    return res(
      ctx.status(200),
      ctx.json([
        [
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
        ],
      ]),
      ctx.delay(1000)
    );
  }),
  rest.get('https://localhost:5000/kittens/Leo', (req, res, ctx) => {
    // successful response
    return res(
      ctx.status(200),
      ctx.json(
        {
          id: 0,
          name: 'Leo',
          gender: 'male',
          imageFileName: 'leo.jpeg',
          description:
            'Leo is a supercute boy who really wants his forever home for Christmas. He is quite a chilled cat and is used to people and other cats. Come and meet Leo and give him the loving home he is yearning for.',
          age: '10 years old',
        },

      ),
      ctx.delay(1000)
    );
  }),
];
