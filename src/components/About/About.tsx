import "./About.css";

const About = () => {
  return (
    <>
      <div className="about-title">О Нас</div>
      <div className="about-text">
        <p>
          Мы рады видеть вас! Мы рботаем для Вас с 2003 года. 14 лет мы
          наблюдаем, как с каждым днем все больше людей заказывают жд билеты
          через интернет.
        </p>
        <p>
          Сегодня можно заказать железнодорожные билеты онлайн всего в 2 клика,
          но стоит ли это делать? Мы расскажем о преимуществах заказа через
          интернет.
        </p>
        <p className="about-text__bold">
          Покупать жд билеты дешево можно за 90 суток до отправления поезда.
          Благодаря динамическому ценообразованию цена на билеты в это время
          самая низкая.
        </p>
      </div>
    </>
  );
};

export default About;