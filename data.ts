import { Project, Illustration, Skill, TimelineEvent } from './types';
import ninjaSketch from './assets/images/ninja_grayscale_sketch_1779644166999.png';
import cyberpunkAlley from './assets/images/cyberpunk_alley_1779640845622.png';
import samuraiRedSun from './assets/images/samurai_red_sun_exact_1779644029743.png';
import editorialLayout from './assets/images/editorial_layout_1779640880255.png';

// Let's reference the generated files
export const HERO_IMAGE = ninjaSketch;
export const ALLEY_IMAGE = cyberpunkAlley;
export const POSTER_IMAGE = samuraiRedSun;
export const UX_IMAGE = editorialLayout;

export const PROJECTS: Project[] = [
  {
    id: 'tokyo-shadows',
    title: 'NEO-TOKYO SHADOWS',
    category: 'Dark Art Illustrations',
    image: ALLEY_IMAGE,
    description: 'A dark, cinematic digital landscape portraying Tokyo under a futuristic cyber-rain. Focuses on neon reflections on wet streets and moody atmospheric depth.',
    year: '2026',
    client: 'Cyberpunk Syndicate',
    role: 'Lead Art Director & Illustrator',
    tags: ['Digital Painting', 'Cyberpunk', 'Concept Art', 'Shading'],
    palette: ['#050505', '#FF1E1E', '#111111', '#555555', '#F5F5F5'],
    concept: 'Creating an immediate emotional response by utilizing high-contrast, pure noir blacks and aggressive neon-red highlights. The illustration simulates a wet lens with micro-lens flares, pulling the client into a melancholic future.',
    typographyShowcase: {
      fontName: 'Monument Extended',
      sampleText: 'TOKYO 2099',
      description: 'Ultra-expanded bold sans-serif selected to anchor the massive structures of the dystopian skyline.'
    },
    mockups: [ALLEY_IMAGE, UX_IMAGE]
  },
  {
    id: 'shinigami-rage',
    title: 'SHINIGAMI\'S COLD HELL',
    category: 'Posters',
    image: POSTER_IMAGE,
    description: 'An experimental Japanese editorial poster series blending traditional woodblock textures with gritty modern cyber-grunge aesthetics.',
    year: '2025',
    client: 'Neo-Tradition Gallery',
    role: 'Graphic Designer & Print Artist',
    tags: ['Poster Design', 'Manga Texturing', 'Halftone Art', 'Typography'],
    palette: ['#050505', '#111111', '#FF1E1E', '#EAEAEA', '#888888'],
    concept: 'A fusion of distressed manga scans, liquid-metal vectors, and traditional calligraphic elements. Deep ink textures are simulated using high-density halftone dots and simulated print plate errors to give a tactile, analog feeling.',
    typographyShowcase: {
      fontName: 'Druk Wide Super',
      sampleText: 'DEATH GRID',
      description: 'An extremely wide, heavy mechanical typeface that mimics technical data stencils on manufacturing plates.'
    },
    mockups: [POSTER_IMAGE, HERO_IMAGE]
  },
  {
    id: 'cyber-neural',
    title: 'CHRONOS SYNAPSE v4',
    category: 'UI UX Design',
    image: UX_IMAGE,
    description: 'An avant-garde cockpit interface design for virtual consciousness mapping, designed with glowing HUD panels and technical layout elements.',
    year: '2026',
    client: 'Aetheris Tech Corp',
    role: 'Principal UX Designer',
    tags: ['Cybernetic HUD', 'UI Design', 'Framer motion', 'Interaction'],
    palette: ['#050505', '#FF2D2D', '#111111', '#242424', '#E6E6E6'],
    concept: 'Designing for extreme information density, breaking typical web design rules. Utilizes raw technical borders, tiny micro-data readouts, horizontal navigational rails, and a central diagnostic canvas representing mind-state metrics.',
    typographyShowcase: {
      fontName: 'JetBrains Mono',
      sampleText: 'LINK_ESTABLISHED // 99.8%',
      description: 'A hyper-precise monospaced typeface that maintains extreme readability even in microscopic telemetry captions.'
    },
    mockups: [UX_IMAGE, ALLEY_IMAGE]
  },
  {
    id: 'rebel-soul',
    title: 'REBEL SOUL SYNDROME',
    category: 'Branding',
    image: HERO_IMAGE,
    description: 'A visual brand identity system for an underground Japanese streetwear brand, showcasing character icons, raw packaging, and neon-red hangtags.',
    year: '2540',
    client: 'REBEL SOUL TOKYO',
    role: 'Visual Identity Designer',
    tags: ['Brand Identity', 'Illustration', 'Apparel Design', 'Creative Direction'],
    palette: ['#050505', '#FF1E1E', '#1E1E1E', '#F5F5F5', '#AAAAAA'],
    concept: 'Rebelling against corporate clean visuals, we introduce broken grids, distressed stamp graphics, and hand-drawn character sketches dressed in tactical cyber-wear. The brand speaks to a youth subculture resisting digital conformity.',
    typographyShowcase: {
      fontName: 'Bebas Neue',
      sampleText: 'REBEL SYSTEM',
      description: 'A tall condensed geometric display font that strikes a balance between vintage newspaper headers and high-end military stencils.'
    },
    mockups: [HERO_IMAGE, POSTER_IMAGE]
  }
];

