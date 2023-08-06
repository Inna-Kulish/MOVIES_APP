import styled from "styled-components";
import { HiSearch } from "react-icons/hi";

export const SearchForm = styled.form`
width: 450px;
  display: inline-flex;
  align-items: center;
  margin-bottom: 16px;

  border: 1px solid black;
  border-radius: 4px;
  text-transform: uppercase;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px 32px 8px 8px;

  border: none;
  outline: none;
  font: inherit;
`;

export const Icon = styled(HiSearch)`
  width: 20px;
  height: 20px;
`;

export const FormBtn = styled.button`
display: inline-block;
  width: 48px;
  height: 48px;

  border: 0;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  &:hover {
    opacity: 1;
  }
`