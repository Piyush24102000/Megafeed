import Image from "next/image";
import React from "react";

const Team = () => {
  return (
    <div>
      <div className="overflow-y-hidden">
        <div className="flex justify-center items-center flex-col  px-4 md:px-6 bg-black text-white">
          <div className="flex justify-center items-center flex-col space-y-4">
            <h1 className="text-3xl xl:text-4xl font-extrabold leading-8 xl:leading-9">
              Our Team
            </h1>
            <p className="w-11/12 text-base leading-normal text-center">
              We are a group of professionals with a strong educational
              foundation in Agriculture. Our profound understanding of
              fertilizers positions us at the forefront of the market, allowing
              us to deliver exceptional expertise and services.
            </p>

            <div className="flex justify-center space-x- mt-8">
                
              {/* Team Member 1 */}
              <div className="flex flex-col items-center text-center ml-5 mt-5 space-y-2">
                <Image
                  src="/men.png" // replace with the actual image source
                  alt="John Doe - CEO"
                  width={100}
                  height={100}
                />
                <h2 className="text-xl font-semibold">Mr. Santosh Ugale</h2>
                <p className="text-gray-500">Managing Director</p>
              </div>

              {/* Team Member 2 */}
              <div className="flex flex-col items-center text-center mt-5 ml-5 space-y-2">
                <Image
                  src="/girl.png" // replace with the actual image source
                  alt="Marketting Head"
                  width={100}
                  height={100}
                />
                <h2 className="text-xl font-semibold">Miss. Maithilee Ugale</h2>
                <p className="text-gray-500"> Product Manager and Researcher</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
