import { useState } from 'react';
import Header from './Header';
import StarField from './StarField';
import SatelliteList from './SatelliteList';
import EarthScene from './EarthScene';
import Notifications from './Notifications';
import SatelliteDetails from './SatelliteDetails';
import RadarSystem from './RadarSystem';
import DebrisList from './DebrisList';
import EncounterDetails from './EncounterDetails';
import { SafePathViz, CollisionPathViz } from './PathVisualization';
import RiskPanel from './RiskPanel';
import { satellites, debrisList, type Satellite, type Debris } from '@/data/mockData';

type View = 'monitoring' | 'satellite' | 'collision';

const Dashboard = () => {
  const [view, setView] = useState<View>('monitoring');
  const [selectedSatellite, setSelectedSatellite] = useState<Satellite | null>(null);
  const [selectedDebris, setSelectedDebris] = useState<Debris | null>(null);

  const handleSatelliteSelect = (sat: Satellite) => {
    setSelectedSatellite(sat);
    setView('satellite');
  };

  const handleDebrisSelect = (debris: Debris) => {
    setSelectedDebris(debris);
    setView('collision');
  };

  const handleBack = () => {
    if (view === 'collision') {
      setView('satellite');
      setSelectedDebris(null);
    } else if (view === 'satellite') {
      setView('monitoring');
      setSelectedSatellite(null);
    }
  };

  const satelliteIndex = selectedSatellite
    ? satellites.findIndex(s => s.id === selectedSatellite.id)
    : -1;

  return (
    <div className="min-h-screen relative">
      <StarField />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header
          onBack={view !== 'monitoring' ? handleBack : undefined}
          subtitle={
            view === 'satellite' && selectedSatellite
              ? `Tracking ${selectedSatellite.name}`
              : view === 'collision' && selectedSatellite && selectedDebris
              ? `${selectedSatellite.name} × ${selectedDebris.id} Analysis`
              : undefined
          }
        />

        <main className="flex-1 px-4 pb-4">
          {/* VIEW 1 — MAIN MONITORING */}
          {view === 'monitoring' && (
            <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr_280px] gap-4 h-full animate-fade-in">
              <SatelliteList satellites={satellites} onSelect={handleSatelliteSelect} />
              <div className="rounded-lg overflow-hidden border border-border/30 min-h-[500px]">
                <EarthScene mode="overview" />
              </div>
              <Notifications />
            </div>
          )}

          {/* VIEW 2 — SATELLITE DETAILS */}
          {view === 'satellite' && selectedSatellite && (
            <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr_280px] gap-4 h-full animate-fade-in">
              <SatelliteDetails satellite={selectedSatellite} />
              <div className="rounded-lg overflow-hidden border border-border/30 min-h-[500px]">
                <EarthScene mode="satellite" highlightedIndex={satelliteIndex} />
              </div>
              <div className="flex flex-col gap-4">
                <RadarSystem />
                <DebrisList debris={debrisList} onSelect={handleDebrisSelect} />
              </div>
            </div>
          )}

          {/* VIEW 3 — COLLISION ANALYSIS */}
          {view === 'collision' && selectedSatellite && selectedDebris && (
            <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-4 animate-fade-in">
              <EncounterDetails satellite={selectedSatellite} debris={selectedDebris} />
              <div className="flex flex-col gap-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <SafePathViz />
                  <CollisionPathViz />
                </div>
                <RiskPanel />
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
