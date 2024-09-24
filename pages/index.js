import AvailableRooms from "./components/AvaliableRooms";
import CreateRoom from "./components/CreateRoom";
import CurrentTournment from "./components/CurrentTournment";
import Enroll from "./components/Enroll";
import FindOpponent from "./components/FindOpponent";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Partner from "./components/Partner";
import TurfList from "./components/Truf";
import TrufList from "./components/TrufList";



export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <main className="p-4">
        <TrufList/>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8 mx-10">
          <CreateRoom />
          <FindOpponent />
        </div>
        <AvailableRooms />
        <Enroll />
        <CurrentTournment/>
        <Partner />
      </main>
      <Footer />
    </>
  );
}
