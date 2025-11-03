import React from 'react';
import { useTranslation } from 'react-i18next';

const TestI18n = () => {
  const { t, i18n } = useTranslation();

  console.log('TestI18n - Current language:', i18n.language);
  console.log('TestI18n - Translation function works:', t('navigation.home'));

  return (
    <div style={{ position: 'fixed', top: '100px', left: '10px', background: 'red', color: 'white', padding: '10px', zIndex: 1000 }}>
      <div>Language: {i18n.language}</div>
      <div>Test translation: {t('navigation.home')}</div>
      <button onClick={() => i18n.changeLanguage('en')}>EN</button>
      <button onClick={() => i18n.changeLanguage('ru')}>RU</button>
    </div>
  );
};

export default TestI18n;