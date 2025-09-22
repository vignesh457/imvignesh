import LogoLoop from '../LogoLoop';
import { clearCompanyLogoData as logos } from '@/lib/data';

export default function ClearCompanySection() {
  return (
    <div style={{ minHeight: '200px', position: 'relative', overflow: 'hidden'}} className='py-16'>
      <h1 className="text-3xl md:text-5xl font-bold mb-8 text-center">Selected Companies</h1>
      <LogoLoop
        logos={logos}
        speed={100}
        direction="left"
        className='opacity-90 bg-neutral-800'
        logoHeight={64}
        gap={40}
        pauseOnHover
        scaleOnHover
        fadeOut
        fadeOutColor="#000000"
        ariaLabel="Technology partners"
      />
    </div>
  );
}