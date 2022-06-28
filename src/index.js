module.exports = function toReadable(number) {
    const toNineteen = [, 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
        'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    const tens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    const digitNumber = [, , 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

    const numSplit = String(number).split('')
    // const twoNumber = numSplit.splice(0, 1).join('')

    if (number === 0)
        return "zero"

    if (number < 20)
        return toNineteen[number]

    if (number < 100 && numSplit[1] == '0')
        return digitNumber[numSplit[0]]

    if (number < 100)
        return `${digitNumber[numSplit[0]]} ${toNineteen[numSplit[1]]}`

    if (number < 1000 && numSplit[1] == '0' && numSplit[2] == '0')
        return `${toNineteen[numSplit[0]]} hundred`

    if (number < 1000 && numSplit[1] == '1')
        return `${toNineteen[numSplit[0]]} hundred ${tens[numSplit[2]]}`

    if (number < 1000 && numSplit[1] == '0')
        return `${toNineteen[numSplit[0]]} hundred ${toNineteen[numSplit[2]]}`

    if (number < 1000 && numSplit[2] == '0')
        return `${toNineteen[numSplit[0]]} hundred ${digitNumber[numSplit[1]]}`

    if (number < 1000)
        return `${toNineteen[numSplit[0]]} hundred ${digitNumber[numSplit[1]]} ${toNineteen[numSplit[2]]}`
}