export type UpdateSection = {
  heading: string;
  paragraphs: readonly string[];
};

export type UpdatePost = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  date: string;
  readingTime: string;
  intro: string;
  takeaways: readonly string[];
  sections: readonly UpdateSection[];
  quote: string;
};

export const updates = [
  {
    slug: "why-skills-training-matters-in-prison-rehabilitation",
    category: "Rehabilitation",
    title: "Why Skills Training Matters in Prison Rehabilitation",
    excerpt:
      "Skills training can help individuals build discipline, confidence, and practical readiness for life after release.",
    image: "/images/aj-foundation/news-skills-rehabilitation.webp",
    imageAlt: "A facilitated rehabilitation group discussing practical skills",
    date: "17 July 2026",
    readingTime: "7 min read",
    intro:
      "Rehabilitation becomes meaningful when people have repeated opportunities to practise responsibility, solve problems, and see evidence of their own progress. Well-designed skills training creates that structure.",
    takeaways: [
      "Practical learning can turn time into visible, measurable progress.",
      "Transferable habits matter as much as any individual technical skill.",
      "Training is strongest when it connects custody, release planning, and community support.",
    ],
    sections: [
      {
        heading: "Rehabilitation needs a practical rhythm",
        paragraphs: [
          "Rehabilitation is not a single workshop or a motivational speech. It is a gradual process of replacing unhelpful patterns with more constructive ones. A regular training schedule gives participants a reason to prepare, arrive, contribute, complete a task, and return to improve it. Those actions may appear ordinary, but together they form the rhythm of responsibility.",
          "A credible programme therefore treats consistency as part of the curriculum. Attendance, care for materials, listening to peers, meeting a deadline, and asking for help are not side effects of training. They are behaviours that support safer decision-making and more stable participation in family, work, and community life.",
        ],
      },
      {
        heading: "Capability changes the story a person can tell",
        paragraphs: [
          "Many people in custody have experienced interrupted education, unstable employment, or long periods in which their abilities were defined by failure. Completing a practical task offers a different form of evidence: a finished piece of work, a demonstrated technique, a solved problem, or a certificate earned through sustained effort.",
          "That evidence matters because confidence is most durable when it is attached to capability. A participant who can explain what they learned, demonstrate it, and identify what they need to practise next has a stronger foundation than someone who has only been told to feel hopeful.",
        ],
      },
      {
        heading: "The most valuable skills travel across settings",
        paragraphs: [
          "Vocational knowledge is important, but the value of training should not depend on one specific job remaining available. Communication, numeracy, digital familiarity, teamwork, planning, and safe working habits travel across occupations. They also support daily responsibilities such as managing appointments, understanding documents, and communicating with institutions.",
          "AJ Foundation favours learning experiences that combine a practical task with these transferable habits. The aim is not simply to complete an activity inside a classroom. It is to help a participant recognise how the same discipline can be used in an interview, a workplace, a household, or a community setting.",
        ],
      },
      {
        heading: "Progress should be visible and supported",
        paragraphs: [
          "Good programmes use clear starting points, achievable milestones, and constructive feedback. Participants should know what competence looks like and be able to describe their progress in plain language. Facilitators, in turn, need a reliable way to record participation without reducing a person to a score.",
          "The transition beyond custody is where that record becomes most useful. Training information can inform release planning, referrals, further education, mentoring, and employer conversations. When institutions and community partners share a coherent view of the participant's strengths and next steps, learning is less likely to end at the prison gate.",
        ],
      },
    ],
    quote:
      "A skill is more than a task completed. It is proof that disciplined effort can produce a different outcome.",
  },
  {
    slug: "preparing-for-work-after-release",
    category: "Employability",
    title: "Preparing for Work After Release",
    excerpt:
      "Employability support is not just about jobs. It is about confidence, communication, responsibility, and readiness.",
    image: "/images/aj-foundation/news-work-readiness.webp",
    imageAlt: "Participants and a facilitator reviewing work-readiness plans",
    date: "17 July 2026",
    readingTime: "8 min read",
    intro:
      "A job can provide income, routine, identity, and connection. But sustainable employment after release requires more than a vacancy: it requires preparation on both sides of the workplace door.",
    takeaways: [
      "Work readiness begins with routines, communication, and realistic expectations.",
      "Documentation and digital access can be as decisive as vocational ability.",
      "Employers need practical support to offer fair, informed opportunities.",
    ],
    sections: [
      {
        heading: "Employment readiness starts before the application",
        paragraphs: [
          "The visible part of a job search is the application or interview. The less visible work begins earlier: establishing a daily routine, identifying strengths, discussing gaps honestly, understanding workplace expectations, and learning how to respond when something goes wrong.",
          "People leaving custody may also face immediate pressure around housing, family relationships, transport, health, and finances. An employability plan that ignores those realities can quickly become another source of frustration. Preparation should connect career goals with the practical conditions required to sustain them.",
        ],
      },
      {
        heading: "Confidence should be specific, not abstract",
        paragraphs: [
          "Telling someone to be confident is rarely enough. Confidence grows when a person can name their abilities, give examples, practise difficult conversations, and receive useful feedback. Mock interviews, short presentations, group problem-solving, and written reflection make improvement observable.",
          "This approach also helps participants speak about accountability without being trapped by their past. A strong interview response does not avoid responsibility, nor does it turn a person's history into their only identity. It connects learning, change, and present capability in language an employer can understand.",
        ],
      },
      {
        heading: "Administrative readiness is employment readiness",
        paragraphs: [
          "A capable candidate can still be excluded by missing identity documents, limited access to a phone or email, unfamiliarity with online forms, or uncertainty about disclosure requirements. These barriers are often treated as separate from employability, even though they directly determine whether a person can complete recruitment and onboarding.",
          "Work-readiness support should therefore include a practical checklist: identification, bank access, contact details, transport planning, digital basics, references, qualifications, and any role-specific requirements. Resolving these items early protects momentum at a point when delays can be especially discouraging.",
        ],
      },
      {
        heading: "Retention deserves as much attention as recruitment",
        paragraphs: [
          "The first weeks of work can introduce unfamiliar pressures: new routines, workplace culture, feedback, fatigue, and the fear that one mistake will end the opportunity. A short period of mentoring or check-ins can help an employee interpret challenges before they become crises.",
          "Employers also benefit from a clear contact, realistic guidance, and an agreed way to raise concerns. This is not about lowering standards. It is about making expectations explicit and responding early. When preparation and support are shared, employment can become a stable platform for reintegration rather than a fragile test.",
        ],
      },
    ],
    quote:
      "The goal is not simply to help someone secure a first day at work. It is to help them build the readiness to return on the second, the twentieth, and the two-hundredth.",
  },
  {
    slug: "building-rehabilitation-programmes-prison-systems-can-trust",
    category: "Institutional Trust",
    title: "Building Rehabilitation Programmes That Prison Systems Can Trust",
    excerpt:
      "Long-term rehabilitation work depends on transparency, safety, consistency, and respectful collaboration with institutions.",
    image: "/images/aj-foundation/news-institutional-trust.webp",
    imageAlt: "Institutional partners reviewing programme information together",
    date: "17 July 2026",
    readingTime: "7 min read",
    intro:
      "Rehabilitation programmes operate inside environments where safety, accountability, and operational discipline are essential. Trust is earned when a programme respects those realities and delivers consistently within them.",
    takeaways: [
      "Reliability is demonstrated through preparation, safeguarding, and consistent delivery.",
      "Useful reporting combines participation data with responsible qualitative insight.",
      "Programmes become sustainable when they are designed with institutions, not simply delivered to them.",
    ],
    sections: [
      {
        heading: "Good intentions are only the starting point",
        paragraphs: [
          "Organisations may arrive with energy, expertise, and a compelling idea. Institutions still need to know who will deliver the programme, how participants and information will be safeguarded, what materials will enter the facility, how disruptions will be handled, and what evidence will be provided afterward.",
          "Answering these questions is not bureaucracy around the work; it is part of the work. Clear procedures protect participants, staff, facilitators, and the integrity of the programme itself. They also create the confidence required for an institution to make space for delivery within a demanding operational environment.",
        ],
      },
      {
        heading: "Consistency is a form of respect",
        paragraphs: [
          "A programme builds credibility by doing what it said it would do: arriving prepared, using approved materials, maintaining appropriate boundaries, recording attendance accurately, and communicating changes early. Small failures of reliability can place a disproportionate burden on institutional staff and weaken confidence in future activity.",
          "Consistency also matters to participants. When sessions begin and end predictably, facilitators follow through, and expectations remain clear, the programme models the same accountability it asks participants to develop.",
        ],
      },
      {
        heading: "Evidence should be useful, proportionate, and honest",
        paragraphs: [
          "Institutions need visibility into what a programme is achieving. Useful reporting begins with straightforward information: delivery completed, attendance, engagement, modules covered, progress against agreed outcomes, incidents, and next steps. Qualitative observations can add context, but they should not exaggerate what short-term activity can prove.",
          "AJ Foundation's approach is to distinguish outputs from outcomes. A completed workshop is an output. Improved readiness, sustained employment, or reduced risk are longer-term outcomes that require broader evidence and responsible interpretation. Honest reporting builds more trust than an impressive claim that cannot be supported.",
        ],
      },
      {
        heading: "Co-design creates programmes that can last",
        paragraphs: [
          "The strongest partnerships involve institutional teams early. Staff understand operational constraints, participant needs, existing services, and the practical reasons previous initiatives may have struggled. Their knowledge can shape scheduling, eligibility, referral, safeguarding, and progression routes before delivery begins.",
          "Co-design does not mean losing the programme's purpose. It means translating that purpose into a form that can operate safely and consistently. When both sides understand the model, responsibilities, and evidence, a pilot has a stronger chance of becoming a sustained pathway rather than a one-off event.",
        ],
      },
    ],
    quote:
      "Institutional trust is built quietly: through preparation, accurate reporting, reliable delivery, and respect for the people who make the work possible.",
  },
] as const satisfies readonly UpdatePost[];

export function getUpdate(slug: string) {
  return updates.find((post) => post.slug === slug);
}
