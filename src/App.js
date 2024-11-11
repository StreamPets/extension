import './App.css';
import useUserData from 'hooks/useUserData';
import StreamPets from 'views/StreamPets';

function App() {
  const { userData, authToken } = useUserData();
  
  return (
    <div className="App">
      <header className="App-header">
        {userData && <StreamPets userData={userData} authToken={authToken} />}
      </header>
    </div>
  );
}

export default App;