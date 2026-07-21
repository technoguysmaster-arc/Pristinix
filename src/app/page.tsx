"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  MessageCircle,
  ChevronDown,
  Sparkles,
  Shield,
  Clock,
  Star,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Car,
  Zap,
  Menu,
  X,
  CheckCircle2,
  ArrowRight,
  Layers,
  Crown,
} from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────────────

const WHATSAPP_NUMBER = "916281984964";
const WHATSAPP_BASE = `https://wa.me/${WHATSAPP_NUMBER}`;
const DEFAULT_MSG =
  "Hi%20Pristinix,%20I%20am%20looking%20for%20doorstep%20car%20wash%20services.";

function buildWhatsAppLink(serviceName?: string) {
  if (!serviceName) return `${WHATSAPP_BASE}?text=${DEFAULT_MSG}`;
  const msg = encodeURIComponent(
    `Hi Pristinix, I am interested in your "${serviceName}" service. Please share more details.`
  );
  return `${WHATSAPP_BASE}?text=${msg}`;
}

// Section I: Signature Services
const SERVICES = [
  {
    id: 1,
    name: "Express Doorstep Wash",
    icon: Zap,
    description:
      "A swift, professional exterior hand wash with premium microfiber towels. Perfect for regular maintenance.",
    badge: null,
    prices: { hatchback: "₹599", sedan: "₹699", suv: "₹899" },
  },
  {
    id: 2,
    name: "Wash + Interior Refresh",
    icon: Sparkles,
    description:
      "Our most popular combo — complete exterior wash paired with a thorough interior vacuum and wipe.",
    badge: "Most Popular",
    prices: { hatchback: "₹999", sedan: "₹1,299", suv: "₹1,699" },
  },
  {
    id: 3,
    name: "Interior Deep Cleaning",
    icon: Shield,
    description:
      "Intensive interior detailing — seats, carpets, roof lining, and every nook gets premium treatment.",
    badge: null,
    prices: { hatchback: "₹2,699", sedan: "₹3,299", suv: "₹4,299" },
  },
  {
    id: 4,
    name: "Exterior Deep Detailing",
    icon: Car,
    description:
      "Multi-stage paint decontamination, clay bar treatment, and machine polish for a showroom finish.",
    badge: null,
    prices: { hatchback: "₹2,999", sedan: "₹3,999", suv: "₹5,299" },
  },
  {
    id: 5,
    name: "Complete Detailing",
    icon: Star,
    description:
      "The ultimate luxury package — full exterior + interior detailing for a truly showroom-worthy finish.",
    badge: "Best Value",
    prices: { hatchback: "₹5,299", sedan: "₹6,799", suv: "₹9,199" },
  },
];

// Section II: Paint Protection
const PAINT_PROTECTION_SERVICES = [
  {
    id: 1,
    name: "Teflon Coating",
    icon: Layers,
    description: "PTFE polymer shine layer · 6–12 month protection",
    badge: null,
    prices: { hatchback: "₹2,799", sedan: "₹3,599", suv: "₹4,599" },
    includes: [],
  },
  {
    id: 2,
    name: "Ceramic Coating",
    icon: Sparkles,
    description: "9H hydrophobic nano-ceramic · 1–5 year durability",
    badge: null,
    prices: { hatchback: "₹8,999", sedan: "₹12,499", suv: "₹13,499" },
    includes: [],
  },
  {
    id: 3,
    name: "Graphene Coating",
    icon: Star,
    description: "10H thermal-resistant graphene · 5–7 year durability",
    badge: "BEST VALUE",
    prices: { hatchback: "₹18,999", sedan: "₹19,999", suv: "₹20,999" },
    includes: [],
  },
  {
    id: 4,
    name: "PPF — Full Body",
    icon: Shield,
    description: "Self-healing TPU film, all panels · lifetime scratch-heal",
    badge: null,
    prices: { hatchback: "₹35,999", sedan: "₹39,999", suv: "₹40,999" },
    includes: [],
  },
];

