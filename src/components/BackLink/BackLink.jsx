import { HiArrowLeft } from 'react-icons/hi';
import PropTypes from 'prop-types';
import { StyledLink, BackBtn } from './BackLink.styled';

export const BackLink = ({ to }) => {
  return (
    <BackBtn>
      <StyledLink to={to}>
        <HiArrowLeft size="16" />
        Go back
      </StyledLink>
    </BackBtn>
  );
};

BackLink.propTypes = {
  to: PropTypes.string.isRequired,
};
