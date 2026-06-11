import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";
import doctorPortrait from "@/assets/doctor-portrait.jpg";
import edu1 from "@/assets/edu-1.jpg";
import edu2 from "@/assets/edu-2.jpg";
import edu3 from "@/assets/edu-3.jpg";
import edu4 from "@/assets/edu-4.jpg";
import research1 from "@/assets/research-1.jpg";
import award1 from "@/assets/award-1.jpg";
import award2 from "@/assets/award-2.jpg";
import award3 from "@/assets/award-3.jpg";
import award4 from "@/assets/award-4.jpg";
import patient1 from "@/assets/patient-1.jpg";
import patient2 from "@/assets/patient-2.jpg";
import patient3 from "@/assets/patient-3.jpg";
import show1 from "@/assets/show-1.jpg";
import show2 from "@/assets/show-2.jpg";
import show3 from "@/assets/show-3.jpg";
import show4 from "@/assets/show-4.jpg";
import show5 from "@/assets/show-5.jpg";
import show6 from "@/assets/show-6.jpg";
import SmoothScroll from "@/components/SmoothScroll";

const DnaHelix = lazy(() => import("@/components/DnaHelix"));

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dr. Arjun Rao — The DNA of Excellence" },
      { name: "description", content: "Internal Medicine Specialist · 15+ years of excellence. A personal brand experience by Dr. Arjun Rao." },
      { property: "og:title", content: "Dr. Arjun Rao — The DNA of Excellence" },
      { property: "og:description", content: "Every life changed becomes part of the legacy." },
    ],
  }),
  component: Index,
});

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.9, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as const } }),
};

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { href: "#foundation", label: "Foundation" },
    { href: "#expertise", label: "Expertise" },
    { href: "#impact", label: "Impact" },
    { href: "#consult", label: "Consult" },
  ];
  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-5 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2 text-sm tracking-[0.2em] uppercase">
            <span className="inline-block size-1.5 rounded-full bg-gold" />
            <span className="font-display text-base">Dr. Arjun Rao</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-xs tracking-[0.18em] uppercase text-muted-foreground">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-foreground transition">{l.label}</a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a href="#consult" className="hidden md:inline-flex text-xs tracking-[0.2em] uppercase px-4 py-2.5 rounded-full glass hover:bg-gold/15 transition">
              Book Consultation
            </a>
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="md:hidden rounded-full glass p-2.5 text-muted-foreground hover:text-foreground transition"
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-10 md:hidden"
        >
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="absolute top-5 right-6 rounded-full glass p-2.5 text-muted-foreground hover:text-foreground transition"
          >
            <X size={18} />
          </button>
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="font-display text-2xl tracking-[0.2em] uppercase text-foreground/80 hover:text-foreground transition"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#consult"
            onClick={() => setMenuOpen(false)}
            className="mt-4 text-sm tracking-[0.2em] uppercase px-8 py-3.5 rounded-full glass hover:bg-gold/15 transition gold-text"
          >
            Book Consultation
          </a>
        </motion.div>
      )}
    </>
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const w = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  return (
    <motion.div
      style={{ scaleX: w }}
      className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-gold via-helix-a to-helix-b origin-left z-[60]"
    />
  );
}

function SectionLabel({ index, title }: { index: string; title: string }) {
  return (
    <motion.div
      initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}
      variants={fadeUp}
      className="flex items-baseline gap-4 text-xs tracking-[0.3em] uppercase text-muted-foreground mb-8"
    >
      <span className="gold-text font-mono">{index}</span>
      <span className="h-px w-10 bg-foreground/20" />
      <span>{title}</span>
    </motion.div>
  );
}

function StickyHelix({ scrollRef }: { scrollRef: { current: number } }) {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* DNA helix at low opacity — ambient background texture, not the star */}
      <div className="absolute inset-0 opacity-30">
        <Suspense fallback={null}>
          <DnaHelix className="h-full w-full" scrollProgress={scrollRef} />
        </Suspense>
      </div>
      {/* Strong vignette: transparent centre shows a hint, edges fully masked */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_65%_75%_at_50%_50%,transparent_0%,transparent_35%,var(--color-background)_88%)]" />
    </div>
  );
}

