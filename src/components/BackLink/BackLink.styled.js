import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 8px 0;
  color: black;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;

`;

export const BackBtn = styled.button`
margin-bottom: 15px;
background-color: transparent;
border: 1px solid gray;
border-radius: 3px;

:hover {
    color: orangered;
  }
`