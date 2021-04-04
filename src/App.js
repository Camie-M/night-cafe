import './App.css';

import Header from './containers/Header';
import MainTitle from './containers/MainTitle';
import DescriptionTable from './containers/DescriptionTable';
import FirstImageGallery from './containers/FirstImageGallery';
import SecondImageGallery from './containers/SecondImageGallery';
import Navigation from './containers/Navigation';
import Footer from './containers/Footer';

import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <Header />
      <MainTitle />
      <DescriptionTable />
      <FirstImageGallery />
      <SecondImageGallery />
      <Navigation />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
