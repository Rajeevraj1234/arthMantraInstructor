import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa6";
import { FaUserTie } from "react-icons/fa6";
import { MdPayment } from "react-icons/md";



const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="mt-20 md:mx-[200px] h-[80vh] md:flex justify-center items-center">
      <div className="md:w-1/2 ml-2">
        <h1 className="md:text-[5rem] text-[3rem] font-bold tracking-tighter md:leading-[100px]">
          Arth Mantra Instructor Pannel
        </h1>
        <h3 className="text-2xl mt-3 ">Hello, Jhon Doe</h3>
      </div>
      <div className="mt-20 md:w-1/2 flex justify-center items-center ">
        <div className="mx-2">
          <button
            onClick={() => navigate("/instructor-detail")}
            className="border 4 py-4 text-md md:text-xl tracking-wide w-[300px] md:w-[400px] mb-10 bg-green-600 hover:bg-green-500 text-white shadow-lg font-bold flex justify-center items-center  gap-2 rounded-lg"
          >
            {" "}
            <FaUser />
            Your Detail
          </button>
          <button
            onClick={() => navigate("/courses")}
            className="border 4 py-4 text-md md:text-xl tracking-wide w-[300px] md:w-[400px] mb-10 bg-green-600 hover:bg-green-500 text-white shadow-lg font-bold flex justify-center items-center  gap-2 rounded-lg"
          >
            {" "}
            <FaUser />
            Total Courses
          </button>
          <button
            onClick={() => navigate("/soldcourse")}
            className="border px-4 py-4 text-md md:text-xl tracking-wide w-[300px] md:w-[400px] mb-10 bg-green-600 hover:bg-green-500 text-white shadow-lg font-bold flex justify-center items-center  gap-2 rounded-lg"
          >
            {" "}
            <FaUserTie />
            Sold Courses
          </button>
          <button
            onClick={() => navigate("/uploadcourse")}
            className="border px-4 py-4 text-md md:text-xl tracking-wide w-[300px] md:w-[400px] mb-10 bg-green-600 hover:bg-green-500 text-white shadow-lg font-bold flex justify-center items-center gap-2 rounded-lg "
          >
            <MdPayment />
            Upload Course
          </button>
      
        </div>
      </div>
    </div>
  );
};

export default Home;
