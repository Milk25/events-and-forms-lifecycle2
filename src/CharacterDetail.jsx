import React, { useEffect, useState } from "react";
import axios from "axios";

const CharacterDetail = ({ characterId }) => {
  const [character, setCharacter] = useState(null);

  // Replace with your actual API keys and hash
  const PUBLIC_KEY = "4d52fb3fa1ef52af3d6b38218aff5477";
  const HASH = "a80ea7d0806646c1f3b6bf37422fc6fd";
  const API_URL = `https://gateway.marvel.com/v1/public/characters/${characterId}?ts=1&apikey=${PUBLIC_KEY}&hash=${HASH}`;

  useEffect(() => {
    if (!characterId) return;

    const fetchCharacterDetails = async () => {
      try {
        const response = await axios.get(API_URL);
        setCharacter(response.data.data.results[0]);
      } catch (error) {
        console.error("Error fetching character details:", error);
      }
    };

    fetchCharacterDetails();
  }, [characterId]);

  if (!character) return <p>Select a character to view details.</p>;

  return (
    <div className="character-detail">
      <h2>{character.name}</h2>
      <img
        src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
        alt={character.name}
      />
      <p>{character.description || "No description available."}</p>
      <h3>Comics:</h3>
      <ul>
        {character.comics.items.map((comic, index) => (
          <li key={index}>{comic.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterDetail;
