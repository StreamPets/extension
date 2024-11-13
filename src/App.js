import './App.css';
import { AuthProvider } from 'contexts/AuthContext';
import StreamPets from 'views/StreamPets';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AuthProvider>
          <StreamPets />
        </AuthProvider>
      </header>
    </div>
  );
}

export default App;