import { Plus } from "react-feather";

import { LoginForm, LogoutButton } from "~/features/auth";
import { useCurrentUser } from "~/entities/user";
import { Button } from "~/shared/ui";

export function BottomBar() {
  const className = "p-6 bg-neutral-300 dark:bg-neutral-500";
  const user = useCurrentUser();

  if (user === null) {
    return (
      <footer className={className}>
        <LoginForm />
      </footer>
    );
  }

  return (
    <footer className={className}>
      <div className="flex justify-between">
        <Button>
          <Plus /> New
        </Button>

        <LogoutButton user={user} />
      </div>
    </footer>
  );
}
