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

      function handleDeleteComment(commentToDelete){
        const updatedComments = commentData.filter((comment) => {
          if (comment.id !== commentToDelete.id) {
            return comment
          } else {
            return null
          }
        });
        setCommentData(updatedComments);
      }

      function handleUpdateComment(updatedCommentObj) {
        const editedComments = commentData.map((comment) => {
          if (comment.id === updatedCommentObj.id) {
            return updatedCommentObj;
          } else {
            return comment;
          }
        });
        setCommentData(editedComments);
      }

}

export default CommentList
