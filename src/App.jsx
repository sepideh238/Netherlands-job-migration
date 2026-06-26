import { TOP_SPONSORS } from './core/utils/constants';
import CompanyCard from './components/dashboard/CompanyCard';


function App() {
  return (
    <div className="app-container">
      <header>
        <h1>Netherlands Migration Dashboard</h1>
      </header>

      <main className="dashboard-grid">
        {TOP_SPONSORS.map((company) => (
          <CompanyCard key={company.id} company={company} />
        ))}
      </main>
    </div>
  );
}

export default App;
