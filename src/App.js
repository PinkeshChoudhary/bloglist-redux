import './App.css';
import BlogsList from './Components/BlogsList';
import { Header } from './Components/Header';

function App() {
  
  return (
    <div style={{backgroundColor : '#f2f3f5'}}>
      <Header/>
      <BlogsList/>
    </div>
  );
}

export default App;
