import * as React from 'react';

import styled from 'styled-components';

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

export default class InputApp extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Input placeholder="Rechercher un film" />
            </React.Fragment>
        );
    }
}