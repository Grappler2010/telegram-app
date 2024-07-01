import { useEffect } from 'react';
import './App.css';
import { useTelegram } from 'hooks';
import { Header, CardsContainer, FlipCardsContainer } from 'components';
import { Steps, StepsProvider } from 'react-step-builder';


function App() {
  const { tg } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, [tg]);

  return (
    <div className="App">
      <StepsProvider>
        <Header />
        <Steps>
          <CardsContainer />
          <FlipCardsContainer />
        </Steps>
      </StepsProvider>
    </div>
  );
}

export default App;
