// npm install方法 : docker-compose run --rm node sh -c "npm install bootstrap@5"
import { useEffect, useState } from 'react';
import './App.css';
import Counter from './Counter';

function App() {
  const [count, setcount] = useState(0);
  const [menu, setmenu] = useState([]);
  const [sum, setsum] = useState(0);
  useEffect(() => {
    setsum(count*930);
  }, [count]);  
  return (
    <div className="App">
    </div>
  );
}

export default App;