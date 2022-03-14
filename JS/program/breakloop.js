function forloop()
{
    for(let number=0;number<10;number++)
    {
        if(number==8)
        {
            console.log("breaks loop")
            break;
        }
        console.log(number);
    }
}
forloop()