import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 10px 20px;
  background-color: ${props => props.$backgroundColor || 'yellow'};
`;

const Button = ({ children, disabled, onClick, backgroundColor }) => {
  return (
    <StyledButton disabled={disabled} onClick={onClick} $backgroundColor={backgroundColor}>
      {children}
    </StyledButton>
  )
}

export default Button;