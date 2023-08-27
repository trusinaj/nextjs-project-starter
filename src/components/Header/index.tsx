import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { routes } from 'src/constants/routes'

import Container from '../Container'
import * as S from './styled'

const Header: React.FC = () => {
  const router = useRouter()

  const links = [
    { href: routes.index, text: 'Home' },
    { href: routes.about, text: 'About' },
    { href: routes.planets, text: 'Planets', query: { page: '1' } },
  ]

  return (
    <S.Header>
      <Container>
        <nav>
          <S.Ul>
            {links.map((link, index) => (
              <S.Li active={router.pathname === link.href} key={index}>
                <Link
                  href={{
                    pathname: link.href,
                    query: link.query,
                  }}
                >
                  {link.text}
                </Link>
              </S.Li>
            ))}
          </S.Ul>
        </nav>
      </Container>
    </S.Header>
  )
}

export default Header
