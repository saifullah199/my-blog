
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Navbar from './Components/Navbar/Navbar'

function App() {

  const [bookmarked,setBookmarked] = useState([])
  const [readingCount,setReadingCount] =useState(0)

  const handleBookmark = (blog) => {
    setBookmarked([...bookmarked,blog])
  }
  
  const handleMarkAsRead =(time,id)=>{
    const newTime = readingCount +time ;
    setReadingCount(newTime)
    handleRemoveBookmark(id)
  }

  const handleRemoveBookmark =(id) => {
    const remainingBookmark = bookmarked.filter((mark) => mark.id !== id)
    setBookmarked(remainingBookmark)

  }
 

  return (
    <>
      <Navbar></Navbar>
      

      <div className="main-container flex text-center">
        <div className="left-container w-[70%]">
          {/* passing the handleBookmark, handleMarkAsRead function to Blogs component */}
          <Blogs 
          handleBookmark={handleBookmark}
           handleMarkAsRead={handleMarkAsRead}></Blogs>
        </div>
        <div className="right-container w-[30%]">
          <h2>Reading time :{readingCount}</h2>
          <p>Bookmarked count: {bookmarked.length}</p>

          {
            bookmarked.map((marked)=> <p className='bg-amber-600 m-2 text-white p-3 '
            key={marked.id}>{marked.title}</p>)
          }
        </div>
      </div>
      
    </>
  )
}

export default App
