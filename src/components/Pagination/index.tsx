import React, { Key } from 'react'
import Link from 'next/link'

import * as S from './styled'

type Props = {
  page: String
}

const Pagination: React.FC<Props> = ({ page }) => {
  const pageNumber = Number(page)

  // todo generate based on list sizes
  return (
    <S.Container>
      <S.Ul>
        {[1, 2, 3, 4, 5, 6].map((number: number, key: Key) => {
          return (
            <S.Li key={key}>
              <Link href={`/planets/${number}`} passHref legacyBehavior>
                <S.StyledLink active={pageNumber === number}>
                  {number}
                </S.StyledLink>
              </Link>
            </S.Li>
          )
        })}
      </S.Ul>
    </S.Container>
  )
}

export default Pagination
