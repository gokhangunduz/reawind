export const info = {
  fullName: "John Doe",
  title: "Frontend Developer",
  email: "name@yourdomain.com",
  address: "Ankara, Türkiye",
  phone: "+90 555 555 55 55",
  year: 2023,
};

export const urls = {
  linkedin: "https://linkedin.com/in/gokhangunduz",
  github: "https://github.com/gokhangunduz",
  email: `mailto:${info.email}`,
  address: "https://www.google.com.tr/maps/place/Ankara/",
  phone: `tel:${info.phone}`,
};

export const pages = {
  intro: {
    seo: {
      title: `${info.fullName} | ${info.title}`,
      description: `Hi, I'm ${info.fullName}, ${info.title}`,
      keywords: "frontend, developer, javascript, typescript, react, nodejs",
    },
  },

  resume: {
    githubUsername: "gokhangunduz",
    githubReadMeRepository: "gokhangunduz",
    githubReadMeRepositoryBranch: "main",

    seo: {
      title: `${info.fullName} | Resume`,
      description: `Hi, I'm ${info.fullName}, ${info.title}`,
      keywords: "frontend, developer, javascript, typescript, react, nodejs",
    },
  },
  projects: {
    seo: {
      title: `${info.fullName} | Projects`,
      description: `Hi, I'm ${info.fullName}, ${info.title}`,
      keywords: "frontend, developer, javascript, typescript, react, nodejs",
    },
  },

  blog: {
    seo: {
      title: `${info.fullName} | Blog`,
      description: `Hi, I'm ${info.fullName}, ${info.title}`,
      keywords: "frontend, developer, javascript, typescript, react, nodejs",
    },
  },

  contact: {
    seo: {
      title: `${info.fullName} | Contact`,
      description: `Hi, I'm ${info.fullName}, ${info.title}`,
      keywords: "frontend, developer, javascript, typescript, react, nodejs",
    },
  },
};
