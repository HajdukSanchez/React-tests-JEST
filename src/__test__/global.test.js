// This is a test file for the global tests

/* Text for compare and test */
const text = 'hello world'

test('should contain a text', () => {
  expect(text).toMatch(/world/)
})
