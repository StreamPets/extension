import './App.css';
import Wardrobe from './views/Wardrobe';
import useUserData from 'hooks/useUserData';

function App() {
  const { userData } = useUserData();
  
  return (
    <div className="App">
      <header className="App-header">
        {/* {userData &&
          <Wardrobe userData={userData} />
        } */}
      </header>
    </div>
  );
}

export default App;