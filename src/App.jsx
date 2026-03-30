import { useState, useEffect } from "react";
import { FaAppStoreIos, FaGithub, FaGooglePlay } from "react-icons/fa";
import { FiChevronDown, FiChevronUp, FiLink, FiX } from "react-icons/fi";
import { LuSquareTerminal } from "react-icons/lu";
import {
  archiveProjects,
  etcHighlights,
  experiences,
  featuredProjects,
  profile,
  resumeUrl,
  skills,
} from "./portfolioData";

const companyBadgeClassMap = {
  아틀로: "case__company-badge--atlo",
  레니프: "case__company-badge--lenif",
  시스네트정보: "case__company-badge--sysnet",
  "개인 / 공동체": "case__company-badge--personal",
};

const platformBadgeClassMap = {
  Web: "meta-badge--web",
  Mobile: "meta-badge--mobile",
  Desktop: "meta-badge--desktop",
  IoT: "meta-badge--iot",
  Embedded: "meta-badge--embedded",
};

const skillTagToneClassMap = {
  "프론트엔드 / Web": "tag--web",
  "프론트엔드 / 모바일": "tag--mobile",
  "실시간 통신 / 인터페이스 연동": "tag--realtime",
  "데스크톱 / 클라이언트": "tag--desktop",
  "백엔드 / 데이터 연동": "tag--backend",
  Database: "tag--database",
  "배포 / 운영": "tag--deploy",
  "IoT / 디바이스 연결": "tag--iot",
  "임베디드 / 제품화": "tag--embedded",
};

const techTagToneClassMap = skills.reduce((acc, group) => {
  const toneClass = skillTagToneClassMap[group.title];
  if (!toneClass) return acc;

  group.tags.forEach((tag) => {
    acc[tag] = toneClass;
  });

  return acc;
}, {
  PHP: "tag--server",
  CodeIgniter: "tag--server",
});

const projectTypeFilterMap = {
  전체: null,
  Web: ["Web"],
  Mobile: ["Mobile"],
  Desktop: ["Desktop"],
  "IoT / Embedded": ["IoT", "Embedded"],
};

