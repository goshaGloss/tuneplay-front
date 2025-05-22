"use client";

export const dynamic = "force-dynamic";

import { redirect, usePathname } from "next/navigation";

function Page() {
  const pathname = usePathname();
  if (pathname === "/") redirect("main");
}

export default Page;
