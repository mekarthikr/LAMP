let string="Scissors cuts paper Paper covers rock Rock crushes lizard"
count={}
string.toLowerCase().split("").forEach((key)=>{
    if(!(key in count))
    {
        count[key]=1
    }
    else
    {
        count[key]=(count[key])+1
    }
})
console.log(count)