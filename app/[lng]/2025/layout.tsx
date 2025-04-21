
import { LangProps } from "@/i18n/settings";

import { Footer } from "@/components/2025";
import "@/styles/fonts/AppleSDGothicNeo.css";



export default function RootLayout({ children, params }: Readonly<LangProps>) {
  return (
    <main className='bg-white text-white overflow-x-hidden flex flex-col items-center'>
      {children}
      <Footer params={params} />
    </main>
  );
}