export const GALLERY_ITEMS: Illustration[] = [
  {
    id: 'gal-1',
    title: 'NIGHT REBEL // NAVAMEY SELF-PORTRAIT',
    category: 'cyberpunk',
    image: HERO_IMAGE,
    year: '2026',
    dimensions: '3840 x 2160 PX'
  },
  {
    id: 'gal-2',
    title: 'TOKYO DISSOCIATION STAGE II',
    category: 'illustration',
    image: ALLEY_IMAGE,
    year: '2025',
    dimensions: '4000 x 2250 PX'
  },
  {
    id: 'gal-3',
    title: 'DEATH FLOWER SHINIGAMI SERIES',
    category: 'poster',
    image: POSTER_IMAGE,
    year: '2026',
    dimensions: '3000 x 4000 PX'
  },
  {
    id: 'gal-4',
    title: 'COGNITIVE REFRACTION LOG v8',
    category: 'sketch',
    image: UX_IMAGE,
    year: '2026',
    dimensions: '2800 x 2100 PX'
  },
  {
    id: 'gal-5',
    title: 'CYBERPUNK ALLEYWAY ARCHIVE B',
    category: 'cyberpunk',
    image: ALLEY_IMAGE,
    year: '2025',
    dimensions: '3840 x 2160 PX'
  },
  {
    id: 'gal-6',
    title: 'DESTRUCTIVE MANIFESTO SECT IV',
    category: 'poster',
    image: POSTER_IMAGE,
    year: '2025',
    dimensions: '3000 x 4000 PX'
  }
];

export const SKILLS: Skill[] = [
  { name: 'Art Direction', level: 95, category: 'design' },
  { name: 'Dark Anime Illustration', level: 98, category: 'design' },
  { name: 'Japanese Poster Design', level: 90, category: 'design' },
  { name: 'Cyberpunk HUD UI Design', level: 92, category: 'design' },
  { name: 'Conceptual Branding', level: 88, category: 'design' },
  
  { name: 'Photoshop & Illustrator', level: 96, category: 'tools' },
  { name: 'Clip Studio Paint Pro', level: 94, category: 'tools' },
  { name: 'Figma (Complex Prototyping)', level: 85, category: 'tools' },
  { name: 'After Effects (Animate UI)', level: 80, category: 'tools' },

  { name: 'Vite & React Ecosystem', level: 85, category: 'technical' },
  { name: 'Tailwind CSS v4 & Styling', level: 92, category: 'technical' },
  { name: 'Framer Motion Animations', level: 90, category: 'technical' },
  { name: 'Custom SVG / CSS Filtering', level: 87, category: 'technical' },
];

export const TIMELINE: TimelineEvent[] = [
  {
    year: '2025 - PRESENT',
    role: 'Lead Visual Strategist',
    company: 'Neo-Tokyo Game Studios',
    description: 'Directing the visual branding, graphic UI elements, and teaser illustration posters for upcoming tactical cyber-tactical and dystopian cyberpunk RPGs.'
  },
  {
    year: '2023 - 2025',
    role: 'Senior Illustrator & Designer',
    company: 'Kurogane Creative Division',
    description: 'Created promotional manga banners, branding packages for key apparel, and digital art layouts for music albums and cyberpunk multimedia content.'
  },
  {
    year: '2021 - 2023',
    role: 'UI Designer & Motion Artist',
    company: 'Aetheris Dynamics Lab',
    description: 'Designed advanced cybernetic screens, HUD mockups, and client-facing mockups styled with cinematic black-and-red typography elements.'
  },
  {
    year: '2019 - 2021',
    role: 'Freelance Dark Illustrator',
    company: 'Self-Employed Universe',
    description: 'Crafted bespoke visual artwork, anime illustrations, and poster designs for underground brands and heavy electronic music labels.'
  }
];

export const CREATIVE_PHILOSOPHY = 
  "In a world cluttered with clinical, flat minimalist templates, art should evoke a visceral response. I build digital spaces that feel heavy, cinematic, and saturated with cyberpunk grit. By combining the soul of retro dark manga with the mechanical layouts of high-end cybernetic interfaces, my goal is to guide visitors through an unforgettable emotional display: pure, unadulterated graphical attitude.";
