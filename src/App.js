import './App.css';
import Title from './Title.png'

const App = () => {
  return (
    <div className="App">
      <header>
        <div>
          <img src={Title}/>
          <h1 className='header-button'>KRAB KRUSTY</h1>
          <h1 className='header-button'>KRAB MENU</h1>
          <h1 className='header-button'>KRAB HISTORY</h1>
          <h1 className='header-button'>KRAB FAMILY</h1>
        </div>
      </header>
      <body>
        <p>THIS IS BODY</p>
      </body>

    </div>
  );
}

export default App;