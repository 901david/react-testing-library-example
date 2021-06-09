import { Row, Container, Button } from '@bootstrap-styled/v4';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledRow = styled(Row)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledContainer = styled(Container)`
  margin-top: 100px;
`;

const App = () => {
  const [nameState, setNameState] = useState('');
  const [emailState, setEmailState] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const onClear = () => {
    setNameState('');
    setEmailState('');
  };
  const onSubmit = () => {
    setIsSubmitting(true);
  };

  useEffect(() => {
    setIsDisabled(nameState === '' || emailState === '');
  }, [nameState, emailState]);

  useEffect(() => {
    if (isSubmitting) {
      const time = setTimeout(onClear, 1000);
      return () => {
        clearTimeout(time);
      };
    }
  }, [isSubmitting]);

  return (
    <StyledContainer>
      {isSubmitting ? (
        <p>Submitting Data....</p>
      ) : (
        <>
          <StyledRow>
            <label htmlFor='name'>Name:</label>
            <input
              value={nameState}
              onChange={({ target: { value } }) => setNameState(value)}
              id='name'
              type='text'
            />
          </StyledRow>
          <StyledRow>
            <label htmlFor='email'>Email:</label>
            <input
              value={emailState}
              onChange={({ target: { value } }) => setEmailState(value)}
              id='email'
              type='text'
            />
          </StyledRow>
          <StyledRow>
            <Button onClick={onClear}>Clear</Button>
            <Button disabled={isDisabled} onClick={onSubmit}>
              Submit
            </Button>
          </StyledRow>
        </>
      )}
    </StyledContainer>
  );
};

export default App;
