const { Prisma } = require("@prisma/client");

const users = [
  {
    name: "user1",
    email: "user1@example.com",
    password: "password1",
    role: "USER",
    teamId: 1,
  },
  {
    name: "user2",
    email: "user2@example.com",
    password: "password2",
    role: "ADMIN",
    teamId: 2,
  },
];
const teams = [
  {
    name: "team1",
    description: "Team 1",
    logo: "team1.jpg",
    cycleSettings: "cycle1",
  },
  {
    name: "team2",
    description: "Team 2",
    logo: "team2.jpg",
    cycleSettings: "cycle2",
  },
];
const issues = [
  {
    title: "issue1",
    description: "Issue 1",
    statusTypeId: 1,
    priorityId: 1,
    estimateSize: 1,
    cycleId: 1,
    projectId: 1,
    assigneeId: 1,
    githubPr: "pr1",
    githubBranch: "branch1",
    redmineId: 1,
  },
  {
    title: "issue2",
    description: "Issue 2",
    statusTypeId: 1,
    priorityId: 1,
    estimateSize: 1,
    cycleId: 1,
    projectId: 1,
    assigneeId: 1,
    githubPr: "pr1",
    githubBranch: "branch1",
    redmineId: 1,
  },
];

const projects = [
  {
    name: "project1",
    description: "Project 1",
  },
  {
    name: "project2",
    description: "Project 2",
  },
];
const roadmaps = [
  {
    name: "roadmap1",
    description: "Roadmap 1",
    startDate: new Date("2020-01-01"),
    endDate: new Date("2020-12-31"),
  },
  {
    name: "roadmap2",
    description: "Roadmap 2",
    startDate: new Date("2020-01-01"),
    endDate: new Date("2020-12-31"),
  },
];

const views = [
  {
    name: "view1",
    description: "View 1",
    filters: "filter1",
  },
  {
    name: "view2",
    description: "View 2",
    filters: "filter2",
  },
];

const labels = [
  {
    name: "label1",
    description: "Label 1",
  },
  {
    name: "label2",
    description: "Label 2",
  },
];

const estimateSizes = [
  {
    name: "Small",
  },
  {
    name: "Medium",
  },
  {
    name: "Large",
  },
];

const priorityTypes = [
  {
    name: "High",
  },
  {
    name: "Medium",
  },
  {
    name: "Low",
  },
];

const statusTypes = [
  {
    name: "Open",
  },
  {
    name: "In Progress",
  },
  {
    name: "Closed",
  },
];

const comments = [
  {
    comment: "comment1",
    issueId: 1,
    userId: 1,
  },
  {
    comment: "comment2",
    issueId: 2,
    userId: 2,
  },
];

const files = [
  {
    issueId: 1,
    userId: 1,
  },
  {
    issueId: 2,
    userId: 2,
  },
];

const cycles = [
  {
    name: "cycle1",
    startDate: new Date("2020-01-01"),
    endDate: new Date("2020-12-31"),
  },
  {
    name: "cycle2",
    startDate: new Date("2020-01-01"),
    endDate: new Date("2020-12-31"),
  },
];

const cycleSettings = [
  {
    name: "cycle1",
    description: "Cycle 1",
    startDate: new Date("2020-01-01"),
    endDate: new Date("2020-12-31"),
  },
  {
    name: "cycle2",
    description: "Cycle 2",
    startDate: new Date("2020-01-01"),
    endDate: new Date("2020-12-31"),
  },
];

const activitys = [
  {
    issueId: 1,
    userId: 1,
    action: "CREATE",
  },
  {
    issueId: 1,
    userId: 1,
    action: "UPDATE",
  },
];

module.exports = {
  activitys,
  cycleSettings,
  cycles,
  files,
  comments,
  statusTypes,
  priorityTypes,
  estimateSizes,
  labels,
  views,
  roadmaps,
  projects,
  issues,
  teams,
  users,
};
