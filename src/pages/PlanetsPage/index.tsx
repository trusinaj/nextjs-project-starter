import React, { useContext } from 'react'
import { NextPage } from 'next'

import Layout from 'src/components/Layout'
import { Context } from '../../contexts/PlanetsContext'
import Loader from '../../components/Loader'
import Planets from '../../components/Planets/Planets'
import Pagination from '../../components/Pagination'
import FetchButtons from '../../components/FetchButtons'
import { PlanetType } from '../../@types/planets'
import Error from '../../components/Error'

type Props = {
  data: Array<PlanetType>
  page: String
}

const PlanetsPage: NextPage<Props> = (props) => {
  const { data, page = '1' } = props
  const { loading, planets, useSource, error } = useContext(Context)

  const dataSource: Array<PlanetType> = useSource ? planets : data

  // error could be handled in multiple ways
  return (
    <Layout>
      {loading && <Loader />}
      {error ? (
        <Error />
      ) : (
        <>
          <Planets dataSource={dataSource} />
          <FetchButtons />
          <Pagination page={page} />
        </>
      )}
    </Layout>
  )
}

export default PlanetsPage
