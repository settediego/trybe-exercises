import './App.css';
import Header from './components/Header';
import VideoGameList from './components/VideoGameList';

function App() {
  return (
    <div>
      <Header title='Jogos mais vendidos de todos os tempos' year='2023'/>
      <VideoGameList />
    </div>
  )
}

export default App;
