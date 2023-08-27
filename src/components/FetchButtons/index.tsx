import React, { useContext } from 'react'

import { Context } from '../../contexts/PlanetsContext'

import * as S from './styled'

const FetchButtons: React.FC = () => {
  const { fetchPlanets, loading, fetchPlanetsWithError } = useContext(Context)

  return (
    <S.Container>
      <S.Button onClick={() => fetchPlanets()} disabled={loading}>
        Refresh
      </S.Button>
      <S.Button
        isError
        disabled={loading}
        onClick={() => fetchPlanetsWithError()}
      >
        Refresh with Error
      </S.Button>
    </S.Container>
  )
}

export default FetchButtons
