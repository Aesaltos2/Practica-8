const CAT_IMAGE_API = 'https://api.thecatapi.com/v1/images/search'

export const getRandomCatImage = async () => {
  const res = await fetch(CAT_IMAGE_API)
  const data = await res.json()
  const imageUrl = data[0].url
  return imageUrl
}
