import { groq } from 'next-sanity';
import { Service } from '../typing';

export const getServicesQuery = (): string => {
  return (groq`*[_type == 'service']`);
};

export const fetchServices = async (): Promise<Service[]> => {
  const res = await fetch(`${ process.env.NEXT_PUBLIC_BASE_URL }/api/fetchServices`).catch(() => {
    return;
  });

  if (!res) {
    return Promise.resolve([]);
  }

  const data = await res.json();
  const services: Service[] = data.services;

  return services;
};
