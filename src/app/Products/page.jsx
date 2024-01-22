"use client";
import React, { useState } from "react";
import { products } from "../../../products";
import Image from "next/image";

const Products = () => {
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
              <div key={item.name} className="lg:w-1/4 md:w-1/2 p-4 w-full">
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
