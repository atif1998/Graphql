import { getCompany } from "./db/companies.js";
import { getJobs, getJob, getJobByCompanyId } from "./db/jobs.js";

export const resolvers = {
  Query: {
    job: (_root, { id }) => getJob(id),
    jobs: () => getJobs(),
    company: (_root, { id }) => getCompany(id),
  },
  Company: {
    jobs: (company) => getJobByCompanyId(company.id),
  },
  Job: {
    company: (job) => getCompany(job.companyId),
    title: (job) => job.title,
    date: (job) => toIsoDate(job.createdAt),
  },
};
function toIsoDate(value) {
  return value.slice(0, "yyyy-mm-dd".length);
}
