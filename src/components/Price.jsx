import React from 'react';

function Price() {
  return (
    <div className='mb-9'>
<div className="lg:flex flex-col justify-center items-center space-y-6 lg:space-y-0 min-h-screen">
      {/* Basic Card */}
<h1 className='text-[30px] font-bold py-4 text-center'>Price Plan</h1>

<div className='lg:flex'>

<div className="max-w-md bg-white shadow-lg rounded-lg overflow-hidden mx-2">
        <div className="py-4 px-6">
          <h2 className="text-2xl font-semibold text-gray-800">Basic Plan</h2>
          <p className="text-gray-500 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <p className="text-3xl text-[#27ae60] mt-4 overflow-hidden">$10/month</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <ul className="text-gray-600">
            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2 text-[#27ae60]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Some feature 1
            </li>
            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2 text-[#27ae60]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Some feature 2
            </li>
          </ul>
          <button className="bg-[#27ae60] text-white py-2 px-4 mt-4 rounded-full w-full">
            Subscribe
          </button>
        </div>
      </div>

      {/* Basic Card - Increased Price */}
      <div className="max-w-md bg-white shadow-lg rounded-lg overflow-hidden mx-2">
        <div className="py-4 px-6">
          <h2 className="text-2xl font-semibold text-gray-800">Basic Plus Plan</h2>
          <p className="text-gray-500 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <p className="text-3xl text-[#27ae60] overflow-hidden mt-4">$20/month</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <ul className="text-gray-600">
            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2 text-[#27ae60]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Some feature 1
            </li>
            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2 text-[#27ae60]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Some feature 2
            </li>
            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2 text-[#27ae60]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Some additional feature
            </li>
          </ul>
          <button className="bg-[#27ae60] text-white py-2 px-4 mt-4 rounded-full w-full">
            Subscribe
          </button>
        </div>
      </div>

      {/* Premium Card */}
      <div className="max-w-md bg-white shadow-lg rounded-lg overflow-hidden mx-2">
        <div className="py-4 px-6">
          <h2 className="text-2xl font-semibold text-gray-800">Premium Plan</h2>
          <p className="text-gray-500 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <p className="text-3xl text-[#27ae60] overflow-hidden mt-4">$30/month</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <ul className="text-gray-600">
            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2 text-[#27ae60]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Some feature 1
            </li>
            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2 text-[#27ae60]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Some feature 2
            </li>
            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2 text-[#27ae60]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Premium feature 1
            </li>
            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2 text-[#27ae60]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Premium feature 2
            </li>
          </ul>
          <button className="bg-[#27ae60] text-white py-2 px-4 mt-4 rounded-full w-full">
            Subscribe
          </button>
      </div>
    </div>
</div>
    
</div>
</div>

  );
}

export default Price;
