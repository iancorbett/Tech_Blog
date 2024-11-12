//  /api/comments


document.getElementById("create-comment").addEventListener("submit", function(event) {
    event.preventDefault();

    const post_id = document.getElementById("post_id").value;
    const content = document.getElementById("content").value;

    fetch("/api/comments", {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({
            post_id: post_id, 
            content: content
        })
    })
    .then(res => {
        if(res.status == "200") {
            // window.location.href = "/post"
            window.location.reload();
        }
    })
    .catch(err => {
        console.log(err)
    })
})