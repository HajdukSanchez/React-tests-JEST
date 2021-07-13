// This is a test file for the global tests

/* Variables for compare and do the tests */
const text = 'hello world'
const fruits = ['apple', 'pineapple', 'orange']

test('should the variable contain a text', () => {
  expect(text).toMatch(/world/)
})

test('should the array contains an apple', () => {
  expect(fruits).toContain('apple')
})

test('should be greater than', () => {
  expect(10).toBeGreaterThan(9)
})

test('should be true', () => {
  expect(true).toBeTruthy()
})
test('should be false', () => {
  expect(false).toBeFalsy()
})

/* callbacks test */
const reverseString = (string, callback) => {
  // This function convert to string something that receives
  callback(string.split('').reverse().join(''))
}
test('should the callback works', () => {
  expect(
    reverseString('hello', (string) => {
      expect(string).toBe('olleh') // This is a reverse string expected
    })
  )
})

/* Promises */
const reverseString2 = (string) => {
  return new Promise((resolve, reject) => {
    if (!string) reject(new Error('Error'))
    resolve(string.split('').reverse().join(''))
  })
}
test('should the promise works', () => {
  return reverseString2('hello').then((string) => {
    expect(string).toBe('olleh')
  })
})
test('should async/await works', async () => {
  const string = await reverseString2('hello')
  expect(string).toBe('olleh')
})

afterEach(() => console.log('After each test'))
afterAll(() => console.log('After all tests'))
beforeEach(() => console.log('Before each test'))
beforeAll(() => console.log('Before all tests'))
