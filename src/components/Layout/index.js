import s from "./style.module.css";

const Layout = ({ id, title, descr, urlBg, colorBg }) => {
  // const styleColorBg = colorBg ? { background: colorBg } : {};
  const styleUrlBg = urlBg ? { backgroundImage: `url(${urlBg})` } : {};
  return (
    <section className={s.root} id={id} style={{ ...styleUrlBg }}>
      <div className={s.wrapper}>
        <article>
          <div className={s.title}>
            {title && <h3>{title}</h3>}
            <span className={s.separator}></span>
          </div>
          <div className={s.desc}>{descr && <p>{descr}</p>}</div>
        </article>
      </div>
    </section>
  );
};

export default Layout;
