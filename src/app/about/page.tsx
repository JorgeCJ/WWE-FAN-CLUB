'use client'
import Header from "@/components/Header";
import Loading from "@/components/Loading";
import { Suspense, useEffect, useState } from "react";
import Image from "next/image";

export default function About() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Suspense fallback={<Loading />}>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="flex flex-wrap w-screen h-screen bg-custom-bg bg-cover bg-center border-solid border-2 border-slate-50 justify-center">
          <Header />
          <div className="pt-2">
          <Image src="/images/JohnCenaSmile.gif" alt="John Cena Smile" width="300" height="400" className="border-2 border-slate-50" />
          </div>
          <div className={`flex flex-wrap w-screen justify-center pt-2 `}>
            <div className={`flex flex-wrap w-96 text-cyan-50 text-4xl `}>Hello dear fighter, we are the biggest fanbase of WWE. If you&apos;ve never heard of WWE, we&apos;ll tell you what it is. It&apos;s simply the best wrestling show in the WORLD. Choose your favorite fighter and enjoy an explosive dose of nostalgia straight to your heart.
            </div>
          </div>
        </div>
      )
      }
    </Suspense>
  )
}