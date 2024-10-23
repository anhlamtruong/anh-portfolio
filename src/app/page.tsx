import { ModeToggle } from "@/components/ui/theme-toggle";

export default function Home() {
  return (
    <div>
      <main>
        <div className="flex items-center justify-center">
          <center className="  w-11/12 bg-red-400">
            <ModeToggle></ModeToggle>
            <section className=" h-screen">
              <h1 className="text-7xl">Page1</h1>
            </section>
            <section>
              <h1 className="text-7xl">Page2</h1>
            </section>
            <section>
              <h1 className="text-7xl">Page3</h1>
            </section>
            <section>
              <h1 className="text-7xl">Page4</h1>
            </section>
          </center>
        </div>
      </main>
      {/* <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer> */}
    </div>
  );
}
