import './App.css';
// import FriendList from './component/FriendList'
import AddFriend from './component/AddFriend'
import Details from './component/Details'


function App() {
  


  return (
    <div className="App">
      <div className='main-box'>
        <div className='let-col'>
          {/* <div className='first-comp'>
          { list.length == 0 ? <FriendList name="Noman" image="abc" /> : ''  }
          </div>
          <div className='second-comp'><AddFriend /></div> */}
          <AddFriend />
        </div>
        <div className='right-col'>
          <div className='t hird-comp'><Details /></div>
        </div>
      </div>
    </div>
  );
}

export default App;
