'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowUpRight, CheckCircle2, Zap, MessageSquare, BarChart3, Users,
  Globe, Code2, Database, Server, ShieldCheck, Clock, Cpu, Sparkles,
  ArrowRight, ChevronRight, Check, Bot, Layers, Target, Rocket, Calculator,
  TrendingUp, HelpCircle, ChevronDown, Sliders, Play, Volume2, VolumeX, X, Share2,
  Mail, Eye, Settings, ShieldAlert, CreditCard, Send, FileText, Search,
  Pause, RotateCcw, GitFork, UserCheck, Calendar, XCircle
} from 'lucide-react';
import Contact from '@/components/Contact';

import dynamic from 'next/dynamic';
import trebotLottieData from '@/public/trebot-lottie.json';
import trebotLezaData from '@/public/trebot-leza.json';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

// ─────────────────────────────────────────────────────────────────────────────
// CONSTANTES DE ANIMACIÓN DEL BOT 2 (fuera del componente para referencias estables)
// Framer Motion NO reinicia la animación si la referencia del objeto no cambia.
// ─────────────────────────────────────────────────────────────────────────────
const BOT2_HEAD_ANIMATE = { x: [0, 0, 10, 10, -10, -10, 0] };
const BOT2_HEAD_TRANSITION = {
  duration: 6,
  times: [0, 0.62, 0.68, 0.76, 0.82, 0.90, 1],
  repeat: Infinity,
  repeatDelay: 3.5,
  ease: 'easeInOut',
};
const BOT2_PUPIL_ANIMATE = { x: [0, 0, 12, 12, -12, -12, 0] };
const BOT2_PUPIL_TRANSITION = {
  duration: 6,
  times: [0, 0.62, 0.68, 0.76, 0.82, 0.90, 1],
  repeat: Infinity,
  repeatDelay: 3.5,
  ease: 'easeInOut',
};
const BOT2_BLINK_ANIMATE = { scaleY: [1, 1, 0.05, 1, 1] };
const BOT2_BLINK_TRANSITION = { duration: 0.3, repeat: Infinity, repeatDelay: 3.5, ease: 'easeInOut' };
const BOT2_FLOAT_ANIMATE = { y: [0, -10, 0] };
const BOT2_FLOAT_TRANSITION = { duration: 4, repeat: Infinity, ease: 'easeInOut' };
const BOT2_MOUTH_SPEAKING_ANIMATE = {
  scaleY: [1, 1.5, 0.85, 1.4, 0.9, 1.55, 1],
  scaleX: [1, 0.9, 1.06, 0.93, 1.04, 0.88, 1],
  y: [0, 1.5, -0.5, 1, -0.5, 1.5, 0],
};
const BOT2_MOUTH_SPEAKING_TRANSITION = {
  duration: 0.55,
  repeat: Infinity,
  ease: 'easeInOut',
};

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENTE MASCOTA TREBOT CON SWITCH DE 3 MODELOS
// ─────────────────────────────────────────────────────────────────────────────
export function TrebotSVG({ isSpeaking, isHovered, size = 360, isModal = false, expression = 'happy', armPose = 'auto', eyeExpression = 'auto' }) {
  const [botModel, setBotModel] = useState('lottie-trebol'); // 'svg-original' | 'lottie-trebol' | 'lottie-leza'

  const activeArmPose = armPose !== 'auto' ? armPose : (isHovered ? 'wave' : 'rest');
  const activeEyeExpr = eyeExpression !== 'auto' ? eyeExpression : (expression === 'celebrate' ? 'half-moon' : expression === 'smart' ? 'wink' : 'circle');

  return (
    <div className="relative group">
      {/* SWITCH SELECTOR FLOTANTE PARA COMPARAR LOS 3 BOTS */}
      <div
        className="absolute -top-10 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 bg-black/90 p-1 rounded-full border border-trebol/40 shadow-xl backdrop-blur-md"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setBotModel('svg-original')}
          className={`px-2.5 py-1 rounded-full text-[9px] font-mono font-bold uppercase transition-all ${botModel === 'svg-original'
            ? 'bg-trebol text-slate-950 shadow-[0_0_10px_rgba(132,198,56,0.5)]'
            : 'text-slate-400 hover:text-white'
            }`}
        >
          Bot 1 (SVG)
        </button>
        <button
          onClick={() => setBotModel('lottie-trebol')}
          className={`px-2.5 py-1 rounded-full text-[9px] font-mono font-bold uppercase transition-all ${botModel === 'lottie-trebol'
            ? 'bg-trebol text-slate-950 shadow-[0_0_10px_rgba(132,198,56,0.5)]'
            : 'text-slate-400 hover:text-white'
            }`}
        >
          Bot 2 (Trébol)
        </button>
        <button
          onClick={() => setBotModel('lottie-leza')}
          className={`px-2.5 py-1 rounded-full text-[9px] font-mono font-bold uppercase transition-all ${botModel === 'lottie-leza'
            ? 'bg-trebol text-slate-950 shadow-[0_0_10px_rgba(132,198,56,0.5)]'
            : 'text-slate-400 hover:text-white'
            }`}
        >
          Bot 3 (Leza)
        </button>
      </div>

      <motion.div
        animate={
          isModal
            ? { scale: 1, rotate: 0, x: 0, y: 0 }
            : isHovered
              ? { scale: 0.95, rotate: -4, x: 0, y: -20 }
              : { scale: 1.35, rotate: -16, x: 75, y: 175 }
        }
        transition={{ type: 'spring', stiffness: 160, damping: 18 }}
        className="relative select-none cursor-pointer transform-gpu flex items-center justify-center"
        style={{ width: size, height: size * 1.15 }}
      >
        {botModel === 'lottie-trebol' && (
          <motion.div
            key="lottie-trebol"
            className="w-full h-full drop-shadow-[0_45px_90px_rgba(132,198,56,0.65)] flex items-center justify-center"
            animate={BOT2_FLOAT_ANIMATE}
            transition={BOT2_FLOAT_TRANSITION}
          >
            <svg fill="none" height="100%" width="100%" viewBox="0 0 682 902" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
              <defs>
                {/* Body gradients - original gray palette */}
                <linearGradient id="i0" gradientUnits="userSpaceOnUse" spreadMethod="pad" x2="67.262" y2="-0.229" x1="-97.029" y1="-0.229"><stop offset="0%" stopColor="#e4e8ef" /><stop offset="50%" stopColor="#c2c6d0" /><stop offset="100%" stopColor="#a0a5b0" /></linearGradient>
                <linearGradient id="i1" gradientUnits="userSpaceOnUse" spreadMethod="pad" x2="67.262" y2="-0.229" x1="-97.029" y1="-0.229"><stop offset="0%" stopColor="#e4e8ef" /><stop offset="50%" stopColor="#c2c6d0" /><stop offset="100%" stopColor="#a0a5b0" /></linearGradient>
                <linearGradient id="i2" gradientUnits="userSpaceOnUse" spreadMethod="pad" x2="67.319" y2="-0.229" x1="-96.971" y1="-0.229"><stop offset="0%" stopColor="#a0a5b0" /><stop offset="50%" stopColor="#c2c6d0" /><stop offset="100%" stopColor="#e4e8ef" /></linearGradient>
                <linearGradient id="i3" gradientUnits="userSpaceOnUse" spreadMethod="pad" x2="67.319" y2="-0.229" x1="-96.971" y1="-0.229"><stop offset="0%" stopColor="#a0a5b0" /><stop offset="50%" stopColor="#c2c6d0" /><stop offset="100%" stopColor="#e4e8ef" /></linearGradient>
                <linearGradient id="i4" gradientUnits="userSpaceOnUse" spreadMethod="pad" x2="0" y2="250.236" x1="0" y1="-78.447"><stop offset="0%" stopColor="#e4e8ef" /><stop offset="50%" stopColor="#c2c6d0" /><stop offset="100%" stopColor="#a0a5b0" /></linearGradient>
                <linearGradient id="i5" gradientUnits="userSpaceOnUse" spreadMethod="pad" x2="-1" y2="40.807" x1="-1" y1="-11.476"><stop offset="0%" stopColor="#a0a5b0" /><stop offset="49.9%" stopColor="#abafb8" /><stop offset="99.9%" stopColor="#b6babf" /></linearGradient>
                <linearGradient id="i6" gradientUnits="userSpaceOnUse" spreadMethod="pad" x2="0" y2="38.928" x1="0" y1="-72.957"><stop offset="20.6%" stopColor="#e4e8ef" /><stop offset="60.3%" stopColor="#c2c6d0" /><stop offset="100%" stopColor="#a0a5b0" /></linearGradient>
                <linearGradient id="i7" gradientUnits="userSpaceOnUse" spreadMethod="pad" x2="18.544" y2="0.096" x1="-28.627" y1="0.096"><stop offset="0%" stopColor="#e4e8ef" /><stop offset="50%" stopColor="#c2c6d0" /><stop offset="100%" stopColor="#a0a5b0" /></linearGradient>
                <linearGradient id="i8" gradientUnits="userSpaceOnUse" spreadMethod="pad" x2="18.798" y2="0.096" x1="-28.373" y1="0.096"><stop offset="0%" stopColor="#e4e8ef" /><stop offset="50%" stopColor="#c2c6d0" /><stop offset="100%" stopColor="#a0a5b0" /></linearGradient>
                <linearGradient id="i9" gradientUnits="userSpaceOnUse" spreadMethod="pad" x2="0" y2="-54.282" x1="0" y1="-16.131"><stop offset="0%" stopColor="#a0a5b0" /><stop offset="50%" stopColor="#c2c6d0" /><stop offset="100%" stopColor="#e4e8ef" /></linearGradient>
                <linearGradient id="i10" gradientUnits="userSpaceOnUse" spreadMethod="pad" x2="-0.357" y2="152.047" x1="-0.357" y1="-119.307"><stop offset="0%" stopColor="#e4e8ef" /><stop offset="50%" stopColor="#c2c6d0" /><stop offset="100%" stopColor="#a0a5b0" /></linearGradient>
                {/* Face screen - dark slate gray (user requested, replaces original blue) */}
                <radialGradient id="i11" gradientUnits="userSpaceOnUse" spreadMethod="pad" cx="0" cy="0.192" r="206.101" fy="0.192" fx="0"><stop offset="0%" stopColor="#1a2744" /><stop offset="50%" stopColor="#111c33" /><stop offset="100%" stopColor="#0b1329" /></radialGradient>
                {/* Eyes - Trébol green (user requested, replaces original cyan) */}
                <radialGradient id="i12" gradientUnits="userSpaceOnUse" spreadMethod="pad" cx="-0.055" cy="0.167" r="48.124" fy="0.167" fx="-0.055"><stop offset="0%" stopColor="#aee855" /><stop offset="50%" stopColor="#84C638" /><stop offset="100%" stopColor="#5a9a1e" /></radialGradient>
                <radialGradient id="i13" gradientUnits="userSpaceOnUse" spreadMethod="pad" cx="-0.667" cy="0.174" r="25.166" fy="0.174" fx="-0.667"><stop offset="0%" stopColor="#aee855" /><stop offset="50%" stopColor="#84C638" /><stop offset="100%" stopColor="#5a9a1e" /></radialGradient>
                <radialGradient id="i14" gradientUnits="userSpaceOnUse" spreadMethod="pad" cx="-0.392" cy="0.167" r="48.123" fy="0.167" fx="-0.392"><stop offset="0%" stopColor="#aee855" /><stop offset="50%" stopColor="#84C638" /><stop offset="100%" stopColor="#5a9a1e" /></radialGradient>
                <radialGradient id="i15" gradientUnits="userSpaceOnUse" spreadMethod="pad" cx="-0.184" cy="-0.737" r="33.853" fy="-0.737" fx="-0.184"><stop offset="0%" stopColor="#aee855" /><stop offset="50%" stopColor="#84C638" /><stop offset="100%" stopColor="#5a9a1e" /></radialGradient>
                <radialGradient id="i16" gradientUnits="userSpaceOnUse" spreadMethod="pad" cx="-0.005" cy="0.174" r="25.166" fy="0.174" fx="-0.005"><stop offset="0%" stopColor="#aee855" /><stop offset="50%" stopColor="#84C638" /><stop offset="100%" stopColor="#5a9a1e" /></radialGradient>
              </defs>

              {/* ===== LEFT ARM (original structure) ===== */}
              <g id="i17a"><g transform="translate(342,795.519)"><g transform="scale(1,1) translate(-542,-849.519)">
                <g visibility="hidden" id="i18"><g transform="translate(390.029,532.229)"><g transform="rotate(-5)"><g transform="scale(1,1) translate(-64,116)"><g id="i19a"><path fill="url(#i0)" d="M77.963,-109.532C76.666,-91.816,64.054,-90.446,49.933,-56.844C31.887,-13.91,27.455,27.796,17.77,73.669C5.694,130.904,-28.172,134.975,-43.367,131.855C-70.745,126.23,-83.362,93.484,-75.933,58.278C-48.509,-71.64,3.457,-133.088,53.647,-132.616C62.994,-132.528,79.225,-126.791,77.963,-109.532Z" /></g></g></g></g></g>
                <g visibility="visible" id="i20"><g transform="translate(390.029,532.229)"><g transform="rotate(-2.406)"><g transform="scale(1,1) translate(-64,116)"><g id="i19b"><path fill="url(#i1)" d="M77.963,-109.532C76.666,-91.816,64.054,-90.446,49.933,-56.844C31.887,-13.91,27.455,27.796,17.77,73.669C5.694,130.904,-28.172,134.975,-43.367,131.855C-70.745,126.23,-83.362,93.484,-75.933,58.278C-48.509,-71.64,3.457,-133.088,53.647,-132.616C62.994,-132.528,79.225,-126.791,77.963,-109.532Z" /></g></g></g></g></g>
              </g></g></g>

              {/* ===== RIGHT ARM (original structure) ===== */}
              <g id="i17b"><g transform="translate(342,795.519)"><g transform="scale(1,1) translate(-542,-849.519)">
                <g visibility="hidden" id="i21"><g transform="translate(693.971,534.229)"><g transform="rotate(9)"><g transform="scale(1,1) translate(60,114)"><g id="i19c"><path fill="url(#i2)" d="M-77.963,-109.532C-76.666,-91.816,-64.054,-90.446,-49.933,-56.844C-31.887,-13.91,-27.455,27.796,-17.77,73.669C-5.694,130.904,28.172,134.975,43.367,131.855C70.745,126.23,83.362,93.484,75.933,58.278C48.509,-71.64,-3.457,-133.088,-53.647,-132.616C-62.994,-132.528,-79.225,-126.791,-77.963,-109.532Z" /></g></g></g></g></g>
                <g visibility="visible" id="i22"><g transform="translate(693.971,534.229)"><g transform="rotate(5.369)"><g transform="scale(1,1) translate(60,114)"><g id="i19d"><path fill="url(#i3)" d="M-77.963,-109.532C-76.666,-91.816,-64.054,-90.446,-49.933,-56.844C-31.887,-13.91,-27.455,27.796,-17.77,73.669C-5.694,130.904,28.172,134.975,43.367,131.855C70.745,126.23,83.362,93.484,75.933,58.278C48.509,-71.64,-3.457,-133.088,-53.647,-132.616C-62.994,-132.528,-79.225,-126.791,-77.963,-109.532Z" /></g></g></g></g></g>
              </g></g></g>

              {/* ===== BODY + CHEST LOGO ===== */}
              <g id="i17c"><g transform="translate(342,795.519)"><g transform="scale(1,1) translate(-542,-849.519)">
                <g id="i23" transform="matrix(1,0,0,1,540,658.447)">
                  <path fill="url(#i4)" d="M183.653,-72.253C183.653,-40.577,180.71,-11.573,175.246,14.631C174.697,17.302,174.114,19.946,173.5,22.559C148.536,129.807,80.281,187.878,0,187.878C-80.281,187.878,-148.536,129.807,-173.5,22.559C-174.114,19.946,-174.697,17.302,-175.246,14.631C-180.71,-11.573,-183.653,-40.577,-183.653,-72.253C-183.653,-142.718,-109.957,-187.878,0,-187.878C109.957,-187.878,183.653,-142.718,183.653,-72.253Z" />
                  {/* CHEST LOGO - Isotipo Trébol Digital Oficial PNG */}
                  <g transform="translate(0, -10) scale(0.7)" id="trebol-chest-logo">
                    <image href="/images/TREBOL_01.png" x="-50" y="-50" width="100" height="100" />
                  </g>
                </g>
                <g id="i24body" transform="matrix(1,0,0,1,540,703.476)"><path fill="url(#i5)" d="M175.246,-30.398C174.697,-27.727,174.114,-25.083,173.5,-22.47C152.089,-15.034,119.941,-5.046,88.515,0.265C88.515,0.265,88.515,20.924,88.515,20.924C88.515,20.924,85.829,21.538,85.829,21.538C85.441,21.626,46.472,30.398,0,30.398C-46.472,30.398,-85.441,21.626,-85.829,21.538C-85.829,21.538,-88.515,20.924,-88.515,20.924C-88.515,20.924,-88.515,0.265,-88.515,0.265C-119.941,-5.046,-152.089,-15.034,-173.5,-22.47C-174.114,-25.083,-174.697,-27.727,-175.246,-30.398C-153.651,-22.747,-118.422,-11.496,-84.517,-6.078C-84.517,-6.078,-81.608,-5.614,-81.608,-5.614C-81.608,-5.614,-81.608,15.372,-81.608,15.372C-72.126,17.302,-38.724,23.491,0,23.491C38.763,23.491,72.134,17.306,81.608,15.372C81.608,15.372,81.608,-5.614,81.608,-5.614C81.608,-5.614,84.517,-6.078,84.517,-6.078C118.422,-11.496,153.651,-22.747,175.246,-30.398Z" /></g>
                <g id="i25neck" transform="matrix(1,0,0,1,540,491.957)"><path fill="url(#i6)" d="M-74.711,-43.245C-74.711,-43.245,-74.711,0.883,-74.711,0.883C-74.711,24.279,-41.262,43.245,0,43.245C41.262,43.245,74.711,24.279,74.711,0.883C74.711,0.883,74.711,-43.245,74.711,-43.245C74.711,-43.245,-74.711,-43.245,-74.711,-43.245Z" /></g>
                <g id="i26shadow" transform="matrix(1,0,0,1,581.038,666.197)" opacity="0.04"><path fill="#383838" d="M142.615,-80.003C142.615,-48.327,139.675,-19.323,134.21,6.88C133.659,9.551,133.076,12.194,132.464,14.808C107.497,122.058,39.243,180.129,-41.038,180.129C-78.595,180.129,-113.521,167.417,-142.615,142.907C-114.773,149.404,-85.214,146.932,-57.771,138.759C8.248,119.098,63.024,65.171,83.717,-0.53C102.481,-60.105,92.73,-127.805,58.811,-180.129C111.209,-161.218,142.615,-126.002,142.615,-80.003Z" /></g>
                <g id="i19shine" transform="matrix(1,0,0,1,418.063,574.529)" opacity="0.49"><path fill="#ffffff" d="M37.103,-33.275C33.559,-25.547,26.23,-20.405,19.75,-14.903C-0.592,2.389,-14.884,26.668,-20.12,52.85C-21.184,58.184,-24.128,65.236,-29.426,63.992C-32.619,63.242,-34.165,59.676,-35.087,56.528C-42.505,31.141,-39.666,2.911,-27.346,-20.49C-18.287,-37.695,-4.175,-52.15,12.651,-61.874C19.391,-65.769,27.985,-64.566,33.201,-58.787C33.235,-58.75,33.269,-58.712,33.302,-58.675C39.322,-51.909,40.879,-41.509,37.103,-33.275Z" /></g>
              </g></g></g>

              {/* ===== HEAD SHELL + HANDLES/EARS/ANTENNA (fijos al casco blanco) ===== */}
              <g id="i17d"><g transform="translate(342,795.519)"><g transform="scale(1,1) translate(-542,-849.519)">
                <g transform="matrix(1,0,0,1,0,0)" id="i27a">
                  <g id="i28">
                    <g transform="translate(540,261.003)">
                      <g transform="scale(1,1) translate(-540,-261.003)">
                        <g id="i25h" transform="matrix(1,0,0,1,304.627,323.904)"><path fill="url(#i7)" d="M22.405,59.103C22.405,59.103,10.629,57.29,10.629,57.29C-8.376,54.364,-22.405,38.01,-22.405,18.781C-22.405,18.781,-22.405,-18.781,-22.405,-18.781C-22.405,-38.01,-8.376,-54.364,10.629,-57.29C10.629,-57.29,22.405,-59.103,22.405,-59.103C22.405,-59.103,62.405,-60.904,62.405,-60.904C62.405,-60.904,62.853,63.257,62.853,63.257C62.853,63.257,22.405,59.103,22.405,59.103Z" /></g>
                        <g id="i26h" transform="matrix(1,0,0,1,775.373,323.904)"><path fill="url(#i8)" d="M-22.405,59.103C-22.405,59.103,-10.629,57.29,-10.629,57.29C8.376,54.364,22.405,38.01,22.405,18.781C22.405,18.781,22.405,-18.781,22.405,-18.781C22.405,-38.01,8.376,-54.364,-10.629,-57.29C-10.629,-57.29,-22.405,-59.103,-22.405,-59.103C-22.405,-59.103,-62.405,-60.904,-62.405,-60.904C-62.405,-60.904,-62.853,63.257,-62.853,63.257C-62.853,63.257,-22.405,59.103,-22.405,59.103Z" /></g>
                        <g id="i19ant" transform="matrix(1,0,0,1,540,196.131)"><path fill="url(#i9)" d="M79.16,0C79.16,31.552,43.719,57.131,0,57.131C-43.719,57.131,-79.16,31.552,-79.16,0C-79.16,-31.552,-79.16,-57.131,0,-57.131C79.16,-57.131,79.16,-31.552,79.16,0Z" /></g>
                      </g>
                    </g>
                  </g>
                </g>
              </g></g></g>

              {/* ===== HEAD OUTER SHELL ===== */}
              <g id="i17e"><g transform="translate(342,795.519)"><g transform="scale(1,1) translate(-542,-849.519)">
                <g transform="matrix(1,0,0,1,0,0)" id="i27b">
                  <g id="i26hs" transform="matrix(1,0,0,1,536.357,322.307)"><path fill="url(#i10)" d="M-217.223,59.103C-217.223,86.062,-202.464,110.869,-178.751,123.694C-148.607,139.997,-95.035,155.108,0,155.108C95.035,155.108,148.607,139.997,178.751,123.694C202.464,110.869,217.223,86.062,217.223,59.103C217.223,59.103,217.223,-59.103,217.223,-59.103C217.223,-86.062,202.464,-110.869,178.751,-123.694C148.607,-139.997,95.035,-155.108,0,-155.108C-95.035,-155.108,-148.607,-139.997,-178.751,-123.694C-202.464,-110.869,-217.223,-86.062,-217.223,-59.103C-217.223,-59.103,-217.223,59.103,-217.223,59.103Z" /></g>
                  <g id="i19hsh" transform="matrix(1,0,0,1,380.775,226.347)" opacity="0.49"><path fill="#ffffff" d="M38.471,-11.132C-5.59,-0.851,-28.55,18.419,-39.773,31.928C-42.592,35.322,-48.081,32.556,-46.995,28.28C-41.229,5.58,-25.775,-8.713,-10.218,-17.474C3.286,-25.08,18.162,-29.609,33.316,-33.152C38.873,-34.451,44.516,-31.356,46.416,-25.975C46.441,-25.903,46.468,-25.83,46.493,-25.758C48.714,-19.467,44.968,-12.648,38.471,-11.132Z" /></g>
                </g>
              </g></g></g>

              {/* ===== HEAD FACE SCREEN + EYES + MOUTH (Framer Motion con constantes estables) ===== */}
              {/* Las constantes BOT2_* están definidas fuera del componente para que sean referencias */}
              {/* estables y Framer Motion NO reinicie la animación al cambiar isSpeaking */}
              <g id="i17f">
                <g transform="translate(342,795.519)">
                  <g transform="scale(1,1) translate(-542,-849.519)">
                    {/* Head face group - volteo continuo sin interrupciones */}
                    <motion.g
                      animate={BOT2_HEAD_ANIMATE}
                      transition={BOT2_HEAD_TRANSITION}
                    >
                      <g transform="translate(540,337.664)">
                        <g transform="scale(1,1) translate(0,0)">
                      {/* Face screen */}
                      <g id="i19fs"><path fill="url(#i11)" d="M0,118.361C-94.925,118.361,-143.654,102.783,-167.816,89.715C-184.113,80.901,-194.236,63.899,-194.236,45.343C-194.236,45.343,-194.236,-45.342,-194.236,-45.342C-194.236,-63.898,-184.113,-80.901,-167.816,-89.715C-143.654,-102.783,-94.925,-118.361,0,-118.361C94.925,-118.361,143.653,-102.783,167.816,-89.715C184.112,-80.901,194.236,-63.898,194.236,-45.342C194.236,-45.342,194.236,45.343,194.236,45.343C194.236,63.899,184.113,80.901,167.816,89.715C143.653,102.784,94.925,118.361,0,118.361Z" /></g>
                      {/* Pupil/eye group animado con constante estable */}
                      <motion.g animate={BOT2_PUPIL_ANIMATE} transition={BOT2_PUPIL_TRANSITION}>
                        <g transform="translate(1.223,17.765)">
                          <g transform="scale(1,1) translate(-541.223,-355.429)">
                            {/* Left eye glow */}
                            <g opacity="0.06"><g transform="translate(449.055,334.833)">
                              <path fill="url(#i12)" d="M48.124,0C48.124,26.578,26.578,48.124,0,48.124C-26.578,48.124,-48.124,26.578,-48.124,0C-48.124,-26.578,-26.578,-48.124,0,-48.124C26.578,-48.124,48.124,-26.578,48.124,0Z" />
                            </g></g>
                            {/* Left eye con parpadeo continuo */}
                            <motion.g animate={BOT2_BLINK_ANIMATE} transition={BOT2_BLINK_TRANSITION} style={{ transformOrigin: '447.667px 329.826px' }}>
                              <g transform="translate(447.667,329.826)">
                                <path fill="url(#i13)" d="M29.527,9.658C29.527,25.966,16.308,17.85,0,17.85C-16.308,17.85,-29.527,25.966,-29.527,9.658C-29.527,-6.65,-16.308,-19.87,0,-19.87C16.308,-19.87,29.527,-6.65,29.527,9.658Z" />
                              </g>
                            </motion.g>
                            {/* MOUTH - smile, pulsa solo al hablar */}
                            <g id="i24mouth" transform="matrix(1,0,0,1,540,398.484)">
                              <motion.path
                                fill="#84C638"
                                d="M23.637,-10.13C23.637,-3.603,20.992,2.304,16.713,6.583C12.434,10.862,6.527,13.507,0,13.507C-13.054,13.507,-23.637,2.924,-23.637,-10.13C-23.637,-11.06,-23.26,-11.906,-22.648,-12.518C-22.036,-13.13,-21.19,-13.507,-20.26,-13.507C-20.26,-13.507,20.26,-13.507,20.26,-13.507C22.123,-13.507,23.637,-11.993,23.637,-10.13Z"
                                animate={isSpeaking ? BOT2_MOUTH_SPEAKING_ANIMATE : { scaleY: 1, scaleX: 1, y: 0 }}
                                transition={isSpeaking ? BOT2_MOUTH_SPEAKING_TRANSITION : { duration: 0.2, ease: 'easeOut' }}
                                style={{ transformOrigin: '0px 0px' }}
                              />
                            </g>
                            {/* Right eye glow */}
                            <g opacity="0.06"><g transform="translate(633.392,334.833)">
                              <path fill="url(#i14)" d="M48.124,0C48.124,26.578,26.578,48.124,0,48.124C-26.578,48.124,-48.124,26.578,-48.124,0C-48.124,-26.578,-26.578,-48.124,0,-48.124C26.578,-48.124,48.124,-26.578,48.124,0Z" />
                            </g></g>
                            {/* Mouth shadow */}
                            <g id="i26mouth" transform="matrix(1,0,0,1,539.184,402.737)" opacity="0.06"><path fill="url(#i15)" d="M42.822,-21.411C42.822,2.239,23.65,21.411,0,21.411C-23.65,21.411,-42.822,2.239,-42.822,-21.411C-42.822,-21.411,42.822,-21.411,42.822,-21.411Z" /></g>
                            {/* Right eye con parpadeo continuo */}
                            <motion.g animate={BOT2_BLINK_ANIMATE} transition={BOT2_BLINK_TRANSITION} style={{ transformOrigin: '632.005px 329.826px' }}>
                              <g transform="translate(632.005,329.826)">
                                <path fill="url(#i16)" d="M29.527,9.658C29.527,25.966,16.308,17.85,0,17.85C-16.308,17.85,-29.527,25.966,-29.527,9.658C-29.527,-6.65,-16.308,-19.87,0,-19.87C16.308,-19.87,29.527,-6.65,29.527,9.658Z" />
                              </g>
                            </motion.g>
                          </g>
                        </g>
                      </motion.g>
                    </g>
                  </g>
                </motion.g>
              </g>
            </g>
          </g>

            </svg>
          </motion.div>
        )}

        {botModel === 'lottie-leza' && (
          <svg
            viewBox="0 0 230 280"
            className="w-full h-full drop-shadow-[0_45px_90px_rgba(132,198,56,0.65)]"
          >
            <defs>
              <radialGradient id="leza-shadow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#84C638" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#000000" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="leza-white" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="70%" stopColor="#f8fafc" />
                <stop offset="100%" stopColor="#e2e8f0" />
              </linearGradient>
            </defs>

            {/* SOMBRA FLOTANTE */}
            <motion.ellipse
              cx="115"
              cy="262"
              rx="40"
              ry="8"
              fill="url(#leza-shadow)"
              animate={{ scale: [1, 0.75, 1], opacity: [0.8, 0.4, 0.8] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* ANILLOS FLOTANTES INFERIORES */}
            <motion.g
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.1 }}
            >
              <rect x="85" y="215" width="60" height="14" rx="7" fill="none" stroke="#cbd5e1" strokeWidth="3" />
              <rect x="96" y="235" width="38" height="11" rx="5.5" fill="none" stroke="#cbd5e1" strokeWidth="3" />
            </motion.g>

            {/* BRAZO IZQUIERDO (SALUDA ARRIBA SOLO EN HOVER) */}
            <motion.g
              animate={
                isHovered
                  ? { rotate: [-125, -75, -125] }
                  : { y: [0, -14, 0], rotate: [-10, 5, -10] }
              }
              transition={{ duration: isHovered ? 0.45 : 2.6, repeat: Infinity, ease: 'easeInOut' }}
              style={{ transformOrigin: '32px 115px' }}
            >
              <ellipse cx="32" cy="130" rx="12" ry="23" fill="url(#leza-white)" stroke="#cbd5e1" strokeWidth="3" />
            </motion.g>

            {/* BRAZO DERECHO SEPARADO / LEVITANDO */}
            <motion.g
              animate={{ y: [0, -14, 0], rotate: [6, -6, 6] }}
              transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
              style={{ transformOrigin: '198px 130px' }}
            >
              <ellipse cx="198" cy="130" rx="12" ry="23" fill="url(#leza-white)" stroke="#cbd5e1" strokeWidth="3" transform="rotate(15, 198, 130)" />
            </motion.g>

            {/* CUERPO PRINCIPAL FOCO / SEMILLA LEZA */}
            <motion.g
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <path
                d="M 58 115 C 58 45 172 45 172 115 C 172 165 146 202 115 202 C 84 202 58 165 58 115 Z"
                fill="url(#leza-white)"
                stroke="#cbd5e1"
                strokeWidth="3.5"
              />

              {/* 2 HOJITAS BROTE EN LA CABEZA DEL BOT 3 */}
              <g transform="translate(0, 0)">
                {/* Hojita pequeña izquierda */}
                <path
                  d="M 112 50 C 104 35 116 24 116 24 C 116 24 125 35 119 50 Z"
                  fill="#84C638"
                />
                {/* Hojita grande derecha */}
                <path
                  d="M 122 47 C 128 25 152 26 152 26 C 152 26 146 45 127 49 Z"
                  fill="#84C638"
                />
              </g>

              {/* OJOS ANIMADOS */}
              <motion.g
                animate={{ scaleY: [1, 1, 0.1, 1, 1] }}
                transition={{ duration: 0.25, repeat: Infinity, repeatDelay: 3.5, ease: 'easeInOut' }}
                style={{ transformOrigin: '115px 95px' }}
              >
                {/* Ojo Izquierdo */}
                <circle cx="95" cy="95" r="9.5" fill="#1e293b" />
                <circle cx="98" cy="92" r="3.5" fill="#ffffff" />

                {/* Ojo Derecho */}
                <circle cx="135" cy="95" r="9.5" fill="#1e293b" />
                <circle cx="138" cy="92" r="3.5" fill="#ffffff" />
              </motion.g>

              {/* BOCA */}
              {isSpeaking ? (
                <motion.ellipse
                  cx="115" cy="116" rx="8" ry="4.5" fill="#1e293b"
                  animate={{ ry: [2, 6, 2] }}
                  transition={{ duration: 0.2, repeat: Infinity, ease: 'easeInOut' }}
                />
              ) : (
                <path
                  d="M 99 113 Q 115 125 131 113"
                  stroke="#1e293b"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  fill="none"
                />
              )}

              {/* EMBLEMA TRÉBOL DIGITAL PNG EN EL PECHO DEL BOT 3 */}
              <g transform="translate(115, 154) scale(0.2)">
                <image href="/images/TREBOL_01.png" x="-50" y="-50" width="100" height="100" />
              </g>
            </motion.g>
          </svg>
        )}

        {botModel === 'svg-original' && (
          <svg
            viewBox="0 0 230 280"
            className="w-full h-full drop-shadow-[0_45px_90px_rgba(141,198,63,0.7)]"
          >
            <defs>
              <radialGradient id="b-shadow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#84C638" stopOpacity="0.75" />
                <stop offset="100%" stopColor="#000000" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="b-white" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="60%" stopColor="#f1f5f9" />
                <stop offset="100%" stopColor="#cbd5e1" />
              </linearGradient>
              <linearGradient id="b-white-subtle" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="100%" stopColor="#e2e8f0" />
              </linearGradient>
              <linearGradient id="b-silver" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#e2e8f0" />
                <stop offset="100%" stopColor="#94a3b8" />
              </linearGradient>
              <linearGradient id="b-screen" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#0b1329" />
                <stop offset="100%" stopColor="#1e293b" />
              </linearGradient>
            </defs>

            <ellipse cx="115" cy="268" rx="72" ry="12" fill="url(#b-shadow)" />

            {!isHovered && (
              <g>
                <path d="M 58 140 C 38 148 34 180 36 210 C 38 226 56 226 62 210 C 66 180 68 148 58 140 Z" fill="url(#b-white)" />
                <ellipse cx="44" cy="164" rx="4" ry="14" fill="white" opacity="0.65" />
              </g>
            )}

            <g transform="rotate(6, 176, 142)">
              <path d="M 172 140 C 192 148 196 180 194 210 C 192 226 174 226 168 210 C 164 180 162 148 172 140 Z" fill="url(#b-white)" />
              <ellipse cx="186" cy="164" rx="4" ry="14" fill="white" opacity="0.65" />
            </g>

            <path d="M 64 148 C 64 132 166 132 166 148 C 172 195 156 238 115 240 C 74 238 58 195 64 148 Z" fill="url(#b-white)" />
            <path d="M 72 148 C 72 135 158 135 158 148 C 163 190 148 230 115 232 C 82 230 67 190 72 148 Z" fill="url(#b-white-subtle)" />

            {/* EMBLEMA TRÉBOL DIGITAL PNG EN EL PECHO DEL BOT 1 */}
            <g transform="translate(115, 172) scale(0.2)">
              <image href="/images/TREBOL_01.png" x="-50" y="-50" width="100" height="100" />
            </g>
            <text x="115" y="197" textAnchor="middle" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="2.5" fontFamily="system-ui, sans-serif">
              TREBOT
            </text>

            <path d="M 96 122 C 96 138 134 138 134 122 Z" fill="url(#b-silver)" />
            <ellipse cx="115" cy="122" rx="19" ry="5" fill="#e2e8f0" />

            <rect x="34" y="58" width="16" height="42" rx="8" fill="url(#b-silver)" />
            <rect x="180" y="58" width="16" height="42" rx="8" fill="url(#b-silver)" />

            <ellipse cx="115" cy="30" rx="22" ry="8" fill="url(#b-white)" />
            <rect x="44" y="32" width="142" height="96" rx="40" fill="url(#b-white)" />
            <rect x="58" y="44" width="114" height="72" rx="28" fill="url(#b-screen)" />

            <ellipse cx="72" cy="86" rx="8" ry="4" fill="#ff6599" opacity="0.85" />
            <ellipse cx="158" cy="86" rx="8" ry="4" fill="#ff6599" opacity="0.85" />

            <motion.g
              animate={{ scaleY: [1, 1, 0.1, 1, 1] }}
              transition={{ duration: 0.25, repeat: Infinity, repeatDelay: 3.5, ease: 'easeInOut' }}
              style={{ transformOrigin: '115px 72px' }}
            >
              {activeEyeExpr === 'half-moon' ? (
                <>
                  <path d="M 74 76 Q 87 58 100 76" stroke="#84C638" strokeWidth="4.5" strokeLinecap="round" fill="none" />
                  <path d="M 130 76 Q 143 58 156 76" stroke="#84C638" strokeWidth="4.5" strokeLinecap="round" fill="none" />
                </>
              ) : activeEyeExpr === 'wink' ? (
                <>
                  <circle cx="86" cy="72" r="10" fill="#84C638" />
                  <path d="M 130 76 Q 143 58 156 76" stroke="#84C638" strokeWidth="4.5" strokeLinecap="round" fill="none" />
                </>
              ) : (
                <>
                  <circle cx="86" cy="72" r="10" fill="#84C638" />
                  <circle cx="144" cy="72" r="10" fill="#84C638" />
                </>
              )}
            </motion.g>

            {isSpeaking ? (
              <motion.ellipse
                cx="115" cy="94" rx="10" ry="5" fill="#84C638"
                animate={{ ry: [3, 9, 3], cy: [94, 91, 94] }}
                transition={{ duration: 0.22, repeat: Infinity, ease: 'easeInOut' }}
              />
            ) : (
              <path d="M 106 93 Q 115 102 124 93" stroke="#84C638" strokeWidth="3.5" strokeLinecap="round" fill="none" />
            )}

            {isHovered && (
              <motion.g
                animate={{ rotate: [-10, 5, -12, 8, -6, -10] }}
                transition={{ duration: 1.0, repeat: Infinity, ease: "easeInOut" }}
                style={{ transformOrigin: '58px 140px', transformBox: 'view-box' }}
              >
                <path d="M 58 140 C 38 132 34 100 36 70 C 38 54 56 54 62 70 C 66 100 68 132 58 140 Z" fill="url(#b-white)" />
                <ellipse cx="49" cy="85" rx="3.5" ry="14" fill="white" opacity="0.65" transform="rotate(6, 49, 85)" />
              </motion.g>
            )}
          </svg>
        )}
      </motion.div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// PRESETS ESTÁTICOS Y FIJOS PARA LAS 3 OPCIONES DE VOZ (VALORES EXACTOS Y DEFINIDOS)
