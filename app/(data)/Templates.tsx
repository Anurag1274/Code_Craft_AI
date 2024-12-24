import { Icon } from "lucide-react";
import { Noto_Sans_Telugu } from "next/font/google";

export default [
  {
    name: "Code Generator",
    desc: "An AI tool that generates code based on your project requirements.",
    category: "Development",
    icon: "https://cdn-icons-png.flaticon.com/128/6062/6062646.png",
    aiPrompt:
      "Generate code for a [language] program that [describe functionality]",
    slug: "generate-code",
    form: [
      {
        label: "Enter programming language",
        field: "input",
        name: "language",
        required: true,
      },
      {
        label: "Enter project description",
        field: "textarea",
        name: "description",
        required: true,
      },
    ],
  },
  {
    name: "Code Translator",
    desc: "An AI tool that translates code from one programming language to another.",
    category: "Development",
    icon: "https://cdn-icons-png.flaticon.com/128/12986/12986748.png",
    aiPrompt: "Translate the following [language] code into [target language]",
    slug: "translate-code",
    form: [
      {
        label: "Enter source code",
        field: "textarea",
        name: "sourceCode",
        required: true,
      },
      {
        label: "Enter target language",
        field: "input",
        name: "targetLanguage",
        required: true,
      },
    ],
  },
  {
    name: "Web Development Assistant",
    desc: "An AI tool to help with web development tasks, from frontend to backend.",
    category: "Development",
    icon: "https://cdn-icons-png.flaticon.com/128/1927/1927746.png",
    aiPrompt: "Assist in web development with [describe the task]",
    slug: "web-dev-assistant",
    form: [
      {
        label: "Enter task description",
        field: "textarea",
        name: "taskDescription",
        required: true,
      },
    ],
  },
  {
    name: "App Development Helper",
    desc: "An AI tool that helps you with mobile app development.",
    category: "Development",
    icon: "https://cdn-icons-png.flaticon.com/128/4261/4261939.png",
    aiPrompt:
      "Provide app development guidance on [describe the platform/task]",
    slug: "app-dev-helper",
    form: [
      {
        label: "Enter platform",
        field: "input",
        name: "platform",
        required: true,
      },
      {
        label: "Enter task description",
        field: "textarea",
        name: "taskDescription",
        required: true,
      },
    ],
  },
  {
    name: "UI/UX Design Tool",
    desc: "An AI tool to generate UI/UX designs based on requirements.",
    category: "Design",
    icon: "https://cdn-icons-png.flaticon.com/128/13191/13191231.png",
    aiPrompt:
      "Generate UI/UX design based on the following requirements: [describe the requirements]",
    slug: "ui-ux-design-tool",
    form: [
      {
        label: "Enter design requirements",
        field: "textarea",
        name: "designRequirements",
        required: true,
      },
    ],
  },
  {
    name: "Frontend Development Assistant",
    desc: "An AI tool that assists in frontend development tasks.",
    category: "Development",
    icon: "https://cdn-icons-png.flaticon.com/128/5047/5047315.png",
    aiPrompt: "Assist with frontend development task: [describe task]",
    slug: "frontend-dev-assistant",
    form: [
      {
        label: "Enter frontend task description",
        field: "textarea",
        name: "frontendTaskDescription",
        required: true,
      },
    ],
  },
  {
    name: "Backend Service",
    desc: "An AI tool for creating backend services with various features.",
    category: "Development",
    icon: "https://cdn-icons-png.flaticon.com/128/11676/11676379.png",
    aiPrompt:
      "Generate a backend service with the following features: [describe features]",
    slug: "backend-service",
    form: [
      {
        label: "Enter backend service features",
        field: "textarea",
        name: "backendFeatures",
        required: true,
      },
    ],
  },
  {
    name: "Bug Fixing Assistant",
    desc: "An AI tool that helps you identify and fix bugs in your code.",
    category: "Development",
    icon: "https://cdn-icons-png.flaticon.com/128/10061/10061799.png",
    aiPrompt: "Find and fix the bug in this code: [provide code]",
    slug: "bug-fixing-assistant",
    form: [
      {
        label: "Enter code with bug",
        field: "textarea",
        name: "buggyCode",
        required: true,
      },
    ],
  },
  {
    name: "Database Query Manager",
    desc: "An AI tool to manage and optimize database queries.",
    category: "Development",
    icon: "https://cdn-icons-png.flaticon.com/128/10061/10061799.png",
    aiPrompt: "Optimize the following database query: [provide query]",
    slug: "database-query-manager",
    form: [
      {
        label: "Enter database query",
        field: "textarea",
        name: "databaseQuery",
        required: true,
      },
    ],
  },
  {
    name: "Algorithm Optimizer",
    desc: "An AI tool that helps you optimize algorithms for better performance.",
    category: "Development",
    icon: "https://cdn-icons-png.flaticon.com/128/1091/1091716.png",
    aiPrompt:
      "Optimize the following algorithm for performance: [provide algorithm]",
    slug: "algorithm-optimizer",
    form: [
      {
        label: "Enter algorithm code",
        field: "textarea",
        name: "algorithmCode",
        required: true,
      },
    ],
  },
  {
    name: "Code Debugger",
    desc: "An AI tool that assists in debugging code and finding errors.",
    category: "Development",
    icon: "https://cdn-icons-png.flaticon.com/128/1892/1892564.png",
    aiPrompt: "Find the error in this code: [provide code]",
    slug: "code-debugger",
    form: [
      {
        label: "Enter code with error",
        field: "textarea",
        name: "buggyCode",
        required: true,
      },
    ],
  },
  {
    name: "API Integration Helper",
    desc: "An AI tool that helps integrate APIs into your applications.",
    category: "Development",
    icon: "https://cdn-icons-png.flaticon.com/128/14380/14380770.png",
    aiPrompt: "Provide API integration code for [describe API/service]",
    slug: "api-integration-helper",
    form: [
      {
        label: "Enter API details",
        field: "textarea",
        name: "apiDetails",
        required: true,
      },
    ],
  },
  {
    name: "UI/UX Prototype Generator",
    desc: "An AI tool to generate UI/UX prototypes based on provided requirements.",
    category: "Design",
    icon: "https://cdn-icons-png.flaticon.com/128/12964/12964889.png",
    aiPrompt:
      "Generate a UI/UX prototype based on the following requirements: [describe requirements]",
    slug: "ui-ux-prototype-generator",
    form: [
      {
        label: "Enter design requirements",
        field: "textarea",
        name: "designRequirements",
        required: true,
      },
    ],
  },
  {
    name: "Responsive Design Helper",
    desc: "An AI tool that helps you create responsive designs for websites.",
    category: "Design",
    icon: "https://cdn-icons-png.flaticon.com/128/15542/15542153.png",
    aiPrompt: "Create responsive design code for [describe layout]",
    slug: "responsive-design-helper",
    form: [
      {
        label: "Enter layout description",
        field: "textarea",
        name: "layoutDescription",
        required: true,
      },
    ],
  },
  {
    name: "Version Control Assistant",
    desc: "An AI tool to help you manage version control in your projects.",
    category: "Development",
    icon: "https://cdn-icons-png.flaticon.com/128/1322/1322053.png",
    aiPrompt:
      "Provide version control commands for the following changes: [describe changes]",
    slug: "version-control-assistant",
    form: [
      {
        label: "Enter change description",
        field: "textarea",
        name: "changeDescription",
        required: true,
      },
    ],
  },
  {
    name: "Deployment Manager",
    desc: "An AI tool to assist with the deployment of your applications.",
    category: "Development",
    icon: "https://cdn-icons-png.flaticon.com/128/6864/6864004.png",
    aiPrompt: "Provide deployment instructions for [describe app]",
    slug: "deployment-manager",
    form: [
      {
        label: "Enter app description",
        field: "textarea",
        name: "appDescription",
        required: true,
      },
    ],
  },
  {
    name: "Performance Optimizer",
    desc: "An AI tool to optimize the performance of your code or applications.",
    category: "Development",
    icon: "https://cdn-icons-png.flaticon.com/128/2982/2982357.png",
    aiPrompt: "Optimize the performance of this code: [provide code]",
    slug: "performance-optimizer",
    form: [
      {
        label: "Enter code to optimize",
        field: "textarea",
        name: "codeToOptimize",
        required: true,
      },
    ],
  },
  {
    name: "Mobile App UI Generator",
    desc: "An AI tool that generates mobile app UI designs based on your specifications.",
    category: "Design",
    icon: "https://cdn-icons-png.flaticon.com/128/11230/11230651.png",
    aiPrompt:
      "Generate a mobile app UI design based on the following description: [describe requirements]",
    slug: "mobile-app-ui-generator",
    form: [
      {
        label: "Enter app design requirements",
        field: "textarea",
        name: "designRequirements",
        required: true,
      },
    ],
  },
  {
    name: "Code Refactor Tool",
    desc: "An AI tool that helps refactor your code for better readability and performance.",
    category: "Development",
    icon: "https://cdn-icons-png.flaticon.com/128/2210/2210159.png",
    aiPrompt: "Refactor the following code: [provide code]",
    slug: "code-refactor-tool",
    form: [
      {
        label: "Enter code to refactor",
        field: "textarea",
        name: "codeToRefactor",
        required: true,
      },
    ],
  },
];
