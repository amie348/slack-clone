import './App.css';
import Header from './HeaderComponent/Header.js';
import Sidebar from './Sidebar/Sidebar.js';



function App() {
  return (
    <div className="App">
      {/* Header component */}
      <Header/>
      <div className='main_body'>

      </div>
      {/* Sidebar component */}
      <Sidebar/>
      {/* React Router -> Chat Screen */} 
    </div>
  );
}

export default App;
