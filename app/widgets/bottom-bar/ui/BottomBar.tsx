import { LogOut, Plus } from "react-feather";

import { Button } from "~/shared/ui";

export function BottomBar() {
  return (
    <footer className="p-6 flex justify-between bg-neutral-300 dark:bg-neutral-500">
      <Button>
        <Plus /> New
      </Button>

      <Button>
        <LogOut /> Sign out
      </Button>
    </footer>
  );
}
