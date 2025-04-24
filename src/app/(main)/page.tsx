export const dynamic = "force-dynamic";

import { redirect } from "next/navigation";

function Page() {
  return redirect("/main");
}

export default Page;
