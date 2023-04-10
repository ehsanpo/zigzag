import Head from "next/head";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import type { Roadmap, Issue } from "@prisma/client";

export default function Home({
  roadmaps,
  issues,
}: {
  roadmaps: Roadmap[];
  issues: Issue[];
}) {
  function formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  }

  console.log(issues);
  return (
    <div>
      <Head>
        <title>PlanetScale Next.js Quickstart</title>
        <meta name="description" content="PlanetScale Quickstart for Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="p-10 mx-auto max-w-4xl">
        {issues.map((issue) => (
          <>
            <div className="flex flex-col items-center justify-center  py-2">
              <h1 className="text-6xl font-bold">{issue.title}</h1>
              <p className="text-2xl font-bold">{issue.description}</p>
            </div>
            <div className="flex flex-row">
              <div>
                <h2>Status Type ID: {issue.statusTypeId}</h2>
                <h2>Priority ID: {issue.priorityId}</h2>
                <h2>Estimate Size: {issue.estimateSize}</h2>
              </div>
              <div>
                <h2>Cycle ID: {issue.cycleId}</h2>
                <h2>Project ID: {issue.projectId}</h2>
                <h2>Assignee ID: {issue.assigneeId}</h2>
              </div>
              <div>
                <h2>Github PR: {issue.githubPr}</h2>
                <h2>Github Branch: {issue.githubBranch}</h2>
                <h2>Redmine ID: {issue.redmineId}</h2>
              </div>
            </div>
            <div>
              <h2>Created At: {formatDate(issue.createdAt)}</h2>
              <h2>Updated At: {formatDate(issue.updatedAt)}</h2>
            </div>
          </>
        ))}

        {roadmaps.map((roadmap) => (
          <>
            <div className="flex flex-col items-center justify-center  py-2">
              <h1 className="text-6xl font-bold">{roadmap.name}</h1>
              <p className="text-2xl font-bold">{roadmap.description}</p>
            </div>
          </>
        ))}
      </main>

      <footer></footer>
    </div>
  );
}

export async function getStaticProps(context: any) {
  let roadmapData = await prisma.roadmap.findMany({});
  let issueData = await prisma.issue.findMany({});

  roadmapData = JSON.parse(JSON.stringify(roadmapData));
  issueData = JSON.parse(JSON.stringify(issueData));

  //convert decimal value to string to pass through as json
  const roadmaps = roadmapData.map((roadmap: Roadmap) => ({
    ...roadmap,
  }));

  const issues = issueData.map((issue: Issue) => ({
    ...issue,
  }));

  console.log(roadmaps);

  return {
    props: { roadmaps, issues },
  };
}
