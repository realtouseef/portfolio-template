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
  detailedBio?: string;
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
  detailedBio: "",
  footerBriefBio:
    "If you liked what you see and want to have a similar website or a diff one, you can contact me anytime. Click the below gif 😅",
  siteKeywords:
    "touseef, touseef ibn khaleel, open-source enthusiast, typescript engineer, software engineer, jr. software engineer",

  largeProfileImage: "/pic/touseef.jpg",
  footerHeadshotImage: "/pic/touseef-headshot.jpg",
};
