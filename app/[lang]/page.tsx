import { getDictionary } from "@/get-dictionary";
import { Locale } from "../../i18n-config";
import LocaleSwitcher from "./components/locale-switcher";
import Link from "next/link";

export default async function IndexPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  return (
    <div>
      <LocaleSwitcher />
      <p>Current locale: {lang}</p>

      <div className="flex flex-col gap-4">
        <Link href={`${lang}/educational`}>Educational Tour</Link>
        <Link href={`${lang}/medical`}>Medical Tour</Link>
      </div>
    </div>
  );
}
