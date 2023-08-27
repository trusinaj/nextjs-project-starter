export const getPlanets = async (page?: number | string) => {
  const response = await fetch(
    `https://swapi.dev/api/planets/?page=${page || 1}`
  )
  return await response.json()
}
