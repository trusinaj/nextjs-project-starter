import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { routes } from 'src/constants/routes'

import * as S from './styled'

const Header: React.VFC = () => {
  const router = useRouter()

  const links = [
    { href: routes.index, text: 'Home' },
    { href: routes.about, text: 'About' },
  ]

  return (
    <S.Header>
      <nav>
        <S.Ul>
          {links.map((link) => (
            <S.Li active={router.pathname === link.href} key={link.href}>
              <Link href={link.href}>
                <a>{link.text}</a>
              </Link>
            </S.Li>
          ))}
        </S.Ul>
      </nav>
    </S.Header>
  )
}

export default Header
