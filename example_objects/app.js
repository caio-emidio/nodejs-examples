var user = {
    first_name: "caio",
    last_name: "carnelos",
    age: 27,
    emails:{
        google: ["caio.emidio@gmail.com","caio.carnelos@gmail.com"],
        hotmail: "huseno@hotmail.com",
    }
};

console.log(`Create first user: ${user.first_name}, ${user.last_name}`)

//diffs to input data
//like node
user.first_name= "Caio";

//like python
user["last_name"] = "Carnelos";

console.log(`Correct user: ${user.first_name}, ${user.last_name}`)

console.log('Testing Remove - age')
console.log(user)
delete user.age;
console.log(user)

console.log('using information - emails')
// for in emails
for (email in user.emails) {
    console.log(email)
}