const AnimalsJson = require('./animals.json')
const AnimalModel = require('../../models/animal')

const createAnimals = async (animals) => {
  const xx = await AnimalModel.create(animals)
  console.log(`Created ${xx.length} animals`)
}

module.exports = createAnimals(AnimalsJson)
