import { useTranslation } from 'react-i18next';
import { MdOutlineMenuBook } from "react-icons/md";
import { useState } from 'react';
import './Header.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Autoplay } from 'swiper/modules';
import { FaWindowClose } from "react-icons/fa";
import her1 from './IMAGE (2).png';
import her2 from './IMAGE (3).png';
import her3 from './IMAGE (4).png';
const Header = () => {
    const { t, i18n } = useTranslation();
    const handleChange = (e) => {
        i18n.changeLanguage(e.target.value);
    };
    const [menu, isMenu] = useState(false);
    const modal = () => isMenu(true);
    const backModal = () => isMenu(false);
    const [open, setOpen] = useState(false);
    const mook = () => setOpen(true);
    const exit = () => setOpen(false);
    return (
        <div>
            <header className="header">
                <div className="container">
                    <div className="header-container">
                        <h2 className="logos">Escape</h2>
                        <ul>
                            <li><a className='btn liquid' href="#">{t("home")}</a></li>
                            <li><a className='btn liquid' href="#">{t('categorie')}</a></li>
                            <li><a className='btn liquid' href="#">{t('about')}</a></li>
                            <li><a className='btn liquid' href="#">{t('contact')}</a></li>
                        </ul>
                        <select
                            className="head__btn"
                            value={i18n.language}
                            onChange={handleChange}
                        >
                            <option value="en">English</option>
                            <option value="uz">Uzbek</option>
                            <option value="ru">Русский</option>
                        </select>
                        <MdOutlineMenuBook className='menu-icon' onClick={modal} />
                    </div>
                    {menu && (
                        <div style={{ marginBottom: "150px" }} className="menu-page">
                            <nav className="navigatsiya-link">
                                <li><a className='links' href="#">{t("home")}</a></li>
                                <li><a className='links' href="#">{t('categorie')}</a></li>
                                <li><a className='links' href="#">{t('about')}</a></li>
                                <li><a className='links' href="#">{t('contact')}</a></li>
                                <button onClick={() => backModal()} id="id-btn">Close</button>
                            </nav>
                        </div>
                    )}
                </div>
                <Swiper
                        modules={[Navigation, Autoplay]}
                        autoplay={{ delay: 3000 }}
                        loop
                        className="hero-slider"
                    >
                        <SwiperSlide><img src={her1} alt="slide1" />
                            <div className="head-box">
                                <div className="head-lets">
                                    <h2>{t('lets')}</h2>
                                    <p>{t('travel')}</p>
                                    <button onClick={mook}>{t('view')}</button>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide><img src={her2} alt="slide2" />
                            <div className="head-box">
                                <div className="head-lets">
                                    <h2>{t('lets')}</h2>
                                    <p>{t('travel')}</p>
                                    <button onClick={mook}>{t('view')}</button>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide><img src={her3} alt="slide3" />
                            <div className="head-box">
                                <div className="head-lets">
                                    <h2>{t('lets')}</h2>
                                    <p>{t('travel')}</p>
                                    <button onClick={mook}>{t('view')}</button>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
            </header>
            {open && (
            <div className="header-mook">
                <div className="mooks">
                    <label >Ismingiz va telefon raqamingizni kiriting</label> <br />
                    <input type="text" /> <br />
                    <input type="tel" /> <br />
                    <button onClick={() => alert('Malumot yuborildi...')}>Yuborish</button>
                    <FaWindowClose className='exit' onClick={exit} />
                </div>
            </div>
            )}
        </div>
    )
}
export default Header;