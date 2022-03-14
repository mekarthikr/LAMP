function square()
{
    console.log("square");
    var funcs=[];
    for(let i=0;i<10;i++)
    {
        funcs.push(function(){
            console.log(i*i);
        });
    }
    funcs.forEach(function(func){
        func();
    })
}
function cube()
{
    console.log("cube");
    var funcs = [],
    object = {
        1: true,
        2: true,
        3: true
    };

for (let key in object) {
    funcs.push(function() {
        console.log(key**2);
    });
}

funcs.forEach(function(func) {
    func();     
});
}
cube();
square();
