import React, { useState } from "react";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";

const App = () => {
  const [selectedCharacterId, setSelectedCharacterId] = useState(null);

  return (
    <div>
      <header>
        <h1>Marvel Comics Explorer</h1>
      </header>
      <main style={{ display: "flex", gap: "20px" }}>
        <div style={{ flex: 1 }}>
          <CharacterList onCharacterSelect={setSelectedCharacterId} />
        </div>
        <div style={{ flex: 2 }}>
          <CharacterDetail characterId={selectedCharacterId} />
        </div>
      </main>
    </div>
  );
};

export default App;
