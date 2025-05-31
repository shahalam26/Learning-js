const mySym = Symbol("key1")
const obj={
[mySym]: "mykey1",
 name:"Shah Ji",
 age :18,
 email:"shahji@gmail.com",
 isLoggedIn:false,
 lastLoginDays:["Monday","Saturday"]
}
// console.log(obj.name)
// console.log(obj["name"])
// console.log(`Name is ${obj.name} Age is ${obj["age"]}`)
// console.log(typeof(obj[mySym]))
//Object.freeze(obj)
obj.email="shahalamji@gmail.com"
console.log(obj.email)
console.log(obj)


obj.greeting=function(){
    console.log("hello bhai ");
}
console.log(obj.greeting);