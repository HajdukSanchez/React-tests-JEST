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

test('should the callback work', () => {
  expect(
    reverseString('hello', (string) => {
      expect(string).toBe('olleh') // This is a reverse string expected
    })
  )
})
