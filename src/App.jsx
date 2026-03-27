import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import Contact from "./pages/Contact/Contact";

import Hosting from "./pages/Cloud/Hosting";
import SpecialityHosting from "./pages/Cloud/SpecialityHosting";
import MicrosoftSolutions from "./pages/Cloud/MicrosoftSolutions";
import Security from "./pages/Cloud/Security";
import Microsoft365Plans from "./pages/Cloud/Microsoft365Plans";
import MicrosoftAzure from "./pages/Cloud/MicrosoftAzure";
import HIPAACloudHosting from "./pages/Cloud/HIPAACloudHosting";
import PrivateCloud from "./pages/Cloud/PrivateCloud";
import SAPHosting from "./pages/Cloud/SAPHosting";
import VPSHosting from "./pages/Cloud/VPSHosting";
import DedicatedServers from "./pages/Cloud/DedicatedServers";
import ApplicationHosting from "./pages/Cloud/ApplicationHosting";
import DatabaseHosting from "./pages/Cloud/DatabaseHosting";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/white-label-msp" element={<whiteLabelMSP/>}/>
        <Route path =""></Route>
        <Route path="/hosting" element={<h1>Hosting Page</h1>} />
        <Route path="/specialty" element={<h1>Specialty Page</h1>} />
        <Route path="/microsoft" element={<h1>Microsoft Page</h1>} />
        <Route path="/security" element={<h1>Security Page</h1>} />
        <Route path="/hosting" element={<Hosting />} />
        <Route path="/speciality-hosting" element={<SpecialityHosting />} />
        <Route path="/microsoft-solutions" element={<MicrosoftSolutions />} />
        <Route path="/security" element={<Security />} />

        {/* for popular cloud hosting service */}

         <Route path="/vps-hosting" element={<VPSHosting />} />
        <Route path="/dedicated-servers" element={<DedicatedServers />} />
        <Route path="/microsoft-365" element={<Microsoft365Plans />} />
        <Route path="/azure" element={<MicrosoftAzure />} />
        <Route path="/hipaa-hosting" element={<HIPAACloudHosting />} />
        <Route path="/private-cloud" element={<PrivateCloud />} />
        {/* <Route path="/pci-hosting" element={<PCIDSSH />} /> */}
        {/* <Route path="/colocation" element={<ColocationHosting />} /> */}
        {/* <Route path="/erp-hosting" element={<ERP />} /> */}
        <Route path="/sap-hosting" element={<SAPHosting />} />
        {/* <Route path="/google-workspace" element={<GoogleWorkspace />} /> */}
        {/* <Route path="/gcp" element={<GoogleCloudPlatform />} /> */}
        <Route path="/app-hosting" element={<ApplicationHosting />} />
        <Route path="/db-hosting" element={<DatabaseHosting />} />
        {/* <Route path="/public-cloud" element={<PublicCloud />} /> */}


      </Routes>
    </BrowserRouter>
  );
}

export default App;