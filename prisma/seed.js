const { PrismaClient } = require("@prisma/client");
const {
  users,
  teams,
  issues,
  projects,
  roadmaps,
  views,
  labels,
  estimateSizes,
  priorityTypes,
  statusTypes,
  comments,
  files,
  cycles,
  activitys,
} = require("./data.js");

const prisma = new PrismaClient();

const load = async () => {
  try {
    await prisma.Roadmap.deleteMany();
    await prisma.project.deleteMany();
    // await prisma.team.deleteMany();
    await prisma.user.deleteMany();
    await prisma.issue.deleteMany();
    await prisma.view.deleteMany();
    await prisma.label.deleteMany();
    await prisma.estimateSize.deleteMany();
    await prisma.priorityType.deleteMany();
    await prisma.statusType.deleteMany();
    await prisma.comment.deleteMany();
    await prisma.attachment.deleteMany();
    await prisma.cycle.deleteMany();
    await prisma.activity.deleteMany();

    console.log("Deleted records");

    await prisma.user.createMany({
      data: users,
    });
    await prisma.team.createMany({
      data: teams,
    });

    await prisma.project.createMany({
      data: projects,
    });
    await prisma.roadmap.createMany({
      data: roadmaps,
    });
    await prisma.view.createMany({
      data: views,
    });
    await prisma.label.createMany({
      data: labels,
    });
    await prisma.estimateSize.createMany({
      data: estimateSizes,
    });
    await prisma.priorityType.createMany({
      data: priorityTypes,
    });
    await prisma.statusType.createMany({
      data: statusTypes,
    });
    await prisma.comment.createMany({
      data: comments,
    });
    await prisma.attachment.createMany({
      data: files,
    });

    await prisma.cycle.createMany({
      data: cycles,
    });

    await prisma.activity.createMany({
      data: activitys,
    });

    await prisma.issue.createMany({
      data: issues,
    });

    console.log("Added data");
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

load();
