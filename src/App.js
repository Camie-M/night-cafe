import './App.css';

import Header from './containers/Header';
import MainTitle from './containers/MainTitle';
import DescriptionTable from './containers/DescriptionTable';
import FirstImageGallery from './containers/FirstImageGallery';
import SecondImageGallery from './containers/SecondImageGallery';
import Navigation from './containers/Navigation';

function App() {
  return (
    <>
      <Header />
      <MainTitle />
      <DescriptionTable />
      <FirstImageGallery />
      <SecondImageGallery />
      <Navigation />
    </>
  );
}

export default App;
