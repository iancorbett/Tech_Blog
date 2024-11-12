document.getElementById("logout-link")
.addEventListener("click", function() {
    fetch("/api/users/logout", {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        }
    })
    .then(res => {
        window.location.reload()
        
    })
})