import SliderComponent from "containers/pages/home/slider";
import About from "containers/pages/home/about";
import Books from "containers/pages/home/books";
import Category from "containers/pages/home/category";
import Courses from "containers/pages/home/courses";
import Feacture from "containers/pages/home/feacture";
import News from "containers/pages/home/news";
import Teachers from "containers/pages/home/teachers";
import Testimonial from "containers/pages/home/testimonial";
import LogoSection from "components/section/logos";

function Home() {
  return (
    <>
        <SliderComponent/>
        <Category/>
        <About/>
        <Courses/>
        <Feacture/>
        <Teachers/>
        <Books/>
        <Testimonial/>
        <News/>
        <LogoSection/>
    </>
  );
}

export default Home;
