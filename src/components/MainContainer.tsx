import SecondSection from './SecondSection';
import ThirdSection from './ThirdSection';
import FirstSection from './FirstSection';
import Footer from './Footer';
import ImageCentral from './ImageCentral';

export default function MainContainer() {
  return (
    <div>
      <main className="bg-gray-200 px-4 sm:px-6 lg:px-0">
        <ImageCentral />
      
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-none gap-6">
          <FirstSection />
          <SecondSection />
          <ThirdSection />
        </div>
      </main>

      <Footer />
    </div>
  );
}
