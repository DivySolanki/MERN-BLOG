const router = require('express').Router();
const Post = require('../models/Post');
const { LocalStorage } = require('node-localstorage')
const localStorage = new LocalStorage('./scratch')


// CREATE NEW POST
router.post('/', async (req, res) => {
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    } catch (err) {
        res.status(500).json(err)
    }
});

// UPDATE POST
router.put('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.username === req.body.username) {
            try {
                const updatedPost = await Post.findByIdAndUpdate(req.params.id, {
                    $set: req.body,
                }, { new: true });
                res.status(200).json(updatedPost);
            } catch (err) {
                res.status(500).json(err);
            }
        } else {
            res.status(401).json('You can update only your post');
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

// DELETE POST
router.delete('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.username === req.body.username) {
            try {
                await post.delete();
                res.status(200).json("Post has been deleted....");
            } catch (err) {
                res.status(500).json(err);
            }
        } else {
            res.status(401).json('You can delete only your post');
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET POST
router.get("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json(err)
    }
})

// GET ALL POSTS
router.get("/", async (req, res) => {
    const username = req.query.user;
    const catname = req.query.cat;
    try {
        let posts;
        if (username) {
            posts = await Post.find({ username })
        } else if (catname) {
            posts = await Post.find({
                categories: {
                    $in: [catname]
                }
            })
        } else {
            posts = await Post.find();
        }
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json(err);
    }

});

router.put("/:id/like", async (req, res) => {
    const { id } = req.params;
    const username = req.body.username;
    try {
        const post = await Post.findById(id);
        if (!post.liked.includes(username)) {
            await post.updateOne({ $push: { liked: username } })
            res.status(200).json("post has been liked")
        } else {
            await post.updateOne({ $pull: { liked: username } })
            res.status(200).json("post has been disliked")
        }
    } catch (err) {
        res.status(500).json(err)
    }
});

// router.patch("/:id/unlike", async (req, res) => {
//     const { id } = req.params;
//     const username = req.body.username;
//     try {
//         const updatedBlogPost = await Post.findByIdAndUpdate(
//             id,
//             { $pull: { liked: username } },
//             { new: true }
//         )
//         res.status(200).json(updatedBlogPost)
//         console.log(updatedBlogPost);
//     } catch (err) {
//         res.status(500).json(err)
//     }
// })

// router.patch("/:id/unlikedBlogPost", async (req, res) => {

//     const { id } = req.params;
//     const post = await Post.findById(id);

//     try {
//         const updatedBlogPost = await Post.findByIdAndUpdate(
//             id,
//             { likes: post.likes - 1 },
//             { new: true }
//         );

//         res.status(200).json(updatedBlogPost);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// router.put("/:id/like", (req, res) => {
//     const { id } = req.params;
//     const user = localStorage.getItem("user");

//     Post.findByIdAndUpdate(id, {
//         $push: { likes: user._id }
//     }, {
//         new: true
//     }).exec((err, result) => {
//         if (err) {
//             return res.status(422).json({ error: err })
//         } else {
//             res.json(result)
//         }
//     })
// });

module.exports = router