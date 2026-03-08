export default function Loading() {
  return (
    <div className="min-h-screen bg-dark">
      {/* Nav skeleton */}
      <div className="h-16 nav-glass flex items-center px-6">
        <div className="h-8 w-32 bg-white/10 rounded animate-pulse" />
        <div className="ml-auto flex gap-6">
          <div className="h-4 w-16 bg-white/10 rounded animate-pulse" />
          <div className="h-4 w-16 bg-white/10 rounded animate-pulse" />
          <div className="h-4 w-16 bg-white/10 rounded animate-pulse" />
        </div>
      </div>

      {/* Hero skeleton */}
      <div className="h-72 sm:h-80 lg:h-[28rem] bg-dark-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/70 to-dark/30" />
        <div className="absolute bottom-12 left-6 sm:left-10 lg:left-16 space-y-4">
          <div className="h-4 w-24 bg-white/10 rounded-full animate-pulse" />
          <div className="h-10 w-72 sm:w-96 bg-white/10 rounded animate-pulse" />
          <div className="h-5 w-56 bg-white/8 rounded animate-pulse" />
        </div>
      </div>

      {/* Content skeleton */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <div className="space-y-4">
          <div className="h-6 w-48 bg-white/8 rounded animate-pulse" />
          <div className="h-4 w-full max-w-2xl bg-white/5 rounded animate-pulse" />
          <div className="h-4 w-full max-w-xl bg-white/5 rounded animate-pulse" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="h-52 rounded-2xl bg-white/5 border border-white/5 animate-pulse"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
