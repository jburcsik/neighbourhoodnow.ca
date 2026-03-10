import { clients } from "@/data/clients";

export default function LogoStrip() {
  return (
    <div className="bg-slate-50 border-y border-slate-100 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold text-slate-400 uppercase tracking-[0.2em] mb-8">
          Trusted By
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
          {clients.map(({ name }) => (
            <span
              key={name}
              className="text-sm font-semibold text-slate-400 uppercase tracking-widest whitespace-nowrap"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
