import ResultSection from '../components/ResultSection';
import SummaryPanel from '../components/SummaryPanel';

export default function Home() {
  return (
    <main className="main-content">
      <div className="card-container">
        <ResultSection />
        <SummaryPanel />
      </div>
    </main>
  );
}