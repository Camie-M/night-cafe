import './App.css';

import Header from './containers/Header';
import MainTitle from './containers/MainTitle';
import DescriptionTable from './containers/DescriptionTable';
import FirstImageGallery from './containers/FirstImageGallery';
import SecondImageGallery from './containers/SecondImageGallery';

function App() {
  return (
    <>
      <Header />
      <MainTitle />
      <DescriptionTable />
      <FirstImageGallery />
      <SecondImageGallery />
    </>
  );
}

export default App;
