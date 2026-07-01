import type { ComponentType, SVGProps } from 'react';
import { FaAws } from 'react-icons/fa6';
import {
  SiGooglecloud,
  SiDocker,
  SiTerraform,
  SiCredly,
  SiMeetup,
} from 'react-icons/si';

type IconType = ComponentType<{ className?: string }>;

/** Logo do Microsoft Azure (SVG inline — não existe no simple-icons atual). */
function AzureLogo({ className }: SVGProps<SVGSVGElement> & { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13.05 4.24 8.14 18.77l4.02.01L14.9 11l3.06 5.32-5.9.01-.95 2.82 9.9.02L13.05 4.24ZM7.6 6.06 2.98 18.77h3.86l4.1-11.9L7.6 6.06Z" />
    </svg>
  );
}

export type BrandKey =
  | 'aws'
  | 'azure'
  | 'gcp'
  | 'docker'
  | 'terraform'
  | 'credly'
  | 'meetup';

interface Brand {
  label: string;
  color: string;
  Icon: IconType;
}

export const BRANDS: Record<BrandKey, Brand> = {
  aws: { label: 'Amazon Web Services', color: '#FF9900', Icon: FaAws },
  azure: { label: 'Microsoft Azure', color: '#0089D6', Icon: AzureLogo },
  gcp: { label: 'Google Cloud', color: '#4285F4', Icon: SiGooglecloud },
  docker: { label: 'Docker', color: '#2496ED', Icon: SiDocker },
  terraform: { label: 'Terraform', color: '#7B42BC', Icon: SiTerraform },
  credly: { label: 'Credly', color: '#FF6B00', Icon: SiCredly },
  meetup: { label: 'Meetup', color: '#ED1C40', Icon: SiMeetup },
};
