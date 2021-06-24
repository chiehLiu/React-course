import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {

    const title = "I am title"

    const { data, isPending, error } = useFetch('http://localhost:8000/blogs')

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {data && <BlogList blogs={data} title={title} />}
        </div >
    );
}
export default Home;