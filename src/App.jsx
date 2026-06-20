import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from "framer-motion"; 
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
  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    const timer = setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant' 
      });
    }, 50);

    return () => clearTimeout(timer);
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
      desc: "Modernización de +20 webs municipales, optimizando seguridad y rendimiento bajo protocolos estrictos.",
      tech: ["WORDPRESS", "PHP 8.4", "SQL"],
      imagenes: [
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80"
      ],
      github: "https://github.com/javierfigueroavicente",
      urlWeb: "https://tu-sitio-demo.com"
    },
    {
      id: "02",
      tag: "DATA_OPERATIONS",
      title: "Revenue Logic 4M€",
      desc: "Optimización integral de flujos de facturación y análisis de datos postventa complejos para Grupo Letamendi.",
      tech: ["POWER BI", "ANALYTICS", "OPS"],
      imagenes: [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80"
      ],
      github: "https://github.com/javierfigueroavicente",
      urlWeb: "https://tu-sitio-demo.com"
    },
    {
      id: "03",
      tag: "AI_BIG_DATA",
      title: "IA Predictive Models",
      desc: "Desarrollo y entrenamiento de modelos predictivos avanzados basados en arquitecturas neuronales profundas.",
      tech: ["PYTHON", "TENSORFLOW", "PANDAS"],
      imagenes: [
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1527474305487-b87b222841cc?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80"
      ],
      github: "https://github.com/javierfigueroavicente",
      urlWeb: "https://tu-sitio-demo.com"
    }
  ];

  const [[page, direction], setPage] = useState([0, 0]);
  const activeIndex = Math.abs(page % projects.length);

  const navigateSlider = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  const currentProject = projects[activeIndex];

  const sliderVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 150 : -150,
      opacity: 0,
      scale: 0.98
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 28 },
        opacity: { duration: 0.3 }
      }
    },
    exit: (dir) => ({
      x: dir < 0 ? 150 : -150,
      opacity: 0,
      scale: 0.98,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 28 },
        opacity: { duration: 0.2 }
      }
    })
  };

  const ProjectImageSlider = ({ imgs, tag, title }) => {
    const listImgs = Array.isArray(imgs) ? imgs : [imgs];
    const [[innerPage, innerDirection], setInnerPage] = useState([0, 0]);
    const currentImgIndex = Math.abs(innerPage % listImgs.length);

    const navigateInner = (e, dir) => {
      e.stopPropagation();
      setInnerPage([innerPage + dir, dir]);
    };

    const innerVariants = {
      enter: (dir) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
      center: { x: 0, opacity: 1 },
      exit: (dir) => ({ x: dir < 0 ? "100%" : "-100%", opacity: 0 })
    };

    return (
      <div className="relative w-full h-full overflow-hidden bg-neutral-950 group/slider">
        <AnimatePresence initial={false} custom={innerDirection} mode="popLayout">
          <motion.img 
            key={innerPage}
            src={listImgs[currentImgIndex]} 
            alt={`${title} - view ${currentImgIndex}`}
            custom={innerDirection}
            variants={innerVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "spring", stiffness: 350, damping: 30 }}
            className="absolute inset-0 w-full h-full object-cover opacity-50 hover:opacity-70 transition-opacity duration-500"
          />
        </AnimatePresence>

        <div className="absolute inset-0 bg-linear-to-t md:bg-linear-to-r from-[--bg-base] via-transparent to-transparent" />
        
        <div className="absolute top-6 left-6 font-mono text-[10px] text-[--accent] font-bold tracking-[0.15em] bg-[--bg-base]/80 px-3 py-1.5 border border-white/10 rounded-md backdrop-blur-md z-20">
          {tag}
        </div>

        {listImgs.length > 1 && (
          <>
            <div className="absolute inset-y-0 left-3 flex items-center z-20 opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300">
              <button 
                onClick={(e) => navigateInner(e, -1)}
                className="w-8 h-8 rounded-full bg-black/70 border border-white/10 text-white flex items-center justify-center text-sm font-mono hover:border-[--accent] hover:text-[--accent] transition-all"
              >
                ‹
              </button>
            </div>
            <div className="absolute inset-y-0 right-3 flex items-center z-20 opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300">
              <button 
                onClick={(e) => navigateInner(e, 1)}
                className="w-8 h-8 rounded-full bg-black/70 border border-white/10 text-white flex items-center justify-center text-sm font-mono hover:border-[--accent] hover:text-[--accent] transition-all"
              >
                ›
              </button>
            </div>

            <div className="absolute bottom-4 right-6 flex gap-1.5 z-20">
              {listImgs.map((_, i) => (
                <div 
                  key={i} 
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === currentImgIndex ? 'bg-[--accent] scale-125' : 'bg-white/20'}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    );
  };

  const TimelineEvent = ({ children, delay, pulse = false, isLegacy = false }) => (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
      className={`timeline-event group ${isLegacy ? 'opacity-50 hover:opacity-100' : ''}`}
    >
      <div className={`timeline-dot ${pulse ? 'pulse' : ''}`}></div>
      <div className="recessed-surface p-8 ml-6 transition-all duration-300 hover:border-[--accent] group-hover:shadow-[0_0_30px_rgba(0,229,255,0.05)]">
        {children}
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen">
      {/* Glow Decorativo de fondo */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 1.5, ease: "linear" }}
        className="fixed top-[-10%] right-[-10%] w-600 h-600 bg-[--accent] opacity-[0.05] blur-[150px] -z-10 rounded-full" 
      />

      <nav className="fixed top-0 w-full z-50 bg-[--bg-base]/80 backdrop-blur-lg border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <span className="font-mono text-xs font-black tracking-[0.25em] text-[--accent]">J.FIGUEROA_VICENTE</span>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 5 }}
            className="btn-primary"
            onClick={() => document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' })}
          >
            CONTACTO
          </motion.button>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 pt-40">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row gap-16 items-center py-20">
          <motion.div 
            // Animación de entrada inicial: Efecto resorte (spring) físico sutil de 200ms de retraso para emular interfaz militar
            initial={{ opacity: 0, scale: 0.95, rotate: -3 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
            // Interactividad reactiva: Elevación sutil en eje Z, corrección de perspectiva cromática y feedback de clic físico
            whileHover={{ scale: 1.02, y: -4, transition: { duration: 0.3, ease: "easeOut" } }}
            whileTap={{ scale: 0.98 }}
            className="w-64 h-80 bg-linear-to-br from-slate-900 via-neutral-950 to-black rounded-2xl border-2 border-white/10 shrink-0 overflow-hidden relative group shadow-[0_0_50px_rgba(0,0,0,0.8)] flex flex-col justify-between p-6"
          >
            {/* Efecto de Rejilla Tecnológica Estética */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-position-[16px_16px]" />
            
            {/* Escáner láser táctico */}
            <div className="absolute inset-x-0 h-0.5 bg-linear-to-r from-transparent via-[--accent]/30 to-transparent top-0 animate-[scan_3s_ease-in-out_infinite]" style={{
              animationName: 'scan',
              keyframes: `
                @keyframes scan {
                  0%, 100% { top: 0%; opacity: 0; }
                  10%, 90% { opacity: 1; }
                  50% { top: 100%; opacity: 1; }
                }
              `
            }} />
            
            <div className="absolute inset-0 bg-[--accent]/5 group-hover:bg-transparent transition-colors duration-500">
              <img 
                src="RUTA_DE_TU_FOTO.jpg" 
                alt="Javier Figueroa" 
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500 filter grayscale contrast-125"
              />
            </div>
            
            {/* Fila superior de estatus de sistema */}
            <div className="relative z-10 flex justify-between items-start w-full">
              <span className="font-mono text-[10px] text-[--text-dim] tracking-widest font-bold">SYS_USER_v2.0</span>
              <div className="w-2.5 h-2.5 rounded-full bg-[--accent] shadow-[0_0_8px_var(--accent)] animate-pulse" />
            </div>

            {/* Iniciales con efecto de profundidad de interfaz flotante */}
            <div className="relative z-10 flex flex-col items-center justify-center my-auto">
              <span className="text-6xl font-black tracking-tighter text-white/10 font-mono select-none group-hover:text-[--accent]/20 group-hover:scale-105 transition-all duration-500">
                J_F
              </span>
            </div>

            {/* Metadatos del Desarrollador Principal */}
            <div className="relative z-10 flex flex-col gap-1 w-full">
              <div className="font-mono text-xs font-bold text-white tracking-wide uppercase">
                Javier Figueroa
              </div>
              <div className="font-mono text-[9px] text-[--accent] tracking-[0.15em] font-medium opacity-80">
                CORE_DEVELOPER
              </div>
            </div>
            
            <div className="absolute bottom-4 left-4 font-mono text-[8px] text-[--accent] tracking-[0.2em] font-bold bg-black/50 px-2 py-0.5 rounded border border-white/5">
              ID_SCAN_ACTIVE
            </div>
          </motion.div>
                    
          <div>
            <h1 className="text-6xl md:text-7xl font-black tracking-tighter mb-6 overflow-hidden leading-[1.05]">
              <motion.span
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="block uppercase tracking-tight text-white"
              >
                Ingeniería Web
              </motion.span> 
              <motion.span 
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
                className="text-[--accent] font-mono font-light text-5xl md:text-6xl block mt-2"
              >
                & CORE_IA //
              </motion.span>
            </h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-xl text-[--text-dim] text-base md:text-lg font-light leading-relaxed"
            >
              Especialista en modernización de sistemas complejos, optimización de infraestructuras críticas y despliegue de modelos predictivos de datos.
            </motion.p>
          </div>
        </section>

        {/* Sección de Proyectos */}
        <section id="proyectos" className="mb-40">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <h2 className="label-caps mb-3">Portfolio_v2.0</h2>
              <h3 className="section-title text-3xl md:text-4xl font-black tracking-tight">PROYECTOS SELECCIONADOS</h3>
            </motion.div>

            {/* Controles de Flechas */}
            <div className="flex gap-3">
              <motion.button 
                whileHover="hover"
                whileTap="tap"
                onClick={() => navigateSlider(-1)} 
                className="group relative p-4 border border-white/10 rounded-xl bg-[--bg-card] overflow-hidden flex items-center justify-center min-w-12.5 min-h-12.5"
                variants={{
                  hover: { 
                    borderColor: "var(--accent)",
                    boxShadow: "0 0 20px rgba(0, 229, 255, 0.15)"
                  },
                  tap: { scale: 0.92 }
                }}
                transition={{ type: "spring", stiffness: 400, damping: 18 }}
              >
                <motion.div className="absolute inset-0 bg-linear-to-tr from-[--accent]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <motion.span 
                  className="block text-sm font-mono relative z-10 text-white/50 group-hover:text-white"
                  variants={{ hover: { x: -2 } }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  ←
                </motion.span>
              </motion.button>

              <motion.button 
                whileHover="hover"
                whileTap="tap"
                onClick={() => navigateSlider(1)} 
                className="group relative p-4 border border-white/10 rounded-xl bg-[--bg-card] overflow-hidden flex items-center justify-center min-w-12.5 min-h-12.5"
                variants={{
                  hover: { 
                    borderColor: "var(--accent)",
                    boxShadow: "0 0 20px rgba(0, 229, 255, 0.15)"
                  },
                  tap: { scale: 0.92 }
                }}
                transition={{ type: "spring", stiffness: 400, damping: 18 }}
              >
                <motion.div className="absolute inset-0 bg-linear-to-tl from-[--accent]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <motion.span 
                  className="block text-sm font-mono relative z-10 text-white/50 group-hover:text-white"
                  variants={{ hover: { x: 2 } }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  →
                </motion.span>
              </motion.button>
            </div>
          </div>

          {/* Caja del Slider */}
          <div className="slider-card relative overflow-hidden rounded-2xl min-h-135 md:min-h-110 shadow-2xl">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={page}
                custom={direction}
                variants={sliderVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0 w-full h-full flex flex-col md:flex-row"
              >
                {/* Bloque Visual / Slider de Fotos Interno */}
                <div className="relative w-full md:w-1/2 h-60 md:h-full overflow-hidden bg-neutral-950">
                  <ProjectImageSlider 
                    imgs={currentProject.imagenes || currentProject.imagen} 
                    tag={currentProject.tag} 
                    title={currentProject.title} 
                  />
                </div>

                {/* Contenido / Texto */}
                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-between z-10 bg-transparent">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <span className="font-mono text-5xl font-black text-white/5 select-none">
                        {currentProject.id}
                      </span>
                    </div>

                    <h4 className="text-3xl font-black mb-3 tracking-tight text-white uppercase font-mono">
                      {currentProject.title}
                    </h4>
                    <p className="text-[--text-dim] text-sm md:text-base leading-relaxed font-light mb-8">
                      {currentProject.desc}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {currentProject.tech.map((t) => (
                        <span 
                          key={t} 
                          className="text-[10px] font-mono text-[--accent] bg-[--accent]/5 px-2.5 py-1 border border-[--accent]/20 rounded font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Acciones del Slider */}
                  <div className="flex items-center gap-4">
                    <motion.a
                      href={currentProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center gap-2 px-5 py-3 rounded-lg bg-white/5 border border-white/10 text-white font-mono text-xs hover:border-[--accent] hover:bg-white/2 transition-all duration-300"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[--text-dim]"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                      REPOSITORIO
                    </motion.a>

                    <motion.a
                      href={currentProject.urlWeb}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover="hover"
                      whileTap="tap"
                      style={{ backgroundColor: 'var(--accent)', color: '#000c10' }}
                      className="group relative flex items-center gap-2.5 px-6 py-3 rounded-lg font-mono text-xs font-black tracking-wider overflow-hidden z-10 select-none shadow-[0_4px_20px_rgba(0,229,255,0.2)]"
                      variants={{
                        hover: { 
                          scale: 1.02,
                          boxShadow: "0 0 25px rgba(0, 229, 255, 0.45)"
                        },
                        tap: { scale: 0.98 }
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    >
                      <motion.span 
                        className="absolute top-0 left-0 w-[200%] h-full bg-linear-to-r from-transparent via-white/30 to-transparent -skew-x-12 -z-10"
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{ 
                          repeat: Infinity, 
                          duration: 2.2, 
                          ease: "easeInOut",
                          repeatDelay: 0.5 
                        }}
                      />
                      <span>LIVE_DEMO</span>
                      <motion.svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2.5" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        className="w-4 h-4"
                        variants={{ hover: { x: 2, y: -2 } }}
                        transition={{ type: "spring", stiffness: 300, damping: 12 }}
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                        <polyline points="15 3 21 3 21 9"/>
                        <line x1="10" y1="14" x2="21" y2="3"/>
                      </motion.svg>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Indicador Lineal de Progreso */}
          <div className="flex gap-2 justify-start mt-6">
            {projects.map((_, idx) => (
              <div key={idx} className="relative w-12 h-1 bg-white/5 rounded-full overflow-hidden">
                {idx === activeIndex && (
                  <motion.div 
                    layoutId="activeBar" 
                    className="absolute inset-0 bg-[--accent]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Experiencia Profesional */}
        <section id="trayectoria" className="mb-40 max-w-5xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 mb-20"
          >
            <div className="flex flex-col">
              <span className="label-caps opacity-50 mb-2">Historial_Log</span>
              <h2 className="section-title text-3xl md:text-4xl font-black tracking-tight">
                EXPERIENCIA & SISTEMAS
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
                    <div className="flex items-center gap-3 mb-2">
                      <span className="label-caps text-[10px]">2025 — Trayectoria Reciente</span>
                      <span className="text-[9px] font-mono px-2 py-0.5 bg-[--accent]/10 text-[--accent] border border-[--accent]/20 rounded font-bold uppercase tracking-widest animate-pulse">
                        System_Active
                      </span>
                    </div>
                    <h4 className="text-2xl font-black tracking-tight text-white font-mono">DESARROLLADOR WEB</h4>
                    <p className="text-[--text-dim] font-mono text-xs opacity-80 uppercase tracking-wider mt-1">
                      Consultoría & Desarrollo Técnico Autónomo
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                  <ul className="md:col-span-8 space-y-4 text-sm md:text-base text-[--text-dim] leading-relaxed">
                    <li className="flex gap-4">
                      <span className="text-[--accent] font-mono font-bold">01_</span>
                      <span>Migración estructural de <strong>+20 environments WordPress</strong> hacia arquitectura avanzada <strong>PHP 8.4</strong>, mitigando deuda técnica y mejorando tiempos de respuesta globales en un 30%.</span>
                    </li>
                    <li className="flex gap-4">
                      <span className="text-[--accent] font-mono font-bold">02_</span>
                      <span>Arquitectura y securización de plataformas centralizadas bajo estrictos protocolos de infraestructura <strong>(SSL/Hardening de servidores)</strong>.</span>
                    </li>
                  </ul>
                  
                  <div className="md:col-span-4 flex flex-wrap gap-2 content-start border-t md:border-t-0 md:border-l border-white/5 pt-4 md:pt-0 md:pl-6">
                    {['WordPress', 'PHP 8.4', 'Security', 'SQL'].map(tag => (
                      <span key={tag} className="text-[10px] font-mono text-[--text-dim] bg-white/5 px-2.5 py-1 rounded border border-white/5">
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
                  <span className="label-caps text-[10px] opacity-40 mb-2 block">2022 — 2023</span>
                  <h4 className="text-2xl font-black tracking-tight text-white font-mono">ASESOR POSTVENTA SENIOR</h4>
                  <p className="font-mono text-xs text-[--text-dim] uppercase tracking-wider mt-1">Grupo Letamendi</p>
                  
                  <p className="text-[--text-dim] leading-relaxed my-6 text-sm italic font-light border-l border-white/10 pl-4">
                    "Optimización de flujos operativos analíticos y control estructurado de KPIs financieros para la gestión de servicios premium."
                  </p>
                  
                  <div className="space-y-2 max-w-md">
                    <div className="flex justify-between text-[10px] font-mono opacity-50">
                      <span>EFICIENCIA_GESTIÓN_DATA</span>
                      <span>350_CLIENTES / MES</span>
                    </div>
                    <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                        className="h-full bg-[--text-dim] opacity-20"
                      ></motion.div>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-3 flex md:flex-col justify-center items-center md:items-end bg-white/1 rounded-xl p-6 border border-white/5 shadow-inner">
                  <motion.span 
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 120, delay: 0.6 }}
                    className="text-4xl font-black text-[--accent] tracking-tighter font-mono"
                  >
                    4M€
                  </motion.span>
                  <span className="label-caps text-[8px] text-center md:text-right opacity-40 mt-2 leading-normal">
                    Revenue_Managed <br/> Anual_Ops
                  </span>
                </div>
              </div>
            </TimelineEvent>

            <TimelineEvent delay={0.5} isLegacy={true}>
              <div className="opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                <span className="label-caps text-[10px] opacity-40 mb-1 block">2021 — 2022</span>
                <h4 className="text-xl font-bold font-mono text-white">ASESOR DE SERVICIO (PRÁCTICAS)</h4>
                <p className="text-xs text-[--text-dim] font-mono uppercase tracking-wider mt-0.5">Grupo Carhaus</p>
                <p className="text-xs text-[--text-dim] font-light mt-4 italic">
                  Soporte operativo de flujos y ciclo de atención técnica de alta fidelidad para +200 cuentas.
                </p>
              </div>
            </TimelineEvent>
          </div>
        </section>

        {/* Stack Tecnológico */}
        <section id="stack" className="mb-40">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-16"
          >
            <h2 className="section-title text-2xl md:text-3xl font-black tracking-tight">TECH_STACK</h2>
            <div className="h-px grow bg-linear-to-r from-white/10 to-transparent opacity-10"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
        <div className="w-1.5 h-3.5 bg-[--accent] rounded-full shadow-[0_0_8px_var(--accent)]"></div>
        <h4 className="label-caps text-xs tracking-[0.2em] opacity-60 group-hover:opacity-100 transition-opacity font-bold">
          {group.category}
        </h4>
      </div>

      <div className="flex flex-wrap gap-3">
        {group.techs.map((tech) => (
          <motion.div 
            key={tech} 
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="flex items-center gap-2.5 px-3 py-2 bg-white/1 border border-white/5 rounded-lg hover:bg-[--accent]/5 hover:border-[--accent] transition-all group/item"
          >
            {techLogos[tech] ? (
              <img 
                src={techLogos[tech]} 
                alt={tech} 
                /* MODIFICACIÓN AQUÍ: A color en móviles (grayscale-0), gris en PC (md:grayscale) y color al hacer hover en PC */
                className="w-4 h-4 object-contain grayscale-0 md:grayscale md:group-hover/item:grayscale-0 transition-all duration-300" 
              />
            ) : (
              <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
            )}
            <span className="font-mono text-[11px] text-[--text-dim] group-hover/item:text-white transition-colors">
              {tech}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  ))}
</div>
        </section>
        
        {/* Formación Académica */}
        <section id="formacion" className="mb-40 max-w-5xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 mb-20"
          >
            <div className="flex flex-col">
              <span className="label-caps opacity-50 mb-2">Academic_Records</span>
              <h2 className="section-title text-3xl md:text-4xl font-black tracking-tight">FORMACIÓN ACADÉMICA</h2>
            </div>
            <div className="h-px grow bg-linear-to-r from-white/10 to-transparent"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex"
            >
              <div className="recessed-surface p-8 border-l border-white/10 bg-white/1 w-full flex flex-col justify-between group hover:border-[--accent] transition-all duration-500">
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[--accent] shadow-[0_0_8px_var(--accent)]"></div>
                      <span className="label-caps font-mono text-[9px] text-[--accent] tracking-[0.25em] font-bold">2025-2026</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-black mb-2 group-hover:text-[--accent] transition-colors font-mono uppercase tracking-tight text-white">
                    CE Inteligencia Artificial y Big Data
                  </h3>
                  <p className="text-[--text-dim] font-mono text-xs mb-6 opacity-60">Institut Bernat el Ferrer</p>
                  
                  <p className="text-sm text-[--text-dim] leading-relaxed mb-8 font-light">
                    Curso de Especialización (CE) técnico avanzado enfocado en el entrenamiento de modelos de aprendizaje profundo <strong>(Deep Learning)</strong>, despliegue estricto de redes neuronales y arquitecturas de análisis en producción masiva de entornos <strong>Big Data</strong>.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {['Machine Learning', 'Deep Learning', 'Big Data', 'Python'].map(skill => (
                    <span key={skill} className="text-[9px] font-mono border border-white/5 px-2.5 py-1 rounded bg-white/5 text-[--text-dim] opacity-50 group-hover:opacity-100 transition-opacity">
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
                whileHover={{ x: 3 }}
                className="flex-1 recessed-surface p-8 border-l border-white/10 hover:border-[--accent] transition-all group flex flex-col justify-center"
              >
                <span className="label-caps text-[10px] opacity-40 mb-2 block">2023 — 2025</span>
                <h4 className="text-xl font-bold font-mono group-hover:text-white transition-colors text-white/90">CFGS Desarrollo de Aplicaciones Web</h4>
                <p className="text-xs text-[--text-dim] font-mono mt-1 opacity-60">Institut Bernat el Ferrer</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                whileHover={{ x: 3 }}
                className="flex-1 recessed-surface p-8 border-l border-white/10 hover:border-[--accent] transition-all group opacity-50 hover:opacity-100 flex flex-col justify-center"
              >
                <span className="label-caps text-[10px] opacity-40 mb-2 block">2020 — 2022</span>
                <h4 className="text-xl font-bold font-mono group-hover:text-white transition-colors text-white/90">CFGS Gestión de Ventas y Espacios Comerciales</h4>
                <p className="text-xs text-[--text-dim] font-mono mt-1 opacity-60">Institut Joan Brossa</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" className="mb-40 pt-20 border-t border-white/5">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="label-caps mb-3">Connect_System</h2>
              <h3 className="section-title text-4xl md:text-5xl font-black tracking-tight mb-6">¿LISTO PARA INICIAR?</h3>
              <p className="text-[--text-dim] max-w-lg mx-auto font-light text-sm md:text-base leading-relaxed">
                Abierto a nuevos desafíos de alto impacto técnico en entornos de desarrollo web, analítica de Big Data e IA. Disponible para incorporación en Barcelona.
              </p>
            </div>

            <div className="contact-grid mb-12">
              <motion.a 
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                href="mailto:javierfigueroa969@gmail.com" 
                className="contact-card group"
              >
                <div className="p-3 bg-white/5 rounded-lg text-[--text-dim] group-hover:text-[--accent] group-hover:bg-[--accent]/5 transition-all">
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='w-5 h-5'><polyline points='3.8 8 6.8 11 12 11 17.2 11 20.2 14.2 22 16 20.2 18 17.2 14.8 12 14.8 6.8 18 3.8 15'></polyline></svg>
                </div>
                <div>
                  <p className="label-caps text-[8px] opacity-40">EMAIL</p>
                  <p className="text-sm font-bold font-mono text-white/90 mt-0.5">javierfigueroa969@gmail.com</p>
                </div>
              </motion.a>

              <motion.a 
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                href="tel:+34630108179" 
                className="contact-card group"
              >
                <div className="p-3 bg-white/5 rounded-lg text-[--text-dim] group-hover:text-[--accent] group-hover:bg-[--accent]/5 transition-all">
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='w-5 h-5'><path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.05 12.05 0 0 0 .71 5.49 2 2 0 0 1-.25 1.22L4.06 16m11-5.76 4 1.5-1.41 4a2 2 0 0 1-2.22 1.2l-2.33-1.84-3.67 1.06a2 2 0 0 1-2.8-2.8l1.06-3.67-1.84-2.33a2 2 0 0 1 1.22-2.22l4-3.02 1.5-4A2 2 0 0 1 15.25 4h3a2 2 0 0 1 1.72.25l.71 4a2 2 0 0 1-.25 1.22Z'/></svg>
                </div>
                <div>
                  <p className="label-caps text-[8px] opacity-40">TELÉFONO</p>
                  <p className="text-sm font-bold font-mono text-white/90 mt-0.5">+34 630 10 81 79</p>
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
                <div className="p-3 bg-white/5 rounded-lg text-[--text-dim] group-hover:text-[--accent] group-hover:bg-[--accent]/5 transition-all">
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='w-5 h-5'><path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6Z'/><rect x='2' y='9' width='4' height='12'/><circle cx='4' cy='4' r='2'/></svg>
                </div>
                <div>
                  <p className="label-caps text-[8px] opacity-40">LINKEDIN</p>
                  <p className="text-sm font-bold font-mono text-white/90 mt-0.5">javierfigueroavicente</p>
                </div>
              </motion.a>

              <div className="contact-card border border-white/5">
                <div className="p-3 bg-white/5 rounded-lg text-[--accent]">
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='w-5 h-5'><path d='M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'/></svg>
                </div>
                <div>
                  <p className="label-caps text-[8px] opacity-40">UBICACIÓN</p>
                  <p className="text-sm font-bold text-white/90 mt-0.5">Barcelona, España</p>
                </div>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center gap-6 p-12 bg-white/1 border border-dashed border-white/10 rounded-2xl"
            >
              <div className="text-center">
                <h4 className="text-xl font-bold mb-2 font-mono text-white tracking-tight">DOCUMENTACIÓN TÉCNICA</h4>
                <p className="text-sm text-[--text-dim] max-w-sm mx-auto font-light">
                  Descarga mi currículum completo estructurado en formato PDF para una revisión analítica profunda.
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
              
              <p className="font-mono text-[9px] opacity-30 uppercase tracking-[0.2em] select-none">
                v2.1 // SHA-256: 8D3F...E192
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="py-20 border-t border-white/5 text-center">
        <p className="label-caps opacity-30 text-[9px] tracking-[0.2em]">JAVIER FIGUEROA VICENTE // BARCELONA_2026 // ALL_RIGHTS_RESERVED</p>
      </footer>
    </div>
  )
}