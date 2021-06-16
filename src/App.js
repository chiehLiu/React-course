import './App.css';


function App() {

  const title = "welcome to the new blog";
  const likes = 50;
  const link = "http://google.com"

  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>Liked {likes} times</p>
        <p>{"hello world"}</p>
        <p>{[1, 2, 3, 4, 5]}</p>
        <p>{10}</p>
        <p>{Math.random() * 10000}</p>
        <a href={link}>Google site</a>
      </div>
    </div>
  );
}

export default App;
