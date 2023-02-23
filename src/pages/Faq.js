import { FAQComponent } from "./FAQComponent";

const FAQS = [
  {
    number: 1,
    question: <>What is Dev-Island's Mission?</>,
    answer: (
      <>
        Our mission is to grow the next generation of Kaua'i software engineers.
        We set up Dev Island Inc. a 501(c)3 to develop technical talent to
        provide software development coding education.
      </>
    ),
  },
  {
    number: 2,
    question: <>How long is the course?</>,
    answer: <>The course will be 9 months part time.</>,
  },
  {
    number: 3,
    question: <>What equipment will I need?</>,
    answer: (
      <>At this time computers have been donated for our students to use.</>
    ),
  },
  {
    number: 4,
    question: <>What days will the class be held?</>,
    answer: <>Tuesday and Thursday 6-9 PM HST.</>,
  },
  {
    number: 5,
    question: <>What are the prerequisites for the course(s)?</>,
    answer: (
      <>
        Students do not need to have any prior coding experience. With that
        being said, each person should have the ability to use a computer (i.e.
        searching the web, creating a PowerPoint presentation etc.). During the
        selection process, students may be asked to complete entry level coding
        assignments as a way of gauging aptitude and interest level.
      </>
    ),
  },
  {
    number: 6,
    question: <>What will I learn?</>,
    answer: (
      <>
        Dev-Island is a pattern proven in technical talent growth models and
        developer boot camps. The developer boot camp model can rapidly grow
        software developers and cloud engineers in as little as five months
        full-time or nine months part-time, depending on the entry-level
        student. This program helps individuals learn the basics of HTML, CSS,
        web design, react development, and API development in Node.js. During
        the Bootcamp, students learn the step-by-step skills of a full-stack
        software step by step engineer. Our project-based learning (PBL) model
        engages students to support their learning each week, building up to the
        final project and job placement.
      </>
    ),
  },

  {
    number: 7,
    question: <>What jobs will I qualify for?</>,
    answer: (
      <>
        Students who complete the course will be able to qualify for entry level
        or junior software engineering jobs, that are looking for proficiency in
        JavaScript.
      </>
    ),
  },
  {
    number: 8,
    question: <>Where will classes be held?</>,
    answer: (
      <>
        At this time we are exploring in person options and locations. There may
        be elements of hybrid class options, but this is yet to be determined.
        Students will be expected to attend class twice a week on Tuesday and
        Thursday evenings. Each class will be approx. 3 hours long and will
        include classroom instruction where individuals can ask questions and
        work with other members of the respective cohort.
      </>
    ),
  },
  {
    number: 9,
    question: <>How much is tuition?</>,
    answer: (
      <>
        At this time there is no tuition fee, but students will be asked to sign
        a contract pledging their commitment to complete the course and also
        agreeing to complete a case study at the end of the program.
      </>
    ),
  },
  {
    number: 10,
    question: <>What is a cohort?</>,
    answer: (
      <>
        In this context a cohort is a group of students selected for the
        bootcamp. Our first cohort will include 5 students and we hope to have
        as many as 25 students in subsequent cohorts.
      </>
    ),
  },
  {
    number: 11,
    question: <>Is there any age limit?</>,
    answer: <>We welcome any age of adult learner.</>,
  },
  {
    number: 12,
    question: <>How long does the course last?</>,
    answer: (
      <>
        The course will be part-time and last for 9 months. It will begin with a
        kick-off meeting and conclude with a graduation ceremony at the end of 9
        months.
      </>
    ),
  },
  {
    number: 13,
    question: <>How does Dev-island support the native Hawaiian culture?</>,
    answer: (
      <>
        Our program focuses on culture preservation of Natice Hawaiian culture.
        Each student will complete a capstone project that includes elements of
        culture preservation and growing small businesses on Kaua'i.
      </>
    ),
  },
  {
    number: 14,
    question: <>What makes your program unique?</>,
    answer: (
      <>
        This is a Kaua'i focused bootcamp aiming at engaging and developing the
        next generation of software developers locally. We deeply care about
        individuals and families and want this to benefit all aspects of the
        community. We focus on mentorship, career development and readiness,
        along with personal and professional growth. It's more than just a
        bootcamp, its investment in people and our belief that knowledge can
        change the world. Our mission is to use technology to aid individuals
        looking for a fresh start, and we enable families and individuals to
        stay on the island and preserve their cultural heritage. We believe each
        student has enormous potential to become a software engineer and be at
        the forefront of innovation for their future employers. As individuals
        raise their knowledge and skills, individuals, families, and the Kaua'i
        community will benefit.
      </>
    ),
  },
  {
    number: 15,
    question: <>How can I sponsor a student?</>,
    answer: (
      <>
        Send an email to{" "}
        <a href="mailto:info@dev-island.org">info@dev-island.org</a> to learn
        more about sponsoring a student.
      </>
    ),
  },
  {
    number: 16,
    question: <>How is your program funded?</>,
    answer: (
      <>
        At this time the program is self funded by the leadership team. We also
        are applying for local grants. Donations are welcomed. Please email{" "}
        <a href="mailto:info@dev-island.org">info@dev-island.org</a> to find
        more about donating.
      </>
    ),
  },
  {
    number: 17,
    question: <>How can I volunteer?</>,
    answer: (
      <>
        We would love for community members to volunteer. Please email{" "}
        <a href="mailto:danielle@dev-island.org">danielle@dev-island.org</a>.
      </>
    ),
  },
  {
    number: 18,
    question: <>What does it take to be a mentor?</>,
    answer: (
      <>
        Mentors and coaches are needed. We seek one external mentor and coach
        for our students that will spend up to 5 hours a month with our
        candidates as they progress on their journey. We anticipate these
        mentoring relationships to last well beyond the students' enrollment.
        These coaches and mentors must be Kaua'i residents working on island or
        in a remote job and have a proven history of work in a technology field.
        The ideal mentor will be employed at one of the businesses we would
        target for our graduates that can be an advocate for the student as they
        complete the program. As candidates progress through the program they
        will become mentors of other students who are on a similar journey. This
        will help build a skillset and strengthen the technology community on
        Kaua'i. If you are interested in being a mentor please contact Danielle
        Steed at{" "}
        <a href="mailto:danielle@dev-island.org">danielle@dev-island.org</a> for
        mentor opportunities.
      </>
    ),
  },
];

export const Faq = () => {
  return (
    <>
      <div className="flex flex-col justify-center align-middle items-center bg-misty">
        <h1 className="py-4 text-3xl text-center text-coolgray font-bold border-b-2 drop-shadow-xl">
          Frequently Asked Questions
        </h1>
        {FAQS.map((faq) => (
          <FAQComponent
            key={faq.number}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </div>
    </>
  );
};
