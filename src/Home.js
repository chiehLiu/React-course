import { useState, useEffect } from 'react';
import BlogList from './BlogList'

const Home = () => {
    const [blogs, setBlogs] = useState(null);

    const title = "I am title"

    // 當有 re-render 情況發生時會觸發 useEffect 函式
    // 通常 useEffect 可以用來 fetch 資料 或是 處理 authentication (驗證資訊)
    // 後方的空 array 可以讓 useEffect 只會在畫面 render 第一次的時候跑，其他時候都不會被觸發了
    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json()
            }).then((data) => {
                setBlogs(data)
            })
    }, [])

    return (
        <div className="home">
            {blogs && <BlogList blogs={blogs} title={title} />}
        </div >
    );
}
export default Home;