import { useEffect } from 'react';
import './App.css';
import { useTelegram } from 'hooks';
import { CardsContainer } from 'components';


function App() {
  const { tg } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, [tg]);

  return (
    <div className="App">
      <CardsContainer />
    </div>
  );
}

export default App;
