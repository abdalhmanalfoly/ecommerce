import React from 'react';

function Scele() {
  return (
    <div>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <header className="text-center">
              <div className="h-8 w-40 bg-gray-100 rounded" />
            </header>

            <div className="mt-8">
              <ul className="space-y-4">
                {Array(3).fill(0).map((_, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <div className="h-16 w-16 bg-gray-100 rounded" />

                    <div className="flex-1 space-y-2">
                      <div className="h-4 w-32 bg-gray-100 rounded" />
                      <div className="h-3 w-20 bg-gray-100 rounded" />
                    </div>

                    <div className="flex flex-1 items-center justify-end gap-2">
                      <div className="h-8 w-12 bg-gray-100 rounded" />
                      <div className="h-6 w-6 bg-gray-100 rounded-full" />
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
                <div className="w-screen max-w-lg space-y-4">
                  <div className="space-y-2">
                    {Array(4).fill(0).map((_, index) => (
                      <div key={index} className="flex justify-between">
                        <div className="h-4 w-16 bg-gray-100 rounded" />
                        <div className="h-4 w-12 bg-gray-100 rounded" />
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-end">
                    <div className="h-5 w-32 bg-gray-100 rounded-full" />
                  </div>

                  <div className="flex justify-end">
                    <div className="h-10 w-32 bg-gray-100 rounded" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Scele;
