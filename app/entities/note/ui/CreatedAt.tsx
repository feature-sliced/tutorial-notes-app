const dateFormat = Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

export function CreatedAt({ date }: { date: Date }) {
  return (
    <p className="text-neutral-600 dark:text-neutral-100">
      Created on {dateFormat.format(date)}
    </p>
  );
}
