import { Route, Routes } from "react-router-dom";
import Test from "./views/Test"
import Home from "./views/Home"
import Topic from "./views/Topic"
import Login from "./views/Login";
import Register from "./views/Register"
import Organic from "./views/Organic"
import Inorganic from "./views/Inorganic"
import ErrorPage from "./views/ErrorPage";
import PeriodicTable from "./views/PeriodicTable";
import 'semantic-ui-css/semantic.min.css'

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/periodic-table" element={<PeriodicTable />} />
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