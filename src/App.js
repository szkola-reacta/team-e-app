import "./App.css";
import Header from "./common/Header";
import data from "./Data";

function App() {
  return (
    <div className="App">
     {data.map(el => (
        <Header
          key={`logo-${el.id}`}
          image={el.image}
          alt={el.alt}
        />
      ))}
      <h1>MovieApp</h1>
    </div>
  );
}

export default App;
