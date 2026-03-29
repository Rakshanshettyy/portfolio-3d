import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };

  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          const clickHandler = () => handleClick(container);
          container.addEventListener("click", clickHandler);
          // Store cleanup function properly
          return () => container.removeEventListener("click", clickHandler);
        }
      });
    }
  }, []);

  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line x1="0" y1="0" x2="0" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="7,7" />
              <line x1="100%" y1="0" x2="100%" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="7,7" />
            </svg>
          </div>

          {/* FIRST BOX: BACKEND & MICROSERVICES */}
          <div className="what-content what-noTouch" ref={(el) => setRef(el, 0)}>
            <div className="what-border1">
              <svg height="100%">
                <line x1="0" y1="0" x2="100%" y2="0" stroke="white" strokeWidth="2" strokeDasharray="6,6" />
                <line x1="0" y1="100%" x2="100%" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="6,6" />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>BACKEND & ARCHITECTURE</h3>
              <h4>Scalable Enterprise Systems</h4>
              <p>
                Specializing in building robust backend ecosystems. I design and implement 
                Microservices architectures and RESTful APIs that handle high-concurrency 
                financial and operational data.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Core Java & J2EE</div>
                <div className="what-tags">Spring Boot</div>
                <div className="what-tags">Microservices</div>
                <div className="what-tags">RESTful APIs</div>
                <div className="what-tags">System Design</div>
                <div className="what-tags">Performance Tuning</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>

          {/* SECOND BOX: CLOUD & DEVOPS */}
          <div className="what-content what-noTouch" ref={(el) => setRef(el, 1)}>
            <div className="what-border1">
              <svg height="100%">
                <line x1="0" y1="100%" x2="100%" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="6,6" />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>CLOUD & DEPLOYMENT</h3>
              <h4>Reliable Infrastructure Management</h4>
              <p>
                Managing the full deployment lifecycle on AWS and GCP. I automate CI/CD pipelines 
                and optimize cloud infrastructure to ensure high availability and security for 
                enterprise-grade applications.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">AWS & GCP</div>
                <div className="what-tags">Docker</div>
                <div className="what-tags">MySQL & MongoDB</div>
                <div className="what-tags">CI/CD Pipelines</div>
                <div className="what-tags">Cloud Security</div>
                <div className="what-tags">Firebase</div>
                <div className="what-tags">Linux / Unix</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);
    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}