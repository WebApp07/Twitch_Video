import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <h1 className="flex flex-col gap-y-4">Dashboard</h1>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
