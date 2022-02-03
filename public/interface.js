"use strict";
let userDetails = (props) => {
    console.log(props.firstname + ', ' + props.lastname + ', ' + props.age + ', ' + props.email);
};
userDetails({
    firstname: "Shubham",
    lastname: "Verma",
    age: 30,
    gender: "male",
    email: "shubham@gmail.com"
});
