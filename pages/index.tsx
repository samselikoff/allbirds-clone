// @ts-nocheck
export default function () {
  return (
    <div>
      <header className="fixed inset-x-0 top-0">
        <p className="py-3 text-xs font-medium text-center text-white bg-yellow-700">
          We’ve got all sorts of gifts for all sorts of moms. Order by 4/27 for
          delivery by 5/8. Shop Now.
        </p>
        <div className="px-6 bg-white">
          <div className="relative flex items-center justify-center w-full h-16 px-4 mx-auto">
            <div className="absolute left-0 flex space-x-9">
              <NavLink>Men</NavLink>
              <NavLink>Womens</NavLink>
              <NavLink>New arrivals</NavLink>
            </div>
            <img className="h-[38px]" src="/allbirds-logo.svg" alt="" />
            <div className="absolute right-0 flex space-x-8">
              <NavLink>Sustainability</NavLink>
              <NavLink>Rerun</NavLink>
              <NavLink>Stores</NavLink>
            </div>
          </div>
        </div>
      </header>

      <main>
        <div className="relative flex flex-col items-center h-screen">
          <img
            src="/shopping.jpg"
            alt=""
            className="absolute z-[-1] h-full w-full object-cover"
          />

          <div className="flex flex-col items-center justify-center flex-1 pt-72">
            <h1 className="text-5xl font-bold text-white">
              Made from Trees. Designed for Sun.
            </h1>
            <p className="mt-4 text-lg font-bold text-white">
              Shop shoes made with light & breezy eucalyptus tree fiber.
            </p>
          </div>
          <div className="py-16 space-x-6">
            <button className="w-44 rounded-sm bg-white py-4 text-sm font-bold uppercase tracking-[0.15em]">
              Shop men
            </button>
            <button className="w-44 rounded-sm bg-white py-4 text-sm font-bold uppercase tracking-[0.15em]">
              Shop women
            </button>
          </div>
        </div>
        <div className="h-screen bg-blue-500"></div>
      </main>
    </div>
  )
}

function NavLink({ children }) {
  return (
    <a
      className="text-sm font-semibold text-gray-700 uppercase hover:underline"
      href=""
    >
      {children}
    </a>
  )
}
