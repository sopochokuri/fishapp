import './App.css';
import FishList from './components/FishListF/FishList';
import  fishesjson  from './components/FishListF/fishes';
 
function App() {
  return (
    <div className="App">
       <FishList fishes = {fishesjson}></FishList>
      <p>sss</p>
    </div>

  )
 
}

export default App;
