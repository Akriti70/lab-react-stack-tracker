import { useParams, useSearchParams, Link } from "react-router-dom";

function TechnologyPage({ technologies }) {
  const { slug } = useParams();
  const [searchParams] = useSearchParams();

  const tech = technologies.find((t) => t.slug === slug);

  const previousCompany = searchParams.get("company");

  if (!tech) return <h2>Technology not found</h2>;

  return (
    <div className="page">
      <h2>Technology Details</h2>

      <h3>{tech.name}</h3>
      <img src={tech.image} alt={tech.name} width="120" />
      <p>{tech.description}</p>

      {previousCompany && (
        <Link to={`/company/${previousCompany}`}>
          <button>⬅ Back to Company</button>
        </Link>
      )}
    </div>
  );
}

export default TechnologyPage;
