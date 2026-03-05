import { useState } from "react";
import greenCircle from "../../assets/greenCircle.png";
import yellowCircle from "../../assets/yellowCircle.png";
import calenderImg from "../../assets/Vector.png";
import { toast } from "react-toastify";

const CustomerTicket = ({ ticket, setTaskInProgress }) => {
  const [statusInProgress, setStatusInProgress] = useState(false);

  const handleCards = (ticket) => {
    setStatusInProgress(true);
    setTaskInProgress((prev) => {
      const filteredData = prev.filter((data) => data.id !== ticket.id);
      return [...filteredData, ticket];
    });
    toast.success("Task Added To In-Progress");
  };

  return (
    <div
      onClick={() => handleCards(ticket)}
      className="card bg-base-100 shadow-sm cursor-pointer"
    >
      <div className="card-body">
        <span className="flex items-center justify-between">
          <h2 className="card-title text-[#001931] text-[18px] font-medium">
            {ticket.title}
          </h2>
          <button
            className={`flex items-center gap-1.5 btn shadow-none ${statusInProgress ? "bg-[#F8F3B9] text-[#9C7700]" : "bg-[#B9F8CF] text-[#0B5E06]"} py-1 px-3 rounded-full`}
          >
            {statusInProgress ? (
              <img src={yellowCircle} alt="Green Circle Shape" />
            ) : (
              <img src={greenCircle} alt="Green Circle Shape" />
            )}
            <p className="text-[16px] font-medium">
              {statusInProgress ? "In-Progress" : "Open"}
            </p>
          </button>
        </span>
        <p className="text-[16px] text-[#627382]">{ticket.description}</p>
        <div className="card-actions flex items-center justify-between">
          <div className="flex items-center gap-4">
            <p className="text-[14px] font-medium text-[#627382]">
              {ticket.id}
            </p>
            <p
              className={`text-[14px] font-medium ${ticket.priority === "HIGHT PRIORITY" ? "text-[#F83044]" : ticket.priority === "MEDIUM PRIORITY" ? "text-[#FEBB0C]" : "text-[#02A53B]"} `}
            >
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
