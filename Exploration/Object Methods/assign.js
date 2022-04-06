const name={
    first:"ross",
    second:"rachel",
}
const relation={
    status:"on Break"
}

const join=Object.assign(name,relation)
console.log(name)
console.log(relation)
console.log(join)

//copies all the property from source object to target object
//in this case name is the target and relation is the source