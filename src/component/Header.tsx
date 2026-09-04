export default function Header() {
  return (
    <header className="flex flex-col items-center justify-center gap-4 text-center *:md:w-1/2">
      <h1 className="text-main-heading max-w-[15ch] text-[clamp(2rem,2rem+0.05vw,2.5rem)] font-semibold text-pretty">
        Quality feedbacks for your SaaS products
      </h1>
      <p>The blocks & components you need</p>
    </header>
  );
}
