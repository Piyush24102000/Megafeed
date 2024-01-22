import Link from "next/link";
import React from "react";

const ProdCTA = () => {
  return (
    <div>
      <div className="overflow-y-hidden">
        <div className="pb-16">
          {/* Code block starts */}
          <dh-component>
            <section className="py-12 px-4 md:px-6 lg:px-20 2xl:mx-auto 2xl:container bg-black text-white">
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
                <div className="w-full md:w-1/2 flex items-center">
                  <img
                    loading="lazy"
                    className="rounded mx-auto w-8/12"
                    src="/line.gif"
                  />
                </div>
                <div className="flex flex-col justify-center items-center w-full md:w-1/2 text-center mx-auto">
                  <div className>
                    <h3
                      role="heading"
                      className="text-2xl xl:text-4xl font-semibold leading-6 xl:leading-10 text-white"
                    >
                      Explore Megafeed's Innovative Products
                    </h3>
                    <p
                      role="contentinfo"
                      className="text-base xl:text-xl text-gray-300 xl:leading-normal pt-2 lg:pt-4"
                    >
                      At Megafeed, we are specialized in providing high-quality
                      fertilizers to empower agricultural success. Our
                      fertilizers are meticulously crafted to enhance soil
                      fertility and promote healthy plant growth. Whether you're
                      a large-scale farmer or a home gardener, Megafeed
                      Fertilizers offers state-of-the-art solutions to ensure
                      great harvests and sustainable agriculture.
                    </p>
                    <Link href="/Products">
                      <button className="my-4 lg:my-8 mt-5 lg:mb-0  bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 rounded text-white py-2 px-4 xl:px-6 xl:py-4 text-base xl:text-xl">
                        Check Products
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </dh-component>

          {/* Code block ends */}
        </div>
      </div>
    </div>
  );
};

export default ProdCTA;
