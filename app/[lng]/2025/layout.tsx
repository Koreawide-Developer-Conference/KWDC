import { AsyncLangProps } from "@/i18n/settings";

import { Footer, Navigation } from "@/components/2025";
import "@/styles/fonts/AppleSDGothicNeo.css";



export default async function RootLayout({ children, params }: Readonly<AsyncLangProps>) {
  const awaitedParams = await params;
  return (
    <main className='bg-white text-white overflow-x-hidden flex flex-col items-center'>
      <Navigation params={awaitedParams} />
      {children}
      <Footer params={awaitedParams} />
    </main>
  );
}
