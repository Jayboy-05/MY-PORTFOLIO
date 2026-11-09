
import { useState } from "react";
import {
  ArrowUpRight,
  Mail,
  Code2,
  Menu,
  X,
  ExternalLink,
  Monitor,
  Layers,
  Globe,
  Download,
} from "lucide-react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const EMAIL_LINK =
  "https://mail.google.com/mail/?view=cm&fs=1&to=johnsco459@gmail.com";

const LINKEDIN_LINK =
  "https://www.linkedin.com/in/friday-johnson-8737b8432/";

const WHATSAPP_LINK = "https://wa.me/2348105612194";

const GITHUB_LINK = "https://github.com/jayboy-05";

const skills = [
  { name: "HTML5", detail: "Semantic web structure" },
  { name: "CSS3", detail: "Modern responsive styling" },
  { name: "JavaScript", detail: "Interactive functionality" },
  { name: "React.js", detail: "Component-based development" },
  { name: "Tailwind CSS", detail: "Utility-first styling" },
  { name: "Git & GitHub", detail: "Version control" },
];

const projects = [
  {
    number: "01",
    name: "SEAMAGOLD VENT",
    type: "BUSINESS WEBSITE",
    description:
      "A painting and property finishing business website designed to present services and create a professional online presence.",
    url: "https://jayboy-05.github.io/SEAMAGOLD/",
    icon: Globe,
  },
  {
    number: "02",
    name: "TASTEHUB FOOD",
    type: "FOOD ORDERING WEBSITE",
    description:
      "A restaurant website concept focused on presenting food offerings and making the ordering experience accessible.",
    url: "https://jayboy-05.github.io/TASTEHUB-FOOD/",
    icon: Monitor,
  },
];

