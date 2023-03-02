import Navbar from "../components/Navbar";

const AuthLayout = ({
  children
}) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  )
}

export default AuthLayout;
