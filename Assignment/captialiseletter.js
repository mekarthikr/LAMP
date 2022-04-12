let string="live from new york, it's saturday night";
function capitaliseLetter(sentence){
    let reverse=sentence.split(" ").map((value)=> value.charAt(0).toUpperCase()+value.slice(1))
    return reverse.join(" ")
}
console.log(string)
console.log(capitaliseLetter(string))