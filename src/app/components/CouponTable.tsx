"use client";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/solid";
export default function CouponTable() {
  const elements = [
    { course: "JEE", discount: "90%", code: "NAVAHM0001" },
    { course: "NEET", discount: "90%", code: "NAVAHM0001" },
    { course: "CLAT", discount: "90%", code: "NAVAHM0001" },
    { course: "GATE", discount: "90%", code: "NAVAHM0001" },
    { course: "SSC", discount: "90%", code: "NAVAHM0001" },
    { course: "UPSC", discount: "90%", code: "NAVAHM0001" },
    { course: "Board Exams", discount: "90%", code: "NAVAHM0001" },
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
      <div className="relative overflow-x-auto container w-screen  py-20 px-20  text-white ">
        <p className="text-3xl flex justify-center font-bold mb-10">
          Coupon Codes
        </p>
        <table className="w-11/12  text-xs md:text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
          <thead className="text-xs  uppercase bg-gray-300  text-black text-center">
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
          <tbody className="text-center">
            {elements.map((item, index) => {
              return (
                <tr
                  className="bg-white  text-black border-b dark:bg-gray-800 dark:border-gray-700"
                  key={index}
                >
                  <td
                    scope="row"
                    className="px-6 py-4 font-medium  whitespace-nowrap text-black"
                  >
                    {item.course}
                  </td>
                  <td className="px-6 py-4 text-black">{item.discount}</td>
                  <td className="px-6 py-4 text-black">{item.code}</td>
                </tr>
              );
            })}
            {getCodeElements.map((item, index) => {
              return (
                <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  key={index}
                >
                  <td
                    scope="row"
                    className="px-6 py-4 font-medium whitespace-nowrap text-black "
                  >
                    {item.course}
                  </td>
                  <td className="px-6 py-4 font-medium whitespace-nowrap text-black">
                    {item.discount}
                  </td>
                  <td className="px-6 py-4 font-medium whitespace-nowrap text-black">
                    <a
                      href="https://api.whatsapp.com/send?phone=+919784112732&text=Hello"
                      target="_blank"
                    >
                      <button
                        type="button"
                        className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                      >
                        <ChatBubbleLeftRightIcon
                          color=""
                          aria-hidden="true"
                          className="inline size-6 group-data-[open]:hidden"
                        />
                        Get Coupon Code
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