// Section III: Care Plans (Membership)
const CARE_PLANS = [
  {
    id: "gloss",
    name: "Gloss Plan",
    tier: "Basic",
    price: "₹1,499",
    period: "/month",
    description: "Essential monthly maintenance for car owners who love a clean exterior all month long.",
    badge: null,
    includes: [
      "4 Exterior Doorstep Washes",
      "Wheel & Tyre Dressing",
      "Microfiber Hand Dry",
      "Standard Doorstep Scheduling",
    ],
    highlight: false,
  },
  {
    id: "shine",
    name: "Shine Plan",
    tier: "Premium",
    price: "₹2,499",
    period: "/month",
    description: "Our most popular monthly routine — regular exterior washes plus a full interior refresh.",
    badge: "Most Popular",
    includes: [
      "4 Exterior Doorstep Washes",
      "1 Interior Refresh Service",
      "Dashboard & Panel Wipe-down",
      "Flexible Date Rollover",
    ],
    highlight: true,
  },
  {
    id: "pristine",
    name: "Pristine Plan",
    tier: "Elite",
    price: "₹4,299",
    period: "/month",
    description: "VIP concierge automotive care. Maximum exterior shine, deep interior clean, and priority slots.",
    badge: "Elite Care",
    includes: [
      "8 Exterior Doorstep Washes",
      "1 Interior Deep Cleaning",
      "Priority Slot Booking",
      "Complimentary Glass Sealant",
    ],
    highlight: false,
  },
];

const FEATURES = [
  { icon: MapPin, title: "At Your Doorstep", desc: "We come to you — home, office, or anywhere." },
  { icon: Clock, title: "On-Time Service", desc: "Punctual professionals, every single visit." },
  { icon: Shield, title: "Premium Products", desc: "Only the finest detailing compounds & tools." },
  { icon: Star, title: "5-Star Results", desc: "Every car leaves looking showroom fresh." },
];

