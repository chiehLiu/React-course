import { useState, useEffect } from 'react';
import BlogList from './BlogList'

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);

    const title = "I am title"

    const [name, setName] = useState('Mario')

    function clickHandler(id) {

        const newBlogs = blogs.filter(blog => blog.id !== id)
        setBlogs(newBlogs)
    }

    // 當有 re-render 情況發生時會觸發 useEffect 函式
    // 通常 useEffect 可以用來 fetch 資料 或是 處理 authentication (驗證資訊)
    // 後方的空 array 可以讓 useEffect 只會在畫面 render 第一次的時候跑，其他時候都不會被觸發了
    useEffect(() => {
        console.log('use effect ran');
        console.log(name);
    }, [name])

    return (
        <div className="home">
            <BlogList blogs={blogs} title={title} clickHandler={clickHandler} />
            <button onClick={() => setName('luigi')}>Change Name</button>
            <p>{name}</p>
        </div >
    );
}
export default Home;