import { useCatImage } from '../hooks/useCatImage'

export function Otro() {
  const { imageUrl } = useCatImage()

  return (
    <>
      {imageUrl && <img src={imageUrl} alt="Cute cat" />}
    </>
  )
}