// ─── Navbar ──────────────────────────────────────────────────────────────────

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Signature Services", href: "#services" },
    { label: "Paint Protection", href: "#paint-protection" },
    { label: "Care Plans", href: "#membership" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-none transition-all duration-500 ${
        scrolled
          ? "nav-blur bg-black/90 shadow-2xl shadow-black/50"
          : "bg-gradient-to-b from-black/95 via-black/70 to-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#" className="flex items-center group transition-transform hover:scale-105">
          <Image
            src="/logo.png"
            alt="Pristinix Logo"
            width={180}
            height={60}
            className="h-12 md:h-14 w-auto object-contain"
            priority
          />
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-neutral-400 hover:text-white text-sm font-medium tracking-wide transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-red-500 group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href={buildWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 red-glow-sm hover:scale-105 active:scale-95"
        >
          <MessageCircle size={15} />
          Book Now
        </a>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        } bg-black/95 border-b border-white/5 border-t-0`}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-neutral-300 hover:text-white font-medium py-1 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={buildWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-5 py-3 rounded-xl transition-colors mt-1"
          >
            <MessageCircle size={16} />
            Book Now on WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-black border-none"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      />
      {/* Dark overlay */}
      <div className="hero-overlay absolute inset-0" />

      {/* Red accent line (bottom only) */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-600/40 to-transparent" />

      {/* Animated radial glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-red-600/5 blur-3xl animate-pulse" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-sm text-neutral-300 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-8 animate-fade-in">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
          Premium Doorstep Detailing
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight mb-6">
          <span className="text-white">Premium Doorstep</span>
          <br />
          <span className="shimmer-text">Car Detailing & Wash</span>
        </h1>

        <p className="text-neutral-300 text-lg sm:text-xl md:text-2xl font-light max-w-2xl mx-auto mb-10 leading-relaxed">
          Experience luxury car care at your home.{" "}
          <span className="text-white font-medium">No drive-through, no waiting.</span>{" "}
          We come to you.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={buildWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white font-bold text-base px-8 py-4 rounded-2xl transition-all duration-200 red-glow hover:scale-105 active:scale-95 w-full sm:w-auto justify-center"
          >
            <MessageCircle size={20} />
            Book Your Wash Now
            <ArrowRight size={18} />
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 text-neutral-300 hover:text-white font-medium text-base px-6 py-4 rounded-2xl border border-white/10 hover:border-white/25 transition-all duration-200 w-full sm:w-auto justify-center backdrop-blur-sm"
          >
            View Services
          </a>
        </div>

        {/* Stats row */}
        <div className="flex items-center justify-center gap-8 mt-14 flex-wrap">
          {[
            { value: "500+", label: "Happy Cars" },
            { value: "5★", label: "Average Rating" },
            { value: "2hr", label: "Avg. Service Time" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-black text-white">{stat.value}</div>
              <div className="text-xs text-neutral-500 uppercase tracking-wider mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-neutral-600 animate-bounce">
        <ChevronDown size={20} />
      </div>
    </section>
  );
}

// ─── Features Strip ───────────────────────────────────────────────────────────

function FeaturesStrip() {
  return (
    <section className="relative bg-neutral-900 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {FEATURES.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="flex flex-col items-center text-center gap-3 group"
            >
              <div className="w-12 h-12 rounded-xl bg-red-600/10 border border-red-600/20 flex items-center justify-center group-hover:bg-red-600/20 group-hover:border-red-600/40 transition-all duration-300">
                <Icon size={22} className="text-red-500" />
              </div>
              <div>
                <div className="text-white font-semibold text-sm">{title}</div>
                <div className="text-neutral-500 text-xs mt-0.5 leading-relaxed">{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Service Card Component ───────────────────────────────────────────────────

function ServiceCard({ service }: { service: (typeof SERVICES)[number] }) {
  const Icon = service.icon;

  return (
    <div className="group relative flex flex-col h-full bg-neutral-900 border border-white/5 rounded-2xl overflow-hidden hover:border-red-600/30 transition-all duration-300 animated-border hover:shadow-2xl hover:shadow-red-900/10 hover:-translate-y-1">
      {/* Badge */}
      {service.badge && (
        <div className="absolute top-4 right-4 z-10 bg-red-600 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full whitespace-nowrap shadow-md">
          {service.badge}
        </div>
      )}

      <div className="p-6 flex-1 flex flex-col">
        {/* Icon + Name */}
        <div className={`flex items-start gap-3.5 mb-5 ${service.badge ? "pr-24 sm:pr-28" : ""}`}>
          <div className="w-11 h-11 rounded-xl bg-red-600/10 border border-red-600/20 flex items-center justify-center shrink-0 group-hover:bg-red-600/20 transition-colors">
            <Icon size={20} className="text-red-500" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-white font-bold text-base sm:text-lg leading-tight mb-1">{service.name}</h3>
            <p className="text-neutral-400 text-xs sm:text-sm leading-snug">{service.description}</p>
          </div>
        </div>

        {/* Bottom wrapper aligned to bottom */}
        <div className="mt-auto pt-2">
          {/* Pricing table */}
          <div className="price-tag rounded-xl p-4 mb-5">
            <div className="grid grid-cols-3 gap-2 text-center">
              {(
                [
                  { label: "Hatchback", key: "hatchback" },
                  { label: "Sedan", key: "sedan" },
                  { label: "SUV", key: "suv" },
                ] as const
              ).map(({ label, key }) => (
                <div key={key}>
                  <div className="text-neutral-500 text-[9px] uppercase tracking-wider font-semibold mb-1">
                    {label}
                  </div>
                  <div className="text-white font-bold text-base">
                    {service.prices[key]}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Book Button */}
          <a
            href={"https://wa.me/916281984964?text=" + encodeURIComponent("Hi Pristinix, I am looking to book the " + service.name + " package. Can you share the details?")}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 flex items-center justify-center gap-2 w-full bg-red-600 hover:bg-red-700 active:scale-95 text-white font-semibold text-sm py-3 rounded-xl transition-all duration-200 cursor-pointer"
          >
            <MessageCircle size={15} />
            Book Now
          </a>
        </div>
      </div>
    </div>
  );
}

// ─── Section I: Signature Services ───────────────────────────────────────────

function ServicesSection() {
  return (
    <section id="services" className="relative pt-24 pb-20 md:pt-32 md:pb-28 scroll-mt-16 md:scroll-mt-20">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-red-950/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 id="pricing" className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            Doorstep Wash & <span className="text-red-500">Detailing</span>
          </h2>
          <p className="text-neutral-400 text-base md:text-lg max-w-2xl mx-auto">
            Professional-grade car care delivered directly to your doorstep. Choose a
            package tailored to your vehicle.
          </p>
        </div>

        {/* Vehicle type legend */}
        <div className="flex items-center justify-center gap-6 mb-10 flex-wrap">
          {["Hatchback", "Sedan", "SUV"].map((type) => (
            <div key={type} className="flex items-center gap-2 text-sm text-neutral-400">
              <span className="w-2 h-2 rounded-full bg-red-600" />
              {type}
            </div>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Section II: Paint Protection ────────────────────────────────────────────

function PaintProtectionSection() {
  return (
    <section id="paint-protection" className="relative pt-28 pb-20 md:pt-36 md:pb-28 bg-neutral-950 border-t border-white/5 scroll-mt-16 md:scroll-mt-20">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            Advanced Paint & <span className="text-red-500">Body Protection</span>
          </h2>
          <p className="text-neutral-400 text-base md:text-lg max-w-2xl mx-auto">
            Shield your car from UV rays, scratches, and water spots with our long-lasting polymer, ceramic, graphene, and PPF coatings.
          </p>
        </div>

        {/* Vehicle type legend */}
        <div className="flex items-center justify-center gap-6 mb-10 flex-wrap">
          {["Hatchback", "Sedan", "SUV"].map((type) => (
            <div key={type} className="flex items-center gap-2 text-sm text-neutral-400">
              <span className="w-2 h-2 rounded-full bg-red-600" />
              {type}
            </div>
          ))}
        </div>

        {/* Cards Grid - 2x2 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {PAINT_PROTECTION_SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Section III: Care Plans (Membership) ────────────────────────────────────

function CarePlansSection() {
  return (
    <section id="membership" className="relative pt-28 pb-20 md:pt-36 md:pb-28 bg-gradient-to-b from-neutral-900/40 via-neutral-950 to-neutral-950 border-t border-white/5 scroll-mt-16 md:scroll-mt-20">
      {/* Background radial glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-red-950/25 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            Monthly <span className="text-red-500">Care Plans</span>
          </h2>
          <p className="text-neutral-400 text-base md:text-lg max-w-2xl mx-auto">
            Hassle-free recurring car maintenance delivered right to your doorstep. Keep your car pristine month after month.
          </p>
        </div>

        {/* Subscription Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {CARE_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`relative flex flex-col rounded-2xl p-8 transition-all duration-300 ${
                plan.highlight
                  ? "bg-neutral-900 border-2 border-red-600 red-glow shadow-2xl shadow-red-950/40 md:-translate-y-3"
                  : "bg-neutral-900/90 border border-white/10 hover:border-red-600/30 hover:-translate-y-1"
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-red-600 text-white text-[11px] font-bold uppercase tracking-widest px-4 py-1 rounded-full shadow-lg">
                  {plan.badge}
                </div>
              )}

              {/* Tier & Name */}
              <div className="mb-6">
                <span className="text-red-500 text-xs font-bold uppercase tracking-widest">
                  {plan.tier}
                </span>
                <h3 className="text-white text-2xl font-black mt-1">{plan.name}</h3>
                <p className="text-neutral-400 text-xs mt-2 leading-relaxed">
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-1 mb-8 pb-6 border-b border-white/10">
                <span className="text-4xl md:text-5xl font-black text-white tracking-tight">
                  {plan.price}
                </span>
                <span className="text-neutral-400 text-sm font-medium">
                  {plan.period}
                </span>
              </div>

              {/* Feature List */}
              <ul className="space-y-3 mb-8 flex-1">
                {plan.includes.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-neutral-300">
                    <CheckCircle2 size={16} className="text-red-500 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a
                href={"https://wa.me/916281984964?text=" + encodeURIComponent("Hi Pristinix, I am looking to book the " + plan.name + " package. Can you share the details?")}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-2 w-full font-bold text-sm py-4 rounded-xl transition-all duration-200 ${
                  plan.highlight
                    ? "bg-red-600 hover:bg-red-700 text-white red-glow-sm hover:scale-105 active:scale-95"
                    : "bg-neutral-800 hover:bg-red-600 text-white hover:text-white"
                }`}
              >
                <MessageCircle size={16} />
                Book Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Testimonial Section ──────────────────────────────────────────────────────

function TestimonialsSection() {
  const testimonials = [
    {
      name: "Rahul M.",
      car: "Honda City",
      text: "Absolutely stunned by the results. My car looked like it just rolled out of the showroom. Will book again!",
      rating: 5,
    },
    {
      name: "Priya S.",
      car: "Maruti Swift",
      text: "Super convenient — they came right to my apartment. Interior deep clean was worth every rupee!",
      rating: 5,
    },
    {
      name: "Aditya K.",
      car: "Hyundai Creta",
      text: "Professional team, premium products, and the complete detailing package left my SUV spotless.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-neutral-950 relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/30 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-red-500 text-xs font-bold uppercase tracking-widest mb-4">
            <span className="w-8 h-px bg-red-600" />
            What Our Clients Say
            <span className="w-8 h-px bg-red-600" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Loved by <span className="text-red-500">Car Enthusiasts</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-neutral-900 border border-white/5 rounded-2xl p-6 hover:border-red-600/20 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="text-red-500 fill-red-500"
                  />
                ))}
              </div>
              <p className="text-neutral-300 text-sm leading-relaxed mb-5">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-red-600/20 border border-red-600/30 flex items-center justify-center">
                  <span className="text-red-400 text-xs font-bold">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">{t.name}</div>
                  <div className="text-neutral-500 text-xs">{t.car}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Contact / CTA Banner ─────────────────────────────────────────────────────

function ContactCTA() {
  return (
    <section id="contact" className="py-20 relative overflow-hidden border-t border-white/5">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-950/30 via-neutral-950 to-neutral-950" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-600/40 to-transparent" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 text-red-500 text-xs font-bold uppercase tracking-widest mb-6">
            <span className="w-8 h-px bg-red-600" />
            Ready to Book?
            <span className="w-8 h-px bg-red-600" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-5 leading-tight">
            Your Car Deserves <br />
            <span className="text-red-500">The Best Care</span>
          </h2>
          <p className="text-neutral-400 text-base md:text-lg mb-10 max-w-xl mx-auto">
            Book in seconds via WhatsApp. We'll confirm your slot and arrive on
            time at your location.
          </p>

          <a
            href={buildWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-10 py-5 rounded-2xl transition-all duration-200 red-glow hover:scale-105 active:scale-95"
          >
            <MessageCircle size={22} />
            Book on WhatsApp
            <ArrowRight size={20} />
          </a>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12 flex-wrap">
            <a
              href="tel:+916281984964"
              className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors text-sm"
            >
              <Phone size={15} className="text-red-500" />
              +91 62819 84964
            </a>
            <a
              href="mailto:pristinixdoorstepdetailing@gmail.com"
              className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors text-sm"
            >
              <Mail size={15} className="text-red-500" />
              pristinixdoorstepdetailing@gmail.com
            </a>
            <a
              href="https://www.instagram.com/pristinix.in"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors text-sm"
            >
              <Instagram size={15} className="text-red-500" />
              @pristinix.in
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 my-12" />

        {/* Find Us Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Column 1: Address Details */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
            <h3 className="text-white text-2xl font-black">Visit Our Studio</h3>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-md">
              13-3-506/320/56, Sant Dhor Kakkayya Marg, MCH Colony, Jiyaguda, Hyderabad, Telangana 500006
            </p>
            <a
              href="https://maps.app.goo.gl/FHiPsdF7NBzBTnoa6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-sm px-6 py-3 rounded-lg transition-all duration-200 red-glow-sm hover:scale-105 active:scale-95"
            >
              Get Directions
              <ArrowRight size={16} />
            </a>
          </div>

          {/* Column 2: Embedded Google Map */}
          <div className="w-full h-64 sm:h-80 rounded-xl border border-neutral-800 overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3446.0768620717786!2d78.45052599906921!3d17.361861463078185!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb97be7624765f%3A0xacdad0ffc6c73514!2s13-3-506%2F320%2F56%2C%20Sant%20Dhor%20Kakkayya%20Marg%2C%20MCH%20Colony%2C%20Jiyaguda%2C%20Hyderabad%2C%20Telangana%20500006!5e1!3m2!1sen!2sin!4v1784647665705!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center md:items-start">
          {/* Left Side: Logo & Links */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <a href="#" className="flex items-center transition-transform hover:scale-105">
              <Image
                src="/logo.png"
                alt="Pristinix Logo"
                width={140}
                height={45}
                className="h-10 w-auto object-contain"
              />
            </a>
            
            {/* Tagline/Description */}
            <p className="text-neutral-400 text-sm max-w-sm text-center md:text-left">
              Premium doorstep car detailing and washing services. Hand-crafted shine right at your home or office.
            </p>

            {/* Links */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
              <a
                href="mailto:pristinixdoorstepdetailing@gmail.com"
                className="flex items-center gap-1.5 text-neutral-400 hover:text-white text-xs transition-colors"
              >
                <Mail size={14} className="text-red-500" />
                pristinixdoorstepdetailing@gmail.com
              </a>
              <a
                href="https://www.instagram.com/pristinix.in"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-neutral-400 hover:text-white text-xs transition-colors"
              >
                <Instagram size={14} className="text-red-500" />
                pristinix.in
              </a>
            </div>
          </div>

          {/* Right Side: Scan to Connect */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <h4 className="text-white text-sm font-semibold tracking-wider uppercase text-center md:text-right">
              Scan to Connect
            </h4>
            <div className="flex flex-col sm:flex-row gap-4 items-center mt-1">
              {/* QR Code 1: Google Review */}
              <a
                href="https://search.google.com/local/writereview?placeid=ChIJUz6iXACXyzsRDoa-P_QP1hY&source=g.page.m.qc._&laa=gpay-review-qr-tab-qr-code"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-1.5 group cursor-pointer"
              >
                <div className="bg-white p-1 rounded-lg shadow-lg border border-white/10 group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src="/gmb-qr.jpg"
                    alt="Scan for Google Review"
                    width={112}
                    height={112}
                    className="w-28 h-28 object-contain rounded-md"
                  />
                </div>
                <span className="text-[10px] text-neutral-400 group-hover:text-white font-medium tracking-wide transition-colors">
                  Rate Us on Google
                </span>
              </a>

              {/* QR Code 2: Instagram */}
              <a
                href="https://www.instagram.com/pristinix.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-1.5 group cursor-pointer"
              >
                <div className="bg-white p-1 rounded-lg shadow-lg border border-white/10 group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src="/insta-qr.jpg"
                    alt="Scan for Instagram"
                    width={112}
                    height={112}
                    className="w-28 h-28 object-contain rounded-md"
                  />
                </div>
                <span className="text-[10px] text-neutral-400 group-hover:text-white font-medium tracking-wide transition-colors">
                  Follow @pristinix.in
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 my-8" />

        {/* Bottom Bar: Copyright & Developer Credit */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 text-neutral-500 text-xs text-center sm:text-left">
            <span>© {new Date().getFullYear()} Pristinix. All rights reserved.</span>
            <span className="hidden sm:inline text-neutral-700">|</span>
            <span>
              Designed & Developed by{" "}
              <a
                href="https://www.instagram.com/code.craft_agency/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-white transition-colors duration-300 font-medium"
              >
                CodeCraft Agency
              </a>
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#services" className="text-neutral-500 hover:text-white text-xs transition-colors">
              Services
            </a>
            <a href="#paint-protection" className="text-neutral-500 hover:text-white text-xs transition-colors">
              Paint Protection
            </a>
            <a href="#membership" className="text-neutral-500 hover:text-white text-xs transition-colors">
              Care Plans
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── Floating WhatsApp Button ─────────────────────────────────────────────────

function FloatingWhatsApp() {
  return (
    <a
      href={buildWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-red-600 hover:bg-red-700 text-white rounded-full flex items-center justify-center pulse-btn hover:scale-110 active:scale-95 transition-transform duration-200"
    >
      <MessageCircle size={26} />
    </a>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <FeaturesStrip />
      <ServicesSection />
      <PaintProtectionSection />
      <CarePlansSection />
      <TestimonialsSection />
      <ContactCTA />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
