import { prefix } from "@/constants";
import { useTranslation } from "@/i18n";

export default async function MainHead({
  params: { lng },
}: {
  params: {
    lng: string;
  };
}) {
  const { t } = await useTranslation(lng, "common");

  return (
    <>
      <title>{t("2024.title")}</title>
      <meta name='description' content={t("2024.description")} />
      <meta name='og:image' content={`${prefix}/images/og-image-2024.png`} />
      <meta name='og:title' content={t("2024.title")} />
      <meta name='og:site_name' content={t("2024.title")} />
      <meta name='og:description' content={t("2024.description")} />
      <meta name='twitter:image' content={`${prefix}/images/og-image-2024.png`} />
    </>
  );
}
