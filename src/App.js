import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';
import {Route, Routes, Link, useLocation} from "react-router-dom";
import Signup from './pages/Signup';
import Book from './pages/Book';
import BookDetail from './pages/BookDetail';
import NotFound from './pages/NotFound';
import DashBoard from './pages/DashBoard';
import Students from './pages/Students';
import Content from './pages/Content';
import Careers from './pages/Careers';
import Message from './pages/Message';

function App() {
  const data = [{name: "Vinayak", age: 10}, {name:"alex", age:11}]
  const location = useLocation();
  return (
    <div>
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link state={data} to="/signup">Sign up</Link>
          </li>
        </ul>
      </nav> */}
      <Routes>
        <Route path="/" element={<Login />}/>
        {/* <Route path='/signup' element={<Signup />}/> */}

        <Route path="dashboard" element={<DashBoard />}>
          <Route path='students' element={<Students />}/>
          <Route path='content' element={<Content />}/>
          <Route path='Careers' element={<Careers />}/>
          <Route path='Message' element={<Message />}/>
        </Route>

        {/* <Route path='/students' element={<Students />} />
        <Route path='/content' element={<Content />}/>
        <Route path='/Careers' element={<Careers />}/>
        <Route path='/Message' element={<Message />}/> */}

        <Route path='/books' >
          <Route index element={<Book />}/>
          <Route path='1' element={<BookDetail />}/>
        </Route>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </div>
  );
}

export default App;
