import { useHistory, useParams } from "react-router-dom";
import useFetch from "../composables/useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, isLoading, isError, setRefetch } = useFetch('http://localhost:8000/blogs/' + id);
  const history = useHistory();

  const handleClick = () => {
    fetch('http://localhost:8000/blogs/' + blog.id, {
      method: 'DELETE'
    }).then(() => {
      setRefetch(true);
      history.push('/');
    }) 
  }
  return (
    <div className="blog-details">
      { isLoading && <div>Loading...</div> }
      { isError && <div>{ isError }</div> }
      { blog && (
        <article>
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
          <div>{ blog.body }</div>
          <button onClick={() => handleClick}>Delete</button>
        </article>
      )}
    </div>
  );
}
 
export default BlogDetails;