import { useState } from "react";
import styled from "styled-components"
import "./components.css"

function FeedPost(props) {
    const {user, dateAndTime, text, likes, n_comments, comments} = props.data;
    const [showComments, setShowComments] = useState(false);
    return (
        <div className = "feed-post">
            <PostText>
                {text}
            </PostText>
            <PostDetails>
                <br/>
                by: <b>{user}</b> <br/>
                <b>{dateAndTime}</b> <br/>
            </PostDetails>
            <LikesAndComments>
                <br/>
                <b>Likes:</b> {likes} &emsp; <b>Comments:</b> {n_comments}
                &emsp; <span className = "show-hide-comments" onClick = {() => {setShowComments(!showComments);}}>{showComments? "Hide Comments": "Show Comments"}</span> 
            </LikesAndComments>
            { 
                showComments &&
                <CommentsSection>
                    {comments.map((comment) => <Comment><b>{comment.user}:</b>  ({comment.dateAndTime}) <p>{comment.text}</p></Comment>)}
                </CommentsSection>
            }
        </div>
    )
}

const PostText = styled.div`
    white-space: pre-wrap;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 20px;
`;
const PostDetails = styled.div`
    font-size: 13px;
`;
const LikesAndComments = styled.div`
    font-size: 14px;
`;
const CommentsSection = styled.div`
    font-size: 14px;
`;

const Comment = styled.div`
    white-space: pre-wrap;
    font-size: 0.75em;
    width: fit-content;
    border: 1px solid #c9c9c9;
    background-color: #ffffff;
    margin: 10px;
    padding: 10px 15px 5px 10px;
    border-radius: 20px 20px 0px 20px;
`;

export default FeedPost;