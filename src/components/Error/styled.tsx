import styled from 'styled-components'

// todo transition animation
export const Container = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  vertical-align: middle;
`

export const Box = styled.div`
  width: 450px;
  height: 170px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  color: white;
`

export const Text = styled.div`
  border: 1px solid #9b0d14;
  border-radius: 5px;
  text-align: left;
  padding: 30px;
  margin: 10px 10px 40px;
`

export const Header = styled.div`
  color: #9b0d14;
  font-size: 36px;
  margin-bottom: 18px;
  font-weight: bold;
`

// todo same button styles, can move to styles
export const Button = styled.button`
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 10px;
  cursor: pointer;
  background-color: #0d609b;
`
