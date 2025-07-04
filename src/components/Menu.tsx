import { ITEMS } from "@/constants/constants";

export default function Menu() {
  return (
    <section className="py-16 text-center w-full mx-auto">
      {/* <h2 className="text-6xl font-bold">Menu</h2> */}
      <div className="flex flex-col justify-center gap-8">
        {ITEMS.map((item) => (
          <div key={item.name + item.description} className="space-y-2">
            <h3 className="text-2xl font-bold">{item.name}</h3>
            <p>{item.description}</p>
            <span className="font-bold">{item.price}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
