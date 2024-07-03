import styles from './Hero.module.scss';
import Image from 'next/image';
import { detailedBio, siteData } from '../../siteData';

const Hero: React.FC = () => {
  const {
    github,
    externalHireLink,
    externalHireLinkName,
    description,
    twitter,
    linkedin,
    author,
    largeProfileImage,
  } = siteData;

  const { detailedBio1, detailedBio2, detailedBio3, detailedBio4 } =
    detailedBio;

  return (
    <>
      <section className={styles.hero}>
        {/* the title goes here  */}
        <article className={styles.hero_header}>
          <h1>{description}</h1>
          {/* link goes here  */}
          <section className={styles.hero_social}>
            <a href={twitter} target='_blank' rel='noreferrer'>
              <Image
                src='/icons/twitter.svg'
                alt={`twitter logo for ${author}`}
                width={30}
                height={30}
                objectFit='contain'
                loading='eager'
              />
            </a>
            <a href={github} target='_blank' rel='noreferrer'>
              <Image
                src='/icons/github.svg'
                alt={`instagram logo for ${author}`}
                width={30}
                height={30}
                objectFit='contain'
                loading='eager'
              />
            </a>
            <a href={linkedin} target='_blank' rel='noreferrer'>
              <Image
                src='/icons/linkedin.svg'
                alt={`linkedin logo for ${author}`}
                width={30}
                height={30}
                objectFit='contain'
                loading='eager'
              />
            </a>
          </section>
        </article>
        {/* picture and the biography goes here  */}
        <article className={styles.hero_biography}>
          <div className={styles.text}>
            <p>{detailedBio1}</p>
            <p>{detailedBio2}</p>
            <p>{detailedBio3}</p>
            <p>{detailedBio4}</p>
            <a href={externalHireLink} target='_blank' rel='noreferrer'>
              <button>{externalHireLinkName}</button>
            </a>
          </div>
          <div className={styles.pic}>
            <Image
              src={largeProfileImage}
              alt={`${author}'s profile picture`}
              loading='eager'
              objectFit='cover'
              width={810}
              height={1080}
              priority
            />
          </div>
        </article>
      </section>
    </>
  );
};

export default Hero;
