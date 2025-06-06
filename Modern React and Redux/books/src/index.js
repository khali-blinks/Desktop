import './index.css';
import React from "react";
import ReactDOM from "react-dom/client";
import App from './App';
import {Provider} from './context/books';

const el = document.getElementById('root');

const root = ReactDOM.createRoot(el);

root.render(<Provider><App/></Provider>);


function App() {
    const [counter, setCounter] = useState(0);
  
    useEffect(() => {
        document.body.onClick = () => {
          console.log(counter);
        };
      }, []);
  
    return (
      <div>
        <button onClick={() => setCounter(counter + 1)}>+ Increment</button>
        <div>Count: {counter}</div>
      </div>
    );
  }