import { useState, useEffect } from "react";

import './assets/styles/App.css';
import Header from './assets/components/Header';
import HeroCard from './assets/components/Hero-card';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos`)
    // fetch(`.data/data.json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        // console.log("response " + response.json());
        return response.json();
      })
      .then((actualData) => {
        console.log("actual data " + actualData);
        setData(actualData);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setData(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <Header 
        title="This page has been created to try React and show the info about some superheroes"
      />
      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem while fetching data - ${error}`}</div>
      )}
        {data &&
          data.map(({ id, title, url }) => (
            <HeroCard 
              key={id}
              title={title}
              heroDescription={title}
              imgPath={url}
            /> 
          ))}
    </div>
  );

}

export default App;

