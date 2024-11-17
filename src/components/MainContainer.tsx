import Navbar from '../components/Navbar'
import AdoptionButtons from './AdoptionButtons'

import { FaDog, FaHome, FaWallet } from 'react-icons/fa'
import PetCard from './PetCard';
import { Button } from "@/components/ui/button";

import Caramelo from '../app/public/images/Caramelo.jpg';
import Labrador from '../app/public/images/labrador.jpg';
import Poodle from '../app/public/images/poodle.jpg';
import Pitbull from '../app/public/images/Pitbull.jpg';
import York from '../app/public/images/York.jpg';
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
