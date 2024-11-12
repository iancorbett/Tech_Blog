// /api/users/signup

document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;

    const username = document.getElementById("username").value;

    const password = document.getElementById("password").value;


    fetch("/api/users/", {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({
            email: email,
            username: username, 
            password: password
        })
    })
    .then(res => {
        if(res.status == "200") {
            window.location.href = "/dashboard"
        }
    })
    .catch(err => {
        console.log(err)
    })



})