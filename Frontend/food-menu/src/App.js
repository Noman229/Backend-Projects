import './App.css';
import Food from './Food';

function App() {
  return (
    <div className="App">
      <div className="food-menu">
        <div>
          <h1>- Fast React Pizza Co. -</h1>
          <h2>Our Menu</h2>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>
        </div>
        <Food />
        <div className='footer'>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>
          <button>Order Now!</button>
        </div>
      </div>
    </div>
  );
}

export default App;
