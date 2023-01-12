const wordsSum = require('./words-sum.js');

const testText = `
    Классический «Lorem ipsum dolor sit amet…»
    проход отнести к ремиксов римского философа
    Цицерона 45 г. до н.э. текст De Finibus Bonorum
    et Malorum («О крайностями добра и зла»).
    Более конкретно, проход, как полагают, происходит
    из секций 1.10.32 - 33 из его текста,
    с наиболее заметным часть извлечена ниже:
`

test('should be defined', () => {
    expect(wordsSum).toBeDefined();
})

test('should receive text and return here length', () => {
    expect(wordsSum(testText)).toEqual(50);
})
