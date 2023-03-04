import Header from './Header.js';
import Footer from './Footer.js';

function Layout({ children, loginuser, setLoginUser }) {
  return (
    <div>
      <Header loginuser = {loginuser} setLoginUser = {setLoginUser}/>
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
