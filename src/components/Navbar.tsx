"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  ArrowRight,
  Thermometer,
  Building2,
  Flame,
  Wind,
  Droplets,
  Wrench,
  Snowflake,
  Calculator,
  HeartHandshake,
  Home,
  Shield,
} from "lucide-react";
import { COMPANY } from "@/lib/constants";
import type { LucideIcon } from "lucide-react";

interface ServiceItem {
  label: string;
  href: string;
  icon: LucideIcon;
  desc: string;
}

const serviceItems: ServiceItem[] = [
  {
    label: "Heating & Cooling",
    href: "/services/heating-cooling",
    icon: Thermometer,
    desc: "Residential & commercial HVAC systems",
  },
  {
    label: "Commercial HVAC",
    href: "/services/commercial-hvac",
    icon: Building2,
    desc: "Large-scale design, install & retrofit",
  },
  {
    label: "Boiler & Furnace Repair",
    href: "/services/boiler-furnace-repair",
    icon: Flame,
    desc: "Diagnostics, repair & replacement",
  },
  {
    label: "Restaurant Hoods",
    href: "/services/restaurant-hoods",
    icon: Wind,
    desc: "Kitchen exhaust & ventilation systems",
  },
  {
    label: "Water Heaters",
    href: "/services/heat-pump-water-heaters",
    icon: Droplets,
    desc: "Tankless & heat pump water heaters",
  },
  {
    label: "Service & Repair",
    href: "/services/service-repair",
    icon: Wrench,
    desc: "Diagnostics, repair & maintenance contracts",
  },
  {
    label: "Commercial Refrigeration",
    href: "/services/commercial-refrigeration",
    icon: Snowflake,
    desc: "Walk-ins, display cases & ice machines",
  },
  {
    label: "Load Calculations",
    href: "/services/load-calculations",
    icon: Calculator,
    desc: "Manual J & D sizing calculations",
  },
  {
    label: "Cooling Assistance",
    href: "/services/cooling-assistance",
    icon: HeartHandshake,
    desc: "HEAP & EPCP cooling programs",
  },
  {
    label: "FDNY Violations",
    href: "/services/fdny-violations",
    icon: Shield,
    desc: "VC19 & VC26 violation resolution",
  },
];

interface MaintenanceItem {
  label: string;
  href: string;
  icon: LucideIcon;
  desc: string;
}

