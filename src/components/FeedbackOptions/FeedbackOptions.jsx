import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Button = styled.button`
  margin: 0 10px;
  position: relative;
  padding: 12px 35px;
  background: #fec195;
  font-size: 17px;
  font-weight: 500;
  color: #181818;
  border: 3px solid #fec195;
  border-radius: 8px;
  box-shadow: 0 0 0 #fec1958c;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: transparent;
    color: #fec195;
    box-shadow: 0 0 25px #fec1958c;
  }
`;


const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const handleButtonClick = option => {
    onLeaveFeedback(option);
  };

  return (
    <ButtonsContainer>
      {options.map(option => (
        <Button
          key={uuidv4()}
          type="button"
          name={option}
          onClick={() => handleButtonClick(option)}
        >
          {option}
        </Button>
      ))}
    </ButtonsContainer>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
