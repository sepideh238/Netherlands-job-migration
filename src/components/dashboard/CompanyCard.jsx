// src/components/dashboard/CompanyCard.jsx
import './CompanyCard.scss'; // این فایل را در قدم بعدی می‌سازیم

const CompanyCard = ({ company }) => {
  return (
    <div className="company-card">
      <h3>{company.name}</h3>
      <p className="industry">{company.industry}</p>
      <p className="location">📍 {company.city}</p>
      <a href={company.website} target="_blank" rel="noreferrer">
        Careers Page
      </a>
    </div>
  );
};

export default CompanyCard;
