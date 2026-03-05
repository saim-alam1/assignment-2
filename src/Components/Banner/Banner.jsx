import vector1 from "../../assets/vector1.png";

const Banner = ({ taskInProgress }) => {
  return (
    <div className="my-10 md:my-12.5 lg:my-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 px-3">
        {/* Banner Card 1 */}
        <div className="bg-linear-to-br from-[#6832e4] to-[#8a50ec] rounded-lg h-62.5 flex flex-col items-center justify-center text-white space-y-4 relative">
          {/* Vector Image 1 */}
          <div className="absolute z-50 top-0 left-0">
            <img className="" src={vector1} alt="Overlay Vector Image" />
          </div>
          {/* Vector Image 2 */}
          <div className="absolute z-50 top-0 right-0">
            <img
              className="scale-x-[-1]"
              src={vector1}
              alt="Overlay Vector Image"
            />
          </div>
          <h2 className="text-2xl">In-Progress</h2>
          <h5 className="text-6xl font-semibold">{taskInProgress.length}</h5>
        </div>

        {/* Banner Card 2 */}
        <div className="bg-linear-to-r from-[#54cf67] to-[#00827a] rounded-lg h-62.5 flex flex-col items-center justify-center text-white space-y-4 relative">
          {/* Vector Image 1 */}
          <div className="absolute z-50 top-0 left-0">
            <img className="" src={vector1} alt="Overlay Vector Image" />
          </div>
          {/* Vector Image 2 */}
          <div className="absolute z-50 top-0 right-0">
            <img
              className="scale-x-[-1]"
              src={vector1}
              alt="Overlay Vector Image"
            />
          </div>
          <h2 className="text-2xl">Resolved</h2>
          <h5 className="text-6xl font-semibold">0</h5>
        </div>
      </div>
    </div>
  );
};

export default Banner;
