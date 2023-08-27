import styled from 'styled-components'

export const Container = styled.div`
  justify-content: center;
  display: flex;
`

export const Ul = styled.ul`
  display: inline-block;
  padding: 0;
  margin: 8px 0;
`

export const Li = styled.li`
  display: inline;
`

export const StyledLink = styled.a<{ active: boolean }>`
  color: white;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
  margin: 0 4px;
  background: ${(props) => (props.active ? '#676767' : '#252525')};
  cursor: ${(props) => props.active && 'default'};
  pointer-events: ${(props) => props.active && 'none'};
  border-radius: 4px;

  &:hover {
    background-color: #676767;
  }
`
