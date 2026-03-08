import { getSiteSettings } from "@/lib/data";
import NavbarClient from "./NavbarClient";

export default async function Navbar() {
  const settings = await getSiteSettings();

  return (
    <NavbarClient
      siteName={settings?.siteName || "Joshua Adumchimma"}
      navCtaText={settings?.navCtaText || "Hire Me"}
      navCtaLink={settings?.navCtaLink || "/contact"}
    />
  );
}
