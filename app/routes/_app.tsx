import { Outlet } from "@remix-run/react";

import { BottomBar } from "~/widgets/bottom-bar";

export default function App() {
  return (
    <div className="flex flex-col h-screen justify-between bg-neutral-100 dark:bg-neutral-700">
      <main className="overflow-y-auto flex-1 flex flex-col">
        <Outlet />
      </main>
      <BottomBar />
    </div>
  );
}
