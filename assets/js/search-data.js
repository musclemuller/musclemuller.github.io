// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "This is a description of the page. You can modify it in &#39;_pages/cv.md&#39;. You can also change or remove the top pdf download button.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-building-an-mcp-server-for-real-time-analytics",
        
          title: "Building an MCP Server for Real-Time Analytics",
        
        description: "A placeholder post on building an MCP server on top of Apache Pinot to enable LLM-powered analytics workflows.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/building-mcp-server-pinot/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "projects-pinot-mcp-server-amp-multi-agent-system",
          title: 'Pinot MCP Server &amp;amp; Multi-Agent System',
          description: "AI-powered support for real-time analytics at Uber — automates table onboarding and query troubleshooting via Slack, internal chatbot, and Claude Code.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_pinot_mcp/";
            },},{id: "projects-pinot-fulfillment-cluster-rebuild",
          title: 'Pinot Fulfillment Cluster Rebuild',
          description: "Re-architected Uber&#39;s Fulfillment team tables on dedicated Pinot clusters with Upsert features — 50% cost reduction and 10x query latency improvement (10s → 1.5s).",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_pinot_fulfillment/";
            },},{id: "projects-cloud-resource-orchestration-service",
          title: 'Cloud Resource Orchestration Service',
          description: "Spring Boot service to orchestrate Confluent Cloud resource lifecycle — networks, Kubernetes clusters, Kafka, and Flink — for internal testing infrastructure.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_cloud_resource_orchestration/";
            },},{id: "projects-microservice-runtime-amp-service-mesh",
          title: 'Microservice Runtime &amp;amp; Service Mesh',
          description: "Go runtime library for building Confluent Cloud microservices, plus service mesh implementation using Istio and Gloo Mesh for K8s service-to-service communication.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_microservice_runtime/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/resume_zhuoranliu__2026_.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6D%75%6C%6C%65%72%6C%7A%72@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/musclemuller", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/zhuoranliu22", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
