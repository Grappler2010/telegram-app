import { useEffect } from 'react';
import './App.css';
import { useTelegram } from './hooks';
import { Card } from './components';

function App() {
  const { tg, onClose } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, [tg]);

  return (
    <div className="App">
      <Card />
      <button onClick={onClose}>Закрыть</button>
    </div>
  );
}

export default App;
