import './Main.css';
import m1 from './IMAGE (9).png';
import m2 from './IMAGE (11).png';
import m3 from './IMAGE (12).png';
import m4 from './IMAGE (13).png';
import m5 from './IMAGE (14).png';
import m6 from './IMAGE (15).png';
import m7 from './IMAGE (6).png';
import m8 from './IMAGE (7).png';
import { useTranslation } from 'react-i18next';
const Main = () => {
    const { t } = useTranslation();
    return (
        <>
            <main className="main">
                <div className="container">
                    <button className='main-button'>{t('most')}</button>
                    <div className="main-container">
                        <div className="box">
                            <img src={m1} alt="" />
                            <div>
                                <h2>{t('tall')}</h2>
                                <p>{t('zone')}</p>
                                <hr />
                                <span>
                                    <img src={m7} alt="" />
                                    <b>Mat Woggels</b>
                                </span>
                            </div>
                        </div>
                        <div className="box">
                            <img src={m2} alt="" />
                            <div>
                                <h2>{t('side')}</h2>
                                <p>{t('place')}</p>
                                <hr />
                                <span>
                                    <img src={m8} alt="" />
                                    <b>William Wong</b>
                                </span>
                            </div>
                        </div>
                        <div className="box">
                            <img src={m3} alt="" />
                            <div>
                                <h2>{t('fall')}</h2>
                                <p>{t('not')}</p>
                                <hr />
                                <span>
                                    <img src={m8} alt="" />
                                    <b>William Wong</b>
                                </span>
                            </div>
                        </div>
                        <div className="box">
                            <img src={m4} alt="" />
                            <div>
                                <h2>{t('mis')}</h2>
                                <p>{t('make')}</p>
                                <hr />
                                <span>
                                    <img src={m7} alt="" />
                                    <b>Mat Woggels</b>
                                </span>
                            </div>
                        </div>
                        <div className="box">
                            <img src={m5} alt="" />
                            <div>
                                <h2>{t('ear')}</h2>
                                <p>{t('lost')}</p>
                                <hr />
                                <span>
                                    <img src={m8} alt="" />
                                    <b>William Wong</b>
                                </span>
                            </div>
                        </div>
                        <div className="box">
                            <img src={m6} alt="" />
                            <div>
                                <h2>{t('it')}</h2>
                                <p>{t('page')}</p>
                                <hr />
                                <span>
                                    <img src={m8} alt="" />
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
export default Main;