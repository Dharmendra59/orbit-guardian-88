import GlassCard from './GlassCard';

const RiskPanel = () => {
  return (
    <GlassCard title="Risk to Safe Maneuver" variant="alert">
      <div className="space-y-4">
        {/* Collision Probability */}
        <div className="flex items-center gap-2">
          <span className="text-destructive text-sm">▸</span>
          <span className="text-muted-foreground text-sm w-40 shrink-0">Collision Probability:</span>
          <span className="text-sm font-bold text-destructive animate-pulse-glow">High</span>
        </div>

        <div>
          <div className="flex justify-between text-xs mb-1.5">
            <span className="text-muted-foreground">Probability</span>
            <span className="text-destructive font-semibold">87%</span>
          </div>
          <div className="h-2 bg-secondary rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-1000"
              style={{
                width: '87%',
                background: 'linear-gradient(90deg, hsl(38 92% 50%), hsl(0 84% 60%))'
              }}
            />
          </div>
        </div>

        {/* Time to Maneuver */}
        <div className="flex items-center gap-2">
          <span className="text-warning text-sm">▸</span>
          <span className="text-muted-foreground text-sm w-40 shrink-0">Time to Maneuver:</span>
          <span className="text-sm font-medium text-warning">1 hr 20 min</span>
        </div>

        {/* ΔV Required */}
        <div className="flex items-center gap-2">
          <span className="text-primary text-sm">▸</span>
          <span className="text-muted-foreground text-sm w-40 shrink-0">ΔV Required:</span>
          <span className="text-sm font-medium text-foreground">12.5 m/s</span>
        </div>

        {/* Fuel Estimate */}
        <div className="flex items-center gap-2">
          <span className="text-primary text-sm">▸</span>
          <span className="text-muted-foreground text-sm w-40 shrink-0">Fuel Estimate:</span>
          <span className="text-sm font-medium text-foreground">15 kg</span>
        </div>

        {/* Fuel Reserves bar */}
        <div>
          <div className="flex justify-between text-xs mb-1.5">
            <span className="text-muted-foreground">Fuel Reserves</span>
            <span className="text-accent font-semibold">72%</span>
          </div>
          <div className="h-2 bg-secondary rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-1000"
              style={{
                width: '72%',
                background: 'linear-gradient(90deg, hsl(199 89% 48%), hsl(142 71% 45%))'
              }}
            />
          </div>
        </div>
      </div>
    </GlassCard>
  );
};

export default RiskPanel;