// ─────────────────────────────────────────────────────────────────────────────
const VOICE_PRESETS = {
  v1: {
    key: 'nova',
    label: '👩 Mujer V1',
    playbackRate: 1.35, // Tono agudo femenino brillante
    pitch: 1.75,
    rate: 1.45
  },
  v2: {
    key: 'shimmer',
    label: '👩 Mujer V2',
    playbackRate: 1.15, // Tono femenino suave y dulce
    pitch: 1.25,
    rate: 1.25
  }
};

// ─────────────────────────────────────────────────────────────────────────────
// PASOS DEL TUTORIAL GUIADO: EXPLICANDO UNO A UNO LOS DIAGRAMAS DFD TIPO n8n
// ─────────────────────────────────────────────────────────────────────────────
const TUTORIAL_STEPS = [
  {
    targetId: 'hero',
    title: '1. Bienvenida de TREBOT',
    speech: 'Hola, bienvenido. Me da gusto que estés aquí.',
    buttonText: 'Siguiente ➔',
    pos: 'right-4 md:right-8 bottom-6 md:bottom-8 ml-auto'
  },
  {
    targetId: 'que-es-ia',
    title: '2. Presentación de TREBOT',
    speech: 'Soy TREBOT — el asistente de inteligencia artificial de Trébol Digital. Antes de contarte qué hacemos... quiero decirte algo importante. Esta página no es solo información sobre nuestros servicios.',
    buttonText: 'Siguiente ➔',
    pos: 'right-4 md:right-8 bottom-6 md:bottom-8 ml-auto'
  },
  {
    targetId: 'soluciones',
    title: '3. Propósito de la Plataforma',
    speech: 'Mientras navegas aquí, voy a explicarte cómo la inteligencia artificial se está aplicando HOY en negocios como el tuyo. Sin que tengas que contratar nada. Sin formularios. Sin requisitos. ¿Te gustaría que te explique un ejemplo de automatización?',
    buttonText: 'Siguiente ➔',
    pos: 'right-2 md:right-6 lg:right-10 bottom-6 md:bottom-8 ml-auto'
  },
  {
    targetId: 'contacto',
    title: '4. Capacitación Gratuita en IA',
    speech: 'Solo por estar aquí, ya empezaste tu primera capacitación gratuita en IA aplicada a negocios. Si consideras que Trébol puede ayudarte a ir más lejos, ¡con gusto hablamos!',
    buttonText: '<< Con gusto hablamos >>',
    pos: 'right-4 md:right-8 bottom-6 md:bottom-8 ml-auto'
  }
];

