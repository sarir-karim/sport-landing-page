import Image from "next/image";
import map from '../../public/map.png'
import ImageSlider from "./ImageSlider";
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa";
import { MdOpenInFull } from "react-icons/md";


export default function Turf({ id, images, title, location, price, rating, reviews }) {
  return (
    <div className="relative">
      <FaRegHeart className="absolute top-3 z-10 right-3 text-white font-semibold" />
      <div key={id} className="bg-white shadow-md  rounded-lg">
        <ImageSlider images={images} />
        <div className="flex justify-between items-center pr-3 mb-2"><h3 className="text-lg font-bold mt-4 px-2">{title}</h3>
          <Link href={`/${id}`} >
            <MdOpenInFull   className="cursor-pointer"/>
          </Link ></div>
        <div className="flex justify-between items-center px-2">
          <p className="text-sm text-gray-500">{location}</p>
          <Image src={map} />
        </div>
        <div className="flex justify-between px-2 pb-3">
          <p className="text-sm font-bold mt-2">{price} Rs per hour</p>
          <div className="flex gap-2 items-center mt-2">
            <p className="text-xs font-bold">{rating}</p>
            <p className="text-xs font-bold text-gray-400">{reviews} reviews</p>

          </div>
        </div>
      </div>
    </div>
  );
}
