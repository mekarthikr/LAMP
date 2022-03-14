function DisplayDateandTime(){
    const d = new Date();
    var date=d.getDate()+"\\"+d.getMonth()+"\\"+d.getFullYear();
    document.getElementById("textarea").value=date;
}