const DFD_EXPLANATIONS = [
  {
    title: 'DFD 1: Agentes Comerciales en WhatsApp',
    speech: 'Primer Diagrama DFD: Agentes Comerciales. El mensaje ingresa vía Webhook en WhatsApp, el modelo GPT-4o procesa la intención, consulta la base de datos y agenda la cita automáticamente en tu CRM.'
  },
  {
    title: 'DFD 2: Automatización de Procesos (RPA)',
    speech: 'Segundo Diagrama DFD: Automatización RPA. El correo recibe la factura, la IA extrae los campos con visión Llama 3 OCR, valida el folio ante el SAT y carga el asiento contable en SAP ERP.'
  },
  {
    title: 'DFD 3: BI & Modelos Predictivos',
    speech: 'Tercer Diagrama DFD: Business Intelligence. Extraemos datos de tus ERPs y bases SQL, procesamos tendencias con Machine Learning y enviamos el resumen ejecutivo en PDF directo al WhatsApp del CEO.'
  },
  {
    title: 'DFD 4: Soporte Autónomo & RAG',
    speech: 'Cuarto Diagrama DFD: Soporte Autónomo RAG. Al ingresar un ticket en Zendesk, la base vectorial Pinecone y Claude 3.5 buscan en tus manuales para resolver y cerrar el 80% de dudas sin personal.'
  }
];

const CASE_EXPLANATIONS = [
  {
    tab: 0,
    title: 'Caso 1: Atención a Prospectos',
    speechSinTrebol: 'Caso 1: Atención a Prospectos. Sin IA, los tiempos de espera son de 2 a 12 horas y se pierde el 60% de prospectos calificados. Haz clic en Con Trébol IA para ver la aceleración.',
    speechConTrebol: '¡Excelente! Con Trébol IA en Atención a Prospectos, la respuesta es en menos de 5 segundos las 24 horas y se triplica el volumen de citas agendadas.'
  },
  {
    tab: 1,
    title: 'Caso 2: Procesamiento de Datos',
    speechSinTrebol: 'Caso 2: Procesamiento de Datos. Sin IA, el personal pasa horas copiando y pegando facturas PDF con riesgo de error humano. Haz clic en Con Trébol IA para ver la aceleración.',
    speechConTrebol: '¡Excelente! Con Trébol IA en Procesamiento de Datos, las facturas se leen con visión OCR, se validan ante el SAT y se cargan a tu ERP en 1.2 segundos.'
  },
  {
    tab: 2,
    title: 'Caso 3: Toma de Decisiones',
    speechSinTrebol: 'Caso 3: Toma de Decisiones. Sin IA, los reportes son mensuales y desfasados 30 días en Excel. Haz clic en Con Trébol IA para ver la aceleración.',
    speechConTrebol: '¡Excelente! Con Trébol IA en Toma de Decisiones, obtienes dashboards predictivos en tiempo real con alertas automáticas directo al WhatsApp del CEO.'
  }
];

const pilarServices = [
  {
    id: 'dfd-area-0',
    icon: MessageSquare,
    badge: 'DFD 01: CONVERSIÓN & VENTAS',
    title: 'Agentes Comerciales 24/7 en WhatsApp & Web',
    desc: 'Desplegamos agentes de Inteligencia Artificial entrenados con la voz, productos y protocolos de tu marca. Responden preguntas complejas, califican prospectos y agendan citas de venta directamente en tu calendario.',
    n8nNodes: [
      {
        type: 'TRIGGER',
        icon: '01',
        title: 'WhatsApp / Webhook Entrante',
        sub: 'Mensaje de prospecto 24/7'
      },
      {
        type: 'AI AGENT',
        icon: '02',
        title: 'OpenAI GPT-4o Intención',
        sub: 'Extracción de Lead Scoring'
      },
      {
        type: 'DATABASE',
        icon: '03',
        title: 'Consulta Vector DB / CRM',
        sub: 'Verificación stock & precios'
      },
      {
        type: 'LOGIC IF',
        icon: '04',
        title: '¿Lead B2B Calificado?',
        sub: 'Filtro por presupuesto & urgencia'
      },
      {
        type: 'ACTION',
        icon: '05',
        title: 'Calendar & HubSpot Action',
        sub: 'Cita agendada + Alerta a Slack'
      }
    ],
    benefits: ['Respuesta instantánea <5 segundos', 'Cierre automático en WhatsApp & Web', 'Sincronización directa a tu CRM']
  },
  {
    id: 'dfd-area-1',
    icon: Zap,
    badge: 'DFD 02: OPERACIONES & RPA',
    title: 'Automatización de Procesos con n8n + IA',
    desc: 'Eliminamos la carga de trabajo manual conectando tus correos, hojas de cálculo, facturación y sistemas ERP. La IA extrae datos, clasifica solicitudes y ejecuta flujos sin error humano.',
    n8nNodes: [
      {
        type: 'TRIGGER',
        icon: '01',
        title: 'IMAP / Email Trigger',
        sub: 'Factura o documento PDF'
      },
      {
        type: 'VISION AI',
        icon: '02',
        title: 'Llama 3 Vision OCR Agent',
        sub: 'Extracción folios, RFC & montos'
      },
      {
        type: 'VALIDATOR',
        icon: '03',
        title: 'Validación Fiscal SAT API',
        sub: 'Verificación CFDI en vivo'
      },
      {
        type: 'ERP SYSTEM',
        icon: '04',
        title: 'Carga Directa SAP / ERP',
        sub: 'Registro contable automático'
      },
      {
        type: 'NOTIFICATION',
        icon: '05',
        title: 'Slack / Telegram Bot',
        sub: 'Confirmación & reporte a Finanzas'
      }
    ],
    benefits: ['Reducción del 70% en trabajo manual', 'Zero errores en captura de información', 'Flujos activos 24/7 entre tus sistemas']
  },
  {
    id: 'dfd-area-2',
    icon: BarChart3,
    badge: 'DFD 03: DECISIONES & BI',
    title: 'Business Intelligence & Modelos Predictivos',
    desc: 'Transformamos bases de datos desorganizadas en tableros ejecutivos interactivos. Algoritmos predictivos te anticipan fluctuaciones de demanda, comportamiento de clientes y proyecciones de flujo.',
    n8nNodes: [
      {
        type: 'TRIGGER',
        icon: '01',
        title: 'Cron Schedule Ingesta Batch',
        sub: 'Sincronización ERP & SQL'
      },
      {
        type: 'ETL CLEAN',
        icon: '02',
        title: 'Data Transformer Node',
        sub: 'Limpieza & Desduplicación'
      },
      {
        type: 'PREDICTIVE ML',
        icon: '03',
        title: 'Modelado Predictivo Sales/Churn',
        sub: 'Cálculo de tendencias & volumen'
      },
      {
        type: 'DASHBOARD',
        icon: '04',
        title: 'Generación Dashboard PDF',
        sub: 'Creación de reporte ejecutivo'
      },
      {
        type: 'DISPATCHER',
        icon: '05',
        title: 'Alerta WhatsApp al CEO',
        sub: 'Notificación de KPIs críticos'
      }
    ],
    benefits: ['Dashboards en tiempo real', 'Análisis de sentimiento y rotación', 'Proyecciones financieras asistidas']
  },
  {
    id: 'dfd-area-3',
    icon: Users,
    badge: 'DFD 04: ATENCIÓN AL CLIENTE',
    title: 'Soporte Autónomo & Asistentes Internos',
    desc: 'Instala un asistente de IA capaz de resolver el 80% de los tickets frecuentes de soporte o brindar a tu equipo interno acceso instantáneo a todas las políticas y manuales de la empresa.',
    n8nNodes: [
      {
        type: 'TRIGGER',
        icon: '01',
        title: 'Omnichannel Webhook Ticket',
        sub: 'Zendesk / WhatsApp / Chat'
      },
      {
        type: 'VECTOR RAG',
        icon: '02',
        title: 'Pinecone Vector DB Search',
        sub: 'Búsqueda semántica en docs'
      },
      {
        type: 'LLM GENERATOR',
        icon: '03',
        title: 'Claude 3.5 Sonnet RAG Agent',
        sub: 'Sintetización solución precisa'
      },
      {
        type: 'CONFIDENCE IF',
        icon: '04',
        title: '¿Confianza > 92%?',
        sub: 'Validación de certeza'
      },
      {
        type: 'AUTO-RESOLVE',
        icon: '05',
        title: 'Respuesta & Cierre Autónomo',
        sub: '80% resolución en <2s'
      }
    ],
    benefits: ['Resolución automática de tickets', 'Base de conocimiento interactiva', 'Reducción drástica en costos de soporte']
  }
];

const techStack = [
  { name: 'OpenAI GPT-4o', desc: 'Modelos del estado del arte para comprensión semántica avanzada y visión.' },
  { name: 'Anthropic Claude 3.5', desc: 'Lógica ejecutiva compleja y generación de código/documentos sin alucinación.' },
  { name: 'Meta Llama 3', desc: 'Modelos de código abierto para despliegues privados on-premise de máxima seguridad.' },
  { name: 'n8n & Make', desc: 'Orquestación de flujos empresariales e integración nativa con +500 APIs.' },
  { name: 'Pinecone & Vector DBs', desc: 'Bases de datos vectoriales para búsqueda semántica e inteligencia sobre tus archivos.' },
  { name: 'WhatsApp Business API', desc: 'Canal oficial verificado para agentes conversacionales masivos de alta conversión.' }
];

const comparativaAntesDespues = [
  {
    id: 0,
    area: 'Atención a Prospectos',
    areaDesc: 'Atención inmediata de leads las 24 horas, calificación de intención de compra y agendamiento automático de citas en CRM.',
    badge: 'Ventas & Conversión 24/7',
    trebotInsight: 'TREBOT Insight: La atención inmediata con IA eleva la tasa de conversión de prospectos de un 12% a un 42%, sin costo adicional por lead.',
    antesTitle: 'Cuello de Botella & Pérdida de Leads',
    antes: 'Tiempos de espera de 2 a 12 horas. El 60% de los prospectos calificados abandonan el proceso y se van con la competencia por falta de respuesta inmediata.',
    antesPuntos: [
      'Respuesta lenta fuera del horario laboral',
      'Leads calificados que se enfrían',
      'Capacidad limitada del equipo humano'
    ],
    antesKpi: '12 Horas',
    antesKpiLabel: 'Tiempo de Espera Promedio',
    despuesTitle: 'Respuesta Inmediata & Citas Agendadas',
    despues: 'Respuesta inmediata en <5 segundos las 24 horas. Agentes de IA califican la intención del usuario y triplican el volumen de citas agendadas.',
    despuesPuntos: [
      'Atención 24/7 en WhatsApp, Web y Redes',
      'Calificación inteligente de presupuesto e interés',
      'Agendamiento automático en Google Calendar/CRM'
    ],
    despuesKpi: '< 5 Seg',
    despuesKpiLabel: 'Tiempo de Respuesta Inmediato',
    impacto: '+300% Citas Agendadas',
    metricasComparativas: [
      { label: 'Tiempo de Respuesta', antes: '12 hrs', despues: '< 5s' },
      { label: 'Disponibilidad Operativa', antes: '8 hrs / 5 días', despues: '24 hrs / 7 días' },
      { label: 'Tasa de Conversión a Cita', antes: '12%', despues: '42%' }
    ]
  },
  {
    id: 1,
    area: 'Procesamiento de Datos',
    areaDesc: 'Extracción inteligente de información en documentos PDF, lectura OCR y carga autónoma de asientos contables a tu ERP.',
    badge: 'RPA & Visión Documental',
    trebotInsight: 'TREBOT Insight: El procesamiento autónomo de facturas y documentos elimina el 95% de la carga administrativa en contabilidad y finanzas.',
    antesTitle: 'Captura Manual y Carga de Trabajo Tediosa',
    antes: 'Personal dedicado horas a copiar y pegar folios, extraer facturas PDF y responder correos manualmente con alto riesgo de error humano.',
    antesPuntos: [
      'Captura manual propensa a errores',
      'Horas hombre desperdiciadas en copiar/pegar',
      'Retardos en la validación fiscal ante el SAT'
    ],
    antesKpi: '0% Auto',
    antesKpiLabel: 'Captura 100% Manual',
    despuesTitle: 'Flujos Autónomos de Carga ERP',
    despues: 'Flujos automáticos con IA que leen, validan ante el webservice del SAT y cargan asientos contables al sistema ERP al instante.',
    despuesPuntos: [
      'Visión OCR con Llama 3 para leer cualquier formato PDF',
      'Validación automática de folios y listas negras del SAT',
      'Carga directa a SAP, QuickBooks o ERP interno'
    ],
    despuesKpi: '100% Auto',
    despuesKpiLabel: 'Procesamiento Autónomo',
    impacto: '-95% Trabajo Repetitivo',
    metricasComparativas: [
      { label: 'Tiempo por Factura', antes: '15 min', despues: '1.2 seg' },
      { label: 'Margen de Error Humano', antes: '8.5%', despues: '0.01%' },
      { label: 'Horas Ahorradas / Mes', antes: '0 hrs', despues: '160 hrs' }
    ]
  },
  {
    id: 2,
    area: 'Toma de Decisiones',
    areaDesc: 'Consolidación dinámica de métricas de negocio en tiempo real con modelos de Machine Learning y alertas ejecutivas.',
    badge: 'BI & Analytics Predictivo',
    trebotInsight: 'TREBOT Insight: Acceso instantáneo a métricas financieras y proyecciones de flujo de caja para decisiones estratégicas en tiempo real.',
    antesTitle: 'Reportes Tardíos y Datos Desfasados',
    antes: 'Reportes mensuales tardíos en hojas de cálculo Excel con datos desactualizados, inconsistencias de formato y elevado margen de error.',
    antesPuntos: [
      'Cierre mensual lento y desfasado',
      'Información fragmentada en múltiples archivos',
      'Falta de alertas tempranas ante anomalías'
    ],
    antesKpi: '30 Días',
    antesKpiLabel: 'Desfase de Información',
    despuesTitle: 'Dashboards Dinámicos & Predicciones',
    despues: 'Dashboards dinámicos en tiempo real con alertas tempranas y predicciones de ventas con Machine Learning directo al WhatsApp del CEO.',
    despuesPuntos: [
      'Consolidación de datos en tiempo real de todos tus sistemas',
      'Modelos de ML que proyectan flujo de caja a 90 días',
      'Alertas automáticas vía WhatsApp ante anomalías de ingresos'
    ],
    despuesKpi: 'Tiempo Real',
    despuesKpiLabel: 'Monitoreo 24/7',
    impacto: '100% Visibilidad Operativa',
    metricasComparativas: [
      { label: 'Frecuencia de Actualización', antes: 'Mensual (30d)', despues: 'En Tiempo Real' },
      { label: 'Precisión de Predicción', antes: 'Empírica', despues: '96% Algorítmica' },
      { label: 'Tiempo para Detectar Anomalías', antes: '3 semanas', despues: 'Inmediato (Alertas)' }
    ]
  }
];

