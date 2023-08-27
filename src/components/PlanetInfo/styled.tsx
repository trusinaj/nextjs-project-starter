import styled from 'styled-components'
import Image from 'next/image'

export const InfoBox = styled.div`
  color: white;
  z-index: 2;
  position: relative;
  height: 56px;
  display: flex;
  margin-top: 2rem;
`

export const Icon = styled.div`
  text-align: center;
  display: inline-block;
`

export const Name = styled.div`
  font-size: 12px;
`

export const StyledImage = styled(Image)`
  background: white;
  border-radius: 10px;
`

// todo handle overflow
export const Text = styled.div`
  font-size: 26px;
  margin: 8px 12px;
`
