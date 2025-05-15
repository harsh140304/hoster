import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import Plans from "./components/Plans";
import FindDomain from "./components/FindDomain";
import SignIn from "./components/SignIn";
import WhyHoster from "./components/WhyHoster";

function App() {
  return (
    <Router>
      <div className="bg-amber-50 min-h-screen flex flex-col gap-16 px-6 py-3 md:px-10 md:py-7 lg:px-16 lg:py-10">
        <Header />
        <Routes>
        <Route
  path="/"
  element={
    <>
      <Body />
      <Plans />
      <WhyHoster /> {/* ✅ placed here */}
    </>
  }
/>
          <Route path="/plans" element={<Plans />}/>
          <Route path="/find-domain" element={<FindDomain />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/why-hoster" element={<WhyHoster />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