const roadmapIA = [
  {
    paso: '01',
    titulo: 'Auditoría & Mapeo de Oportunidades',
    desc: 'Analizamos tus flujos operativos actuales, identificamos cuellos de botella y priorizamos los proyectos de IA con mayor retorno de inversión a 60 días.',
    entregable: 'Diagnóstico Operativo & Hoja de Ruta'
  },
  {
    paso: '02',
    titulo: 'Arquitectura & Entrenamiento de Modelos',
    desc: 'Conectamos tus sistemas, estructuramos bases de conocimiento vectoriales y entrenamos los agentes con la información oficial y tono de tu empresa.',
    entregable: 'Agentes Entrenados & Flujos de Prueba'
  },
  {
    paso: '03',
    titulo: 'Despliegue Piloto & Pruebas de Estrés',
    desc: 'Implementamos la solución en un entorno controlado, auditamos respuestas, medimos precisión y garantizamos cumplimiento con protocolos de seguridad.',
    entregable: 'Certificación de Calidad & Métricas'
  },
  {
    paso: '04',
    titulo: 'Lanzamiento Total & Capacitación',
    desc: 'Desplegamos la arquitectura a producción completa, capacitamos a tu equipo humano para supervisar los modelos y optimizamos de forma continua.',
    entregable: 'Plataforma en Producción & Soporte'
  }
];

const faqsIA = [
  {
    q: '¿Nuestros datos e información confidencial están seguros?',
    a: 'Absolutamente. Todos los modelos e integraciones se construyen bajo estándares de privacidad empresarial. Tus datos no se utilizan para entrenar modelos públicos de terceros y toda la comunicación está cifrada de punto a punto.'
  },
  {
    q: '¿La IA reemplazará a mi personal actual?',
    a: 'La Inteligencia Artificial no reemplaza a tu equipo; potencia sus capacidades. Al eliminar tareas repetitivas y tediosas, tu equipo se concentra en actividades de alto valor estratégico, ventas complejas y atención humana personalizada.'
  },
  {
    q: '¿Cuánto tiempo toma implementar una solución de IA?',
    a: 'Nuestros proyectos piloto y agentes de ventas/soporte se despliegan habitualmente en un periodo de 3 a 5 semanas. Proyectos más complejos de arquitectura de datos se estructuran en fases de 8 semanas.'
  },
  {
    q: '¿Necesitamos conocimientos técnicos avanzados en nuestro equipo?',
    a: 'No. Diseñamos sistemas con interfaces intuitivas y entregamos paneles autoadministrables para que cualquier persona de tu equipo pueda gestionarlos sin escribir una sola línea de código.'
  }
];

// ─────────────────────────────────────────────────────────────────────────────
// CANVAS Y DEMOSTRACIÓN INTERACTIVA PASO A PASO ESTILO N8N
// ─────────────────────────────────────────────────────────────────────────────
// Explicaciones detalladas por cada paso de cada área DFD
const DFD_NODE_STEPS = [
  // Área 0: Conversión & Ventas
  [
    { title: "1. Webhook Entrante (WhatsApp)", text: "Paso 1: Entra un mensaje del cliente vía Webhook a WhatsApp Business API. El sistema lo recibe las 24 horas del día.", nodeIndex: 0 },
    { title: "2. OpenAI GPT-4o Agent", text: "Paso 2: La Inteligencia Artificial analiza semánticamente el mensaje, comprende la intención y calcula el Lead Score.", nodeIndex: 1 },
    { title: "3. Consulta Vector DB / CRM", text: "Paso 3: Se realiza una consulta relacional a la base vectorial y CRM para verificar stock, catálogo y precios.", nodeIndex: 2 },
    { title: "4. Evaluador IF (Score > 85)", text: "Paso 4: El nodo condicional evalúa si el prospecto cumple con el perfil calificado B2B.", nodeIndex: 3 },
    { title: "5. HubSpot & ActiveCampaign", text: "Paso 5: ¡Lead Calificado! Se registra la oportunidad en HubSpot, se agenda la cita en Calendly y se envía alerta a Slack.", nodeIndex: 4 }
  ],
  // Área 1: Operaciones & RPA
  [
    { title: "1. Gmail Watch Trigger", text: "Paso 1: Llega un correo con factura adjunta en PDF/XML. El trigger automático intercepta el documento.", nodeIndex: 0 },
    { title: "2. Llama 3 Vision OCR", text: "Paso 2: El modelo de visión de IA lee el documento PDF y extrae de forma estructurada folios, montos y RFC.", nodeIndex: 1 },
    { title: "3. Validación SAT API", text: "Paso 3: Verificación directa en el webservice del SAT para confirmar la autenticidad y timbrado CFDI 4.0.", nodeIndex: 2 },
    { title: "4. Filtro Fiscal IF", text: "Paso 4: El nodo condicional valida que el comprobante fiscal esté vigente y libre de duplicidad.", nodeIndex: 3 },
    { title: "5. SAP FI/CO Auto-Posting", text: "Paso 5: Carga automática del asiento contable en SAP ERP sin captura manual y reporte de confirmación.", nodeIndex: 4 }
  ],
  // Área 2: Decisiones & BI
  [
    { title: "1. Ingesta PostgreSQL & Stripe", text: "Paso 1: Extracción periódica programada de datos financieros y ventas desde PostgreSQL y Stripe.", nodeIndex: 0 },
    { title: "2. n8n Merge ETL Transformer", text: "Paso 2: Consolidación, filtrado y normalización de miles de registros de distintas fuentes.", nodeIndex: 1 },
    { title: "3. Prophet ML Forecast Engine", text: "Paso 3: Algoritmos de Machine Learning ejecutan modelos predictivos sobre tendencias de ventas y churn.", nodeIndex: 2 },
    { title: "4. Looker Studio API", text: "Paso 4: Síntesis interactiva de los indicadores clave de rendimiento (KPIs) en tableros ejecutivos.", nodeIndex: 3 },
    { title: "5. WhatsApp CEO Digest", text: "Paso 5: Envío matutino automático del reporte gerencial en PDF directo al WhatsApp del CEO.", nodeIndex: 4 }
  ],
  // Área 3: Soporte Autónomo & RAG
  [
    { title: "1. Omnichannel Ticket Trigger", text: "Paso 1: El cliente envía una solicitud de soporte por Zendesk, WhatsApp o Chat Web.", nodeIndex: 0 },
    { title: "2. Pinecone Vector DB Search", text: "Paso 2: Búsqueda semántica en la base vectorial sobre manuales, políticas y documentos oficiales de la empresa.", nodeIndex: 1 },
    { title: "3. Claude 3.5 Sonnet RAG Agent", text: "Paso 3: El agente Claude 3.5 genera una respuesta precisa utilizando el contexto recuperado sin inventar datos.", nodeIndex: 2 },
    { title: "4. Evaluador de Confianza (> 92%)", text: "Paso 4: Validación de certeza de la solución antes de responder al usuario.", nodeIndex: 3 },
    { title: "5. Auto-Resolución & CSAT", text: "Paso 5: Cierre automático del ticket en <2 segundos y envío de encuesta de satisfacción al cliente.", nodeIndex: 4 }
  ]
];

