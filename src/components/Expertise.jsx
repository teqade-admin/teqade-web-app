export default function Expertise() {
  return (
    <section id="expertise">
      <div className="expertise-header">
        <h1>Our Expertise</h1>
        <p>Comprehensive technology solutions for modern businesses.</p>
      </div>

      <div className="expertise-grid">
        <div className="expertise-card">
          <img src="walle.jpg" alt="AI" />
          <div className="expertise-content">
            <h3 className="expertise-title">Artificial Intelligence</h3>
            <p className="expertise-description">
              We help organizations develop comprehensive AI strategies that align with business objectives and deliver measurable ROI.
            </p>
            {/* <a href="#" className="explore-btn">Explore</a> */}
          </div>
        </div>

        <div className="expertise-card">
          <img src="cloud.jpg" alt="Cloud" />
          <div className="expertise-content">
            <h3 className="expertise-title">Cloud</h3>
            <p className="expertise-description">
              Our cloud solutions enable scalable infrastructure, secure data storage, and flexible deployment options for businesses of all sizes.
            </p>
            {/* <a href="#" className="explore-btn">Explore</a> */}
          </div>
        </div>

        <div className="expertise-card">
          <img src="data.jpg" alt="Data Engineering" />
          <div className="expertise-content">
            <h3 className="expertise-title">Data Engineering</h3>
            <p className="expertise-description">
              We design and implement robust data pipelines, warehousing solutions, and analytics platforms to transform raw data into actionable insights.
            </p>
            {/* <a href="#" className="explore-btn">Explore</a> */}
          </div>
        </div>

        <div className="expertise-card">
          <img src="iot.jpg" alt="IoT" />
          <div className="expertise-content">
            <h3 className="expertise-title">Internet of Things</h3>
            <p className="expertise-description">
              Our IoT expertise enables connected device ecosystems, sensor networks, and real-time monitoring systems for smart environments and processes.
            </p>
            {/* <a href="#" className="explore-btn">Explore</a> */}
          </div>
        </div>

        <div className="expertise-card">
          <img src="sd.jpg" alt="Software Development" />
          <div className="expertise-content">
            <h3 className="expertise-title">Software Development</h3>
            <p className="expertise-description">
              We create custom software solutions including web applications, mobile apps, and enterprise systems that solve complex business challenges.
            </p>
            {/* <a href="#" className="explore-btn">Explore</a> */}
          </div>
        </div>

        <div className="expertise-card">
          <img src="devops.jpg" alt="DevOps" />
          <div className="expertise-content">
            <h3 className="expertise-title">DevOps Solutions</h3>
            <p className="expertise-description">
              We implement DevOps practices, CI/CD pipelines, and infrastructure automation to accelerate software delivery and improve operational reliability.
            </p>
            {/* <a href="#" className="explore-btn">Explore</a> */}
          </div>
        </div>
      </div>

      {/* Industries Section */}
      <div className="advanced-section">
        <h2>Industries We Serve</h2>
        <div className="advanced-grid">
          <div className="advanced-card">
            <i className="fas fa-hospital fa-2x" style={{ marginBottom: "20px", color: "#ffffff" }}></i>
            <h3>Healthcare</h3>
            <p>
              Our technology solutions transform healthcare delivery and patient outcomes by leveraging AI, cloud, data engineering, and IoT to address the unique challenges of medical institutions and care providers.
            </p>
            {/* <a href="#" className="explore-btn">Learn More</a> */}
          </div>

          <div className="advanced-card">
            <i className="fas fa-landmark fa-2x" style={{ marginBottom: "20px", color: "#ffffff" }}></i>
            <h3>Financial Services</h3>
            <p>
              We help financial institutions navigate digital transformation with innovative technology solutions that enhance security, improve customer experiences, and optimize operations across all aspects of the business.
            </p>
            <a href="#" className="explore-btn">Learn More</a>
          </div>

          <div className="advanced-card">
            <i className="fas fa-industry fa-2x" style={{ marginBottom: "20px", color: "#ffffff" }}></i>
            <h3>Manufacturing</h3>
            <p>
              Our comprehensive technology approach enables manufacturing enterprises to modernize operations, increase efficiency, reduce costs, and develop innovative products in an increasingly competitive marketplace.
            </p>
            <a href="#" className="explore-btn">Learn More</a>
          </div>

          <div className="advanced-card">
            <i className="fas fa-truck fa-2x" style={{ marginBottom: "20px", color: "#ffffff" }}></i>
            <h3>Logistics</h3>
            <p>
              We empower logistics companies with technology solutions that streamline operations, enhance visibility, improve decision-making, and create more resilient and adaptive supply chain systems.
            </p>
            <a href="#" className="explore-btn">Learn More</a>
          </div>

          <div className="advanced-card">
            <i className="fas fa-shopping-cart fa-2x" style={{ marginBottom: "20px", color: "#ffffff" }}></i>
            <h3>Retail</h3>
            <p>
              Our solutions help retailers evolve with changing consumer behaviors by implementing technology that delivers personalized experiences, optimizes inventory, and creates seamless omnichannel journeys.
            </p>
            <a href="#" className="explore-btn">Learn More</a>
          </div>

          <div className="advanced-card">
            <i className="fas fa-car fa-2x" style={{ marginBottom: "20px", color: "#ffffff" }}></i>
            <h3>Automobile</h3>
            <p>
              We support automotive innovation with technology solutions that enhance vehicle performance, improve manufacturing processes, enable new features, and create more intelligent transportation systems.
            </p>
            <a href="#" className="explore-btn">Learn More</a>
          </div>

          <div className="advanced-card">
            <i className="fas fa-leaf fa-2x" style={{ marginBottom: "20px", color: "#ffffff" }}></i>
            <h3>Agriculture</h3>
            <p>
              Our technology solutions help agricultural businesses increase productivity, optimize resource utilization, improve sustainability, and make data-driven decisions for better crop and livestock management.
            </p>
            <a href="#" className="explore-btn">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  );
}
