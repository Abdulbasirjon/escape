import './Footer.css';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
const Footer = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const BOT_TOKEN = '7919926682:AAHH8M4EcMPKpSPYXuAfaqQASUlG2uiFpBI';
  const CHAT_ID = '8116829019';
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim()) {
      alert('Iltimos, email kiriting!');
      return;
    }
    const message = `Yangi obuna: ${email}`;
    try {
      await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
        }),
      });
      alert('Email muvaffaqiyatli yuborildi...');
      setEmail('');
    } catch (error) {
      console.error('Xatolik:', error);
      alert('Xabar yuborishda xatolik yuz berdi...');
    }
  };
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-container">
          <div className="footer-box">
            <div className="boxs">
              <h2>{t('stay')}</h2>
              <hr />
              <form onSubmit={handleSubmit}>
                <span>
                  <input
                    type="email"
                    placeholder={t('your')}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button type="submit">{t('submit')}</button>
                </span>
              </form>
            </div>
          </div>
          <div className="footer-bord">
            <h2>Escape</h2>
            <ul>
              <li><a className="btn liquid" id='href' href="#">{t('home')}</a></li>
              <li><a className="btn liquid" id='href' href="#">{t('categorie')}</a></li>
              <li><a className="btn liquid" id='href' href="#">{t('about')}</a></li>
              <li><a className="btn liquid" id='href' href="#">{t('contact')}</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
