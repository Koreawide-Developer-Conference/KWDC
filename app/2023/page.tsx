import { redirect } from "next/navigation";
import React from "react";

export default function KWDC2023() {
  redirect("https://kwdc.dev");
  return (
    <main className='w-screen min-h-screen relative flex flex-col items-center'>
      <h1>KWDC 2023</h1>
    </main>
  );
}
