// pages/details/[id].js
import { useRouter } from 'next/router';
import ImageSlider from './components/ImageSlider';
import Link from 'next/link';
import Header from './components/Header';
import Footer from './components/Footer';
import { TiArrowBack } from "react-icons/ti";

const DetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  // Dummy data for details page
  const cardDetails = {
    title: "Titans Turf",
    location: "Vasna - Bhayli Main Rd Bhayli, Vadodara 391410",
    price: 1000,
    rating: 4.8,
    description: `Titans Turf is the premier location for sports activities, offering top-notch facilities 
                  for football, cricket, and more. The turf is well-maintained with state-of-the-art lighting 
                  and amenities to provide an excellent experience.`,
    images: [
      'https://images.pexels.com/photos/27118178/pexels-photo-27118178/free-photo-of-man-playing-cricket.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/9208102/pexels-photo-9208102.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/13509819/pexels-photo-13509819.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
  };

  return (
    <>
    <Header/>
        <Link href={`/`} >
          <div className='py-4 bg-gray-100'> <TiArrowBack className='text-2xl ml-3'/></div>
              </Link >
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8">
      <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-2xl pt-10">
        <ImageSlider images={cardDetails.images} />
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-2">{cardDetails.title}</h1>
          <p className="text-gray-700">{cardDetails.location}</p>
          <p className="text-green-600 font-semibold mt-2">{cardDetails.price} Rs per hour</p>
          <p className="text-yellow-500 mt-1">⭐ {cardDetails.rating} (3 reviews)</p>
          <p className="mt-4 text-gray-600">{cardDetails.description}</p>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default DetailPage;
