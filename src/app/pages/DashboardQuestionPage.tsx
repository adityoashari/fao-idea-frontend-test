import { useEffect, useState } from "react";

type TCatBreed = {
  breed: string;
  country: string;
  origin: string;
  coat: string;
  pattern: string;
};

type TCatFact = {
  fact: string;
  length: number;
};

/**
 * A React component that fetches and displays a list of cat breeds and cat facts based on FAO question.
 * @returns {JSX.Element}
 * @description This component fetches and displays a list of cat breeds and cat facts.
 */
const DashboardQuestionPage = () => {
  const [catBreeds, setCatBreeds] = useState<TCatBreed[]>([]);
  const [catFacts, setCatFacts] = useState<TCatFact[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://catfact.ninja/breeds")
      .then((res) => res.json())
      .then((data) => {
        setCatBreeds(data.data);
        setLoading(false);
      });
    fetch("https://catfact.ninja/facts")
      .then((res) => res.json())
      .then((data) => {
        setCatFacts(data.data);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      {loading && <p>Loading...</p>}
      <h3>Cat Breeds</h3>
      <ul>
        {catBreeds.map((catBreed, index) => (
          <li key={`${index}-${catBreed.breed}`}>{catBreed.breed}</li>
        ))}
      </ul>
      <h3>Cat Facts</h3>
      <ul>
        {catFacts.map((catFact, index) => (
          <li key={`${index}-${catFact.fact}`}>{catFact.fact}</li>
        ))}
      </ul>
    </div>
  );
};

export default DashboardQuestionPage;
