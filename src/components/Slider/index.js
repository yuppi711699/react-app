import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import mainImg from "../../assets/main.jpg";
import aboutImg from "../../assets/about.jpg";
import orderImg from "../../assets/order.png";
import s from "../Layout/style.module.css";

const Slider = ({ id, title, descr, urlBg, colorBg }) => {
  // const styleColorBg = colorBg ? { background: colorBg } : {};
  const styleUrlBg = urlBg ? { backgroundImage: `url(${urlBg})` } : {};
  return (
    <section className={s.root} id={id} style={{ ...styleUrlBg }}>
      <div className={s.wrapper}>
        <article>
          <AwesomeSlider>
            {/* cssModule={styles}> */}
            <div data-src={mainImg} />
            <div data-src={aboutImg} />
            <div data-src={orderImg} />
          </AwesomeSlider>

          {/* <div className={s.title}>
            {title && <h3>{title}</h3>}
            <span className={s.separator}></span>
          </div>
          <div className={s.desc}>{descr && <p>{descr}</p>}</div> */}
        </article>
      </div>
    </section>
  );
};

export default Slider;
