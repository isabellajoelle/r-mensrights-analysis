import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Language() {
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
            <Link href="/language" className={styles.active}>
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
          <h1 className={styles.title}>Language</h1>
        </div>
        <div className={styles.spacing}>
          <div className={styles.card}>
            <h2 className={styles.title}>
              What&apos;s the general tone of r/mensrights?
            </h2>
            <p>
              The discourse that goes on in this community is relatively casual.
              The posts and comments are more conversational than formal.
            </p>
            <p>
              It&apos;s pretty easy for people new to the community to jump in
              and understand the jargon. Most of the movement specific terms
              they use are self explanatory and they rest can be learned with a
              quick google search.
            </p>
          </div>
        </div>
        <div className={styles.spacing}>
          <h2 className={styles.title}>Gendered Concepts:</h2>
          <div className={styles.accentcardR3}>
            <p className={styles.definitionp}>
              <strong>Sexism</strong> =&gt; <i>(noun)</i> prejudice,
              stereotyping, or discrimination, typically against women, on the
              basis of sex
            </p>
          </div>
        </div>
        <div className={styles.spacing}>
          <div className={styles.accentcardR3}>
            <p className={styles.definitionp}>
              <strong>Gender Politics</strong> =&gt; <i>(noun)</i> debate about
              the assumed roles and relations of different genders
            </p>
          </div>
        </div>
        <div className={styles.spacing}>
          <div className={styles.accentcardR3}>
            <p className={styles.definitionp}>
              <strong>Gender Empathy Gap</strong> =&gt; <i>(noun)</i> the claim
              that people are likely to feel more empathy for one gender than
              another gender in a similar situation
            </p>
          </div>
        </div>
        <div className={styles.spacing}>
          <div className={styles.personalCard}>
            <h4 className={styles.title}>Personal Note:</h4>
            <hr className={styles.prLine} />
            <br />
            <p>
              The Gender Empathy Gap is usually used to describe the lack of
              empathy towards men in certain situations
            </p>
            <br />
          </div>
        </div>
        <div className={styles.spacing}>
          <div className={styles.accentcardR3}>
            <p className={styles.definitionp}>
              <strong>Gendercide</strong> =&gt; <i>(noun)</i> the systematic
              killing of members of a specific gender
            </p>
          </div>
        </div>
        <h2 className={styles.title}>Movement Definitions:</h2>
        <div className={styles.spacing}>
          <div className={styles.multipleC}>
            <div className={styles.accentcardR5}>
              <h3 className={styles.title_center}>Feminism</h3>
              <hr className={styles.rulesHr} />
              <br />
              <p className={styles.decorativep2}>
                the advocacy of women&apos;s rights on the basis of the equality
                of the sexes
              </p>
            </div>
            <div className={styles.middle2}></div>
            <div className={styles.accentcardR5}>
              <h3 className={styles.title_center}>MGTOW</h3>
              <hr className={styles.rulesHr} />
              <br />
              <p className={styles.decorativep2}>
                Men Going Their Own Way; an online social movement to combat
                feminism where &quot;men renounce interactions with women and
                seek to define and live out their masculinity on their own
                terms&quot;
              </p>
              <br />
            </div>
            <div className={styles.middle2}></div>
            <div className={styles.accentcardR5}>
              <h3 className={styles.title_center}>The Red Pill</h3>
              <hr className={styles.rulesHr} />
              <br />
              <p className={styles.decorativep2}>
                used to refer to a process by which a person&apos;s perspective
                is dramatically transformed, introducing them to a new and
                typically disturbing understanding of the true nature of a
                particular situation
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
              It&apos;s important to note that while these &quot;movements&quot;
              are frequently mentioned in the community, the community does not
              associate with them.
            </p>
            <br />
            <p>
              Also, the red pill is not technically a movement; however, the
              moderators of this subreddit list it as one.
            </p>
            <br />
          </div>
        </div>
        <div className={styles.spacing}>
          <div className={styles.card}>
            <h2 className={styles.title}>The Duality of Terms</h2>
            <p>
              This community uses alot of terms and concepts that are gendered
              based on whether you are referring to men or women.
            </p>
            <p>
              Users typically use the version referring to women. If they use
              the version referring to men, it is typically a complaint about
              the use of the word/phrase.
            </p>
          </div>
        </div>
        <h1 className={styles.title_center}>Gendered Terms:</h1>
        <div className={styles.spacing}>
          <div className={styles.multipleC}>
            <div className={styles.accentcardR2}>
              <h4 className={styles.title_center}>
                <i>(masculine)</i>
              </h4>
            </div>
            <div className={styles.middle2}></div>
            <div className={styles.accentcardR2}>
              <h4 className={styles.title_center}>
                <i>(feminine)</i>
              </h4>
            </div>
          </div>
        </div>
        <div className={styles.multipleC}>
          <div className={styles.dualdef}>
            <h3>Misandry</h3>
            <hr className={styles.rulesHr3}></hr>
            <br />
            <p>dislike of, contempt for, or ingrained prejudice against men</p>
            <p>(i.e. the male sex)</p>
          </div>
          <div className={styles.middle2}></div>
          <div className={styles.dualdef}>
            <h3>Misogyny</h3>
            <hr className={styles.rulesHr2}></hr>
            <br />
            <p>
              dislike of, contempt for, or ingrained prejudice against women
            </p>
            <p>(i.e. the female sex)</p>
          </div>
        </div>
        <br />
        <div className={styles.multipleC}>
          <div className={styles.dualdef}>
            <h3>Male Privilege</h3>
            <hr className={styles.rulesHr3}></hr>
            <br />
            <p>
              the system of advantages or rights that are available to men
              solely on the basis of their sex
            </p>
          </div>
          <div className={styles.middle2}></div>
          <div className={styles.dualdef}>
            <h3>Female Privilege</h3>
            <hr className={styles.rulesHr2}></hr>
            <br />
            <p>
              the system of advantages or rights that are available to women
              solely on the basis of their sex
            </p>
          </div>
        </div>
        <br />
        <div className={styles.multipleC}>
          <div className={styles.dualdef}>
            <h3>Incel</h3>
            <hr className={styles.rulesHr3}></hr>
            <br />
            <p>
              a member of an online community of young men who consider
              themselves unable to attract women sexually, typically associated
              with views that are hostile toward women and men who are sexually
              active
            </p>
          </div>
          <div className={styles.middle2}></div>
          <div className={styles.dualdef}>
            <h3>Femcel</h3>
            <hr className={styles.rulesHr2}></hr>
            <br />
            <p>
              a woman, or feminine-identifying person, who is unable to succeed
              in their romantic and sexual life.
            </p>
          </div>
        </div>
        <div className={styles.spacing}>
          <div className={styles.personalCard}>
            <h4 className={styles.title}>Personal Note:</h4>
            <hr className={styles.prLine} />
            <br />
            <p>
              It&apos;s incredibly difficult to find a consistent definition for
              Femcel. In the subreddit, it was typically used to insult a woman
              and peg her as undesirable
            </p>
            <br />
          </div>
        </div>
        <div className={styles.multipleC}>
          <div className={styles.dualdef}>
            <h3>Mansplaining</h3>
            <hr className={styles.rulesHr3}></hr>
            <br />
            <p>
              the explanation of something by a man, typically to a woman, in a
              manner regarded as condescending or patronizing
            </p>
          </div>
          <div className={styles.middle2}></div>
          <div className={styles.dualdef}>
            <h3>Femsplaining</h3>
            <hr className={styles.rulesHr2}></hr>
            <br />
            <p>
              the explanation of feminist concepts, often to a man in a
              condescending and rude manner
            </p>
          </div>
        </div>
        <br />
        <div className={styles.multipleC}>
          <div className={styles.dualdef}>
            <h3>Toxic Masculinity</h3>
            <hr className={styles.rulesHr3}></hr>
            <br />
            <p>
              a set of attitudes and ways of behaving stereotypically associated
              with or expected of men, regarded as having a negative impact on
              men and on society as a whole
            </p>
          </div>
          <div className={styles.middle2}></div>
          <div className={styles.dualdef}>
            <h3>Toxic Femininity</h3>
            <hr className={styles.rulesHr2}></hr>
            <br />
            <p>
              the adherence to the gender binary in order to receive conditional
              value in patriarchal societies
            </p>
          </div>
        </div>
        <div className={styles.spacing}>
          <div className={styles.personalCard}>
            <h4 className={styles.title}>Personal Note:</h4>
            <hr className={styles.prLine} />
            <br />
            <p>
              Toxic Femininity is frequently brought up in conversation when
              Toxic Masculinity is referred to. Many users believe it is a
              double standard that men are the perpetrators of toxic masculinity
              and also viewed as the cause of toxic femininity
            </p>
            <br />
          </div>
        </div>
        <div className={styles.spacing}>
          <div className={styles.personalCard}>
            <h4 className={styles.title}>Personal Note:</h4>
            <hr className={styles.prLine} />
            <br />
            <p>
              Most of these words originally were only used by women, resulting
              in a large number of these phrases only being used{" "}
              <strong>on</strong> Men. Most of the masculine equivalents of
              these phrases I had never seen before joining this subreddit.
            </p>
            <br />
          </div>
        </div>
        <div className={styles.spacing}>
          <h2 className={styles.title}>
            Miscellaneous Frequently Used Words/Phrases:
          </h2>
          <div className={styles.accentcardR3}>
            <p className={styles.definitionp}>
              <strong>Prejudice</strong> =&gt; <i>(noun)</i> preconceived
              opinion that is not based on reason or actual experience.
            </p>
          </div>
        </div>
        <div className={styles.spacing}>
          <div className={styles.accentcardR3}>
            <p className={styles.definitionp}>
              <strong>Asexual</strong> =&gt; <i>(noun)</i> a person who
              experiences no sexual feelings or desires, or who is not sexually
              attracted to anyone.
            </p>
          </div>
        </div>
        <div className={styles.spacing}>
          <div className={styles.accentcardR3}>
            <p className={styles.definitionp}>
              <strong>Meta Rights</strong> =&gt; <i>(noun)</i> the entitlements
              of individuals to their rights, including the possibility to
              waive, transfer or sell their rights
            </p>
          </div>
        </div>
        <div className={styles.spacing}>
          <div className={styles.accentcardR3}>
            <p className={styles.definitionp}>
              <strong>Victim Complex</strong> =&gt; <i>(noun)</i> describes a
              personality trait of persons who believe they are constantly the
              victims of the harmful actions of others, even when made aware of
              evidence to the contrary
            </p>
          </div>
        </div>
        <div className={styles.spacing}>
          <div className={styles.accentcardR3}>
            <p className={styles.definitionp}>
              <strong>Egalitarianism</strong> =&gt; <i>(noun)</i> describes a
              personality trait of persons who believe they are constantly the
              victims of the harmful actions of others, even when made aware of
              evidence to the contrary
            </p>
          </div>
        </div>
        <div className={styles.spacing}>
          <div className={styles.card}>
            <h2 className={styles.title}>The Use of Swear Words</h2>
            <p>
              There&apos;s no sugar coating it - this community uses alot of
              foul language. Fuck, Bitch, Shit, Whore, Cunt ... you name it
              they&apos;ve said it at nauseam.
            </p>
            <p>
              This is likely due to the casual natural of the subreddit combined
              with the anger and passion that arises from users when discussing
              certain topics.
            </p>
          </div>
        </div>
        <h2 className={styles.title}>Top Three Swear Words:</h2>
        <div className={styles.multipleC}>
          <div className={styles.accentcardR2}>
            <p className={styles.definitionp}>
              <strong>Whore</strong> =&gt;
            </p>
            <p className={styles.definitionp}>
              a prostitute; a person who engages in sexual intercourse for pay
            </p>
            <br />
          </div>
          <div className={styles.middle}></div>
          <div className={styles.personalCard2}>
            <h4 className={styles.title}>Personal Note:</h4>
            <hr className={styles.prLine} />
            <br />
            <p>
              This word is generally used to describe women; in the context of
              them having sex/affairs/etc. and in the context of insulting them
              — a lot of these insults revolve around relationship issues
            </p>
            <br />
          </div>
        </div>
        <div className={styles.multipleC}>
          <div className={styles.accentcardR2}>
            <p className={styles.definitionp}>
              <strong>Bitch</strong> =&gt;
            </p>
            <p className={styles.definitionp}>
              <i>(verb)</i> express displeasure; grumble;
            </p>
            <p className={styles.definitionp}>
              {" "}
              <i>(noun)</i> informal + offensive — used as a generalized term of
              abuse and disparagement for a woman
            </p>
            <br />
          </div>
          <div className={styles.middle}></div>
          <div className={styles.personalCard2}>
            <h4 className={styles.title}>Personal Note:</h4>
            <hr className={styles.prLine} />
            <br />
            <p>
              This word is often combined with different suffixes and used as
              insults, verbs, etc. It&apos;s used to reference both men and
              women and their actions.
            </p>
            <br />
          </div>
        </div>
        <div className={styles.multipleC}>
          <div className={styles.accentcardR2}>
            <p className={styles.definitionp}>
              <strong>Bullshit</strong> =&gt;
            </p>
            <p className={styles.definitionp}>
              {" "}
              <i>(noun)</i> nonsense
            </p>
            <p className={styles.definitionp}>
              {" "}
              <i>(noun)</i> informal + vulgar — to talk nonsense to especially
              withe the intention of deceiving or misleading
            </p>
            <br />
          </div>
          <div className={styles.middle}></div>
          <div className={styles.personalCard2}>
            <h4 className={styles.title}>Personal Note:</h4>
            <hr className={styles.prLine} />
            <br />
            <p>
              Nothing special about how this word is used in this subreddit.
              It&apos;s used similarly to how it would be used in any other
              context
            </p>
            <br />
          </div>
        </div>
      </main>
    </>
  );
}
