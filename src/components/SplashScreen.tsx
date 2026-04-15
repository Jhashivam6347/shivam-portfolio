const message = 'Welcome To ';
const message2 = 'Shivam’s Profile';

const SplashScreen = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#1e3a8a] via-[#2563eb] to-[#f97316] text-white">
      <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden px-6 py-12 text-center">
        <div className="pointer-events-none absolute inset-0 opacity-80">
          <div className="absolute left-1/4 top-1/3 h-28 w-1 rounded-full bg-white/80 blur-lg animate-firecracker-shoot" />
          <div className="absolute left-1/2 top-2/5 h-24 w-1 rounded-full bg-white/80 blur-lg animate-firecracker-shoot delay-150" />
          <div className="absolute right-1/3 top-1/4 h-32 w-1 rounded-full bg-white/80 blur-lg animate-firecracker-shoot delay-300" />
          <div className="absolute left-1/3 top-1/2 h-20 w-1 rounded-full bg-white/80 blur-lg animate-firecracker-shoot delay-200" />
          <div className="absolute right-1/4 top-1/3 h-24 w-1 rounded-full bg-white/80 blur-lg animate-firecracker-shoot delay-100" />
          <div className="absolute inset-0">
            <div className="firework top-[20%] left-[20%]" />
            <div className="firework top-[35%] left-[70%] delay-200" />
            <div className="firework top-[65%] left-[40%] delay-400" />
          </div>
        </div>

        <div className="relative z-10 max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-slate-200">
           Welcome to a space where development meets creativity
          </p>
          <h1 className="text-4xl font-extrabold  tracking-[0.25em] text-white sm:text-5xl md:text-6xl">
            {message.split('').map((letter, index) => (
              <span
                key={`${letter}-${index}`}
                className="inline opacity-0 animate-letter-appear"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                {letter}
              </span>
              
            ))}
            <br />
             {message2.split('').map((letter, index) => (
             <span
               key={`${letter}-${index}`}
               className="inline opacity-0 animate-letter-appear"
               style={{ animationDelay: `${index * 0.08}s` }}
             >
               {letter}
             </span>
           ))}
          </h1>
          <p className="mt-6 text-base text-slate-100 sm:text-lg">
            Your profile will be ready in a few seconds.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
