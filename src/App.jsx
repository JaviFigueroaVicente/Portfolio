import { useState, useRef, useEffect } from 'react'
import { motion } from "framer-motion"; 
import './App.css'
import csharp from "./assets/logos/csharp.png"
import css from "./assets/logos/css.png"
import dbt from "./assets/logos/dbt.png"
import django from "./assets/logos/django.svg"
import docker from "./assets/logos/docker.webp"
import git from "./assets/logos/git.png"
import html from "./assets/logos/html.png"
import java from "./assets/logos/java.png"
import js from "./assets/logos/js.png"
import laravel from "./assets/logos/laravel.png"
import matplotlib from "./assets/logos/matplotlib.png"
import mongodb from "./assets/logos/mongodb.png"
import nodejs from "./assets/logos/nodejs.webp"
import numpy from "./assets/logos/numpy.svg"
import pandas from "./assets/logos/pandas.png"
import php from "./assets/logos/php.png"
import postgres from "./assets/logos/postgres.png"
import powerbi from "./assets/logos/powerbi.png"
import python from "./assets/logos/python.png"
import react from "./assets/logos/react.png"
import scikit from "./assets/logos/scikit.png" 
import seaborn from "./assets/logos/seaborn.svg"
import sql from "./assets/logos/sql.webp"
import tailwind from "./assets/logos/tailwind.png"
import tensorflow from "./assets/logos/tensorflow.png"
import vue from "./assets/logos/vue.png"
import wordpress from "./assets/logos/wordpress.png"
import aws from "./assets/logos/aws.png"
import pyspark from "./assets/logos/pyspark.png"
import fastapi from "./assets/logos/fastapi.svg"

