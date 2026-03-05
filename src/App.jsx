import { Suspense } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";
import CustomerTickets from "./CustomerTickets/CustomerTickets";
import Loading from "./Loading/Loading";

const fetchTicketData = async () => {
  const res = await fetch("/ticketsData");
  return res.json();
};

const ticketsPromise = fetchTicketData();

function App() {
  return (
    <>
      <Navbar />
      <div className="max-w-400 mx-auto">
        <Banner />
        <Suspense fallback={<Loading />}>
          <CustomerTickets ticketsPromise={ticketsPromise} />
        </Suspense>
      </div>
    </>
  );
}

export default App;
