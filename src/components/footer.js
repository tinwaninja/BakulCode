import React from "react";
import { Link } from "gatsby";
import cx from "classnames";
function getYear() {
  return new Date().getFullYear();
}
const Footer = ({ className, ...props }) => {
  className = cx(
    "w-full px-8 py-4 text-white bg-gray-800 flex flex-col md:flex-row justify-between items-start md:items-center",
    className
  );
  return (
    <>
      <div className={className} {...props}>
        <div className="flex-initial text-xl font-semibold">BakulCode</div>
        <div>
          <ul className="flex flex-col md:flex-row text-sm -mx-3 font-medium">
            <li className="mx-3"><Link to="/tentang">Tentang</Link></li>
            <li className="mx-3">© {getYear()} BakulCode</li>
          </ul>
        </div>
      </div>

      <div className="w-full px-8 py-2 text-white text-xs font-light bg-black flex flex-col sm:flex-row justify-between items-start md:items-center">
        <div>
          <strong className="font-bold">Whatsapp: </strong>
          +6285290453769
          <strong className="ml-3 font-bold">Email: </strong>
          support@bakulcode.com
        </div>
        <div>
          <Link to="/" className="hover:underline">
            bakulcode.com
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;

