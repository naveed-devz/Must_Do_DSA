// shallow copy creates a new object , but only copoies the top level properties
const original = {
    name:"naveed",
    address:{
        city:"chittoor11"
    }
}

const copy = {...original};

copy.name = "shaik",
copy.address.city = "chittoor"
console.log(copy);
