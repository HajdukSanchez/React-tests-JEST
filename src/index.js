const cities = ['paris', 'bogota', 'lima', 'buenos aires']
const randomString = () => {
  const string = cities[Math.floor(Math.random * cities.length)]
  return string
}

module.exports = randomString
