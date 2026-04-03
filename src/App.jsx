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
import PublicCloud from "./pages/Cloud/PublicCloud";
import PCIDSSHosting from "./pages/Cloud/PCIDSSHosting";
import ColocationService from "./pages/Cloud/ColocationServices";
import ManagedERPHosting from "./pages/Cloud/ManagedERPHosting";
import GoogleWorkspace from "./pages/Cloud/GoogleWorkspace";
import GoogleCloudPlatform from "./pages/Cloud/GoogleCloudPlatform";
import ProfessionalServices from "./pages/Professional/professionalServices";
import WindowsServer from "./pages/Servers/WindowsServer";
import LinuxServer from "./pages/Servers/LinuxServer";
import ApplicationServer from "./pages/Servers/ApplicationServer";
import ExchangeServer from "./pages/Servers/ExchangeServer";
import IISServer from "./pages/Servers/IISServer";
import MSSQLServer from "./pages/Servers/MSSQLServer";
// import MySQLServer from "./pages/Servers/MySQLServer";
import SharePointServer from "./pages/Servers/SharePointServer";
import Virtulization from "./pages/Servers/Virtualization";
import VMware from "./pages/Servers/VMware";
import {WhiteLabelMSP} from "./pages/WhiteLabelMSP/WhiteLabelMSP";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<Contact />} />
        <Route path="white-label-msp" element={<WhiteLabelMSP/>}/>

        {/* Route for the White Label / Per Engineer page
        <Route path="white-label" element={<WhiteLabelMSP />} /> */}
        
        {/* Route for the Per Device page
        <Route path="per-device" element={<PerDevice />} /> */}

        {/* <Route path =""></Route> */}
        <Route path="/hosting" element={<h1>Hosting Page</h1>} />
        <Route path="/specialty" element={<h1>Specialty Page</h1>} />
        <Route path="/microsoft" element={<h1>Microsoft Page</h1>} />
        <Route path="/security" element={<h1>Security Page</h1>} />
        <Route path="/hostings" element={<Hosting />} />
        <Route path="/speciality-hosting" element={<SpecialityHosting />} />
        <Route path="/microsoft-solutions" element={<MicrosoftSolutions />} />
        <Route path="/securitys" element={<Security />} />

        {/* for popular cloud hosting service */}

         <Route path="/vps-hosting" element={<VPSHosting />} />
        <Route path="/dedicated-servers" element={<DedicatedServers />} />
        <Route path="/microsoft-365" element={<Microsoft365Plans />} />
        <Route path="/azure" element={<MicrosoftAzure />} />
        <Route path="/hipaa-hosting" element={<HIPAACloudHosting />} />
        <Route path="/private-cloud" element={<PrivateCloud />} />
        <Route path="/pci-hosting" element={<PCIDSSHosting />} />
        <Route path="/colocation" element={<ColocationService />} />
        <Route path="/erp-hosting" element={<ManagedERPHosting/>} />
        <Route path="/sap-hosting" element={<SAPHosting />} />
        <Route path="/google-workspace" element={<GoogleWorkspace />} />
        <Route path="/gcp" element={<GoogleCloudPlatform />} />
        <Route path="/app-hosting" element={<ApplicationHosting />} />
        <Route path="/db-hosting" element={<DatabaseHosting />} />
        <Route path="/public-cloud" element={<PublicCloud/>} />

        {/* For Professional IT Services */}

        <Route path="/professional-services" element={<ProfessionalServices />} />
        <Route path="/windows-server" element={<WindowsServer />} />
        <Route path="/linux-server" element={<LinuxServer />} />
        <Route path="/application-server" element={<ApplicationServer />} />
        <Route path="/exchange-server" element={<ExchangeServer />} />
        <Route path="/iis-server" element={<IISServer />} />
        <Route path="/mssql-server" element={<MSSQLServer />} />
        {/* <Route path="/mysql-server" element={<MySQLServer />} /> */}
        <Route path="/sharepoint-server" element={<SharePointServer />} />
        <Route path="/virtulization-server" element={<Virtulization />} />
        <Route path="/vmware-server" element={<VMware />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;