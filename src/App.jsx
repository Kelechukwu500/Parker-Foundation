import React from "react";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import Donate from "./Pages/Donate";
import ThankYou from "./Pages/ThankYou";


import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home.jsx";
import Story from "./Components/Story";
import Contact from "./Components/Contact";
import Gallery from "./Components/Gallery";
import Reports from "./Components/Reports";
import Nonprofits from "./Pages/Nonprofits";
import Disaster from "./Pages/Disaster";
import Blog from "./Pages/Blog";
import WhoWeAre from "./Pages/WhoWeAre";
import VolunteerForm from "./Components/VolunteerForm";
import BoardOfDirectors from "./Pages/Buttons/BoardOfDirectors";
import FinancialIntegrity from "./Components/FinancialIntegrity";
import WhatWeDo from "./Pages/WhatWeDo";
import StudentChampion from "./Components/StudentChampion";
import SafeHaven from "./Components/SafeHaven";
import FAQ from "./Components/FAQ";
import SearchPage from "./Components/SearchPage";


//Footer pages//
import PrivacyPolicy from "./Components/FooterPages/PrivacyPolicy";
import TermsOfService from "./Components/FooterPages/TermsOfService";
import CookiePolicy from "./Components/FooterPages/CookiePolicy";
import DataTerms from "./Components/FooterPages/DataTerms";
import PhilanthropicGifts from "./Components/FooterPages/PhilanthropicGifts";
import DonateInHonor from "./Components/FooterPages/DonateInHonor";
import StartAnApplication from "./Components/FooterPages/StartAnApplication";
import WhyJoin from "./Components/FooterPages/WhyJoin";
import Handbook from "./Components/FooterPages/Handbook";
import OurPartners from "./Components/FooterPages/OurPartners";
import GiftCards from "./Components/FooterPages/GiftCards";
import NonprofitsResources from "./Components/FooterPages/NonprofitsResources";
import CorporateGiving from "./Components/FooterPages/CorporateGiving";
import SuccessStories from "./Components/FooterPages/SuccessStories";
import OnlinePolicies from "./Components/FooterPages/OnlinePolicies";


//Resources//
import VolunteerToolkitPDF from "./resources/VolunteerToolkitPDF"
import CommunityEngagementPDF from "./resources/CommunityEngagementPDF";
import FundraisingGuidePDF from "./resources/FundraisingGuidePDF";
import NonprofitLegalGuidePDF from "./resources/NonprofitsLegalGuidePDF";
import GrantWritingEssentialsPDF from "./resources/GrantWritingEssentialsPDF";
import ImpactMeasurementVd from "./resources/ImpactMeasurementVd";


//Corporate Giving Tiers//
import BronzeTier from "./Tiers/BronzeTier";
import SilverTier from "./Tiers/SilverTier";
import GoldTier from "./Tiers/GoldTier";
import PlatinumTier from "./Tiers/PlatinumTier";


// Corporate Partnership & Tiers//
import CorporatePartnerForm from "./CorporateForm/CorporatePartnerForm";
import BronzeTierPartnerForm from "./CorporateForm/BronzeTierPartnerForm";
import SilverTierForm from "./CorporateForm/SilverTierForm";
import GoldTierPartnerForm from "./CorporateForm/GoldTierPartnerForm";
import PlatinumTierPartnerForm from "./CorporateForm/PlatinumTierPartnerForm";


//Success Stories PDFs//
import JulietStoryPDF from "./Stories/JulietPDF";
import EmpoweringCommunitiesPDF from "./Stories/EmpoweringCommunitiesPDF";
import BreakingBarriersPDF from "./Stories/BreakingBarriersPDF";


//Dropdown Visible Pages//
import TopFundedProjects from "./DropDownVisible/TopFundedProjects.jsx";
import ClimateCrises from "./DropDownVisible/ClimateCrises.jsx";
import MostEffective from "./DropDownVisible/MostEffective.jsx";
import NewestProjects from "./DropDownVisible/NewestProjects.jsx";
import ProjectsClosestGoal from "./DropDownVisible/ProjectsClosestGoal.jsx";
import Wellness from "./DropDownVisible/Wellness.jsx";
import BrowseAllProjects from "./DropDownVisible/BrowseAllProjects.jsx";



