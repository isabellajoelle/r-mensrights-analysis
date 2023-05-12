import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Rituals() {
  return (
    <>
      <Head>
        <title>r/mensrights analysis</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <ul className={styles.topnav}>
          <li className={styles.navli}>
            <Link href="/" className={styles.navLink}>
              r/MensRights Analysis
            </Link>
          </li>
          <li className={styles.navli}>
            <Link href="/general" className={styles.navLink}>
              General Info
            </Link>
          </li>
          <li className={styles.navli}>
            <Link href="/rules" className={styles.navLink}>
              Rules
            </Link>
          </li>
          <li className={styles.navli}>
            <Link href="/language" className={styles.navLink}>
              Language
            </Link>
          </li>
          <li className={styles.navli}>
            <Link href="/beliefs" className={styles.navLink}>
              Beliefs
            </Link>
          </li>
          <li className={styles.navli}>
            <Link href="/rituals" className={styles.active}>
              Rituals
            </Link>
          </li>
          <li className={styles.navli}>
            <Link href="/characters" className={styles.navLink}>
              Characters
            </Link>
          </li>
          <li className={styles.navli}>
            <Link href="/funExtras" className={styles.navLink}>
              Fun Extra Stuff
            </Link>
          </li>
        </ul>
        <div className={styles.spacing}>
          <h1 className={styles.title}>Rituals</h1>
        </div>
        <div className={styles.spacing}>
          <div className={styles.card}>
            <h2 className={styles.title}>
              Common Practice: Filtering By Flair
            </h2>
            <p>
              r/MensRights users identify the topics of posts using a colored
              tag called a <strong>flair</strong>.
            </p>
            <p>
              These flairs dictate post topics so users can filter through the
              content on the subreddit to find discussions they are interested
              in. If you click on one of these flairs, the page will only
              display posts with that particular flair.
            </p>
          </div>
        </div>
        <div className={styles.spacing}>
          <h2 className={styles.title_center}>Flair Colors</h2>
        </div>
        <div className={styles.spacing}>
          <div className={styles.multipleC}>
            <div className={styles.flairG2}>
              <h3 className={styles.title_center}>Green</h3>
              <hr className={styles.rulesHr}></hr>
              <p className={styles.decorativep4}>
                &quot;moderator applied (while individuals can select this, we
                will remove it unless we are the ones who set it).&quot;
              </p>
            </div>
            <div className={styles.middle2}></div>
            <div className={styles.flairR2}>
              <h3 className={styles.title_center}>Red</h3>
              <hr className={styles.rulesHr}></hr>
              <p className={styles.decorativep4}>
                &quot;common, relevant men&apos;s rights issues.&quot;
              </p>
            </div>
            <div className={styles.middle2}></div>
            <div className={styles.flairB2}>
              <h3 className={styles.title_center}>Blue</h3>
              <hr className={styles.rulesHr}></hr>
              <p className={styles.decorativep4}>
                &quot;typically low quality or low relevancy content &quot;
              </p>
            </div>
            <div className={styles.middle2}></div>
            <div className={styles.flairP2}>
              <h3 className={styles.title_center}>Purple</h3>
              <hr className={styles.rulesHr}></hr>
              <p className={styles.decorativep4}>
                &quot;generally self posts, or posts made to elicit discussion
                and the focus will be on the comment section.&quot;
              </p>
            </div>
          </div>
        </div>
        <div className={styles.spacing}>
          <div className={styles.personalCard}>
            <h4 className={styles.title}>Personal Note:</h4>
            <hr className={styles.prLine} />
            <br />
            <p>
              The most used category is a tie between the red and blue tags.
              They can be found on almost every single post made in
              r/mensrights. Purple and green categories exists we just
              dont&apos;t get to see them so often.
            </p>
            <br />
          </div>
        </div>
        <h2 className={styles.title}>FLAIR OPTIONS</h2>
        <div className={styles.spacing}>
          <div className={styles.multipleC}>
            <div className={styles.flairP}>
              <h3 className={styles.title_center}>
                <Link
                  href="https://www.reddit.com/r/MensRights/search/?q=flair_name%3A%22Humour%22&restrict_sr=1&sr_nsfw="
                  className={styles.intextLinkP}
                  target="_blank"
                >
                  Humour
                </Link>
              </h3>
              <hr className={styles.rulesHr}></hr>
              <div className={styles.spacing}>
                <p className={styles.decorativep4}>
                  general humour, jokes, and satire
                </p>
              </div>
            </div>
            <div className={styles.middle}></div>
            <div className={styles.flairR}>
              <h3 className={styles.title_center}>
                <Link
                  href="https://www.reddit.com/r/MensRights/search/?q=flair_name%3A%22False%20Accusation%22&restrict_sr=1&sr_nsfw="
                  className={styles.intextLinkR}
                  target="_blank"
                >
                  False Accusation
                </Link>
              </h3>
              <hr className={styles.rulesHr}></hr>
              <div className={styles.spacing}>
                <p className={styles.decorativep4}>
                  &quot;False accusations against men (Proven false - not
                  suspected) &quot;
                </p>
              </div>
            </div>
          </div>
          <div className={styles.multipleC}>
            <div className={styles.flairB}>
              <h3 className={styles.title_center}>
                <Link
                  href="https://www.reddit.com/r/MensRights/search/?q=flair_name%3A%22Anti-MRM%22&restrict_sr=1&sr_nsfw="
                  className={styles.intextLinkB}
                  target="_blank"
                >
                  Anti-MRM
                </Link>
              </h3>
              <hr className={styles.rulesHr}></hr>
              <div className={styles.spacing}>
                <p className={styles.decorativep4}>
                  topics against men&apos;s rights or &quot;men failing to do
                  their part for other men and boys.&quot;
                </p>
              </div>
            </div>
            <div className={styles.middle}></div>
            <div className={styles.flairB}>
              <h3 className={styles.title_center}>
                <Link
                  href="https://www.reddit.com/r/MensRights/search/?q=flair_name%3A%22Feminism%22&restrict_sr=1&sr_nsfw="
                  className={styles.intextLinkB}
                  target="_blank"
                >
                  Feminism
                </Link>
              </h3>
              <hr className={styles.rulesHr}></hr>
              <div className={styles.spacing}>
                <p className={styles.decorativep4}>
                  &quot;For discussing feminism and feminist issues (like
                  privilege) &quot;
                </p>
              </div>
            </div>
          </div>
          <div className={styles.multipleC}>
            <div className={styles.flairR}>
              <h3 className={styles.title_center}>
                <Link
                  href="https://www.reddit.com/r/MensRights/search/?q=flair_name%3A%22Anti-MRM%22&restrict_sr=1&sr_nsfw="
                  className={styles.intextLinkR}
                  target="_blank"
                >
                  Edu./Occu.
                </Link>
              </h3>
              <hr className={styles.rulesHr}></hr>
              <div className={styles.spacing}>
                <p className={styles.decorativep4}>
                  &quot;Educational/ occupational links&quot;
                </p>
              </div>
            </div>
            <div className={styles.middle}></div>
            <div className={styles.flairB}>
              <h3 className={styles.title_center}>
                <Link
                  href="https://www.reddit.com/r/MensRights/search/?q=flair_name%3A%22Legal%20Rights%22&restrict_sr=1&sr_nsfw="
                  className={styles.intextLinkB}
                  target="_blank"
                >
                  Legal Rights
                </Link>
              </h3>
              <hr className={styles.rulesHr}></hr>
              <div className={styles.spacing}>
                <p className={styles.decorativep4}>
                  &quot;Articles about mens legal rights - Apparent or denied.
                  &quot;
                </p>
              </div>
            </div>
          </div>
          <div className={styles.multipleC}>
            <div className={styles.flairB}>
              <h3 className={styles.title_center}>
                <Link
                  href="https://www.reddit.com/r/MensRights/search/?q=flair_name%3A%22Social%20issues%22&restrict_sr=1&sr_nsfw="
                  className={styles.intextLinkB}
                  target="_blank"
                >
                  Social Issues
                </Link>
              </h3>
              <hr className={styles.rulesHr}></hr>
              <div className={styles.spacing}>
                <p className={styles.decorativep4}>
                  &quot;Social issues- Issues with men, against men, for men
                  &quot;
                </p>
              </div>
            </div>
            <div className={styles.middle}></div>
            <div className={styles.flairB}>
              <h3 className={styles.title_center}>
                <Link
                  href="https://www.reddit.com/r/MensRights/search/?q=flair_name%3A%22Legal%20Rights%22&restrict_sr=1&sr_nsfw="
                  className={styles.intextLinkB}
                  target="_blank"
                >
                  Discrimination
                </Link>
              </h3>
              <hr className={styles.rulesHr}></hr>
              <div className={styles.spacing}>
                <p className={styles.decorativep4}>
                  &quot;For instances of discrimination against men. &quot;
                </p>
              </div>
            </div>
          </div>
          <div className={styles.multipleC}>
            <div className={styles.flairP}>
              <h3 className={styles.title_center}>
                <Link
                  href="https://www.reddit.com/r/MensRights/search/?q=flair_name%3A%22Social%20issues%22&restrict_sr=1&sr_nsfw="
                  className={styles.intextLinkP}
                  target="_blank"
                >
                  General
                </Link>
              </h3>
              <hr className={styles.rulesHr}></hr>
              <div className={styles.spacing}>
                <p className={styles.decorativep4}>
                  &quot;General discussions&quot;
                </p>
              </div>
            </div>
            <div className={styles.middle}></div>
            <div className={styles.flairG}>
              <h3 className={styles.title_center}>
                <Link
                  href="https://www.reddit.com/r/MensRights/search/?q=flair_name%3A%22Moderator%22&restrict_sr=1&sr_nsfw="
                  className={styles.intextLinkG}
                  target="_blank"
                >
                  Moderator
                </Link>
              </h3>
              <hr className={styles.rulesHr}></hr>
              <div className={styles.spacing}>
                <p className={styles.decorativep4}>
                  &quot;Moderator used label for messages and things.&quot;
                </p>
              </div>
            </div>
          </div>
          <div className={styles.multipleC}>
            <div className={styles.flairR}>
              <h3 className={styles.title_center}>
                <Link
                  href="https://www.reddit.com/r/MensRights/search/?q=flair_name%3A%22Activism%2FSupport%22&restrict_sr=1&sr_nsfw="
                  className={styles.intextLinkR}
                  target="_blank"
                >
                  Activism/Support
                </Link>
              </h3>
              <hr className={styles.rulesHr}></hr>
              <div className={styles.spacing}>
                <p className={styles.decorativep4}>
                  &quot;generally self posts, or posts made to elicit discussion
                  and the focus will be on the comment section.&quot;
                </p>
              </div>
            </div>
            <div className={styles.middle}></div>
            <div className={styles.flairG}>
              <h3 className={styles.title_center}>
                <Link
                  href="https://www.reddit.com/r/MensRights/search/?q=flair_name%3A%22Unconfirmed%22&restrict_sr=1&sr_nsfw="
                  className={styles.intextLinkG}
                  target="_blank"
                >
                  Unconfirmed
                </Link>
              </h3>
              <hr className={styles.rulesHr}></hr>
              <div className={styles.spacing}>
                <p className={styles.decorativep4}>
                  &quot;Used by moderators to advise readers that the post
                  contains speculations or unproven statistics/falsehoods.
                  &quot;
                </p>
              </div>
            </div>
          </div>
          <div className={styles.multipleC}>
            <div className={styles.flairR}>
              <h3 className={styles.title_center}>
                <Link
                  href="https://www.reddit.com/r/MensRights/search/?q=flair_name%3A%22Marriage%2FChildren%22&restrict_sr=1&sr_nsfw="
                  className={styles.intextLinkR}
                  target="_blank"
                >
                  Marriage/Children
                </Link>
              </h3>
              <hr className={styles.rulesHr}></hr>
              <div className={styles.spacing}>
                <p className={styles.decorativep4}>
                  discussions on the topics of marriage and children
                </p>
              </div>
            </div>
            <div className={styles.middle}></div>
            <div className={styles.flairP}>
              <h3 className={styles.title_center}>
                <Link
                  href="https://www.reddit.com/r/MensRights/search/?q=flair_name%3A%22Progress%22&restrict_sr=1&sr_nsfw="
                  className={styles.intextLinkP}
                  target="_blank"
                >
                  Progress
                </Link>
              </h3>
              <hr className={styles.rulesHr}></hr>
              <div className={styles.spacing}>
                <p className={styles.decorativep4}>
                  discussions regarding progress made in the men&apos;s rights
                  movement
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
