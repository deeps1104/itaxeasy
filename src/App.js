import './App.css';
import Navbar from './component/Navbar';
import Products from './component/Products'
import Heading from './component/Heading'
import Plans from './component/Plans'
function App() {
  return (
    <div className="App">

    {/* Configure Router according to needs */}
      <Navbar/>
      <Products/>
      <Heading/>
      <Plans/>
    </div>
  );
}

export default App;
