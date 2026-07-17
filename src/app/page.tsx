import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  CalendarDays,
  Check,
  Clock3,
  Compass,
  HandHeart,
  HeartHandshake,
  MapPin,
  Quote,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { priorities } from "@/data/priorities";
import { faqs } from "@/data/faqs";
import { updates } from "@/data/updates";
import { withBasePath } from "@/lib/utils";

const programmeImages = [
  withBasePath("/images/aj-foundation/programme-rehabilitation.webp"),
  withBasePath("/images/aj-foundation/programme-engagement.webp"),
  withBasePath("/images/aj-foundation/programme-employability.webp"),
];

const events = [
  {
    title: "Volunteer orientation session",
    body: "An introduction for volunteers interested in skills training, mentoring, and programme coordination.",
    image: withBasePath("/images/aj-foundation/event-orientation.webp"),
    date: "Dates announced soon",
    time: "Registration open",
    location: "Venue to be confirmed",
  },
  {
    title: "Skills for rehabilitation workshop",
    body: "A focused workshop on structured skills training, employability, and reintegration.",
    image: withBasePath("/images/aj-foundation/event-workshop.webp"),
    date: "Dates announced soon",
    time: "Registration open",
    location: "Venue to be confirmed",
  },
];

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <p className={`eyebrow ${light ? "eyebrow-light" : ""}`}>{children}</p>;
}

function ActionLink({ href, children, light = false }: { href: string; children: React.ReactNode; light?: boolean }) {
  return (
    <Link className={`action-link ${light ? "action-link-light" : ""}`} href={href}>
      <span>{children}</span>
      <span className="action-icon"><ArrowUpRight size={18} /></span>
    </Link>
  );
}

