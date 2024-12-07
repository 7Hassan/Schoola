import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import "./header.scss"

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const arabic = i18n.language == "ar";

  const changeLanguage = () => {
    const lng = arabic ? 'en' : 'ar'
    i18n.changeLanguage(lng);
  };

  return (
    <button onClick={changeLanguage}>
      {arabic ? 'English' : 'العربية'}
    </button>
  );

}


const Header = () => {
  const { t } = useTranslation();
  const navbarItems = t('header.navbar', { returnObjects: true });
  const logo = t('header.logo', { returnObjects: true });

  return (
    <header>
      <div className="container">


        <div className="brand">
          <Link to={logo.link}>
            <img className='schoola-logo' src={logo.image} alt={logo.alt} />
          </Link>
        </div>
        <nav className='nav-menu'>
          <div className='navlinks-wrapper'>
            {navbarItems.map((item, index) => (

              <Link to={item.link} key={index} className='nav-link'>
                <div className='h5 navlink-text'>
                  {item.title}
                </div>
              </Link>
            ))}
          </div>
          <div className='navbtns-wrapper'>
            <LanguageSwitcher />

          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
