import Navbar from "./Navbar";

function AuthLayout({children}) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  )
}

export default AuthLayout;