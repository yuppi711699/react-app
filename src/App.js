import Header from "./components/Header";
import Layout from "./components/Layout";
import Footer from "./components/Footer";
import Slider from "./components/Slider";
import CustomsCalculator from "./components/customsCalculator";
import mainImg from "./assets/mainFinish.jpg";
import aboutImg from "./assets/about.jpg";
import orderImg from "./assets/order.png";

// import bg1 from "./assets/bg.jpg";
import bg2 from "./assets/bg2.jpg";

const App = () => {
  return (
    <>
      {/* Header */}
      {/* <Header 
      title="ЮГ АВТОТРАНС" 
      descr="У нас вы найдете свой автомобиль!" /> */}
      {/* bg image*/}
      <Layout
        id="id_layout_1"
        title="ЮГ АВТОТРАНС"
        descr="У нас вы найдете свой автомобиль!"
        urlBg={mainImg}
      />
      {/* bg color */}
      {/* <Layout
        id="id_layout_1"
        title="Layout 1"
        descr="The description of Layout 1"
        UrlBg={aboutImg}
      />
      {/* bg image */}
      <Layout
        id="id_layout_3"
        title="О НАШЕЙ КОМПАНИИ"
        descr="«ЮГ АвтоТранс» предлагает своим клиентам качественные автомобили
        высокого класса. Имея большой ассортимент транспортных средств, мы
        гарантируем, что любому покупателю подберем подходящую модель.
        Компания «ЮГ АвтоТранс» гордится тем, что может предложить автомобили
        не только на любой вкус, но и на любой бюджет."
        urlBg={aboutImg}
      />
      <Slider urlBg={orderImg} />
      {/* <Layout
        id="id_layout_3"
        // title="О НАШЕЙ КОМПАНИИ"
        // descr="«ЮГ АвтоТранс» предлагает своим клиентам качественные автомобили
        // высокого класса. Имея большой ассортимент транспортных средств, мы
        // гарантируем, что любому покупателю подберем подходящую модель.
        // Компания «ЮГ АвтоТранс» гордится тем, что может предложить автомобили
        // не только на любой вкус, но и на любой бюджет."
        urlBg={aboutImg}
      /> */}
      <CustomsCalculator urlBg={aboutImg} />
      {/* Footer */}
      <Footer />
    </>
  );
};

export default App;
