"use client";
import React, { useState } from "react";
import { products } from "../../../products";
import Image from "next/image";

const Products = () => {
  // const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // const nextImage = () => {
  //   setCurrentImageIndex((prevIndex) => (prevIndex + 1) % products.length);
  // };

  // const prevImage = () => {
  //   setCurrentImageIndex(
  //     (prevIndex) => (prevIndex - 1 + products.length) % products.length
  //   );
  // };
  return (
    <div>
      <section className="text-gray-600 body-font">
        <h1 className="text-center mt-5 -mb-10 text-white text-2xl underline underline-offset-8 ">
          Our Products
        </h1>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {/* List of Products */}

            {products.map((item) => (
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-48 rounded overflow-hidden">
                  <Image
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src={item.images[0]}
                    width={1000}
                    height={1000}
                  />
                </a>
                <div className="mt-4">
                  <h1 className="text-white text-xs tracking-widest title-font mb-1">
                    Name: {item.name}
                  </h1>
                  <h1 className="text-white text-xs tracking-widest title-font mb-1">
                    Contents: {item.contents}
                  </h1>
                  <h1 className="text-white text-xs tracking-widest title-font mb-1">
                    Dosage: {item.dosage}
                  </h1>
                  <h1 className="text-white text-xs tracking-widest title-font mb-1">
                    Weight: {item.weight}
                  </h1>
                  <h1 className="text-white text-xs tracking-widest title-font mb-1">
                    Quantity: {item.quantity}
                  </h1>
                  <h1 className="text-white text-xl tracking-widest title-font mb-1">
                    MRP: {item.mrp}
                  </h1>
                </div>
              </div>
            ))}
            {/* Navigation arrows
            <div className="absolute top-1/2 transform -translate-y-1/2 right-4 cursor-pointer">
              <svg
                onClick={nextImage}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
            <div className="absolute top-1/2 transform -translate-y-1/2 left-4 cursor-pointer">
              <svg
                onClick={prevImage}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
