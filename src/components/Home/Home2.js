import React from "react";
import { Github, Instagram, Linkedin } from "lucide-react";

const ACHIEVEMENTS = [
  {
    title: "CODE RED'25 National Hackathon",
    outcome: "Consolation Prize - INR 10,000",
    detail:
      "Built a defensive ML pipeline that secured a top-four finish among 1,000+ national teams."
  },
  {
    title: "ELCIA Next-Gen Innovative Tech Hackathon",
    outcome: "Top ten team nationally",
    detail:
      "Delivered an AI-driven sustainability assistant, finishing in the top two percent of 500+ teams across India."
  }
];

const EXPERIENCE = [
  {
    role: "Software Developer - SaaS Traffic Intelligence",
    company: "Juniper Networks",
    period: "Jul 2024 - Feb 2025",
    detail:
      "Built SSL-proxy-backed data pipelines, traffic classification services, and validation models that delivered 98% accuracy on known SaaS traffic and 83% on unseen services."
  },
  {
    role: "Software Developer Intern - Security",
    company: "SkySecure Ltd",
    period: "Nov 2023 - Dec 2023",
    detail:
      "Implemented a real-time intrusion detection flow with packet processing, ML-based threat prediction, and automated alerting that reached a 92.8% detection rate with a 94.2% F1-score."
  }
];

const LEADERSHIP = [
  {
    title: "Event Management Lead - GDSC RVCE",
    period: "Aug 2023 - Present",
    detail:
      'Curated community programs and launched "Tech Tank," a university hackathon that attracted more than 500 builders.'
  }
];

const SOCIAL_LINKS = [
  { icon: Github, url: "https://github.com/prabujayant", label: "GitHub" },
  {
    icon: Linkedin,
    url: "https://www.linkedin.com/in/prabu-jayant-6b316b251/",
    label: "LinkedIn"
  },
  {
    icon: Instagram,
    url: "https://www.instagram.com/prabujayant17/",
    label: "Instagram"
  }
];

function HomeDetails() {
  return (
    <>
      <section className="page-section">
        <div className="layout-container">
          <h2 className="section-heading">What I am focused on</h2>
          <p className="section-subheading">
            A systems-first approach to security, data, and software craft.
          </p>
          <div className="content-card">
            <p>
              My current work blends software development, applied machine learning, and security engineering. I enjoy
              shaping ideas from zero to one - clarifying the problem, building lightweight experiments, and scaling the
              ones that work.
            </p>
            <ul className="list-reset">
              <li>Designing reliable threat-detection workflows powered by modern AI stacks.</li>
              <li>Building practical assistants around LLMs, RAG pipelines, and data tools that augment decision-making.</li>
              <li>Partnering with teams to transform early concepts into polished, secure experiences.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="layout-container">
          <h2 className="section-heading">Experience</h2>
          <p className="section-subheading">
            Hands-on roles where I shipped reliable security and data products.
          </p>
          <div className="grid two">
            {EXPERIENCE.map(({ role, company, period, detail }) => (
              <article key={role} className="content-card">
                <div className="inline-tags">
                  <span className="tag">{period}</span>
                </div>
                <h3>{company}</h3>
                <p className="muted">{role}</p>
                <p>{detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="layout-container">
          <h2 className="section-heading">Highlights</h2>
          <p className="section-subheading">
            A snapshot of recent wins that shaped how I lead, build, and ship.
          </p>
          <div className="grid two">
            {ACHIEVEMENTS.map(({ title, outcome, detail }) => (
              <article key={title} className="content-card">
                <div className="inline-tags">
                  <span className="tag">{outcome}</span>
                </div>
                <h3>{title}</h3>
                <p>{detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="layout-container">
          <h2 className="section-heading">Leadership and community</h2>
          <p className="section-subheading">
            Building teams, hosting programs, and keeping an inclusive bias.
          </p>
          <div className="grid two">
            {LEADERSHIP.map(({ title, period, detail }) => (
              <article key={title} className="content-card">
                <div className="inline-tags">
                  <span className="tag">{period}</span>
                </div>
                <h3>{title}</h3>
                <p>{detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="layout-container">
          <h2 className="section-heading">Let&apos;s connect</h2>
          <p className="section-subheading">
            I am open to collaborations, speaking, and research conversations around cybersecurity, AI, and product
            strategy.
          </p>
          <div className="content-card">
            <p className="muted">
              Reach me on any of the platforms below or drop a note on LinkedIn.
            </p>
            <div className="social-links">
              {SOCIAL_LINKS.map(({ icon: Icon, url, label }) => (
                <a key={label} href={url} target="_blank" rel="noreferrer">
                  <Icon size={18} aria-label={label} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeDetails;

