import React from 'react'

import * as S from './styled'

const Loader: React.FC = () => (
  <S.Container>
    <S.Loader />
    <S.Overlay />
  </S.Container>
)

export default Loader
