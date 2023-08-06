import styled from "styled-components";

export const Photo = styled.img`
width: 100px;
height: 150px;
object-fit: cover;
`

export const CastItem = styled.li`
&:not(:last-child) {
    margin-bottom: 10px;
}
`