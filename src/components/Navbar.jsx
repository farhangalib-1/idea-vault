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
import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = authClient.useSession()
  const user = session?.user || null;
  console.log(user);
  

  return (
    <header className="w-full border-b border-white/20 bg-white/30 backdrop-blur-xl shadow-sm">
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
            <>
            <Link
              href="/profile"
              className="flex items-center gap-2"
            >
            {
              user.image ? (
                <img
                  src={user.image} 
                  alt="Profile"
                  className="rounded-full w-10 h-10 object-cover"
                />
              ) : (
                <Person width={18} height={18} />
              )}
              {user.name && <span>{user.name}</span>}
            </Link>
            <Button onClick={async() => await authClient.signOut()}>
              Logout
            </Button>
            </>
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
            <>
             <Link
              href="/profile"
              className="flex items-center gap-2"
            >
            {
              user.image ? (
                <img
                  src={user.image} 
                  alt="Profile"
                  className="rounded-full w-10 h-10 object-cover"
                />
              ) : (
                <Person width={18} height={18} />
              )}
              {user.name && <span>{user.name}</span>}
            </Link>
            <Button className="w-full">
              Logout
            </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;