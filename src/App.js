
import Navbar from  "./components/Navbar/navbar";
import Home from "./components/Home/home";
import WhatsNew from "./components/whatsNew /whatsNew";
import Closet from "./components/closet/closet";
import Magzine from "./components/Magzine/magzine";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <WhatsNew/>
      <Closet/>
      <Magzine/>
    </div>
  )
}

export default App;
