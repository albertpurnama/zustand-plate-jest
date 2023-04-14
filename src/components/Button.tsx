import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import { useStore } from '@/store/useStore';

// create a button
const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

const CounterButton = ({children}: React.PropsWithChildren<Record<string, string>>) => {
  const {count, increment} = useStore()

  return (
    <Button onClick={increment}>
      {count}
      {children}
    </Button>
  );
}

export default CounterButton;
