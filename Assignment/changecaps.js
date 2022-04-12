let string="WinTer Is coMing"
function changeCaps(string)
{
    let result=string.split("").map((value)=>{
        if(value.match(/[a-z]/)!=null){
            return value.toUpperCase();
        }
        if(value.match(/[A-Z]/)!=null){
            return value.toLowerCase();
        }
        return value;
    })
    return result.join("")
}
console.log(string)
console.log(changeCaps(string))