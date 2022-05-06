import Header from "../components/Header";
import Footer from "../components/Footer";

function LogIn() {
  return (
    <div className="container-fluid h-100">
      <div className="row h-100 mx-4">
        <div className="col d-flex flex-column p-0">
          <Header />
          {/* Main Gradient Section Begins */}
          <main className="h-100 d-flex flex-column justify-content-center align-items-center">
            Log In
          </main>
          {/* Main Gradient Section Ends */}
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default LogIn;
