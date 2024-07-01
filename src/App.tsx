import { useEffect } from 'react';
import './App.css';
import { useTelegram } from 'hooks';
import { Header, CardsContainer } from 'components';


function App() {
  const { tg } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, [tg]);

  return (
    <div className="App">
      <Header />
      <CardsContainer />
    </div>
  );
}

export default App;