function RenderAreaWorkflowCanvas({ activeAreaTab, currentSol, externalActiveStep, onNodeClick }) {
  const bg = { backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '20px 20px' };

  const [internalActiveStep, setInternalActiveStep] = useState(-1); // -1 = Vista general, 0..4 = Nodos iluminados
  const [isPlaying, setIsPlaying] = useState(false);

  const activeStep = externalActiveStep !== undefined && externalActiveStep !== null && externalActiveStep !== -1 ? externalActiveStep : internalActiveStep;
  const setActiveStep = setInternalActiveStep;

  const handleNodeClick = (stepIdx) => {
    setIsPlaying(false);
    if (onNodeClick) {
      onNodeClick(stepIdx);
    } else {
      setInternalActiveStep(stepIdx);
    }
  };

  // Reiniciar paso al cambiar de pestaña
  useEffect(() => {
    setInternalActiveStep(-1);
    setIsPlaying(false);
  }, [activeAreaTab]);

  const currentSteps = DFD_NODE_STEPS[activeAreaTab] || DFD_NODE_STEPS[0];

  // Auto-play secuencia paso a paso
  useEffect(() => {
    let timer;
    if (isPlaying) {
      timer = setInterval(() => {
        setInternalActiveStep((prev) => {
          if (prev < 4) return prev + 1;
          setIsPlaying(false);
          return 4;
        });
      }, 4200);
    }
    return () => clearInterval(timer);
  }, [isPlaying]);

  const renderSimulatedClickBadge = (stepIdx) => {
    if (activeStep !== stepIdx) return null;
    return (
      <motion.div
        key={`click-badge-${stepIdx}`}
        initial={{ scale: 0.6, opacity: 0, y: 10 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="absolute -top-7 -right-4 z-50 flex items-center gap-1.5 pointer-events-none whitespace-nowrap"
      >
        <span className="w-4 h-4 rounded-full bg-emerald-400/60 animate-ping absolute -left-1" />
        <div className="px-2.5 py-1 rounded-full bg-emerald-500 text-slate-950 font-mono font-black text-[10px] shadow-[0_0_18px_rgba(34,197,94,0.95)] border border-white flex items-center gap-1">
          <span>TREBOT CLICK</span>
        </div>
      </motion.div>
    );
  };

  const getNodeClasses = (stepIdx) => {
    if (activeStep === -1) return "hover:scale-105 hover:border-trebol border-neutral-700/80 bg-[#242724] text-white transition-all duration-300 shadow-xl";
    if (activeStep === stepIdx) {
      return "ring-4 ring-trebol shadow-xl scale-110 z-30 border-trebol bg-[#242724] text-white transition-all duration-500";
    }
    return "opacity-35 blur-[0.4px] scale-95 border-neutral-800 bg-[#141614] text-neutral-400 transition-all duration-500";
  };

  const flowAnimationCSS = (
    <style>{`
      @keyframes n8nFlowDash {
        from { stroke-dashoffset: 24; }
        to { stroke-dashoffset: 0; }
      }
      .n8n-flow-path {
        stroke-dasharray: 8 6;
        animation: n8nFlowDash 1.2s linear infinite;
      }
    `}</style>
  );

  return (
    <div
      className="p-6 md:p-8 rounded-[2.5rem] bg-[#181a18] border-2 border-[#2a2c2a] shadow-2xl font-sans relative overflow-hidden text-white"
      style={{
        backgroundImage: 'radial-gradient(#2d302d 1.2px, transparent 1.2px)',
        backgroundSize: '20px 20px'
      }}
    >
      {flowAnimationCSS}

      {/* HEADER DE CONTROL E INFORMACIÓN DEL WORKFLOW ESTILO TRÉBOL DIGITAL PRO */}
      <div className="flex flex-wrap items-center justify-between border-b border-neutral-800/80 pb-4 mb-6 gap-4 relative z-10">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 rounded-lg bg-trebol text-carbon text-xs font-black font-mono shadow-md flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-carbon animate-pulse" />
            n8n
          </span>
          <span className="font-mono font-extrabold text-white text-sm tracking-tight">
            {activeAreaTab === 0 && 'WhatsApp-to-CRM Lead Qualification'}
            {activeAreaTab === 1 && 'Invoice OCR → SAT Validator → SAP ERP Auto-Posting'}
            {activeAreaTab === 2 && 'Multi-Source BI Pipeline → CEO Executive Digest'}
            {activeAreaTab === 3 && 'RAG Support Automation — Pinecone + Claude 3.5'}
          </span>
        </div>
        <div className="flex items-center gap-2.5">
          <span className="text-[11px] font-mono font-bold text-trebol bg-trebol/10 border border-trebol/30 px-3 py-1 rounded-full flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-trebol animate-ping" />
            ● Active Workflow
          </span>
          <span className="text-[11px] font-mono text-neutral-300 bg-[#242724] border border-neutral-700/80 px-3 py-1 rounded-full">
            100% Autónomo
          </span>
        </div>
      </div>

      {/* CANVAS DFD SEGÚN EL ÁREA SELECCIONADA */}
      <div className="w-full overflow-x-auto flex justify-center py-4 relative z-10">
        {/* ÁREA 0: CONVERSIÓN & VENTAS */}
        {activeAreaTab === 0 && (
          <div className="relative mx-auto" style={{ height: 420, minWidth: 760 }}>
            <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', overflow: 'visible', pointerEvents: 'none', zIndex: 0 }}>
              <defs>
                <marker id="a0g" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0L10 5L0 10z" fill="#22c55e" /></marker>
                <marker id="a0r" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0L10 5L0 10z" fill="#f43f5e" /></marker>
              </defs>
              <path d="M 135 210 L 205 210" stroke="#22c55e" strokeWidth="2.5" fill="none" className="n8n-flow-path" markerEnd="url(#a0g)" />
              <circle cx="135" cy="210" r="3.5" fill="#22c55e" />
              <path d="M 305 210 L 370 210" stroke="#22c55e" strokeWidth="2.5" fill="none" className="n8n-flow-path" markerEnd="url(#a0g)" />
              <circle cx="305" cy="210" r="3.5" fill="#22c55e" />
              <path d="M 470 196 C 512 196 512 139 555 139" stroke="#22c55e" strokeWidth="2.5" fill="none" className="n8n-flow-path" markerEnd="url(#a0g)" />
              <circle cx="470" cy="196" r="3.5" fill="#22c55e" />
              <text x="478" y="181" style={{ fontSize: 10, fontFamily: 'monospace', fill: '#4ade80', fontWeight: 800 }}>true</text>
              <path d="M 470 224 C 512 224 512 311 555 311" stroke="#f43f5e" strokeWidth="2.5" fill="none" className="n8n-flow-path" markerEnd="url(#a0r)" />
              <circle cx="470" cy="224" r="3.5" fill="#f43f5e" />
              <text x="478" y="272" style={{ fontSize: 10, fontFamily: 'monospace', fill: '#fb7185', fontWeight: 800 }}>false</text>
            </svg>

            {/* N1: WhatsApp Trigger */}
            <div style={{ position: 'absolute', left: 35, top: 171 }} onClick={() => handleNodeClick(0)}>
              <div style={{ width: 100, height: 78 }} className={`rounded-l-[2rem] rounded-r-2xl border-2 flex flex-col items-center justify-center relative cursor-pointer ${getNodeClasses(0)}`}>
                {renderSimulatedClickBadge(0)}
                <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-emerald-400" />
                </div>
                <span className="absolute bottom-1 right-2 text-emerald-400 text-[9px] font-black">✓</span>
              </div>
              <span style={{ position: 'absolute', top: -9, right: -12 }} className="bg-slate-800 border border-slate-700 text-slate-300 text-[8px] font-mono px-1.5 py-0.5 rounded-full shadow-sm">1 item</span>
              <div className="mt-2 text-center" style={{ width: 130, marginLeft: -15 }}>
                <div className="text-[11px] font-extrabold text-slate-100 leading-tight">WhatsApp Business API</div>
                <div className="text-[9.5px] text-slate-400 font-mono">Webhook · 24/7</div>
              </div>
            </div>

            {/* N2: GPT-4o Classifier */}
            <div style={{ position: 'absolute', left: 205, top: 171 }} onClick={() => handleNodeClick(1)}>
              <div style={{ width: 100, height: 78 }} className={`rounded-2xl border-2 flex flex-col items-center justify-center relative cursor-pointer ${getNodeClasses(1)}`}>
                {renderSimulatedClickBadge(1)}
                <div className="w-9 h-9 rounded-xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center">
                  <Cpu className="w-5 h-5 text-purple-400" />
                </div>
                <span className="absolute bottom-1 right-2 text-emerald-400 text-[9px] font-black">✓</span>
              </div>
              <div className="mt-2 text-center" style={{ width: 128, marginLeft: -14 }}>
                <div className="text-[11px] font-extrabold text-slate-100 leading-tight">GPT-4o Intent Classifier</div>
                <div className="text-[9.5px] text-slate-400 font-mono">Lead Score 0–100pts</div>
              </div>
            </div>

            {/* N3: Vector DB / CRM */}
            <div style={{ position: 'absolute', left: 370, top: 171 }} onClick={() => handleNodeClick(2)}>
              <div style={{ width: 100, height: 78 }} className={`rounded-2xl border-2 flex flex-col items-center justify-center relative cursor-pointer ${getNodeClasses(2)}`}>
                {renderSimulatedClickBadge(2)}
                <div className="w-9 h-9 rounded-xl bg-sky-500/20 border border-sky-500/40 flex items-center justify-center">
                  <Database className="w-5 h-5 text-sky-400" />
                </div>
                <span className="absolute bottom-1 right-2 text-emerald-400 text-[9px] font-black">✓</span>
              </div>
              <div className="mt-2 text-center" style={{ width: 120, marginLeft: -10 }}>
                <div className="text-[11px] font-extrabold text-slate-100 leading-tight">Consulta Vector DB</div>
                <div className="text-[9.5px] text-slate-400 font-mono">Stock & Precios</div>
              </div>
            </div>

            {/* N4: Router IF */}
            <div style={{ position: 'absolute', left: 555, top: 100 }} onClick={() => handleNodeClick(3)}>
              <div style={{ width: 115, height: 78 }} className={`rounded-2xl border-2 flex flex-col items-center justify-center relative cursor-pointer ${getNodeClasses(3)}`}>
                {renderSimulatedClickBadge(3)}
                <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-md">
                  <GitFork className="w-5 h-5 text-white" />
                </div>
                <span className="absolute bottom-1 right-2 text-emerald-400 text-[9px] font-black">✓</span>
              </div>
              <div className="mt-2 text-center" style={{ width: 138, marginLeft: -12 }}>
                <div className="text-[11px] font-extrabold text-slate-100 leading-tight">Score &gt; 85pts? (IF)</div>
                <div className="text-[9.5px] text-slate-400 font-mono">Conditional Router</div>
              </div>
            </div>

            {/* N5: HubSpot + Calendly */}
            <div style={{ position: 'absolute', left: 555, top: 272 }} onClick={() => handleNodeClick(4)}>
              <div style={{ width: 115, height: 78 }} className={`rounded-2xl border-2 flex flex-col items-center justify-center relative cursor-pointer ${getNodeClasses(4)}`}>
                {renderSimulatedClickBadge(4)}
                <div className="w-9 h-9 rounded-xl bg-orange-500/20 border border-orange-500/40 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-orange-400" />
                </div>
                <span className="absolute bottom-1 right-2 text-emerald-400 text-[9px] font-black">✓</span>
              </div>
              <div className="mt-2 text-center" style={{ width: 138, marginLeft: -12 }}>
                <div className="text-[11px] font-extrabold text-slate-100 leading-tight">HubSpot CRM + Calendly</div>
                <div className="text-[9.5px] text-slate-400 font-mono">Create Deal + Book Demo</div>
              </div>
            </div>
          </div>
        )}

        {/* ÁREA 1: OPERACIONES & RPA */}
        {activeAreaTab === 1 && (
          <div className="relative mx-auto" style={{ height: 420, minWidth: 860 }}>
            <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', overflow: 'visible', pointerEvents: 'none', zIndex: 0 }}>
              <defs>
                <marker id="a1g" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0L10 5L0 10z" fill="#22c55e" /></marker>
                <marker id="a1r" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0L10 5L0 10z" fill="#f43f5e" /></marker>
              </defs>
              <path d="M 135 210 L 200 210" stroke="#22c55e" strokeWidth="2.5" fill="none" className="n8n-flow-path" markerEnd="url(#a1g)" />
              <circle cx="135" cy="210" r="3.5" fill="#22c55e" />
              <path d="M 300 210 L 365 210" stroke="#22c55e" strokeWidth="2.5" fill="none" className="n8n-flow-path" markerEnd="url(#a1g)" />
              <circle cx="300" cy="210" r="3.5" fill="#22c55e" />
              <path d="M 465 210 L 530 210" stroke="#22c55e" strokeWidth="2.5" fill="none" className="n8n-flow-path" markerEnd="url(#a1g)" />
              <circle cx="465" cy="210" r="3.5" fill="#22c55e" />
              <path d="M 630 196 C 668 196 668 139 710 139" stroke="#22c55e" strokeWidth="2.5" fill="none" className="n8n-flow-path" markerEnd="url(#a1g)" />
              <circle cx="630" cy="196" r="3.5" fill="#22c55e" />
              <text x="637" y="182" style={{ fontSize: 10, fontFamily: 'monospace', fill: '#4ade80', fontWeight: 800 }}>valid</text>
              <path d="M 630 224 C 668 224 668 311 710 311" stroke="#f43f5e" strokeWidth="2.5" fill="none" className="n8n-flow-path" markerEnd="url(#a1r)" />
              <circle cx="630" cy="224" r="3.5" fill="#f43f5e" />
              <text x="636" y="272" style={{ fontSize: 10, fontFamily: 'monospace', fill: '#fb7185', fontWeight: 800 }}>reject</text>
            </svg>

            {/* N1: Gmail Trigger */}
            <div style={{ position: 'absolute', left: 35, top: 171 }} onClick={() => handleNodeClick(0)}>
              <div style={{ width: 100, height: 78 }} className={`rounded-l-[2rem] rounded-r-2xl border-2 flex flex-col items-center justify-center relative cursor-pointer ${getNodeClasses(0)}`}>
                <div className="w-9 h-9 rounded-xl bg-red-500/20 border border-red-500/40 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-red-400" />
                </div>
                <span className="absolute bottom-1 right-2 text-emerald-400 text-[9px] font-black">✓</span>
              </div>
              <div className="mt-2 text-center" style={{ width: 128, marginLeft: -14 }}>
                <div className="text-[11px] font-extrabold text-slate-100 leading-tight">Gmail Watch API</div>
                <div className="text-[9.5px] text-slate-400 font-mono">Trigger · Inbox Monitor</div>
              </div>
            </div>

            {/* N2: AWS Textract OCR */}
            <div style={{ position: 'absolute', left: 200, top: 171 }} onClick={() => handleNodeClick(1)}>
              <div style={{ width: 100, height: 78 }} className={`rounded-2xl border-2 flex flex-col items-center justify-center relative cursor-pointer ${getNodeClasses(1)}`}>
                <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center">
                  <Eye className="w-5 h-5 text-amber-400" />
                </div>
                <span className="absolute bottom-1 right-2 text-emerald-400 text-[9px] font-black">✓</span>
              </div>
              <div className="mt-2 text-center" style={{ width: 124, marginLeft: -12 }}>
                <div className="text-[11px] font-extrabold text-slate-100 leading-tight">AWS Textract OCR</div>
                <div className="text-[9.5px] text-slate-400 font-mono">Extract PDF Fields</div>
              </div>
            </div>

            {/* N3: SAT Validator */}
            <div style={{ position: 'absolute', left: 365, top: 171 }} onClick={() => handleNodeClick(2)}>
              <div style={{ width: 100, height: 78 }} className={`rounded-2xl border-2 flex flex-col items-center justify-center relative cursor-pointer ${getNodeClasses(2)}`}>
                <div className="w-9 h-9 rounded-xl bg-blue-500/20 border border-blue-500/40 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-blue-400" />
                </div>
                <span className="absolute bottom-1 right-2 text-emerald-400 text-[9px] font-black">✓</span>
              </div>
              <div className="mt-2 text-center" style={{ width: 124, marginLeft: -12 }}>
                <div className="text-[11px] font-extrabold text-slate-100 leading-tight">SAT Webservice v4</div>
                <div className="text-[9.5px] text-slate-400 font-mono">CFDI 4.0 Validation</div>
              </div>
            </div>

            {/* N4: CFDI 4.0 Valid? (IF) */}
            <div style={{ position: 'absolute', left: 530, top: 171 }} onClick={() => handleNodeClick(3)}>
              <div style={{ width: 100, height: 78 }} className={`rounded-2xl border-2 flex flex-col items-center justify-center relative cursor-pointer ${getNodeClasses(3)}`}>
                <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-md">
                  <GitFork className="w-5 h-5 text-white" />
                </div>
                <span className="absolute bottom-1 right-2 text-emerald-400 text-[9px] font-black">✓</span>
              </div>
              <div className="mt-2 text-center" style={{ width: 120, marginLeft: -10 }}>
                <div className="text-[11px] font-extrabold text-slate-100 leading-tight">CFDI 4.0 Valid? (IF)</div>
                <div className="text-[9.5px] text-slate-400 font-mono">RFC Check</div>
              </div>
            </div>

            {/* N5: SAP FI/CO API */}
            <div style={{ position: 'absolute', left: 710, top: 100 }} onClick={() => handleNodeClick(4)}>
              <div style={{ width: 115, height: 78 }} className={`rounded-2xl border-2 flex flex-col items-center justify-center relative cursor-pointer ${getNodeClasses(4)}`}>
                <div className="w-9 h-9 rounded-xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center">
                  <Settings className="w-5 h-5 text-purple-400" />
                </div>
                <span className="absolute bottom-1 right-2 text-emerald-400 text-[9px] font-black">✓</span>
              </div>
              <div className="mt-2 text-center" style={{ width: 136, marginLeft: -10 }}>
                <div className="text-[11px] font-extrabold text-slate-100 leading-tight">SAP FI/CO API</div>
                <div className="text-[9.5px] text-slate-400 font-mono">Journal Entry Posting</div>
              </div>
            </div>

            {/* N5b: Slack Alert */}
            <div style={{ position: 'absolute', left: 710, top: 272 }}>
              <div style={{ width: 115, height: 78 }} className="rounded-2xl bg-[#1e293b]/70 border-2 border-rose-500/60 flex flex-col items-center justify-center relative opacity-70">
                <div className="w-9 h-9 rounded-xl bg-rose-500/20 flex items-center justify-center">
                  <ShieldAlert className="w-5 h-5 text-rose-400" />
                </div>
              </div>
              <div className="mt-2 text-center" style={{ width: 136, marginLeft: -10 }}>
                <div className="text-[11px] font-extrabold text-rose-400 leading-tight">Slack Alert + DLQ</div>
                <div className="text-[9.5px] text-slate-400 font-mono">Retry Queue</div>
              </div>
            </div>
          </div>
        )}

        {/* ÁREA 2: DECISIONES & BI */}
        {activeAreaTab === 2 && (
          <div className="relative mx-auto" style={{ height: 430, minWidth: 880 }}>
            <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', overflow: 'visible', pointerEvents: 'none', zIndex: 0 }}>
              <defs>
                <marker id="a2g" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0L10 5L0 10z" fill="#22c55e" /></marker>
              </defs>
              <path d="M 135 140 C 175 140 175 210 215 210" stroke="#22c55e" strokeWidth="2.5" fill="none" className="n8n-flow-path" markerEnd="url(#a2g)" />
              <circle cx="135" cy="140" r="3.5" fill="#22c55e" />
              <path d="M 135 320 C 175 320 175 210 215 210" stroke="#22c55e" strokeWidth="2.5" fill="none" className="n8n-flow-path" markerEnd="url(#a2g)" />
              <circle cx="135" cy="320" r="3.5" fill="#22c55e" />
              <path d="M 315 210 L 380 210" stroke="#22c55e" strokeWidth="2.5" fill="none" className="n8n-flow-path" markerEnd="url(#a2g)" />
              <circle cx="315" cy="210" r="3.5" fill="#22c55e" />
              <path d="M 480 210 L 545 210" stroke="#22c55e" strokeWidth="2.5" fill="none" className="n8n-flow-path" markerEnd="url(#a2g)" />
              <circle cx="480" cy="210" r="3.5" fill="#22c55e" />
              <path d="M 645 210 L 710 210" stroke="#22c55e" strokeWidth="2.5" fill="none" className="n8n-flow-path" markerEnd="url(#a2g)" />
              <circle cx="645" cy="210" r="3.5" fill="#22c55e" />
            </svg>

            {/* N1a: PostgreSQL ERP */}
            <div style={{ position: 'absolute', left: 35, top: 101 }} onClick={() => handleNodeClick(0)}>
              <div style={{ width: 100, height: 78 }} className={`rounded-l-[2rem] rounded-r-2xl border-2 flex flex-col items-center justify-center relative cursor-pointer ${getNodeClasses(0)}`}>
                <div className="w-9 h-9 rounded-xl bg-sky-500/20 border border-sky-500/40 flex items-center justify-center">
                  <Database className="w-5 h-5 text-sky-400" />
                </div>
                <span className="absolute bottom-1 right-2 text-emerald-400 text-[9px] font-black">✓</span>
              </div>
              <div className="mt-2 text-center" style={{ width: 130, marginLeft: -15 }}>
                <div className="text-[11px] font-extrabold text-slate-100 leading-tight">PostgreSQL ERP</div>
                <div className="text-[9.5px] text-slate-400 font-mono">Cron Ingesta Batch</div>
              </div>
            </div>

            {/* N1b: Stripe REST API */}
            <div style={{ position: 'absolute', left: 35, top: 281 }} onClick={() => handleNodeClick(0)}>
              <div style={{ width: 100, height: 78 }} className={`rounded-l-[2rem] rounded-r-2xl border-2 flex flex-col items-center justify-center relative cursor-pointer ${getNodeClasses(0)}`}>
                <div className="w-9 h-9 rounded-xl bg-violet-500/20 border border-violet-500/40 flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-violet-400" />
                </div>
                <span className="absolute bottom-1 right-2 text-emerald-400 text-[9px] font-black">✓</span>
              </div>
              <div className="mt-2 text-center" style={{ width: 130, marginLeft: -15 }}>
                <div className="text-[11px] font-extrabold text-slate-100 leading-tight">Stripe REST API</div>
                <div className="text-[9.5px] text-slate-400 font-mono">MRR & Churn Metrics</div>
              </div>
            </div>

            {/* N2: n8n Merge ETL */}
            <div style={{ position: 'absolute', left: 215, top: 171 }} onClick={() => handleNodeClick(1)}>
              <div style={{ width: 100, height: 78 }} className={`rounded-2xl border-2 flex flex-col items-center justify-center relative cursor-pointer ${getNodeClasses(1)}`}>
                <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center">
                  <Layers className="w-5 h-5 text-amber-400" />
                </div>
                <span className="absolute bottom-1 right-2 text-emerald-400 text-[9px] font-black">✓</span>
              </div>
              <div className="mt-2 text-center" style={{ width: 124, marginLeft: -12 }}>
                <div className="text-[11px] font-extrabold text-slate-100 leading-tight">n8n Merge + ETL</div>
                <div className="text-[9.5px] text-slate-400 font-mono">Join & Clean Data</div>
              </div>
            </div>

            {/* N3: Prophet ML Forecast */}
            <div style={{ position: 'absolute', left: 380, top: 171 }} onClick={() => handleNodeClick(2)}>
              <div style={{ width: 100, height: 78 }} className={`rounded-2xl border-2 flex flex-col items-center justify-center relative cursor-pointer ${getNodeClasses(2)}`}>
                <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-emerald-400" />
                </div>
                <span className="absolute bottom-1 right-2 text-emerald-400 text-[9px] font-black">✓</span>
              </div>
              <div className="mt-2 text-center" style={{ width: 124, marginLeft: -12 }}>
                <div className="text-[11px] font-extrabold text-slate-100 leading-tight">Prophet ML Forecast</div>
                <div className="text-[9.5px] text-slate-400 font-mono">Revenue Prediction</div>
              </div>
            </div>

            {/* N4: Looker Studio API */}
            <div style={{ position: 'absolute', left: 545, top: 171 }} onClick={() => handleNodeClick(3)}>
              <div style={{ width: 100, height: 78 }} className={`rounded-2xl border-2 flex flex-col items-center justify-center relative cursor-pointer ${getNodeClasses(3)}`}>
                <div className="w-9 h-9 rounded-xl bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-indigo-400" />
                </div>
                <span className="absolute bottom-1 right-2 text-emerald-400 text-[9px] font-black">✓</span>
              </div>
              <div className="mt-2 text-center" style={{ width: 124, marginLeft: -12 }}>
                <div className="text-[11px] font-extrabold text-slate-100 leading-tight">Looker Studio API</div>
                <div className="text-[9.5px] text-slate-400 font-mono">Push Dashboard PDF</div>
              </div>
            </div>

            {/* N5: WhatsApp CEO Digest */}
            <div style={{ position: 'absolute', left: 710, top: 171 }} onClick={() => handleNodeClick(4)}>
              <div style={{ width: 115, height: 78 }} className={`rounded-2xl border-2 flex flex-col items-center justify-center relative cursor-pointer ${getNodeClasses(4)}`}>
                <div className="w-9 h-9 rounded-xl bg-emerald-500 text-white flex items-center justify-center shadow-md">
                  <Send className="w-5 h-5 text-white" />
                </div>
                <span className="absolute bottom-1 right-2 text-emerald-400 text-[9px] font-black">✓</span>
              </div>
              <div className="mt-2 text-center" style={{ width: 134, marginLeft: -9 }}>
                <div className="text-[11px] font-extrabold text-slate-100 leading-tight">WhatsApp CEO Digest</div>
                <div className="text-[9.5px] text-slate-400 font-mono">KPI Summary Report</div>
              </div>
            </div>
          </div>
        )}

        {/* ÁREA 3: SOPORTE & ATENCIÓN RAG */}
        {activeAreaTab === 3 && (
          <div className="relative mx-auto" style={{ height: 420, minWidth: 860 }}>
            <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', overflow: 'visible', pointerEvents: 'none', zIndex: 0 }}>
              <defs>
                <marker id="a3g" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0L10 5L0 10z" fill="#22c55e" /></marker>
                <marker id="a3r" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0L10 5L0 10z" fill="#f43f5e" /></marker>
              </defs>
              <path d="M 135 210 L 200 210" stroke="#22c55e" strokeWidth="2.5" fill="none" className="n8n-flow-path" markerEnd="url(#a3g)" />
              <circle cx="135" cy="210" r="3.5" fill="#22c55e" />
              <path d="M 300 210 L 365 210" stroke="#22c55e" strokeWidth="2.5" fill="none" className="n8n-flow-path" markerEnd="url(#a3g)" />
              <circle cx="300" cy="210" r="3.5" fill="#22c55e" />
              <path d="M 465 210 L 530 210" stroke="#22c55e" strokeWidth="2.5" fill="none" className="n8n-flow-path" markerEnd="url(#a3g)" />
              <circle cx="465" cy="210" r="3.5" fill="#22c55e" />
              <path d="M 630 196 C 668 196 668 139 710 139" stroke="#22c55e" strokeWidth="2.5" fill="none" className="n8n-flow-path" markerEnd="url(#a3g)" />
              <circle cx="630" cy="196" r="3.5" fill="#22c55e" />
              <text x="637" y="182" style={{ fontSize: 10, fontFamily: 'monospace', fill: '#4ade80', fontWeight: 800 }}>&gt;92%</text>
              <path d="M 630 224 C 668 224 668 311 710 311" stroke="#f43f5e" strokeWidth="2.5" fill="none" className="n8n-flow-path" markerEnd="url(#a3r)" />
              <circle cx="630" cy="224" r="3.5" fill="#f43f5e" />
              <text x="637" y="272" style={{ fontSize: 10, fontFamily: 'monospace', fill: '#fb7185', fontWeight: 800 }}>&lt;92%</text>
            </svg>

            {/* N1: Zendesk Ticket */}
            <div style={{ position: 'absolute', left: 35, top: 171 }} onClick={() => handleNodeClick(0)}>
              <div style={{ width: 100, height: 78 }} className={`rounded-l-[2rem] rounded-r-2xl border-2 flex flex-col items-center justify-center relative cursor-pointer ${getNodeClasses(0)}`}>
                <div className="w-9 h-9 rounded-xl bg-orange-500/20 border border-orange-500/40 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-orange-400" />
                </div>
                <span className="absolute bottom-1 right-2 text-emerald-400 text-[9px] font-black">✓</span>
              </div>
              <div className="mt-2 text-center" style={{ width: 130, marginLeft: -15 }}>
                <div className="text-[11px] font-extrabold text-slate-100 leading-tight">Zendesk Webhook</div>
                <div className="text-[9.5px] text-slate-400 font-mono">Ticket Created</div>
              </div>
            </div>

            {/* N2: Pinecone Vector DB */}
            <div style={{ position: 'absolute', left: 200, top: 171 }} onClick={() => handleNodeClick(1)}>
              <div style={{ width: 100, height: 78 }} className={`rounded-2xl border-2 flex flex-col items-center justify-center relative cursor-pointer ${getNodeClasses(1)}`}>
                <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center">
                  <Search className="w-5 h-5 text-emerald-400" />
                </div>
                <span className="absolute bottom-1 right-2 text-emerald-400 text-[9px] font-black">✓</span>
              </div>
              <div className="mt-2 text-center" style={{ width: 124, marginLeft: -12 }}>
                <div className="text-[11px] font-extrabold text-slate-100 leading-tight">Pinecone Vector DB</div>
                <div className="text-[9.5px] text-slate-400 font-mono">Semantic Search</div>
              </div>
            </div>

            {/* N3: Claude 3.5 Sonnet */}
            <div style={{ position: 'absolute', left: 365, top: 171 }} onClick={() => handleNodeClick(2)}>
              <div style={{ width: 100, height: 78 }} className={`rounded-2xl border-2 flex flex-col items-center justify-center relative cursor-pointer ${getNodeClasses(2)}`}>
                <div className="w-9 h-9 rounded-xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-purple-400" />
                </div>
                <span className="absolute bottom-1 right-2 text-emerald-400 text-[9px] font-black">✓</span>
              </div>
              <div className="mt-2 text-center" style={{ width: 124, marginLeft: -12 }}>
                <div className="text-[11px] font-extrabold text-slate-100 leading-tight">Claude 3.5 Sonnet</div>
                <div className="text-[9.5px] text-slate-400 font-mono">RAG Context Builder</div>
              </div>
            </div>

            {/* N4: Confidence > 92% (IF) */}
            <div style={{ position: 'absolute', left: 530, top: 171 }} onClick={() => handleNodeClick(3)}>
              <div style={{ width: 100, height: 78 }} className={`rounded-2xl border-2 flex flex-col items-center justify-center relative cursor-pointer ${getNodeClasses(3)}`}>
                <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-md">
                  <GitFork className="w-5 h-5 text-white" />
                </div>
                <span className="absolute bottom-1 right-2 text-emerald-400 text-[9px] font-black">✓</span>
              </div>
              <div className="mt-2 text-center" style={{ width: 120, marginLeft: -10 }}>
                <div className="text-[11px] font-extrabold text-slate-100 leading-tight">Confidence &gt; 92%? (IF)</div>
                <div className="text-[9.5px] text-slate-400 font-mono">RAG Score Evaluator</div>
              </div>
            </div>

            {/* N5: Auto-Resolve + CSAT */}
            <div style={{ position: 'absolute', left: 710, top: 100 }} onClick={() => handleNodeClick(4)}>
              <div style={{ width: 120, height: 78 }} className={`rounded-2xl border-2 flex flex-col items-center justify-center relative cursor-pointer ${getNodeClasses(4)}`}>
                <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                </div>
                <span className="absolute bottom-1 right-2 text-emerald-400 text-[9px] font-black">✓</span>
              </div>
              <div className="mt-2 text-center" style={{ width: 140, marginLeft: -10 }}>
                <div className="text-[11px] font-extrabold text-slate-100 leading-tight">Auto-Resolve + CSAT</div>
                <div className="text-[9.5px] text-slate-400 font-mono">Zendesk Close</div>
              </div>
            </div>

            {/* N5b: Jira Escalation */}
            <div style={{ position: 'absolute', left: 710, top: 272 }}>
              <div style={{ width: 120, height: 78 }} className="rounded-2xl bg-white border-2 border-rose-400 flex flex-col items-center justify-center relative opacity-70">
                <div className="w-9 h-9 rounded-xl bg-rose-50 flex items-center justify-center">
                  <Users className="w-5 h-5 text-rose-600" />
                </div>
              </div>
              <div className="mt-2 text-center" style={{ width: 140, marginLeft: -10 }}>
                <div className="text-[10px] font-extrabold text-rose-700 leading-tight">Jira Ticket + Handoff</div>
                <div className="text-[9px] text-slate-400 font-mono">Human Escalation</div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* MONITOREO EN VIVO IGUAL A MARKETING ESTRATÉGICO */}
      <div className="bg-[#242724] border border-[#333633] rounded-2xl p-4 md:p-5 flex flex-col md:flex-row items-center justify-between gap-4 relative z-10 font-sans mt-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-trebol/10 border border-trebol/30 flex items-center justify-center text-trebol shrink-0">
            <Zap size={20} />
          </div>
          <div>
            <span className="text-[11px] font-mono font-bold text-trebol uppercase tracking-wider block">
              Monitoreo Activo: {activeAreaTab === 0 ? 'Agentes & Ventas' : activeAreaTab === 1 ? 'Operaciones & RPA' : activeAreaTab === 2 ? 'BI & Predictivo' : 'Soporte Autónomo'}
            </span>
            <p className="text-xs md:text-sm text-neutral-200 font-semibold">
              {activeAreaTab === 0 && 'Agentes de voz y texto calificando e integrando leads en tiempo real.'}
              {activeAreaTab === 1 && 'Lectura OCR, validación fiscal SAT y registro contable automático.'}
              {activeAreaTab === 2 && 'Ingesta batch de ERPs y reporte ejecutivo predictivo diario.'}
              {activeAreaTab === 3 && 'RAG en base vectorial Pinecone + Claude 3.5 respondiendo tickets.'}
            </p>
          </div>
        </div>

        <div className="text-right shrink-0">
          <span className="text-[11px] font-mono text-neutral-400 block">Eficiencia Operativa:</span>
          <span className="text-xs font-mono font-bold text-trebol">100% Autónomo</span>
        </div>
      </div>

      <p className="text-xs text-neutral-400 font-sans text-center pt-2 relative z-10">
        De punta a punta: Tu infraestructura conectada a la Inteligencia Artificial de Trébol Digital sin fricción.
      </p>
    </div>
  );
}




// ─────────────────────────────────────────────────────────────────────────────
// PÁGINA PRINCIPAL
// ─────────────────────────────────────────────────────────────────────────────
export default function IAAplicadaPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [activeAreaTab, setActiveAreaTab] = useState(0);
  const [activeCompTab, setActiveCompTab] = useState(0);
  const [isTrebolActive, setIsTrebolActive] = useState(false); // false = Sin Trébol, true = Con Trébol IA
  const [isTrebotHovered, setIsTrebotHovered] = useState(false);

  // Estado del Tutorial Guiado con Enfoque Spotlight
  const [showTutorial, setShowTutorial] = useState(false);
  const [showFloatingButton, setShowFloatingButton] = useState(false);
  const [tutorialStep, setTutorialStep] = useState(0);
  const [selectedDfdIndex, setSelectedDfdIndex] = useState(null);
  const [selectedCaseIndex, setSelectedCaseIndex] = useState(null);
  const [dfdActiveStep, setDfdActiveStep] = useState(-1);
  const [isExplainingExample, setIsExplainingExample] = useState(false);
  const [selectedVoice, setSelectedVoice] = useState('v1'); // 'v1' (Mujer V1) | 'v2' (Mujer V2)
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [muted, setMuted] = useState(false);
  const currentAudioRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById('hero');
      const footer = document.querySelector('footer');
      let isPastHero = false;
      let isAtFooter = false;

      if (hero) {
        const heroRect = hero.getBoundingClientRect();
        isPastHero = heroRect.bottom <= 150;
      } else {
        isPastHero = window.scrollY > 400;
      }

      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        isAtFooter = footerRect.top <= window.innerHeight - 50;
      }

      setShowFloatingButton(isPastHero && !isAtFooter);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculadora de ROI interactiva
  const [teamSize, setTeamSize] = useState(10);
  const [hoursPerWeek, setHoursPerWeek] = useState(12);

  const hoursSavedMonth = Math.round(teamSize * hoursPerWeek * 4.2 * 0.65);
  const estimatedSavings = (hoursSavedMonth * 180).toLocaleString('es-MX');

  const stopAudio = useCallback(() => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    if (currentAudioRef.current) {
      try {
        currentAudioRef.current.pause();
        currentAudioRef.current.currentTime = 0;
        currentAudioRef.current.src = '';
      } catch (e) { }
      currentAudioRef.current = null;
    }
    setIsSpeaking(false);
  }, []);

  const speak = useCallback((text, explicitVoice = null) => {
    stopAudio();
    const voiceToUse = explicitVoice || selectedVoice;
    return new Promise(async (resolve) => {
      if (muted || typeof window === 'undefined' || !text) {
        resolve();
        return;
      }

      // Convertir MAYÚSCULAS de TREBOT a Trebot para evitar que el motor TTS lo deletree letra por letra
      const cleanText = text.replace(/\bTREBOT\b/g, 'Trebot').replace(/\bTREBOTS\b/g, 'Trebots');

      let resolved = false;
      let timerId = null;

      const safeResolve = () => {
        if (!resolved) {
          resolved = true;
          if (timerId) clearTimeout(timerId);
          setIsSpeaking(false);
          resolve();
        }
      };

      // Timer de seguridad por si el audio es bloqueado o falla (amplio para no cortar la locución)
      const durationEstimate = Math.max(12000, cleanText.length * 150);
      timerId = setTimeout(safeResolve, durationEstimate);

      try {
        const controller = new AbortController();
        const fetchTimeout = setTimeout(() => controller.abort(), 600);

        const res = await fetch('/api/tts', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text: cleanText, voice: voiceToUse }),
          signal: controller.signal,
        });

        clearTimeout(fetchTimeout);

        if (res.ok) {
          const blob = await res.blob();
          const audioUrl = URL.createObjectURL(blob);
          const audio = new Audio(audioUrl);
          currentAudioRef.current = audio;

          setIsSpeaking(true);
          audio.onended = () => {
            URL.revokeObjectURL(audioUrl);
            safeResolve();
          };
          audio.onerror = () => {
            URL.revokeObjectURL(audioUrl);
            safeResolve();
          };

          // Obtener la configuración fija estática del preset seleccionado
          const preset = VOICE_PRESETS[voiceToUse] || VOICE_PRESETS.onyx;

          // Desactivar preservación de tono para permitir la alteración real de la frecuencia vocal (Pitch Shift)
          audio.preservesPitch = false;
          if ('webkitPreservesPitch' in audio) audio.webkitPreservesPitch = false;
          if ('mozPreservesPitch' in audio) audio.mozPreservesPitch = false;

          // Asignar el valor fijo e inmutable del preset
          audio.playbackRate = preset.playbackRate;

          await audio.play();
          return;
        }
      } catch (e) {
        // Fallback a SpeechSynthesis
      }

      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const preset = VOICE_PRESETS[voiceToUse] || VOICE_PRESETS.onyx;
        const utter = new SpeechSynthesisUtterance(cleanText);
        utter.lang = 'es-MX';
        utter.pitch = preset.pitch;
        utter.rate = preset.rate;

        utter.onend = safeResolve;
        utter.onerror = safeResolve;

        const voices = window.speechSynthesis.getVoices();
        if (voiceToUse === 'onyx') {
          // Voz Masculina
          const maleVoice = voices.find(v => v.lang.startsWith('es') && (v.name.toLowerCase().includes('raul') || v.name.toLowerCase().includes('pablo') || v.name.toLowerCase().includes('jorge') || (v.name.toLowerCase().includes('male') && !v.name.toLowerCase().includes('female'))));
          if (maleVoice) utter.voice = maleVoice;
        } else if (voiceToUse === 'shimmer') {
          // Voz Femenina Cute / Dulce para la opción Mujer
          const femaleVoice = voices.find(v => v.lang.startsWith('es') && (v.name.toLowerCase().includes('sabina') || v.name.toLowerCase().includes('monica') || v.name.toLowerCase().includes('laura') || v.name.toLowerCase().includes('lucia') || v.name.toLowerCase().includes('helena') || v.name.toLowerCase().includes('female')));
          if (femaleVoice) utter.voice = femaleVoice;
        } else {
          // Voz Andrógina / Neutra para la opción Cute
          const neutralVoice = voices.find(v => v.lang.startsWith('es-MX')) || voices.find(v => v.lang.startsWith('es'));
          if (neutralVoice) utter.voice = neutralVoice;
        }

        setIsSpeaking(true);
        window.speechSynthesis.speak(utter);
      } else {
        safeResolve();
      }
    });
  }, [muted, selectedVoice, stopAudio]);

  const currentStepRef = useRef(-1);

  // Función maestra para reproducir un paso y avanzar automáticamente en el recorrido
  const playStep = useCallback(async (stepIdx) => {
    stopAudio();
    if (stepIdx >= TUTORIAL_STEPS.length) {
      setShowTutorial(false);
      currentStepRef.current = -1;
      setIsExplainingExample(false);
      return;
    }

    setShowTutorial(true);
    setTutorialStep(stepIdx);
    currentStepRef.current = stepIdx;
    setSelectedDfdIndex(null);
    setIsExplainingExample(false);

    const stepData = TUTORIAL_STEPS[stepIdx];
    setTimeout(() => {
      const targetId = stepIdx === 2 ? `dfd-area-${activeAreaTab}` : stepData.targetId;
      const element = document.getElementById(targetId) || document.getElementById(stepData.targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 80);

    // Hablar el mensaje del paso actual
    await speak(stepData.speech);

    // Auto-avanzar secuencialmente en los pasos introductorios (0 y 1)
    if (currentStepRef.current === stepIdx && stepIdx < 2) {
      await new Promise((r) => setTimeout(r, 600));
      if (currentStepRef.current === stepIdx) {
        playStep(stepIdx + 1);
      }
    }
  }, [activeAreaTab, speak, stopAudio]);

  // Manejador para explicar el ejemplo interactivo si el usuario responde "Sí"
  const handleExplainExample = useCallback(async () => {
    stopAudio();
    setIsExplainingExample(true);
    await speak('¡Excelente! Mira este ejemplo de Agente Comercial en WhatsApp: El mensaje ingresa vía Webhook en WhatsApp, la IA procesa la intención del cliente con GPT-4o, consulta la base de datos y agenda la cita automáticamente en tu CRM en menos de 5 segundos.');
  }, [speak, stopAudio]);

  const handleFinishExample = useCallback(() => {
    stopAudio();
    setIsExplainingExample(false);
    playStep(3);
  }, [playStep, stopAudio]);

  const hasAutoStartedRef = useRef(false);

  // Iniciar automáticamente el tutorial por primera vez (se ejecuta UNA SOLA VEZ)
  useEffect(() => {
    if (hasAutoStartedRef.current) return;
    window.scrollTo(0, 0);
    const hasSeen = localStorage.getItem('trebot_tutorial_seen');
    if (!hasSeen) {
      hasAutoStartedRef.current = true;
      localStorage.setItem('trebot_tutorial_seen', 'true');
      const timer = setTimeout(() => {
        playStep(0);
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, [playStep]);

  // Función para ejecutar la locución secuencial automática (Sin Trébol -> Con Trébol IA) para un caso
  const playCaseExplanationSequence = useCallback(async (caseIdx) => {
    setSelectedCaseIndex(caseIdx);
    setActiveCompTab(caseIdx);
    setIsTrebolActive(false);

    // Centrar la tarjeta principal perfectamente en pantalla
    setTimeout(() => {
      const el = document.getElementById('master-transform-card');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 60);

    // 1. Hablar la explicación total de lo que es tu empresa Sin Trébol
    await speak(CASE_EXPLANATIONS[caseIdx].speechSinTrebol);

    // 2. Justo al terminar Sin Trébol y antes de comenzar la frase con Trébol IA, acciona el switch
    setIsTrebolActive(true);
    await new Promise((r) => setTimeout(r, 450));

    // 3. Hablar la explicación de Con Trébol IA
    await speak(CASE_EXPLANATIONS[caseIdx].speechConTrebol);
  }, [speak]);

  // Función para ejecutar la locución paso a paso NODO POR NODO en el canvas DFD
  const playDfdNodeSequence = useCallback(async (dfdIdx) => {
    setSelectedDfdIndex(dfdIdx);
    setActiveAreaTab(dfdIdx);
    setDfdActiveStep(-1);

    setTimeout(() => {
      const el = document.getElementById(`dfd-area-${dfdIdx}`) || document.getElementById('soluciones');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 60);

    const nodes = DFD_NODE_STEPS[dfdIdx] || DFD_NODE_STEPS[0];
    for (let i = 0; i < nodes.length; i++) {
      setDfdActiveStep(i);
      await speak(nodes[i].text);
      await new Promise((r) => setTimeout(r, 400));
    }

    setDfdActiveStep(-1);
  }, [speak]);

  // Selección manual de un nodo específico en el DFD
  const selectDfdSingleNode = useCallback(async (nodeIdx) => {
    stopAudio();
    const currentTab = selectedDfdIndex !== null ? selectedDfdIndex : activeAreaTab;
    if (selectedDfdIndex === null && showTutorial) {
      setSelectedDfdIndex(currentTab);
    }
    setDfdActiveStep(nodeIdx);
    const nodeData = DFD_NODE_STEPS[currentTab]?.[nodeIdx];
    if (nodeData) {
      await speak(nodeData.text);
    }
  }, [selectedDfdIndex, activeAreaTab, showTutorial, speak, stopAudio]);

  // Centrar automáticamente la tarjeta DFD o sección en la pantalla durante el tutorial
  useEffect(() => {
    if (showTutorial) {
      const timer = setTimeout(() => {
        let targetId = TUTORIAL_STEPS[tutorialStep]?.targetId;
        if (tutorialStep === 2) {
          targetId = `dfd-area-${activeAreaTab}`;
        }
        if (tutorialStep === 3) {
          targetId = 'master-transform-card';
        }
        const el = document.getElementById(targetId) || document.getElementById('transformacion');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 80);
      return () => clearTimeout(timer);
    }
  }, [showTutorial, tutorialStep, activeAreaTab]);

  // Manejar el cambio manual de pasos en el tutorial
  const nextTutorialStep = useCallback(() => {
    if (tutorialStep < TUTORIAL_STEPS.length - 1) {
      playStep(tutorialStep + 1);
    } else {
      stopAudio();
      setShowTutorial(false);
      currentStepRef.current = -1;
    }
  }, [tutorialStep, playStep, stopAudio]);

  const startTutorialManual = useCallback(() => {
    playStep(0);
  }, [playStep]);

  const closeTutorial = useCallback(() => {
    stopAudio();
    setShowTutorial(false);
    currentStepRef.current = -1;
  }, [stopAudio]);

  const currentTargetId = TUTORIAL_STEPS[tutorialStep]?.targetId;

  return (
    <main className="w-full bg-hueso text-carbon min-h-screen overflow-hidden selection:bg-trebol selection:text-white relative">

      {/* ───────────────────────────────────────────────────────────────────────── */}
      {/* CAPA DE SOBREPOSICIÓN Y SPOTLIGHT DEL TUTORIAL (FONDO OSCURO CON FILTRO) */}
      {/* ───────────────────────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {showTutorial && (
          <>
            {/* Fondo oscuro traslúcido sobre toda la web */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9998] bg-black/85 backdrop-blur-[4px] pointer-events-auto"
              onClick={closeTutorial}
            />

            {/* TREBOT MASCOTA EN 3D CON TARJETA Y DIÁLOGO — SOLO EN PASOS 2, 3, 4 (EL HERO BOT CUBRE EL PASO 1) */}
            {tutorialStep > 0 && (
              <motion.div
                key={tutorialStep}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 40, scale: 0.9 }}
                transition={{ type: "spring", stiffness: 90, damping: 15 }}
                className={`fixed bottom-4 md:bottom-8 right-2 md:right-6 lg:right-10 flex-col md:flex-row-reverse z-[10000] flex items-center gap-4 md:gap-5 pointer-events-auto select-none transition-all duration-500 ease-in-out max-w-xl px-2 md:px-4`}
              >
                {/* TREBOT SVG 3D ALINEADO TOTALMENTE A LA DERECHA */}
                <div className="relative drop-shadow-[0_30px_60px_rgba(132,198,56,0.75)] shrink-0">
                  <TrebotSVG
                    isSpeaking={isSpeaking}
                    isHovered={isSpeaking || tutorialStep === 0}
                    isModal={true}
                    size={220}
                    armPose={isExplainingExample ? 'point-left' : tutorialStep === 0 ? 'wave' : 'rest'}
                    eyeExpression={isSpeaking ? 'wink' : 'circle'}
                  />
                </div>

                {/* TARJETA DE DIÁLOGO DE TREBOT Y CONTROLES DEL TOUR */}
                <div className="bg-[#141614]/95 border-2 border-trebol/50 rounded-3xl p-5 md:p-6 text-white shadow-2xl backdrop-blur-2xl space-y-4 max-w-md w-full relative">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#2d302d] pb-3">
                    <h4 className="text-sm md:text-base font-black text-white flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-trebol shrink-0" />
                      {isExplainingExample
                        ? 'Ejemplo de IA Aplicada'
                        : TUTORIAL_STEPS[tutorialStep]?.title}
                    </h4>

                    {/* CONMUTADOR DE 2 VOCES FEMENINAS (V1 / V2) */}
                    <div className="flex items-center gap-1 bg-[#1e211e] p-1 rounded-xl border border-[#2d302d] shrink-0 self-start sm:self-auto">
                      {[
                        { id: 'v1', label: '👩 Mujer V1' },
                        { id: 'v2', label: '👩 Mujer V2' }
                      ].map((v) => (
                        <button
                          key={v.id}
                          onClick={() => {
                            setSelectedVoice(v.id);
                            stopAudio();
                            const activeText = isExplainingExample
                              ? '¡Excelente! Mira este ejemplo de Agente Comercial en WhatsApp: El mensaje ingresa vía Webhook en WhatsApp, la IA procesa la intención del cliente con GPT-4o, consulta la base de datos y agenda la cita automáticamente en tu CRM en menos de 5 segundos.'
                              : TUTORIAL_STEPS[tutorialStep]?.speech;
                            if (activeText) {
                              setTimeout(() => {
                                speak(activeText, v.id);
                              }, 50);
                            }
                          }}
                          className={`px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold transition-all cursor-pointer ${
                            selectedVoice === v.id
                              ? 'bg-trebol text-slate-950 shadow-md font-extrabold'
                              : 'text-slate-400 hover:text-white'
                          }`}
                          title={`Cambiar a ${v.label}`}
                        >
                          {v.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* PREGUNTA DE EJEMPLO INTERACTIVO EN EL PASO 3 (INDEX 2) */}
                  {tutorialStep === 2 && !isExplainingExample && (
                    <div className="space-y-2.5 pt-2 border-t border-[#2d302d]">
                      <button
                        onClick={handleExplainExample}
                        className="w-full px-4 py-3 rounded-2xl bg-trebol text-slate-950 font-black text-xs hover:bg-lime-400 transition-all shadow-[0_0_20px_rgba(132,198,56,0.6)] flex items-center justify-between cursor-pointer"
                      >
                        <span>¡Sí, explícame un ejemplo!</span>
                        <ArrowRight size={15} />
                      </button>

                      <button
                        onClick={() => playStep(3)}
                        className="w-full px-4 py-2.5 rounded-2xl bg-[#1e211e] hover:bg-[#282b28] text-slate-300 font-bold text-xs border border-[#2d302d] transition-all flex items-center justify-between cursor-pointer"
                      >
                        <span>No, continuar</span>
                        <ChevronRight size={15} className="text-neutral-500" />
                      </button>
                    </div>
                  )}



                  {/* BOTONES FLOTANTES DE CONTROL GENERAL (EN PASOS 0, 1 Y 3 FUERA DE LA PREGUNTA) */}
                  {(tutorialStep !== 2 || isExplainingExample) && (
                    <div className="flex flex-wrap items-center gap-2 pt-1">
                      <button
                        onClick={() => {
                          if (isExplainingExample) {
                            handleFinishExample();
                          } else if (tutorialStep === TUTORIAL_STEPS.length - 1) {
                            closeTutorial();
                            const el = document.getElementById('contacto');
                            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                          } else {
                            nextTutorialStep();
                          }
                        }}
                        className="px-5 py-2.5 rounded-xl bg-trebol text-slate-950 font-black text-xs hover:bg-lime-400 transition-all shadow-[0_0_20px_rgba(132,198,56,0.6)] flex items-center gap-1.5 ml-auto cursor-pointer"
                      >
                        {isExplainingExample ? 'Continuar ➔' : TUTORIAL_STEPS[tutorialStep]?.buttonText}
                      </button>

                      <button
                        onClick={closeTutorial}
                        className="p-2 rounded-xl bg-[#1e211e] hover:bg-[#282b28] border border-[#2d302d] text-slate-400 hover:text-white cursor-pointer"
                        title="Saltar Tour"
                      >
                        <X size={14} />
                      </button>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </>
        )}
      </AnimatePresence>

      {/* BOTÓN FLOTANTE SOLO VISIBLE FUERA DEL HERO Y ANTES DEL FOOTER */}
      {!showTutorial && showFloatingButton && (
        <button
          onClick={startTutorialManual}
          className="fixed bottom-6 right-6 z-30 px-5 py-3 rounded-full bg-white border border-trebol/40 shadow-xl text-carbon font-bold text-xs hover:border-trebol hover:bg-trebol hover:text-white transition-all duration-300 flex items-center gap-2.5 group"
        >
          <div className="w-6 h-6 rounded-full bg-trebol/20 group-hover:bg-white text-trebol group-hover:text-trebol flex items-center justify-center font-bold text-xs">
            AI
          </div>
          <span>Iniciar Tour con TREBOT</span>
        </button>
      )}

      {/* ───────────────────────────────────────────────────────────────────────── */}
      {/* HERO SECTION COMPLETO EN 2 COLUMNAS (ALINEADO A MARKETING ESTRATÉGICO) */}
      {/* ───────────────────────────────────────────────────────────────────────── */}
      <section
        id="hero"
        className={`relative w-full pt-32 md:pt-40 pb-20 px-6 md:px-12 bg-hueso overflow-hidden border-b border-carbon/10 transition-all duration-500 ${showTutorial && currentTargetId === 'hero'
          ? 'z-[9999] relative ring-4 ring-trebol shadow-[0_0_100px_rgba(132,198,56,0.8)] rounded-3xl bg-hueso text-carbon pointer-events-auto'
          : ''
          }`}
      >

        {/* Animated Green Ambient Light Blobs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.7, 0.5] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-40 -left-40 w-[28rem] h-[28rem] bg-trebol/20 rounded-full blur-[100px]"
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.6, 0.4] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-20 right-0 w-[24rem] h-[24rem] bg-trebol/10 rounded-full blur-[80px]"
          />
        </div>

        <div className="max-w-[1350px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">

          {/* COLUMNA IZQUIERDA: TITULAR (MAX 2 LÍNEAS), DESCRIPCIÓN Y CTAS */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 90, damping: 14 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-carbon leading-[1.1] tracking-tight max-w-4xl"
            >
              Inteligencia Artificial que transforma tu <span className="text-trebol">negocio hoy.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-base md:text-xl text-carbon/80 font-light leading-relaxed max-w-xl font-sans"
            >
              Diseñamos e integramos arquitectura de IA que automatiza tus ventas, conecta tus operaciones e incrementa la rentabilidad de tu empresa.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2"
            >
              <button
                onClick={startTutorialManual}
                className="px-7 py-3.5 rounded-2xl bg-trebol text-white font-bold text-sm md:text-base hover:bg-carbon transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 cursor-pointer"
              >
                Iniciar Tour con TREBOT <ArrowUpRight size={18} />
              </button>

              <a
                href="/agenda"
                className="px-7 py-3.5 rounded-2xl bg-white border border-neutral-300 text-carbon font-semibold text-sm md:text-base hover:border-trebol hover:text-trebol transition-all duration-300 shadow-sm flex items-center justify-center gap-2"
              >
                Agendar Sesión Estratégica
              </a>
            </motion.div>

            {/* Badges de Confianza */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="pt-4 flex flex-wrap items-center gap-6 text-xs font-mono text-carbon/70"
            >
              <span className="flex items-center gap-2"><ShieldCheck size={16} className="text-trebol" /> Privacidad & Cifrado</span>
              <span className="flex items-center gap-2"><Clock size={16} className="text-trebol" /> ROI en &lt;60 días</span>
              <span className="flex items-center gap-2"><Cpu size={16} className="text-trebol" /> Modelos Propietarios</span>
            </motion.div>
          </div>

          {/* COLUMNA DERECHA: MASCOTA TREBOT INTERACTIVA */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-end relative z-10 overflow-visible min-h-[340px] pt-8 lg:pt-0">
            <div
              onMouseEnter={() => setIsTrebotHovered(true)}
              onMouseLeave={() => setIsTrebotHovered(false)}
              onClick={startTutorialManual}
              className="relative group cursor-pointer flex flex-col items-center lg:items-end justify-end overflow-visible"
            >
              {/* RESPLANDOR AMBIENTAL Y SOMBRA AURA DETRÁS DE TREBOT */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[22rem] h-[22rem] bg-gradient-to-tr from-trebol/40 via-emerald-500/25 to-lime-400/20 rounded-full blur-[90px] pointer-events-none z-0 animate-pulse" />

              {/* CABEZA Y CUERPO DE TREBOT CON SALUDO EN VOZ Y HOVER */}
              <div className="relative z-10 overflow-visible">
                <TrebotSVG
                  isSpeaking={isSpeaking}
                  isHovered={isTrebotHovered || isSpeaking}
                  size={360}
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── SECCIÓN 0.5: ¿QUÉ ES LA INTELIGENCIA ARTIFICIAL APLICADA A NEGOCIOS? ── */}
      <section
        id="que-es-ia"
        className={`py-20 md:py-28 px-6 md:px-12 bg-hueso border-b border-neutral-200/80 transition-all duration-500 ${showTutorial && currentTargetId === 'que-es-ia'
          ? 'z-[9999] relative ring-4 ring-trebol shadow-[0_0_100px_rgba(132,198,56,0.9)] bg-hueso pointer-events-auto rounded-3xl'
          : ''
          }`}
      >
        <div className="max-w-[1400px] w-full mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-black text-carbon tracking-tight leading-[1.12]">
              ¿Qué es la <span className="text-trebol">IA Aplicada a Negocios</span>?
            </h2>
            <p className="text-carbon/70 text-base md:text-lg font-light leading-relaxed">
              No es un simple chatbot de respuestas genéricas. La Inteligencia Artificial Aplicada es la infraestructura de software autónomo que conecta tus sistemas, comprende intenciones y ejecuta procesos complejos 24/7 sin error humano.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 md:p-10 rounded-3xl bg-white border border-neutral-200/80 shadow-xl space-y-4 hover:border-trebol/40 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-trebol/10 text-trebol font-mono font-black flex items-center justify-center text-xl">
                01
              </div>
              <h3 className="text-xl font-bold text-carbon">Flujos & Agentes Autónomos</h3>
              <p className="text-carbon/70 text-sm font-light leading-relaxed">
                Agentes entrenados con las reglas y protocolos de tu marca que responden prospectos, agendan citas y procesan órdenes en tiempo real.
              </p>
            </div>

            <div className="p-8 md:p-10 rounded-3xl bg-white border border-neutral-200/80 shadow-xl space-y-4 hover:border-trebol/40 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-trebol/10 text-trebol font-mono font-black flex items-center justify-center text-xl">
                02
              </div>
              <h3 className="text-xl font-bold text-carbon">Integración con tus Sistemas</h3>
              <p className="text-carbon/70 text-sm font-light leading-relaxed">
                Se conecta directamente a tus bases de datos SQL, CRM (HubSpot, Salesforce), ERP (SAP) y APIs sin alterar tu operación actual.
              </p>
            </div>

            <div className="p-8 md:p-10 rounded-3xl bg-white border border-neutral-200/80 shadow-xl space-y-4 hover:border-trebol/40 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-trebol/10 text-trebol font-mono font-black flex items-center justify-center text-xl">
                03
              </div>
              <h3 className="text-xl font-bold text-carbon">Multiplicador de Productividad</h3>
              <p className="text-carbon/70 text-sm font-light leading-relaxed">
                Elimina hasta el 95% del trabajo administrativo repetitivo y permite a tu equipo enfocarse en ventas de alto valor estratégico.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECCIÓN 1: CAPABILIDADES CLAVE DE IA EN FORMATO DFD CANVAS ESTILO n8n ── */}
      <section
        id="soluciones"
        className={`py-24 md:py-32 px-6 md:px-12 bg-white border-y border-neutral-200/80 transition-all duration-500 ${showTutorial && (currentTargetId === 'soluciones' || currentTargetId?.startsWith('dfd-'))
          ? 'z-[9999] relative ring-4 ring-trebol shadow-[0_0_100px_rgba(132,198,56,0.9)] bg-white pointer-events-auto'
          : ''
          }`}
      >
        <div className="max-w-[1400px] w-full mx-auto">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-end mb-16">
            <div className="lg:col-span-7">
              <h2 className="text-3xl md:text-5xl font-black text-carbon tracking-tight leading-[1.12]">
                Las 4 áreas donde la IA <span className="text-trebol">revoluciona tu empresa</span>
              </h2>
            </div>

            <div className="lg:col-span-5">
              <p className="text-lg md:text-xl text-carbon/70 font-light leading-relaxed">
                Visualiza los flujos de trabajo n8n y diagramas DFD conectados directamente a tus sistemas actuales para operar sin fricción.
              </p>
            </div>
          </div>

          {/* SWITCHES / PESTAÑAS DE SELECCIÓN DE ÁREA (4 OPCIONES EN UNA SOLA LÍNEA DE IGUAL ANCHO) */}
          <div className="w-full max-w-5xl mx-auto mb-10 overflow-x-auto pb-2">
            <div className="grid grid-cols-4 gap-2 md:gap-3 min-w-[640px] md:min-w-0">
              {pilarServices.map((sol, idx) => {
                const Icon = sol.icon;
                const isActive = activeAreaTab === idx;
                const shortLabels = ['Agentes & Ventas', 'Operaciones & RPA', 'BI & Predictivo', 'Soporte Autónomo'];
                return (
                  <button
                    key={sol.id}
                    onClick={() => {
                      setActiveAreaTab(idx);
                      stopAudio();
                      setShowTutorial(true);
                      setTutorialStep(1);
                      setSelectedDfdIndex(idx);
                      const el = document.getElementById(`dfd-area-${idx}`) || document.getElementById('soluciones');
                      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                      speak(DFD_EXPLANATIONS[idx].speech);
                    }}
                    className={`w-full py-3.5 px-3 rounded-2xl text-xs md:text-sm font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-sm text-center truncate ${isActive
                      ? 'bg-trebol text-white shadow-[0_0_25px_rgba(132,198,56,0.5)] ring-2 ring-trebol'
                      : 'bg-white text-carbon/80 border border-neutral-200 hover:border-trebol hover:text-trebol'
                      }`}
                  >
                    <Icon size={18} className={`shrink-0 ${isActive ? 'text-white' : 'text-trebol'}`} />
                    <span className="truncate">{shortLabels[idx]}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* TARJETA ÚNICA INTERACTIVA CON SWITCH DE ÁREAS */}
          {(() => {
            const currentSol = pilarServices[activeAreaTab];
            const Icon = currentSol.icon;
            return (
              <motion.div
                key={activeAreaTab}
                id={`dfd-area-${activeAreaTab}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className={`max-w-[1400px] mx-auto p-8 md:p-12 rounded-[2.5rem] bg-white border border-neutral-200/80 shadow-2xl space-y-8 transition-all duration-500 ${showTutorial && (currentTargetId === 'soluciones' || currentTargetId?.startsWith('dfd-'))
                  ? 'z-[9999] relative ring-4 ring-trebol shadow-[0_0_100px_rgba(132,198,56,0.9)] bg-white pointer-events-auto'
                  : ''
                  }`}
              >
                {/* Encabezado de la Tarjeta Seleccionada */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-neutral-100 pb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-trebol/10 border border-trebol/20 flex items-center justify-center text-trebol shrink-0">
                      <Icon size={32} />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold text-trebol uppercase tracking-wider block mb-1">
                        {currentSol.badge}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-bold text-carbon tracking-tight">
                        {currentSol.title}
                      </h3>
                    </div>
                  </div>

                </div>

                <p className="text-carbon/70 text-base md:text-lg leading-relaxed font-light">
                  {currentSol.desc}
                </p>

                {/* CANVAS DE DIAGRAMA DE NODOS ESTILO n8n OFICIAL (ÚNICO Y EXCLUSIVO POR CADA ÁREA) */}
                <RenderAreaWorkflowCanvas activeAreaTab={activeAreaTab} currentSol={currentSol} externalActiveStep={dfdActiveStep} />
              </motion.div>
            );
          })()}

        </div>
      </section>

      {/* ── SECCIÓN 2: TRANSFORMACIÓN OPERATIVA ANTES VS DESPUÉS CON IA (DISEÑO LIMPIO EN TARJETA ÚNICA MAESTRA) ── */}
      <section id="transformacion" className="py-24 md:py-32 px-6 md:px-12 bg-hueso border-b border-neutral-200/80">
        <div className="max-w-[1400px] w-full mx-auto">

          <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
            <h2 className="text-3xl md:text-5xl font-black text-carbon tracking-tight leading-[1.12]">
              El cambio en tu empresa <span className="text-trebol">antes y después de la IA</span>
            </h2>
            <p className="text-carbon/70 text-base md:text-lg font-light leading-relaxed">
              Compara cómo opera un negocio en esquema tradicional frente a una empresa acelerada con Inteligencia Artificial.
            </p>
          </div>

          {/* SELECTOR DE ÁREA EN PÍLDORAS (AL CAMBIAR DE ÁREA, REINICIA A MODO SIN TRÉBOL) */}
          <div className="flex justify-center mb-10">
            <div className="bg-white border border-neutral-200/80 p-1.5 rounded-2xl inline-flex flex-wrap gap-1 shadow-lg">
              {comparativaAntesDespues.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveCompTab(idx);
                    setIsTrebolActive(false); // Reinicia a modo Sin Trébol para experimentar la transformación
                  }}
                  className={`px-5 py-2.5 rounded-xl text-xs md:text-sm font-bold font-mono transition-all duration-300 flex items-center gap-2 ${activeCompTab === idx
                    ? 'bg-trebol text-white shadow-md font-extrabold'
                    : 'text-carbon/70 hover:text-carbon hover:bg-neutral-100'
                    }`}
                >
                  <span>{idx + 1}.</span>
                  {item.area}
                </button>
              ))}
            </div>
          </div>

          {/* TARJETA ÚNICA MAESTRA INTERACTIVA CON ANIMACIONES FLUIDAS EN SPRING (SPOTLIGHT EXCLUSIVO) */}
          {(() => {
            const currentItem = comparativaAntesDespues[activeCompTab] || comparativaAntesDespues[0];

            return (
              <motion.div
                id="master-transform-card"
                key={activeCompTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                className={`border rounded-3xl p-8 md:p-12 shadow-2xl space-y-8 relative overflow-hidden transition-all duration-700 ${isTrebolActive ? 'bg-emerald-50/40 border-trebol/40 shadow-[0_20px_60px_rgba(132,198,56,0.12)]' : 'bg-white border-neutral-200/80'
                  } ${showTutorial && tutorialStep === 2
                    ? 'relative z-[9999] bg-white ring-4 ring-trebol shadow-[0_0_80px_rgba(132,198,56,0.85)] pointer-events-auto'
                    : ''
                  }`}
              >
                {/* ENCABEZADO CON TÍTULO, DESCRIPCIÓN Y SWITCH INTERACTIVO DE MODO */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-b border-neutral-100 pb-6 relative z-10">
                  <div className="space-y-1 max-w-2xl">
                    <h3 className="text-3xl md:text-4xl font-black text-carbon tracking-tight">
                      {currentItem.area}
                    </h3>
                    <p className="text-sm md:text-base text-carbon/70 font-light leading-relaxed">
                      {currentItem.areaDesc}
                    </p>
                  </div>

                  {/* SWITCH INTERACTIVO DE MODO CON RESORTE Y PULSO */}
                  <div className="flex items-center gap-3 bg-white/90 backdrop-blur-md p-2 rounded-full border border-neutral-200/80 shadow-md self-start sm:self-auto">
                    <span className={`text-xs font-mono transition-colors duration-300 ${!isTrebolActive ? 'text-rose-600 font-black' : 'text-carbon/50'}`}>
                      Sin Trébol
                    </span>

                    <button
                      type="button"
                      role="switch"
                      aria-checked={isTrebolActive}
                      onClick={() => setIsTrebolActive(!isTrebolActive)}
                      className={`w-14 h-7 rounded-full p-1 transition-colors duration-500 flex items-center cursor-pointer shadow-inner relative ${isTrebolActive ? 'bg-trebol shadow-[0_0_12px_rgba(132,198,56,0.6)]' : 'bg-neutral-300'
                        }`}
                    >
                      <motion.div
                        layout
                        transition={{ type: "spring", stiffness: 600, damping: 30 }}
                        className={`w-5 h-5 rounded-full bg-white shadow-md flex items-center justify-center ${isTrebolActive ? 'ml-7' : 'ml-0'
                          }`}
                      >
                        {isTrebolActive ? (
                          <Zap size={11} className="text-trebol fill-trebol" />
                        ) : (
                          <XCircle size={11} className="text-rose-600" />
                        )}
                      </motion.div>
                    </button>

                    <span className={`text-xs font-mono transition-colors duration-300 ${isTrebolActive ? 'text-trebol font-black' : 'text-carbon/50'}`}>
                      Con Trébol IA
                    </span>
                  </div>
                </div>

                {/* ESTRUCTURA DE 2 COLUMNAS: TARJETA ÚNICA DINÁMICA A LA IZQUIERDA Y GRÁFICOS A LA DERECHA */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch relative z-10">

                  {/* COLUMNA IZQUIERDA: TARJETA ÚNICA DINÁMICA CONMUTABLE (SIN TRÉBOL VS CON TRÉBOL IA) */}
                  <div className="w-full flex flex-col justify-between">
                    <AnimatePresence mode="wait">
                      {!isTrebolActive ? (
                        <motion.div
                          key="sin-trebol"
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -15 }}
                          transition={{ duration: 0.35, ease: "easeOut" }}
                          className="bg-rose-50/80 border-2 border-rose-200 rounded-3xl p-8 md:p-10 space-y-6 flex flex-col justify-between shadow-lg"
                        >
                          <div className="space-y-4">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-mono font-black text-rose-600 bg-rose-100 px-3.5 py-1.5 rounded-full uppercase tracking-wider">
                                Sin Trébol (Operación Tradicional)
                              </span>
                              <XCircle size={22} className="text-rose-600 shrink-0" />
                            </div>

                            <h4 className="text-2xl md:text-3xl font-black text-rose-950 tracking-tight">
                              {currentItem.antesTitle}
                            </h4>

                            <p className="text-base md:text-lg text-rose-900/80 font-light leading-relaxed">
                              {currentItem.antes}
                            </p>

                            <ul className="space-y-3 pt-4 border-t border-rose-200/80">
                              {currentItem.antesPuntos?.map((pt, i) => (
                                <li key={i} className="flex items-center gap-3 text-sm text-rose-900 font-medium">
                                  <span className="w-2 h-2 rounded-full bg-rose-500 shrink-0" />
                                  <span>{pt}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="pt-6 border-t border-rose-200/80 flex items-center justify-between font-mono">
                            <span className="text-xs text-rose-800 font-bold">Métrica Actual:</span>
                            <span className="text-sm font-black text-rose-700 bg-white px-4 py-1.5 rounded-xl border border-rose-200 shadow-sm">
                              {currentItem.antesKpiLabel}: {currentItem.antesKpi}
                            </span>
                          </div>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="con-trebol"
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -15 }}
                          transition={{ duration: 0.35, ease: "easeOut" }}
                          className="bg-emerald-50/90 border-2 border-trebol rounded-3xl p-8 md:p-10 space-y-6 flex flex-col justify-between shadow-xl relative overflow-hidden"
                        >
                          <div className="absolute top-0 right-0 w-32 h-32 bg-trebol/10 rounded-bl-full pointer-events-none" />

                          <div className="space-y-4 relative z-10">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-mono font-black text-white bg-trebol px-4 py-1.5 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-2">
                                <Zap size={14} fill="currentColor" />
                                Con Trébol IA (Alto Rendimiento)
                              </span>
                              <CheckCircle2 size={24} className="text-trebol shrink-0" />
                            </div>

                            <h4 className="text-2xl md:text-3xl font-black text-emerald-950 tracking-tight">
                              {currentItem.despuesTitle}
                            </h4>

                            <p className="text-base md:text-lg text-emerald-900/90 font-light leading-relaxed">
                              {currentItem.despues}
                            </p>

                            <ul className="space-y-3 pt-4 border-t border-emerald-200/80">
                              {currentItem.despuesPuntos?.map((pt, i) => (
                                <li key={i} className="flex items-center gap-3 text-sm text-emerald-950 font-semibold">
                                  <CheckCircle2 size={16} className="text-trebol shrink-0" />
                                  <span>{pt}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="pt-6 border-t border-emerald-200/80 flex items-center justify-between font-mono relative z-10">
                            <span className="text-xs text-emerald-800 font-bold">Rendimiento Inmediato:</span>
                            <span className="text-sm md:text-base font-black text-trebol bg-white px-4 py-1.5 rounded-xl border border-trebol/30 shadow-sm">
                              {currentItem.despuesKpi} ({currentItem.impacto})
                            </span>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* COLUMNA DERECHA: GRÁFICOS VISUALES DINÁMICOS QUE REACCIONAN AL SWITCH */}
                  <div className="bg-white/80 backdrop-blur-md border border-neutral-200/80 rounded-2xl p-6 md:p-8 space-y-6 flex flex-col justify-between shadow-sm">

                    <div className="flex items-center justify-between border-b border-neutral-200/80 pb-4">
                      <h4 className="text-xs font-mono font-bold text-carbon/70 uppercase tracking-widest flex items-center gap-2">
                        <BarChart3 size={16} className="text-trebol" />
                        Gráfico de Rendimiento Operativo
                      </h4>
                      <span className={`text-[11px] font-mono font-bold transition-colors duration-300 ${isTrebolActive ? 'text-trebol font-black' : 'text-rose-600 font-black'}`}>
                        {isTrebolActive ? 'Con Trébol IA' : 'Sin Trébol'}
                      </span>
                    </div>

                    <AnimatePresence mode="wait">
                      {!isTrebolActive ? (
                        /* GRÁFICOS ESTADO SIN TRÉBOL */
                        <motion.div
                          key="chart-sin-trebol"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ type: "spring", stiffness: 350, damping: 26 }}
                          className="space-y-6"
                        >
                          {/* GRÁFICO CIRCULAR DE VELOCIDAD SIN TRÉBOL */}
                          <div className="bg-rose-50/40 p-5 rounded-2xl border border-rose-200/80 space-y-3 shadow-sm text-center">
                            <span className="text-xs font-mono font-bold text-rose-900 block">
                              Velocidad de Respuesta Operativa
                            </span>

                            <div className="flex flex-col items-center justify-center p-3">
                              <div className="relative w-24 h-24 flex items-center justify-center">
                                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                                  <circle className="text-rose-100" strokeWidth="3.5" stroke="currentColor" fill="none" cx="18" cy="18" r="15.9155" />
                                  <motion.circle
                                    initial={{ strokeDasharray: "0, 100" }}
                                    animate={{ strokeDasharray: "15, 100" }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                    className="text-rose-500" strokeWidth="3.5" strokeLinecap="round" stroke="currentColor" fill="none" cx="18" cy="18" r="15.9155"
                                  />
                                </svg>
                                <span className="absolute text-sm font-mono font-bold text-rose-700">15%</span>
                              </div>
                              <span className="text-xs text-rose-700 font-mono mt-2 font-bold">{currentItem.antesKpiLabel}: {currentItem.antesKpi}</span>
                            </div>
                          </div>

                          {/* BARRA DE CAPACIDAD SIN TRÉBOL */}
                          <div className="bg-rose-50/40 p-5 rounded-2xl border border-rose-200/80 space-y-2 shadow-sm">
                            <div className="flex justify-between text-xs font-mono text-rose-900 font-bold">
                              <span>Capacidad de Procesamiento:</span>
                              <span>30% (Limitada)</span>
                            </div>
                            <div className="w-full h-3 bg-rose-100 rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: "0%" }}
                                animate={{ width: "30%" }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="h-full bg-rose-500 rounded-full"
                              />
                            </div>
                          </div>
                        </motion.div>
                      ) : (
                        /* GRÁFICOS ESTADO CON TRÉBOL IA */
                        <motion.div
                          key="chart-con-trebol"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ type: "spring", stiffness: 350, damping: 26 }}
                          className="space-y-6"
                        >
                          {/* GRÁFICO CIRCULAR DE VELOCIDAD CON TRÉBOL IA */}
                          <div className="bg-emerald-50/50 p-5 rounded-2xl border border-trebol/40 space-y-3 shadow-md text-center">
                            <span className="text-xs font-mono font-bold text-emerald-950 block">
                              Velocidad de Respuesta Inmediata
                            </span>

                            <div className="flex flex-col items-center justify-center p-3">
                              <div className="relative w-24 h-24 flex items-center justify-center">
                                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                                  <circle className="text-emerald-100" strokeWidth="3.5" stroke="currentColor" fill="none" cx="18" cy="18" r="15.9155" />
                                  <motion.circle
                                    initial={{ strokeDasharray: "15, 100" }}
                                    animate={{ strokeDasharray: "98, 100" }}
                                    transition={{ duration: 0.9, ease: "easeOut" }}
                                    className="text-trebol" strokeWidth="3.5" strokeLinecap="round" stroke="currentColor" fill="none" cx="18" cy="18" r="15.9155"
                                  />
                                </svg>
                                <motion.span
                                  initial={{ scale: 0.8 }}
                                  animate={{ scale: 1 }}
                                  className="absolute text-sm font-mono font-black text-trebol"
                                >
                                  98%
                                </motion.span>
                              </div>
                              <span className="text-xs text-trebol font-mono mt-2 font-black">{currentItem.despuesKpiLabel}: {currentItem.despuesKpi}</span>
                            </div>
                          </div>

                          {/* BARRA DE CAPACIDAD CON TRÉBOL IA */}
                          <div className="bg-emerald-50/50 p-5 rounded-2xl border border-trebol/40 space-y-2 shadow-md">
                            <div className="flex justify-between text-xs font-mono text-emerald-950 font-bold">
                              <span className="text-trebol">Capacidad de Procesamiento:</span>
                              <span>100% (24/7 Autónomo)</span>
                            </div>
                            <div className="w-full h-3 bg-emerald-100 rounded-full overflow-hidden p-0.5 relative">
                              <motion.div
                                initial={{ width: "30%" }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 1.1, ease: "easeOut" }}
                                className="h-full bg-trebol rounded-full shadow-[0_0_12px_rgba(132,198,56,0.8)]"
                              />
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* TARJETA INFORMATIVA INFERIOR DE MULTIPLICADOR */}
                    <div className={`p-4 rounded-2xl border flex items-center justify-between transition-colors duration-500 ${isTrebolActive
                      ? 'bg-gradient-to-r from-emerald-50 to-trebol/10 border-trebol/40 shadow-sm'
                      : 'bg-rose-50/40 border-rose-200/70'
                      }`}>
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-md shrink-0 text-white transition-colors duration-500 ${isTrebolActive ? 'bg-trebol' : 'bg-rose-500'
                          }`}>
                          {isTrebolActive ? <TrendingUp size={20} /> : <Clock size={20} />}
                        </div>
                        <div>
                          <span className="text-[10px] font-mono uppercase font-bold block text-carbon/70">
                            {isTrebolActive ? 'Impacto con Trébol IA' : 'Estado Operativo Actual'}
                          </span>
                          <span className="text-sm font-black text-carbon">{currentItem.area}</span>
                        </div>
                      </div>

                      <div className="text-right">
                        <span className={`text-base font-black font-mono transition-colors duration-500 ${isTrebolActive ? 'text-trebol' : 'text-rose-700'}`}>
                          {isTrebolActive ? currentItem.impacto : currentItem.antesKpi}
                        </span>
                      </div>
                    </div>

                  </div>

                </div>

              </motion.div>
            );
          })()}

        </div>
      </section>



      {/* ── SECCIÓN 4: ECOSISTEMA TECNOLÓGICO & INTEGRACIONES DE IA ── */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-hueso border-b border-neutral-200/80">
        <div className="max-w-[1400px] w-full mx-auto">

          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-black text-carbon tracking-tight leading-[1.12]">
              Modelos e integraciones con <span className="text-trebol">las mejores plataformas</span>
            </h2>
            <p className="text-carbon/70 text-base md:text-lg font-light">
              Conectamos los modelos de lenguaje más potentes del mundo con tu infraestructura existente sin fisuras.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techStack.map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="p-8 rounded-3xl bg-white border border-neutral-200/80 shadow-md hover:shadow-xl transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-trebol/10 text-trebol flex items-center justify-center font-bold mb-4">
                  <Cpu size={22} />
                </div>
                <h4 className="text-xl font-bold text-carbon mb-2">{tech.name}</h4>
                <p className="text-carbon/70 text-sm font-light leading-relaxed">{tech.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ── SECCIÓN 5: ROADMAP METODOLÓGICO EN 4 ETAPAS ── */}
      <section
        id="metodologia"
        className={`py-24 md:py-32 px-6 md:px-12 bg-white border-b border-neutral-200/80 transition-all duration-500 ${showTutorial && currentTargetId === 'metodologia'
          ? 'z-[9999] relative ring-4 ring-trebol shadow-[0_0_100px_rgba(132,198,56,0.8)] rounded-3xl bg-white text-carbon pointer-events-auto'
          : ''
          }`}
      >
        <div className="max-w-[1400px] w-full mx-auto">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-end mb-20">
            <div className="lg:col-span-7">
              <h2 className="text-3xl md:text-5xl font-black text-carbon tracking-tight leading-[1.12]">
                Cómo implementamos IA <span className="text-trebol">en 4 pasos estructurados</span>
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-lg md:text-xl text-carbon/70 font-light leading-relaxed">
                Garantizamos seguridad, entrenamiento riguroso y seguimiento continuo en cada etapa del desarrollo.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {roadmapIA.map((stepItem, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 md:p-10 rounded-3xl bg-hueso border border-neutral-200/80 shadow-lg flex flex-col justify-between group hover:border-trebol/40 transition-all duration-300"
              >
                <div>
                  <div className="text-4xl font-black text-trebol font-mono mb-6">
                    {stepItem.paso}
                  </div>
                  <h3 className="text-2xl font-bold text-carbon tracking-tight mb-4">
                    {stepItem.titulo}
                  </h3>
                  <p className="text-carbon/70 text-base leading-relaxed font-light mb-6">
                    {stepItem.desc}
                  </p>
                </div>
                <div className="pt-6 border-t border-neutral-200/60 font-mono text-xs text-carbon/70">
                  <span className="text-trebol font-bold uppercase block mb-1">Entregable Clave:</span>
                  {stepItem.entregable}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ── SECCIÓN 6: PREGUNTAS FRECUENTES (FAQ) ── */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-hueso border-b border-neutral-200/80">
        <div className="max-w-[1000px] w-full mx-auto space-y-12">

          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-black text-carbon tracking-tight leading-[1.12]">
              Preguntas frecuentes sobre <span className="text-trebol">Inteligencia Artificial</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqsIA.map((faq, i) => (
              <div
                key={i}
                className="p-6 md:p-8 rounded-3xl bg-white border border-neutral-200/80 shadow-md cursor-pointer transition-all"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <div className="flex justify-between items-center gap-4">
                  <h4 className="font-bold text-lg md:text-xl text-carbon">{faq.q}</h4>
                  <ChevronDown
                    size={20}
                    className={`text-trebol shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`}
                  />
                </div>
                {openFaq === i && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="text-carbon/70 text-base font-light mt-4 pt-4 border-t border-neutral-100 leading-relaxed"
                  >
                    {faq.a}
                  </motion.p>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── SECCIÓN 7: LLAMADO A LA ACCIÓN / CTA FINAL & CONTACTO ── */}
      <section
        id="contacto"
        className={`transition-all duration-500 ${showTutorial && currentTargetId === 'contacto'
          ? 'z-[9999] relative ring-4 ring-trebol shadow-[0_0_100px_rgba(132,198,56,0.9)] bg-white pointer-events-auto rounded-3xl'
          : ''
          }`}
      >
        <Contact />
      </section>

    </main>
  );
}
