import Test from "./test";
import { Provider } from "./use-provider";

export default function Home() {

  return (
    <Provider>
      <main className="flex flex-col items-center mt-10">
        <h1 className="text-2xl font-bold border-b-2 mb-2">Parent</h1>
        <section>
          <Test />
        </section>
      </main>
    </Provider>
  );
}