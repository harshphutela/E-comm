import { useNavigate } from "react-router-dom";

const NewArrivals = ({ NewArrivalData }) => {
  const navigate = useNavigate();
  function handleProductDetails(Id) {
    navigate(`/p/${Id}`);
    console.log("handlepdcalled");
  }
  return (
    <>
      <div className="w-full bg-white flex justify-center items-center h-36">
        <p className=" text-4xl font-black">NEW ARRIVALS</p>
      </div>
      <div className="w-full lg:flex">
        {NewArrivalData.map((item) => {
          return (
            <div
              className="w-full flex justify-center"
              onClick={() => {
                handleProductDetails(item.Id);
              }}
            >
              <div className="lg:flex ml-10">
                <div>
                  <img
                    className="w-4/5"
                    src={`http://localhost:3000/${item.Image}`}
                  />
                  <div className="ml-1">
                    <p className="text-xs font-bold tracking-normal mt-2">
                      {item.Name}
                    </p>
                    <p className="text-xs font-semibold mt-1">
                      Rating {item.Rating}
                    </p>
                    <div className="flex">
                      <p className="text-s font-bold mt-1">${item.Price}</p>
                      <p className="text-s font-bold mt-1 ml-2 text-gray-400 line-through">
                        ${item.Price}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-full flex items-center justify-center mt-10">
        <div className="h-10 w-1/6 border flex justify-center rounded-3xl mb-5">
          <button>
            <p className="text-black">View All</p>
          </button>
        </div>
      </div>
      <div className="w-full flex justify-center mt-4">
        <div className="border-b-2 w-11/12"></div>
      </div>
    </>
  );
};

export default NewArrivals;
