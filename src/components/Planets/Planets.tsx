import React, { Key } from 'react'
import { NextPage } from 'next'

import { PlanetType } from '../../@types/planets'
import PlanetInfo from '../PlanetInfo'

import * as S from './styled'

type Props = {
  dataSource: Array<PlanetType>
}

const Planets: NextPage<Props> = ({ dataSource }) => {
  return (
    <S.Container>
      {dataSource?.map((planet: PlanetType, index: Key) => {
        return (
          <S.MainBlock key={index}>
            <S.Block>
              <S.RightCorner />
              <S.Text>{planet.name}</S.Text>
              <PlanetInfo planet={planet} />
            </S.Block>
          </S.MainBlock>
        )
      })}
    </S.Container>
  )
}

export default Planets
