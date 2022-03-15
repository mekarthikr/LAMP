function makeRequest(url,timeout=2000,callback)
{
    console.log(url);
    console.log(url,timeout);
    console.log(url,timeout,callback);

}
makeRequest("parameter pass");
makeRequest("parameter pass", 500);
makeRequest("parameter pass", 500, function(body) {
    doSomething(body);
});