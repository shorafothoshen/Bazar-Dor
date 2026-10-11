export default function Loading() {
  return (
    <main className="mx-auto max-w-7xl animate-pulse px-4 py-6">
      <div className="flex items-center gap-5 rounded-3xl border border-gray-200 bg-white/80 px-8 py-6">
        <div className="h-16 w-16 rounded-2xl bg-gray-200" />
        <div className="flex-1">
          <div className="h-8 w-40 rounded bg-gray-200" />
          <div className="mt-2 h-4 w-64 max-w-full rounded bg-gray-200" />
        </div>
      </div>

      <div className="mt-3 mb-5 flex items-center justify-between gap-3">
        <div className="h-5 w-48 rounded bg-gray-200" />
        <div className="h-10 w-40 rounded-lg bg-gray-200" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="rounded-3xl border border-gray-200 bg-white/80 p-5"
          >
            <div className="flex items-center gap-3.5">
              <div className="h-14 w-14 rounded-2xl bg-gray-200" />
              <div className="flex-1">
                <div className="h-5 w-3/4 rounded bg-gray-200" />
                <div className="mt-2 h-4 w-1/3 rounded bg-gray-200" />
              </div>
            </div>
            <div className="mt-5 flex items-end justify-between">
              <div>
                <div className="h-3 w-16 rounded bg-gray-200" />
                <div className="mt-2 h-7 w-24 rounded bg-gray-200" />
              </div>
              <div className="h-7 w-16 rounded-full bg-gray-200" />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}