export default function Home() {
  return (
    <>
      <section id="home" className="hero-section">
        <Image className="hero-bg" src={withBasePath("/images/aj-foundation/hero-background.webp")} alt="A community solidarity gathering" fill priority sizes="100vw" />
        <div className="hero-shade" />
        <Image className="hero-candidate" src={withBasePath("/images/aj-foundation/founder.webp")} alt="AJ Foundation founder speaking at a podium" width={1126} height={1397} priority />
        <div className="site-shell hero-content">
          <Eyebrow light>People deserve a second chance.</Eyebrow>
          <h1>Building skills.<br />Restoring purpose.</h1>
          <p className="hero-copy">
            Supporting rehabilitation through structured skills, constructive engagement,
            employability training, and readiness for life beyond prison.
          </p>
          <div className="hero-actions">
            <ActionLink href="#contact" light>Support now</ActionLink>
            <ActionLink href="#programmes">Learn more</ActionLink>
          </div>
          <div className="hero-support">
            <div className="avatar-stack">
              {["supporter-01.webp", "supporter-02.webp", "supporter-03.webp", "supporter-04.webp"].map((image) => (
                <Image key={image} src={withBasePath(`/images/aj-foundation/${image}`)} alt="AJ Foundation supporter" width={54} height={54} />
              ))}
            </div>
            <div><strong>1,000+ lives</strong><span>JOIN THE MISSION</span></div>
          </div>
          <p className="hero-footline">Committed to dignity, driven by change.</p>
        </div>
      </section>

      <section id="about" className="section section-white">
        <div className="site-shell">
          <div className="section-intro centered">
            <Eyebrow>About AJ Foundation</Eyebrow>
            <h2>Serving people with integrity and purpose</h2>
            <p>We create meaningful opportunities for people within prison systems while working respectfully with institutions that believe rehabilitation can build safer, stronger communities.</p>
          </div>
          <div className="about-grid">
            <figure className="portrait-card portrait-tall">
              <Image src={withBasePath("/images/aj-foundation/about-speaker.webp")} alt="A facilitator leading a communication skills session" fill sizes="(max-width: 768px) 100vw, 30vw" />
            </figure>
            <div className="about-center">
              <div className="about-stat"><strong>5</strong><span>core programme pillars</span></div>
              <div className="about-stat"><strong>1,000+</strong><span>lives reached</span></div>
              <p>Our work is focused, practical, and built around one clear purpose: helping individuals prepare for a responsible life beyond prison.</p>
              <ActionLink href="#programmes" light>About us</ActionLink>
            </div>
            <figure className="portrait-card portrait-offset">
              <Image src={withBasePath("/images/aj-foundation/about-collaboration.webp")} alt="Programme stakeholders planning together" fill sizes="(max-width: 768px) 100vw, 30vw" />
            </figure>
          </div>
        </div>
      </section>

      <section id="programmes" className="section section-warm">
        <div className="site-shell">
          <div className="section-row">
            <div className="section-intro">
              <Eyebrow>Our programmes</Eyebrow>
              <h2>Priorities for a stronger future</h2>
            </div>
            <ActionLink href="#contact" light>Partner with us</ActionLink>
          </div>
          <div className="programme-grid">
            {priorities.slice(0, 3).map((item, index) => (
              <article className="programme-card" key={item.slug}>
                <div className="programme-image">
                  <Image src={programmeImages[index]} alt="" fill sizes="(max-width: 768px) 100vw, 33vw" />
                  <span>0{index + 1}</span>
                </div>
                <div className="programme-body">
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                  <Link href="#contact" aria-label={`Learn about ${item.title}`}><ArrowUpRight /></Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="impact" className="section trust-section">
        <div className="site-shell">
          <div className="section-row trust-heading">
            <div className="section-intro">
              <Eyebrow light>Why people trust our movement</Eyebrow>
              <h2>Rehabilitation built on structure, consistency, and trust</h2>
            </div>
            <ActionLink href="#contact" light>Get in touch</ActionLink>
          </div>
          <div className="trust-grid">
            <article className="trust-card blue-card">
              <HeartHandshake />
              <div><h3>People-first support</h3><p>Every programme is designed around dignity, responsibility, and practical outcomes.</p></div>
            </article>
            <figure className="trust-photo wide-photo"><Image src={withBasePath("/images/aj-foundation/trust-volunteer.webp")} alt="A mentor supporting a vocational training session" fill sizes="50vw" /></figure>
            <figure className="trust-photo"><Image src={withBasePath("/images/aj-foundation/trust-partnership.webp")} alt="An institutional programme review meeting" fill sizes="33vw" /></figure>
            <article className="trust-card light-card">
              <ShieldCheck />
              <div><h3>Institution-ready</h3><p>Transparent, safe, and reliable programmes built to work within institutional realities.</p></div>
            </article>
            <article className="trust-card dark-card wide-card">
              <Compass />
              <div><h3>Focused on real results</h3><p>From self-belief and employability to documentation awareness and post-release readiness.</p></div>
              <ActionLink href="#contact">Join our mission</ActionLink>
            </article>
          </div>
        </div>
      </section>

      <section id="events" className="section section-white">
        <div className="site-shell">
          <div className="section-intro centered">
            <Eyebrow>Join our events</Eyebrow>
            <h2>Upcoming events and community sessions</h2>
          </div>
          <div className="event-list">
            {events.map((event, index) => (
              <article className="event-card" key={event.title}>
                <div className="event-image"><Image src={event.image} alt="Community event" fill sizes="(max-width: 800px) 100vw, 42vw" /></div>
                <div className="event-content">
                  <span className="event-number">0{index + 1}</span>
                  <h3>{event.title}</h3>
                  <p>{event.body}</p>
                  <ul>
                    <li><CalendarDays /> <span><small>Date</small>{event.date}</span></li>
                    <li><Clock3 /> <span><small>Time</small>{event.time}</span></li>
                    <li><MapPin /> <span><small>Location</small>{event.location}</span></li>
                  </ul>
                  <ActionLink href="#contact" light>Event details</ActionLink>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section testimonial-section">
        <div className="site-shell">
          <div className="section-intro centered light-copy">
            <Eyebrow light>Testimonials</Eyebrow>
            <h2>What partners and supporters say</h2>
          </div>
          <div className="testimonial-stage">
            <Quote className="quote-mark" />
            <blockquote>“A practical approach to rehabilitation—focused, respectful, and built with a clear purpose.”</blockquote>
            <div className="testimonial-person">
              <div className="testimonial-avatar"><Image src={withBasePath("/images/aj-foundation/testimonial-partner.webp")} alt="Programme partner" fill sizes="72px" /></div>
              <div><strong>Programme partner</strong><span>Institutional stakeholder</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-warm highlights-section">
        <div className="site-shell">
          <div className="section-row">
            <div className="section-intro"><Eyebrow>In the field</Eyebrow><h2>Highlights from our programmes</h2></div>
            <p className="section-sidecopy">Practical learning, institutional collaboration, and community participation in action.</p>
          </div>
          <div className="highlight-grid">
            <figure className="highlight-a"><Image src={withBasePath("/images/aj-foundation/highlight-main.webp")} alt="A practical vocational skills programme in progress" fill sizes="60vw" /></figure>
            <figure className="highlight-b"><Image src={withBasePath("/images/aj-foundation/highlight-skills.webp")} alt="Learners reviewing work-readiness materials" fill sizes="40vw" /></figure>
            <figure><Image src={withBasePath("/images/aj-foundation/highlight-community.webp")} alt="A community group discussion" fill sizes="20vw" /></figure>
            <figure><Image src={withBasePath("/images/aj-foundation/highlight-institutional.webp")} alt="Stakeholders reviewing programme plans" fill sizes="20vw" /></figure>
          </div>
        </div>
      </section>

      <section id="donate" className="section donation-section">
        <Image src={withBasePath("/images/aj-foundation/donation-background.webp")} alt="" fill className="donation-bg" sizes="100vw" />
        <div className="donation-overlay" />
        <div className="site-shell donation-inner">
          <div className="donation-copy"><Eyebrow light>Support the mission</Eyebrow><h2>Your support can help build a path from custody to capability.</h2></div>
          <div className="donation-card">
            <HandHeart />
            <strong>Every contribution matters</strong>
            <p>Donations help fund training resources, programme materials, volunteer coordination, and participant readiness support.</p>
            <ActionLink href="#contact" light>Donate now</ActionLink>
          </div>
        </div>
      </section>

      <section className="section section-white faq-section">
        <div className="site-shell faq-grid">
          <div className="faq-intro">
            <Eyebrow>FAQs</Eyebrow>
            <h2>Common questions from supporters</h2>
            <div className="question-box"><Sparkles /><h3>Still have a question?</h3><p>Reach out and our team will get back to you directly.</p><ActionLink href="#contact" light>Ask us</ActionLink></div>
          </div>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <details key={faq.question} open={index === 0}>
                <summary><span>{String(index + 1).padStart(2, "0")}. {faq.question}</span><span className="faq-plus">+</span></summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="updates" className="section section-warm">
        <div className="site-shell">
          <div className="section-row">
            <div className="section-intro"><Eyebrow>Updates & insights</Eyebrow><h2>Stories, learnings, and field updates</h2></div>
            <ActionLink href="#contact" light>More news</ActionLink>
          </div>
          <div className="news-grid">
            {updates.map((post, index) => (
              <article className="news-card" key={post.slug}>
                <div className="news-image"><Image src={[withBasePath("/images/aj-foundation/news-skills-rehabilitation.webp"), withBasePath("/images/aj-foundation/news-work-readiness.webp"), withBasePath("/images/aj-foundation/news-institutional-trust.webp")][index]} alt="" fill sizes="(max-width: 768px) 100vw, 33vw" /><span>{post.category}</span></div>
                <div className="news-body"><small>AJ FOUNDATION · FIELD NOTE</small><h3>{post.title}</h3><p>{post.excerpt}</p><Link href="#contact"><ArrowUpRight /></Link></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="join-section">
        <div className="site-shell join-inner">
          <Eyebrow light>Work with us</Eyebrow>
          <h2>Join the mission today for progress.</h2>
          <p>Institutions, volunteers, trainers, employers, donors, and partners all have a role in building practical pathways for reintegration.</p>
          <ActionLink href="mailto:info@ajfoundation.org" light>Join the mission</ActionLink>
          <div className="join-points">
            {["Volunteer", "Partner", "Train", "Support"].map((point) => <span key={point}><Check />{point}</span>)}
          </div>
        </div>
      </section>
    </>
  );
}
