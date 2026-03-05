import greenCircle from "../../assets/greenCircle.png";
import calenderImg from "../../assets/Vector.png";

const CustomerTicket = ({ ticket }) => {
  console.log(ticket);

  return (
    <div className="card bg-base-100 shadow-sm">
      <div className="card-body">
        <span className="flex items-center justify-between">
          <h2 className="card-title text-[#001931] text-[18px] font-medium">
            {ticket.title}
          </h2>
          <button className="flex items-center gap-1.5 btn shadow-none bg-[#B9F8CF] py-1 px-3 rounded-full">
            <img src={greenCircle} alt="Green Circle Shape" />
            <p className="text-[16px] font-medium text-[#0B5E06]">
              {ticket.status}
            </p>
          </button>
        </span>
        <p className="text-[16px] text-[#627382]">{ticket.description}</p>
        <div className="card-actions flex items-center justify-between">
          <div className="flex items-center gap-4">
            <p className="text-[14px] font-medium text-[#627382]">
              {ticket.id}
            </p>
            <p className="text-[14px] font-medium text-[#F83044]">
              {ticket.priority}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-[14px] font-medium text-[#627382]">
              {ticket.customer}
            </p>
            <span className="text-[14px] font-medium text-[#627382] flex items-center gap-2">
              <img src={calenderImg} alt="Calender Image" />
              <p>{ticket.createdAt}</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerTicket;
