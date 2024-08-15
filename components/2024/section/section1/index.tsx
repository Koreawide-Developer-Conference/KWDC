import React from "react";

import StairIcon from "@/public/assets/2024/icons/stair.svg";

export const Section1: React.FC = () => {
  return (
    <section className='flex flex-col pt-12 h-screen w-full items-center' id='section1'>
      <div className='max-w-[1440px] max-md:px-4 md:px-20 h-full w-full'>
        <div className='z-10 pt-20 flex flex-col h-full justify-between'>
          <div className='font-semibold text-6xl text-center max-lg:text-xl flex justify-between items-center'>
            <span>It’s a Leap Year.</span>
            <span>다음 세상으로의 도약.</span>
          </div>

          <div className='w-full py-20'>
            <StairIcon className='w-[45px] h-[14px] mb-7' />
            <div className='w-full flex justify-between items-start text-sm'>
              <div className='flex flex-col h-72 justify-between'>
                <p>
                  상상 속의 디바이스가 2024년, 세상에 등장했습니다.
                  <br />
                  우리의 비전은 더 이상 공간에 국한되지 않고,
                  <br /> 내 눈앞에서 살아 숨 쉬게 만들 수 있죠.
                  <br /> 손바닥 위의 유리판 속 세상을 생태계로 확장시킨 우리의 세상은 앞으로 얼마나 더 넓어질까요?
                </p>

                <p>
                  2024년은 4년 만에 돌아온 윤년 leap year입니다.
                  <br />
                  달의 공전주기와 태양의 공전주기가 다르기에 윤년을 통해 차이를 보정합니다. <br />
                  Vision Pro의 등장으로 애플 생태계는 또 한 번의 큰 변화가 일어나고 있습니다.
                  <br />
                  각자가 생태계에서 꿈꾸는 비전이 실현될 수 있도록 서로의 경험을 나누고 성장하는 자리를 <br />
                  함께 만드는 곳이 KWDC24가 되었으면 합니다.
                </p>

                <p>이제 모두의 비전이 도약할 차례입니다.</p>
              </div>
              <div className='w-44' />
              <div className='flex flex-col h-72 justify-between text-right'>
                <p>
                  It&apos;s 2024, and the devices of our imagination have become reality. <br />
                  Our vision is no longer limited to space, <br />
                  we can bring it to life right before our eyes. <br />
                  As we continue to push the boundaries of innovation, <br />
                  how much larger will our world become?
                </p>
                <p>
                  2024 is a leap year, the first in four years. <br />
                  Leap years compensate for the difference between the moon&apos;s orbit and the sun&apos;s. <br />
                  With the introduction of Vision Pro, the Apple ecosystem is also undergoing another significant
                  transformation. <br />
                  The KWDC24 will be a place where we can share our experiences, grow together, and help each other
                  realise our visions.
                </p>
                <p>Now, it&apos;s time for everyone&apos;s vision to take off.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
