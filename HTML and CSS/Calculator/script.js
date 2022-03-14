function add(n)
{
    var string;
    string=document.getElementById("display").innerHTML;
    string=string+n;
    document.getElementById("display").innerHTML=string;
}
function equal(){
    var result,n;
    n=document.getElementById("display").innerHTML;
    result=eval(n)
    document.getElementById("display").innerHTML=result;
}
function cleara()
{
    var string,emp="" ;
    string=document.getElementById("display").innerHTML;
    string=string.slice(0,-1);
    document.getElementById("display").innerHTML=emp;
}
function cleare()
{
    var string;
    string=document.getElementById("display").innerHTML;
    string=string.slice(0,-1);
    document.getElementById("display").innerHTML=string;
}