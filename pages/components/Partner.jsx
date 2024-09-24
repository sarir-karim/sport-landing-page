import Image from 'next/image';
import playstore from '../../public/playstore.png'
export default function Partner() {
  return (
    <section className="bg-yellow-100 p-6 rounded-lg  flex items-center justify-between xs:flex-col">
      <div className=' w-1/2 gap-2'>
        <h3 className='text-2xl font-bold'>Partner With Us</h3>
        <h3 className="text-2xl font-bold mb-3">
          Register Your Spaces Or Host A Event</h3>
        <p className='mb-3'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and </p>
        <a href="#" className="text-sm underline">Know More</a>
      </div>
      <div className="mt-4 flex justify-center gap-4">
        <a href="#"><Image src={playstore} alt="Google Play" width={300} height={200}  /></a>
      </div>
    </section>
  );
}
