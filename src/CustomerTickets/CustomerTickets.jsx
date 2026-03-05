import { use } from "react";
import CustomerTicket from "../Components/CustomerTicket/CustomerTicket";

const CustomerTickets = ({ ticketsPromise }) => {
  const ticketsData = use(ticketsPromise);

  return (
    <div className="mb-10 px-3">
      <h1 className="text-2xl font-semibold text-[#34485A] mb-4">
        Customer Tickets
      </h1>

      <div className="grid grid-cols-2 gap-3">
        {ticketsData.map((ticket) => (
          <CustomerTicket key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
};

export default CustomerTickets;
