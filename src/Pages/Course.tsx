import { BsStarFill, BsStar, BsStarHalf } from "react-icons/bs";
import { CiGlobe } from "react-icons/ci";
import { FaKeyboard } from "react-icons/fa6";
import { PiSealWarningFill } from "react-icons/pi";
import { CiMonitor } from "react-icons/ci";
import { RiChatDownloadLine } from "react-icons/ri";
import { GrNotes } from "react-icons/gr";
import { FaRegNoteSticky } from "react-icons/fa6";
import { IoIosPhonePortrait } from "react-icons/io";
import { IoTrophyOutline } from "react-icons/io5";
// import { PiCertificate } from "react-icons/pi";

const Course = () => {
  return (
    <div className="md:h-[900px] w-full mt-[80px] mb-[100px]">
      <div className="h-full px-5  md:px-[350px]  md:flex">
        <div className="w-[100%] md:w-[65%] h-full pt-10">
          <div>
            <h1 className="text-[2rem] w-[90%] font-semibold">
              The Complete 2020 Fullstack Web Developer Course
            </h1>
            <p className="text-[1.2rem] w-[80%] mt-5 font-light">
              Learn HTML5, CSS3, JavaScript, Python, Wagtail CMS, PHP & MySQL
              from scratch!
            </p>
            <div className="flex items-center gap-4 mt-5">
              <span>3.6</span>
              <span className="flex">
                <BsStarFill className="text-yellow-600" />
                <BsStarFill className="text-yellow-600" />
                <BsStarFill className="text-yellow-600" />
                <BsStarHalf className="text-yellow-600" />
                <BsStar />
              </span>
              <span>(9600 students)</span>
            </div>
            <div className="flex items-center gap-5 text-sm mt-5">
              <span className="flex items-center gap-1 ">
                <PiSealWarningFill className="text-md" />
                Last updated 08/2020
              </span>
              <span className="flex items-center gap-1">
                <CiGlobe className="text-md" />
                English
              </span>
              <span className="flex items-center gap-1 ">
                <FaKeyboard className="text-md" />
                English [Auto]
              </span>
            </div>
            <div className="block md:hidden">
              <div className="px-3">
                <h1 className="text-[1.5rem] mt-10 font-semibold">₹3,499</h1>
              </div>
            </div>
          </div>
          <div className="mt-[7rem]">
            <h1 className="text-xl font-bold mb-5">This course includes:</h1>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <span className="flex items-center gap-2 mb-2">
                <CiMonitor />
                67 hours on-demand video
              </span>
              <span className="flex items-center gap-2 mb-2">
                <RiChatDownloadLine />
                16 downloadable resources
              </span>
              <span className="flex items-center gap-2 mb-2">
                <GrNotes />
                Assignments
              </span>
              <span className="flex items-center gap-2 mb-2">
                <IoIosPhonePortrait />
                Access on mobile and TV
              </span>
              <span className="flex items-center gap-2 mb-2">
                <FaRegNoteSticky />
                21 articles
              </span>
              <span className="flex items-center gap-2 mb-2">
                <IoTrophyOutline />
                Certificate of completion
              </span>
            </div>
          </div>
        </div>
        <div className="w-[100%] md:w-[30%] px-2 mt-[10%] hidden">
          <div className="w-full h-[500px] shadow-md bg-white border">
            <div>
              <img src="/logo/course.png" className="w-full" alt="" />
            </div>
            <div className="px-3">
              <h1 className="text-[1.5rem] mt-10 font-semibold">₹3,499</h1>
            </div>
            
            <div className="px-2 mt-5">
              <div className="text-[12px] font-light text-center">
                30-Day Money-Back Guarantee
              </div>
              <div className="text-[12px] font-light text-center">
                Full Lifetime Access
              </div>
              {/*  ADDING DOWNLAOD CERTIFICATE BUTTON 
              <div>
                <button className="w-full flex justify-center items-center gap-1 mt-4 border border-gray-500 py-4 text-sm">
                  <PiCertificate />
                  Download Certificate
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
