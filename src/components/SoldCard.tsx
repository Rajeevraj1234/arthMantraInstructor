import { useNavigate } from "react-router-dom";

const SoldCard = () => {
  const navigate = useNavigate();
  return (
    <div className="my-5">
      <div className="w-[298px] max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
        <a onClick={() => navigate("/course")}>
          <img
            className="pb-3 w-full h-full rounded-t-lg"
            src="/logo/course.png"
            alt="product image"
          />
        </a>
        <div className="px-5 pb-5">
          <a onClick={() => navigate("/course")}>
            <h5 className="text-xl font-semibold tracking-tight ">
              The Complete 2024 Web Development Bootcamp
            </h5>
          </a>

          <div className="flex items-center justify-between mt-4">
            <span className="text-3xl font-bold ">$599</span>
          </div>
          <div className="mt-3">
            <p>Total Sold : 5</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoldCard;
