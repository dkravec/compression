module.exports = {
    compress,
    decompress,
    compressionExample
}

function compress(word) {
    var finalCompression = []
    var lastLetter = undefined
    var currentAmount = 0

    for (let i = 0; i < word.length; i++) {
        const currentLetter = word[i]
        if (!lastLetter) {
            lastLetter = currentLetter
            currentAmount++
        }
        else if (lastLetter != currentLetter) {
            finalCompression.push(lastLetter)
            finalCompression.push(currentAmount)


            currentAmount = 1
            lastLetter = currentLetter

        } else if (lastLetter==currentLetter) {
            currentAmount++
        } else { 
            console.log('unknown error')
        }
    }

    finalCompression.push(lastLetter)
    finalCompression.push(currentAmount)

    return finalCompression.join('')
}

function decompress(word) {
    var finalDecompression = [ ]
    var whichRead = 'data'

    for (let i = 0; i < word.length; i++) {

        if (whichRead == 'data') {
            whichRead = 'compress'

            const currentLetter = word[i]
            const amountLetter = word[i+1]
    
            for (let j=0; j<amountLetter; j++) {
                finalDecompression.push(currentLetter)
            }

        } else {
            whichRead = 'data'
        }
    }
    
    return finalDecompression.join('')
}

function compressionExample() {
    console.log(`--------------`)
    console.log(`type_1 example`)
    console.log(`--------------`)
    const type_1_compressWord = "abbccccddefff"
    const type_1_compressedWord = compress(type_1_compressWord)
    const type_1_decompressedWord = decompress(type_1_compressedWord)
    console.log(type_1_compressWord)
    console.log(type_1_compressedWord)
    console.log(type_1_decompressedWord)
    console.log(`--------------`)
}
