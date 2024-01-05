import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import { FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./App.css";

const initialProjectsList = [
  {
    id: "1",
    projectName: "Match The Image",
    webLink: "https://matchgamegms.ccbp.tech/",
    description:
      "Match the thumbnail image with given below category tab images",
    imageUrl:
      "https://res.cloudinary.com/dodcgewnp/image/upload/v1704389084/vlkduyyyltle1oba6oka.png",
  },
];

class App extends Component {
  state = {
    projectsList: initialProjectsList,
    name: "",
    description: "",
    websiteLink: "",
    imageURL: "",
  };

  addProject = (event) => {
    const {
      projectsList,
      name,
      description,
      websiteLink,
      imageURL,
    } = this.state;
    const newProject = {
      id: uuidv4(),
      projectName: name,
      webLink: websiteLink,
      description: description,
      imageUrl: imageURL,
    };
    const newList = [...projectsList, newProject];
    this.setState({ projectsList: newList });
  };

  renderProjects = () => {
    const { projectsList } = this.state;
    return (
      <ul>
        {projectsList.map((each) => (
          <li key={each.id} className="card">
            <img
              src={each.imageUrl}
              alt={each.projectName}
              className="projectImage"
            />
            <div className="project-content">
              <h1>{each.projectName}</h1>
              <p>{each.description}</p>
              <a href={each.webLink}>
                <button type="button">View Project</button>
              </a>
            </div>
          </li>
        ))}
      </ul>
    );
  };

  onProjectName = (event) => {
    this.setState({ name: event.target.value });
  };

  onDescription = (event) => {
    this.setState({ description: event.target.value });
  };
  onLink = (event) => {
    this.setState({ websiteLink: event.target.value });
  };

  onThumbnail = (event) => {
    this.setState({ imageURL: event.target.value });
  };

  render() {
    return (
      <div className="bg-container">
        <div className="header">
          <div className="logo-section">
            <img
              src="https://bloggytalky.com/wp-content/uploads/2017/07/create-a-free-logo-design-logo-designs-design-a-free-logo-design-a-free-logo-alltech-just-free-logo-design.png"
              className="logo"
              alt="logo"
            />
            <h1>Mahesh Gootla</h1>
          </div>
          <ul className="header-menu">
            <a href="#about">
              <li>About</li>
            </a>
            <a href="#projects">
              <li>Projects</li>
            </a>
            <a href="#contacts">
              <li>Contacts</li>
            </a>
          </ul>
        </div>
        <div id="about">
          <h1 style={{ color: "gold", fontSize: "20px" }}>UI/UX DESIGNER</h1>
          <h1 className="about-heading">Hello, my name is Mahesh Gootla</h1>
          <p style={{ color: "#6e7570" }}>
            Enthusiastic about learning new technologies, I possess hands-on
            experience in web designing. My passion drives me to create visually
            appealing and user-friendly interfaces, staying current with the
            latest trends. Committed to continuous learning, I thrive on
            embracing challenges in the dynamic world of web technologies.
          </p>
          <div>
            <a href="#projects">
              <button type="button" className="project-button">
                Projects
              </button>
            </a>

            <button type="button">LinkedIn</button>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "40vh",
          }}
        >
          <h1 style={{ textAlign: "center" }}>Add Project</h1>
          <form onSubmit={this.addProject}>
            <div className="input-container">
              <label htmlFor="projectName">Project Name</label>
              <input
                type="text"
                id="projectName"
                className="input"
                required
                onChange={this.onProjectName}
              />
            </div>
            <div className="input-container">
              <label htmlFor="projectDescription">Project Description</label>
              <textarea
                rows="10"
                cols="30"
                required
                onChange={this.onDescription}
              />
            </div>
            <div className="input-container">
              <label htmlFor="projectThumbnail">Thumbnail</label>
              <input
                type="text"
                id="projectThumbnail"
                className="input"
                required
                onChange={this.onThumbnail}
              />
            </div>
            <div className="input-container">
              <label htmlFor="projectLink">Project Link</label>
              <input
                type="text"
                id="projectLink"
                className="input"
                required
                onChange={this.onLink}
              />
            </div>
            <button type="submit" className="add-btn">
              Add
            </button>
          </form>
        </div>
        <div id="projects">
          <h1 style={{ textAlign: "center" }}>Projects</h1>
          {this.renderProjects()}
        </div>
        <footer id="contacts">
          <div className="footer-container">
            <FaInstagramSquare size="40" />
            <FaLinkedin size="40" />
            <MdEmail size="40" />
          </div>
          <p style={{ textAlign: "center", color: "#676e69" }}>
            Copyright@ 2024. All right reserved.
          </p>
        </footer>
      </div>
    );
  }
}

export default App;
