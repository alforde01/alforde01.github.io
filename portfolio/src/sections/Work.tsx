import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Work.css";
import Navbar from "../components/Navbar";

const Work = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLDivElement).classList.contains("modal")) {
      closeModal();
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };
  const projects = [
    {
      title: "Research Experience for Undergraduates (REU)",
      date: "Summer 2025",
      role: "Incoming Research Intern",
      description:
        "I will be reading and learning about research project, making / understanding and executing the research plan, and regularly reporting / presenting research progress.",
      link: "https://eng.famu.fsu.edu/ime/research-experience-for-undergraduates",
      image: "/images/famufsucollegeofengineering.png",
    },
    {
      title: "Disney Internship",
      date: "Spring 2024",
      role: "Show Control Intern",
      description:
        "Software Engineer apart of Walt Disney World's the Global Engineering & Technology - Show Controls Team.",
      link: "https://example.com/disney",
      image: "/images/Walt-Disney-World-Logo.png",
    },
    {
      title: "UCF Capstone Project: Nemours Children's Hospital",
      date: "Fall 2024 - Spring 2025",
      role: "Fullstack Software Engineer",
      description:
        "Collaborated on a team to analyze data and predict patient readmission likelihood, aiming to improve patient flow and operational efficiency.",
      link: "https://noahf909.github.io/final-presentation/",
      image: "/images/Nemours_logo_Vertical_Condensed .png",
    },
    {
      title: "Culinary Compass",
      date: "Fall 2023",
      role: "Fullstack Software Engineer",
      description:
        "Developed paired web and mobile applications with a team,leveraging a MERN stack (MongoDB,Express,React,Node.js) to integrate frontend and backend components for interactive recipe management, ensuring seamless data flow and dynamic retrieval.",
      link: "https://github.com/AKateYang/myculinarycompass/tree/master",
      image: "/images/culinarycompass.png",
    },
    {
      title: "Hello Hub",
      date: "Fall 2023",
      role: "Project Manager & Frontend Software Engineer",
      description:
        "Led a team through facilitating stand-ups, coordinating task assignments, and ensuring progress visibility while developing a personal contact manager web application for structured contact management.",
      link: "https://github.com/Ahal122/COP4331C_Contact_Manager?tab=readme-ov-file",
      image: "/images/hellohub.JPEG",
    },
  ];

  return (
    <section className="work">
      <Navbar />
      <h2>Work</h2>
      <Slider {...settings}>
        {projects.map((project, index) => (
          <div key={index} className="project-slide">
            <h3>{project.title}</h3>
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <p>{project.date}</p>
            <p>{project.role}</p>
            <p>{project.description}</p>
            {project.title === "Disney Internship" ? (
              <button onClick={openModal}>View More</button>
            ) : (
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View More
              </a>
            )}
          </div>
        ))}
      </Slider>

      {isModalOpen && (
        <div className="modal" onClick={handleOverlayClick}>
          <div className="modal-content">
            <h2>Disney Internship</h2>
            <p>
              Contributed to the platform migration of a show programming
              application from Delphi 7 to C# with .NET, focusing on GUI
              redevelopment using XAML and researching Delphi 7 equivalents in
              C#.
            </p>
            <p>
              Contributed to the platform update of a critical show control
              application by migrating from Delphi 7 to C# with .NET, leading
              the GUI redevelopment in XAML for scalability and user
              familiarity, and developing core functionality while conducting
              virtual machine testing to ensure system stability.
            </p>
            <p>
              Assisted in the re-imagination of a park attraction by learning
              GraphWorx64 to re-design the pre-existing Human-Machine Interface
              (HMI), maintaining operator usability and efficiency, while
              assisting in reconnecting show control components and supporting
              system testing.
            </p>
            <button className="close" onClick={closeModal}>
              &times;
            </button>
            <span className="close" onClick={closeModal}></span>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
