import type { Satellite, Debris } from '@/data/mockData';
import GlassCard from './GlassCard';

interface EncounterDetailsProps {
  satellite: Satellite;
  debris: Debris;
}

const EncounterDetails = ({ satellite, debris }: EncounterDetailsProps) => {
  const relativeVelocity = Math.abs(debris.velocity - satellite.velocity).toFixed(1);

  const details = [
    { label: 'Satellite', value: satellite.name },
    { label: 'Debris ID', value: debris.id },
    { label: 'Current Distance', value: `${debris.distance} m` },
    { label: 'Relative Velocity', value: `${relativeVelocity} km/s` },
    { label: 'Time to Impact', value: debris.timeToImpact },
  ];

  return (
    <GlassCard title="Encounter Details" variant="alert">
      <div className="space-y-3">
        {details.map(d => (
          <div key={d.label} className="flex items-center gap-2">
            <span className="text-destructive text-sm">▸</span>
            <span className="text-muted-foreground text-sm w-32 shrink-0">{d.label}:</span>
            <span className="text-sm font-medium text-foreground">{d.value}</span>
          </div>
        ))}
      </div>
    </GlassCard>
  );
};

export default EncounterDetails;
