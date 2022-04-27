interface SiteProps {
  siteTitle?: string;
  secondaryTitle?: string;
  email?: string;
  author?: string;
  github?: string;
  linkedin?: string;
  twitter?: string;
  upwork?: string;
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

export const siteData: SiteProps = {
  siteTitle: "Touseef",
  secondaryTitle: "Jr. Software Engineer",
  email: "touseef69r@gmail.com",
  author: "@realtouseef",
  github: "https://github.com/realtouseef",
  linkedin: "https://linkedin.com/in/touseefcodes",
  twitter: "https://twitter.com/touseefcodes",
  upwork: "https://www.upwork.com/freelancers/~013c6a875bcebb5f00",
  externalHireLinkName: "upwork",
  // in this case, upwork | change it if you want
  description: `I'm Touseef ibn Khaleel — Jr. Software Engineer, TypeScript Lover, & an Open-source Enthusiast.`,
  detailedBio1: `Touseef is a Jr. Software Engineer specializing in TypeScript,
  ReactJS / NextJS / GatsbyJS, TailwindCSS, and Firebase. His abilities go beyond just coding as he's a quick learner and has a
  large appetite for knowledge. He has good leadership skills and
  great communication skills as well.`,
  detailedBio2: `His role is to write and style the front-end components that meet
  the requirements of our mocks and fulfill our user stories.`,
  detailedBio3: `Touseef is an expert at structuring well-performing,
  easily-maintainable javascript frontend applications. He is also
  well-versed in modern web technologies.`,
  detailedBio4: `He has a knack for creating minimal websites. He has an eye for
  even the smallest of details like choosing colors, font sizes,
  images, etc. He is a big fan of simplicity and is a better team
  leader as compared to an individual contributor.`,
  footerBriefBio:
    "If you liked what you see and want to have a similar website or a diff one, you can contact me anytime. Click the below gif 😅",
  siteKeywords:
    "touseef, touseef ibn khaleel, open-source enthusiast, typescript engineer, software engineer, jr. software engineer",

  largeProfileImage: "/pic/touseef.jpg",
  footerHeadshotImage: "/pic/touseef-headshot.jpg",
};
