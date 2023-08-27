import React from 'react'

import { PlanetType } from '../../@types/planets'
import { publicImages } from '../../static'

import * as S from './styled'

// todo handle units
const PlanetInfo = ({ planet }: { planet: PlanetType }) => {
  return (
    <>
      <S.InfoBox>
        <S.Icon>
          <S.StyledImage
            src={publicImages.diameter}
            alt='Diameter'
            width={40}
            height={40}
          />
          <S.Name>Diameter</S.Name>
        </S.Icon>
        <S.Text>{planet.diameter}</S.Text>
      </S.InfoBox>
      <S.InfoBox>
        <S.Icon>
          <S.StyledImage
            src={publicImages.population}
            alt='Population'
            width={40}
            height={40}
          />
          <S.Name>Population</S.Name>
        </S.Icon>
        <S.Text>{planet.population}</S.Text>
      </S.InfoBox>
    </>
  )
}

export default PlanetInfo
