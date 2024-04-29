import SoldCard from "../components/SoldCard";

const SoldCourses = () => {
  return (
    <div className=" mx-3 md:mx-[300px] mt-[100px]">
      <div className="text-[2.2rem] md:text-[3rem] tracking-tighter mb-10">
        Totals Course sold and Earning
      </div>
      <div className="flex flex-col-reverse md:flex-row w-full">
        <div className="md:w-[70%] grid grid-cols-1 md:grid-cols-2 mt-20 md:mt-0">
            <SoldCard />
            <SoldCard />
            <SoldCard />
        </div>
        <div className="md:w-[30%] md:relative">
            <div className="md:fixed border-2 md:w-[400px] w-[340px] border-green-300 p-4 shadow-md rounded-md">
                <h1 className="text-[2.5rem] font-medium mb-5">Total Earning</h1>
                <div className="ml-5">
                    <p className="text-gray-700 font-light">Total Course Sold: <span className="text-green-500 font-bold">34</span></p>
                    <p className="text-gray-700 font-light my-1">Course Income: <span className="text-green-500 font-bold">$1599</span></p>
                    <p className="text-gray-700 font-light">Our Comission : <span>10%</span></p>
                    <p className="mt-5 text-2xl">Final Profit : <span className="text-green-500 font-bold">$1350</span></p>

                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default SoldCourses;
