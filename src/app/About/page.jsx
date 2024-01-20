import React from "react";

const About = () => {
  return (
    <div>
      {/* About Us Features */}
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-white mb-4">
            मेगाफीड बायोटेकचं का निवडावे
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-400 text-opacity-80">
            "मेगाफिड बायोटेकसह संवर्धित करा आपल्या फसले – उत्कृष्ट खतांसाठी आपला
            विश्वासनीय सहकारी, प्रचंड पिकाच्या उपायोगांसाठी आणि हरित
            भविष्यासाठी."
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-4 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-5 flex-shrink-0">
              <img
                src="./fertilizer.gif"
                alt="fertilizer"
                style={{
                  borderRadius: "50%",
                  maxWidth: "100%",
                  maxHeight: "100%",
                }}
              />
            </div>
            <div className="flex-grow">
              <h2 className="text-white text-lg title-font font-medium mb-3">
                Broad Variety
              </h2>
              <p className="leading-relaxed text-base">
                We have a large variety of products to suit your needs.
              </p>
            </div>
          </div>

          <div className="p-4 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-5 flex-shrink-0">
              <img
                src="./quality.gif"
                alt="quality"
                style={{
                  borderRadius: "50%",
                  maxWidth: "100%",
                  maxHeight: "100%",
                }}
              />
            </div>
            <div className="flex-grow">
              <h2 className="text-white text-lg title-font font-medium mb-3">
                High Quality
              </h2>
              <p className="leading-relaxed text-base">
                Our products, your trust, quality guaranteed.
              </p>
            </div>
          </div>

          <div className="p-4 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-5 flex-shrink-0">
              <img
                src="./packaging.gif"
                alt="packaging"
                style={{
                  borderRadius: "50%",
                  maxWidth: "100%",
                  maxHeight: "100%",
                }}
              />
            </div>
            <div className="flex-grow">
              <h2 className="text-white text-lg title-font font-medium mb-3">
                Safe Packaging
              </h2>
              <p className="leading-relaxed text-base">
                We ensure premium packaging without any physical damage.
              </p>
            </div>
          </div>

          <div className="p-4 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-5 flex-shrink-0">
              <img
                src="./testing.gif"
                alt="testing"
                style={{
                  borderRadius: "50%",
                  maxWidth: "100%",
                  maxHeight: "100%",
                }}
              />
            </div>
            <div className="flex-grow">
              <h2 className="text-white text-lg title-font font-medium mb-3">
                Extensive Testing
              </h2>
              <p className="leading-relaxed text-base">
                High Tech Lab for Research and Testing
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
