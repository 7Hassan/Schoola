import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import './students.scss';

const Gallery = () => {
  return <div className="student-sec gallery">Gallery</div>;
};
const Videos = () => {
  return <div className="student-sec videos">Videos</div>;
};
const Projects = () => {
  return <div className="student-sec projects">Projects</div>;
};

const Students = () => {
  const { t } = useTranslation();
  const students = t('students', { returnObjects: true });

  const [activeSection, setActiveSection] = useState(students.secsTitle[0]);

  const [isAnimating, setIsAnimating] = useState(false);

  const sections = {
    Gallery: <Gallery />,
    Videos: <Videos />,
    Projects: <Projects />,
  };

  // Handle section change with animation
  const handleSectionChange = (newSection) => {
    if (newSection !== activeSection) {
      setIsAnimating(true); // Trigger animation
      setTimeout(() => {
        setActiveSection(newSection);
        setIsAnimating(false); // Reset animation
      }, 300); // Match animation duration
    }
  };

  return (
    <div id="students" className="students sec">
      {/* Header Section */}
      <h2>تعرف معنا على مبرمجي المستقبل</h2>
      <h5 className="light">
        يمكنك مشاهدة ما يصنعه مبرمجي المستقبل من سن 6:18 سنة من هنا
      </h5>

      {/* Switcher Navigation */}
      <div className="switcher row">
        {students.secsTitle.map((item, index) => (
          <button
            key={index}
            className={activeSection === item ? 'active' : ''}
            onClick={() => handleSectionChange(item)}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Content Section with Animation */}
      <div className={`active-section ${isAnimating ? 'fade-out' : 'fade-in'}`}>
        {sections[activeSection]}
      </div>
    </div>
  );
};

export default Students;
