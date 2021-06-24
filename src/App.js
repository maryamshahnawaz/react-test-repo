import axios from 'axios';
import { useEffect, useState } from 'react';
import PieceOfArt from './PieceOfArt'
import './App.css';

function App() {
  const [art, setArt] = useState([]);
  useEffect(() => {
    const apiKey = `6jNX7SQp`;
    axios({
      method: 'GET',
      url: `https://www.rijksmuseum.nl/api/en/collection`,
      dataResponse: 'json',
      params: {
        key: apiKey,
        format: 'json',
        hasImage: true,
      },
    }).then((response) => {
      console.log(response.data.artObjects);
    })
  }, [])
  return (
    <div className="App">
      <h2>View Dutch Art</h2>
      {art.map((artWork) => {
        return (
          <PieceOfArt
            key={artWork.id}
            alt={artWork.title}
            title={artWork.longTitle}
            imagePath={artWork.webImage.url}
          />
        );
      })}
    </div>
  );
}

export default App;
