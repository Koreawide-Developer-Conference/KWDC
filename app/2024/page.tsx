import React from "react";

import { Divider, Footer, Section1, Section2, Section3 } from "@/components/2024";

export default function KWDC2024() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <Section1 />
      <Divider />
      <Section2 />
      <Divider />
      <Section3 />
      <Divider />
      <Footer />
    </div>
  );
}
