import styled from 'styled-components'

export const Container = styled.div`
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
`

// todo colors to styles
// todo same button styles, can move to styles
export const Button = styled.button<{ isError?: boolean }>`
  background-color: ${(props) => (props.isError ? '#9b0d14' : '#0d609b')};
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 10px;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  &:disabled {
    color: white;
    cursor: default;
  }
`
