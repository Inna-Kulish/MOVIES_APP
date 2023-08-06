import { HiArrowLeft } from "react-icons/hi";
import { StyledLink, BackBtn } from "./BackLink.styled";

export const BackLink = ({ to, children }) => {
  return (
    <BackBtn><StyledLink to={to}>
    <HiArrowLeft size="16" />
    {children}
  </StyledLink></BackBtn>
    
  );
};