import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './hero.scss';

const Hero = () => {
  const { t } = useTranslation();
  const heroContent = t('hero', { returnObjects: true });

  return (
    <div id="hero" className="hero">
      <div className="text">
        <h1
          className="hero-heading"
          dangerouslySetInnerHTML={{ __html: heroContent.heroText }}
        />
        <div className="subtitle">
          {heroContent.subtitle.map((item, index) => (
            <div className="check-point-row" key={index}>
              <img src={item.imgLink} alt="" loading="lazy" />
              <div
                className="h4"
                dangerouslySetInnerHTML={{ __html: item.text }}
              />
            </div>
          ))}
        </div>
        <div className="btns row">
          {heroContent.buttons.map((item, index) => (
            <Link to={item.link} key={index} className={item.class}>
              <div className="h5 navlink-text">{item.text}</div>
            </Link>
          ))}
        </div>
      </div>
      <img  className='hero-img' src={heroContent.imgLink} alt="" loading="lazy" />
    </div>
  );
};

export default Hero;
