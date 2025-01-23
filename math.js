module.exports.addNums = function(...a) {
    return a.reduce((acc, i) => acc + i, 0)
}

