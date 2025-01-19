import React, { useEffect, useState } from "react";
import axios from "axios";

const CharacterList = ({ onCharacterSelect }) => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  // Replace with your actual API keys and hash
  const PUBLIC_KEY = "4d52fb3fa1ef52af3d6b38218aff5477";
  const HASH = "a80ea7d0806646c1f3b6bf37422fc6fd";
  const API_URL = `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${PUBLIC_KEY}&hash=${HASH}`;

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get(API_URL);
        setCharacters(response.data.data.results);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching characters:", error);
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  if (loading) return <p>Loading characters...</p>;

  return (
    <div className="character-grid">
      {characters.map((character) => (
        <div
          key={character.id}
          className="character-card"
          onClick={() => onCharacterSelect(character.id)}
        >
          <img
            src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            alt={character.name}
          />
          <p>{character.name}</p>
        </div>
      ))}
    </div>
  );
};

export default CharacterList;
