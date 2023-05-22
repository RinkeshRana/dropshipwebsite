import React from "react";

function page() {
  return (
    <div>
      <section className="py-10 md:py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="p-8 lg:p-20 bg-white">
            <h2 className="mb-20 md:text-5xl font-bold font-heading">
              Billing address
            </h2>
            <div className="flex flex-wrap -mx-4">
              <div className="w-full xl:w-2/3 px-4">
                <form action="">
                  <div className="flex flex-wrap -mx-4">
                    <div className="w-full lg:w-1/2 px-4 mb-10 lg:mb-0">
                      <div className="mb-10">
                        <label
                          className="font-bold font-heading text-gray-600"
                          for=""
                        >
                          First Name
                        </label>
                        <input
                          className="block w-full mt-4 py-4 px-4 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-1/2 px-4">
                      <div>
                        <label
                          className="font-bold font-heading text-gray-600"
                          for=""
                        >
                          Last Name
                        </label>
                        <input
                          className="block w-full mt-4 py-4 px-4 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="w-full mt-10 mb-10 px-4">
                      <div className="flex flex-wrap -mx-4">
                        <div className="w-full lg:w-1/2 px-4 mb-10 md:mb-0">
                          <div className="lg:mb-10">
                            <label
                              className="font-bold font-heading text-gray-600"
                              for=""
                            >
                              Address 1
                            </label>
                            <input
                              className="block w-full mt-4 py-4 px-4 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                              type="text"
                            />
                          </div>
                          <div className="hidden lg:block">
                            <label
                              className="font-bold font-heading text-gray-600"
                              for=""
                            >
                              Country
                            </label>
                            <select
                              className="block w-full mt-4 py-4 px-8 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                              name=""
                              id=""
                            >
                              <option value="1"></option>
                              <option value="2">United States</option>
                              <option value="3">Spain</option>
                              <option value="4">Poland</option>
                            </select>
                          </div>
                        </div>
                        <div className="w-full lg:w-1/2 px-4">
                          <div className="mb-10">
                            <label
                              className="font-bold font-heading text-gray-600"
                              for=""
                            >
                              Address 2
                            </label>
                            <input
                              className="block w-full mt-4 py-4 px-4 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                              type="text"
                            />
                          </div>
                          <div className="mb-10 lg:hidden">
                            <label
                              className="font-bold font-heading text-gray-600"
                              for=""
                            >
                              Country
                            </label>
                            <select
                              className="block w-full mt-4 py-4 px-8 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                              name=""
                              id=""
                            >
                              <option value="1"></option>
                              <option value="2">United States</option>
                              <option value="3">Spain</option>
                              <option value="4">Poland</option>
                            </select>
                          </div>
                          <div className="flex flex-wrap -mx-4">
                            <div className="w-full lg:w-3/5 px-4 mb-10 lg:mb-0">
                              <label
                                className="font-bold font-heading text-gray-600"
                                for=""
                              >
                                State
                              </label>
                              <select
                                className="block w-full mt-4 py-4 px-8 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                                name=""
                                id=""
                              >
                                <option value="1"></option>
                                <option value="2">United States</option>
                                <option value="3">Spain</option>
                                <option value="4">Poland</option>
                              </select>
                            </div>
                            <div className="w-full lg:w-2/5 px-4">
                              <label
                                className="font-bold font-heading text-gray-600"
                                for=""
                              >
                                Zip Code
                              </label>
                              <input
                                className="block w-full mt-4 py-4 px-4 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                                type="text"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="w-full xl:w-1/3 px-4">
                <div className="mb-12 p-6 lg:p-12 bg-blue-300">
                  <div className="mb-6 pb-8 border-b border-blue-100">
                    <h2 className="mb-6 text-3xl font-bold font-heading text-white">
                      Order summary
                    </h2>
                    <p className="text-blue-50">
                      Shipping and additional costs are calculated based on
                      values you have entered.
                    </p>
                  </div>
                  <div className="flex mb-2 justify-between items-center">
                    <span className="text-blue-50">Order subtotal</span>
                    <span className="text-xl font-bold font-heading text-white">
                      $89.67
                    </span>
                  </div>
                  <div className="flex mb-2 justify-between items-center">
                    <span className="text-blue-50">Shipping</span>
                    <span className="text-xl font-bold font-heading text-white">
                      $11.00
                    </span>
                  </div>
                  <div className="flex mb-5 justify-between items-center">
                    <span className="text-blue-50">Tax</span>
                    <span className="text-xl font-bold font-heading text-white">
                      $0
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold font-heading text-white">
                      Total
                    </span>
                    <span className="text-xl font-bold font-heading text-white">
                      $100.67
                    </span>
                  </div>
                </div>
                <div>
                  <span className="inline-block mb-4 font-medium">
                    Apply discount code:
                  </span>
                  <div className="flex mb-12 flex-wrap lg:flex-nowrap items-center">
                    <input
                      // block w-full mt-4 py-4 px-4 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md
                      className="inline-block mb-4 md:mb-0 mr-4 px-4 py-4 placeholder-gray-800 font-bold font-heading border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md w-full"
                      type="text"
                      placeholder="SUMMER30X"
                    />
                    <a
                      className="inline-block mb-4 md:mb-0 px-4 py-2 md:px-7 md:py-4 text-white font-bold font-heading uppercase bg-gray-800 hover:bg-gray-700 rounded-md"
                      href="#"
                    >
                      Apply
                    </a>
                  </div>
                  <a
                    className="block w-full py-4 bg-orange-300 hover:bg-orange-400 text-center text-white font-bold font-heading uppercase rounded-md transition duration-200"
                    href="#"
                  >
                    Go to Checkout
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;
