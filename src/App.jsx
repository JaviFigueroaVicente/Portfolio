import { useState, useRef } from 'react'
import './App.css'

export default function App() {
  const scrollRef = useRef(null);
  const stack = [
    {
      category: "BIG DATA & IA",
      techs: ["Pandas", "Numpy", "Tensorflow", "Matplotlib", "Seaborn", "Power BI"]
    },
    {
      category: "BACKEND & LOGIC",
      techs: ["PHP 8.4", "Python", "Java", "Laravel", "Django", "Node.js", "C#"]
    },
    {
      category: "FRONTEND & UI",
      techs: ["React", "Vue.js", "JavaScript", "TailwindCSS", "HTML5", "CSS3"]
    },
    {
      category: "INFRA & TOOLS",
      techs: ["SQL", "PostgreSQL", "MongoDB", "Git", "Docker", "WordPress"]
    }
  ];

  const projects = [
    {
      id: "01",
      tag: "WEB_ARCHITECTURE",
      title: "Migración Crítica PHP 8.4",
      desc: "Modernización de +20 webs municipales del Ajuntament de Molins de Rei, optimizando seguridad y rendimiento.",
      tech: ["WORDPRESS", "PHP 8.4", "SQL"]
    },
    {
      id: "02",
      tag: "DATA_OPERATIONS",
      title: "Revenue Logic 4M€",
      desc: "Optimización de flujos de facturación y análisis de datos postventa para Grupo Letamendi.",
      tech: ["POWER BI", "ANALYTICS", "OPS"]
    },
    {
      id: "03",
      tag: "AI_BIG_DATA",
      title: "IA Predictive Models",
      desc: "Desarrollo de modelos predictivos basados en formación avanzada de Big Data.",
      tech: ["PYTHON", "TENSORFLOW", "PANDAS"]
    }
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Glow Decorativo */}
      <div className="fixed top-[-10%] right-[-10%] w-[600px] h-[600px] bg-[var(--accent)] opacity-[0.05] blur-[150px] -z-10 rounded-full" />

      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-[var(--bg-base)]/80 backdrop-blur-lg border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <span className="font-mono text-sm font-bold tracking-widest text-[var(--accent)]">J.FIGUEROA_VICENTE</span>
          <button className="btn-primary">CONTACTO</button>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 pt-40">
        {/* Hero con Foto Placeholder */}
        <section className="flex flex-col md:flex-row gap-16 items-center mb-40">
          <div className="w-64 h-80 flex-shrink-0 photo-placeholder rounded-2xl rotate-[-2deg] shadow-2xl">
            {/* Aquí irá tu imagen: <img src="..." className="object-cover w-full h-full" /> */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="label-caps opacity-20">PHOTO_ID</span>
            </div>
          </div>
          
          <div className="flex-grow">
            <div className="inline-flex items-center gap-3 mb-6 bg-white/5 px-4 py-1 rounded-full border border-white/10">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse"></span>
              <span className="label-caps text-[10px]">AVAILABLE_FOR_PROJECTS</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 bg-gradient-to-r from-white to-slate-500 bg-clip-text text-transparent">
              Ingeniería Web <br /> & Sistemas de IA.
            </h1>
            <p className="text-xl text-[var(--text-dim)] max-w-2xl leading-relaxed">
              Especializado en arquitecturas escalables y pipelines de datos. 
              Actualmente optimizando ecosistemas digitales en el <span className="text-white font-mono">Ajuntament de Molins de Rei</span>.
            </p>
          </div>
        </section>

        {/* Slider de Proyectos */}
        <section id="proyectos" className="mb-40">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="label-caps mb-4">Portfolio_v1.0</h2>
              <h3 className="text-4xl font-bold tracking-tight">PROYECTOS SELECCIONADOS</h3>
            </div>
            <div className="flex gap-4">
              <button onClick={() => scroll('left')} className="p-3 border border-white/10 rounded-full hover:bg-[var(--accent)] hover:text-black transition-all">←</button>
              <button onClick={() => scroll('right')} className="p-3 border border-white/10 rounded-full hover:bg-[var(--accent)] hover:text-black transition-all">→</button>
            </div>
          </div>

          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-10"
          >
            {projects.map((p) => (
              <div key={p.id} className="min-w-[85%] md:min-w-[45%] snap-start slider-card p-10 rounded-2xl group">
                <div className="flex justify-between items-start mb-12">
                  <span className="font-mono text-4xl font-black opacity-10 group-hover:opacity-30 transition-opacity">{p.id}</span>
                  <span className="label-caps text-[9px] border border-[var(--accent)]/30 px-2 py-1">{p.tag}</span>
                </div>
                <h4 className="text-3xl font-bold mb-4">{p.title}</h4>
                <p className="text-[var(--text-dim)] mb-8 h-20 overflow-hidden text-sm leading-relaxed">{p.desc}</p>
                <div className="flex gap-3">
                  {p.tech.map(t => (
                    <span key={t} className="text-[9px] font-mono text-[var(--text-dim)]">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Professional Experience Log */}
        <section id="historial" className="mb-40">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tighter">HISTORIAL PROFESIONAL</h2>
            <div className="h-px flex-grow bg-gradient-to-r from-[var(--accent)] to-transparent opacity-20"></div>
            <span className="font-mono text-[10px] text-[var(--text-dim)]">LOG_FILE_2021_2025</span>
          </div>

          <div className="space-y-4">
            {/* Ajuntament de Molins de Rei */}
            <div className="slider-card p-8 group transition-all">
              <div className="flex flex-col md:flex-row justify-between gap-6">
                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="label-caps text-[var(--accent)]">Actualidad</span>
                    <span className="text-[var(--text-dim)] font-mono text-xs">// 6 MESES</span>
                  </div>
                  <h4 className="text-2xl font-bold mb-1">Desarrollador Web</h4>
                  <p className="text-[var(--accent)] font-mono text-sm mb-6">Ajuntament de Molins de Rei</p>
                  
                  <ul className="space-y-3 text-[var(--text-dim)] text-sm max-w-3xl">
                    <li className="flex gap-2">
                      <span className="text-[var(--accent)]">▹</span>
                      <span>Liderazgo técnico en la migración de <strong>+20 webs corporativas</strong> de PHP 7.4 a <strong>PHP 8.4</strong>, optimizando el rendimiento y la compatibilidad del servidor.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[var(--accent)]">▹</span>
                      <span>Diseño y desarrollo integral de una plataforma centralizada en WordPress para la <strong>gestión de entidades locales</strong>.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[var(--accent)]">▹</span>
                      <span>Implementación de protocolos de <strong>securización y mantenimiento preventivo</strong> en entornos de administración pública.</span>
                    </li>
                  </ul>
                </div>
                <div className="md:w-48 flex flex-wrap gap-2 content-start">
                  {['PHP 8.4', 'WordPress', 'Security', 'SQL'].map(tech => (
                    <span key={tech} className="text-[9px] font-mono border border-white/10 px-2 py-1 rounded bg-white/[0.02]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Grupo Letamendi */}
            <div className="slider-card p-8 group transition-all border-l-2 border-l-[var(--accent)]/30">
              <div className="flex flex-col md:flex-row justify-between gap-6">
                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="label-caps text-slate-500">2022 — 2023</span>
                    <span className="text-[var(--text-dim)] font-mono text-xs">// 1 AÑO 2 MESES</span>
                  </div>
                  <h4 className="text-2xl font-bold mb-1">Asesor de Servicio Postventa</h4>
                  <p className="text-slate-400 font-mono text-sm mb-6">Grupo Letamendi</p>
                  
                  <ul className="space-y-3 text-[var(--text-dim)] text-sm max-w-3xl">
                    <li className="flex gap-2">
                      <span className="text-slate-500">▹</span>
                      <span>Gestión integral de <strong>350 clientes mensuales</strong>, supervisando el ciclo completo desde la recepción hasta la entrega técnica.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-slate-500">▹</span>
                      <span>Control analítico de facturación anual de aprox. <strong>4 millones de euros</strong>.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-slate-500">▹</span>
                      <span>Elaboración técnica de presupuestos y gestión de autorizaciones de renting para reparaciones de alta complejidad.</span>
                    </li>
                  </ul>
                </div>
                <div className="md:w-48">
                  <div className="p-4 bg-[var(--bg-base)] rounded-lg border border-white/5">
                    <div className="text-2xl font-bold text-[var(--accent)] tracking-tighter">4M€</div>
                    <div className="label-caps text-[8px] opacity-50">Annual_Rev_Ops</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Grupo Carhaus */}
            <div className="slider-card p-8 group transition-all opacity-80 hover:opacity-100">
              <div className="flex flex-col md:flex-row justify-between gap-6">
                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="label-caps text-slate-500">2021 — 2022</span>
                    <span className="text-[var(--text-dim)] font-mono text-xs">// 10 MESES</span>
                  </div>
                  <h4 className="text-2xl font-bold mb-1">Asesor de Servicio (Prácticas)</h4>
                  <p className="text-slate-400 font-mono text-sm mb-6">Grupo Carhaus</p>
                  
                  <p className="text-[var(--text-dim)] text-sm italic">
                    Trato integral con 200 clientes mensuales y soporte en la gestión operativa del departamento de postventa técnica.
                  </p>
                </div>
                <div className="md:w-48 text-right self-end">
                  <span className="label-caps text-[9px] opacity-30">Entry_Level_System</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack Matrix */}
        <section id="stack" className="mb-40">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tighter">TECH_STACK</h2>
            <div className="h-px flex-grow bg-gradient-to-r from-[var(--accent)] to-transparent opacity-10"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {stack.map((group) => (
              <div key={group.category} className="recessed-surface p-8 group">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 bg-[var(--accent)]/10 rounded-lg text-[var(--accent)]">
                    <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='w-5 h-5'%3E%3Cpath d='M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8Z'/%3E%3C/svg%3E" alt="icon" className="w-5 h-5" />
                  </div>
                  <h4 className="label-caps text-sm">{group.category}</h4>
                </div>

                <div className="flex flex-wrap gap-3">
                  {group.techs.map((tech) => (
                    <div key={tech} className="tech-badge">
                      <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='w-3 h-3'%3E%3Cpolygon points='22 3 2 3 10 12.46 10 19 11 21 9 21 9 14.54 21 14.54 20 21 22 14 21 14'/%3E%3C/svg%3E" alt="icon" className="tech-icon" />
                      <span className="tech-name">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
        <section id="trayectoria" className="mb-40 max-w-4xl mx-auto">
          <div className="flex items-center gap-6 mb-20">
            <h2 className="text-4xl font-black tracking-tighter">EXPERIENCIA & <span className="text-[var(--text-silver)]">SISTEMAS</span></h2>
            <div className="h-px flex-grow bg-white/10"></div>
          </div>

          <div className="timeline-container">
            <div className="timeline-line"></div>

            {/* EVENTO 1: AJUNTAMENT */}
            <div className="timeline-event group">
              <div className="timeline-dot pulse"></div>
              <div className="recessed-surface p-8 ml-6">
                <div className="flex flex-col md:flex-row justify-between mb-6 gap-4">
                  <div>
                    <span className="label-caps text-[var(--accent)] mb-2 block">2025 — PRESENTE</span>
                    <h4 className="text-2xl font-bold">Desarrollador Web</h4>
                    <p className="font-mono text-sm opacity-60">Ajuntament de Molins de Rei</p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-[9px] font-mono px-3 py-1 bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20 rounded">SISTEMA_ACTIVO</span>
                  </div>
                </div>
                
                <ul className="space-y-4 text-sm text-[var(--text-silver)] leading-relaxed">
                  <li className="flex gap-3">
                    <span className="text-[var(--accent)] mt-1">/</span>
                    <span>Migración estructural de <strong>+20 entornos WordPress</strong> a la arquitectura <strong>PHP 8.4</strong>.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[var(--accent)] mt-1">/</span>
                    <span>Desarrollo de plataforma para gestión de entidades con protocolos de alta seguridad.</span>
                  </li>
                </ul>

                <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap gap-3">
                  {['WordPress', 'PHP 8.4', 'Security', 'SQL'].map(tag => (
                    <span key={tag} className="font-mono text-[9px] opacity-40">#{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* EVENTO 2: LETAMENDI */}
            <div className="timeline-event group">
              <div className="timeline-dot"></div>
              <div className="recessed-surface p-8 ml-6">
                <div className="flex flex-col md:flex-row justify-between mb-6 gap-4">
                  <div>
                    <span className="label-caps text-slate-500 mb-2 block">2022 — 2023</span>
                    <h4 className="text-2xl font-bold text-slate-300">Asesor Postventa Senior</h4>
                    <p className="font-mono text-sm opacity-40">Grupo Letamendi</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-black text-[var(--accent)] opacity-80">4M€</div>
                    <div className="label-caps text-[8px] opacity-40">REV_MANAGED_ANUAL</div>
                  </div>
                </div>
                
                <p className="text-sm text-[var(--text-silver)] leading-relaxed mb-6">
                  Gestión analítica y técnica de <strong>350 clientes mensuales</strong>. Optimización de procesos de facturación y control de KPIs de servicio en entorno automotriz premium.
                </p>

                <div className="flex gap-2">
                  <div className="h-1 flex-grow bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-slate-500 w-[100%] opacity-30"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* EVENTO 3: CARHAUS */}
            <div className="timeline-event group opacity-60 hover:opacity-100">
              <div className="timeline-dot"></div>
              <div className="recessed-surface p-8 ml-6">
                <div className="mb-4">
                  <span className="label-caps text-slate-500 mb-2 block">2021 — 2022</span>
                  <h4 className="text-xl font-bold">Asesor de Servicio (Prácticas)</h4>
                  <p className="font-mono text-xs opacity-50">Grupo Carhaus</p>
                </div>
                <p className="text-xs text-[var(--text-silver)] italic">
                  Soporte operativo y atención directa a más de 200 clientes mensuales en ciclo de postventa.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contacto" className="mb-40 pt-20 border-t border-white/5">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="label-caps mb-4">CONNECT_SYSTEM</h2>
              <h3 className="text-5xl font-black tracking-tighter mb-6">¿LISTO PARA INICIAR?</h3>
              <p className="text-[var(--text-silver)] max-w-lg mx-auto">
                Abierto a nuevas oportunidades en desarrollo web, Big Data e IA. 
                Disponible para incorporación inmediata en Barcelona y alrededores.
              </p>
            </div>

            <div className="contact-grid mb-12">
              {/* Email */}
              <a href="mailto:javierfigueroa969@gmail.com" className="contact-card group">
                <div className="p-3 bg-white/5 rounded-lg group-hover:text-[var(--accent)] transition-colors">
                  <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='w-5 h-5'%3E%3Cpolyline points='3.8 8 6.8 11 12 11 17.2 11 20.2 14.2 22 16 20.2 18 17.2 14.8 12 14.8 6.8 18 3.8 15'%3E%3C/polyline%3E%3C/svg%3E" alt="mail" />
                </div>
                <div>
                  <p className="label-caps text-[8px] opacity-50">EMAIL</p>
                  <p className="text-sm font-bold">javierfigueroa969@gmail.com</p>
                </div>
              </a>

              {/* Phone */}
              <a href="tel:+34630108179" className="contact-card group">
                <div className="p-3 bg-white/5 rounded-lg group-hover:text-[var(--accent)] transition-colors">
                  <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='w-5 h-5'%3E%3Cpath d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.05 12.05 0 0 0 .71 5.49 2 2 0 0 1-.25 1.22L4.06 16m11-5.76 4 1.5-1.41 4a2 2 0 0 1-2.22 1.2l-2.33-1.84-3.67 1.06a2 2 0 0 1-2.8-2.8l1.06-3.67-1.84-2.33a2 2 0 0 1 1.22-2.22l4-3.02 1.5-4A2 2 0 0 1 15.25 4h3a2 2 0 0 1 1.72.25l.71 4a2 2 0 0 1-.25 1.22Z'/%3E%3C/svg%3E" alt="phone" />
                </div>
                <div>
                  <p className="label-caps text-[8px] opacity-50">TELÉFONO</p>
                  <p className="text-sm font-bold">+34 630 10 81 79</p>
                </div>
              </a>

              {/* LinkedIn */}
              <a href="https://linkedin.com/in/javierfigueroavicente" target="_blank" rel="noreferrer" className="contact-card group">
                <div className="p-3 bg-white/5 rounded-lg group-hover:text-[var(--accent)] transition-colors">
                  <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='w-5 h-5'%3E%3Cpath d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6Z'/%3E%3Crect x='2' y='9' width='4' height='12'/%3E%3Crect x='14' y='9' width='4' height='5'/%3E%3Cpath d='M10 15a3 3 0 0 0-3 3v1h6v-1a3 3 0 0 0-3-3Z'/%3E%3C/svg%3E" alt="linkedin" />
                </div>
                <div>
                  <p className="label-caps text-[8px] opacity-50">LINKEDIN</p>
                  <p className="text-sm font-bold flex items-center gap-2">
                    javierfigueroavicente
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="contact-card">
                <div className="p-3 bg-white/5 rounded-lg text-[var(--accent)]">
                  <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='w-5 h-5'%3E%3Cpath d='M21 10c0 7.957-4.3 15.429-8.829 15.429-4.53 0-8.829-7.472-8.829-15.429 0-8.486 6.843-12.672 11.54-13.024v20.452h2.292v-11.357c4.697 0.352 11.54 4.538 11.54 13.024Z'/%3E%3Ccircle cx='12' cy='10' r='2'/%3E%3C/svg%3E" alt="location" />
                </div>
                <div>
                  <p className="label-caps text-[8px] opacity-50">UBICACIÓN</p>
                  <p className="text-sm font-bold">Molins de Rei, Barcelona</p>
                </div>
              </div>
            </div>

            {/* Botón de Descarga CV */}
            <div className="flex flex-col items-center gap-6 p-12 bg-white/[0.02] border border-dashed border-white/10 rounded-3xl">
              <div className="text-center">
                <h4 className="text-xl font-bold mb-2">Documentación Técnica</h4>
                <p className="text-sm text-[var(--text-silver)] mb-8">
                  Descarga mi currículum completo en formato PDF para una revisión detallada.
                </p>
              </div>
              
              <a
                href="/path-to-your-cv.pdf"
                download="CV_Javier_Figueroa_Vicente.pdf"
                className="btn-download"
              >
                <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='w-4 h-4'%3E%3Cpath d='M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4'/%3E%3Cpolyline points='7 10 12 15 17 10'/%3E%3Cline x1='12' y1='15' x2='12' y2='19'/%3E%3C/svg%3E" alt="download" />
                DESCARGAR CV_PDF
              </a>
              
              <p className="font-mono text-[9px] opacity-30 uppercase tracking-[0.2em]">
                v2.1 // SHA-256: 8D3F...E192
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-20 border-t border-white/5 text-center">
        <p className="label-caps opacity-30 text-[9px]">JAVIER FIGUEROA VICENTE // BARCELONA_2026 // ALL_RIGHTS_RESERVED</p>
      </footer>
    </div>
  )
}