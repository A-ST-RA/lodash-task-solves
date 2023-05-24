const _ = require('lodash');

const textSlice = (text, length) => {
    return _.template('<%= text %>...')({
        text: _(text)
            .words(/[^\ ^\n]+/g)
            .take(length)
            .join(' ')
        }
    )
}

console.log(textSlice('Curabitur fermentum ante at nulla molestie, vitae fermentum est cursus. Nam non justo libero. Proin orci tortor, hendrerit quis consectetur nec, egestas faucibus libero.', 10));