function Hero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.2], [0, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  return (
    <section id=”top” className=”relative min-h-screen flex items-center pt-28 pb-20 px-6 lg:px-10”>
      <motion.div style={{ y, opacity }} className=”mx-auto max-w-7xl w-full grid lg:grid-cols-12 gap-8 lg:gap-10 items-center”>
        <div className=”lg:col-span-7”>
          <motion.div initial=”hidden” animate=”show” variants={fadeUp} className=”text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6”>
            <span className=”gold-text”>The DNA of Excellence</span>
          </motion.div>
          <motion.h1
            initial=”hidden” animate=”show” custom={1} variants={fadeUp}
            className=”font-display text-[clamp(3.5rem,14vw,8rem)] sm:text-[10vw] lg:text-[7.5vw] leading-[0.95] tracking-tight”
          >
            Dr. Arjun<br />
            <span className=”italic gold-text”>Rao</span>
          </motion.h1>
          <motion.p initial=”hidden” animate=”show” custom={2} variants={fadeUp} className=”mt-6 text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl”>
            Internal Medicine Specialist — 15+ years of excellence in diabetes, hypertension, thyroid, and preventive care.
          </motion.p>
          <motion.p initial=”hidden” animate=”show” custom={3} variants={fadeUp} className=”mt-6 md:mt-10 font-display italic text-lg md:text-2xl max-w-lg text-foreground/85”>
            “Every life changed becomes part of the legacy.”
          </motion.p>
          <motion.div initial=”hidden” animate=”show” custom={4} variants={fadeUp} className=”mt-8 md:mt-10 flex flex-wrap gap-3”>
            <a href=”#consult” className=”group relative inline-flex items-center gap-3 rounded-full bg-foreground text-background px-6 sm:px-7 py-3 sm:py-3.5 text-xs sm:text-sm tracking-[0.2em] uppercase hover:opacity-90 transition”>
              Book Consultation
              <span className=”inline-block transition-transform group-hover:translate-x-1”>→</span>
            </a>
            <a href=”#foundation” className=”inline-flex items-center gap-3 rounded-full glass px-6 sm:px-7 py-3 sm:py-3.5 text-xs sm:text-sm tracking-[0.2em] uppercase hover:bg-foreground/5 transition”>
              Explore Journey
            </a>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className=”lg:col-span-5 relative”
        >
          <div className=”relative aspect-[3/4] max-w-[320px] sm:max-w-md mx-auto”>
            <div className=”absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-gold/30 via-transparent to-helix-b/20 blur-2xl” />
            <div className=”relative h-full w-full overflow-hidden rounded-[1.5rem] sm:rounded-[1.75rem] glass”>
              <img
                src={doctorPortrait}
                alt=”Dr. Arjun Rao, Internal Medicine Specialist”
                className=”h-full w-full object-cover”
                width={896} height={1152}
              />
              <div className=”absolute inset-x-0 bottom-0 p-4 sm:p-5 bg-gradient-to-t from-background/95 to-transparent”>
                <div className=”text-[10px] tracking-[0.3em] uppercase text-muted-foreground”>MBBS · MD Internal Medicine</div>
                <div className=”font-display text-base sm:text-lg mt-1”>Dr. Arjun Rao</div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.3em] uppercase text-muted-foreground flex flex-col items-center gap-2">
        <span>Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }} className="h-8 w-px bg-foreground/30" />
      </div>
    </section>
  );
}

