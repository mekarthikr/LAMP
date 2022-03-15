function display(num)
{
    var value;
    if(num < 5)
    {
         value = 100;
        console.log(value);
    }
    else{
        console.log(value); //returns value = undefined so var permits redeclaration and its not block level
    }
}

display(4);