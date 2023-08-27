import React, { createContext, useCallback, useEffect, useState } from 'react'

import { getPlanets } from '../api/planets'
import { PlanetType } from '../@types/planets'

export const Context = createContext(undefined as any)

export const PlanetsProvider = ({
  children,
  page = '1',
}: {
  children: React.ReactNode
  page: string
}) => {
  const [useSource, setSource] = useState<Boolean>(false)
  const [loading, setLoading] = useState<Boolean>(false)
  // error could be object
  const [error, setError] = useState<Boolean>(false)
  const [planets, setPlanets] = useState<Array<PlanetType>>([])

  const fetchPlanets = useCallback(async () => {
    setLoading(true)

    try {
      const planets = await getPlanets(page)

      setSource(true)
      setPlanets(planets?.results)
      setError(false)
      setLoading(false)
    } catch (error) {
      // error should be stored if necessary
      setError(true)
      setLoading(false)
    }
  }, [page])

  const fetchPlanetsWithError = useCallback(async () => {
    setLoading(true)

    setTimeout(() => {
      setError(true)
      setLoading(false)
    }, 3000)
  }, [])

  useEffect(() => {
    if (useSource) {
      fetchPlanets()
    }
  }, [page, fetchPlanets, useSource])

  return (
    <Context.Provider
      value={{
        loading,
        error,
        planets,
        useSource,
        fetchPlanets,
        fetchPlanetsWithError,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default Context.Consumer
