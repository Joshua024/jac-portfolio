import { getSiteSettings, getNavLinks } from "@/lib/data";
import NavbarClient from "./NavbarClient";

export default async function Navbar() {
  const [settings, navLinks] = await Promise.all([
    getSiteSettings(),
    getNavLinks(),
  ]);

  return (
    <NavbarClient
      siteName={settings?.siteName || "Joshua Adumchimma"}
      navCtaText={settings?.navCtaText || "Hire Me"}
      navCtaLink={settings?.navCtaLink || "/contact"}
      logoType={settings?.logoType || "text"}
      logoImage={settings?.logoImage || ""}
      navLinks={navLinks.map((l) => ({ id: l.id, label: l.label, href: l.href }))}
    />
  );
}
