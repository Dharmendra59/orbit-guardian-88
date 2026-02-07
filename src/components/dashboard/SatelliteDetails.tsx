import type { Satellite } from '@/data/mockData';
import GlassCard from './GlassCard';

interface SatelliteDetailsProps {
  satellite: Satellite;
}

const SatelliteDetails = ({ satellite }: SatelliteDetailsProps) => {
  const details = [
    { label: 'Satellite', value: satellite.name },
    { label: 'Status', value: satellite.status, color: satellite.status === 'Active' ? 'text-accent' : 'text-warning' },
    { label: 'Altitude', value: `${satellite.altitude} km` },
    { label: 'Velocity', value: `${satellite.velocity} km/s` },
    { label: 'Inclination', value: `${satellite.inclination}°` },
    { label: 'Last Contact', value: satellite.lastContact },
  ];

  return (
    <GlassCard title="Satellite Details">
      <div className="space-y-3">
        {details.map(d => (
          <div key={d.label} className="flex items-center gap-2">
            <span className="text-primary text-sm">▸</span>
            <span className="text-muted-foreground text-sm w-24 shrink-0">{d.label}:</span>
            <span className={`text-sm font-medium ${d.color || 'text-foreground'}`}>{d.value}</span>
          </div>
        ))}
      </div>
    </GlassCard>
  );
};

export default SatelliteDetails;