const projectTypeOptions = Object.keys(projectTypeFilterMap).filter((type) => {
  const targetPlatforms = projectTypeFilterMap[type];
  if (!targetPlatforms) return true;

  return [...featuredProjects, ...archiveProjects].some((project) =>
    targetPlatforms.includes(project.platform),
  );
});

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeProjectType, setActiveProjectType] = useState("전체");
  const [openArchive, setOpenArchive] = useState(null);
  const [openEtc, setOpenEtc] = useState(null);

  const activePlatforms = projectTypeFilterMap[activeProjectType];

  const visibleFeaturedProjects = activePlatforms
    ? featuredProjects.filter((project) => activePlatforms.includes(project.platform))
    : featuredProjects;

  const visibleArchiveProjects = activePlatforms
    ? archiveProjects.filter((project) => activePlatforms.includes(project.platform))
    : archiveProjects;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.06, rootMargin: "0px 0px -60px 0px" },
    );
    const frameId = window.requestAnimationFrame(() => {
      document
        .querySelectorAll("[data-reveal]:not(.revealed)")
        .forEach((el) => observer.observe(el));
    });
    return () => {
      window.cancelAnimationFrame(frameId);
      observer.disconnect();
    };
  }, [activeProjectType]);

  return (
    <>
      {/* ── Header ── */}
      <header className={`header${scrolled ? " header--scrolled" : ""}`}>
        <div className="header__inner container">
          <a className="header__brand" href="#top">
            <LuSquareTerminal aria-hidden="true" />
            <span className="header__brand-label">Soonho Bae Portfolio</span>
          </a>
          <nav className="header__nav">
            <a href="#experience">경력</a>
            <a href="#projects">프로젝트</a>
            <a href="#skills">기술</a>
            <a href="#contact">연락</a>
          </nav>
          <a
            className="header__cta"
            href={resumeUrl}
            target="_blank"
            rel="noreferrer"
          >
            이력서
          </a>
        </div>
      </header>

      <main>
        {/* ── Hero ── */}
        <section className="hero" id="top">
          <div className="container hero__center">
            <div data-reveal>
              <span className="badge">Frontend Engineer · Product & Service</span>
              <p className="hero__identity">
                {profile.name} · {profile.englishName}
              </p>
              <h1 className="hero__headline">{profile.title}</h1>
              <p className="hero__summary">{profile.summary}</p>
            </div>

            <div className="stats" data-reveal>
              {profile.stats.map((s) => (
                <div className="stat" key={s.label}>
                  <span className="stat__value">{s.value}</span>
                  <span className="stat__label">{s.label}</span>
                </div>
              ))}
            </div>

            <div className="hero__actions" data-reveal>
              <a className="btn btn--primary" href="#projects">
                프로젝트 보기
              </a>
              <a
                className="btn btn--ghost"
                href={resumeUrl}
                target="_blank"
                rel="noreferrer"
              >
                이력서 PDF
              </a>
            </div>

            <div className="hero__contacts" data-reveal>
              {profile.contacts.map((c) => (
                <a
                  className="contact-link"
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>{c.label}</span>
                  <strong>{c.value}</strong>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── Experience ── */}
        <section className="section" id="experience">
          <div className="container">
            <header className="section__header" data-reveal>
              <span className="label">Experience</span>
              <h2>경력</h2>
            </header>

            <div className="exp-list">
              {experiences.map((exp, i) => (
                <article
                  className="exp"
                  key={exp.company}
                  data-reveal
                  style={{ "--reveal-delay": `${i * 80}ms` }}
                >
                  <div className="exp__left">
                    <span className="exp__period">{exp.period}</span>
                  </div>
                  <div className="exp__right">
                    <h3 className="exp__company">{exp.company}</h3>
                    <p className="exp__role">{exp.role}</p>
                    <ul className="exp__points">
                      {exp.points.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Projects ── */}
        <section className="section section--alt" id="projects">
          <div className="container">
            <header className="section__header" data-reveal>
              <span className="label">Selected Work</span>
              <h2>프로젝트</h2>
            </header>

            <div className="project-filter" data-reveal>
              {projectTypeOptions.map((type) => (
                <button
                  key={type}
                  className={`project-filter__button${
                    activeProjectType === type ? " project-filter__button--active" : ""
                  }`}
                  type="button"
                  onClick={() => {
                    setActiveProjectType(type);
                    setOpenArchive(null);
                  }}
                >
                  {type}
                </button>
              ))}
            </div>

            <div className="case-list">
              {visibleFeaturedProjects.length > 0 ? (
                visibleFeaturedProjects.map((project, i) => (
                  <article
                    className="case"
                    key={project.id}
                    data-reveal
                    style={{ "--reveal-delay": `${i * 80}ms` }}
                  >
                    <div className="case__header">
                      <div className="case__meta-row">
                        <div className="case__meta">
                          {project.company ? (
                            <span
                              className={`case__company-badge${
                                companyBadgeClassMap[project.company]
                                  ? ` ${companyBadgeClassMap[project.company]}`
                                  : ""
                              }`}
                            >
                              {project.company}
                            </span>
                          ) : null}
                          <span
                            className={`meta-badge meta-badge--platform${
                              platformBadgeClassMap[project.platform]
                                ? ` ${platformBadgeClassMap[project.platform]}`
                                : ""
                            }`}
                          >
                            {project.platform}
                          </span>
                          {project.period ? (
                            <span className="case__meta-text">{project.period}</span>
                          ) : null}
                        </div>
                        {project.links.length > 0 && (
                          <div className="case__links case__links--header">
                            {project.links.map((link) => {
                              const isAndroid =
                                link.label === "Android" || link.label === "Google Play";
                              const isAppStore =
                                link.label === "iOS" || link.label === "App Store";
                              const isStoreLink = isAndroid || isAppStore;

                              return (
                                <a
                                  key={link.href}
                                  href={link.href}
                                  target="_blank"
                                  rel="noreferrer"
                                  className={`case__link${
                                    isStoreLink ? " case__link--icon" : ""
                                  }`}
                                  aria-label={link.label}
                                >
                                  {isAndroid ? (
                                    <FaGooglePlay aria-hidden="true" />
                                  ) : isAppStore ? (
                                    <FaAppStoreIos aria-hidden="true" />
                                  ) : (
                                    <>
                                      <FiLink aria-hidden="true" />
                                      <span>{link.label}</span>
                                    </>
                                  )}
                                </a>
                              );
                            })}
                          </div>
                        )}
                      </div>
                      <h3 className="case__title">{project.title}</h3>
                    </div>

                    <div className="case__body">
                      <div className="case__section">
                        <span className="case__label">과제</span>
                        <p>{project.challenge}</p>
                      </div>
                      <div className="case__section">
                        <span className="case__label">해결 과정</span>
                        {Array.isArray(project.decision) ? (
                          <ul className="case__decision-list">
                            {project.decision.map((step) => (
                              <li key={step}>{step}</li>
                            ))}
                          </ul>
                        ) : (
                          <p>{project.decision}</p>
                        )}
                      </div>
                      <div className="case__section">
                        <span className="case__label">성과</span>
                        <ul>
                          {project.results.map((r) => (
                            <li key={r}>{r}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="case__footer">
                      <div className="tags">
                        {project.stack.map((s) => (
                          <span
                            className={`tag${
                              techTagToneClassMap[s] ? ` ${techTagToneClassMap[s]}` : ""
                            }`}
                            key={s}
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                ))
              ) : (
                <p className="empty-state" data-reveal>
                  해당 타입의 대표 프로젝트가 없습니다.
                </p>
              )}
            </div>
          </div>
        </section>

        {/* ── Skills ── */}
        <section className="section" id="skills">
          <div className="container">
            <header className="section__header" data-reveal>
              <span className="label">Skills</span>
              <h2>기술 역량</h2>
            </header>

            <div className="skill-grid" data-reveal>
              {skills.map((group) => {
                const toneClass = skillTagToneClassMap[group.title] ?? "";

                return (
                  <div className="skill-group" key={group.title}>
                    <h4 className="skill-group__title">{group.title}</h4>
                    <div className="tags">
                      {group.tags.map((tag) => (
                        <span className={`tag${toneClass ? ` ${toneClass}` : ""}`} key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Archive ── */}
        <section className="section section--alt" id="archive">
          <div className="container">
            <header className="section__header" data-reveal>
              <span className="label">Archive</span>
              <h2>기타 프로젝트</h2>
            </header>

            <div className="archive-grid" data-reveal>
              {visibleArchiveProjects.length > 0 ? (
                visibleArchiveProjects.map((p) => {
                  const cardActions = p.links ?? [];

                  return (
                    <article
                      className={`archive-card${
                        openArchive === p.name ? " archive-card--open" : ""
                      }`}
                      key={p.name}
                    >
                      {cardActions.length > 0 && (
                        <div className="archive-card__actions">
                          {cardActions.map((link) => {
                            const isGithub = link.label === "GitHub";
                            const isAppStore = link.label === "App Store";
                            const isPlayStore = link.label === "Google Play";

                            return (
                              <a
                                key={link.href}
                                className={`archive-card__action${
                                  isGithub ? " archive-card__action--github" : ""
                                }${
                                  isAppStore ? " archive-card__action--appstore" : ""
                                }${
                                  isPlayStore ? " archive-card__action--playstore" : ""
                                }`}
                                href={link.href}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={link.label}
                              >
                                {isGithub ? (
                                  <FaGithub aria-hidden="true" />
                                ) : isAppStore ? (
                                  <FaAppStoreIos aria-hidden="true" />
                                ) : isPlayStore ? (
                                  <FaGooglePlay aria-hidden="true" />
                                ) : (
                                  <FiLink aria-hidden="true" />
                                )}
                              </a>
                            );
                          })}
                        </div>
                      )}

                      <button
                        className="archive-card__toggle"
                        type="button"
                        onClick={() =>
                          setOpenArchive((current) => (current === p.name ? null : p.name))
                        }
                        aria-label={openArchive === p.name ? "세부 보기 닫기" : "세부 보기 열기"}
                        aria-expanded={openArchive === p.name}
                      >
                        {openArchive === p.name ? (
                          <FiChevronUp aria-hidden="true" />
                        ) : (
                          <FiChevronDown aria-hidden="true" />
                        )}
                      </button>

                      <div className="archive-card__body">
                        <div className="archive-card__meta">
                          <span
                            className={`meta-badge meta-badge--platform${
                              platformBadgeClassMap[p.platform]
                                ? ` ${platformBadgeClassMap[p.platform]}`
                                : ""
                            }`}
                          >
                            {p.platform}
                          </span>
                        </div>
                        <strong>{p.name}</strong>
                        <span className="archive-card__period">{p.period}</span>
                        <div className="tags">
                          {p.tech.map((t) => (
                            <span
                              className={`tag tag--sm${
                                techTagToneClassMap[t] ? ` ${techTagToneClassMap[t]}` : ""
                              }`}
                              key={t}
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      {openArchive === p.name && (
                        <div className="archive-popover">
                          <div className="archive-popover__header">
                            <strong className="archive-popover__title">{p.name}</strong>
                            <button
                              className="archive-popover__close"
                              type="button"
                              aria-label="세부 보기 닫기"
                              onClick={() => setOpenArchive(null)}
                            >
                              <FiX aria-hidden="true" />
                            </button>
                          </div>

                          <p className="archive-popover__summary">{p.summary}</p>
                          <ul className="archive-popover__points">
                            {p.details.map((detail) => (
                              <li key={detail}>{detail}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </article>
                  );
                })
              ) : (
                <p className="empty-state" data-reveal>
                  해당 타입의 기타 프로젝트가 없습니다.
                </p>
              )}
            </div>

          </div>
        </section>

        {/* ── Etc ── */}
        <section className="section" id="etc">
          <div className="container">
            <header className="section__header" data-reveal>
              <span className="label">Etc</span>
              <h2>기타 활동</h2>
            </header>
            <div className="etc-accordion" data-reveal>
              {etcHighlights.map((item) => (
                <article
                  className={`etc-card${
                    openEtc === item.title ? " etc-card--open" : ""
                  }`}
                  key={item.title}
                >
                  <button
                    className="etc-card__trigger"
                    type="button"
                    onClick={() =>
                      setOpenEtc((current) =>
                        current === item.title ? null : item.title,
                      )
                    }
                    aria-expanded={openEtc === item.title}
                  >
                    <span className="etc-card__title">{item.title}</span>
                    {openEtc === item.title ? (
                      <FiChevronUp aria-hidden="true" />
                    ) : (
                      <FiChevronDown aria-hidden="true" />
                    )}
                  </button>
                  {openEtc === item.title && (
                    <div className="etc-card__content">
                      <p className="etc-card__summary">{item.summary}</p>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="footer" id="contact">
        <div className="container footer__center" data-reveal>
          <h2 className="footer__title">Contact</h2>
          <div className="footer__actions">
            <a
              className="btn btn--ghost-light"
              href={resumeUrl}
              target="_blank"
              rel="noreferrer"
            >
              이력서 열기
            </a>
          </div>
          <div className="footer__links">
            {profile.contacts.map((c) => (
              <a key={c.label} href={c.href} target="_blank" rel="noreferrer">
                {c.label} <strong>{c.value}</strong>
              </a>
            ))}
          </div>
        </div>
      </footer>

    </>
  );
}

export default App;
