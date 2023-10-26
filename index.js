// Add your code here
//Submit POST request
//write function submitData(userName, userEmail)
//must return fetch() inside submitData() to pass test

//TEST1
// const userData = {
//     name: "Tony Eder",
//     email: "tonyeder11@gmail.com"
// }
function submitData(name, email){
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            name: `${name}`,
            email: `${email}`,
        })
    })
    .then(res => res.json)
    .then(data => console.log(data))
}

submitData("Tommy Tornado", "spinemup@anyhow.com")