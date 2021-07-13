const randomString = require('../index')

describe('RandomString functionalities', () => {
  test('should be have a string', () => {
    expect(typeof randomString()).toBe('string')
  })
  test(`should a city doesn't exists`, () => {
    expect(randomString()).not.toMatch(/Cordoba/)
  })
})
