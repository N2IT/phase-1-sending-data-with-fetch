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
    .then(res => res.json())
    .then(data => appendToDom(data.id))
    .catch(function (error) {
        // console.log(error.message);
        let body = document.querySelector('body')
        let h3 = document.createElement('h3')
        h3.textContent = error.message
        body.appendChild(h3)
    });
}

submitData("Xavi E", "daman@here.com")


//Part 2 - HANDLE THE RESPONSE
function appendToDom(id){
    let body = document.querySelector('body')
    let p = document.createElement('p')
    p.textContent = id
    body.appendChild(p)
}
