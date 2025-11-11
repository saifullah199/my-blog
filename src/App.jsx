
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Navbar from './Components/Navbar/Navbar'

function App() {
 

  return (
    <>
      <Navbar></Navbar>
      

      <div className="main-container flex text-center">
        <div className="left-container w-[70%]">
          <Blogs></Blogs>
        </div>
        <div className="right-container w-[30%]">
          <h2>Reading time :0</h2>
          <p>Bookmarked count: 0</p>
        </div>
      </div>
      
    </>
  )
}

export default App
