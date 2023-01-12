const _ = require('lodash');

const dotty = _.template('<%= text %>...')

const textSlice = (text, length) => {
    return dotty({
        text: _(text)
            .words(/[^\ ^\n]+/g)
            .take(length)
            .join(' ')
        }
    )
}

module.exports = textSlice;