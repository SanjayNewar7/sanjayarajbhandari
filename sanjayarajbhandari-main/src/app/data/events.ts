const DUMMY_IMAGE = '/assets/images/gallery/1 Year Anniversary Celebration 2.jpg';

export type EventItem = {
  id: number;
  slug: string;
  title: string;
  type: string;
  role: string;
  organizer: string;
  location?: string;
  description: string;
  overview?: string;
  responsibilities?: string[];
  outcome?: string;
  image: string;
  gallery?: {
    image: string;
    alt: string;
    caption: string;
  }[];
};

export const events: EventItem[] = [
  {
    id: 1,
    slug: 'creare-graphics-design-workshop',
    title: 'CREARE — 3 Days Graphics Designing Workshop',
    type: 'Workshop',
    role: 'Lead Tutor',
    organizer: 'Oxford College of Engineering and Management',
    description:
      'A 3-day intensive graphics design training program, taught as lead tutor to students at Oxford College of Engineering and Management.',
    overview:
      'CREARE was designed as a compact, hands-on creative journey. Rather than stopping at software demonstrations, the workshop moved from visual fundamentals into guided practice, live feedback, and independent execution. Students worked at their own laptops, tested ideas in real time, and learned how deliberate choices in layout, typography, colour, and hierarchy turn a rough concept into clear visual communication.',
    responsibilities: [
      'Structured the three-day learning flow from design foundations to practical execution.',
      'Led live demonstrations and translated professional workflows into approachable steps.',
      'Provided individual feedback while students developed and refined their own work.',
      'Created an active classroom environment built around experimentation, questions, and peer learning.',
    ],
    outcome:
      'The workshop concluded with participants receiving certificates and leaving with more than a set of software techniques: they gained a repeatable design process, greater confidence in explaining creative decisions, and practical experience turning ideas into finished visual outcomes.',
    image: '/assets/images/event/CREARE WORKSHOP/WhatsApp Image 2026-09-13 at 1.42.33 PM (2).jpeg',
    gallery: [
      {
        image: '/assets/images/event/CREARE WORKSHOP/WhatsApp Image 2026-09-13 at 1.42.33 PM.jpeg',
        alt: 'CREARE participants learning together in the computer lab',
        caption: 'Learning in motion — participants turn design principles into hands-on work.',
      },
      {
        image: '/assets/images/event/CREARE WORKSHOP/WhatsApp Image 2026-09-13 at 1.42.33 PM (1).jpeg',
        alt: 'CREARE participants practising graphic design on their laptops',
        caption: 'Focused practice, live guidance, and room to experiment with every idea.',
      },
      {
        image: '/assets/images/event/CREARE WORKSHOP/WhatsApp Image 2026-09-13 at 1.42.33 PM (3).jpeg',
        alt: 'Certificate and token of appreciation presentation at CREARE',
        caption: 'A closing moment of recognition after three intensive days of creating and learning.',
      },
    ],
  },
  {
    id: 2,
    slug: 'samari-utthan-sewa-workshop',
    title: 'Samari Utthan Sewa — 15 Days Graphics Designing Workshop',
    type: 'Workshop',
    role: 'Lead Tutor',
    organizer: 'Government of Nepal, in corporation with Botson College, Bharatpur',
    description:
      'A 15-day graphics design workshop for Government of Nepal employees and workers, led as lead tutor in corporation with Botson College, Bharatpur and the Nepal Government.',
    image: '/assets/images/event/SAMARI UTTHAN SEWA/SamariutthanSewa.jpg',
  },
  {
    id: 3,
    slug: 'futsal-campaign-brothers-production',
    title: 'FUTSAL Campaign',
    type: 'Marketing Campaign',
    role: 'Lead Creative Head',
    organizer: 'Brothers Production',
    description:
      'Led the creative direction and marketing campaign for the FUTSAL campaign as creative head for Brothers Production.',
    overview:
      'The campaign was developed to give the tournament a recognizable visual identity and build consistent momentum before, during, and after the event. The creative system connected promotional graphics, match-day communication, sponsor visibility, and social media content under one energetic direction.',
    responsibilities: [
      'Defined the campaign concept, visual direction, color system, and graphic language.',
      'Planned and produced promotional posts, tournament announcements, schedules, and match-day assets.',
      'Maintained visual consistency across social media, digital promotions, and on-site communication.',
      'Coordinated creative delivery with the Brothers Production team and adapted content around campaign needs.',
    ],
    outcome:
      'The finished campaign gave Brothers Production a cohesive and reusable visual presence for the tournament. Clear information hierarchy made event updates easier to understand, while the unified design system helped every public-facing asset feel like part of the same event story.',
    image: '/assets/images/event/BROTHERS PRODUCTION/image.png',
  },
  {
    id: 4,
    slug: 'oceams-green-technology-talent-management',
    title: "OCEAM'S International Conference — Green Technology and Talent Management",
    type: 'Conference',
    role: 'Research Presenter',
    organizer: "OCEAM'S International Conference",
    description:
      'Presented a research article, "Impact of AI Suggestions on Students," in collaboration with Sandesh Gadal, Albina Biswokarma, and Sabina Adhikari at the International Conference on Green Technology and Talent Management.',
    image: DUMMY_IMAGE,
  },
  {
    id: 5,
    slug: 'students-for-liberty-business-networking',
    title: 'Students For Liberty — Business Models and Networking',
    type: 'Community Talk',
    role: 'Participant',
    organizer: 'Students For Liberty',
    location: 'Bharatpur, Chitwan',
    description:
      'Took part in a discussion on business models and networking, hosted by Students For Liberty in Bharatpur, Chitwan.',
    image: DUMMY_IMAGE,
  },
];
