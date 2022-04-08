function fun1(){
    let name = "Karthik"
    function fun2(){
        console.log(name)
    }
    return fun2;
}
const fun = fun1();
fun()