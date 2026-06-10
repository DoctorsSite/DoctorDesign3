import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Lenis } from "../_libs/lenis.mjs";
import { u as useScroll, m as motion, a as useSpring, b as useTransform } from "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const doctorPortrait = "/assets/doctor-portrait-rBCYxUZJ.jpg";
const edu1 = "/assets/edu-1-DPn0zrNF.jpg";
const edu2 = "/assets/edu-2-Bkcxfb-6.jpg";
const edu3 = "/assets/edu-3-CnTS0ZWo.jpg";
const edu4 = "/assets/edu-4-CC9z-7jd.jpg";
const research1 = "/assets/research-1-CFz-Pama.jpg";
const award1 = "/assets/award-1-CFvlWnOi.jpg";
const award2 = "/assets/award-2-Cx2YsOmK.jpg";
const award3 = "/assets/award-3-B-RpgUrB.jpg";
const award4 = "/assets/award-4-CMPAKZQo.jpg";
const patient1 = "/assets/patient-1-BV54ncVy.jpg";
const patient2 = "/assets/patient-2-BkDNhFJ0.jpg";
const patient3 = "/assets/patient-3-7wYCV92h.jpg";
const show1 = "/assets/show-1-B3jXfDqv.jpg";
const show2 = "/assets/show-2-CcFVbbS_.jpg";
const show3 = "/assets/show-3-D_uWrJVw.jpg";
const show4 = "/assets/show-4-sfyXDqVp.jpg";
const show5 = "/assets/show-5-DIKr7nxZ.jpg";
const show6 = "/assets/show-6-BKWAuODk.jpg";
function SmoothScroll() {
  reactExports.useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, smoothWheel: true });
    let raf = 0;
    const tick = (t) => {
      lenis.raf(t);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);
  return null;
}
const DnaHelix = reactExports.lazy(() => import("./DnaHelix-B1ZBUAt1.mjs"));
const fadeUp = {
  hidden: {
    opacity: 0,
    y: 32
  },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      delay: i * 0.08,
      ease: [0.22, 1, 0.36, 1]
    }
  })
};
function Nav() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "fixed top-0 inset-x-0 z-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-10 py-5 flex items-center justify-between", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#top", className: "flex items-center gap-2 text-sm tracking-[0.2em] uppercase", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block size-1.5 rounded-full bg-gold" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-base", children: "Dr. Arjun Rao" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden md:flex items-center gap-8 text-xs tracking-[0.18em] uppercase text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#foundation", className: "hover:text-foreground transition", children: "Foundation" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#expertise", className: "hover:text-foreground transition", children: "Expertise" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#impact", className: "hover:text-foreground transition", children: "Impact" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#consult", className: "hover:text-foreground transition", children: "Consult" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#consult", className: "text-xs tracking-[0.2em] uppercase px-4 py-2.5 rounded-full glass hover:bg-gold/15 transition", children: "Book Consultation" })
  ] }) });
}
function ScrollProgress() {
  const {
    scrollYProgress
  } = useScroll();
  const w = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { style: {
    scaleX: w
  }, className: "fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-gold via-helix-a to-helix-b origin-left z-[60]" });
}
function SectionLabel({
  index,
  title
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: "hidden", whileInView: "show", viewport: {
    once: true,
    margin: "-100px"
  }, variants: fadeUp, className: "flex items-baseline gap-4 text-xs tracking-[0.3em] uppercase text-muted-foreground mb-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gold-text font-mono", children: index }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-10 bg-foreground/20" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: title })
  ] });
}
function StickyHelix({
  scrollRef
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 pointer-events-none z-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-y-0 left-1/2 -translate-x-1/2 w-[min(900px,90vw)] rounded-[3rem]\n        bg-white/30 backdrop-blur-[2px] border border-foreground/5 shadow-[0_30px_120px_-40px_rgba(0,0,0,0.25)]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-95", children: /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: null, children: /* @__PURE__ */ jsxRuntimeExports.jsx(DnaHelix, { className: "h-full w-full", scrollProgress: scrollRef }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,var(--color-background)_85%)]" })
  ] });
}
function Hero() {
  const {
    scrollYProgress
  } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.2], [0, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "top", className: "relative min-h-screen flex items-center pt-32 pb-20 px-6 lg:px-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { style: {
      y,
      opacity
    }, className: "mx-auto max-w-7xl w-full grid lg:grid-cols-12 gap-10 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: "hidden", animate: "show", variants: fadeUp, className: "text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gold-text", children: "The DNA of Excellence" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.h1, { initial: "hidden", animate: "show", custom: 1, variants: fadeUp, className: "font-display text-[14vw] sm:text-[10vw] lg:text-[7.5vw] leading-[0.95] tracking-tight", children: [
          "Dr. Arjun",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic gold-text", children: "Rao" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { initial: "hidden", animate: "show", custom: 2, variants: fadeUp, className: "mt-8 text-base md:text-lg text-muted-foreground max-w-xl", children: "Internal Medicine Specialist — 15+ years of excellence in diabetes, hypertension, thyroid, and preventive care." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { initial: "hidden", animate: "show", custom: 3, variants: fadeUp, className: "mt-10 font-display italic text-xl md:text-2xl max-w-lg text-foreground/85", children: "“Every life changed becomes part of the legacy.”" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: "hidden", animate: "show", custom: 4, variants: fadeUp, className: "mt-10 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#consult", className: "group relative inline-flex items-center gap-3 rounded-full bg-foreground text-background px-7 py-3.5 text-sm tracking-[0.2em] uppercase hover:opacity-90 transition", children: [
            "Book Consultation",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block transition-transform group-hover:translate-x-1", children: "→" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#foundation", className: "inline-flex items-center gap-3 rounded-full glass px-7 py-3.5 text-sm tracking-[0.2em] uppercase hover:bg-foreground/5 transition", children: "Explore Journey" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
        opacity: 0,
        scale: 0.96
      }, animate: {
        opacity: 1,
        scale: 1
      }, transition: {
        duration: 1.4,
        ease: [0.22, 1, 0.36, 1]
      }, className: "lg:col-span-5 relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[3/4] max-w-md mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-gold/30 via-transparent to-helix-b/20 blur-2xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-full w-full overflow-hidden rounded-[1.75rem] glass", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: doctorPortrait, alt: "Dr. Arjun Rao, Internal Medicine Specialist", className: "h-full w-full object-cover", width: 896, height: 1152 }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-background/95 to-transparent", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] tracking-[0.3em] uppercase text-muted-foreground", children: "MBBS · MD Internal Medicine" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-lg mt-1", children: "Dr. Arjun Rao" })
          ] })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.3em] uppercase text-muted-foreground flex flex-col items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Scroll" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { animate: {
        y: [0, 8, 0]
      }, transition: {
        duration: 2,
        repeat: Infinity
      }, className: "h-8 w-px bg-foreground/30" })
    ] })
  ] });
}
function FoundationSection() {
  const items = [{
    year: "2008",
    title: "MBBS",
    org: "Osmania Medical College",
    note: "Foundations in clinical medicine",
    img: edu1
  }, {
    year: "2013",
    title: "MD Internal Medicine",
    org: "KIMS Hyderabad",
    note: "Specialization & residency",
    img: edu2
  }, {
    year: "2016",
    title: "Advanced Certifications",
    org: "Endocrinology & Diabetology",
    note: "Continued education",
    img: edu3
  }, {
    year: "2020",
    title: "Fellowship",
    org: "Preventive & Lifestyle Medicine",
    note: "Modern integrative care",
    img: edu4
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "foundation", className: "relative py-32 px-6 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { index: "02", title: "The Foundation" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.h2, { initial: "hidden", whileInView: "show", viewport: {
      once: true
    }, variants: fadeUp, className: "font-display text-5xl md:text-7xl max-w-4xl", children: [
      "Each strand begins with ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic gold-text", children: "knowledge" }),
      "."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-20 grid md:grid-cols-2 gap-6", children: items.map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: "hidden", whileInView: "show", viewport: {
      once: true,
      margin: "-50px"
    }, variants: fadeUp, custom: i, className: "group glass rounded-2xl overflow-hidden hover:-translate-y-1 transition-transform duration-500", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[16/10] overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: it.img, alt: it.title, loading: "lazy", width: 800, height: 500, className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs tracking-widest gold-text", children: it.year }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-2 rounded-full bg-gold shadow-[0_0_20px] shadow-gold/60" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 font-display text-2xl", children: it.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-sm text-muted-foreground", children: it.org }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 text-sm text-foreground/70", children: it.note })
      ] })
    ] }, it.year)) })
  ] }) });
}
function EvolutionSection() {
  const milestones = [{
    k: "15+",
    v: "Years of Practice"
  }, {
    k: "3",
    v: "Hospital Affiliations"
  }, {
    k: "12",
    v: "Leadership Roles"
  }, {
    k: "40+",
    v: "Conferences"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-32 px-6 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { index: "03", title: "The Evolution" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.h2, { initial: "hidden", whileInView: "show", viewport: {
      once: true
    }, variants: fadeUp, className: "font-display text-5xl md:text-7xl max-w-4xl", children: [
      "A career composed in ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic gold-text", children: "precision" }),
      "."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-foreground/10 rounded-2xl overflow-hidden glass", children: milestones.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: "hidden", whileInView: "show", viewport: {
      once: true
    }, variants: fadeUp, custom: i, className: "p-10 bg-background/60 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-5xl md:text-6xl gold-text", children: m.k }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 text-[11px] tracking-[0.25em] uppercase text-muted-foreground", children: m.v })
    ] }, m.v)) })
  ] }) });
}
function ExpertiseSection() {
  const items = [{
    t: "Diabetes Care",
    d: "Personalized management plans for Type 1, Type 2 and prediabetes."
  }, {
    t: "Hypertension Management",
    d: "Long-term cardiovascular risk reduction and monitoring."
  }, {
    t: "Thyroid Disorders",
    d: "Hypo/hyper-thyroid evaluation and balanced treatment."
  }, {
    t: "Preventive Healthcare",
    d: "Annual screenings, executive health and risk profiling."
  }, {
    t: "Lifestyle Medicine",
    d: "Nutrition, sleep, movement and stress as medicine."
  }, {
    t: "General Consultation",
    d: "Comprehensive adult internal medicine consultation."
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "expertise", className: "relative py-32 px-6 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { index: "04", title: "Areas of Expertise" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.h2, { initial: "hidden", whileInView: "show", viewport: {
      once: true
    }, variants: fadeUp, className: "font-display text-5xl md:text-7xl max-w-4xl", children: [
      "Six branches. ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic gold-text", children: "One philosophy." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: items.map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: "hidden", whileInView: "show", viewport: {
      once: true,
      margin: "-50px"
    }, variants: fadeUp, custom: i, className: "group glass rounded-2xl p-8 relative overflow-hidden hover:bg-white/85 transition", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-20 -right-20 size-40 rounded-full bg-gold/15 blur-3xl opacity-0 group-hover:opacity-100 transition" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono text-xs gold-text", children: [
        "0",
        i + 1
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 font-display text-2xl", children: it.t }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 text-sm text-foreground/70 leading-relaxed", children: it.d }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 text-[11px] tracking-[0.25em] uppercase text-muted-foreground flex items-center gap-2", children: [
        "Learn more ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "transition-transform group-hover:translate-x-1", children: "→" })
      ] })
    ] }, it.t)) })
  ] }) });
}
function ResearchSection() {
  const papers = [{
    t: "Glycemic Variability in Type 2 Diabetes",
    j: "Indian Journal of Endocrinology",
    y: "2022"
  }, {
    t: "Lifestyle Intervention for Hypertension",
    j: "JAPI",
    y: "2021"
  }, {
    t: "Thyroid Dysfunction in Adults: A Review",
    j: "Asian Med. Review",
    y: "2020"
  }, {
    t: "Preventive Care Models in Urban India",
    j: "Public Health Today",
    y: "2019"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-32 px-6 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { index: "05", title: "Research & Knowledge" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.h2, { initial: "hidden", whileInView: "show", viewport: {
      once: true
    }, variants: fadeUp, className: "font-display text-5xl md:text-7xl max-w-4xl", children: [
      "Inquiry as a ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic gold-text", children: "practice" }),
      "."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-20 grid lg:grid-cols-5 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: "hidden", whileInView: "show", viewport: {
        once: true
      }, variants: fadeUp, className: "lg:col-span-2 glass rounded-2xl overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: research1, alt: "Research and publications", loading: "lazy", width: 800, height: 800, className: "h-full w-full object-cover min-h-[280px]" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-3 grid gap-4", children: papers.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.a, { href: "#", initial: "hidden", whileInView: "show", viewport: {
        once: true
      }, variants: fadeUp, custom: i, className: "group glass rounded-2xl p-6 flex items-center gap-6 hover:bg-white/85 transition", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-14 rounded-xl bg-gradient-to-br from-gold/30 to-helix-b/30 flex items-center justify-center font-mono text-[10px]", children: "PDF" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-lg leading-snug", children: p.t }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground mt-1", children: [
            p.j,
            " · ",
            p.y
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition", children: "→" })
      ] }, p.t)) })
    ] })
  ] }) });
}
function ImpactSection() {
  const stats = [{
    k: "10,000+",
    v: "Patients Treated"
  }, {
    k: "15+",
    v: "Years of Experience"
  }, {
    k: "98%",
    v: "Patient Satisfaction"
  }, {
    k: "4.9",
    v: "Average Rating"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "impact", className: "relative py-40 px-6 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { index: "06", title: "Patient Impact" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.h2, { initial: "hidden", whileInView: "show", viewport: {
      once: true
    }, variants: fadeUp, className: "font-display text-5xl md:text-8xl max-w-5xl mx-auto leading-[0.95]", children: [
      "Every particle is a ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic gold-text", children: "life" }),
      "."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-24 grid grid-cols-2 md:grid-cols-4 gap-10", children: stats.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: "hidden", whileInView: "show", viewport: {
      once: true
    }, variants: fadeUp, custom: i, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-5xl md:text-7xl gold-text", children: s.k }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 text-[11px] tracking-[0.25em] uppercase text-muted-foreground", children: s.v })
    ] }, s.v)) })
  ] }) });
}
function AwardsSection() {
  const awards = [{
    t: "Excellence in Internal Medicine",
    y: "2023",
    org: "Telangana Medical Council",
    img: award1
  }, {
    t: "Distinguished Speaker",
    y: "2022",
    org: "API National Conference",
    img: award2
  }, {
    t: "Best Research Paper",
    y: "2021",
    org: "Endocrine Society of India",
    img: award3
  }, {
    t: "Patient Choice Award",
    y: "2020",
    org: "Practo Health",
    img: award4
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-32 px-6 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { index: "07", title: "Awards & Recognition" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.h2, { initial: "hidden", whileInView: "show", viewport: {
      once: true
    }, variants: fadeUp, className: "font-display text-5xl md:text-7xl max-w-4xl", children: [
      "A quiet wall of ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic gold-text", children: "trust" }),
      "."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-20 grid md:grid-cols-2 gap-6", children: awards.map((a, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: "hidden", whileInView: "show", viewport: {
      once: true
    }, variants: fadeUp, custom: i, className: "group glass rounded-2xl overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-2 aspect-square overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: a.img, alt: a.t, loading: "lazy", width: 400, height: 400, className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-3 p-7 flex flex-col justify-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xs gold-text", children: a.y }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 font-display text-xl leading-snug", children: a.t }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground mt-2", children: a.org })
      ] })
    ] }) }, a.t)) })
  ] }) });
}
function StoriesSection() {
  const stories = [{
    n: "Ramesh K.",
    c: "Diabetes Care",
    q: "I went from insulin dependence to control. Dr. Rao listened like no one had.",
    img: patient1
  }, {
    n: "Priya S.",
    c: "Thyroid Disorders",
    q: "Years of fatigue, finally explained — and finally treated with care.",
    img: patient2
  }, {
    n: "Anil M.",
    c: "Preventive Healthcare",
    q: "His annual screening caught something early. It changed my family's future.",
    img: patient3
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-32 px-6 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { index: "08", title: "Success Stories" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.h2, { initial: "hidden", whileInView: "show", viewport: {
      once: true
    }, variants: fadeUp, className: "font-display text-5xl md:text-7xl max-w-4xl", children: [
      "Stories from ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic gold-text", children: "the helix" }),
      "."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-20 grid md:grid-cols-3 gap-6", children: stories.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: "hidden", whileInView: "show", viewport: {
      once: true
    }, variants: fadeUp, custom: i, className: "glass rounded-2xl p-8 animate-float", style: {
      animationDelay: `${i * 0.6}s`
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: s.img, alt: s.n, loading: "lazy", width: 120, height: 120, className: "size-16 rounded-full object-cover ring-2 ring-gold/40 mb-6" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display italic text-lg leading-relaxed", children: [
        "“",
        s.q,
        "”"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 hairline pt-4 flex items-center justify-between text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tracking-widest uppercase", children: s.n }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: s.c })
      ] })
    ] }, s.n)) })
  ] }) });
}
function PhilosophySection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-48 px-6 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { index: "09", title: "The Philosophy" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.blockquote, { initial: "hidden", whileInView: "show", viewport: {
      once: true
    }, variants: fadeUp, className: "font-display text-3xl md:text-5xl leading-[1.2] italic text-foreground/95", children: [
      "“Medicine is not only about treating illness. ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", { className: "hidden md:block" }),
      "It is about helping people ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gold-text not-italic", children: "live better lives" }),
      ".”"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: "hidden", whileInView: "show", viewport: {
      once: true
    }, variants: fadeUp, custom: 1, className: "mt-10 text-xs tracking-[0.3em] uppercase text-muted-foreground", children: "— Dr. Arjun Rao" })
  ] }) });
}
function ShowcaseSection() {
  const items = [{
    t: "Conference Keynote",
    img: show1
  }, {
    t: "Clinic Environment",
    img: show2
  }, {
    t: "Media Interview",
    img: show3
  }, {
    t: "Speaking Engagement",
    img: show4
  }, {
    t: "Award Ceremony",
    img: show5
  }, {
    t: "Research Lab",
    img: show6
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-32 px-6 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { index: "10", title: "Personal Brand" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.h2, { initial: "hidden", whileInView: "show", viewport: {
      once: true
    }, variants: fadeUp, className: "font-display text-5xl md:text-7xl max-w-4xl", children: [
      "A life in ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic gold-text", children: "practice" }),
      "."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-20 grid md:grid-cols-3 gap-5", children: items.map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
      opacity: 0,
      y: 40
    }, whileInView: {
      opacity: 1,
      y: 0
    }, viewport: {
      once: true
    }, transition: {
      duration: 0.8,
      delay: i * 0.06,
      ease: [0.22, 1, 0.36, 1]
    }, className: `group relative overflow-hidden rounded-2xl glass ${i % 3 === 1 ? "md:mt-12" : ""}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "aspect-[4/5] w-full relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: it.img, alt: it.t, loading: "lazy", width: 800, height: 1e3, className: "absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-end p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] tracking-[0.3em] uppercase text-muted-foreground", children: "Showcase" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-xl mt-1", children: it.t })
      ] }) })
    ] }) }, it.t)) })
  ] }) });
}
function ConsultSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "consult", className: "relative py-32 px-6 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { index: "11", title: "Consultation" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: "hidden", whileInView: "show", viewport: {
        once: true
      }, variants: fadeUp, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-5xl md:text-7xl leading-[0.95]", children: [
          "Schedule your ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic gold-text", children: "consultation" }),
          "."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-muted-foreground max-w-md", children: "For new patients and returning visitors. Reserve a time that suits you — clinic or video." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 space-y-5 text-sm", children: [["Phone", "+91 98 4567 1234"], ["Email", "consult@arjunrao.md"], ["Clinic", "Jubilee Hills, Hyderabad, India"], ["Hours", "Mon–Sat · 10:00 – 19:00"], ["Consultation Fee", "₹ 1,200"]].map(([k, v]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline justify-between hairline pt-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] tracking-[0.25em] uppercase text-muted-foreground", children: k }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-lg", children: v })
        ] }, k)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.form, { initial: "hidden", whileInView: "show", viewport: {
        once: true
      }, variants: fadeUp, custom: 1, onSubmit: (e) => e.preventDefault(), className: "glass rounded-3xl p-8 md:p-10 space-y-5", children: [
        [{
          l: "Full Name",
          t: "text",
          p: "Your full name"
        }, {
          l: "Phone",
          t: "tel",
          p: "+91 ..."
        }, {
          l: "Email",
          t: "email",
          p: "you@example.com"
        }].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] tracking-[0.25em] uppercase text-muted-foreground", children: f.l }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: f.t, placeholder: f.p, className: "mt-2 w-full bg-transparent hairline pt-3 pb-3 text-lg placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold transition" })
        ] }, f.l)),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] tracking-[0.25em] uppercase text-muted-foreground", children: "Reason" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { rows: 3, placeholder: "Briefly describe your concern", className: "mt-2 w-full bg-transparent hairline pt-3 pb-3 placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold transition" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "mt-2 w-full rounded-full bg-foreground text-background py-4 text-sm tracking-[0.25em] uppercase hover:opacity-90 transition", children: "Request Appointment" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-20 hairline pt-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-xs tracking-[0.2em] uppercase text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Dr. Arjun Rao"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Crafted with care · The DNA of Excellence" })
    ] })
  ] }) });
}
function Loader({
  done
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
    opacity: 1
  }, animate: {
    opacity: done ? 0 : 1
  }, transition: {
    duration: 0.8,
    ease: "easeInOut"
  }, style: {
    pointerEvents: done ? "none" : "auto"
  }, className: "fixed inset-0 z-[100] bg-background flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-3xl gold-text", children: "DR. ARJUN RAO" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 text-[10px] tracking-[0.4em] uppercase text-muted-foreground", children: "The DNA of Excellence" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 mx-auto h-px w-40 bg-foreground/10 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
      x: "-100%"
    }, animate: {
      x: "100%"
    }, transition: {
      duration: 1.6,
      repeat: Infinity,
      ease: "easeInOut"
    }, className: "h-full w-1/2 bg-gold" }) })
  ] }) });
}
function Index() {
  const {
    scrollYProgress
  } = useScroll();
  const scrollRef = reactExports.useRef({
    current: 0
  });
  const [ready, setReady] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const unsub = scrollYProgress.on("change", (v) => {
      scrollRef.current.current = v;
    });
    const t = setTimeout(() => setReady(true), 1100);
    return () => {
      unsub();
      clearTimeout(t);
    };
  }, [scrollYProgress]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, { done: ready }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SmoothScroll, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollProgress, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(StickyHelix, { scrollRef: scrollRef.current }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "relative z-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FoundationSection, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(EvolutionSection, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ExpertiseSection, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ResearchSection, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ImpactSection, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AwardsSection, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StoriesSection, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(PhilosophySection, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ShowcaseSection, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ConsultSection, {})
    ] })
  ] });
}
export {
  Index as component
};
