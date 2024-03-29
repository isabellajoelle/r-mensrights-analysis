import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function General() {
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
            <Link href="/general" className={styles.active}>
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
            <Link href="/rituals" className={styles.navLink}>
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
          <h1 className={styles.title}>General Information</h1>
        </div>
        <div className={styles.spacing}>
          <div className={styles.card}>
            <h2 className={styles.title}>What is r/MensRights?</h2>
            <p>
              &quot;In short, r/MensRights (r/MR) is a community of members that
              seek to promote honest discourse in regards to male issues -
              including but not limited to custody, alimony, reproductive health
              and rights, and education.
            </p>
            <p>
              r/MR is a subreddit consisting of both men and women who believe
              that there is serious discrimination against men inherent in
              western societies.&quot;
            </p>
            <p>
              - <i>r/MensRights Moderators</i>
            </p>
          </div>
        </div>
        <div className={styles.spacing}>
          <div className={styles.multipleC}>
            <div className={styles.accentcardR}>
              <h2>345k Members</h2>
            </div>
            <div className={styles.middle}></div>
            <div className={styles.accentcardR}>
              <h2>Created March 19th, 2008</h2>
            </div>
          </div>
        </div>
        <div className={styles.spacing}>
          <div className={styles.card}>
            <h2 className={styles.title}>Who is the Subreddit For?</h2>
            <p>
              The moderators of r/MensRights recognize that the page is
              comprised of two different types of users:
            </p>
            <ol className={styles.lists}>
              <li>
                <p>
                  People seeking to organize and tackle the issues the page
                  discusses{" "}
                </p>
              </li>
              <li>
                <p>
                  People seeking to vent in a safe space where disagreements are
                  not tolerated
                </p>
              </li>
            </ol>
            <p>
              Regardless, the page advertises itself as a place solely for
              people to seek refuge and solace after negative personal
              experiences and encourages those wishing to organize to do so
              elsewhere.
            </p>
          </div>
        </div>
        <div className={styles.spacing}>
          <div className={styles.card}>
            <h2 className={styles.title_center}>
              The page&apos;s &quot;ABOUT COMMUNITY&quot; blurb reads
            </h2>
            <p className={styles.desiredfont}>
              &quot;At the most basic level, men&apos;s rights are the legal
              rights that are granted to men. However, any issue that pertains
              to men&apos;s relationship to society is also a topic suitable for
              this subreddit. Men&apos;s rights are influenced by the way men
              are perceived by others. WARNING: Some other subs have bots that
              will ban you if you post or comment here. &quot;
            </p>
          </div>
        </div>
        <div className={styles.spacing}>
          <div className={styles.multipleC}>
            <div className={styles.accentcardR2}>
              <h4 className={styles.title}>
                Why would a user participate in this community?
              </h4>
              <ul className={styles.lists}>
                <li>
                  <p>False Accusations</p>
                </li>
                <li>
                  <p>Unfair Custody Battles</p>
                </li>
                <li>
                  <p>Physical/Verbal Abuse</p>
                </li>
                <li>
                  <p>Etc.</p>
                </li>
              </ul>
            </div>
            <div className={styles.middle}></div>
            <div className={styles.accentcardR2}>
              <h4 className={styles.title}>
                The subreddit does not associate with the following ideologies:
              </h4>
              <ul className={styles.lists}>
                <li>
                  <p>Feminism</p>
                </li>
                <li>
                  <p>Men Going Their Own Way (MGTOW)</p>
                </li>
                <li>
                  <p>The Red Pill</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.spacing}>
          <div className={styles.personalCard}>
            <h4 className={styles.title}>Personal Note:</h4>
            <hr className={styles.prLine} />
            <br />
            <p>
              The descriptions from the cards above come directly from the{" "}
              <strong>MENS RIGHTS WIKI</strong> tab of the community. This tab
              also includes frequently asked questions, describes the flair
              system, and talks about moderation.
            </p>
            <br />
          </div>
        </div>
        <div className={styles.spacing}>
          <div className={styles.card}>
            <h2 className={styles.title}>
              The Men&apos;s Rights Movement (MRM)
            </h2>
            <p>
              This subreddit associates itself with the Men&apos;s Rights
              Movement.
            </p>
            <p>
              This movement is loosely defined as a collection of activities
              enacted by people that believe that men are unequal to other
              genders in western society. The subreddit makes it clear that not
              all groups that fight for men&apos;s rights are a part of this
              movement, but that is likely because there is no formal definition
              for it.
            </p>
            <p>
              In this loose definition &quot;Western Society&quot; includes:
            </p>
            <ul className={styles.lists}>
              <li>
                <p>Canada</p>
              </li>
              <li>
                <p>United States of America</p>
              </li>
              <li>
                <p>United Kingdom</p>
              </li>
              <li>
                <p>Australia</p>
              </li>
              <li>
                <p>New Zealand</p>
              </li>
            </ul>
            <p>
              The subreddit does subscribe to a particular summarization of the
              movement provided by one of their users{" "}
              <strong>u/Interpol_WorldPolice</strong>:
            </p>
            <blockquote className={styles.quoteS}>
              <h4 className={styles.accentWord}>Our Goals:</h4>
              <p>
                Equal Protection for all under the law, Equal Opportunity for
                all in the workplace, Equal Treatment for all in society,
                Cooperation Within Movements, and Clear Endgame.
              </p>
              <h4 className={styles.accentWord}>
                Some Sample Tools & Concepts:
              </h4>
              <p>
                Black Box Gender Roles, Don&apos;t Build Ladders - Break Down
                Walls, Blind Justice, Mirror Test, No Corruption of Blood No
                Original Sin, Equality of Opportunity, Not Outcome, Bottom-Up
                Equality, Privilege is Particular, and Faulty Inference
              </p>
            </blockquote>
            <p>
              The moderators of r/MenRights believe strongly in the prevalance
              of this movement and do not believe it will be going away anytime
              soon.
            </p>
          </div>
        </div>
        <div className={styles.spacing}>
          <h2 className={styles.title}>Topics of Discussions Include:</h2>
          <p className={styles.decorativep}>
            Click each topic to view their top posts in the subreddit!
          </p>
          {/* Row 1 */}
          <div className={styles.multipleC}>
            <div className={styles.accentcardR4}>
              <Link
                href="https://www.reddit.com/r/MensRights/search/?q=homelessness"
                className={styles.title}
                target="_blank"
              >
                Homelessness
              </Link>
            </div>
            <div className={styles.middle2}></div>
            <div className={styles.accentcardR4}>
              <Link
                href="https://www.reddit.com/r/MensRights/search/?q=drug%20addiction"
                className={styles.title}
                target="_blank"
              >
                Drug Addiction
              </Link>
            </div>
            <div className={styles.middle2}></div>
            <div className={styles.accentcardR4}>
              <Link
                href="https://www.reddit.com/r/MensRights/search/?q=alcoholism"
                className={styles.title}
                target="_blank"
              >
                Alcoholism
              </Link>
            </div>
            <div className={styles.middle2}></div>
            <div className={styles.accentcardR4}>
              <Link
                href="https://www.reddit.com/r/MensRights/search/?q=life%20expectancy"
                className={styles.title}
                target="_blank"
              >
                Life Expectancy
              </Link>
            </div>
          </div>
          {/* Row 2 */}
          <div className={styles.multipleC}>
            <div className={styles.accentcardR4}>
              <Link
                href="https://www.reddit.com/r/MensRights/search/?q=hate%20crime"
                className={styles.title}
                target="_blank"
              >
                Hate Crimes
              </Link>
            </div>
            <div className={styles.middle2}></div>
            <div className={styles.accentcardR4}>
              <Link
                href="https://www.reddit.com/r/MensRights/search/?q=gendercide"
                className={styles.title}
                target="_blank"
              >
                Gendercide
              </Link>
            </div>
            <div className={styles.middle2}></div>
            <div className={styles.accentcardR4}>
              <Link
                href="https://www.reddit.com/r/MensRights/search/?q=domestic%20violence"
                className={styles.title}
                target="_blank"
              >
                Domestic Violence
              </Link>
            </div>
            <div className={styles.middle2}></div>
            <div className={styles.accentcardR4}>
              <Link
                href="https://www.reddit.com/r/MensRights/search/?q=pedophilia"
                className={styles.title}
                target="_blank"
              >
                Pedophilia
              </Link>
            </div>
          </div>
          {/* Row 3 */}
          <div className={styles.multipleC}>
            <div className={styles.accentcardR4}>
              <Link
                href="https://www.reddit.com/r/MensRights/search/?q=sexuality"
                className={styles.title}
                target="_blank"
              >
                Sexuality
              </Link>
            </div>
            <div className={styles.middle2}></div>
            <div className={styles.accentcardR4}>
              <Link
                href="https://www.reddit.com/r/MensRights/search/?q=body%20image"
                className={styles.title}
                target="_blank"
              >
                Body Image
              </Link>
            </div>
            <div className={styles.middle2}></div>
            <div className={styles.accentcardR4}>
              <Link
                href="https://www.reddit.com/r/MensRights/search/?q=insulting%20language"
                className={styles.title}
                target="_blank"
              >
                Insulting Language
              </Link>
            </div>
            <div className={styles.middle2}></div>
            <div className={styles.accentcardR4}>
              <Link
                href="https://www.reddit.com/r/MensRights/search/?q=homicide"
                className={styles.title}
                target="_blank"
              >
                Homicide
              </Link>
            </div>
          </div>
          {/* Row 4 */}
          <div className={styles.multipleC}>
            <div className={styles.accentcardR4}>
              <Link
                href="https://www.reddit.com/r/MensRights/search/?q=robbery"
                className={styles.title}
                target="_blank"
              >
                Robbery
              </Link>
            </div>
            <div className={styles.middle2}></div>
            <div className={styles.accentcardR4}>
              <Link
                href="https://www.reddit.com/r/MensRights/search/?q=physical%20assault"
                className={styles.title}
                target="_blank"
              >
                Physical Assault
              </Link>
            </div>
            <div className={styles.middle2}></div>
            <div className={styles.accentcardR4}>
              <Link
                href="https://www.reddit.com/r/MensRights/search/?q=suicide"
                className={styles.title}
                target="_blank"
              >
                Suicide
              </Link>
            </div>
            <div className={styles.middle2}></div>
            <div className={styles.accentcardR4}>
              <Link
                href="https://www.reddit.com/r/MensRights/search/?q=workplace%20injury%20or%20death"
                className={styles.title}
                target="_blank"
              >
                Workplace Injury/Death
              </Link>
            </div>
          </div>
          {/* Row 5 */}
          <div className={styles.multipleC}>
            <div className={styles.accentcardR4}>
              <Link
                href="https://www.reddit.com/r/MensRights/search/?q=sexual%20assault%20or%20rape"
                className={styles.title}
                target="_blank"
              >
                Sexual Assault
              </Link>
            </div>
            <div className={styles.middle2}></div>
            <div className={styles.accentcardR4}>
              <Link
                href="https://www.reddit.com/r/MensRights/search/?q=legal%20system%20discrimination"
                className={styles.title}
                target="_blank"
              >
                Legal System Discrimination
              </Link>
            </div>
            <div className={styles.middle2}></div>
            <div className={styles.accentcardR4}>
              <Link
                href="https://www.reddit.com/r/MensRights/search/?q=circumcision"
                className={styles.title}
                target="_blank"
              >
                Circumcision
              </Link>
            </div>
            <div className={styles.middle2}></div>
            <div className={styles.accentcardR4}>
              <Link
                href="https://www.reddit.com/r/MensRights/search/?q=military%20service"
                className={styles.title}
                target="_blank"
              >
                Military Service
              </Link>
            </div>
          </div>
          {/* Row 6 */}
          <div className={styles.multipleC}>
            <div className={styles.accentcardR4}>
              <Link
                href="https://www.reddit.com/r/MensRights/search/?q=employment%20discrimination"
                className={styles.title}
                target="_blank"
              >
                Employment Discrimination
              </Link>
            </div>
            <div className={styles.middle2}></div>
            <div className={styles.accentcardR4}>
              <Link
                href="https://www.reddit.com/r/MensRights/search/?q=gender%20politics"
                className={styles.title}
                target="_blank"
              >
                Gender Politics
              </Link>
            </div>
            <div className={styles.middle2}></div>
            <div className={styles.accentcardR4}>
              <Link
                href="https://www.reddit.com/r/MensRights/search/?q=race%20or%20ethnicity"
                className={styles.title}
                target="_blank"
              >
                Intersection of Race and Gender
              </Link>
            </div>
            <div className={styles.middle2}></div>
            <div className={styles.accentcardR4}>
              <Link
                href="https://www.reddit.com/r/MensRights/search/?q=reproductive%20rights"
                className={styles.title}
                target="_blank"
              >
                Reproductive Rights
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.spacing}>
          <div className={styles.card}>
            <h2 className={styles.title}>
              Reference Book of Men&apos;s Issues (RBOMI)
            </h2>
            <p>
              The subreddit is also associated with a page called{" "}
              <Link
                href="https://www.reddit.com/r/rbomi/wiki/main/"
                className={styles.intextLink}
                target="_blank"
              >
                r/rbomi
              </Link>{" "}
              or the &quot;Reference Book of Men&apos;s Issues&quot; (RBOMI)
            </p>
            <p>
              This page is a catalog of all the issues men experience in
              society. It&apos;s supposed to shed light on why the Men&apos;s
              Rights Movement is necessary in western society.
            </p>
          </div>
        </div>
        <div className={styles.spacing}>
          <div className={styles.multipleC}>
            <div className={styles.accentcardR2}>
              <h2 className={styles.title}>Moderators</h2>
              <p className={styles.decorativep}>
                Subreddit moderators (or mods) are expected to uphold
                Reddit&apos;s Content Policy by setting community rules, norms,
                and expectations that encourage positive engagement. The
                moderators of r/Men&apos;sRights and the amount of time
                they&apos;ve been moderators are listed below:
              </p>
              <ul className={styles.lists}>
                <li>
                  <p>
                    rMensRights (<i>11 years</i>)
                  </p>
                </li>
                <li>
                  <p>
                    AnnArchist (<i>8 years</i>)
                  </p>
                </li>
                <li>
                  <p>
                    AloysiusC (<i>8 years</i>)
                  </p>
                </li>
                <li>
                  <p>
                    typhonblue (<i>8 years</i>)
                  </p>
                </li>
                <li>
                  <p>
                    mensmod (<i>6 years</i>)
                  </p>
                </li>
                <li>
                  <p>
                    goodmod (<i>5 years</i>)
                  </p>
                </li>
                <li>
                  <p>
                    iainmf (<i>5 years</i>)
                  </p>
                </li>
                <li>
                  <p>
                    nicemod (<i>3 years</i>)
                  </p>
                </li>
                <li>
                  <p>
                    genobean (<i>3 years</i>)
                  </p>
                </li>
                <li>
                  <p>
                    shit-zen-giggles (<i>4 months</i>)
                  </p>
                </li>
              </ul>
            </div>
            <div className={styles.middle}></div>
            <div className={styles.personalCard2}>
              <h4 className={styles.title}>Personal Note:</h4>
              <hr className={styles.prLine} />
              <br />
              <p>
                Each moderator (minus two exceptions) is pretty active on the
                subreddit. They make their own posts, respond to comments, etc.
                to uphold the rules of the page.
              </p>
              <br />
              <p>
                The first exception is <strong>u/rMensRights</strong>. This user
                has been a moderator for the longest time period but has never
                posted, commented, or interacted in any other way with those in
                the subreddit.
              </p>
              <br />
              <p>
                The second exception is <strong>u/nicemod</strong>. While this
                user became a moderator three years ago, they only were active a
                few months before stopping engagement altogether. They have not
                interacted with the subreddit in almost 3 years.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
