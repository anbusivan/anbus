import logo from './logo.svg';
import './App.css';
import MyImage from './keevillage01.jpeg';

function App() {
  return (
    <div className="App">
      <img className='img' src={MyImage}></img>
      <h3>"The soul of India lives in its villages" - Mahatma Gandhi. </h3>
      <p>My village is a petit abode for happy people.  Here they live in harmony and peace. </p>
      <p>The village people are very hardworking and thus they must have a good source of upliftment.</p>
      <p>The farmers should be facilitated by helping them to leverage their sales, make them notified about the modern techniques used in farming, and give them compensation and knowledge of the true market price of their yield.</p>
    </div>
  );
}

export default App;
