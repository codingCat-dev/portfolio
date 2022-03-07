import * as React from "react"
import { Link } from "gatsby"

const TitlePage = () => (
  <>
    {/* prettier-ignore */}
    <header className="h-screen overflow-hidden flex justify-center items-center bg-gradient-to-t from-gray-800 via-gray-900 to-black">
      <div className="text-center text-gray-100 uppercase">
        <h1 className="p-3 flex flex-col items-center justify-center w-screen lg:px-0 ">
          <span className="my-4 opacity-40 text-xs md:text-base">
            Profesionální fotografka - V Ostravě a okolí
          </span>
          <span className="my-2 text-4xl tracking-normal font-noto font-bolder md:text-6xl md:my-4">
            Alžběta Římanová
          </span>
          <span className="my-2 text-base tracking-wide md:tracking-wider md:text-xl">
            Všechny příběhy si zaslouží být vyprávěny, už jste se rozhodli,
            který bude ten váš?
          </span>
        </h1>
        <div className="flex flex-col items-center justify-center opacity-80 font-light md:flex-row">
          <Link to="../home" className="px-4 py-1 m-2 transition-colors border border-white hover:border-blue-300 hover:text-blue-100">
            Domovská stránka
          </Link>
          <Link to="../portfolio" className="px-4 py-1 m-2 transition-colors border border-white hover:border-blue-300 hover:text-blue-100"  >
            Portfolio
          </Link>
        </div>
      </div>
    </header>
  </>
)

export default TitlePage
