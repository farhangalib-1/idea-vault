import Link from "next/link";
import {
  Bulb,
  LogoGithub,
  Envelope,
} from "@gravity-ui/icons";

const Footer = () => {
  return (
    <footer className="bg-[#06142D] text-white">
      <div className="w-11/12 max-w-7xl mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <Bulb
                className="text-violet-500"
                width={32}
                height={32}
              />

              <h2 className="text-3xl font-bold">
                IdeaVault
              </h2>
            </div>

            <p className="text-gray-300 leading-8 text-lg">
              Discover, share, and grow innovative ideas with a community of creators, entrepreneurs, and problem-solvers.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h3 className="text-2xl font-semibold mb-5">
              Platform
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>
                <Link href="/ideas">Browse Ideas</Link>
              </li>

              <li>
                <Link href="/add-idea">Submit Idea</Link>
              </li>

              <li>
                <Link href="/my-ideas">My Ideas</Link>
              </li>

              <li>
                <Link href="/interactions">
                  My Interactions
                </Link>
              </li>

              <li>
                <Link href="/profile">Profile</Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-2xl font-semibold mb-5">
              Categories
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>Tech</li>
              <li>AI</li>
              <li>Health</li>
              <li>Education</li>
              <li>Environment</li>
              <li>Agriculture</li>
              <li>Community</li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-2xl font-semibold mb-5">
              Connect
            </h3>

            <div className="flex gap-4 mb-6">

              <a
                href="https://github.com"
                target="_blank"
                className="w-12 h-12 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center hover:bg-white/10 transition"
              >
                <LogoGithub width={24} height={24} />
              </a>

              <a
                href="mailto:contact@ideavault.com"
                className="w-12 h-12 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center hover:bg-white/10 transition"
              >
                <Envelope width={24} height={24} />
              </a>

            </div>

            <p className="text-gray-300">
              contact@ideavault.com
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-14 pt-8">
          <p className="text-gray-400">
            © 2026 IdeaVault. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;