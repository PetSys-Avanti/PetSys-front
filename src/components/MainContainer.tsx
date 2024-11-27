import Navbar from '../components/Navbar'





import FirstSection from './FirstSection';
import SecondSection from './SecondSection';
import Header from './Header';
import Footer from './Footer';

export default function MainContainer() {


  return (
    <div className="relative">
      <Navbar />
      <Header />
      <main className=" bg-gray-200 px-4 sm:px-6 lg:px-0">
        <FirstSection />
        <SecondSection />
      </main>

      <Footer />
    </div>
  );
}
