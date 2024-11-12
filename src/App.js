import './App.css';
import useUserData from 'hooks/useUserData';
import StreamPets from 'views/StreamPets';

function App() {
  const { currentColor, availableColors, addAvailableColor, authToken } = useUserData();
  
  return (
    <div className="App">
      <header className="App-header">
        {currentColor &&
          <StreamPets
            currentColor={currentColor}
            availableColors={availableColors}
            addAvailableColor={addAvailableColor}
            authToken={authToken}
          />}
      </header>
    </div>
  );
}

export default App;