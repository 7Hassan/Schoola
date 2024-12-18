import { HashLink } from 'react-router-hash-link';
import { useTranslation } from 'react-i18next';
import './header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
// Example icon

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const arabic = i18n.language == 'ar';

  const changeLanguage = () => {
    const lng = arabic ? 'en' : 'ar';
    i18n.changeLanguage(lng);
  };

  return (
    <button onClick={changeLanguage} className="lang">
      <FontAwesomeIcon icon={faGlobe} />
      <div className="h5">{arabic ? 'English' : 'العربية'}</div>
    </button>
  );
};

const OtherLinks = () => {
  const { t } = useTranslation();
  const navLinkItems = t('header.navLink', { returnObjects: true });
  return (
    <div className="navbtns-wrapper">
      <a href={navLinkItems.link} className="btn bg primary-btn">
        {navLinkItems.title}
      </a>
      <LanguageSwitcher />
    </div>
  );
};

const MenuBar = () => {
  const { t } = useTranslation();
  const navbarItems = t('header.navbar', { returnObjects: true });

  return (
    <div className="navlinks-wrapper">
      {navbarItems.map((item, index) => (
        <HashLink
          smooth
          to={item.link}
          key={index}
          className="nav-link active-parents"
        >
          <div className="h5 navlink-text active-btn">{item.title}</div>
        </HashLink>
      ))}
    </div>
  );
};

const Header = () => {
  const { t } = useTranslation();
  const logo = t('header.logo', { returnObjects: true });

  return (
    <header>
      <div className="container">
        <div className="brand">
          <HashLink smooth to={logo.link}>
            <img className="schoola-logo" src={logo.image} alt={logo.alt} />
          </HashLink>
        </div>
        <nav className="nav-menu">
          <MenuBar />
          <OtherLinks />
        </nav>
      </div>
    </header>
  );
};

export default Header;
