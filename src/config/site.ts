import type { SiteConfig } from './site.types';

import heroImg from '../assets/images/hero.jpg';
import equipo1 from '../assets/images/equipo-1.jpg';
import equipo2 from '../assets/images/equipo-2.jpg';
import galeria1 from '../assets/images/galeria-1.jpg';
import galeria2 from '../assets/images/galeria-2.jpg';
import galeria3 from '../assets/images/galeria-3.jpg';

const FONT_STACK = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";

export const siteConfig: SiteConfig = {
  meta: {
    lang: 'es',
    siteName: 'Vigor Box',
    tagline: 'Entrenamiento funcional en Córdoba',
    description:
      'Vigor Box es un gimnasio en Córdoba especializado en entrenamiento funcional, musculación y planes personalizados. Clases grupales y turnos flexibles.',
    city: 'Córdoba',
    province: 'Córdoba',
    isDemo: true,
  },
  brand: {
    logoText: 'Vigor Box',
    colors: {
      primary: '#c2410c',
      primaryDark: '#9a3412',
      primaryLight: '#ffedd5',
      accent: '#84cc16',
      ink: '#111827',
    },
    fontHeading: FONT_STACK,
    fontBody: FONT_STACK,
  },
  nav: [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Equipo', href: '#equipo' },
    { label: 'Galería', href: '#galeria' },
    { label: 'Horarios', href: '#horarios' },
    { label: 'Contacto', href: '#contacto' },
  ],
  hero: {
    eyebrow: 'Entrenamiento funcional en Córdoba',
    title: 'Tu mejor versión empieza hoy',
    subtitle:
      'Clases grupales, musculación y entrenamiento personalizado en un box pensado para que vengas con ganas y salgas mejor que como entraste.',
    ctaLabel: 'Sumate ahora',
    ctaHref: '#contacto',
    secondaryLabel: 'Ver planes',
    secondaryHref: '#servicios',
    image: heroImg,
    imageAlt: 'Persona entrenando abdominales en el piso del gimnasio Vigor Box',
  },
  services: {
    heading: 'Nuestros planes',
    subheading: 'Elegí cómo entrenar: solo, en grupo o con seguimiento personalizado.',
    items: [
      {
        icon: 'dumbbell',
        title: 'Musculación',
        description: 'Sector de pesas libres y máquinas para todos los niveles.',
      },
      {
        icon: 'flame',
        title: 'Funcional',
        description: 'Clases grupales de alta intensidad, con cupos reducidos.',
      },
      {
        icon: 'users',
        title: 'Entrenamiento personalizado',
        description: 'Planes 1 a 1 con seguimiento semanal de tu progreso.',
      },
      {
        icon: 'heart',
        title: 'Cardio y movilidad',
        description: 'Cintas, bicicletas y trabajo de movilidad articular.',
      },
      {
        icon: 'calendar',
        title: 'Clases de horario fijo',
        description: 'Turnos cada hora para que organices tu semana.',
      },
      {
        icon: 'shield',
        title: 'Evaluación física',
        description: 'Medición inicial y objetivos claros antes de empezar.',
      },
    ],
  },
  team: {
    heading: 'Nuestro equipo',
    subheading: 'Coaches certificados que ajustan cada plan a tu nivel real.',
    members: [
      {
        name: 'Camila Ferreyra',
        role: 'Coach de entrenamiento funcional',
        photo: equipo1,
        alt: 'Camila Ferreyra, coach de entrenamiento funcional de Vigor Box',
      },
      {
        name: 'Nicolás Paredes',
        role: 'Coach de musculación y fuerza',
        photo: equipo2,
        alt: 'Nicolás Paredes, coach de musculación y fuerza de Vigor Box',
      },
    ],
  },
  gallery: {
    heading: 'Conocé el box',
    subheading: 'Equipamiento completo y espacio para entrenar sin esperas.',
    items: [
      { photo: galeria1, alt: 'Rack de mancuernas del gimnasio Vigor Box' },
      { photo: galeria2, alt: 'Sala principal de musculación con máquinas y pesas' },
      { photo: galeria3, alt: 'Sector de cintas y cardio de Vigor Box' },
    ],
  },
  hoursLocation: {
    heading: 'Horarios y ubicación',
    hours: [
      { day: 'Lunes a viernes', hours: '7:00–22:00' },
      { day: 'Sábados', hours: '9:00–14:00' },
      { day: 'Domingos', hours: 'Cerrado' },
    ],
    address: 'Av. Colón 2230, Córdoba, Córdoba',
    mapEmbedSrc:
      'https://www.openstreetmap.org/export/embed.html?bbox=-64.2038%2C-31.4351%2C-64.1738%2C-31.4051&layer=mapnik&marker=-31.4201%2C-64.1888',
    phoneDisplay: '+54 351 555-0198',
    phoneHref: '+543515550198',
    whatsappNumber: '5493515550198',
    email: 'hola@vigorbox.com.ar',
  },
  contact: {
    heading: 'Reservá tu clase de prueba',
    subheading: 'Contanos tu objetivo y te ayudamos a elegir el plan.',
    whatsappMessageTemplate: 'Hola, soy {nombre} ({telefono}). {mensaje}',
    nameLabel: 'Nombre',
    phoneLabel: 'Teléfono',
    messageLabel: 'Contanos tu objetivo',
    submitLabel: 'Enviar por WhatsApp',
    successMessage: '¡Listo! Te abrimos WhatsApp con tu mensaje.',
  },
  footer: {
    businessName: 'Vigor Box',
    rubroLine: 'Entrenamiento funcional y musculación — Córdoba Capital',
    demoDisclaimer: 'Sitio de demostración. Nombre, dirección e imágenes son ficticios.',
  },
};
