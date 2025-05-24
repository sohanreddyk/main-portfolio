export default function Footer({ socialMedia }) {
  const mySocials = socialMedia.mySocials;
  return (
    <>
      <section className="mainFooter">
        <div className="footerSocialsTitle text-center">Other Links</div>
        <div className="flex flex-wrap footerLinkList">
          {Object.entries(mySocials).map(
  ([socialMediaName, link], index) =>
    socialMediaName !== "email" &&
    socialMediaName !== "email_link" &&
    socialMediaName !== "tiktok" && ( // Add this line
      <div key={index}>
        <a href={link} target="_blank" rel="noopener noreferrer">
          {socialMediaName.charAt(0).toUpperCase() +
            socialMediaName.slice(1)}
        </a>
      </div>
    )
)}
        </div>
      </section>
      <section className="footer jnUoFC">
        Designed by{" "}
        <a
          href={socialMedia.originalCreatorBchiang}
          target="_blank"
          className="designNdInspiredByLink"
        >

        </a>{" "}
        {" "}
        <a
          href={socialMedia.mySocials.github}
          target="_blank"
          className="designNdInspiredByLink"
        >
          Sohan Reddy <i className="fa fa-external-link fj93j9r"></i>
        </a>
      </section>
      <section className="text-center mt-2 mb-15">
        &copy; Sohan Reddy - 2025
      </section>
    </>
  );
}
