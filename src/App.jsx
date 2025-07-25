import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage_New';
import Infrastructure from './pages/Infrastructure';
import ScrollToTop from './components/ScrollToTop';
import Chatbot from './components/Chatbot';

// About Pages
import AboutAvviare from './pages/About/AboutAvviare';
import OurLeadership from './pages/About/OurLeadership';
import OurTeam from './pages/About/OurTeam';
import AcademicCouncil from './pages/About/AcademicCouncil';
import CoreValues from './pages/About/CoreValues';

// Admission Pages
import SchoolOfAppliedScience from './pages/Admission/SchoolOfAppliedScience';
import SchoolOfCommerce from './pages/Admission/SchoolOfCommerce_Complete';
import SchoolOfComputerScience from './pages/Admission/SchoolOfComputerScience';
import SchoolOfEducation from './pages/Admission/SchoolOfEducation';
import SchoolOfHumanities from './pages/Admission/SchoolOfHumanities';
import SchoolOfJournalism from './pages/Admission/SchoolOfJournalism';
import SchoolOfLaw from './pages/Admission/SchoolOfLaw';
import SchoolOfManagement from './pages/Admission/SchoolOfManagement';
import SchoolOfPharmacy from './pages/Admission/SchoolOfPharmacy';

// Placement Pages
import GloriousPlacements from './pages/Placements/GloriousPlacements';
import TopRecruiters from './pages/Placements/TopRecruiters';

// Contact Pages
import ContactUs from './pages/Contact/ContactUs';
import Career from './pages/Contact/Career';

// Styles
import './styles/globals.css';
import './styles/Home.css';
import './styles/Footer.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Chatbot />
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/infrastructure" element={<Infrastructure />} />
          
          {/* About Routes */}
          <Route path="/about/about-avviare" element={<AboutAvviare />} />
          <Route path="/about/our-leadership" element={<OurLeadership />} />
          <Route path="/about/our-team" element={<OurTeam />} />
          <Route path="/about/academic-council" element={<AcademicCouncil />} />
          <Route path="/about/core-values" element={<CoreValues />} />
          
          {/* Admission Routes */}
          <Route path="/admission/school-of-applied-science" element={<SchoolOfAppliedScience />} />
          <Route path="/admission/school-of-commerce" element={<SchoolOfCommerce />} />
          <Route path="/admission/school-of-computer-science" element={<SchoolOfComputerScience />} />
          <Route path="/admission/school-of-education" element={<SchoolOfEducation />} />
          <Route path="/admission/school-of-humanities" element={<SchoolOfHumanities />} />
          <Route path="/admission/school-of-journalism" element={<SchoolOfJournalism />} />
          <Route path="/admission/school-of-law" element={<SchoolOfLaw />} />
          <Route path="/admission/school-of-management" element={<SchoolOfManagement />} />
          <Route path="/admission/school-of-pharmacy" element={<SchoolOfPharmacy />} />
          
          {/* Placement Routes */}
          <Route path="/placements/glorious-placements" element={<GloriousPlacements />} />
          <Route path="/placements/top-recruiters" element={<TopRecruiters />} />
          
          {/* Contact Routes */}
          <Route path="/contact/contact-us" element={<ContactUs />} />
          <Route path="/contact/career" element={<Career />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
