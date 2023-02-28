import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import Login from "./pages/Login";
import Register from "./pages/Register"
import Organic from "./pages/Organic"
import Inorganic from "./pages/Inorganic"
import ErrorPage from "./pages/ErrorPage";
import Topic from "./pages/Topic"
import Test from "./pages/Test"
import 'semantic-ui-css/semantic.min.css'

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/organic-topics">
        <Route index element={<Organic />} />
        <Route path=":id">
          <Route index element={<Topic />} />
          <Route path="test" element={<Test />} />
        </Route>
      </Route>
      <Route path="/inorganic-topics">
        <Route index element={<Inorganic />} />
        <Route path=":id">
          <Route index element={<Topic />} />
          <Route path="test" element={<Test />} />
        </Route>
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  )
}

export default App;