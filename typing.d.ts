type SanityTypes = string | 'image' | 'pageInfo' | 'skill' | 'experience' | 'projet' | 'social'

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
  email: string,
  role: string,
  heroImage: Image,
  name: string,
  phoneNumber: string,
  profilePic: Image,
}

export interface Skill extends SanityBody<'skill'> {
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

export interface Project extends SanityBody<'project'> {
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
