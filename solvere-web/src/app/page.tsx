import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { Hero } from "@/components/site/hero";
import { Figures } from "@/components/site/figures";
import { Modules } from "@/components/site/modules";
import { InsideModule } from "@/components/site/inside-module";
import { EveryModule } from "@/components/site/every-module";
import { WhoSeesWhat } from "@/components/site/who-sees-what";
import { Process } from "@/components/site/process";
import { Security } from "@/components/site/security";
import { Contact } from "@/components/site/contact";

/**
 * The order is the buyer's, not a template's: the claim, the numbers behind
 * it, the catalogue, one module opened up, what every module carries, who
 * reads what, how it starts, what is and is not true about security, and then
 * the ask.
 */
export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Figures />
        <Modules />
        <InsideModule />
        <EveryModule />
        <WhoSeesWhat />
        <Process />
        <Security />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
