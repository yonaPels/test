import { Login } from "./cmps/login";

function App() {

  function onSubmit(user){
    console.log('user', user);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Login onSubmit={onSubmit}/>

      </header>
    </div>
  );
}

export default App;
