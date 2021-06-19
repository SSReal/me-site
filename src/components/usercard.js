import "./components.css"
import styled from "styled-components"
import {useSelector} from "react-redux";

function UserCard() {
    const userName = useSelector((state) => state.user.name);
    const userPhoto = useSelector((state) => state.user.displayPhoto);
    return (
        <div className = "usercard">
            <center>
                <ProfilePhoto src = {userPhoto} width= {100} height = {100}/>
                <h2>{userName}</h2>
            </center>
            <br/>
            <p>Posts: 10</p>
            <p>Most Recent Post: <a href = "/posts/123">Sample Post</a></p>
            <p>Followers: 50</p>
            <p>Following: 156</p>
        </div>
    )
}

const ProfilePhoto = styled.img`
    border: 1px solid transparent;
    border-radius: 50%;
`;

export default UserCard;