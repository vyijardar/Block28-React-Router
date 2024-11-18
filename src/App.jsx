
import './App.css'
import './index.css'
import Navbar from './components/Navbar';
import MainContainer from './components/MainContainer';
import Footer from './components/Footer';
function App() {

  return (
    <>
      <div id="container">
        <Navbar></Navbar>
        <MainContainer></MainContainer>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
