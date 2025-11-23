import { useParams, Link } from "react-router-dom";

function CompanyPage({ companies }) {
  const { companySlug } = useParams();

  const company = companies.find((c) => c.slug === companySlug);

  if (!company) return <h2>Company not found</h2>;

  return (
    <div className="page">
      <h2>Company Profile</h2>

      <h3>{company.companyName}</h3>
      <img src={company.logo} alt={company.companyName} width="120" />
      <p>
        Website:{" "}
        <a href={company.website} target="_blank">
          {company.website}
        </a>
      </p>

      <h3>Tech Stack</h3>
      <ul className="tech-list">
        {company.techStack.map((tech) => (
          <li key={tech.slug} className="tech-item">
            <Link to={`/tech/${tech.slug}?company=${company.slug}`}>
              <img src={tech.image} alt={tech.name} width="50" />
              <p>{tech.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CompanyPage;
