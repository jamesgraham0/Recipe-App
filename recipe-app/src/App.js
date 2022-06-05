import { Provider, useDispatch } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/index';

import Navbar from './components/Navbar/Navbar.jsx';
import AddRecipe from './components/AddRecipe/AddRecipe.jsx';
import Recipes from './components/Recipes/Recipes.jsx';

function App() {
  return (
    <div className="App">
      <h1>A Really Awesome Recipe Website</h1>
      <div id="circle1" className="circle"></div>
      <div id="circle2" className="circle"></div>
      <div id="circle3" className="circle"></div>
      <div id="circle4" className="circle"></div>
      
      {/* <Provider store={store}> */}
        <Navbar/>
        <AddRecipe/>
        <Recipes/>
      {/* </Provider> */}
    </div>
  );
}

export default App;
