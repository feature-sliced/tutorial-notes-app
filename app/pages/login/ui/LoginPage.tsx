export function LoginPage() {
  return (
    <div className="px-6 py-10 text-xl text-neutral-900 dark:text-neutral-300">
      <div className="px-2">
        <h1 className="text-3xl font-semibold mb-2">Notes</h1>
        <p className="mb-4">
          A web app built with Remix and architected with Feature-Sliced Design
        </p>
        <ul className="pl-8 list-disc">
          <li>
            <a
              className="text-blue-600 dark:text-blue-300 underline"
              href="https://github.com/feature-sliced/tutorial-notes-app"
              target="_blank"
              rel="noreferrer"
            >
              View source
            </a>
          </li>
          <li>
            <a
              className="text-blue-600 dark:text-blue-300 underline"
              href="https://feature-sliced.design"
              target="_blank"
              rel="noreferrer"
            >
              Read the FSD docs
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
