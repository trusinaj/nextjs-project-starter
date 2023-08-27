import styled from 'styled-components'

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
`

// todo colors to styles
export const Main = styled.main<{ isPlanets: boolean; isLoading: boolean }>`
  background-color: ${(props) => (props.isPlanets ? 'black' : 'white')};
  overflow: ${(props) => (props.isLoading ? 'hidden' : 'unset')};
  flex: 1;
  padding: 12px;
`
