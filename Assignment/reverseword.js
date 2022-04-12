let string="I am the one who knocks";
function reverseWord(sentence){
    let reverse=sentence.split(" ").map((value)=> value.split("").reverse().join(""))
    return reverse.join(" ")
}
console.log(string)
console.log(reverseWord(string))
//console.log(string.split("").reverse().join("").split(" ").reverse().join(" "))
