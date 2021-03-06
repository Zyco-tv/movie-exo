import * as React from 'react';

import styled from 'styled-components';

const Nav = styled.header`
background-color: #60A5FA;
color: white;
padding-top: 1px;
padding-bottom: 1px;
width: 100%;
`;

const Input = styled.input.attrs(props => ({
    type: "text",
    size: props.size || "0.625em",
  }))`
    font-size: 1em;
    border: 2px solid gray;
    border-radius: 3px;
    margin: ${props => props.size};
    padding: ${props => props.size};
    padding-left: 26%;
    padding-right: 26%;
    width: 37%;
  `;

export default class Header extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Nav>
                    <h1>Movies</h1>
                </Nav>
            </React.Fragment>
        );
    }
}