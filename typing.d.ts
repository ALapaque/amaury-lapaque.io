type SanityTypes = string | 'image' | 'pageInfo' | 'skill' | 'experience' | 'project' | 'social' | 'theme'

interface Orderable {
  order: number;
}

interface SanityBody<T = SanityTypes> {
  _createdAt: Date,
  _id: string,
  _rev: string,
  _updatedAt: Date,
  _type: T,
}

interface Image {
  _type: 'image',
  asset: {
    _ref: string,
    _type: 'reference',
  },
}

export interface PageInfo extends SanityBody<'pageInfo'> {
  address: string,
  backgroundInformation: string,
  typeWritterValue: string,
  email: string,
  role: string,
  heroImage: Image,
  name: string,
  phoneNumber: string,
  profilePic: Image,
}

export interface Skill extends SanityBody<'skill'>, Orderable {
  image: Image,
  progress: number,
  title: string,
}

export interface Experience extends SanityBody<'experience'> {
  company: string,
  companyImage: Image,
  dateStarted: Date,
  dateEnded: Date,
  isCurrentlyWorkingHere: boolean,
  jobTitle: string,
  points: string[],
  technologies: Skill[],
}

export interface Project extends SanityBody<'project'>, Orderable {
  title: string,
  image: Image,
  linkToBuild: string,
  summary: string,
  technologies: Skill[],
}

export interface Social extends SanityBody<'social'> {
  title: string,
  url: string,
}

interface SanityColor extends SanityBody<'color'> {
  hex: string,
  alpha: number,
  hsl: SanityHSL,
  hsv: SanityHSV,
  rgb: SanityRGBA,
}

interface SanityHSL extends SanityBody<'hslaColor'> {
  h: number,
  s: number,
  l: number,
  a: number,
}

interface SanityHSV extends SanityBody<'hsvaColor'> {
  h: number,
  s: number,
  v: number,
  a: number,
}

interface SanityRGBA extends SanityBody<'rgbaColor'> {
  r: number,
  g: number,
  b: number,
  a: number,
}

export interface Theme extends SanityBody<'theme'> {
  darkMode: boolean,
  darkPrimary: SanityColor,
  darkBackground: SanityColor,
  darkText: SanityColor,
  lightPrimary: SanityColor,
  lightBackground: SanityColor,
  lightText: SanityColor,
}
