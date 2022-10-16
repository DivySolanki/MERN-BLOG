import axios from 'axios'
import React, { useContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import "./singlepost.css"
import { Link } from "react-router-dom"
import { Context } from '../../context/Context'

export default function SinglePost() {
    const location = useLocation()
    const path = location.pathname.split("/")[2]
    const [post, setPost] = useState({})
    const PF = "http://localhost:5000/images/";
    const { user } = useContext(Context);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [updateMode, setUpdateMode] = useState(false);
    const [postFetched, isFetching] = useState(false);
    const [like, setLike] = useState("");
    const [isLiked, setIsLiked] = useState(false);
    const [cats, setCats] = useState([]);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get("/posts/" + path)
            setPost(res.data)
            setTitle(res.data.title)
            setDesc(res.data.desc)
            setLike(res.data.liked.length)
            setComments(res.data.comments)
            isFetching(true)
        }
        getPost()
    }, [path, comments])

    useEffect(() => {
        postFetched && setIsLiked(post.liked.includes(user?.username))
    }, [user?.username, post.liked])

    const likeHandler = () => {
        try {
            axios.put("/posts/" + path + "/like", { username: user?.username })
        } catch (err) { }
        setLike(isLiked ? like - 1 : like + 1)
        setIsLiked(!isLiked)
    }

    const handleDelete = async () => {
        try {
            await axios.delete("/posts/" + path, { data: { username: user?.username } });
            window.location.replace("/");
        } catch (err) {

        }
    }

    const handleUpdate = async () => {
        try {
            await axios.put("/posts/" + path,
                { username: user?.username, title, desc }
            );
            setUpdateMode(false)
        } catch (err) {

        }
    }

    const makeComment = async (text, user) => {
        try {
            await axios.put("/posts/" + path + "/comment",
                { text, user }
            );
        } catch (err) {

        }
    }

    return (
        <div className='singlePost'>
            <div className="singlePostWrapper">
                {post.photo &&
                    (<img src={PF + post.photo} alt="" className="singlePostImg" />)
                }{
                    updateMode ? (<input type="text" value={title} className="singlePostTitleInput" autoFocus onChange={(e) => { setTitle(e.target.value) }} />) : (
                        <h1 className="singlePostTitle">
                            {title}
                            {post.username === user?.username && (
                                <div className="singlePostEdit">
                                    <i className="singlePostIcon fa-solid fa-pen-to-square" onClick={() => {
                                        setUpdateMode(true)
                                    }}></i>
                                    <i className="singlePostIcon fa-solid fa-trash-can" onClick={handleDelete}></i>
                                </div>
                            )}
                            {user?.username && (
                                <div className="singlePostEdit">
                                    <i className="fa-regular fa-heart" onClick={likeHandler}>
                                        <span> {like} likes</span>
                                    </i>
                                </div>
                            )}
                        </h1>
                    )}
                <div className="singlePostInfo">
                    <span className='singlePostAuthor'>Author:
                        <Link to={`/?user=${post.username}`} className="link">
                            <b>{post.username}</b>
                        </Link>
                    </span>
                    <span>
                        <b>Categories: {cats.map(e => { return (<b>{e}</b>) })}</b>
                    </span>
                    <span className='singlePostDate'>Date: <b>{
                        new Date(post.createdAt).toDateString()
                    }</b></span>
                </div>
                {updateMode ?
                    (<textarea className='singlePostDescInput' value={desc} onChange={(e) => { setDesc(e.target.value) }} />
                    ) : (<p className='singlePostDesc'>{desc}</p>)
                }
                {updateMode &&
                    (<button className="singlePostButton" onClick={handleUpdate}>Update</button>)
                }
            </div>
            <div>
                <h3>{
                    comments.map(record => {
                        return (
                            <h6>{record.postedBy}: {record.text}</h6>
                        )
                    })
                }</h3>

            </div>
            {
                user?.username && (
                    <div>
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            makeComment(e.target[0].value, user.username)
                        }}>
                            <input type="text" placeholder='add a comment' />
                        </form>
                    </div>
                )
            }
        </div>
    );
}
