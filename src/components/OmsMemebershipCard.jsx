const OmsMemebershipCard = () => {
  const handleOnPayment = () => {};
  return (
    <section className="flex justify-evenly h-screen items-center">
      <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-blue-500 p-4">
          <h2 className="text-white text-2xl font-bold">Pro Plan</h2>
          <p className="text-blue-200">Best for professionals</p>
        </div>
        <div className="p-6">
          <p className="text-gray-700 text-base mb-4">
            Get access to all premium features with the Pro Plan. Ideal for
            professionals who need more control and flexibility.
          </p>
          <ul className="mb-6">
            <li className="flex items-center mb-2">
              <svg
                className="w-6 h-6 text-green-500 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <span className="text-gray-700">Unlimited projects</span>
            </li>
            <li className="flex items-center mb-2">
              <svg
                className="w-6 h-6 text-green-500 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <span className="text-gray-700">24/7 support</span>
            </li>
            <li className="flex items-center mb-2">
              <svg
                className="w-6 h-6 text-green-500 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <span className="text-gray-700">Custom integrations</span>
            </li>
          </ul>
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-gray-900">3000</span>
              <span className="text-2xl font-bold text-gray-900">/month</span>
            </div>
            <button
              onClick={(e) => handleOnPayment(e, 3000)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-yellow-500 p-4">
          <h2 className="text-white text-2xl font-bold">Professional Plan</h2>
          <p className="text-red-200">Best for large organizations</p>
        </div>
        <div className="p-6">
          <p className="text-gray-700 text-base mb-4">
            Get access to advanced features with the Enterprise Plan. Ideal for
            large organizations that need scalability and dedicated support.
          </p>
          <ul className="mb-6">
            <li className="flex items-center mb-2">
              <svg
                className="w-6 h-6 text-green-500 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <span className="text-gray-700">Unlimited projects</span>
            </li>
            <li className="flex items-center mb-2">
              <svg
                className="w-6 h-6 text-green-500 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <span className="text-gray-700">Priority support</span>
            </li>
            <li className="flex items-center mb-2">
              <svg
                className="w-6 h-6 text-green-500 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <span className="text-gray-700">Dedicated account manager</span>
            </li>
          </ul>
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-gray-900">4000</span>
              <span className="text-2xl font-bold text-gray-900">/month</span>
            </div>
            <button
              onClick={(e) => handleOnPayment(e, 4000)}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-red-500 p-4">
          <h2 className="text-white text-2xl font-bold">Enterprise Plan</h2>
          <p className="text-red-200">Best for large organizations</p>
        </div>
        <div className="p-6">
          <p className="text-gray-700 text-base mb-4">
            Get access to advanced features with the Enterprise Plan. Ideal for
            large organizations that need scalability and dedicated support.
          </p>
          <ul className="mb-6">
            <li className="flex items-center mb-2">
              <svg
                className="w-6 h-6 text-green-500 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <span className="text-gray-700">Unlimited projects</span>
            </li>
            <li className="flex items-center mb-2">
              <svg
                className="w-6 h-6 text-green-500 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <span className="text-gray-700">Priority support</span>
            </li>
            <li className="flex items-center mb-2">
              <svg
                className="w-6 h-6 text-green-500 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <span className="text-gray-700">Dedicated account manager</span>
            </li>
          </ul>
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-gray-900">5000</span>
              <span className="text-2xl font-bold text-gray-900">/month</span>
            </div>
            <button
              onClick={(e) => handleOnPayment(e, 5000)}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OmsMemebershipCard;
