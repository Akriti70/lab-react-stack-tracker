import { Link } from "react-router-dom";

function HomePage({ companies }) {
  return (
    <div className="page">
      <h2>StackTracker: Discover Tech Stacks Used by Top Companies</h2>

      <ul className="company-list">
        {companies.map((company) => (
          <li key={company.id} className="company-item">
            <Link to={`/company/${company.slug}`}>
              <img src={company.logo} alt={company.companyName} width="60" />
              <p>{company.companyName}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
