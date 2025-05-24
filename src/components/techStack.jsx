export default function TechStack(props) {
  const aiML = [
    { icon: <i className="fa fa-brain"></i>, name: "Machine Learning" },
    { icon: <i className="fa fa-network-wired"></i>, name: "Deep Learning" },
    { icon: <i className="fa fa-language"></i>, name: "NLP" },
    { icon: <i className="fa fa-comments"></i>, name: "Sentiment Analysis" },
    { icon: <i className="fa fa-image"></i>, name: "Image Classification" },
    { icon: <i className="fa fa-chart-line"></i>, name: "Prediction & Regression" },
    { icon: <i className="fa fa-cogs"></i>, name: "CNN" },
    { icon: <i className="fa fa-terminal"></i>, name: "Prompt Engineering" },
  ];

  const frameworks = [
    { icon: <i className="fa fa-code"></i>, name: "Scikit-Learn" },
    { icon: <i className="fa fa-table"></i>, name: "Pandas" },
    { icon: <i className="fa fa-cube"></i>, name: "LangChain" },
    { icon: <i className="fa fa-desktop"></i>, name: "Streamlit" },
    { icon: <i className="fab fa-react"></i>, name: "React" },
  ];

  const languages = [
    { icon: <i className="fab fa-python"></i>, name: "Python 3" },
    { icon: <i className="fas fa-database"></i>, name: "SQL" },
    { icon: <i className="fab fa-js"></i>, name: "JavaScript" },
    { icon: <i className="fab fa-java"></i>, name: "Java" },
    { icon: <i className="fab fa-cuttlefish"></i>, name: "C" },
    { icon: <i className="fas fa-code"></i>, name: "C++" },
    { icon: <i className="fab fa-apple"></i>, name: "Swift" },
  ];

  const devOps = [
    { icon: <i className="fas fa-cloud"></i>, name: "AWS" },
    { icon: <i className="fas fa-hdd"></i>, name: "S3" },
    { icon: <i className="fab fa-docker"></i>, name: "Docker" },
    { icon: <i className="fab fa-git"></i>, name: "Git" },
    { icon: <i className="fas fa-plug"></i>, name: "OpenAI API" },
  ];

  return (
    <>
      <section className="aboutMeScreen block jnUoFC" id="techstack">
        <div className="sectionTitle sTitle-cs-2">
          <div className="text-primary font-mono">{props.count}</div>
          <div className="font-mono">Tech Stack</div>
          <div className="horiLine">
            <div className="horiLineMain"></div>
          </div>
        </div>
        <div className="sectionBody techStackBody">
          {/* AI and ML */}
          <div className="techStackGroup">
            <div className="techStackTitle">AI and Machine Learning</div>
            <div className="flex techStack-container">
              {aiML.map((lng, index) => (
                <div key={index} className="flex techStack-item">
                  <div>{lng.icon}</div>
                  <div>{lng.name}</div>
                </div>
              ))}
            </div>
          </div>
          {/* Frameworks & Libraries */}
          <div className="techStackGroup">
            <div className="techStackTitle">Frameworks & Libraries</div>
            <div className="flex techStack-container">
              {frameworks.map((lng, index) => (
                <div key={index} className="flex techStack-item">
                  <div>{lng.icon}</div>
                  <div>{lng.name}</div>
                </div>
              ))}
            </div>
          </div>
          {/* Programming Languages */}
          <div className="techStackGroup">
            <div className="techStackTitle">Programming Languages</div>
            <div className="flex techStack-container">
              {languages.map((lng, index) => (
                <div key={index} className="flex techStack-item">
                  <div>{lng.icon}</div>
                  <div>{lng.name}</div>
                </div>
              ))}
            </div>
          </div>
          {/* Cloud & DevOps */}
          <div className="techStackGroup">
            <div className="techStackTitle">Cloud & DevOps</div>
            <div className="flex techStack-container">
              {devOps.map((lng, index) => (
                <div key={index} className="flex techStack-item">
                  <div>{lng.icon}</div>
                  <div>{lng.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
