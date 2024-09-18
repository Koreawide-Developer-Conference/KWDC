import { useTranslation } from "@/i18n";

export default async function SpeakerHead({
  params: { lng },
}: {
  params: {
    lng: string;
  };
}) {
  const { t } = await useTranslation(lng, "speaker");
  const { t: commonT } = await useTranslation(lng, "common");

  return (
    <>
      <title>{t("title")}</title>
      <meta name='description' content={t("desc")} />
    </>
  );
}
