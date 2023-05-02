import './App.scss';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { PageContent } from './components/PageContent/PageContent';
// import { PrivacyPolicy } from './components/PrivacyPolicy/PrivacyPolicy';

function App() {
  return (
    <>
      <Header></Header>
      <PageContent></PageContent>
      <Footer></Footer>
    </>
  );
}

export default App;
