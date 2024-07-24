const CAT_FACT_API = 'https://meowfacts.herokuapp.com/'

export const getRandomFact = async () => {
  const res = await fetch(CAT_FACT_API)
  const data = await res.json()
  const fact = data.data[0]
  return fact
}
