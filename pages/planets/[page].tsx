import { GetStaticProps } from 'next'
import PlanetsPage from 'src/pages/PlanetsPage'

import { getPlanets } from '../../src/api/planets'

interface Params extends GetStaticProps {
  params: { page: string }
}

export async function getStaticProps(context: Params) {
  const data = await getPlanets(context?.params?.page)

  return {
    props: {
      data: data?.results || [],
      page: context?.params?.page,
    },
  }
}

// todo dynamically generate pages
export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          page: '1',
        },
      },
      {
        params: {
          page: '2',
        },
      },
      {
        params: {
          page: '3',
        },
      },
      {
        params: {
          page: '4',
        },
      },
      {
        params: {
          page: '5',
        },
      },
      {
        params: {
          page: '6',
        },
      },
    ],
    fallback: false,
  }
}

export default PlanetsPage
