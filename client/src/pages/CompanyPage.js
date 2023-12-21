import { useParams } from "react-router";
import { companies } from "../lib/fake-data";
import { useEffect, useState } from "react";
import { getCompany } from "../lib/graphql/queries";
import JobList from "../components/JobList";

function CompanyPage() {
  const { companyId } = useParams();
  const [company, setCompany] = useState();

  useEffect(() => {
    getCompany(companyId).then(setCompany);
    console.log(company);
  }, [companyId]);
  if (!company) {
    return <div>loading..........</div>;
  }
  return (
    <div>
      <h1 className="title">{company.name}</h1>
      <div className="box">{company.description}</div>
      <h1 className="title">job at{company.name}</h1>

      <JobList jobs={company.jobs} />
    </div>
  );
}

export default CompanyPage;
