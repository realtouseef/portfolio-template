interface WorkHistoryProps {
  id?: number;
  projectName?: string;
  role?: string;
  link?: string;
  linkName?: string;
  description?: string;
}

interface AboutProps {
  bio?: string;
  workHistory?: WorkHistoryProps[];
}

export const aboutData: AboutProps = {
  bio: `Touseef is a frontend developer specializing in React.js, NextJS, Tailwindcss, and SCSS. His abilities go beyond just coding as he's a quick learner and has a large appetite for knowledge. He has good leadership skills and great communication skills as well.

  His role is to write and style the front-end components that meet the requirements of our mocks and fulfill our user stories.
  
  Touseef is an expert at structuring well-performing, easily-maintainable javascript frontend applications. He is also well-versed in modern web technologies.
  
  He has a knack for creating minimal websites. He has an eye for even the smallest of details like choosing colors, font sizes, images, etc. He is a big fan of simplicity and is a better team leader as compared to an individual contributor.
  
  Technologies I know/use: TailwindCSS, JavaScript, TypeScript, ReactJS/NextJS/GatsbyJS, GraphQL, Firebase
  `,

  workHistory: [
    {
      id: 1,
      projectName: "Quranfan",
      role: "Lead React Dev",
      link: "https://quranfan.vercel.app",
      linkName: "quranfan.com",
      description:
        "My personal project that I was really passsionate about. I created this to benefit people who are in despair and spiritually suffering.",
    },
    {
      id: 2,
      projectName: "BuyMeACoffee Clone",
      role: "Lead React Dev",
      link: "https://buymeacoffee-clone.vercel.app",
      linkName: "buymeacoffee-clone.com",
      description:
        "Was impressed by the Original Buymeacoffee website because of its minimal design and the animations. Used NextJS and TailwindCSS for it.",
    },
    {
      id: 3,
      projectName: "Qoals Clone",
      role: "Lead React Dev",
      link: "https://qoals-clone.vercel.app",
      linkName: "qoals-clone.com",
      description:
        "Was impressed by the Original Qoals website because of its minimal design and the animations. Used NextJS and TailwindCSS for it.",
    },
  ],
};

export const contactData = {
  briefBio1:
    "Touseef is an expert at structuring well-performing, easily-maintainable javascript frontend applications. He is also well-versed in modern web technologies.",
  briefBio2:
    "He has a knack for creating minimal websites. He has an eye for even the smallest of details like choosing colors, font sizes, images, etc. He is a big fan of simplicity and is a better team leader as compared to an individual contributor.",
  techStack:
    "TailwindCSS, JavaScript, TypeScript, ReactJS/NextJS/GatsbyJS, GraphQL, Firebase",
  availableFor: [
    {
      id: 1,
      title: "Frontend Development",
      description:
        "Available for any frontend project for anyone; 0 → 1 advising, visual design feedback, and building out the entire website.",
    },
    {
      id: 2,
      title: "Building SPAs",
      description:
        "Can create Single Page Applications based on your requirements.",
    },
    {
      id: 3,
      title: "Minimal Websites",
      description:
        "Have a eye for the smallest details like choosing colors, font sizes, images, etc.",
    },
    {
      id: 4,
      title: "Custom Websites",
      description: "Can build any site based on your requirements.",
    },
  ],
};
