import React, { useState, useEffect } from 'react';

function CommentList( {user} ) {

    const [commentData, setCommentData] = useState([])
    const [description, setDescription] = useState("")
    const [dataIndex, setDataIndex] = useState(0)
    const [showComment, setShowComment] = useState("")

    useEffect(() => {
        fetch("/comments")
        .then((res) => res.json())
        .then((comments) => { setCommentData(comments) });
    }, []);

    function addNewComment(newComment){
        setCommentData((prevState) => [...prevState, newComment])
      }

}

export default CommentList
