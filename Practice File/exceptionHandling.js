let number="hola";//by removing let error will occur
function print(){
    if(number==5)
    {
        console.log("number is 5");  
        return true;  
    }else{
        console.log("number is not 5")
        return false;
    }
}
try{
    console.log(print());
}catch(error){
    console.log("something is wrong "+error);
}