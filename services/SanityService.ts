import { groq } from 'next-sanity';
import { SanityBody } from '../typing';

export default class SanityService {
  private _sanityDataQuery: string = groq`
      *[] {
        ...,
        technologies[]->
      }
    `;

  constructor() {}

  public get query(): string {
    return this._sanityDataQuery;
  }

  public async fetchSanityData(): Promise<SanityBody[]> {
    const res = await fetch(`${ process.env.NEXT_PUBLIC_BASE_URL }/api/fetchSanityData`).catch(() => {
      return;
    });

    if (!res) {
      return Promise.resolve([]);
    }

    return await res.json();
  }
}
