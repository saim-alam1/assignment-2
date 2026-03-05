import { use } from "react";
import CustomerTicket from "./CustomerTicket/CustomerTicket";

const CustomerTickets = ({ ticketsPromise }) => {
  const ticketsData = use(ticketsPromise);

  return (
    <div>
      <h1 className="text-2xl font-semibold text-[#34485A]">
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
