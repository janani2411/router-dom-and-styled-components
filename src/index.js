import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router , Route , Link , NavLink , Switch } from "react-router-dom";
import Join from  './Joinus';
import About from './About';
import Home from './Home';
import NotFound from "./NotFound";
import styled from "styled-components";

// import App from './App';
// import reportWebVitals from './reportWebVitals';
const Nav = styled.li`
  display:inline-block;
  border-radius: 5px;
  padding:0.5rem 1rem;
  width : 2.5rem;
  text-decoration : none;
  background-color: palevioletred;
  border: 2px solid white;
  a
  {
    text-decoration:none;
    color:white;
  }
  .active {
      border-bottom: 3px solid black;
  }
  `;
  const StyledHead = styled("h1")`
    color: blue;
    font-weight: bold;
    `;
  // const linkStyle = {
  //   textDecoration: "none",
  //   color: 'white'
  // };

// route - compares search engine url and program url
// BrowserRouter - <- ->it uses html5 url api(pushState ,replaceState,popState API) to keep sync with the url
//          button in browser stores visited  pages as history and  and moves froward and backword on user actions
// MemoryRouter - it does not read or write address bar .url stores in memory not in browser.used for testing and non-browser environment
// Link - replacement of anchor tag in react . without reload it navigates to pages
// NavLink - styles for active routes just for styling
// switch -renders components only the path matched else returns not found
//path - specific url 
// component - navigate to specific component inside {} using path
// exact path - it returns exact component without this it return whole components(all Route)
const routing = (
  // <Router>
  //   <div>
  //     <h1>React Router Example</h1>
  //     <ul>
  //       <li>
  //         <Link to="/">Home</Link>
  //       </li>
  //       <li>
  //         <Link to="/about">About</Link>
  //       </li>
  //       <li>
  //         <Link to="/joinus">Joinus</Link>
  //       </li>
  //     </ul>
  //     <Route exact path="/" component={Home} />
  //     <Route path="/about" component={About} />
  //     <Route path="/joinus" component={Join} />
  //   </div> 
  // </Router>
  <Router>
    <div>
      <StyledHead>React Router Example</StyledHead>
      <ul>
        {/* <Nav primary>
          <NavLink to="/" exact style={linkStyle}>Home</NavLink>
        </Nav>
        <Nav>
          <NavLink to="/about" exact style={linkStyle}>About</NavLink>
        </Nav>
        <Nav>
          <NavLink to="/joinus" exact style={linkStyle}>Joinus</NavLink>
        </Nav> */}
         <Nav activeClassName="active">
          <NavLink to="/" exact>Home</NavLink>
        </Nav>
        <Nav activeClassName="active">
          <NavLink to="/about"  exact size="5rem">About</NavLink>
        </Nav>
        <Nav activeClassName="active">
          <NavLink to="/joinus" exact>Joinus</NavLink>
        </Nav>
      </ul>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/joinus" component={Join} />
        <Route component={NotFound} />
      </Switch>
    </div> 
  </Router>
)
ReactDOM.render(routing , document.getElementById("root"));