import './Hero.css';
import her5 from './IMAGE (5).png';
import her6 from './IMAGE (4).png';
import her7 from './IMAGE (6).png';
import her8 from './IMAGE (7).png';
import { useTranslation } from 'react-i18next';
const Hero = () => {
  const { t } = useTranslation();
  return (
    <>
      <main className="hero">
        <marquee behavior="scroll" direction="right" className='marq'>
          <p>{t('natu')}</p>
          <p>{t('photo')}</p>
          <p>{t('laxa')}</p>
          <p>{t('vaca')}</p>
          <p>{t('ravel')}</p>
          <p>{t('ture')}</p>
          <p>{t('natu')}</p>
          <p>{t('photo')}</p>
          <p>{t('laxa')}</p>
          <p>{t('vaca')}</p>
          <p>{t('ravel')}</p>
          <p>{t('ture')}</p>
        </marquee>
        <div className="container">
          <button className="hero-button">{t('post')}</button>
          <div className="hero-container">
            <div className="hero-box">
              <div>
                <h2>{t('road')}</h2>
                <p>{t('ahead')}</p>
                <span>
                  <img src={her7} alt="" />
                  <b>Mat Vogels</b>
                </span>
              </div>
            </div>
            <div className="hero-box1">
              <div>
                <h2>{t('top')}</h2>
                <p>{t('once')}</p>
                <span>
                  <img src={her8} alt="" />
                  <b>William Wong</b>
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
export default Hero;