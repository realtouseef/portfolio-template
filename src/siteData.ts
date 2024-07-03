interface SiteProps {
  siteTitle?: string;
  secondaryTitle?: string;
  email?: string;
  author?: string;
  github?: string;
  linkedin?: string;
  twitter?: string;
  externalHireLink?: string;
  externalHireLinkName?: string;
  description?: string;
  detailedBio1?: string;
  detailedBio2?: string;
  detailedBio3?: string;
  detailedBio4?: string;
  footerBriefBio?: string;
  siteKeywords?: string;
  largeProfileImage?: string;
  footerHeadshotImage?: string;
}

type DetailedBioProps = {
  detailedBio1?: string;
  detailedBio2?: string;
  detailedBio3?: string;
  detailedBio4?: string;
};

export const siteData: SiteProps = {
  siteTitle: 'Touseef',
  secondaryTitle: 'MERN Stack Engineer',
  email: 'touseefibnkhalil@gmail.com',
  author: '@realtouseef',
  github: 'https://github.com/realtouseef',
  linkedin: 'https://linkedin.com/in/touseefcodes',
  twitter: 'https://twitter.com/touseefcodes',
  externalHireLink: 'https://linkedin.com/in/touseefcodes',
  externalHireLinkName: 'Linkedin',
  // in this case, upwork | change it if you want
  description: `I'm Touseef ibn Khaleel — MERN Stack Engineer, TypeScript Lover, & an Open-source Enthusiast.`,
  footerBriefBio:
    'If you liked what you see and want to have a similar website or a diff one, you can contact me anytime. Click the below gif 😅',
  siteKeywords:
    'touseef, touseef ibn khaleel, open-source enthusiast, typescript engineer, software engineer, MERN Stack engineer',

  largeProfileImage: '/pic/touseef-pro.jpeg',
  footerHeadshotImage: '/pic/touseef-headshot.jpeg',
};

export const detailedBio: DetailedBioProps = {
  detailedBio1: `
  I'm a results-driven Software Engineer specializing in the MERN stack with expertise in JavaScript, TypeScript, NodeJS, Mongo, ReactJS, NextJS, and React Native. 💻
  `,
  detailedBio2: `With a passion for solving complex problems, I thrive in crafting robust and scalable solutions that meet and exceed client expectations. My hands-on experience in full-stack development helps me to navigate challenges efficiently, ensuring the delivery of high-quality software.`,
  detailedBio3: `Touseef is an expert at structuring well-performing,
  easily-maintainable javascript frontend applications. He is also
  well-versed in modern web technologies.`,
  detailedBio4: `He has a knack for creating minimal websites. He has an eye for
  even the smallest of details like choosing colors, font sizes,
  images, etc. He is a big fan of simplicity and is a better team
  leader as compared to an individual contributor.`,
};
