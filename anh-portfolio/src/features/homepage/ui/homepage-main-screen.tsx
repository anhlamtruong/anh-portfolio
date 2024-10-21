import { ModeToggle } from "@/components/ui/theme-toggle";

export const HomePageMainScreen = () => {
  return (
    <div>
      <ModeToggle></ModeToggle>
      <section>
        <h1 className="text-7xl">Page1</h1>
      </section>
      <section>
        <h1>Page2</h1>
      </section>
      <section>
        <h1>Page3</h1>
      </section>
      <section>
        <h1>Page4</h1>
      </section>
    </div>
  );
};
