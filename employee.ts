interface User{
    name:string,
    address:string
}
interface Employee extends User{
    empid:number,
    project:string,
    exp:number
}

var emp:Employee = {
    name:"abc",
    address:"hyderabad",
    empid:2859,
    project:"Banking",
    exp:5
}

console.log(emp);