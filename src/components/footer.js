import * as React from "react"
import { Link } from "gatsby"

const Footer = () =>
  // prettier-ignore
  <footer className="pt-6 bg-blue-100 font-light text-center container lg:pt-12">
    <div className="text-sm tracking-tighter" role="navigation" aria-label="social-links">
      <h4 className="uppercase mb-1">seznamte se se mnou</h4>
      <a className="block" href="https://wa.me/15551234567" target="_blank">
        777/777-444
      </a>
      <a className="block " href="mailto:mail@gmail.com" target="_blank">
        someemail@email.com
      </a>
      <a className="block"
       href="https://www.facebook.com/Al%C5%BEb%C4%9Bta-%C5%98%C3%ADmanov%C3%A1-fotograf-450529322192872/?ref=page_internal"
        target="_blank">
        Facebook
      </a>
      <a className="block"
        href="https://www.facebook.com/Al%C5%BEb%C4%9Bta-%C5%98%C3%ADmanov%C3%A1-fotograf-450529322192872/?ref=page_internal"
        target="_blank">
        Instagram
      </a>
    </div>
    <div role="navigation" aria-label="privacy-policy" className="mt-6 bg-gradient-to-t from-gray-800 via-gray-900 to-black text-gray-100 text-xs py-1  tracking-wide lg:mt-12">
        <ul className="flex items-center justify-evenly flex-col lg:flex-row">
          <li><Link to="./">Právní varování</Link></li>
          <li><Link to="./">Zásady ochrany osobních údajů</Link></li>
          <li><Link to="./">Zásady cookies</Link></li>
        </ul>
      </div>
  </footer>

export default Footer
