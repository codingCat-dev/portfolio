import * as React from "react"
import { Link } from "gatsby"

const Header = () => (
  <>
    {/* prettier-ignore */}
    <header className="absolute z-50 text-center text-white uppercase -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <div className="p-3 flex flex-col items-center justify-center w-screen lg:p-0 ">
          <p className="mb-2 opacity-40 text-xs md:text-base mb-4">
            Profesionální fotografka - V Ostravě a okolí
          </p>
          <h1 className="my-2 text-4xl tracking-normal font-bolder md:text-6xl my-4 ">
            Alžběta Římanová
          </h1>
          <h2 className="my-2 text-sm tracking-wide md:tracking-wider text-xl my-4">
            Všechny příběhy si zaslouží být vyprávěny, už jste se rozhodli,
            který bude ten váš?
          </h2>
        </div>
        <div className="flex flex-col items-center justify-center mt-4 font-light md:flex-row opacity-80">
          <Link to="../home" className="px-4 py-1 m-2 transition-all border border-white hover:pr-6">
            Domovská stránka
          </Link>
          <Link to="../portfolio" className="px-4 py-1 m-2 transition-all border border-white hover:pr-6">
            Portfolio
          </Link>
        </div>
      </header>
  </>
)

export default Header
