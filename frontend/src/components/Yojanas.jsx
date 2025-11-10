import CentralYojanas from "./CentralYojanas";
import HelpSectionYojana from "./HelpSectionYojana";
import HeroSectionYojana from "./HerosectionYojana";
import NGOSSection from "./NGOSSection";
import StateYojanas from "./StateYojanas";



const Yojanas = () => {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <HeroSectionYojana />
      <CentralYojanas />
      <StateYojanas />
      <NGOSSection />
     <HelpSectionYojana />
    </div>
  );
};

export default Yojanas;