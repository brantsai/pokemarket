import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (  
    <div className='page-container'>
      <NavBar />
        <div className='content-wrap'>
          { children }
        </div>
      <Footer />
    </div>
  );
}
 
export default Layout;