import { LoginForm, LogoutButton } from "~/features/auth";
import { CreateNoteButton } from "~/features/create-note";
import { useCurrentUser } from "~/entities/user";

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
        <CreateNoteButton />
        <LogoutButton user={user} />
      </div>
    </footer>
  );
}
