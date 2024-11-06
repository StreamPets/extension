import './App.css';
import Wardrobe from './views/Wardrobe';
import useUserData from 'hooks/useUserData';

function App() {
  const { userData, authToken } = useUserData();
  
  return (
    <div className="App">
      <header className="App-header">
        {userData &&
          <Wardrobe userData={userData} authToken={authToken} />
        }
      </header>
    </div>
  );
}

export default App;