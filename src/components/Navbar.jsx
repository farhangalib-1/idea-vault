"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Bars,
  Xmark,
  Bulb,
  Plus,
  Persons,
  Person,
} from "@gravity-ui/icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const user = null;

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/20 bg-white/30 backdrop-blur-xl shadow-sm">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 p-2 text-white shadow-lg">
            <Bulb width={20} height={20} />
          </div>

          <span className="text-xl font-bold text-slate-800">
            IdeaVault
          </span>
        </Link>
        <div className="hidden lg:flex items-center gap-8">
          <Link href="/">Home</Link>
          <Link href="/ideas">Ideas</Link>

          {user && (
            <>
              <Link href="/add-idea">Add Idea</Link>
              <Link href="/my-ideas">My Ideas</Link>
              <Link href="/my-interactions">My Interactions</Link>
            </>
          )}
        </div>
        <div className="hidden lg:flex items-center gap-3">
          {!user ? (
            <>
              <Link
                href="/login"
                className="rounded-full px-5 py-2 hover:bg-violet-50"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 px-5 py-2 text-white"
              >
                Register
              </Link>
            </>
          ) : (
            <Link
              href="/profile"
              className="flex items-center gap-2"
            >
              <Person width={18} height={18} />
              Profile
            </Link>
          )}
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden"
        >
          {isOpen ? (
            <Xmark width={24} height={24} />
          ) : (
            <Bars width={24} height={24} />
          )}
        </button>
      </nav>
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="space-y-4 border-t border-white/20 bg-white/90 px-6 py-5 backdrop-blur-xl">
          <Link
            href="/"
            className="block"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>

          <Link
            href="/ideas"
            className="block"
            onClick={() => setIsOpen(false)}
          >
            Ideas
          </Link>

          {user && (
            <>
              <Link
                href="/add-idea"
                className="flex items-center gap-2"
                onClick={() => setIsOpen(false)}
              >
                <Plus width={18} height={18} />
                Add Idea
              </Link>

              <Link
                href="/my-ideas"
                className="block"
                onClick={() => setIsOpen(false)}
              >
                My Ideas
              </Link>

              <Link
                href="/my-interactions"
                className="flex items-center gap-2"
                onClick={() => setIsOpen(false)}
              >
                <Persons width={18} height={18} />
                My Interactions
              </Link>
            </>
          )}

          {!user ? (
            <>
              <Link
                href="/login"
                className="block"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>

              <Link
                href="/register"
                className="block rounded-lg bg-gradient-to-r from-violet-600 to-indigo-600 px-4 py-2 text-center text-white"
                onClick={() => setIsOpen(false)}
              >
                Register
              </Link>
            </>
          ) : (
            <Link
              href="/profile"
              className="flex items-center gap-2"
              onClick={() => setIsOpen(false)}
            >
              <Person width={18} height={18} />
              Profile
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;