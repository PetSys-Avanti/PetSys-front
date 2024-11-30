import SecondSection from './SecondSection';
import ThirdSection from './ThirdSection';
import FirstSection from './Firstsection';
import Footer from './Footer';

export default function MainContainer() {
  return (
    <div>
      <main className="bg-gray-200 px-4 sm:px-6 lg:px-0">
   
       
          <FirstSection />
  
    
          <SecondSection />
          <ThirdSection />

      </main>

      <Footer />
    </div>
  );
}
