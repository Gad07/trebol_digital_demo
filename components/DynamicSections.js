'use client';
import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('../components/Navbar'));
const Hero = dynamic(() => import('../components/Hero'));
const Services = dynamic(() => import('../components/Services'));
const Process = dynamic(() => import('../components/Process'));
const CanalesScrollytelling = dynamic(() => import('../components/CanalesScrollytelling'), { ssr: false });
const WhyUs = dynamic(() => import('../components/WhyUs'));
const Contact = dynamic(() => import('../components/Contact'));
const Footer = dynamic(() => import('../components/Footer'));

export { Navbar, Hero, Services, CanalesScrollytelling, Process, WhyUs, Contact, Footer };
