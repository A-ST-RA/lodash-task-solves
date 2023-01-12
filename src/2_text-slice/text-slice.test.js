const sliceText = require('./text-slice');

const testText = `Curabitur fermentum ante at nulla molestie,
vitae fermentum est cursus. Nam non justo libero. 
Proin orci tortor, hendrerit quis consectetur nec,
egestas faucibus libero.
`

test('should be defined', () => {
    expect(sliceText).toBeDefined();
})

test('should take text and length and return cutted string with ... on end', () => {
    const cuttedText = "Curabitur fermentum ante at nulla molestie, vitae...";

    expect(sliceText(testText, 7)).toBe(cuttedText);
})
