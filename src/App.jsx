import './App.css';
import Header from './Components/Header/Header';
import { useTranslation } from 'react-i18next';
import './I18n/I18n';
import Main from './Components/Main/Main';
import Hero from './Components/Hero/Hero';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <>
    <Header />
    <Hero />
    <Main />
    <Footer />
    </>
  )
}
export default App;