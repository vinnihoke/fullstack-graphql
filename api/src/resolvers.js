/**
 * Here are your Resolvers for your Schema. They must match
 * the type definitions in your scheama
 */
// Don't pass in the models directly. Although it will work, it will make testing more difficult.

module.exports = {
  Query: {
    pets(_, { input }, { models }) {
      return models.Pet.findMany(input)
    },
    pet(_, { input }, { models }) {
      return models.Pet.findOne(input)
    },
    shoes(_, { input }) {
      return [{ brand: 'nike', size: 12 }, { brand: 'adidas', size: 11 }].filter(shoe =>
        shoe.brand === input.brand
      )
    }
  },
  Mutation: {
    pet(_, { input }, { models }) {
      return models.Pet.create(input)
    }
  },
  // Pet: {
  //   img(pet) {
  //     return pet.type === 'DOG'
  //       ? 'https://placedog.net/300/300'
  //       : 'http://placekitten.com/300/300'
  //   }
  // },
  // User: {

  // }
}
