import React from "react";
import { Carousel } from "flowbite-react";
import Image from "next/image";

const HomePics = () => {
  return (
    <div>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel slideInterval={2500}>
          <Image src="/farm3.jpg" width={1500} height={1500} quality={100} />
          <Image src="/farm2.jpg" width={1500} height={1500} quality={100} />
          <Image src="/farm1.jpg" width={1500} height={1500} quality={100} />
        </Carousel>
      </div>
    </div>
  );
};

export default HomePics;
