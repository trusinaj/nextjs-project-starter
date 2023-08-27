import PlanetsPage from 'src/pages/PlanetsPage'

import { getPlanets } from '../../src/api/planets'

export async function getStaticProps() {
  const data = await getPlanets()

  return {
    props: {
      data: data?.results || [],
    },
  }
}

export default PlanetsPage
