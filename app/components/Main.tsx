import Firstitems from "./Firstitems";
import Seconditems from "./Seconditems";
import Thirditems from "./Thirditems";

const Main = () => {
  return (
    <div className="w-screen h-screen bg-white flex flex-col items-center">
      <div className="w-[224px] flex justify-between text-[16px] mt-[64px] mb-[102px]">
        {" "}
        <h1>Fashion</h1>
        <h1>Travel</h1>
        <h1>Sport</h1>
      </div>
      <Firstitems />
      <Seconditems />
      <Thirditems />
    </div>
  );
};

export default Main;
