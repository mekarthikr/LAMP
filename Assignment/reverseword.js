let string="I am the one who knocks";
function reverseWord(sentence){
    let change=sentence.split(" ")
    let reverse=change.map((value)=> value.split("").reverse().join(""))
    return reverse.join(" ")
}
console.log(reverseWord(string))
//console.log(string.split("").reverse().join("").split(" ").reverse().join(" "))