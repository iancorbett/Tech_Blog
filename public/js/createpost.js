// /api/posts

document.getElementById("create-post").addEventListener("submit", function(event) {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;

    fetch("/api/posts", {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({
            title: title, 
            content: content
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