const maintenanceItems: MaintenanceItem[] = [
  {
    label: "Residential Plans",
    href: "/maintenance-plans#residential",
    icon: Home,
    desc: "Seasonal tune-ups for homes",
  },
  {
    label: "Commercial Plans",
    href: "/maintenance-plans#commercial",
    icon: Building2,
    desc: "Quarterly service for businesses",
  },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services", hasDropdown: true, dropdownType: "mega" as const },
  { label: "Maintenance Plans", href: "/maintenance-plans", hasDropdown: true, dropdownType: "small" as const },
  { label: "NYSERDA Rebates", href: "/nyserda-rebates" },
  { label: "Learn", href: "/learn" },
  { label: "About", href: "/#why-gotham" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileMaintenanceOpen, setMobileMaintenanceOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "nav-glass py-3" : "bg-transparent py-5"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center z-10">
              <Image
                src="/gotham-logo.png"
                alt="Gotham HVAC"
                width={200}
                height={60}
                className={`h-14 w-auto transition-all duration-500 ${
                  scrolled ? "" : "brightness-0 invert"
                }`}
                priority
              />
            </Link>

            {/* Desktop */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div key={link.label} className="relative group">
                  <Link
                    href={link.href}
                    className={`px-4 py-2 text-[13px] font-medium rounded-lg transition-all duration-200 flex items-center gap-1 ${
                      scrolled
                        ? "text-text-secondary hover:text-dark hover:bg-surface"
                        : "text-white/70 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.label}
                    {link.hasDropdown && (
                      <ChevronDown className="w-3 h-3 opacity-50 transition-transform duration-200 group-hover:rotate-180" />
                    )}
                  </Link>

                  {/* Mega-menu dropdown (Services) */}
                  {link.hasDropdown && link.dropdownType === "mega" && (
                    <div className="absolute top-full -left-[280px] pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                      <div className="bg-white rounded-2xl shadow-[0_25px_60px_-12px_rgba(0,0,0,0.15)] border border-gray-100/80 overflow-hidden w-[720px]">
                        {/* Header */}
                        <div className="px-6 pt-5 pb-3 border-b border-gray-100">
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-gray-400">
                                Our Services
                              </h3>
                            </div>
                            <Link
                              href="/services"
                              className="text-xs font-semibold text-blue hover:text-blue/80 flex items-center gap-1 transition-colors"
                            >
                              View All
                              <ArrowRight className="w-3 h-3" />
                            </Link>
                          </div>
                        </div>

                        {/* Services grid */}
                        <div className="p-4 grid grid-cols-3 gap-1">
                          {serviceItems.map((service) => (
                            <Link
                              key={service.label}
                              href={service.href}
                              className="group/item flex items-start gap-3.5 px-4 py-3.5 rounded-xl hover:bg-blue/[0.04] transition-all duration-200"
                            >
                              <div className="w-9 h-9 rounded-lg bg-blue/[0.07] flex items-center justify-center flex-shrink-0 group-hover/item:bg-blue/[0.12] transition-colors duration-200">
                                <service.icon className="w-[18px] h-[18px] text-blue" />
                              </div>
                              <div className="min-w-0">
                                <div className="text-[13px] font-semibold text-gray-900 group-hover/item:text-blue transition-colors duration-200 leading-tight">
                                  {service.label}
                                </div>
                                <div className="text-[11px] text-gray-400 mt-0.5 leading-snug">
                                  {service.desc}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>

                        {/* Footer CTA */}
                        <div className="px-6 py-4 bg-gradient-to-r from-gray-50 to-blue/[0.03] border-t border-gray-100">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-lg bg-blue/10 flex items-center justify-center">
                                <Phone className="w-4 h-4 text-blue" />
                              </div>
                              <div>
                                <div className="text-xs font-semibold text-gray-700">
                                  Need help choosing?
                                </div>
                                <div className="text-[11px] text-gray-400">
                                  Call us at{" "}
                                  <a
                                    href={COMPANY.phoneTel}
                                    className="text-blue font-medium hover:underline"
                                  >
                                    {COMPANY.phone}
                                  </a>
                                </div>
                              </div>
                            </div>
                            <Link
                              href="/#contact"
                              className="px-4 py-2 rounded-lg bg-blue text-white text-xs font-semibold hover:bg-blue/90 transition-colors duration-200"
                            >
                              Get a Quote
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Small dropdown (Maintenance Plans) */}
                  {link.hasDropdown && link.dropdownType === "small" && (
                    <div className="absolute top-full -left-4 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                      <div className="bg-white rounded-2xl shadow-[0_25px_60px_-12px_rgba(0,0,0,0.15)] border border-gray-100/80 overflow-hidden w-[300px]">
                        <div className="px-5 pt-4 pb-2 border-b border-gray-100">
                          <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-gray-400">
                            Maintenance Plans
                          </h3>
                        </div>
                        <div className="p-3 space-y-1">
                          {maintenanceItems.map((item) => (
                            <Link
                              key={item.label}
                              href={item.href}
                              className="group/item flex items-center gap-3.5 px-4 py-3 rounded-xl hover:bg-blue/[0.04] transition-all duration-200"
                            >
                              <div className="w-9 h-9 rounded-lg bg-blue/[0.07] flex items-center justify-center flex-shrink-0 group-hover/item:bg-blue/[0.12] transition-colors duration-200">
                                <item.icon className="w-[18px] h-[18px] text-blue" />
                              </div>
                              <div className="min-w-0">
                                <div className="text-[13px] font-semibold text-gray-900 group-hover/item:text-blue transition-colors duration-200 leading-tight">
                                  {item.label}
                                </div>
                                <div className="text-[11px] text-gray-400 mt-0.5 leading-snug">
                                  {item.desc}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                        <div className="px-5 py-3 bg-gradient-to-r from-gray-50 to-blue/[0.03] border-t border-gray-100">
                          <Link
                            href="/maintenance-plans"
                            className="text-xs font-semibold text-blue hover:text-blue/80 flex items-center gap-1 transition-colors"
                          >
                            View All Plans
                            <ArrowRight className="w-3 h-3" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={COMPANY.phoneTel}
                className={`text-sm font-medium flex items-center gap-2 transition-colors ${
                  scrolled ? "text-text-secondary hover:text-dark" : "text-white/60 hover:text-white"
                }`}
              >
                <Phone className="w-3.5 h-3.5" />
                {COMPANY.phone}
              </a>
              <Link
                href="/#contact"
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  scrolled
                    ? "bg-dark text-white hover:bg-dark-700"
                    : "bg-white text-dark hover:bg-white/90"
                }`}
              >
                Get a Quote
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden z-[60] p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className={`w-6 h-6 ${scrolled ? "text-dark" : "text-white"}`} />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Fullscreen Menu */}
      <div
        className={`fixed inset-0 z-50 bg-dark overflow-y-auto transition-all duration-300 ${
          mobileOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        {/* Close button area */}
        <div className="flex justify-end px-6 pt-5">
          <button
            onClick={() => setMobileOpen(false)}
            className="p-2"
            aria-label="Close menu"
          >
            <X className="w-6 h-6 text-white" />
          </button>
        </div>

        <div className="px-8 pb-10 pt-4">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <div key={link.label}>
                {link.hasDropdown && link.dropdownType === "mega" ? (
                  <>
                    <button
                      onClick={() =>
                        setMobileServicesOpen(!mobileServicesOpen)
                      }
                      className="flex items-center justify-between w-full py-4 text-3xl font-bold text-white/80 hover:text-white transition-colors border-b border-white/5"
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        className={`w-6 h-6 transition-transform duration-300 ${
                          mobileServicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        mobileServicesOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="py-3 space-y-1">
                        {serviceItems.map((service) => (
                          <Link
                            key={service.label}
                            href={service.href}
                            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 transition-colors"
                            onClick={() => setMobileOpen(false)}
                          >
                            <div className="w-8 h-8 rounded-lg bg-white/[0.06] flex items-center justify-center flex-shrink-0">
                              <service.icon className="w-4 h-4 text-blue" />
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-white/80">
                                {service.label}
                              </div>
                              <div className="text-[11px] text-white/30">
                                {service.desc}
                              </div>
                            </div>
                          </Link>
                        ))}
                        <Link
                          href="/services"
                          className="flex items-center gap-2 px-4 py-3 text-sm font-semibold text-blue"
                          onClick={() => setMobileOpen(false)}
                        >
                          View All Services
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </>
                ) : link.hasDropdown && link.dropdownType === "small" ? (
                  <>
                    <button
                      onClick={() =>
                        setMobileMaintenanceOpen(!mobileMaintenanceOpen)
                      }
                      className="flex items-center justify-between w-full py-4 text-3xl font-bold text-white/80 hover:text-white transition-colors border-b border-white/5"
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        className={`w-6 h-6 transition-transform duration-300 ${
                          mobileMaintenanceOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        mobileMaintenanceOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="py-3 space-y-1">
                        {maintenanceItems.map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 transition-colors"
                            onClick={() => setMobileOpen(false)}
                          >
                            <div className="w-8 h-8 rounded-lg bg-white/[0.06] flex items-center justify-center flex-shrink-0">
                              <item.icon className="w-4 h-4 text-blue" />
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-white/80">
                                {item.label}
                              </div>
                              <div className="text-[11px] text-white/30">
                                {item.desc}
                              </div>
                            </div>
                          </Link>
                        ))}
                        <Link
                          href="/maintenance-plans"
                          className="flex items-center gap-2 px-4 py-3 text-sm font-semibold text-blue"
                          onClick={() => setMobileOpen(false)}
                        >
                          View All Plans
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className="block py-4 text-3xl font-bold text-white/80 hover:text-white transition-colors border-b border-white/5"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-col gap-3">
            <a
              href={COMPANY.phoneTel}
              className="flex items-center justify-center gap-3 py-4 rounded-xl border border-white/10 text-white font-semibold"
            >
              <Phone className="w-5 h-5" />
              {COMPANY.phone}
            </a>
            <Link
              href="/#contact"
              className="btn-primary text-center text-lg"
              onClick={() => setMobileOpen(false)}
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
