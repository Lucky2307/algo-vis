import './App.css';
import Navbar from './Navbar';
import ReverseLinkedList from './pages/ReverseLinkedList';
import Test from './pages/Test';

function App() {
  let component;
  switch (window.location.pathname) {
    case "/reverselinkedlist":
      component = <ReverseLinkedList />
      break
    case "/test":
      component = <Test />
      break
    default:
      component = <h1>Nothing here</h1>
      break
  }
  return (
    <>
      <Navbar />
      {component}
    </>
  )

}

export default App;
