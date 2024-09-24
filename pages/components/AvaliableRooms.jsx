// components/AvailableRooms.js
import Image from 'next/image'
import a1 from '../../public/a1.png'
import a2 from '../../public/a2.png'
import a3 from '../../public/a3.png'
import a4 from '../../public/a4.png'
import a5 from '../../public/a5.png'

const rooms = [
  { name: "Football Rooms", image: a1 },
  { name: "Cricket Rooms", image: a2 },
  { name: "Hockey Rooms", image: a3 },
  { name: "Racket Rooms", image: a4},
  { name: "Volleyball Rooms", image: a5}
];

export default function AvailableRooms() {
  return (
    <section className="py-8 mx-4">
      <h2 className="text-2xl font-bold text-left ml-5 mb-6">Available Rooms As Per Your Location</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {rooms.map((room, index) => (
          <div key={index} className="bg-white  p-4 rounded-lg text-center">
            <Image src={room.image} alt={room.name} className="w-full h-32 object-cover rounded-lg mb-2" />
            <h3 className="text-sm font-bold">{room.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
