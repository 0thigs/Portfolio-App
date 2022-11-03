import './App.css';
import Header from './components/header'
import Card from './components/card';
import Profile from './components/profile';
import Projects from './components/projects';
import Contacts from './components/contacts';

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
      <div className="contacts">
        <Contacts />
      </div>
    </div>
  );
}

export default App;
