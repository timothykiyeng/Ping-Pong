import React, {useState} from 'react';
import EditComment from './EditComment';
import { Link } from 'react-router-dom';

function CommentBubble( {id, comment, handleDeleteComment, handleUpdateComment} ){

    const [isEditing, setIsEditing] = useState(false);
    const { description, user } = comment


}
