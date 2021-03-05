import BlogList from '../blog/BlogList';
import useFetch from '../composables/useFetch';
const Home = () => {
    //State Hook
    const {data: blogs, isLoading, isError} = useFetch('http://localhost:8000/blogs'
    )

    return (  
        <div className="home">
            { isError && <div>{ isError }</div> }
            { isLoading && <div>Loading...</div> }
            {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
        </div>
    );
}
 
export default Home;