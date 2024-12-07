import React from 'react';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // Change language dynamically
  };

  return (
    <div>
      <nav>
        <ul>
          <li>{t('header.home')}</li>
          <li>{t('header.about')}</li>
          <li>{t('header.contact')}</li>
          <li>{t('header.services')}</li>
        </ul>
      </nav>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('ar')}>العربية</button>
    </div>
  );
};

export default Header;
