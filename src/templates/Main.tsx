import type { ReactNode } from "react";

import SiteHeader from "@/components/SiteNavigation/SiteHeader";
import SiteFooter from "@/components/SiteNavigation/SiteFooter";

import { navLinks } from "@/data/navigation";

import bgTile from "@/assets/images/bg-tile.png";

type IMainProps = {
  meta?: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => {
  const { meta, children } = props;

  return (
    <div
      className="w-full text-white antialiased bg-neutral-900 bg-repeat"
      style={{ backgroundImage: `url(${bgTile.src})` }}
    >
      {meta && meta}

      <SiteHeader />

      <main className="text-base ">{children}</main>

      <SiteFooter navLinks={navLinks} />
    </div>
  );
};

export { Main };
