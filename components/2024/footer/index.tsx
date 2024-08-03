import Link from "next/link";
import React from "react";

import { DISCORD_LINK, INSTAGRAM_LINK, LINKEDIN_LINK, MEDIUM_LINK, X_LINK, YOUTUBE_LINK } from "@/constants";

interface FooterProps {
  cocHide?: boolean;
}

export const Footer: React.FC<FooterProps> = ({ cocHide = false }) => {
  return (
    <footer className='flex flex-col justify-center items-center w-screen pt-12 pb-9 bg-[#F5F5F7] max-lg:pt-5 max-lg:pb-16'>
      {!cocHide && (
        <div className='flex flex-col lg:w-[1000px] px-5'>
          <div className='text-[#000000E0] mb-5'>
            <p className='mb-5 text-sm font-semibold'>KWDC 행동강령</p>
            <ul className='text-xs space-y-1'>
              <li>
                • KWDC는 모든 참가자가 안전하고 즐거운 경험을 할 수 있도록, 다양성을 존중하고 괴롭힘 없는 환경을
                제공하기 위해 최선을 다하고 있습니다.
              </li>
              <li>
                • 모든 참가자는 성별, 성 정체성, 연령, 성적 취향, 장애, 외모, 신체 크기, 인종, 민족, 종교 또는 기타
                특성과 관계없이 환영받을 권리가 있습니다.
              </li>
              <li>
                • 모든 참가자는 지식 재산권과 개인 정보를 존중받을 권리가 있습니다. 지식 재산권을 위배하거나 개인 정보를
                침해하는 콘텐츠는 KWDC에서 사용이 제한됩니다.
              </li>
              <li>
                • 모든 참가자는 서로를 존중하고 상호작용할 때 정중함을 지켜주시기를 부탁드립니다. 부적절한 컨텐츠는
                가져오지 말아주세요.
              </li>
              <li> • 모든 참가자는 안전 표지판, 지침 및 규칙을 따라야 합니다.</li>
              <li>
                • 만약 행동 강령을 위반하는 문제가 발생하면, 준비위원회는 유연한 조치를 취하여 상황을 해결하겠습니다.
              </li>
              <li>
                • 위험한 행동이나 악의적인 의도가 있는 참가자는 KWDC 입장을 거부하거나 참가자를 제외시킬 수 있습니다.
              </li>
              <li> • 모든 참가자는 이 행동 강령을 따르며, 언제든지 준비위원회에 문의하여 도움을 요청할 수 있습니다.</li>
            </ul>
          </div>
          <div className='text-[#000000E0] mb-5 font-normal'>
            <p className='mb-5 text-sm font-semibold'>KWDC Code of Conduct</p>
            <ul className='text-xs space-y-1'>
              <li>
                • KWDC is committed to providing a safe and enjoyable experience for all participants, respecting
                diversity, and ensuring a harassment-free environment.
              </li>
              <li>
                • Every participant has the right to be welcomed regardless of gender, gender identity, age, sexual
                orientation, disability, appearance, body size, race, ethnicity, religion, or any other characteristic.
              </li>
              <li>
                • All participants have the right to have their intellectual property and personal information
                respected. Content that violates intellectual property rights or infringes on personal privacy will be
                restricted at KWDC.
              </li>
              <li>
                • We ask all participants to respect each other and maintain courtesy during interactions. Please
                refrain from bringing inappropriate content.
              </li>
              <li> • All participants must follow safety signs, guidelines, and rules.</li>
              <li>
                • If any issues arise that violate the code of conduct, the organizing committee will take flexible
                measures to resolve the situation.
              </li>
              <li>
                • Participants exhibiting dangerous behavior or malicious intent may be denied entry or excluded from
                KWDC.
              </li>
              <li>
                • All participants are expected to adhere to this code of conduct and can contact the organizing
                committee for assistance at any time.
              </li>
            </ul>
          </div>
        </div>
      )}
      <div className='pt-10 lg:w-[1000px] px-5'>
        <p className='text-sm font-semibold text-[#000000E0] mb-2.5'>공식채널</p>
        <div className='flex gap-x-5 text-[#000000B8] font-normal text-xs mb-5'>
          <Link href={DISCORD_LINK} target={"_blank"} className='hover:underline'>
            Discord
          </Link>
          <Link href={YOUTUBE_LINK} target={"_blank"} className='hover:underline'>
            YouTube
          </Link>
          <Link href={INSTAGRAM_LINK} target={"_blank"} className='hover:underline'>
            Instagram
          </Link>
          <Link href={X_LINK} target={"_blank"} className='hover:underline'>
            X
          </Link>
          <Link href={LINKEDIN_LINK} target={"_blank"} className='hover:underline'>
            LinkedIn
          </Link>
          <Link href={MEDIUM_LINK} target={"_blank"} className='hover:underline'>
            Medium
          </Link>
        </div>
        <div className='text-deepGreen-60 text-xs mb-2.5'>
          KWDC24 준비위원회와 직접 이야기를 나누고 싶다면&nbsp;:&nbsp;
          <a href='mailto:hello.kwdc@gmail.com' className='hover:underline'>
            hello.kwdc@gmail.com
          </a>
        </div>
        <div className='h-px w-full bg-[#00000029]' />
        <p className='mt-5 text-xs text-deepGreen-60'>Copyright © KWDC24. All rights reserved.</p>
      </div>
    </footer>
  );
};
