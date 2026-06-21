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
import github from "./assets/logos/github.png"
import opennew from "./assets/icons/open_new.svg"
import mail from "./assets/icons/mail.svg"
import call from "./assets/icons/call.svg"
import location from "./assets/icons/location.svg"
import linkedin from "./assets/logos/linkedin.png"
import dowload from "./assets/icons/download.svg"
import downloadHover from "./assets/icons/download_hover.svg"

import fotoPerfil from "./assets/img/foto_carnet/foto_carnet.jpg"
import cv from "./assets/cv/cv-25-5-26.pdf"

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

  const [isHovered, setIsHovered] = useState(false);

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
      tag: "Desarrollo Web & Big Data",
      title: "Iberia Drive Insights",
      desc: "Plataforma de tasación de vehículos mediante un modelo de Machine Learning.",
      tech: ["React", "FastAPI", "ML", "Pandas", "Selenium"],
      imagenes: [
        "/proyectos/iberia/home.jpg",
        "/proyectos/iberia/predict.jpg",
        "/proyectos/iberia/historial.jpg",
        "/proyectos/iberia/importancia.jpg",
        "/proyectos/iberia/error.jpg"
        
      ],
      github: "https://github.com/JaviFigueroaVicente/IberiaDriveInsights.git",
      urlWeb: "https://iberia-drive-insights.vercel.app"
    },
    {
      id: "02",
      tag: "Desarrollo Web",
      title: "Quizoot",
      desc: "Plataforma de formularios interactivos, creación de preguntas y respuestas online.",
      tech: ["VUE.JS", "LARAVEL", "SQL"],
      imagenes: [
        "/proyectos/quizoot/home.jpg",
        "/proyectos/quizoot/forms.jpg",
        "/proyectos/quizoot/detalles.jpg",
        "/proyectos/quizoot/respuesta.jpg",
        "/proyectos/quizoot/record.jpg"
      ],
      github: "https://github.com/JaviFigueroaVicente/Quizoot.git",
      urlWeb: "https://quizoot.es"
    }
  ];

  const [[page, direction], setPage] = useState([0, 0]);
  const activeIndex = Math.abs(page % projects.length);

  const navigateSlider = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  const currentProject = projects[activeIndex];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delay: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.98
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.6, 
        ease: [0.16, 1, 0.3, 1] 
      } 
    }
  };
  
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

    const [isImgLoading, setIsImgLoading] = useState(true);
    
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
        <AnimatePresence>
          {isImgLoading && (
            <motion.div 
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 z-20 flex items-center justify-center bg-neutral-950"
            >
              <motion.div 
                className="w-8 h-8 border-2 border-[--accent]/20 border-t-[--accent] rounded-full"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
              />
            </motion.div>
          )}
        </AnimatePresence>

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
            loading="lazy"
            onLoad={() => setIsImgLoading(false)}
            onLoadStart={() => setIsImgLoading(true)}
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
            <div className="absolute inset-y-0 right-3 flex items-center z-20 opacity-50 group-hover/slider:opacity-100 transition-opacity duration-300">
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
      <motion.div 
        whileHover={{ transition: { type: "spring", stiffness: 400, damping: 25 } }}
        className="recessed-surface p-8 ml-6 transition-all duration-300 hover:border-[--accent] group-hover:shadow-[0_0_30px_rgba(0,229,255,0.05)]"
      >
        {children}
      </motion.div>
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
          <span className="font-mono text-xs font-black tracking-[0.25em] text-[--accent]">JAVIER FIGUEROA VICENTE</span>
          <motion.button 
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
            onClick={() => document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' })}
          >
            CONTACTO
          </motion.button>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 pt-10 md:pt-40">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row gap-16 items-center py-20 mb-20 md:mb-40">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, rotate: -3 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
            whileHover={{ scale: 1.02, y: -4, transition: { duration: 0.3, ease: "easeOut" } }}
            whileTap={{ scale: 0.98 }}
            className="w-64 h-80 bg-linear-to-br from-slate-900 via-neutral-950 to-black rounded-2xl border-2 border-white/10 shrink-0 overflow-hidden relative group shadow-[0_0_50px_rgba(0,0,0,0.8)] flex flex-col justify-between p-6"
          >
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-position-[16px_16px]" />
            
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
                src={fotoPerfil} 
                alt="Javier Figueroa" 
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500 contrast-125"
              />
            </div>
          </motion.div>
                    
          <div>
            <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-6 overflow-hidden leading-[1.05]">
              <motion.span
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="block uppercase tracking-tight text-white text-3xl md:text-6xl font-bold"
              >
                Especialista en IA & Big Data
              </motion.span> 
              <motion.span 
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
                className="text-[--accent] font-mono font-light text-2xl md:text-4xl block mt-2"
              >
                & Técnico Superior en Desarrollo de Aplicaciones Web
              </motion.span>
            </h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-xl text-[--text-dim] text-base md:text-lg font-light leading-relaxed"
            >
            </motion.p>
          </div>
        </section>

       {/* Sección de Proyectos */}
        <motion.section 
          id="proyectos" 
          className="mb-40"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            >
              <h3 className="section-title text-3xl md:text-4xl font-black tracking-tight">PROYECTOS</h3>
            </motion.div>
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
                    max={currentProject.title} 
                  />
                </div>

                {/* Contenido / Texto */}
                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-between z-10 bg-transparent">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <span className="font-mono text-2xl md:text-5xl font-black text-[#00b8cc] select-none">
                        {currentProject.id}
                      </span>
                    </div>

                    <h4 className="text-2xl md:text-3xl font-black mb-3 tracking-tight text-white uppercase font-mono">
                      {currentProject.title}
                    </h4>
                    <p className="text-[--text-dim] text-sm md:text-base leading-relaxed font-light mb-8">
                      {currentProject.desc}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {currentProject.tech.map((t) => (
                        <motion.span 
                          key={t} 
                          whileHover={{ scale: 1.08, borderColor: "var(--accent)", color: "#ffffff" }}
                          transition={{ type: "spring", stiffness: 500, damping: 15 }}
                          className="text-[10px] font-mono text-[--accent] bg-[--accent]/5 px-2.5 py-1 border border-[--accent]/20 rounded font-medium inline-block cursor-default"
                        >
                          {t}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Acciones del Slider */}
                  <div className="flex items-center gap-4">
                    <motion.a
                      href={currentProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.05)" }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center gap-2 px-5 py-3 rounded-lg bg-white/2 border border-white/10 text-white font-mono text-xs hover:border-[--accent] hover:bg-white/5 transition-all duration-300"
                    >
                      <img src={typeof github !== 'undefined' ? github : ''} className="w-4 h-4" alt="" />
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
                      <span>WEB</span>
                      <img src={typeof opennew !== 'undefined' ? opennew : ''} alt="Open New" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controles y progreso (Ubicados debajo de la Card) */}
          <div className="mt-6 w-full">
            
            <div className="flex items-center justify-between sm:center gap-4 w-full">
              
              {/* Botón Flecha Izquierda */}
              <motion.button 
                whileHover="hover"
                whileTap="tap"
                onClick={() => navigateSlider(-1)} 
                className="group relative p-3 md:p-4 border border-white/10 rounded-xl bg-[--bg-card] overflow-hidden flex items-center justify-center min-w-11 min-h-11 md:min-w-12.5 md:min-h-12.5 select-none"
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

              {/* Barras de Progreso Centrales (Flexibles y adaptables) */}
              <div className="flex gap-1.5 md:gap-2 items-center justify-center flex-1 sm:flex-initial max-w-[60%] sm:max-w-none overflow-hidden">
                {projects.map((_, idx) => (
                  <div 
                    key={idx} 
                    className="relative h-1 bg-white/5 rounded-full overflow-hidden w-8 sm:w-12 shrink-0"
                  >
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

              {/* Botón Flecha Derecha */}
              <motion.button 
                whileHover="hover"
                whileTap="tap"
                onClick={() => navigateSlider(1)} 
                className="group relative p-3 md:p-4 border border-white/10 rounded-xl bg-[--bg-card] overflow-hidden flex items-center justify-center min-w-11 min-h-11 md:min-w-12.5 md:min-h-12.5 select-none"
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
        </motion.section>

        {/* Experiencia Profesional */}
        <section id="trayectoria" className="mb-40">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 mb-20"
          >
            <div className="flex flex-col">
              <h2 className="section-title text-3xl md:text-4xl font-black tracking-tight">
                EXPERIENCIA & SISTEMAS
              </h2>
            </div>
            <div className="h-px grow bg-linear-to-r from-white/10 to-transparent"></div>
          </motion.div>

          <div className="timeline-container relative max-w-5xl mx-auto px-4">
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
                      <span className="label-caps text-[10px]">Enero 2025 - Junio 2025 (6 meses)</span>
                      {/* <span className="text-[9px] font-mono px-2 py-0.5 bg-[--accent]/10 text-[--accent] border border-[--accent]/20 rounded font-bold uppercase tracking-widest animate-pulse">
                        Puesto Actual
                      </span> */}
                    </div>
                    <h4 className="text-2xl font-black tracking-tight text-white font-mono">DESARROLLADOR WEB</h4>
                    <p className="text-[--text-dim] font-mono text-xs opacity-80 uppercase tracking-wider mt-1">
                      Ajuntament de Molins de Rei
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                  <ul className="md:col-span-8 space-y-4 text-sm md:text-base text-[--text-dim] leading-relaxed">
                    <li className="flex gap-4">
                      <span className="text-[--accent] font-mono font-bold">01_</span>
                      <span>Actualización de <strong>+20 webs corporativas WordPress</strong> hacia arquitectura la versión <strong>PHP 8.4</strong>.</span>
                    </li>
                    <li className="flex gap-4">
                      <span className="text-[--accent] font-mono font-bold">02_</span>
                      <span><strong>Actualización</strong>, <strong>mantenimiento</strong> y <strong>securización</strong> de dichas webs.</span>
                    </li>
                    <li className="flex gap-4">
                      <span className="text-[--accent] font-mono font-bold">03_</span>
                      <span><strong>Diseño y desarrollo</strong> integral de una <strong>nueva página web</strong> en WordPress para la gestión de entidades de la localidad.</span>
                    </li>
                  </ul>
                  
                  <div className="md:col-span-4 flex flex-wrap gap-2 content-start border-t md:border-t-0 md:border-l border-white/5 pt-4 md:pt-0 md:pl-6">
                    {['WordPress', 'PHP 8.4', 'Securización', 'SQL'].map(tag => (
                      <span key={tag} className="text-[10px] font-mono text-[--text-dim] bg-white/5 px-2.5 py-1 rounded border border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </TimelineEvent>

            <TimelineEvent delay={0.4}>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="label-caps text-[10px]">Junio 2022 - Agosto 2023 (1 año y 2 meses)</span>
                    </div>
                    <h4 className="text-2xl font-black tracking-tight text-white font-mono">ASESOR POSTVENTA</h4>
                    <p className="text-[--text-dim] font-mono text-xs opacity-80 uppercase tracking-wider mt-1">
                      Grupo Letamendi
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                  <ul className="md:col-span-6 space-y-4 text-sm md:text-base text-[--text-dim] leading-relaxed">
                    <li className="flex gap-4">
                      <span className="text-[--accent] font-mono font-bold">01_</span>
                      <span>Gestión integral de clientes y asesoramiento técnico especializado en servicios de postventa.</span>
                    </li>
                    <li className="flex gap-4">
                      <span className="text-[--accent] font-mono font-bold">02_</span>
                      <span>Coordinación con taller y optimización de tiempos de entrega para garantizar la satisfacción del cliente.</span>
                    </li>
                    <li className="flex gap-4">
                      <span className="text-[--accent] font-mono font-bold">03_</span>
                      <span>Facturación, venta cruzada de servicios y resolución de incidencias complejas.</span>
                    </li>
                  </ul>
                  
                  <div className="md:col-span-6 flex flex-col sm:flex-row md:flex-col lg:flex-row gap-6 border-t md:border-t-0 md:border-l border-white/5 pt-4 md:pt-0 md:pl-6 justify-between items-start">
                    <div className="flex flex-wrap gap-2 content-start">
                      {['Postventa', 'Gestión ERP', 'Atención Cliente', 'KPIs'].map(tag => (
                        <span key={tag} className="text-[10px] font-mono text-[--text-dim] bg-white/5 px-2.5 py-1 rounded border border-white/5">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-col justify-center items-start md:items-end bg-white/5 rounded-xl p-4 border border-white/5 shadow-inner min-w-35 w-full sm:w-auto md:w-full lg:w-auto">
                      <motion.span 
                        initial={{ scale: 0.5, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 120, delay: 0.6 }}
                        className="text-4xl font-black text-[--accent] tracking-tighter font-mono"
                      >
                        4M€
                      </motion.span>
                      <span className="label-caps text-[8px] text-left md:text-right opacity-40 mt-1 leading-normal">
                        Facturación Anual Aproximada del Grupo<br/>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </TimelineEvent>

            <TimelineEvent delay={0.4} isLegacy={true}>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="label-caps text-[10px]">Junio 2021 - Abril 2022 (10 meses)</span>
                    </div>
                    <h4 className="text-2xl font-black tracking-tight text-white font-mono">ASESOR POSTVENTA (Prácticas)</h4>
                    <p className="text-[--text-dim] font-mono text-xs opacity-80 uppercase tracking-wider mt-1">
                      Grupo Carhaus
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                  <ul className="md:col-span-7 space-y-4 text-sm md:text-base text-[--text-dim] leading-relaxed">
                    <li className="flex gap-4">
                      <span className="text-[--accent] font-mono font-bold">01_</span>
                      <span>Trato integral de un volumen aproximado de <strong>200 clientes mensuales</strong>, abarcando desde la recepción hasta la entrega final del vehículo.</span>
                    </li>
                    <li className="flex gap-4">
                      <span className="text-[--accent] font-mono font-bold">02_</span>
                      <span>Realización de <strong>presupuestos detallados</strong> y tramitación de <strong>autorizaciones de renting</strong> para la ejecución de reparaciones y mantenimientos.</span>
                    </li>
                  </ul>
                  
                  {/* Sección lateral: Tags + Métrica de Facturación */}
                  <div className="md:col-span-5 flex flex-col sm:flex-row md:flex-col lg:flex-row gap-6 border-t md:border-t-0 md:border-l border-white/5 pt-4 md:pt-0 md:pl-6 justify-between items-start w-full">
                    <div className="flex flex-wrap gap-2 content-start">
                      {['Atención al Cliente', 'Gestión de Renting', 'Presupuestos', 'Postventa'].map(tag => (
                        <span key={tag} className="text-[10px] font-mono text-[--text-dim] bg-white/5 px-2.5 py-1 rounded border border-white/5">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-col justify-center items-start md:items-end bg-white/5 rounded-xl p-4 border border-white/5 shadow-inner min-w-35 w-full sm:w-auto md:w-full lg:w-auto">
                      <motion.span 
                        initial={{ scale: 0.5, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 120, delay: 0.6 }}
                        className="text-4xl font-black text-[--accent] tracking-tighter font-mono"
                      >
                        100M€
                      </motion.span>
                      <span className="label-caps text-[8px] text-left md:text-right opacity-40 mt-1 leading-normal">
                        Facturación Anual Aproximada del Grupo <br/>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </TimelineEvent>
          </div>
        </section>
        {/* Stack Tecnológico */}
        <motion.section 
          id="stack" 
          className="mb-40"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15 
              }
            }
          }}
        >
          <motion.div 
            variants={{
              hidden: { opacity: 0, x: -15 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
            }}
            className="flex items-center gap-4 mb-16"
          >
            <h2 className="section-title text-2xl md:text-3xl font-black tracking-tight">STACK TECNOLÓGICO</h2>
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
              className="h-px grow bg-linear-to-r from-white/10 to-transparent origin-left"
            />
          </motion.div>

          {/* Grid de Contenedores */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {stack.map((group) => (
              <motion.div 
                key={group.category} 
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="recessed-surface p-8 group border border-white/5 hover:border-[--accent] transition-all duration-500 will-change-transform"
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
                      whileHover={{ scale: 1.03, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "tween", duration: 0.2, ease: "easeOut" }}
                      className="flex items-center gap-2.5 px-3 py-2 bg-white/1 border border-white/5 rounded-lg hover:bg-[--accent]/5 hover:border-[--accent] transition-all duration-200 group/item cursor-default will-change-transform"
                    >
                      {techLogos[tech] ? (
                        <img 
                          src={techLogos[tech]} 
                          alt={tech}
                          className="w-4 h-4 object-contain grayscale-0 md:grayscale md:group-hover/item:grayscale-0 transition-all duration-200" 
                        />
                      ) : (
                        <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                      )}
                      <span className="font-mono text-[11px] text-[--text-dim] group-hover/item:text-white transition-colors duration-200">
                        {tech}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
        
        {/* Formación Académica */}
        <section id="formacion" className="mb-40">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 mb-20"
          >
            <div className="flex flex-col">
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
                      <span className="label-caps font-mono text-[9px] text-[--accent] tracking-[0.25em] font-bold">2025-2026</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-black mb-2 group-hover:text-[--accent] transition-colors font-mono uppercase tracking-tight text-white">
                    CE Inteligencia Artificial y Big Data
                  </h3>
                  <p className="text-[--text-dim] font-mono text-xs mb-6 opacity-60">Institut Bernat el Ferrer</p>
      
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
                className="flex-1 recessed-surface p-8 border-l border-white/10 hover:border-[--accent] transition-all group flex flex-col justify-center"
              >
                <div>
                  <span className="label-caps text-[10px] opacity-40 mb-2 block">2023 — 2025</span>
                  <h4 className="text-xl font-bold font-mono group-hover:text-white transition-colors text-white/90">CFGS Desarrollo de Aplicaciones Web</h4>
                  <p className="text-xs text-[--text-dim] font-mono mt-1 opacity-60 mb-6">Institut Bernat el Ferrer</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Desarrollo Web', 'Base de Datos'].map(skill => (
                    <span key={skill} className="text-[9px] font-mono border border-white/5 px-2.5 py-1 rounded bg-white/5 text-[--text-dim] opacity-50 group-hover:opacity-100 transition-opacity">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
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
              <h3 className="section-title text-4xl md:text-5xl font-black tracking-tight mb-6">CONTACTO</h3>
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
                <div className="w-12 h-12 shrink-0 flex items-center justify-center bg-white/5 rounded-lg text-[--text-dim] group-hover:text-[--accent] group-hover:bg-[--accent]/5 transition-all">
                  <img src={mail} alt="" width={24} height={24} className="block" />  
                </div>
                
                <div className="min-w-0">
                  <p className="label-caps text-[8px] opacity-40">EMAIL</p>
                  <p className="text-sm font-bold font-mono text-white/90 mt-0.5 break-all sm:break-normal truncate">
                    javierfigueroa969@gmail.com
                  </p>
                </div>
              </motion.a>

              <motion.a 
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                href="tel:+34630108179" 
                className="contact-card group"
              >
                <div className="p-3 bg-white/5 rounded-lg text-[--text-dim] group-hover:text-[--accent] group-hover:bg-[--accent]/5 transition-all">
                  <img src={call} alt="" width={24} height={24} />  
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
                  <img src={linkedin} alt="" width={24} height={24} /> 
                </div>
                <div>
                  <p className="label-caps text-[8px] opacity-40">LINKEDIN</p>
                  <p className="text-sm font-bold font-mono text-white/90 mt-0.5">javierfigueroavicente</p>
                </div>
              </motion.a>

              <div className="contact-card border border-white/5">
                <div className="p-3 bg-white/5 rounded-lg text-[--accent]">
                  <img src={location} alt="" width={24} height={24} /> 
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
                <h4 className="text-xl font-bold mb-2 font-mono text-white tracking-tight">CURRÍCULUM</h4>
                <p className="text-sm text-[--text-dim] max-w-sm mx-auto font-light">
                  Descarga mi currículum completo estructurado en formato PDF para una revisión analítica profunda.
                </p>
              </div>
              
              <motion.a
                whileHover="hover"
                whileTap="tap"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                transition={{ type: "spring", stiffness: 400, damping: 15 }} 
                href={cv}
                download="CV_Javier_Figueroa_Vicente.pdf"
                className="btn-download"
                variants={{
                  hover: { 
                    color: "#00252a" 
                  },
                  tap: { scale: 0.97 }
                }}
              >
                  <motion.img 
                    src={isHovered ? downloadHover : dowload} 
                    alt="Descargar" 
                    width={30} 
                    height={30} 
                    transition={{ duration: 0.2 }}
                  />
                  DESCARGAR CV
              </motion.a>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="py-20 border-t border-white/5 text-center">
        <p className="label-caps opacity-30 text-[9px] tracking-[0.2em]">JAVIER FIGUEROA VICENTE // 2026 // TODODS LOS DERECHOS RESERVADOS</p>
      </footer>
    </div>
  )
}