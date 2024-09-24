// components/Enroll.js
import Image from 'next/image'
import trophy from '../../public/price.png'
export default function Enroll() {
  return (
    <section className="bg-green-100 p-6 rounded-lg flex justify-between items-center">
      <div>
        <h3 className="text-2xl font-bold mb-2">Enroll In Tournaments And Win Big Prizes</h3>
        <div className="flex flex-col gap-3">
          <p className="text-sm mb-4 w-[50%]">
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
          </p>
          <p className='mb-8'>Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
        </div>
        <a href="#" className="text-sm underline ">Enroll Now</a>
      </div>
      <Image src={trophy} alt="Trophy" className="w-24 h-24" />
    </section>
  );
}

