import React, { PropsWithChildren, useContext } from 'react'
import { useRouter } from 'next/router'

import Header from '../Header'
import Footer from '../Footer'
import Container from '../Container'
import { Context } from '../../contexts/PlanetsContext'

import * as S from './styled'

type Props = PropsWithChildren<{}>

const Layout: React.FC<Props> = ({ children }) => {
  const { loading } = useContext(Context)
  const router = useRouter()

  return (
    <S.Wrap>
      <Header />
      <S.Main
        isLoading={loading}
        isPlanets={router.pathname.includes('planets')}
      >
        <Container>{children}</Container>
      </S.Main>
      <Footer />
    </S.Wrap>
  )
}

export default Layout
