import React from 'react'
import { Link } from 'react-router-dom'
import logoImage from "../logo.png";
import twitterImage from "../twitterIcon.png";

function NavBar() {

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div class="relative flex items-center justify-between">
        <div class="flex items-center">

          {/* ロゴ */}
          <Link to="/">
            <img class="inline-flex items-center mr-8" src={logoImage} width="160" height="75"/>
          </Link>

          {/* メニュー */}
          <ul class="flex items-center hidden space-x-8 lg:flex">
            <li>
              <Link to="/" class="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100">入口へ</Link>
            </li>
            <li>
              <Link to="/ChinpoTweet" class="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100">俺とお前のちんぽついーと</Link>
            </li>
            <li>
              <Link to="/ChinpoFace" class="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100">お前の顔面は所詮陰茎</Link>
            </li>
          </ul>
        </div>

        <div class="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div class="absolute top-0 left-0 w-full">
              <div class="p-5 bg-white border rounded shadow-sm">
                <div class="flex items-center justify-between mb-4">
                  <div>
                    {/* ロゴ */}
                    <Link to="/">
                      <img class="inline-flex items-center mr-8" src={logoImage} width="160" height="75"/>
                    </Link>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  {/* メニュー */}
                  <ul class="space-y-4">
                    <li>
                      <Link to="/" class="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100">入口へ</Link>
                    </li>
                    <li>
                      <Link to="/ChinpoTweet" class="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100">俺とお前のちんぽついーと</Link>
                    </li>
                    <li>
                      <Link to="/ChinpoFace" class="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100">お前の顔面は所詮陰茎</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-center">
        <br></br>
            <a
              href="https://twitter.com/intent/tweet?text=%E9%99%B0%E8%8C%8E%E3%81%AE%E3%81%8A%E7%A5%AD%E3%82%8A%E3%81%98%E3%82%83%20~Chinpo%20Festival%20in%20%E3%81%A1%E3%82%93%E3%81%BD%E3%81%AE%E5%AE%BF~%20https%3A%2F%2Fchinpo-festival-front.vercel.app%20%23Chinpo_Festival%20%23%E3%81%A1%E3%82%93%E3%81%BD%E3%81%AE%E5%AE%BF"
              target="_blank"
            >
              <img
                className="hover:shadow-sm hover:translate-y-0.5 inline-flex items-center mr-8"
                src={twitterImage} width="100" height="50"
              />
            </a>
      </div>
    </div>
  );
}
  
export default NavBar;