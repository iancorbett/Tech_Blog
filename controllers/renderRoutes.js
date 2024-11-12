const router = require("express").Router()
const { Post, Comment } = require("../models")

// const dummyBlogposts = [
//     {
//         title: "My First blogpost",
//         creator_name: "user1",
//         content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa necessitatibus nulla aperiam ipsa rem possimus nostrum, illo quia excepturi dicta eaque at earum quasi, cumque nemo tempora ad id magni.",
//         date_created: "10/19/2024",
//         id: 1
//     },
//     {
//         title: "My Second blogpost",
//         creator_name: "user1",
//         content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa necessitatibus nulla aperiam ipsa rem possimus nostrum, illo quia excepturi dicta eaque at earum quasi, cumque nemo tempora ad id magni.",
//         date_created: "10/20/2024",
//         id: 2
//     }
// ]

// render homepage handlebars
router.get("/", (req, res) => {

    Post.findAll()
    .then(results => {
        const blogposts = results.map(item => item.get({plain: true}))

        res.render("homepage", {
            blogposts: blogposts,
            loggedIn: req.session.logged_in
        })
    })

    
})

router.get("/post/:id", (req, res) => {

    Post.findByPk(req.params.id, {
        include: [Comment]
    })
    .then(result => {
        const blogpost = result.get({plain: true})

        console.log(blogpost)

        res.render("postdetails", {
            blogpost: blogpost,
            loggedIn: req.session.logged_in
        })
    })

    
})

// render login handlebars
router.get("/login", (req, res) => {
    res.render("login", {
        loggedIn: req.session.logged_in
    })
})


// render signup handlebars
router.get("/signup", (req, res) => {
    res.render("signup", {
        loggedIn: req.session.logged_in
    })
})

// render signup handlebars
router.get("/dashboard", (req, res) => {
    
    if(req.session.logged_in == true) {
        res.render("dashboard", {
            loggedIn: req.session.logged_in
        })
    } else {
        res.redirect("/login")
    }


})



module.exports = router;