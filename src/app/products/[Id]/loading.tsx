export default function Loading() {
  return (
    <main className="mx-auto max-w-7xl animate-pulse px-4 py-6">
      <div className="mb-4 h-4 w-56 rounded bg-gray-200" />

      <div className="flex flex-col gap-4 rounded-3xl border border-gray-200 bg-white/80 p-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-5">
          <div className="h-16 w-16 rounded-2xl bg-gray-200" />
          <div>
            <div className="h-8 w-48 rounded bg-gray-200" />
            <div className="mt-2 h-4 w-32 rounded bg-gray-200" />
            <div className="mt-2 h-4 w-56 max-w-full rounded bg-gray-200" />
          </div>
        </div>
        <div className="h-28 w-full rounded-2xl bg-gray-200 sm:w-40" />
      </div>

      <div className="mt-6 rounded-3xl border border-gray-200 bg-white/80 p-6">
        <div className="mb-4 h-6 w-40 rounded bg-gray-200" />
        <div className="grid gap-4 md:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="h-24 rounded-2xl bg-gray-200" />
          ))}
        </div>
      </div>

      <div className="mt-6 rounded-3xl border border-gray-200 bg-white/80 p-6">
        <div className="mb-4 h-6 w-56 rounded bg-gray-200" />
        <div className="space-y-2">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="h-10 rounded-lg bg-gray-200" />
          ))}
        </div>
      </div>
    </main>
  );
}