const App = () => {
  

  return (
    <>
      <Navbar />


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/story" element={<Story />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/nonprofits" element={<Nonprofits />} />
        <Route path="/disasters" element={<Disaster />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about-us" element={<WhoWeAre />} />
        <Route path="/volunteer" element={<VolunteerForm />} />
        <Route path="/board-of-directors" element={<BoardOfDirectors />} />
        <Route path="/financial-integrity" element={<FinancialIntegrity />} />
        <Route path="/what-we-do" element={<WhatWeDo />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/student-champion" element={<StudentChampion />} />
        <Route path="/safe-haven" element={<SafeHaven />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/search-page" element={<SearchPage />} />
        
        {/* Footer Pages Routes */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/data-terms" element={<DataTerms />} />
        <Route path="/philanthropic-gifts" element={<PhilanthropicGifts />} />
        <Route path="/donate-in-honor" element={<DonateInHonor />} />
        <Route path="/start-an-application" element={<StartAnApplication />} />
        <Route path="/why-join" element={<WhyJoin />} />
        <Route path="/handbook" element={<Handbook />} />
        <Route path="/our-partners" element={<OurPartners />} />
        <Route path="/gift-cards" element={<GiftCards />} />
        <Route path="/nonprofit-resources" element={<NonprofitsResources />} />
        <Route path="/corporate-giving" element={<CorporateGiving />} />
        <Route path="/success-stories" element={<SuccessStories />} />
        <Route path="/online-policies" element={<OnlinePolicies />} />
<Route path="/donate" element={<Donate />} />
<Route path="/thank-you" element={<ThankYou />} />


        {/*Resources*/}
        <Route path="/volunteer-toolkitpdf" element={<VolunteerToolkitPDF />} />
        <Route path="/community-engagementpdf" element={<CommunityEngagementPDF />} />
        <Route path="/fundraising-guidepdf" element={<FundraisingGuidePDF />} />
        <Route path="/nonprofitslegal-guidepdf" element={<NonprofitLegalGuidePDF />} />
        <Route path="/grant-writing-essentialspdf" element={<GrantWritingEssentialsPDF />} />
        <Route path="/impact-measurement-vd" element={<ImpactMeasurementVd />} />


        {/*Corporate Giving Tiers*/}
        <Route path="/bronze-tier" element={<BronzeTier />} />
        <Route path="/silver-tier" element={<SilverTier />} />
        <Route path="/gold-tier" element={<GoldTier />} />
        <Route path="/platinum-tier" element={<PlatinumTier />} />


        {/* Corporate Partnership & Tiers*/}
        <Route path="/corporate-partnership" element={<CorporatePartnerForm />} />
        <Route path="/bronze-tier-partner-form" element={<BronzeTierPartnerForm />} />
        <Route path="/silver-tier-form" element={<SilverTierForm />} />
        <Route path="/gold-tier-partner-form" element={<GoldTierPartnerForm />} />
        <Route path="/platinum-tier-partner-form" element={<PlatinumTierPartnerForm />} />


        {/* Success Stories PDFs */}
        <Route path="/juliet-story-pdf" element={<JulietStoryPDF />} />
        <Route path="/empowering-communities-pdf" element={<EmpoweringCommunitiesPDF />} />
        <Route path="/breaking-barriers-pdf" element={<BreakingBarriersPDF />} />


        {/* Dropdown Visible Pages */}
        <Route path="/top-funded-projects" element={<TopFundedProjects />} />
        <Route path="/climate-crises" element={<ClimateCrises />} />
        <Route path="/most-effective" element={<MostEffective />} />
        <Route path="/newest-projects" element={<NewestProjects />} />
        <Route path="/projects-closest-goal" element={<ProjectsClosestGoal />} />
        <Route path="/wellness" element={<Wellness />} />
        <Route path="/browse-all-projects" element={<BrowseAllProjects />} />




        </Routes>

      <Footer />
    </>
  );
};

export default App;
