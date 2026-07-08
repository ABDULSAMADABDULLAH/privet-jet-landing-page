import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = ["Start", "Story", "Rates", "Benefits", "FAQ"];

export default function HeroSection() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-screen overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_091828_e240eb17-6edc-4129-ad9d-98678e3fd238.mp4"
            type="video/mp4"
          />
        </video>

        <div className="relative h-full flex flex-col">
          <nav className="w-full max-w-7xl mx-auto px-8 py-6">
            <div className="flex items-center justify-between">
              <span className="text-2xl font-semibold text-gray-900">
                SkyElite
              </span>

              <ul className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-900 hover:text-gray-700 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>

              <button
                className="md:hidden text-gray-900"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {mobileOpen && (
              <div className="md:hidden mt-4 bg-white/95 backdrop-blur rounded-xl shadow-lg p-6">
                <ul className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-gray-900 hover:text-gray-700 transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </nav>

          <div className="flex-1 flex items-center justify-center -mt-80">
            <div className="text-center">
              <p className="text-sm font-semibold text-gray-600 tracking-wider mb-4">
                PRIVATE JETS
              </p>

              <h1 className="text-6xl md:text-7xl lg:text-8xl font-normal text-gray-500 leading-none tracking-tighter">
                Premium.
              </h1>
              <h1
                className="text-6xl md:text-7xl lg:text-8xl font-normal leading-none tracking-tighter"
                style={{ color: "#202A36", marginTop: -12 }}
              >
                Accessible.
              </h1>

              <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
                Your dedication deserves recognition.
              </p>

              <div className="flex items-center justify-center gap-4">
                <button className="px-4 py-2 rounded-full bg-gray-300 text-gray-800 font-medium hover:bg-gray-400 transition-colors">
                  Discover
                </button>
                <button
                  className="px-4 py-2 rounded-full text-white font-medium transition-colors"
                  style={{ backgroundColor: "#202A36" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "#1a2229")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "#202A36")
                  }
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
