const tenName = ["", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
const oneName = ["","one", "two", "three", "four", "five", "six", "seven", "eight", "nine",]
const teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]
const hundredPlace =["", "one-hundred", "two-hundred", "three-hundred", "four-hundred", "five-hundred", "six-hundred", "seven-hundred", "eight-hundred", "nine-hundred"]
for(let number = 1; number <= 999; number++){
    let output = ""
    if (number < 10){
        output = oneName[number]
    } else if (number >= 10 && number <= 19) { //greater than 10,  less than 19
        output = teens[number - 10]
        // console.log(i)
    } if (number >= 20 && number <= 99) {
        const tensPlace = Math.floor(number / 10)
        const onesPlace = number - (tensPlace * 10)
        // console.log("i is", i, "and tensPlace is", tensPlace, "and our onesPlace is", onesPlace)
        output = tenName[tensPlace] + oneName[onesPlace]
    } if(number >=100 && number <= 999){
        const hundreds = Math.floor(number / 100)
        const tens =(number % 100)
        if (tens < 10){
            output = hundredPlace[hundreds] + oneName[tens]
        } else if (tens >= 10 && tens <= 19) {
            output = hundredPlace[hundreds] + teens[tens - 10]
        } if (tens >= 20 && tens <= 99) {
            const tensPlace = Math.floor(tens / 10)
            const onesPlace = tens - (tensPlace * 10)
            output =hundredPlace[hundreds]+ tenName[tensPlace] + oneName[onesPlace]
        }
    }
    console.log(output)
}
