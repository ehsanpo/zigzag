import Head from "next/head";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import type { Roadmap, Issue } from "@prisma/client";

export default function Home({ issues }: { issues: Issue[] }) {
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
            <div className="flex flex-col items-center justify-center py-2">
              <h1 className="text-6xl font-bold">{issue.title}</h1>
              <p className="text-2xl font-bold">{issue.description}</p>
            </div>
            <div className="flex flex-row">
              <div className="mr-3">
                <h2 className="text-lg font-bold">
                  Status Type ID: {issue.statusTypeId}
                </h2>
                <h2 className="text-lg font-bold">
                  Priority ID: {issue.priorityId}
                </h2>
                <h2 className="text-lg font-bold">
                  Estimate Size: {issue.estimateSize}
                </h2>
              </div>
              <div className="mr-3">
                <h2 className="text-lg font-bold">Cycle ID: {issue.cycleId}</h2>
                <h2 className="text-lg font-bold">
                  Project ID: {issue.projectId}
                </h2>
                <h2 className="text-lg font-bold">
                  Assignee ID: {issue.assigneeId}
                </h2>
              </div>
              <div>
                <h2 className="text-lg font-bold">
                  Github PR: {issue.githubPr}
                </h2>
                <h2 className="text-lg font-bold">
                  Github Branch: {issue.githubBranch}
                </h2>
                <h2 className="text-lg font-bold">
                  Redmine ID: {issue.redmineId}
                </h2>
              </div>
            </div>
            <div>
              <h2 className="text-lg font-bold">
                Created At: {formatDate(issue.createdAt)}
              </h2>
              <h2 className="text-lg font-bold">
                Updated At: {formatDate(issue.updatedAt)}
              </h2>
            </div>
          </>
        ))}
      </main>

      <footer></footer>
    </div>
  );
}

export async function getStaticPaths() {
  const issueData = await prisma.issue.findMany({});
  const issues = JSON.parse(JSON.stringify(issueData));

  console.log("issues", issues);
  const paths = issues.map((issue: Issue) => ({
    params: { issue: issue.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps(context: any) {
  const { params } = context;
  const id = parseInt(params.issue, 10);
  console.log(params, "id");

  let issueData = await prisma.issue.findUnique({
    where: {
      id,
    },
    include: {
      cycle: true,
      project: true,
      priority: true,
    },
  });

  issueData = JSON.parse(JSON.stringify(issueData));
  const issues = [issueData];
  return {
    props: { issues },
  };
}
