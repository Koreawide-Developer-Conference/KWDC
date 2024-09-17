export const fallbackLng = 'ko';
export const languages = [fallbackLng, 'en', 'ja'];
export const defaultNS = 'common';
export const cookieName = 'i18next';

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