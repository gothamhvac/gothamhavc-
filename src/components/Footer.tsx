import Link from "next/link";
import Image from "next/image";
import { Instagram, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { COMPANY } from "@/lib/constants";

const serviceLinks = [
  { label: "All Services", href: "/services" },
  { label: "Heating & Cooling", href: "/services/heating-cooling" },
  { label: "Commercial HVAC", href: "/services/commercial-hvac" },
  { label: "Boiler & Furnace Repair", href: "/services/boiler-furnace-repair" },
  { label: "Restaurant Hood Installation", href: "/services/restaurant-hoods" },
  { label: "Water Heaters", href: "/services/heat-pump-water-heaters" },
  { label: "Service & Repair", href: "/services/service-repair" },
  { label: "Commercial Refrigeration", href: "/services/commercial-refrigeration" },
  { label: "Load Calculations", href: "/services/load-calculations" },
  { label: "Cooling Assistance (HEAP/EPCP)", href: "/services/cooling-assistance" },
  { label: "FDNY Violation Resolution", href: "/services/fdny-violations" },
  { label: "Maintenance Plans", href: "/maintenance-plans" },
];

const companyLinks = [
  { label: "About", href: "/#why-gotham" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "NYSERDA Rebates", href: "/nyserda-rebates" },
  { label: "Learn", href: "/learn" },
  { label: "Request Service", href: "/#contact" },
];

/* Sitewide internal links to the top local service-area pages.
   `title` gives descriptive anchor context for crawlers. */
const areaLinks = [
  { label: "The Bronx", href: "/service-areas/bronx", title: "HVAC services in the Bronx" },
  { label: "Manhattan", href: "/service-areas/manhattan", title: "HVAC services in Manhattan" },
  { label: "Brooklyn", href: "/service-areas/brooklyn", title: "HVAC services in Brooklyn" },
  { label: "Queens", href: "/service-areas/queens", title: "HVAC services in Queens" },
  { label: "Staten Island", href: "/service-areas/staten-island", title: "HVAC services in Staten Island" },
  { label: "Yonkers", href: "/service-areas/yonkers", title: "HVAC services in Yonkers" },
  { label: "Mount Vernon", href: "/service-areas/mount-vernon", title: "HVAC services in Mount Vernon" },
  { label: "White Plains", href: "/service-areas/white-plains", title: "HVAC services in White Plains" },
  { label: "Westchester County", href: "/service-areas/westchester", title: "HVAC services in Westchester County" },
  { label: "Hempstead", href: "/service-areas/hempstead", title: "HVAC services in Hempstead, Long Island" },
  { label: "Garden City", href: "/service-areas/garden-city", title: "HVAC services in Garden City, Long Island" },
];

const socials = [
  { icon: Instagram, href: COMPANY.socials.instagram, label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-white/5" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-16 lg:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-4 text-center lg:text-left">
            <Image
              src="/gotham-logo-white.png"
              alt="Gotham HVAC"
              width={450}
              height={135}
              className="h-40 w-auto mb-5 mx-auto"
            />
            <p className="text-white/30 text-sm leading-relaxed mb-6 max-w-xs mx-auto text-center">
              Engineering-led HVAC contracting and design for New York City, Lower Westchester, and Long Island.
            </p>
            <div className="flex gap-2 justify-center">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center hover:bg-white/10 transition-all duration-200"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4 text-white/40" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-white/20 mb-5">
              Services
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/40 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-white/20 mb-5">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/40 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-white/20 mb-5">
              Contact
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={COMPANY.phoneTel}
                  className="flex items-center gap-3 text-sm text-white/40 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  {COMPANY.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-center gap-3 text-sm text-white/40 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  {COMPANY.email}
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-white/40">
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>
                    {COMPANY.address.street}<br />
                    {COMPANY.address.city}, {COMPANY.address.state} {COMPANY.address.zip}
                  </span>
                </div>
              </li>
            </ul>
            <div className="mt-6 overflow-hidden rounded-xl border border-white/10">
              <iframe
                src={`https://maps.google.com/maps?q=${encodeURIComponent(COMPANY.address.full)}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                width="100%"
                height="180"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Gotham HVAC location"
                className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          </div>
        </div>

        {/* Areas We Serve */}
        <div className="border-t border-white/5 py-8">
          <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-white/20 mb-4">
            Areas We Serve
          </h3>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {areaLinks.map((area) => (
              <Link
                key={area.href}
                href={area.href}
                title={area.title}
                className="text-sm text-white/40 hover:text-white transition-colors duration-200"
              >
                {area.label}
              </Link>
            ))}
            <Link
              href="/service-areas"
              className="text-sm font-medium text-blue hover:text-blue-light transition-colors duration-200"
            >
              View all areas →
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/20">
            &copy; {new Date().getFullYear()} Gotham HVAC. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-xs text-white/20 hover:text-white/40 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-white/20 hover:text-white/40 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
