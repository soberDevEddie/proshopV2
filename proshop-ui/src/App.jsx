import { Container } from 'react-bootstrap';

import Header from './components/Header';
import Footer from './components/Footer';
const App = () => {
  return (
    <>
      <Header />
      <main className='py-3'>
        <Containe>
          <h1>Welcome to ProShop</h1>
        </Containe>
      </main>
      <Footer />
    </>
  );
};

export default App;
