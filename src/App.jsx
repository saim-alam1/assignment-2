import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";
import CustomerTickets from "./CustomerTickets/CustomerTickets";
import Loading from "./Loading/Loading";
import TaskStatus from "./Components/TaskStatus/TaskStatus";
import { ToastContainer } from "react-toastify";
import ResolveTasks from "./Components/ResolveTasks/ResolveTasks";

const fetchTicketData = async () => {
  const res = await fetch("/ticketsData");
  return res.json();
};

const ticketsPromise = fetchTicketData();

function App() {
  const [taskInProgress, setTaskInProgress] = useState([]);

  return (
    <>
      <Navbar />
      <div className="max-w-400 mx-auto">
        <Banner taskInProgress={taskInProgress} />
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2">
          {/* Cards Component */}
          <div className="col-span-2">
            <Suspense fallback={<Loading />}>
              <CustomerTickets
                ticketsPromise={ticketsPromise}
                taskInProgress={taskInProgress}
                setTaskInProgress={setTaskInProgress}
              />
            </Suspense>
          </div>
          {/* Task & Resolve Component */}
          <div className="flex flex-col lg:flex-r xl:flex-none">
            <div className="col-span-1 order-1 lg:w-full">
              <TaskStatus taskInProgress={taskInProgress} />
            </div>
            {/* For Responsiveness Resolve Component (1) */}
            <div className="col-span-1 order-2 lg:hidden xl:flex">
              {/* <p>1</p> */}
              <ResolveTasks />
            </div>
          </div>
          {/* For Responsiveness Resolve Component (2) */}
          <div className="hidden lg:flex xl:hidden">
            {/* <p>2</p> */}
            <ResolveTasks />
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
