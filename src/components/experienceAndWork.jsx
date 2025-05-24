import { useState } from "react";
export default function ExperienceAndWork(props) {
  const [currentExp, setCurrentExp] = useState(0);
  const experiences = [
    {
      name: "Stack Lane",
      exp: (
        <>
          <div className="highlitedTabTitle">
            Software Engineer Intern @
            <a
              // href="#"
              style={{ marginLeft: "5px" }}
              className="text-primary"
            >
              Stack Lane
            </a>
          </div>
          <div className="highlitedTabSubTitle">March 2025 - June 2025</div>
          <div className="highlitedTabContent">
            <ul>
  <li>
    Built and deployed RESTful APIs using Node.js and the Hono framework, implementing secure authentication with JWT and integrating PostgreSQL via Prisma ORM.
  </li>
  <li>
    Developed scalable fullstack applications with modern frameworks like React.js, Next.js, and Tailwind CSS, integrating dynamic UI with robust backend systems.
  </li>
  <li>
    Automated CI/CD pipelines using GitHub Actions and containerized services with Docker, deploying to Microsoft Azure and Vercel for seamless production hosting.
  </li>
  <li>
    Engineered AI-integrated features using Retrieval-Augmented Generation (RAG), Pinecone vector databases, and Mistral LLM API for semantic search and intelligent responses.
  </li>
  <li>
    Leaded a 4-member team on the capstone project "Second Brain," contributing primarily to backend development, vector embedding, and API orchestration.
  </li>
  <li>
    Enhanced system observability by designing logging and monitoring components, ensuring high availability and debugging efficiency in live deployments.
  </li>
</ul>

          </div>
        </>
      ),
    }
  ];
  function updateCurrentExp(e) {
    setCurrentExp(e);
  }
  return (
    <section className="experienceANDwork jnUoFC" id="experienceANDwork">
      <div className="sectionTitle sTitle-cs-1">
        <div className="text-primary font-mono">{props.count}</div>
        <div className="font-mono">Where I’ve Worked</div>
        <div className="horiLine">
          <div className="horiLineMain"></div>
        </div>
      </div>
      <div className="dijdij398h8">
        Swipe/Scroll <i className="fa fa-angle-double-left"></i> left or right{" "}
        <i className="fa fa-angle-double-right"></i>
      </div>
      <div className="eAw">
        <div className="left">
          {experiences.map((experience, index) => (
            <div
              className={currentExp == index ? "active" : ""}
              onClick={() => updateCurrentExp(index)}
              key={index}
            >
              {experience.name}
            </div>
          ))}
        </div>
        <div className="right">
          <div>{experiences[currentExp].exp}</div>
        </div>
      </div>
    </section>
  );
}
