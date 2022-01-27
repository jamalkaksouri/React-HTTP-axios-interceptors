import Footer from "../components/Footer";
import Header from "../components/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="wrapper">
        <div className="container">{children}</div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
