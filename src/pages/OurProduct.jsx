import { Link } from "react-router-dom";
import oms from "../assets/oms.jpg";
import ems from "../assets/ems.jpg";
const OurProduct = () => {
  return (
    <>
      {/* oms product section  */}
      <section className=" py-12 mt-20">
        <div className="max-w-5xl mx-auto ">
          <p className="text-3xl font-semibold mb-20 text-center">
            Our Software
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 bg-blue-50 p-6 shadow-lg">
            <div>
              <img
                src={oms}
                alt="Product Screenshot"
                className="w-full rounded-lg shadow-md"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-2xl font-semibold mb-4">
                Order Management System
              </p>
              <p className="text-xl mb-4 text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                convallis libero nec sapien rutrum, at dignissim magna
                fermentum.
              </p>
              <ul className="text-left mb-6">
                <li className="mb-2">
                  <span className="text-blue-600 mr-2">&#x2713;</span> Feature
                  1: Lorem ipsum dolor sit amet
                </li>
                <li className="mb-2">
                  <span className="text-blue-600 mr-2">&#x2713;</span> Feature
                  2: Consectetur adipiscing elit
                </li>
                <li className="mb-2">
                  <span className="text-blue-600 mr-2">&#x2713;</span> Feature
                  3: Nulla convallis libero nec sapien
                </li>
                <li className="mb-2">
                  <span className="text-blue-600 mr-2">&#x2713;</span> Feature
                  4: Dignissim magna fermentum
                </li>
              </ul>
              <Link to={"./oms-plan"}>
                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out">
                  See plan
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* pms product section end  */}
      {/* ems product section  */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 bg-blue-50 p-6">
            <div>
              <img
                src={ems}
                alt="Product Screenshot"
                className="w-full rounded-lg shadow-md"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-2xl font-semibold mb-4">
                Order Management System
              </p>
              <p className="text-xl mb-4 text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                convallis libero nec sapien rutrum, at dignissim magna
                fermentum.
              </p>
              <ul className="text-left mb-6">
                <li className="mb-2">
                  <span className="text-blue-600 mr-2">&#x2713;</span> Feature
                  1: Lorem ipsum dolor sit amet
                </li>
                <li className="mb-2">
                  <span className="text-blue-600 mr-2">&#x2713;</span> Feature
                  2: Consectetur adipiscing elit
                </li>
                <li className="mb-2">
                  <span className="text-blue-600 mr-2">&#x2713;</span> Feature
                  3: Nulla convallis libero nec sapien
                </li>
                <li className="mb-2">
                  <span className="text-blue-600 mr-2">&#x2713;</span> Feature
                  4: Dignissim magna fermentum
                </li>
              </ul>
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out">
                See Plan
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* ems product section end  */}
    </>
  );
};

export default OurProduct;
