import { useState } from 'react';

const Home = () => {

    // let name = 'Mario';
    const [name, setName] = useState('mario');
    const [age, setAge] = useState(30);

    const handleClick = () => {
        setName('luigi')
        setAge('23')
    }

    return (
        <div className="home">
            <h2>Homepage</h2>
            <p>{name} is {age} old</p>
            <button onClick={handleClick}>Click me</button>
        </div >
    );
}
export default Home;