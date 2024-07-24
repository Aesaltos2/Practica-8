import { useState, useEffect } from 'react'
import { getRandomCatImage } from '../services/images'

export function useCatImage() {
  const [imageUrl, setImageUrl] = useState(null)

  const refreshImage = () => {
    getRandomCatImage().then(newImageUrl => setImageUrl(newImageUrl))
  }

  useEffect(() => {
    refreshImage()
  }, [])

  return { imageUrl, refreshImage }
}
