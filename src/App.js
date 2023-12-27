
import Navbar from  "./components/Navbar/navbar";
import Home from "./components/Home/home";
import WhatsNew from "./components/whatsNew /whatsNew";
import Closet from "./components/closet/closet";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <WhatsNew/>
      <Closet/>
    </div>
  )
}

export default App;
