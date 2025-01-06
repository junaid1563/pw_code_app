export default function CouponTable() {
  return (
    <>
      <div className="relative overflow-x-auto container w-screen  py-20 px-60   text-white flex justify-center">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
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
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                JEE
              </th>
              <td className="px-6 py-4">90%</td>
              <td className="px-6 py-4">Get Coupon Code</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
