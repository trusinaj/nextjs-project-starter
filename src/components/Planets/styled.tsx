import styled from 'styled-components'

export const RightCorner = styled.div`
  height: 128px;
  width: 128px;
  background-color: #f9b234;
  z-index: 1;
  position: absolute;
  top: -75px;
  right: -75px;
  border-radius: 50%;
  transition: all 0.5s ease;
`

export const MainBlock = styled.div`
  flex-basis: calc(33.33333% - 30px);
  margin: 0 15px 30px;
  overflow: hidden;
  border-radius: 28px;

  @media only screen and (max-width: 979px) {
    flex-basis: calc(50% - 30px);
  }

  @media only screen and (max-width: 639px) {
    flex-basis: 100%;
  }
`

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;

  ${MainBlock} {
    &:nth-child(2n) {
      ${RightCorner} {
        background-color: #3ecd5e;
      }
    }
    &:nth-child(3n) {
      ${RightCorner} {
        background-color: #e44002;
      }
    }
    &:nth-child(4n) {
      ${RightCorner} {
        background-color: #952aff;
      }
    }
    &:nth-child(5n) {
      ${RightCorner} {
        background-color: #cd3e94;
      }
    }
    &:nth-child(6n) {
      ${RightCorner} {
        background-color: #4c49ea;
      }
    }
  }
`

export const Block = styled.div`
  display: block;
  padding: 30px 20px;
  background-color: #121212;
  overflow: hidden;
  position: relative;

  &:hover {
    ${RightCorner} {
      transform: scale(10);
    }
  }
`

export const Text = styled.div`
  margin: 0 0 2rem;
  overflow: hidden;
  font-weight: bold;
  font-size: 30px;
  color: #fff;
  z-index: 2;
  position: relative;
`
