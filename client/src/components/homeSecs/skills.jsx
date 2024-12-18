import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './skills.scss';

const Hero = () => {
  const { t } = useTranslation();
  const skills = t('skills', { returnObjects: true });

  return (
    <div id="skills" className="skills sec">
      {skills.sections.map((sec, index) => (
        <div className="curriculums" key={index}>
          <h3>{sec.text}</h3>
          <div className="icons row">
            {sec.icons.map((item, index) => (
              <div className="icon" key={index}>
                <img src={item.imgLink} alt="" loading="lazy" />
                <div className="text">
                  <h5 className='light'>{item.text}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Hero;
