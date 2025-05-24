export default function Education(props){
    return (
        <>
       <section className="aboutMeScreen block jnUoFC" id="education">
            <div className="sectionTitle">
                <div className="text-primary font-mono">{props.count}</div>
                <div className="font-mono">Education</div>
                <div className="horiLine">
                  <div className="horiLineMain"></div>
                </div>
              </div>
              <div className="sectionBody">
                <div>
                    <div className="educationItem">
                        <div className="educationTitle">Siddaganga Institute of Technology</div>
                        <div className="educationRole">Bachelors in Artificial Intelligence and Data Science</div>
                        {<div className="educationDate">2021 - Present</div>}
                    </div>
                        <div style={{ height: "24px" }}></div> {/* Add space between items */}
                    <div className="educationItem">
                        <div className="educationTitle">Northeastern University</div>
                        <div className="educationRole">Masters in Computer Science</div>
                        <div className="educationDate">2025 - 2027</div>
                    </div>
                </div>
             </div>
        </section>
        </>
    )
}