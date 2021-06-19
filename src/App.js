import './App.css'
import styled from "styled-components"
import {BrowserRouter as Router,
        Switch, 
        Route,
        Link,
        useHistory}
from "react-router-dom"
import store from "./store/store";
import { Provider } from "react-redux"
import Login from "./components/Login"
import Home from "./components/Home"


function App() { 
  const history = useHistory();
  return (
    <Provider store = {store}>
        <Router>
          <Switch>
            <Route exact path = "/">
              <Content>
                <Login />
              </Content>
            </Route>
            <Route path = "/home">
              <Home />
            </Route>
          </Switch>
        </Router>
    </Provider>
  )
}

const Content = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1128px;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 830px) {
    flex-direction: column;
    max-height: 100vh;
  }
`

export default App;
