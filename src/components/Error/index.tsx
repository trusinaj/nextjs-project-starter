import React, { useContext } from 'react'
import { useRouter } from 'next/router'

import { Context } from '../../contexts/PlanetsContext'
import { routes } from '../../constants/routes'

import * as S from './styled'

const Error = () => {
  const { fetchPlanets, loading } = useContext(Context)

  const router = useRouter()

  return (
    <S.Container>
      <S.Box>
        <S.Text>
          <S.Header>Error</S.Header>
          Unfortunately we were unable to get your planets. Please try again
          later!
        </S.Text>
        <S.Button disabled={loading} onClick={() => fetchPlanets()}>
          Try again
        </S.Button>
        <S.Button disabled={loading} onClick={() => router.push(routes.index)}>
          Go Home
        </S.Button>
      </S.Box>
    </S.Container>
  )
}

export default Error