const services = [
  {
    icon: Monitor,
    title: "Website Development",
    desc: "Building modern websites for businesses and individuals.",
  },
  {
    icon: Layers,
    title: "Responsive Design",
    desc: "Creating interfaces that adapt to mobile, tablet and desktop.",
  },
  {
    icon: Code2,
    title: "React Development",
    desc: "Building reusable components and interactive frontend interfaces.",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="min-h-screen overflow-hidden bg-[#080811] text-white">
      {/* NAVIGATION */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#080811]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#home" className="text-2xl font-black tracking-tight">
            FJT<span className="text-violet-500">.</span>
          </a>

          <div className="hidden items-center gap-9 text-sm text-gray-400 md:flex">
            <a href="#home" className="hover:text-violet-400">Home</a>
            <a href="#about" className="hover:text-violet-400">About</a>
            <a href="#skills" className="hover:text-violet-400">Skills</a>
            <a href="#projects" className="hover:text-violet-400">Projects</a>
            <a href="#contact" className="hover:text-violet-400">Contact</a>
          </div>

          <a
            href="#contact"
            className="hidden rounded-full border border-violet-500/60 px-6 py-2.5 text-sm transition hover:bg-violet-600 md:block"
          >
            Let's Talk <ArrowUpRight className="ml-1 inline" size={16} />
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 bg-[#0D0D1B] px-6 py-6 md:hidden">
            {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={closeMenu}
                className="block border-b border-white/5 py-4 text-gray-300 hover:text-violet-400"
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section
        id="home"
        className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-20 pt-36"
      >
        <div className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-violet-700/20 blur-[130px]" />

        <div className="pointer-events-none absolute right-0 top-40 h-80 w-80 rounded-full bg-blue-600/10 blur-[120px]" />

        <div className="relative z-10 grid w-full items-center gap-16 lg:grid-cols-2">
          <div>
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
              <span className="h-2 w-2 rounded-full bg-green-400" />
              Frontend Developer
            </div>

            <p className="mb-5 text-sm font-semibold tracking-[5px] text-gray-400">
              HELLO, I'M
            </p>

            <h1 className="text-5xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              FRIDAY
              <span className="block text-violet-500">JOHNSON</span>
              <span className="block text-3xl text-gray-300 sm:text-4xl">
                THANKGOD.
              </span>
            </h1>

            <h2 className="mt-8 text-xl font-semibold text-gray-200 sm:text-2xl">
              I build digital experiences
              <span className="text-violet-400"> that matter.</span>
            </h2>

            <p className="mt-5 max-w-xl leading-8 text-gray-400">
              I create modern, responsive and engaging websites using frontend
              technologies, combining thoughtful design with functional user
              experiences.
            </p>
              <div className="mt-9 flex flex-wrap gap-4">

                {/* EXPLORE PROJECTS BUTTON */}
                <a
                 href="#projects"
                 className="group rounded-xl bg-violet-600 px-7 py-4 font-semibold shadow-lg shadow-violet-600/20 transition duration-300 hover:-translate-y-1 hover:bg-violet-500 hover:shadow-violet-500/40"
                >
                 Explore My Work
                 <ArrowUpRight className="ml-2 inline transition group-hover:translate-x-1 group-hover:-translate-y-1" size={18} />
                </a>

                {/* VIEW CV BUTTON */}
<a
  href={`${import.meta.env.BASE_URL}cv.pdf`}
  target="_blank"
  rel="noopener noreferrer"
  className="group inline-flex items-center gap-2 rounded-xl border border-violet-500/60 bg-violet-500/10 px-7 py-4 font-semibold text-violet-300 shadow-lg shadow-violet-500/10 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-violet-400 hover:bg-violet-600 hover:text-white hover:shadow-violet-500/40"
>
  <ExternalLink
    size={19}
    className="transition duration-300 group-hover:translate-x-1"
  />
  View My CV
</a>
                {/* CONTACT BUTTON */}
                <a
                  href="#contact"
                 className="rounded-xl border border-white/20 px-7 py-4 font-semibold transition duration-300 hover:-translate-y-1 hover:border-violet-500 hover:text-violet-300"
                >
                 Contact Me
                </a>

              </div>

            {/* SOCIAL LINKS */}
            <div className="mt-12 flex items-center gap-6 text-gray-400">
              <a
                href={GITHUB_LINK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="transition hover:text-violet-400"
              >
                <Code2 size={23} />
              </a>

              <a
                href={LINKEDIN_LINK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-xl font-bold transition hover:text-violet-400"
              >
                in
              </a>

              <a
                href={EMAIL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email"
                className="transition hover:text-violet-400"
              >
                <Mail size={23} />
              </a>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="transition hover:text-green-400"
              >
                <FontAwesomeIcon icon={faWhatsapp} size="xl" />
              </a>
            </div>
          </div>

          {/* PROFILE PHOTO */}
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute inset-0 rounded-full bg-violet-600/20 blur-[90px]" />

            <div className="relative overflow-hidden rounded-3xl border border-violet-500/40 bg-[#11111F] p-3 shadow-2xl shadow-violet-900/30">
              <img
                src="/profile.png"
                alt="Friday Johnson Thankgod - Frontend Developer"
                className="h-[520px] w-full rounded-2xl object-cover object-top"
              />

              <div className="absolute bottom-7 left-7 right-7 rounded-xl border border-white/10 bg-[#080811]/85 p-5 backdrop-blur-xl">
                <p className="text-lg font-bold text-white">
                  Friday Johnson Thankgod
                </p>

                <p className="mt-1 text-sm text-violet-300">
                  Frontend Developer
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="border-t border-white/10 bg-[#0D0D19] px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-sm tracking-[4px] text-violet-400">
            01 / ABOUT ME
          </p>

          <div className="grid gap-12 md:grid-cols-2">
            <h2 className="text-4xl font-bold leading-tight md:text-5xl">
              Not just writing code.
              <span className="text-violet-500"> Creating experiences.</span>
            </h2>

            <div>
              <p className="leading-8 text-gray-400">
                I'm Friday Johnson Thankgod, a Frontend Developer passionate
                about transforming ideas into functional and visually engaging
                websites.
              </p>

              <p className="mt-5 leading-8 text-gray-400">
                My focus is on responsive design, modern interfaces, usability
                and building digital experiences that work across different
                devices.
              </p>

              <div className="mt-8 flex items-center gap-3 text-violet-400">
                <Code2 size={22} />
                <span className="font-semibold">Build. Improve. Innovate.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-sm tracking-[4px] text-violet-400">
            02 / MY EXPERTISE
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Technologies I Work With.
          </h2>

          <p className="mt-5 text-gray-400">
            Tools and technologies I use to bring ideas to life.
          </p>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="group rounded-2xl border border-white/10 bg-[#11111F] p-7 transition duration-300 hover:-translate-y-2 hover:border-violet-500/60"
              >
                <div className="mb-8 flex items-center justify-between">
                  <Code2 size={28} className="text-violet-400" />
                  <span className="text-sm text-gray-600">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-xl font-bold">{skill.name}</h3>
                <p className="mt-3 text-sm text-gray-400">{skill.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="border-t border-white/10 bg-[#0D0D19] px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-sm tracking-[4px] text-violet-400">
            03 / SELECTED WORK
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Projects I've Built.
          </h2>

          <p className="mt-5 max-w-xl leading-7 text-gray-400">
            A selection of my work, demonstrating my interest in building
            useful and engaging web experiences.
          </p>

          <div className="mt-14 grid gap-7 md:grid-cols-2">
            {projects.map((project) => {
              const ProjectIcon = project.icon;

              return (
                <article
                  key={project.number}
                  className="group overflow-hidden rounded-3xl border border-white/10 bg-[#11111F] transition hover:border-violet-500/60"
                >
                  <div className="relative flex h-64 items-center justify-center overflow-hidden bg-gradient-to-br from-violet-950 via-[#17142D] to-[#080811]">
                    <div className="absolute h-52 w-52 rounded-full border border-violet-400/20 transition duration-700 group-hover:scale-125" />

                    <div className="absolute h-40 w-40 rounded-full border border-violet-400/20" />

                    <ProjectIcon
                      size={75}
                      className="relative text-violet-300 transition duration-500 group-hover:scale-110"
                    />

                    <span className="absolute right-6 top-6 text-sm text-violet-300">
                      {project.number}
                    </span>
                  </div>

                  <div className="p-8">
                    <p className="text-xs tracking-[3px] text-violet-400">
                      {project.type}
                    </p>

                    <h3 className="mt-4 text-2xl font-bold">
                      {project.name}
                    </h3>

                    <p className="mt-5 leading-7 text-gray-400">
                      {project.description}
                    </p>

                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-8 inline-flex items-center gap-2 font-semibold text-violet-400 transition hover:text-violet-300"
                    >
                      Visit Live Website
                      <ExternalLink size={17} />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-sm tracking-[4px] text-violet-400">
            04 / WHAT I CAN DO
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            My Services.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="rounded-2xl border border-white/10 bg-[#11111F] p-8"
                >
                  <Icon size={32} className="text-violet-400" />

                  <h3 className="mt-7 text-xl font-bold">
                    {service.title}
                  </h3>

                  <p className="mt-4 leading-7 text-gray-400">
                    {service.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="border-t border-white/10 bg-[#0D0D19] px-6 py-32 text-center">
        <div className="mx-auto max-w-3xl">
          <p className="mb-6 text-sm tracking-[4px] text-violet-400">
            05 / LET'S CONNECT
          </p>

          <h2 className="text-4xl font-black leading-tight md:text-6xl">
            Have an idea?
            <span className="block text-violet-500">Let's build it.</span>
          </h2>

          <p className="mt-7 leading-8 text-gray-400">
            I'm interested in meaningful projects, collaborations and
            opportunities to grow. Let's connect.
          </p>

          <a
            href={EMAIL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-3 rounded-xl bg-violet-600 px-8 py-4 font-semibold transition hover:bg-violet-500"
          >
            <Mail size={19} />
            Get In Touch
            <ArrowUpRight size={18} />
          </a>

          <div className="mt-10 flex justify-center gap-7 text-gray-400">
            <a
              href={GITHUB_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="transition hover:text-violet-400"
            >
              <Code2 size={24} />
            </a>

            <a
              href={LINKEDIN_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-xl font-bold transition hover:text-violet-400"
            >
              in
            </a>

            <a
              href={EMAIL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
              className="transition hover:text-violet-400"
            >
              <Mail size={24} />
            </a>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="transition hover:text-green-400"
            >
              <FontAwesomeIcon icon={faWhatsapp} size="xl" />
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-8 text-center">
        <p className="font-bold">
          FRIDAY JOHNSON THANKGOD
          <span className="text-violet-500">.</span>
        </p>

        <p className="mt-3 text-sm text-gray-500">
          © {new Date().getFullYear()} All Rights Reserved.
        </p>

        <p className="mt-2 text-xs text-gray-600">
          Designed and developed with passion.
        </p>
      </footer>
    </main>
  );
}

export default App;
