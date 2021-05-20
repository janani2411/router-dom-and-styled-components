import React from "react";
import styled from "styled-components";

const Input = styled.input`
  padding: 0.5em;
  margin: ${props => props.size};
  padding: ${props => props.size};
  color: ${props => props.inputColor || "palevioletred"};
  background: papayawhip;
  border: none;
  border-radius: 3px;
  &:hover {
    color: red;
    background-color:white;
  }

`;
class About extends React.Component
{
    render()
    {
        return(
            <div>
                <h1>About page</h1>
                <div>
    <Input defaultValue="@probablyup" type="text" />
    <Input defaultValue="@geelen" type="text" inputColor="rebeccapurple" size = "1rem"/>
  </div>
            </div>
        )
    }
}
export default About;