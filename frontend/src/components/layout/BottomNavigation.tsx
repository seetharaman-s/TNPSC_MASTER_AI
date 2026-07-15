"use client";

import { MOBILE_MENU } from "@/constants/navigation";
import { MobileNavItem } from "@/components/navigation";

export default function BottomNavigation() {

  return (

    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t bg-white lg:hidden dark:bg-slate-950 dark:border-slate-800">

      <div className="grid grid-cols-5 py-2">

        {MOBILE_MENU.map((item) => (

          <MobileNavItem
            key={item.id}
            item={item}
          />

        ))}

      </div>

    </nav>

  );

}