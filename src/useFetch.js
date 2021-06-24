// custom hook function must start with use+...

import { useState, useEffect } from 'react';


const useFetch = (url) => {

    // 這邊資料的的命名可以做修改成比較全域一點因為不只是 blog 會使用到
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);


    // 當有 re-render 情況發生時會觸發 useEffect 函式
    // 通常 useEffect 可以用來 fetch 資料 或是 處理 authentication (驗證資訊)
    // 後方的空 array 可以讓 useEffect 只會在畫面 render 第一次的時候跑，其他時候都不會被觸發了

    useEffect(() => {
        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw Error('could not fetch the data from that resource');
                }
                return res.json()
            }).then((data) => {
                setData(data);
                setIsPending(false);
                setError(null);
            }).catch(err => {
                setError(err.message);
                setIsPending(false);
                console.log(err.message);
            })
    }, [url])

    return { data, isPending, error }
}

export default useFetch;