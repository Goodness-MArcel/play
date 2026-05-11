import React, { useState } from 'react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="relative z-20 p-5 text-white">
      <div className="container flex items-center justify-between mx-auto">

        {/* LOGO */}
        <div>
          <h1 className="text-2xl font-bold heading uppercase tracking-wider">
            play
          </h1>
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-4">
            {['Home', 'Explore', 'WorkSpace', 'Artist', 'News'].map((item) => (
              <li key={item} className="text-lg font-medium">
                <a
                  href=""
                  className="nav-link hover:text-[#3BA3FF] transition duration-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex gap-4 items-center">
            <button className="login-btn rounded-full text-white transition">
              Login
            </button>
            <button className="signup-btn">
              Sign Up
            </button>
          </div>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
          aria-label="Toggle navigation"
        >
          <span className="sr-only">Toggle navigation</span>
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 md:hidden ${
          isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        aria-hidden={!isOpen}
      >
        <button
          type="button"
          className="absolute inset-0 bg-black/50"
          onClick={() => setIsOpen(false)}
          aria-label="Close menu"
        />

        <div
          className={`absolute right-0 top-0 h-full w-[80vw] max-w-xs border-l border-white/10 bg-[#020014]/95 p-6 shadow-2xl backdrop-blur-2xl transition-transform duration-300 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold uppercase tracking-wider">Menu</h2>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
              aria-label="Close navigation"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <nav className="flex flex-col gap-5">
            {['Home', 'Explore', 'WorkSpace', 'Artist', 'News'].map((item) => (
              <a
                key={item}
                href=""
                className="text-lg font-medium text-white hover:text-[#3BA3FF] transition duration-300"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="mt-8 flex flex-col gap-3">
            <button className="login-btn rounded-full text-white transition">
              Login
            </button>
            <button className="signup-btn w-full">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;