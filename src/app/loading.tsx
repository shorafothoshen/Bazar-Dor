export default function Loading() {
  return (
    <main className="mx-auto max-w-7xl animate-pulse px-4 py-6">
      <div className="rounded-3xl border border-gray-200 bg-white/70 px-8 py-12 md:px-16 grid md:grid-cols-2 items-center gap-8">
        <div>
          <div className="h-8 w-48 rounded-full bg-gray-200" />
          <div className="mt-4 h-10 w-full max-w-md rounded bg-gray-200" />
          <div className="mt-3 h-10 w-3/4 max-w-sm rounded bg-gray-200" />
          <div className="mt-5 h-4 w-full max-w-lg rounded bg-gray-200" />
          <div className="mt-2 h-4 w-2/3 max-w-md rounded bg-gray-200" />
          <div className="mt-6 h-12 w-40 rounded-lg bg-gray-200" />
        </div>
        <div className="hidden md:flex justify-end">
          <div className="h-64 w-64 rounded-3xl bg-gray-200" />
        </div>
      </div>

      <div className="mt-10 h-7 w-48 rounded bg-gray-200" />
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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