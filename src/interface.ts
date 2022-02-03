interface DataProps {
    firstname: string,
    lastname: string,
    age: number,
    gender: string,
    email: string
}

let userDetails = (props: DataProps) => {
    console.log(props.firstname+', '+props.lastname+', '+props.age+', '+props.email);
}
userDetails({
    firstname: "Shubham",
    lastname: "Verma",
    age: 30,
    gender: "male",
    email: "shubham@gmail.com"
});