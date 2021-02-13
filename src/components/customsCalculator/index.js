import React from "react";
import s from "../Layout/style.module.css";

const CustomsCalculator = ({ id, title, descr, urlBg, colorBg }) => {
  // const styleColorBg = colorBg ? { background: colorBg } : {};
  const styleUrlBg = urlBg ? { backgroundImage: `url(${urlBg})` } : {};
  return (
    <section className={s.root} id={id} style={{ ...styleUrlBg }}>
      <div className={s.wrapper}>
        <article>
          <iframe
            className={s.customCalculatorFrame}
            src="https://www.mdoffice.com.ua/pls/MDOffice/auto.html?p_form=4"
            // frameborder="0"
            // marginheight="0"
            // marginwidth="50%"
            ///////
            // textAlign="center"
            // position="middle"
            // sandbox=""
          />

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

export default CustomsCalculator;
