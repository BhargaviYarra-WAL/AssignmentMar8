import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent';
import Sorting from './Sorting';
import PaginationTable from './PaginationTable';

function App() {
  return (
    <div className="App">
      <MyComponent/>
      <Sorting/>
      <PaginationTable/>
    </div>
  );
}

export default App;
