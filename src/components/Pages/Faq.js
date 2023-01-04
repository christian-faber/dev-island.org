import { NavBar } from "../NavBar";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const FAQS = [
  {
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
    question: <>How long is the course?</>,
    answer: <>The course will be 9 months part time.</>,
  },
  {
    question: <>What equipment will I need?</>,
    answer: (
      <>At this time computers have been donated for our students to use.</>
    ),
  },
  {
    question: <>What days will the class be held?</>,
    answer: <>Tuesday and Thursday 6-9 PM HST.</>,
  },
  {
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
    question: <>Is there any age limit?</>,
    answer: <>We welcome any age of adult learner.</>,
  },
  {
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
    question: <>How can I volunteer?</>,
    answer: (
      <>
        We would love for community members to volunteer. Please email{" "}
        <a href="mailto:danielle@dev-island.org">danielle@dev-island.org</a>.
      </>
    ),
  },
  {
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
      <section>
        <div className="border">
          <h1>Frequently Asked Questions</h1>
          <Accordion>
            {FAQS.map(({ question, answer }) => (
              <div className="border m-5">
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <div>
                        <h1 className="text-2xl">{question}</h1>
                        <i className="kipso-icon-plus-symbol"></i>
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>{answer}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              </div>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
};
