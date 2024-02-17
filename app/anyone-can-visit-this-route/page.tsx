import CustomUserButton from "@/components/UserButton";

export default function MaybeAuth() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      anyone-can-visit-this-route Page
      <CustomUserButton />
    </main>
  );
}
