let array=[1,2,3,4,5,6,7,8]
let myIterator = array.values();
// console.log(myIterator.next())
// console.log(myIterator.next())
for (const iterator of array) {
    console.log(iterator);
}
let user={
    name:"karthik",
    age:21,
    place:"kochi"
}
// let use=Object.values(user);
// console.log(array.values())
console.log(typeof array)
count = 0 
let res = {
    [Symbol.iterator]:()=>{
        return{
            next:()=>{
                done = false
                let values = Object.values(user)
                // console.log(values.length);
                if(count >= values.length)
                done = true
                return{
                    value:values[count++],
                    done:done
                }
            }
        }
    }
}
console.log(res)
for (const inter of res) {
    console.log(inter);
}