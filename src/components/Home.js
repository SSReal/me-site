import {useSelector, useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {useEffect} from "react"
import {login, logout} from "../store/userdetails"
import styled from "styled-components"
import { Link } from "react-router-dom"
import {Home as HomeIcon, Language, People, Search} from "@material-ui/icons";
import UserCard from "./usercard"
import Posts from "./posts"
import Featured from "./featured"

function Home() {
    const isLoggedIn = useSelector((state) => state.user.logged_in);
    const userName = useSelector((state) => state.user.name);
    const userPhoto = useSelector((state) => state.user.displayPhoto);
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        if(!isLoggedIn) {
            history.push("/");
        }
    }, [])

    const signOut = () => {
        dispatch(logout());
        history.push("/")
    }

    return (
        <>
            <NavBar>
                <Menu>
                    <Logo src = "/images/logos/black box.svg" height = {30}/>
                    <Link to="/home">
                        <HomeIcon style = {{
                        color: 'black',
                        height: '100%',
                        fontSize: "1.5em"
                        }}/>
                    </Link>
                    <Link to="#">
                        <Language style = {{
                            color: 'black',
                            height: '100%',
                            fontSize: "1.5em"
                        }} />
                    </Link>
                    <Link to="#">
                        <People style = {{
                            color: "black",
                            height: "100%",
                            fontSize: "1.5em"
                        }} />
                    </Link>
                    <SearchBar>
                        <SearchBox type = "text" placeholder = "Search" />
                        <a>
                            <Search style = {{
                                color: "black",
                                height: "100%",
                                fontSize: "1.5em"
                            }} />
                        </a>
                    </SearchBar>
                </Menu>
                <UserMenu>
                    <a>
                        <UserIcon src = {userPhoto}/>
                    </a>
                    <UserDropDown className = "drop-down">
                        <UserButton href = "#"><b>{userName}</b></UserButton>
                        <br/>
                        <SignOutButton href = "#" onClick = {signOut}>Sign out</SignOutButton>
                    </UserDropDown>
                </UserMenu>
            </NavBar>
            <MainContent>
                <UserCard />
                <Posts />
                <Featured />
            </MainContent>
        </>
    )
}

const NavBar = styled.div`
    position: absolute;
    top:5px;
    width: 100%;
    margin: 0;
    display: flex;
    flex-direction: row;
    background-color: #f7fbff;
    align-items: stretch;
    justify-content: space-evenly;
    padding: 5px 0px;
`;

const Logo = styled.img`
    padding: 0px 10px;
`;

const Menu = styled.div`
    display: flex;
    flex-direction: row;
    width: 50%;
    max-width: 600px;
    justify-content: space-between;
    margin-left: 30px;
`;

const SearchBox = styled.input`
    height: 30px;
`;

const UserIcon = styled.img`
    height: 30px;
    width: 30px;
    border: 1px solid transparent;
    border-radius: 15px;
    margin-right: 30px;
`;

const SearchBar = styled.div`
    display: flex;
    & > * {
        padding: 0px 5px;
    }
`;

const UserMenu = styled.div`
    display: flex;
    flex-direction: column;
    &:hover {
        > div.drop-down {
            visibility: visible;
            opacity: 100%;
        }
    }
`;

const UserDropDown = styled.div`
    display: flex;
    visibility: hidden;
    opacity: 0%;
    z-index: 5;
    font-family: sans-serif;
    flex-direction: column;
    align-items: center;
    position: absolute;
    background-color: #f7fbff;
    border: 1px solid #c9c9c9;
    border-top: 1px solid transparent;
    border-radius: 5px;
    padding: 10px 20px;
    top: 35px;
    border: 1px solid transparent;
    border-radius: 5px;
    transition: 0.25s;
    &:hover {
        visibility: visible;
        opacity: 100%;
    }
`;

const SignOutButton = styled.a`
    text-decoration: none;
    color: inherit;
    background-color: transparent;
    padding: 5px;
    border: 1px solid transparent;
    border-radius: 5px;
    transition: color 0.5s, background-color 0.5s;
    &:hover {
        color: #fafafa;
        background-color: #141414;
    }
`;

const UserButton = styled.a`
    text-decoration: none;
    color: inherit;
`;

const MainContent = styled.div`
    position: absolute;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    background-color: #fffefc;
    top: 50px;
    width: 100%;
`;
export default Home;