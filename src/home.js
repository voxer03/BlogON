import useFetch from './useFetch'

import BlogList from './blogList';

const Home = () => {
const {data: blogs,isLoading}=useFetch("http://localhost:8000/blogs" );
    return ( 
        <div className="home">
            {isLoading && <h1>Loading</h1>   }
            {blogs && <BlogList blogs={blogs} />}
        </div>
     );
}
 
export default Home;
