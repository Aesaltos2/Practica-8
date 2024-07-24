import './App.css'
import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'

export default function App() {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl, refreshImage } = useCatImage()

  const handleClick = () => {
    refreshFact()
    refreshImage()
  }

  return (
    <>
    <div className="app-container">
      <h1>App de gatitos</h1>
      <button onClick={handleClick}>Get new fact and image</button>
      <div className="card">
        {imageUrl && <img src={imageUrl} alt="Cute cat" />}
        {fact && <p>{fact}</p>}
      </div>
    </div>
    </>
  )
}
