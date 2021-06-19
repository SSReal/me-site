import "./components.css"
import styled from "styled-components"
function PostCreate() {
    return (
        <div className = "create-post">
            <PostText placeholder = "Something from your mind"/>
            <PostSubmit>Post</PostSubmit>
        </div>
    )
}

const PostText = styled.textarea`
    width: 75%;
    font-family: "Segoe";
    resize: vertical;
    height: 50px;
    min-height: 1.5em;
    max-height: 200px;
`;

const PostSubmit = styled.button`
    position: relative;
    top: -20px;
    left: 10px;
`;

export default PostCreate;