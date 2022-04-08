//promises alert you when the asynchronous operation is done
//Pending,Fulfilled,Rejected
function promises(){
    var promise=new Promise(function(resolve,reject){
        var fr=new FileReader('dummy.txt');
        resolve();
        reject();
    });
    promise.then(function(data="hello"){
        console.log(data)
    })
    promise.then(function(data="reject"){
        console.log(data)
    })

}
promises()