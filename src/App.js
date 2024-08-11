// import './App.css';
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
    <Navbar />
    <div className="d-flex gap-4 justify-content-center pt-5">
    <Cards 
    title="javascript"
    src="https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=600"
    prag="lorem10lorem10lorem10lorem10lorem10lorem10lorem10lorem10lorem10lorem10lorem10lorem10lorem10"
    />
    <Cards
    title="React.js"
    src="https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=600"
    prag="lorem10lorem10lorem10lorem10lorem10lorem10lorem10lorem10lorem10lorem10lorem10lorem10lorem10"
    />
    <Cards
    title="Node.js"
    src="https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=600"
    prag="lorem10lorem10lorem10lorem10lorem10lorem10lorem10lorem10lorem10lorem10lorem10lorem10lorem10"
    />
    </div>
    </>
  );
}

export default App;
