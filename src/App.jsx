import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./containers/pages/home/index";
import Error404 from "./containers/error/error404";
import AboutPage from "containers/pages/about/index";
import Layout from "layouts/layout";
import CoursesPage from "containers/pages/courses";
import EventsPage from "containers/pages/events";
import TeachersPage from "containers/pages/teachers";
import BlogPage from "containers/pages/blog";
import ShopPage from "containers/pages/shop";
import ContactPage from "containers/pages/contact";
import CourseSingel from "containers/pages/courses/singel";

function App() {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="*" element={<Error404/>}/>
      <Route path="/" element={<Layout><HomePage /></Layout>}/>
      <Route path="/about" element={<Layout><AboutPage /></Layout>}/>
      <Route path="/courses" element={<Layout><CoursesPage /></Layout>}/>
      <Route path="/events" element={<Layout><EventsPage /></Layout>}/>
      <Route path="/teachers" element={<Layout><TeachersPage /></Layout>}/>
      <Route path="/blog" element={<Layout><BlogPage /></Layout>}/>
      <Route path="/shop" element={<Layout><ShopPage /></Layout>}/>
      <Route path="/contact" element={<Layout><ContactPage /></Layout>}/>
      <Route path="/course-single/:id" element={<Layout><CourseSingel /></Layout>} />
    </Routes>
  );
}

export default App;
