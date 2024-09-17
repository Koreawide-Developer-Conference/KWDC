import { useTranslation } from "@/i18n";

export default async function Head({
  params: { lng },
}: {
  params: {
    lng: string;
  };
}) {
  const { t } = await useTranslation(lng, "common");

  return (
    <>
      <title>{t("title")}</title>
      <meta name='description' content={t("desc")} />
    </>
  );
}
