import React, { useState } from 'react'
import styles from './Header.module.css'
import { useTranslation } from 'react-i18next'

function Header() {
  const { t, i18n } = useTranslation()
  const [language, setLanguage] = useState(null)
  const [dropDown, setDropDown] = useState(false)

  const changeLang = (lang) => {
    i18n.changeLanguage(lang)
    setLanguage(lang)
  }
  const openDropDown = () => {
    setDropDown(!dropDown)
  }

  return (
    <div className={styles.navbar}>
      <h4 className={styles.logo}>Joy Chaikhana</h4>
      <div style={{ display: 'flex', alignItems: 'center', marginRight: 10 }}>
        <div className={styles.contact}>
          <h4>About</h4>
          <h4>Contacts</h4>
        </div>
        <div onClick={openDropDown} className={styles.lang_menu}>
          <div
            className={
              language === 'en'
                ? styles.selected_lang_en
                : styles.selected_lang_ru
            }
          >
          </div>
          <ul style={dropDown ? { display: 'block' } : { display: 'none' }}>
            <li>
              <a
                href="#"
                onClick={() => changeLang('ru')}
                className={styles.ru}
              >
                Русский
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => changeLang('en')}
                className={styles.en}
              >
                English
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