function FoundationSection() {
  const items = [
    { year: "2008", title: "MBBS", org: "Osmania Medical College", note: "Foundations in clinical medicine", img: edu1 },
    { year: "2013", title: "MD Internal Medicine", org: "KIMS Hyderabad", note: "Specialization & residency", img: edu2 },
    { year: "2016", title: "Advanced Certifications", org: "Endocrinology & Diabetology", note: "Continued education", img: edu3 },
    { year: "2020", title: "Fellowship", org: "Preventive & Lifestyle Medicine", note: "Modern integrative care", img: edu4 },
  ];
  return (
    <section id="foundation" className="relative py-20 md:py-32 px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionLabel index="02" title="The Foundation" />
        <motion.h2 initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="font-display text-4xl md:text-7xl max-w-4xl">
          Each strand begins with <span className="italic gold-text">knowledge</span>.
        </motion.h2>
        <div className="mt-12 md:mt-20 grid md:grid-cols-2 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.year}
              initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp} custom={i}
              className="group glass rounded-2xl overflow-hidden hover:-translate-y-1 transition-transform duration-500"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img src={it.img} alt={it.title} loading="lazy" width={800} height={500}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-5 sm:p-8">
                <div className="flex items-baseline justify-between">
                  <span className="font-mono text-xs tracking-widest gold-text">{it.year}</span>
                  <span className="size-2 rounded-full bg-gold shadow-[0_0_20px] shadow-gold/60" />
                </div>
                <div className="mt-4 font-display text-2xl">{it.title}</div>
                <div className="mt-1 text-sm text-muted-foreground">{it.org}</div>
                <div className="mt-4 text-sm text-foreground/70">{it.note}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EvolutionSection() {
  const milestones = [
    { k: "15+", v: "Years of Practice" },
    { k: "3", v: "Hospital Affiliations" },
    { k: "12", v: "Leadership Roles" },
    { k: "40+", v: "Conferences" },
  ];
  return (
    <section className="relative py-20 md:py-32 px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionLabel index="03" title="The Evolution" />
        <motion.h2 initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="font-display text-4xl md:text-7xl max-w-4xl">
          A career composed in <span className="italic gold-text">precision</span>.
        </motion.h2>
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-foreground/10 rounded-2xl overflow-hidden glass">
          {milestones.map((m, i) => (
            <motion.div
              key={m.v}
              initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} custom={i}
              className="p-10 bg-background/60 text-center"
            >
              <div className="font-display text-5xl md:text-6xl gold-text">{m.k}</div>
              <div className="mt-3 text-[11px] tracking-[0.25em] uppercase text-muted-foreground">{m.v}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExpertiseSection() {
  const items = [
    { t: "Diabetes Care", d: "Personalized management plans for Type 1, Type 2 and prediabetes." },
    { t: "Hypertension Management", d: "Long-term cardiovascular risk reduction and monitoring." },
    { t: "Thyroid Disorders", d: "Hypo/hyper-thyroid evaluation and balanced treatment." },
    { t: "Preventive Healthcare", d: "Annual screenings, executive health and risk profiling." },
    { t: "Lifestyle Medicine", d: "Nutrition, sleep, movement and stress as medicine." },
    { t: "General Consultation", d: "Comprehensive adult internal medicine consultation." },
  ];
  return (
    <section id="expertise" className="relative py-20 md:py-32 px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionLabel index="04" title="Areas of Expertise" />
        <motion.h2 initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="font-display text-4xl md:text-7xl max-w-4xl">
          Six branches. <span className="italic gold-text">One philosophy.</span>
        </motion.h2>
        <div className="mt-12 md:mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.t}
              initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp} custom={i}
              className="group glass rounded-2xl p-6 sm:p-8 relative overflow-hidden hover:bg-muted transition"
            >
              <div className="absolute -top-20 -right-20 size-40 rounded-full bg-gold/15 blur-3xl opacity-0 group-hover:opacity-100 transition" />
              <div className="font-mono text-xs gold-text">0{i + 1}</div>
              <div className="mt-6 font-display text-2xl">{it.t}</div>
              <div className="mt-3 text-sm text-foreground/70 leading-relaxed">{it.d}</div>
              <div className="mt-8 text-[11px] tracking-[0.25em] uppercase text-muted-foreground flex items-center gap-2">
                Learn more <span className="transition-transform group-hover:translate-x-1">→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ResearchSection() {
  const papers = [
    { t: "Glycemic Variability in Type 2 Diabetes", j: "Indian Journal of Endocrinology", y: "2022" },
    { t: "Lifestyle Intervention for Hypertension", j: "JAPI", y: "2021" },
    { t: "Thyroid Dysfunction in Adults: A Review", j: "Asian Med. Review", y: "2020" },
    { t: "Preventive Care Models in Urban India", j: "Public Health Today", y: "2019" },
  ];
  return (
    <section className="relative py-20 md:py-32 px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionLabel index="05" title="Research & Knowledge" />
        <motion.h2 initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="font-display text-4xl md:text-7xl max-w-4xl">
          Inquiry as a <span className="italic gold-text">practice</span>.
        </motion.h2>
        <div className="mt-12 md:mt-20 grid lg:grid-cols-5 gap-6">
          <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
            className="lg:col-span-2 glass rounded-2xl overflow-hidden"
          >
            <img src={research1} alt="Research and publications" loading="lazy" width={800} height={800}
              className="h-full w-full object-cover min-h-[280px]" />
          </motion.div>
          <div className="lg:col-span-3 grid gap-4">
            {papers.map((p, i) => (
              <motion.a
                href="#" key={p.t}
                initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} custom={i}
                className="group glass rounded-2xl p-6 flex items-center gap-6 hover:bg-muted transition"
              >
                <div className="size-14 rounded-xl bg-gradient-to-br from-gold/30 to-helix-b/30 flex items-center justify-center font-mono text-[10px]">
                  PDF
                </div>
                <div className="flex-1">
                  <div className="font-display text-lg leading-snug">{p.t}</div>
                  <div className="text-xs text-muted-foreground mt-1">{p.j} · {p.y}</div>
                </div>
                <span className="opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition">→</span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ImpactSection() {
  const stats = [
    { k: "10,000+", v: "Patients Treated" },
    { k: "15+", v: "Years of Experience" },
    { k: "98%", v: "Patient Satisfaction" },
    { k: "4.9", v: "Average Rating" },
  ];
  return (
    <section id="impact" className="relative py-24 md:py-40 px-6 lg:px-10">
      <div className="mx-auto max-w-7xl text-center">
        <SectionLabel index="06" title="Patient Impact" />
        <motion.h2 initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="font-display text-4xl md:text-8xl max-w-5xl mx-auto leading-[0.95]">
          Every particle is a <span className="italic gold-text">life</span>.
        </motion.h2>
        <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {stats.map((s, i) => (
            <motion.div key={s.v} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} custom={i}>
              <div className="font-display text-5xl md:text-7xl gold-text">{s.k}</div>
              <div className="mt-3 text-[11px] tracking-[0.25em] uppercase text-muted-foreground">{s.v}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AwardsSection() {
  const awards = [
    { t: "Excellence in Internal Medicine", y: "2023", org: "Telangana Medical Council", img: award1 },
    { t: "Distinguished Speaker", y: "2022", org: "API National Conference", img: award2 },
    { t: "Best Research Paper", y: "2021", org: "Endocrine Society of India", img: award3 },
    { t: "Patient Choice Award", y: "2020", org: "Practo Health", img: award4 },
  ];
  return (
    <section className="relative py-20 md:py-32 px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionLabel index="07" title="Awards & Recognition" />
        <motion.h2 initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="font-display text-4xl md:text-7xl max-w-4xl">
          A quiet wall of <span className="italic gold-text">trust</span>.
        </motion.h2>
        <div className="mt-12 md:mt-20 grid md:grid-cols-2 gap-6">
          {awards.map((a, i) => (
            <motion.div
              key={a.t}
              initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} custom={i}
              className="group glass rounded-2xl overflow-hidden"
            >
              <div className="grid grid-cols-5">
                <div className="col-span-2 aspect-square overflow-hidden">
                  <img src={a.img} alt={a.t} loading="lazy" width={400} height={400}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="col-span-3 p-4 sm:p-7 flex flex-col justify-center">
                  <div className="font-mono text-xs gold-text">{a.y}</div>
                  <div className="mt-3 font-display text-xl leading-snug">{a.t}</div>
                  <div className="text-sm text-muted-foreground mt-2">{a.org}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StoriesSection() {
  const stories = [
    { n: "Ramesh K.", c: "Diabetes Care", q: "I went from insulin dependence to control. Dr. Rao listened like no one had.", img: patient1 },
    { n: "Priya S.", c: "Thyroid Disorders", q: "Years of fatigue, finally explained — and finally treated with care.", img: patient2 },
    { n: "Anil M.", c: "Preventive Healthcare", q: "His annual screening caught something early. It changed my family's future.", img: patient3 },
  ];
  return (
    <section className="relative py-20 md:py-32 px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionLabel index="08" title="Success Stories" />
        <motion.h2 initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="font-display text-4xl md:text-7xl max-w-4xl">
          Stories from <span className="italic gold-text">the helix</span>.
        </motion.h2>
        <div className="mt-12 md:mt-20 grid md:grid-cols-3 gap-6">
          {stories.map((s, i) => (
            <motion.div
              key={s.n}
              initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} custom={i}
              className="glass rounded-2xl p-5 sm:p-8 animate-float"
              style={{ animationDelay: `${i * 0.6}s` }}
            >
              <img src={s.img} alt={s.n} loading="lazy" width={120} height={120}
                className="size-16 rounded-full object-cover ring-2 ring-gold/40 mb-6" />
              <p className="font-display italic text-lg leading-relaxed">“{s.q}”</p>
              <div className="mt-8 hairline pt-4 flex items-center justify-between text-xs">
                <span className="tracking-widest uppercase">{s.n}</span>
                <span className="text-muted-foreground">{s.c}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PhilosophySection() {
  return (
    <section className=”relative py-24 md:py-48 px-6 lg:px-10”>
      <div className=”mx-auto max-w-4xl text-center”>
        <SectionLabel index=”09” title=”The Philosophy” />
        <motion.blockquote
          initial=”hidden” whileInView=”show” viewport={{ once: true }} variants={fadeUp}
          className=”font-display text-2xl md:text-5xl leading-[1.2] italic text-foreground/95”
        >
          “Medicine is not only about treating illness. <br className=”hidden md:block” />
          It is about helping people <span className=”gold-text not-italic”>live better lives</span>.”
        </motion.blockquote>
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} custom={1}
          className="mt-10 text-xs tracking-[0.3em] uppercase text-muted-foreground"
        >
          — Dr. Arjun Rao
        </motion.div>
      </div>
    </section>
  );
}

function ShowcaseSection() {
  const items = [
    { t: "Conference Keynote", img: show1 },
    { t: "Clinic Environment", img: show2 },
    { t: "Media Interview", img: show3 },
    { t: "Speaking Engagement", img: show4 },
    { t: "Award Ceremony", img: show5 },
    { t: "Research Lab", img: show6 },
  ];
  return (
    <section className="relative py-20 md:py-32 px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionLabel index="10" title="Personal Brand" />
        <motion.h2 initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="font-display text-4xl md:text-7xl max-w-4xl">
          A life in <span className="italic gold-text">practice</span>.
        </motion.h2>
        <div className="mt-12 md:mt-20 grid md:grid-cols-3 gap-5">
          {items.map((it, i) => (
            <motion.div
              key={it.t}
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative overflow-hidden rounded-2xl glass ${i % 3 === 1 ? "md:mt-12" : ""}`}
            >
              <div className="aspect-[4/5] w-full relative overflow-hidden">
                <img src={it.img} alt={it.t} loading="lazy" width={800} height={1000}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                <div className="absolute inset-0 flex items-end p-6">
                  <div>
                    <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">Showcase</div>
                    <div className="font-display text-xl mt-1">{it.t}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ConsultSection() {
  return (
    <section id="consult" className="relative py-20 md:py-32 px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionLabel index="11" title="Consultation" />
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-start">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="font-display text-4xl md:text-7xl leading-[0.95]">
              Schedule your <span className="italic gold-text">consultation</span>.
            </h2>
            <p className="mt-6 text-muted-foreground max-w-md">
              For new patients and returning visitors. Reserve a time that suits you — clinic or video.
            </p>
            <div className="mt-12 space-y-5 text-sm">
              {[
                ["Phone", "+91 98 4567 1234"],
                ["Email", "consult@arjunrao.md"],
                ["Clinic", "Jubilee Hills, Hyderabad, India"],
                ["Hours", "Mon–Sat · 10:00 – 19:00"],
                ["Consultation Fee", "₹ 1,200"],
              ].map(([k, v]) => (
                <div key={k} className="flex items-baseline justify-between hairline pt-5">
                  <span className="text-[11px] tracking-[0.25em] uppercase text-muted-foreground">{k}</span>
                  <span className="font-display text-lg">{v}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.form
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} custom={1}
            onSubmit={(e) => e.preventDefault()}
            className="glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 space-y-5"
          >
            {[
              { l: "Full Name", t: "text", p: "Your full name" },
              { l: "Phone", t: "tel", p: "+91 ..." },
              { l: "Email", t: "email", p: "you@example.com" },
            ].map((f) => (
              <label key={f.l} className="block">
                <span className="text-[11px] tracking-[0.25em] uppercase text-muted-foreground">{f.l}</span>
                <input type={f.t} placeholder={f.p}
                  className="mt-2 w-full bg-transparent hairline pt-3 pb-3 text-lg placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold transition" />
              </label>
            ))}
            <label className="block">
              <span className="text-[11px] tracking-[0.25em] uppercase text-muted-foreground">Reason</span>
              <textarea rows={3} placeholder="Briefly describe your concern"
                className="mt-2 w-full bg-transparent hairline pt-3 pb-3 placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold transition" />
            </label>
            <button type="submit" className="mt-2 w-full rounded-full bg-foreground text-background py-4 text-sm tracking-[0.25em] uppercase hover:opacity-90 transition">
              Request Appointment
            </button>
          </motion.form>
        </div>
        <div className="mt-20 hairline pt-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-xs tracking-[0.2em] uppercase text-muted-foreground">
          <span>© {new Date().getFullYear()} Dr. Arjun Rao</span>
          <span>Crafted with care · The DNA of Excellence</span>
        </div>
      </div>
    </section>
  );
}

function Loader({ done }: { done: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 1 }} animate={{ opacity: done ? 0 : 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      style={{ pointerEvents: done ? "none" : "auto" }}
      className="fixed inset-0 z-[100] bg-background flex items-center justify-center"
    >
      <div className="text-center">
        <div className="font-display text-3xl gold-text">DR. ARJUN RAO</div>
        <div className="mt-3 text-[10px] tracking-[0.4em] uppercase text-muted-foreground">The DNA of Excellence</div>
        <div className="mt-8 mx-auto h-px w-40 bg-foreground/10 overflow-hidden">
          <motion.div initial={{ x: "-100%" }} animate={{ x: "100%" }} transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }} className="h-full w-1/2 bg-gold" />
        </div>
      </div>
    </motion.div>
  );
}

function Index() {
  const { scrollYProgress } = useScroll();
  const scrollRef = useRef({ current: 0 });
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const unsub = scrollYProgress.on("change", (v) => { scrollRef.current.current = v; });
    const t = setTimeout(() => setReady(true), 1100);
    return () => { unsub(); clearTimeout(t); };
  }, [scrollYProgress]);

  return (
    <div className="relative">
      <Loader done={ready} />
      <SmoothScroll />
      <ScrollProgress />
      <Nav />
      <StickyHelix scrollRef={scrollRef.current} />
      <main className="relative z-10 bg-background/50">
        <Hero />
        <FoundationSection />
        <EvolutionSection />
        <ExpertiseSection />
        <ResearchSection />
        <ImpactSection />
        <AwardsSection />
        <StoriesSection />
        <PhilosophySection />
        <ShowcaseSection />
        <ConsultSection />
      </main>
    </div>
  );
}
