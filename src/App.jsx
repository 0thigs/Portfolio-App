import './App.css';
import Header from './components/header'
import Card from './components/card';
import Profile from './components/profile';
import Projects from './components/projects';

function App() {
  return (
    <div className="container">
      <header>
        <Header />
      </header>
      <main className='main'>
        <Card />
        <Profile />
      </main>
      <div className="projetos">
        <Projects />
      </div>
    </div>
  );
}

export default App;
