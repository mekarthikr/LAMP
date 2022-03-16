//promises alert you when the asynchronous operation is done
//Pending,Fulfilled,Rejected
function promises(){
    var promise=new Promise(function(resolve,reject){
        resolve();
    });
    promise.then(function(data){
        console.log(data)
    })

}
promises()