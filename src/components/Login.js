import styled from "styled-components"
import { useHistory } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import {login, logout} from "../store/userdetails"

function Login() {
    const history = useHistory();
    const isLoggedIn = useSelector((state) => state.user.logged_in)
    const userName = useSelector((state) =>  state.user.name);
    const userEmail = useSelector((state) => state.user.email);
    const userPhoto = useSelector((state) => state.user.displayPhoto);
    const dispatch = useDispatch();
    const defaultUser = {
        name: "Sample User",
        email: "sample@sample.com",
        displayPhoto: "https://images.unsplash.com/photo-1607370658981-051075679ef0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1867&q=80"
    }
    
    const GoogleSignIn = () => {
        dispatch(login(defaultUser));
        history.push("/home");
    };
    
    const EmailSignIn = () => {
        dispatch(login(defaultUser));
        history.push("/home");
    };

    const signOut = () => {
        dispatch(logout());
    }

    return (
    <>
        <Hero src = "images/hero.png"/>
        <Splash>
        <Logo src = "images/logos/black box.svg"/>
        <p>Show your<br/><b>Me Side</b></p>
        <SignInButtons>
            <a href = "#" onClick = {GoogleSignIn}>Sign in with Google</a>
            <a href = "#" onClick = {EmailSignIn}> Sign in with Email</a>
        </SignInButtons>
        </Splash>
    </>
    )
}


const Hero = styled.img`
  position: relative;
  right: 100px;
  margin: 50px 20px;
  @media (max-width: 1275px) {
    right: auto;
    left: auto;
    height: 500px;
  }
  @media (max-width: 960px) {
    height: 350px;
  }
  @media (max-width: 830px) {
    height: 250px;
  }
  @media (max-width: 750px) {
    height: 200px;
  }
`
const Splash = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 20px 20px;
  padding: 10px;
  & > p {
    line-height: 0.75;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-size: 2.5em;
    text-align: center;
  }
`
const Logo = styled.img`
  height: 150px;
  transition: 1s;
`
const SignInButtons = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 830px) {
    flex-direction: column;
  }
  & > a {
    margin: 10px;
    text-decoration: none;
    color: #2e2e2e;
    border: 1px solid #141414;
    border-radius: 5px;
    padding: 10px;
    font-weight: 600;
    transition: 0.5s;

    &:hover {
      background-color: #141414;
      color: #ffffff;
    }
  }
`
export default Login;