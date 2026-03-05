import { Suspense, useEffect, useState } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";
import CustomerTickets from "./CustomerTickets/CustomerTickets";
import Loading from "./Loading/Loading";
import TaskStatus from "./Components/TaskStatus/TaskStatus";
import { toast, ToastContainer } from "react-toastify";
import ResolveTasks from "./Components/ResolveTasks/ResolveTasks";
import Footer from "./Components/Footer/Footer";

function App() {
  const [ticketData, setTicketData] = useState([]);
  const [taskInProgress, setTaskInProgress] = useState([]);
  const [resolved, setResolved] = useState([]);

  useEffect(() => {
    fetch("/ticketsData")
      .then((res) => res.json())
      .then((data) => setTicketData(data));
  }, []);

  const handleResolved = (tasks) => {
    setResolved([...resolved, tasks]);
    // Resolving Tasks In Progress
    const resolveTask = taskInProgress.filter((task) => task.id !== tasks.id);
    setTaskInProgress(resolveTask);
    // Resolving Tasks From The UI
    const filterTasks = ticketData.filter(
      (filteredTicket) => filteredTicket.id !== tasks.id,
    );
    setTicketData(filterTasks);
    toast.success("Resolved Successfully");
  };

  return (
    <>
      <Navbar />
      <div className="max-w-400 mx-auto">
        <Banner taskInProgress={taskInProgress} resolved={resolved} />
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2">
          {/* Cards Component */}
          <div className="col-span-2">
            <Suspense fallback={<Loading />}>
              <CustomerTickets
                ticketData={ticketData}
                taskInProgress={taskInProgress}
                setTaskInProgress={setTaskInProgress}
              />
            </Suspense>
          </div>
          {/* Task & Resolve Component */}
          <div className="w-full">
            <div className="col-span-1 order-1 lg:w-full">
              <TaskStatus
                taskInProgress={taskInProgress}
                handleResolved={handleResolved}
              />
            </div>
            {/* Resolve Component Except LG Device */}
            <div className="col-span-1 order-2 lg:hidden xl:flex w-full">
              {/* <p>1</p> */}
              <ResolveTasks resolved={resolved} />
            </div>
          </div>
          {/* Resolve Component Only For LG Device */}
          <div className="hidden lg:flex xl:hidden w-full">
            {/* <p>2</p> */}
            <ResolveTasks resolved={resolved} />
          </div>
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