export default function App() {
  const scrollRef = useRef(null);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, []);

  const techLogos = {
    "Pandas": pandas, "Numpy": numpy, "Tensorflow": tensorflow, "Matplotlib": matplotlib, 
    "Seaborn": seaborn, "Power BI": powerbi, "Scikit-Learn": scikit, "dbt": dbt,
    "PHP": php, "Python": python, "Java": java, "Laravel": laravel, 
    "Django": django, "Node.js": nodejs, "C#": csharp,
    "React": react, "Vue.js": vue, "JavaScript": js, "TailwindCSS": tailwind, 
    "HTML5": html, "CSS3": css,
    "SQL": sql, "PostgreSQL": postgres, "MongoDB": mongodb, "Git": git, 
    "Docker": docker, "WordPress": wordpress, "AWS": aws, "PySpark": pyspark, "FastAPI": fastapi
  };
  
  const stack = [
    {
      category: "BIG DATA & IA",
      techs: ["Pandas", "Numpy", "Tensorflow", "Matplotlib", "Seaborn", "Power BI", "Scikit-Learn", "dbt", "PySpark", "AWS"]
    },
    {
      category: "BACKEND & LOGIC",
      techs: ["FastAPI", "Python","PHP",  "Java", "Laravel", "Django", "Node.js", "C#"]
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
      desc: "Modernización de +20 webs municipales, optimizando seguridad y rendimiento.",
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
      const scrollAmount = clientWidth * 0.8; 
      
      const scrollTo = direction === 'left' 
        ? scrollLeft - scrollAmount 
        : scrollLeft + scrollAmount;

      scrollRef.current.scrollTo({ 
        left: scrollTo, 
        behavior: 'smooth' 
      });
    }
  };

  const TimelineEvent = ({ children, delay, pulse = false, isLegacy = false }) => (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
      className={`timeline-event group ${isLegacy ? 'opacity-60 hover:opacity-100' : ''}`}
    >
      <div className={`timeline-dot ${pulse ? 'pulse' : ''}`}></div>
      <div className="recessed-surface p-8 ml-6 transition-all duration-300 hover:border-[--accent] group-hover:shadow-[0_0_30px_rgba(0,229,255,0.05)]">
        {children}
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen">
      {/* Glow Decorativo de fondo corregido de forma limpia */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 1.5, ease: "linear" }}
        className="fixed top-[-10%] right-[-10%] w-600 h-600 bg-[--accent] opacity-[0.05] blur-[150px] -z-10 rounded-full" 
      />

      <nav className="fixed top-0 w-full z-50 bg-[--bg-base]/80 backdrop-blur-lg border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <span className="font-mono text-sm font-bold tracking-widest text-[--accent]">J.FIGUEROA_VICENTE</span>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="btn-primary"
          >
            CONTACTO
          </motion.button>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 pt-40">
        {/* Contenedor de la foto del Hero con las clases reparadas y limpias */}
        <section className="flex flex-col md:flex-row gap-16 items-center py-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: -2 }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
            className="w-64 h-80 bg-linear-to-br from-slate-800 to-black rounded-2xl border-2 border-white/10 shrink-0 overflow-hidden relative group"
          >
            <div className="absolute inset-0 bg-[--accent]/10 group-hover:bg-transparent transition-colors"></div>
            <div className="absolute bottom-4 left-4 label-caps text-[8px]">ID_SCAN_ACTIVE</div>
          </motion.div>
          
          <div>
            <h1 className="text-7xl font-black tracking-tighter mb-6 overflow-hidden">
              <motion.span
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="block"
              >
                Ingeniería Web
              </motion.span> 
              <motion.span 
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
                className="text-[--text-secondary] italic block"
              >
                & IA.
              </motion.span>
            </h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-xl text-[--text-secondary] text-lg"
            >
              Especialista en modernización de sistemas y optimización de infraestructuras críticas.
            </motion.p>
          </div>
        </section>

        <section id="proyectos" className="mb-40">
          <div className="flex justify-between items-end mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <h2 className="label-caps mb-4">Portfolio_v1.0</h2>
              <h3 className="text-4xl font-bold tracking-tight">PROYECTOS SELECCIONADOS</h3>
            </motion.div>

            <div className="flex gap-4">
              <motion.button 
                whileTap={{ scale: 0.9 }}
                onClick={() => scroll('left')} 
                className="group p-4 border border-white/10 rounded-full hover:border-[--accent] transition-all active:scale-90"
              >
                <span className="block group-hover:-translate-x-1 transition-transform">←</span>
              </motion.button>
              <motion.button 
                whileTap={{ scale: 0.9 }}
                onClick={() => scroll('right')} 
                className="group p-4 border border-white/10 rounded-full hover:border-[--accent] transition-all active:scale-90"
              >
                <span className="block group-hover:translate-x-1 transition-transform">→</span>
              </motion.button>
            </div>
          </div>

          <motion.div 
            ref={scrollRef}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex gap-8 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-12 px-2"
          >
            {projects.map((p, index) => (
              <motion.div 
                key={p.id} 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12, duration: 0.5, ease: "easeOut" }}
                whileHover={{ y: -5 }}
                className="min-w-[90%] md:min-w-105 snap-start recessed-surface p-10 group relative overflow-hidden hover:border-[--accent]"
              >
                <div className="absolute -right-4 -top-4 w-32 h-32 bg-[--accent]/5 rounded-full blur-3xl group-hover:bg-[--accent]/10 transition-colors" />

                <div className="flex justify-between items-start mb-16 relative z-10">
                  <span className="font-mono text-5xl font-black text-white/5 group-hover:text-[--accent]/20 transition-all duration-500">
                    {p.id}
                  </span>
                  <span className="label-caps text-[9px] border border-white/10 group-hover:border-[--accent] px-3 py-1 rounded-full bg-white/5">
                    {p.tag}
                  </span>
                </div>

                <div className="relative z-10">
                  <h4 className="text-3xl font-bold mb-4 group-hover:text-[--accent] transition-colors italic tracking-tighter">
                    {p.title}
                  </h4>
                  <p className="text-[--text-dim] mb-10 h-20 overflow-hidden text-sm leading-relaxed font-light">
                    {p.desc}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {p.tech.map(t => (
                      <span 
                        key={t} 
                        className="text-[10px] font-mono text-[--text-dim] bg-white/5 px-2 py-1 border border-white/5 group-hover:border-[--accent] transition-all"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section id="trayectoria" className="mb-40 max-w-5xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center gap-8 mb-24"
          >
            <div className="flex flex-col">
              <span className="label-caps opacity-50 mb-2">Historial_Log</span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter italic">
                EXPERIENCIA <span className="text-[--accent]">&</span> SISTEMAS
              </h2>
            </div>
            <div className="h-px grow bg-linear-to-r from-white/10 to-transparent"></div>
          </motion.div>

          <div className="timeline-container relative">
            <motion.div 
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="timeline-line origin-top opacity-30"
            ></motion.div>

            <TimelineEvent delay={0.2} pulse={true}>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="label-caps">2025 — Trayectoria Reciente</span>
                      <span className="text-[9px] font-mono px-2 py-0.5 bg-white/10 text-[--accent] border border-white/20 rounded uppercase tracking-widest animate-pulse">
                        System_Log
                      </span>
                    </div>
                    <h4 className="text-3xl font-bold tracking-tight">Desarrollador Web</h4>
                    <p className="text-[--accent] font-mono text-sm opacity-80 uppercase tracking-tighter">
                      Consultoría & Desarrollo Técnico
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                  <ul className="md:col-span-8 space-y-4 text-base text-[--text-silver]/80">
                    <li className="flex gap-4">
                      <span className="text-[--accent] font-mono">01_</span>
                      <span>Migración estructural de <strong>+20 environments WordPress</strong> hacia arquitectura <strong>PHP 8.4</strong>, mejorando tiempos de respuesta en un 30%.</span>
                    </li>
                    <li className="flex gap-4">
                      <span className="text-[--accent] font-mono">02_</span>
                      <span>Arquitectura de plataforma centralizada para gestión de entidades bajo protocolos de <strong>alta seguridad (SSL/Hardening)</strong>.</span>
                    </li>
                  </ul>
                  
                  <div className="md:col-span-4 flex flex-wrap gap-2 content-start border-l border-white/5 pl-6">
                    {['WordPress', 'PHP 8.4', 'Security', 'SQL'].map(tag => (
                      <span key={tag} className="text-[10px] font-mono text-white/40 bg-white/5 px-2 py-1 rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </TimelineEvent>

            <TimelineEvent delay={0.4}>
              <div className="grid grid-cols-1 md:grid-cols-10 gap-8">
                <div className="md:col-span-7">
                  <span className="label-caps text-slate-500 mb-2 block">2022 — 2023</span>
                  <h4 className="text-2xl font-bold mb-1">Asesor Postventa Senior</h4>
                  <p className="font-mono text-sm text-slate-400 mb-6">Grupo Letamendi</p>
                  
                  <p className="text-[--text-silver]/70 leading-relaxed mb-6 italic">
                    "Optimización de flujos operativos y gestión analítica de KPIs para servicios premium."
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-[10px] font-mono opacity-50">
                      <span>EFICIENCIA_GESTIÓN</span>
                      <span>350_CLIENTES/MES</span>
                    </div>
                    <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                        className="h-full bg-slate-500 opacity-40"
                      ></motion.div>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-3 flex md:flex-col justify-center items-center md:items-end bg-white/2 rounded-xl p-6 border border-white/5">
                  <motion.span 
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 120, delay: 0.6 }}
                    className="text-4xl font-black text-[--accent]"
                  >
                    4M€
                  </motion.span>
                  <span className="label-caps text-[8px] text-center md:text-right opacity-40 mt-2">
                    Revenue_Managed <br/> Anual_Ops
                  </span>
                </div>
              </div>
            </TimelineEvent>

            <TimelineEvent delay={0.6} isLegacy={true}>
              <div className="opacity-60">
                <span className="label-caps text-slate-500 mb-1 block">2021 — 2022</span>
                <h4 className="text-xl font-bold">Asesor de Servicio (Prácticas)</h4>
                <p className="text-sm text-slate-400 font-mono mb-4">Grupo Carhaus</p>
                <p className="text-xs text-[--text-silver]/50 border-l-2 border-white/10 pl-4 italic">
                  Soporte operativo y ciclo de atención técnica para +200 clientes.
                </p>
              </div>
            </TimelineEvent>
          </div>
        </section>

        <section id="stack" className="mb-40">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tighter">TECH_STACK</h2>
            <div className="h-px grow bg-linear-to-r from-white/10 to-transparent opacity-10"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {stack.map((group, groupIndex) => (
              <motion.div 
                key={group.category} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: groupIndex * 0.1, ease: "easeOut" }}
                className="recessed-surface p-8 group border border-white/5 hover:border-[--accent] transition-all duration-500"
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-1 h-4 bg-[--accent] rounded-full shadow-[0_0_8px_var(--accent)]"></div>
                  <h4 className="label-caps text-xs tracking-[0.2em] opacity-70 group-hover:opacity-100 transition-opacity">
                    {group.category}
                  </h4>
                </div>

                <div className="flex flex-wrap gap-4">
                  {group.techs.map((tech) => (
                    <motion.div 
                      key={tech} 
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                      className="flex items-center gap-2 px-3 py-2 bg-white/2 border border-white/5 rounded-lg hover:bg-white/5 hover:border-[--accent] transition-all group/item"
                    >
                      {techLogos[tech] ? (
                        <img 
                          src={techLogos[tech]} 
                          alt={tech} 
                          className="w-5 h-5 object-contain filter grayscale group-hover/item:grayscale-0 transition-all duration-300" 
                        />
                      ) : (
                        <div className="w-2 h-2 rounded-full bg-white/20" />
                      )}
                      <span className="font-mono text-[11px] text-slate-400 group-hover/item:text-white transition-colors">
                        {tech}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
        
        <section id="formacion" className="mb-40 max-w-5xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-8 mb-20"
          >
            <div className="flex flex-col">
              <span className="label-caps opacity-50 mb-2">Academic_Records</span>
              <h2 className="text-4xl font-black tracking-tighter italic">FORMACIÓN ACADÉMICA</h2>
            </div>
            <div className="h-px grow bg-linear-to-r from-white/10 to-transparent"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex"
            >
              <div className="recessed-surface p-8 border-l border-white/10 bg-white/1 w-full flex flex-col justify-between group hover:border-[--accent] transition-all duration-500">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[--accent] shadow-[0_0_8px_var(--accent)]"></div>
                      <span className="font-mono text-[10px] text-[--accent] tracking-[0.3em]">SYSTEM_GRADUATED</span>
                    </div>
                    <span className="text-[10px] font-mono opacity-40">2026_TITLED</span>
                  </div>
                  
                  <h3 className="text-3xl font-bold mb-2 group-hover:text-[--accent] transition-colors">CE Inteligencia Artificial y Big Data</h3>
                  <p className="text-[--text-silver] font-mono text-sm mb-6 opacity-60">Institut Bernat el Ferrer</p>
                  
                  <p className="text-sm text-[--text-silver]/80 leading-relaxed mb-8">
                    Especialización técnica avanzada en el despliegue de modelos de aprendizaje profundo y arquitecturas de datos masivos. Titulación completada satisfactoriamente.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {['Machine Learning', 'Deep Learning', 'Big Data', 'Python'].map(skill => (
                    <span key={skill} className="text-[9px] font-mono border border-white/5 px-2 py-1 rounded bg-white/5 opacity-40 group-hover:opacity-100 transition-opacity">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            <div className="flex flex-col gap-4">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                whileHover={{ x: 4 }}
                className="flex-1 recessed-surface p-8 border-l border-white/10 hover:border-[--accent] transition-all group flex flex-col justify-center"
              >
                <span className="label-caps text-slate-500 mb-2 block">2023 — 2025</span>
                <h4 className="text-xl font-bold group-hover:text-white transition-colors">CFGS Desarrollo de Aplicaciones Web</h4>
                <p className="text-sm text-slate-400 font-mono mt-1">Institut Bernat el Ferrer</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                whileHover={{ x: 4 }}
                className="flex-1 recessed-surface p-8 border-l border-white/10 hover:border-[--accent] transition-all group opacity-60 hover:opacity-100 flex flex-col justify-center"
              >
                <span className="label-caps text-slate-500 mb-2 block">2020 — 2022</span>
                <h4 className="text-xl font-bold group-hover:text-white transition-colors">CFGS Gestión de Ventas y Espacios Comerciales</h4>
                <p className="text-sm text-slate-400 font-mono mt-1">Institut Joan Brossa</p>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="contacto" className="mb-40 pt-20 border-t border-white/5">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="label-caps mb-4">CONNECT_SYSTEM</h2>
              <h3 className="text-5xl font-black tracking-tighter mb-6">¿LISTO PARA INICIAR?</h3>
              <p className="text-[--text-silver] max-w-lg mx-auto">
                Abierto a nuevas oportunidades en desarrollo web, Big Data e IA. 
                Disponible para incorporación inmediata en Barcelona y alrededores.
              </p>
            </div>

            <div className="contact-grid mb-12">
              <motion.a 
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                href="mailto:javierfigueroa969@gmail.com" 
                className="contact-card group"
              >
                <div className="p-3 bg-white/5 rounded-lg group-hover:text-[--accent] transition-colors">
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='w-5 h-5'><polyline points='3.8 8 6.8 11 12 11 17.2 11 20.2 14.2 22 16 20.2 18 17.2 14.8 12 14.8 6.8 18 3.8 15'></polyline></svg>
                </div>
                <div>
                  <p className="label-caps text-[8px] opacity-50">EMAIL</p>
                  <p className="text-sm font-bold">javierfigueroa969@gmail.com</p>
                </div>
              </motion.a>

              <motion.a 
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                href="tel:+34630108179" 
                className="contact-card group"
              >
                <div className="p-3 bg-white/5 rounded-lg group-hover:text-[--accent] transition-colors">
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='w-5 h-5'><path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.05 12.05 0 0 0 .71 5.49 2 2 0 0 1-.25 1.22L4.06 16m11-5.76 4 1.5-1.41 4a2 2 0 0 1-2.22 1.2l-2.33-1.84-3.67 1.06a2 2 0 0 1-2.8-2.8l1.06-3.67-1.84-2.33a2 2 0 0 1 1.22-2.22l4-3.02 1.5-4A2 2 0 0 1 15.25 4h3a2 2 0 0 1 1.72.25l.71 4a2 2 0 0 1-.25 1.22Z'/></svg>
                </div>
                <div>
                  <p className="label-caps text-[8px] opacity-50">TELÉFONO</p>
                  <p className="text-sm font-bold">+34 630 10 81 79</p>
                </div>
              </motion.a>

              <motion.a 
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                href="https://linkedin.com/in/javierfigueroavicente" 
                target="_blank" 
                rel="noreferrer" 
                className="contact-card group"
              >
                <div className="p-3 bg-white/5 rounded-lg group-hover:text-[--accent] transition-colors">
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='w-5 h-5'><path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6Z'/><rect x='2' y='9' width='4' height='12'/><rect x='14' y='9' width='4' height='5'/><path d='M10 15a3 3 0 0 0-3 3v1h6v-1a3 3 0 0 0-3-3Z' /></svg>
                </div>
                <div>
                  <p className="label-caps text-[8px] opacity-50">LINKEDIN</p>
                  <p className="text-sm font-bold flex items-center gap-2">
                    javierfigueroavicente
                  </p>
                </div>
              </motion.a>

              <div className="contact-card">
                <div className="p-3 bg-white/5 rounded-lg text-[--accent]">
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='w-5 h-5'><path d='M21 10c0 7.957-4.3 15.429-8.829 15.429-4.53 0-8.829-7.472-8.829-15.429 0-8.486 6.843-12.672 11.54-13.024v20.452h2.292v-11.357c4.697 0.352 11.54 4.538 11.54 13.024Z'/><circle cx='12' cy='10' r='2'/></svg>
                </div>
                <div>
                  <p className="label-caps text-[8px] opacity-50">UBICACIÓN</p>
                  <p className="text-sm font-bold">Molins de Rei, Barcelona</p>
                </div>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center gap-6 p-12 bg-white/5 border border-dashed border-white/10 rounded-3xl"
            >
              <div className="text-center">
                <h4 className="text-xl font-bold mb-2">Documentación Técnica</h4>
                <p className="text-sm text-[--text-silver] mb-8">
                  Descarga mi currículum completo en formato PDF para una revisión detallada.
                </p>
              </div>
              
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                href="/path-to-your-cv.pdf"
                download="CV_Javier_Figueroa_Vicente.pdf"
                className="btn-download"
              >
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='w-4 h-4'><path d='M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4'/><polyline points='7 10 12 15 17 10'/><line x1='12' y1='15' x2='12' y2='19'/></svg>
                DESCARGAR CV_PDF
              </motion.a>
              
              <p className="font-mono text-[9px] opacity-30 uppercase tracking-[0.2em]">
                v2.1 // SHA-256: 8D3F...E192
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="py-20 border-t border-white/5 text-center">
        <p className="label-caps opacity-30 text-[9px]">JAVIER FIGUEROA VICENTE // BARCELONA_2026 // ALL_RIGHTS_RESERVED</p>
      </footer>
    </div>
  )
}