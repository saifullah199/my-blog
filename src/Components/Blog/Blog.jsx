import { FaBookmark } from "react-icons/fa";

const Blog = ({blog, handleBookmark, handleMarkAsRead}) => {

    const {author, title, cover, author_img, hashtags, reading_time, id
} = blog


    // console.log(blog)
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
              <figure>
                  <img
                    src={cover}
                    alt="" />
              </figure>
            <div className="card-body">
              <div className="author flex items-center justify-around gap-3">
                <h3>{author}</h3>
                <img className='w-16' src={author_img} alt="" />
                <button onClick={()=>handleBookmark(blog)}>  <FaBookmark size={25}  /></button>
              </div>
              <h2 className="card-title">{title}</h2>
              <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    
              <div className="flex">
                {
                hashtags.map((hash) => <p>{hash}</p>)
                }
              </div>
              <div className="card-actions justify-between">
                <button onClick={()=>handleMarkAsRead(reading_time,id)} className="btn btn-primary">Mark as Read</button>
              </div>
            </div>
            </div>
        </div>
    );
};

export default Blog;