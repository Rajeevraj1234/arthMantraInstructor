import Card from "../components/Card";

const Courses = () => {
  return (
    <div className="mt-[100px] mx-5 md:mx-[300px] ">
      <h1 className="text-[3rem] font-md tracking-tighter mb-2">Courses</h1>
      <hr />
      <div className="mb-20">
        <div className="w-full mt-10 flex justify-center">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4 z-[1]">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
