"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
export default function CouponTable() {
  const elements = [
    { course: "JEE", discount: "90%", code: "NAVED90" },
    { course: "NEET", discount: "90%", code: "NAVED90" },
    { course: "CLAT", discount: "90%", code: "NAVED90" },
    { course: "GATE", discount: "90%", code: "NAVED90" },
    { course: "SSC", discount: "90%", code: "NAVED90" },
    { course: "UPSC", discount: "90%", code: "NAVED90" },
    { course: "Board Exams", discount: "90%", code: "NAVED90" },
  ];

  const getCodeElements = [
    { course: "Yakeen NEET 2025", discount: "90%" },
    { course: "Yakeen NEET 2.0 2025", discount: "90%" },
    { course: "Yakeen NEET 3.0 2025", discount: "90%" },
    { course: "Yakeen NEET 4.0 2025", discount: "90%" },
    { course: "Yakeen NEET Hindi 2025", discount: "90%" },
    { course: "Yakeen NEET Hindi 2.0 2025", discount: "90%" },
    { course: "Yakeen NEET English 2025", discount: "90%" },
  ];

  return (
    <>
      <div className="relative overflow-x-auto container w-screen  py-20 px-60   text-white ">
        <p className="text-2xl flex justify-center font-bold mb-10">
          Coupon Codes
        </p>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Course
              </th>
              <th scope="col" className="px-6 py-3">
                Discount
              </th>
              <th scope="col" className="px-6 py-3">
                Coupon Code
              </th>
            </tr>
          </thead>
          <tbody>
            {elements.map((item, index) => {
              return (
                <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  key={index}
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {item.course}
                  </th>
                  <td className="px-6 py-4">{item.discount}</td>
                  <td className="px-6 py-4">{item.code}</td>
                </tr>
              );
            })}
            {getCodeElements.map((item, index) => {
              return (
                <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  key={index}
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {item.course}
                  </th>
                  <td className="px-6 py-4">{item.discount}</td>
                  <td className="px-6 py-4">
                    <a
                      href="https://api.whatsapp.com/send?phone=9971364338&text=Hello"
                      target="_blank"
                    >
                      <button
                        type="button"
                        className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                      >
                        Green
                      </button>
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
