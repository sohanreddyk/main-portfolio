import TypewriterEffect from "../utils/TypewriterEffect"

export default function LandingScreen(props) {
  const openLinkInNewTab = props.openLinkInNewTab;
  const socialMedia = props.socialMedia;

  return (
    <section className="landingScreen jnUoFC" id="me">
      <div className="hi">
        <h1>Hi, my name is</h1>
      </div>
      <div>
        <h2 className="big-heading">Sohan Reddy</h2>
      </div>
      <div>
        <h3 className="big-heading ibuildt">
          <TypewriterEffect text="Building precise, engaging, and accessible digital interfaces" speed={50} pauseFor={5000} />
        </h3>
      </div>
      <div className="breifIntro">
        I’m a builder of intelligent systems and AI-powered tools that make 
        tech feel like magic. I enginer scalable apps, AI-driven features, and vector-powered APIs, deploying production-grade
          systems to Azure and Vercel. I love transforming raw ideas into 
          seamless user experiences—whether through NLP, LLMs, or predictive 
          models. I thrive at the intersection of cutting-edge research and 
          real-world impact, always pushing the boundaries of what intelligent 
          software can do.
           
      </div>
      <div className="contactMe-1-cont">
        <button
          className="contactMe-1 contactMe-2"
          onClick={(e) =>
            openLinkInNewTab(
           "https://drive.google.com/file/d/1REkzTRKH-JkTBgcFqyr8Ir_v9wRIJ9cX/view?usp=sharing"
          )
          }
        >
          Resume
        </button>
        <button
          className="contactMe-1"
          onClick={(e) => openLinkInNewTab(socialMedia.mySocials.github)}
        >
          <i className="fa fa-github mr-2"></i>
          Github
        </button>
      </div>
    </section>
  );
}
