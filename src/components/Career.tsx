import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer</h4>
                <h5>Arisecraft Technology Pvt Ltd</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Outsourced developer for the NidhiGold (MHFSL) project. Developed and maintained 50+ scalable RESTful APIs utilizing Core Java, J2EE, and Spring Boot. Managed cloud infrastructure and automated deployment processes on AWS.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Developer</h4>
                <h5>Novelty-data Solutions LLP</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Architected and maintained scalable backend services utilizing .NET Core and MySQL. Integrated responsive frontend components with React and Bootstrap while optimizing server-side performance to reduce API latency.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Graduate Engineer Trainee</h4>
                <h5>LTIMindtree</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Completed the Ignite Program with high proficiency in Core Java, Spring Boot, and Microservices. Gained hands-on experience in enterprise backend engineering and scalable system design.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineering Intern</h4>
                <h5>Arisecraft Technology Pvt Ltd</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Developed core backend modules for an Employee Management System and integrated ERP modules for commercial printing applications, optimizing inventory and billing workflows.
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Career;