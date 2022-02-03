interface DataProps {
    firstname: string,
    lastname: string,
    age: number,
    gender: string,
    email: string
}

let usersData:DataProps = {
    firstname: "Shubham",
    lastname: "Verma",
    age: 30,
    gender: "F",
    email: "shubhamv@gmail.com"
}
usersData['email'] = "sonu@gmail.com"; //In typescript we can not update integer or number from string value
//usersData.pincode = 110088; In typescript we can not update object value
console.log(usersData);