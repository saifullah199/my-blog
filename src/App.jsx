
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Navbar from './Components/Navbar/Navbar'

function App() {

  const [bookmarked,setBookmarked] = useState([])

  const handleBookmark = (blog) => {
    setBookmarked([...bookmarked,blog])
  }
  console.log(bookmarked)
 

  return (
    <>
      <Navbar></Navbar>
      

      <div className="main-container flex text-center">
        <div className="left-container w-[70%]">
          {/* passing the handleBookmark function to Blogs component */}
          <Blogs handleBookmark={handleBookmark}></Blogs>
        </div>
        <div className="right-container w-[30%]">
          <h2>Reading time :0</h2>
          <p>Bookmarked count: {bookmarked.length}</p>

          {
            bookmarked.map((marked)=> <p>{marked.title}</p>)
          }
        </div>
      </div>
      
    </>
  )
}

export default App
