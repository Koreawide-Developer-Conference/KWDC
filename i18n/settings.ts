import React from "react";

export const fallbackLng = 'ko';
export const languages = [fallbackLng, 'en'];
export const defaultNS = 'common';
export const cookieName = 'i18next';
export type LangTypes = typeof languages[number];
export type LangProps = {
  children?: React.ReactNode;
  params: {
    lng: LangTypes;
    id?: string;
  };
}

export function getOptions(
  lng = fallbackLng,
  ns: string | string[] = defaultNS
) {
  return {
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}
