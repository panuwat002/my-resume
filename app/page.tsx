"use client";

import { useState, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import { Settings, Mail, MapPin, Phone, Link as LinkIcon, Download, Briefcase, Code, GraduationCap, Server, Database, Activity, FileText } from 'lucide-react';
import { resumeData } from '@/src/data/resumeData';

// Animation Variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const [lang, setLang] = useState<'en' | 'th'>('en');
  const t = resumeData[lang];
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'projects', 'skills', 'education'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="container-xl">
      <div className="row">
        
        {/* LEFT COLUMN (Sticky) */}
        <div className="col-lg-5 p-4 p-lg-5 sticky-sidebar d-flex flex-column justify-content-between">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            
            <motion.div variants={fadeInUp} className="d-flex justify-content-between align-items-center d-lg-block mb-4">
               <div className="fs-3 fw-bold d-lg-none">PS.</div>
               <div className="d-flex align-items-center gap-2">
                 <div className="btn-group shadow-sm bg-white rounded-pill p-1">
                   <button 
                     onClick={() => setLang('th')}
                     className={`btn btn-sm rounded-pill fw-bold ${lang === 'th' ? 'btn-primary' : 'btn-light text-secondary'}`}
                   >
                     TH
                   </button>
                   <button 
                     onClick={() => setLang('en')}
                     className={`btn btn-sm rounded-pill fw-bold ${lang === 'en' ? 'btn-primary' : 'btn-light text-secondary'}`}
                   >
                     EN
                   </button>
                 </div>
                 
                 {/* ปิดปุ่มแก้ไขข้อมูลสำหรับเวอร์ชันออนไลน์ */}
                 {/* <a href="/admin" className="btn btn-light bg-white border-0 shadow-sm rounded-circle d-flex align-items-center justify-content-center text-secondary" style={{ width: '38px', height: '38px' }} title="Edit Resume Data">
                   <Settings size={18} />
                 </a> */}
               </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h1 className="fs-1 fw-bolder text-dark mb-0 lh-sm">
                {t.hero.name} <br/>
                <span className="text-primary">{t.hero.surname}</span>
              </h1>
              <h2 className="h6 text-secondary fw-bold mt-3 lh-base">
                {t.hero.role}
              </h2>
              <p className="text-muted mt-3 small fw-medium">
                {t.hero.location}
              </p>
            </motion.div>
            
            <motion.nav variants={fadeInUp} className="d-none d-lg-block mt-5">
              <ul className="nav flex-column gap-2">
                {['about', 'experience', 'projects', 'skills', 'education'].map((section) => (
                  <li className="nav-item" key={section}>
                    <a href={`#${section}`} className={`nav-link px-0 d-flex align-items-center gap-3 ${activeSection === section ? 'active' : ''}`}>
                      <span className={`bg-${activeSection === section ? 'primary' : 'secondary'} rounded-pill`} style={{ height: '2px', width: activeSection === section ? '64px' : '32px', transition: 'width 0.3s' }}></span>
                      {t.nav[section as keyof typeof t.nav]}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.nav>

          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="mt-5 d-flex flex-column gap-3">
            <a href={`tel:${t.hero.phone}`} className="text-decoration-none text-secondary fw-bold d-flex align-items-center gap-2"><Phone size={18}/> {t.hero.phone}</a>
            <a href={`mailto:${t.hero.email}`} className="text-decoration-none text-secondary fw-bold d-flex align-items-center gap-2"><Mail size={18}/> {t.hero.email}</a>
            <a href="#" className="text-decoration-none text-secondary fw-bold d-flex align-items-center gap-2"><LinkIcon size={18}/> {t.hero.githubProfile}</a>
            
            <div className="mt-4">
              <a href="#" className="btn btn-dark rounded-pill fw-bold px-4 py-2 custom-shadow d-inline-flex align-items-center gap-2">
                <Download size={18} />
                {t.hero.downloadResume}
              </a>
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN (Scrollable) */}
        <div className="col-lg-7 p-4 p-lg-5">
          <main className="d-flex flex-column gap-5 pb-5">
            
            {/* ABOUT */}
            <section id="about" style={{ scrollMarginTop: '100px' }}>
              <div className="d-lg-none sticky-top bg-light pt-3 pb-2 mb-3" style={{ zIndex: 10 }}>
                <h2 className="h6 fw-bold text-uppercase text-dark m-0">{t.about.title}</h2>
              </div>
              <h2 className="h4 fw-bold text-dark d-none d-lg-block mb-4">{t.about.title}</h2>
              
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="card border-0 custom-shadow rounded-4">
                <div className="card-body p-4">
                  <p className="card-text text-secondary mb-0">{t.about.description}</p>
                </div>
              </motion.div>
            </section>

            {/* EXPERIENCE */}
            <section id="experience" style={{ scrollMarginTop: '100px' }}>
              <div className="d-lg-none sticky-top bg-light pt-3 pb-2 mb-3" style={{ zIndex: 10 }}>
                <h2 className="h6 fw-bold text-uppercase text-dark m-0">{t.experience.title}</h2>
              </div>
              <h2 className="h4 fw-bold text-dark d-none d-lg-block mb-4">{t.experience.title}</h2>
              
              <div className="d-flex flex-column gap-4">
                {t.experience.jobs.map((job, index) => (
                  <motion.div key={index} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp} className="card border-0 custom-shadow rounded-4">
                    <div className="card-body p-4">
                      <div className="text-primary fw-bold text-uppercase" style={{ fontSize: '0.75rem', letterSpacing: '1px' }}>
                        {job.date}
                      </div>
                      <h3 className="h5 fw-bold text-dark mt-2 mb-1">
                        {job.title}
                      </h3>
                      <p className="text-secondary fw-semibold mb-3">{job.company}</p>
                      
                      {job.responsibilities && (
                        <ul className="list-unstyled mb-0">
                          {job.responsibilities.map((resp, idx) => (
                            <li key={idx} className="d-flex align-items-start mb-2 text-secondary">
                              <span className="timeline-dot flex-shrink-0"></span>
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* PROJECTS */}
            <section id="projects" style={{ scrollMarginTop: '100px' }}>
              <div className="d-lg-none sticky-top bg-light pt-3 pb-2 mb-3" style={{ zIndex: 10 }}>
                <h2 className="h6 fw-bold text-uppercase text-dark m-0">{t.projects.title}</h2>
              </div>
              <h2 className="h4 fw-bold text-dark d-none d-lg-block mb-4">{t.projects.title}</h2>

              <div className="d-flex flex-column gap-4">
                {t.projects.items.map((project, index) => (
                  <motion.div key={index} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp} className="card border-0 custom-shadow rounded-4">
                    <div className="card-body p-4 d-flex flex-column flex-sm-row gap-4">
                      <div className="flex-shrink-0">
                         <div className="bg-primary bg-opacity-10 text-primary rounded-3 d-flex align-items-center justify-content-center" style={{ width: '56px', height: '56px' }}>
                            <Code size={24} />
                         </div>
                      </div>
                      <div>
                        <h3 className="h5 fw-bold text-dark mb-1">
                          {project.title}
                        </h3>
                        <div className="text-primary fw-bold text-uppercase mb-2" style={{ fontSize: '0.75rem', letterSpacing: '1px' }}>{project.date}</div>
                        <p className="text-secondary mb-0">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* SKILLS */}
            <section id="skills" style={{ scrollMarginTop: '100px' }}>
               <div className="d-lg-none sticky-top bg-light pt-3 pb-2 mb-3" style={{ zIndex: 10 }}>
                <h2 className="h6 fw-bold text-uppercase text-dark m-0">{t.skills.title}</h2>
              </div>
              <h2 className="h4 fw-bold text-dark d-none d-lg-block mb-4">{t.skills.title}</h2>
              
              <div className="d-flex flex-column gap-4">
                {/* Infrastructure */}
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="card border-0 custom-shadow rounded-4">
                  <div className="card-body p-4">
                    <h3 className="h6 fw-bold text-uppercase text-dark mb-3 d-flex align-items-center gap-2">
                       <Server size={18} className="text-primary"/> {t.skills.infrastructure.title}
                    </h3>
                    <div className="d-flex flex-wrap gap-2">
                      {t.skills.infrastructure.items.map(skill => (
                        <span key={skill} className="badge bg-light text-dark border py-2 px-3 rounded-pill shadow-sm">{skill}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Enterprise */}
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="card border-0 custom-shadow rounded-4">
                  <div className="card-body p-4">
                    <h3 className="h6 fw-bold text-uppercase text-dark mb-3 d-flex align-items-center gap-2">
                       <Activity size={18} className="text-primary"/> {t.skills.enterprise.title}
                    </h3>
                    <div className="d-flex flex-wrap gap-2">
                      {t.skills.enterprise.items.map(skill => (
                        <span key={skill} className="badge bg-light text-dark border py-2 px-3 rounded-pill shadow-sm">{skill}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Development */}
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="card border-0 custom-shadow rounded-4">
                  <div className="card-body p-4">
                    <h3 className="h6 fw-bold text-uppercase text-dark mb-3 d-flex align-items-center gap-2">
                       <Database size={18} className="text-primary"/> {t.skills.development.title}
                    </h3>
                    <div className="d-flex flex-wrap gap-2">
                      {t.skills.development.items.map(skill => (
                        <span key={skill} className="badge bg-light text-dark border py-2 px-3 rounded-pill shadow-sm">{skill}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* EDUCATION */}
            <section id="education" style={{ scrollMarginTop: '100px' }}>
              <div className="d-lg-none sticky-top bg-light pt-3 pb-2 mb-3" style={{ zIndex: 10 }}>
                <h2 className="h6 fw-bold text-uppercase text-dark m-0">{t.education.title}</h2>
              </div>
              <h2 className="h4 fw-bold text-dark d-none d-lg-block mb-4">{t.education.title}</h2>
              
              <div className="card border-0 custom-shadow rounded-4">
                <div className="card-body p-4 p-sm-5">
                  <div className="row g-4">
                    {t.education.items.map((edu, index) => (
                      <div key={index} className="col-12 col-xl-6">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp} className="h-100 p-4 border rounded-4 d-flex flex-column gap-3 bg-light bg-opacity-50 hover-shadow transition-all">
                          <div className="d-flex align-items-start justify-content-between gap-2">
                            <div className={`rounded-4 d-flex align-items-center justify-content-center flex-shrink-0 shadow-sm ${edu.certFile ? 'bg-warning bg-opacity-25 text-warning' : 'bg-primary bg-opacity-10 text-primary'}`} style={{ width: '50px', height: '50px' }}>
                              {edu.certFile ? <FileText size={22} /> : <GraduationCap size={22} />}
                            </div>
                            <div className="text-primary fw-bold text-uppercase text-end bg-white px-2 py-1 rounded-2 shadow-sm" style={{ fontSize: '0.7rem' }}>{edu.date}</div>
                          </div>
                          
                          <div className="flex-grow-1 mt-2">
                            <h3 className="h6 fw-bold text-dark mb-2 lh-base">{edu.title}</h3>
                            <p className="text-secondary mb-0 small">{edu.institution}</p>
                          </div>
                          
                          {edu.certFile && (
                            <div className="mt-auto pt-2 border-top">
                              <a 
                                href={`/viewer?file=${edu.certFile}`} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="btn btn-primary w-100 btn-sm rounded-pill fw-bold d-inline-flex align-items-center justify-content-center gap-2 shadow-sm mt-2"
                              >
                                <FileText size={14} />
                                {t.education.viewCert}
                              </a>
                            </div>
                          )}
                        </motion.div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
            
            <footer className="pt-5 mt-5 border-top d-flex justify-content-between align-items-center text-muted" style={{ fontSize: '0.85rem' }}>
               <p className="mb-0">{t.footer}</p>
               <p className="mb-0">Built with Next.js & Bootstrap 5.</p>
            </footer>

          </main>
        </div>
      </div>
    </div>
  );
}
