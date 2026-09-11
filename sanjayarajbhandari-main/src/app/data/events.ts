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
  image: string;
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
    image: DUMMY_IMAGE,
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
    image: DUMMY_IMAGE,
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
    image: DUMMY_IMAGE,
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
