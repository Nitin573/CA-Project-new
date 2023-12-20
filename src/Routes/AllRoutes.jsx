import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Buisness from '../pages/Buisness'
import Fund from '../pages/Fund'
import Home from '../pages/Home'
import Income from '../pages/Income';
import Ngo from '../pages/Ngo'
import Software from '../pages/Software'
import Tax from '../pages/Tax'
import TradeMark from '../pages/TradeMark'
import { PrivateLimitedCompany } from '../components/Business_Setup/HomeForPrivateLimited/PrivateLimitedCompany';
import GST_registration from '../components/Tax & Compilance/Pages/GST_registration';
import GST_filinig from '../components/Tax & Compilance/Pages/GST_filinig';
import GST_advisory_portal from '../components/Tax & Compilance/Pages/GST_advisory_portal ';
import { LimitedLiabilityPartnership } from "../components/Business_Setup/HomeForLimitedLiabilityPartnership/LimitedLiabilityPartnership";
import { OnePersoneCompany } from "../components/Business_Setup/One_PersonCompany/OnePersonCompany";
import { SoleProprietorship } from "../components/Business_Setup/SoleProprietorship/SoleProprietorship";


import { Nidhi_Company } from "../components/Business_Setup/NidhiCompany/Nidhi_Company";
import { ProducerCompany } from "../components/Business_Setup/ProducerCompany/ProducerCompany";
import { PartnershipFirmRegistration } from "../components/Business_Setup/PartnershipFirmRegistration/PartnershipFirmRegistration"
import { CompanyNameSearch } from "../components/Business_Setup/CompanyNameSearch/CompanyNameSearch"
import { WebsiteDevelopment } from "../components/Business_Setup/WebsiteDevelopment/WebsiteDevelopment";
import { DigitalSignatureRegistration } from "../components/Business_Setup/DigitalSignatureRegistration/DigitalSignatureRegistration";
import { Apply_MSME_UdyamRegistrationOnline } from "../components/Business_Setup/Apply_MSME_UdyamRegistrationOnline/Apply_MSME_UdyamRegistrationOnline";
import { ISO_Certification } from "../components/Business_Setup/ISO_Certification/ISO_Certification"
import { ImporterExporterCodeRegistration } from "../components/Business_Setup/ImporterExporterCodeRegistration/ImporterExporterCodeRegistration"
import { LegalMetrology } from "../components/Business_Setup/LegalMetrology/LegalMetrology"
import { HallmarkRegistration } from "../components/Business_Setup/HallmarkRegistration/HallmarkRegistration"
import { BIS_Registration } from "../components/Business_Setup/BIS_Registration/BIS_Registration"
import { US_Incorporation } from "../components/Business_Setup/US_Incorporation/US_Incorporation";
import { SingaporeIncorporation } from "../components/Business_Setup/Singapore_Incorporation/SingaporeIncorporation";
import { Trademark_Registration } from "../components/TradeMarkAndIp_Pages/Trademark_Registration/Trademark_Registration"
import { Search_For_Trademark } from "../components/TradeMarkAndIp_Pages/Search_For_Trademark/Search_For_Trademark"
import { Respond_To_TM_Objection } from "../components/TradeMarkAndIp_Pages/Respond_To_TM_Objection/Respond_To_TM_Objection"
import { Well_Known_Trademark } from "../components/TradeMarkAndIp_Pages/Well_Known_Trademark/Well_Known_Trademark"
import { Logo_Design } from "../components/TradeMarkAndIp_Pages/Logo_Design/Logo_Design"
import { Indian_Patent_Search } from "../components/TradeMarkAndIp_Pages/Indian_Patent_Search/Indian_Patent_Search"
import { Provisonal_Application } from "../components/TradeMarkAndIp_Pages/Provisonal_Application/Provisonal_Application"
import { Permanent_Patent } from "../components/TradeMarkAndIp_Pages/Permanent_Patent/Permanent_Patent"
import { Copyright_Infringement } from "../components/TradeMarkAndIp_Pages/Copyright_Infringement/Copyright_Infringement"
import { Patent_Infringement } from "../components/TradeMarkAndIp_Pages/Patent_Infringement/Patent_Infringement"
import { Trademark_Infringement } from "../components/TradeMarkAndIp_Pages/Trademark_Infringement/Trademark_Infringement"
import { Design_Registration } from "../components/TradeMarkAndIp_Pages/Design_Registration/Design_Registration"
import { Copyright_Registration } from "../components/TradeMarkAndIp_Pages/Copyright_Registration/Copyright_Registration"
import GST_indirect_tax from "../components/Tax & Compilance/Pages/GST_indirect_tax"
import GST__rodtep from "../components/Tax & Compilance/Pages/GST__rodtep"
import Fundraising from "../components/Fund/Pages/Fundraising"
import Pitch_deck from "../components/Fund/Pages/Pitch_deck"
import Ngo1 from "../components/Ngo/Pages/Ngo1"
import Section8 from "../components/Ngo/Pages/Section8"
import Trust_Registration from "../components/Ngo/Pages/Trust_Registration"
import Society_registration from "../components/Ngo/Pages/Society_registration"
import Ngo_Compliance from "../components/Ngo/Pages/Ngo_Compliance"
import Section_8_compliance from "../components/Ngo/Pages/Section_8_compliance"
import Csr_1_filing from "../components/Ngo/Pages/Csr_1_filing"
import Sec_80g_sec_12a from "../components/Ngo/Pages/Sec_80g_sec_12a"
import Darpan_registration from "../components/Ngo/Pages/Darpan_registration"
import PVT from '../components/Tax & Compilance/PVT/PVT'
import Limited_Liability_Partnership from '../components/Tax & Compilance/Limited Liability Partnership/Limited_Liability_Partnership'
import CFSS from '../components/Tax & Compilance/CFSS/CFSS'
import Accounting_Booking from '../components/Tax & Compilance/Accounting_Booking/Accounting_Booking'
import Payroll_Maintenance from '../components/Tax & Compilance/Payroll Maintenance/Payroll_Maintenance'
import Tds from '../components/Tax & Compilance/TDS/Tds'
import Individual_Tax from '../components/Tax & Compilance/Individual Income Tax Filing/Individual_Tax'
import Proprietorship_Tax_Return_Filing from '../components/Tax & Compilance/Proprietorship_Tax_Return_Filing/Proprietorship_Tax_Return_Filing'
import Income_Tax_Notice from '../components/Tax & Compilance/Income_Tax_Notice/Income_Tax_Notice'
import Add_a_Director from '../components/Tax & Compilance/Add_a_Director/Add_a_Director'
import Remove_a_Director from '../components/Tax & Compilance/Remove_a_Director/Remove_a_Director'
import Increase_Authorized_Capital from '../components/Tax & Compilance/Increase_Authorized_Capital/Increase_Authorized_Capital'
import Close_the_Pvt_Ltd_Company from '../components/Tax & Compilance/Close_the_Pvt_Ltd_Company/Close_the_Pvt_Ltd_Company'
import Provident_Fund_Registration from '../components/Tax & Compilance/Provident_Fund_Registration/Provident_Fund_Registration'
import ESI_Registration from '../components/Tax & Compilance/ESI_Registration/ESI_Registration'
import Professional_Tax_Registration from '../components/Tax & Compilance/Professional_Tax_Registration/Professional_Tax_Registration'
import Shops_and_Establishments_License from '../components/Tax & Compilance/Shops_and_Establishments_License/Shops_and_Establishments_License'
import ESOP from '../components/Tax & Compilance/ESOP/ESOP'
import Posh from '../components/Tax & Compilance/Posh/Posh '
import Login from '../components/Login/Login'
import SoftwareLogin from '../components/SoftWare/SoftwareLogin'

import Signup from '../components/Signup/Signup'

import Convert_a_Sole_Proprietorship_to_Private_Limited_Company from '../components/Tax & Compilance/Convert_a_Sole_Proprietorship_to_Private_Limited_Company/Convert_a_Sole_Proprietorship_to_Private_Limited_Company'
import Compliance_Check_Secretarial_Audit from '../components/Tax & Compilance/Compliance_Check_Secretarial_Audit/Compliance_Check_Secretarial_Audit'
import Due_Diligence from '../components/Tax & Compilance/Due_Diligence/Due_Diligence'
import RBI_Compliance from '../components/Tax & Compilance/RBI_Compliance/RBI_Compliance'
import Add_Designated_Partner from '../components/Tax & Compilance/Add_Designated_Partner/Add_Designated_Partner'
import Changes_to_LLP_Agreement from '../components/Tax & Compilance/Changes_to_LLP_Agreement/Changes_to_LLP_Agreement'
import Close_the_LLP from '../components/Tax & Compilance/Close_the_LLP/Close_the_LLP'
import Profile from '../components/After Login/Profile/Profile'
import Inventory_Software from '../components/After Login/Inventory_Software/Inventory_Software'
import Slidebar from '../components/After Login/Billing App/Slidebar/Slidebar'
import Company_name from '../components/After Login/Billing App/Company_name/Company_name'
import Parties from '../components/After Login/Billing App/Parties/Parties'
import Items from '../components/After Login/Billing App/Items/Items'
import Sale from '../components/After Login/Billing App/Sale/Sale'
import Purchase from '../components/After Login/Billing App/Purchase/Purchase'
import Expenses from '../components/After Login/Billing App/Expenses/Expenses'
import AddExpenseItem from '../components/After Login/Billing App/Expenses/AddExpenseItem'
import Cash_Bank from '../components/After Login/Billing App/Cash_Bank/Cash_Bank'
import Apply_For_Loan from '../components/After Login/Billing App/Apply_For_Loan/Apply_For_Loan'
import Other_Products from '../components/After Login/Billing App/Other_Products/Other_Products'
import Request_A_Demo from '../components/After Login/Billing App/Request_A_Demo/Request_A_Demo'
import Share_Feedback from '../components/After Login/Billing App/Share_Feedback/Share_Feedback'
import Trial_Info from '../components/After Login/Billing App/Trial_Info/Trial_Info'
import Online_Store from '../components/After Login/Billing App/Online_Store/Online_Store'
import Bank_Account from '../components/After Login/Billing App/Bank_Account/Bank_Account'
import Cash_In_Hand from '../components/After Login/Billing App/Cash_In_Hand/Cash_In_Hand'
import Cheques from '../components/After Login/Billing App/Cheques/Cheques'
import Loan_Account from '../components/After Login/Billing App/Loan_Account/Loan_Account'
import Software1 from '../components/SoftWare/Software1'
import HomeDash from '../components/After Login/Billing App/Home/HomeDash'
import MenuBar from '../components/Automatic menu/Menubar'
import Estimate from '../components/After Login/Billing App/Sale/Estimate/Estimate'
import Sale_Order from '../components/After Login/Billing App/Sale/Sale_Order/Sale_Order'
import Payment_In from '../components/After Login/Billing App/Sale/PymentIn/Payment_In'
import Delivery_Channal from '../components/After Login/Billing App/Sale/Delivery_Channal/Delivery_Channal'
import Sale_Return from '../components/After Login/Billing App/Sale/Sale_Return/Sale_Return'
import Purchase_Bills from '../components/After Login/Billing App/Purchase/Purchase_Bills/Purchase_Bills'
import Payment_Out from '../components/After Login/Billing App/Purchase/Payment_Out/Payment_Out'
import Purchase_Order from '../components/After Login/Billing App/Purchase/Purchase_Order/Purchase_Order'
import Purchase_Return from '../components/After Login/Billing App/Purchase/Purchase_Return/Purchase_Return'
import Barcode_Genarator from '../components/After Login/Billing App/Utilities/Barcode_Genarator/Barcode_Genarator'
import Import_Items from '../components/After Login/Billing App/Utilities/Import_Items/Import_Items'
import Bulk_Update_Items from '../components/After Login/Billing App/Utilities/Bulk_Update_Items/Bulk_Update_Items'
import Import_Parties from '../components/After Login/Billing App/Utilities/Import_Parties/Import_Parties'
import Export_to_Tally from '../components/After Login/Billing App/Utilities/Export_to_Tally/Export_to_Tally'
import Export_Items from '../components/After Login/Billing App/Utilities/Export_Items/Export_Items'
import Recycle_Bin from '../components/After Login/Billing App/Utilities/Recycle_Bin/Recycle_Bin'
import Close_Financial_Year from '../components/After Login/Billing App/Utilities/Close_Financial_Year/Close_Financial_Year'
import Auto from '../components/After Login/Billing App/Restore/Auto Backup/Auto'
import DashOS from '../components/After Login/Billing App/Online_Store/Dashboard2/DashOS'
import Manage_Item from '../components/After Login/Billing App/Online_Store/Manage_Item/Manage_Item'
import Manage_Orders from '../components/After Login/Billing App/Online_Store/Manage_Orders/Manage_Orders'
import Stor_Reports from '../components/After Login/Billing App/Online_Store/Stor_Reports/Stor_Reports'
import PrivateRoute from '../components/PrivateRoute'
import AddCompanyForm from '../components/After Login/Billing App/AddCompanyForm/AddCompanyForm'
import LoginVendorLogin from '../components/Vendor/VendorLogin'
import VendorAllClint from '../components/Vendor/VendorAllClint'
import AddClientForm from '../components/Vendor/AddClinentForm'
import Transaction from '../components/After Login/Billing App/Transaction/Transaction'
import TransactionTable from '../components/After Login/Billing App/Utilities/Export_to_Tally/TransactionTable'

import VendorDashboard from '../components/VendorDashboard/VendorDashboard'
import VendorDocuments from '../components/VendorDashboard/VendorDocuments'
import VendorComplaints from '../components/VendorDashboard/VendorComplaints'
import Privacy_RefundPolicy from '../components/VendorDashboard/Privacy_RefundPolicy'
import VendorClientsInformation from '../components/VendorDashboard/VendorClientsInformation'
import VendorFollowUp from '../components/VendorDashboard/VendorFollowUp'
import PartyInvoice from '../components/After Login/Billing App/Parties/PartyInvoice'
import BillingSoftware from '../components/After Login/Billing App/billingSoftware/BillingSoftware'
import Reports from '../components/After Login/Billing App/reports/Reports'
import IndividualReport from '../components/After Login/Billing App/reports/IndividualReport'
import EditReport from '../components/After Login/Billing App/reports/EditReport'
import AddPurchase from '../components/After Login/Billing App/Purchase/Purchase_Bills/AddPurchase'
import AddPurchaseReturn from '../components/After Login/Billing App/Purchase/Purchase_Return/AddPurchaseReturn'
import AddPaymentOut from '../components/After Login/Billing App/Purchase/Payment_Out/AddPaymentOut'
import AddPurchaseOrder from '../components/After Login/Billing App/Purchase/Purchase_Order/AddPurchaseOrder'
import SoftwareCompanyRegister from '../components/After Login/Profile/SoftwareCompanyRegister'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import PartyStatement from '../components/After Login/Billing App/reports/PartyStatement'
import PartyProfitLoss from '../components/After Login/Billing App/reports/PartyProfitLoss'
import SalePurchaseByPartyReport from '../components/After Login/Billing App/reports/SalePurchaseByParty'
import PartyReportByItem from '../components/After Login/Billing App/reports/PartyReportByItem'
import AllPartiesReport from '../components/After Login/Billing App/reports/AllPartiesReport'
export default function AllRoutes() {
    return (
        <>
        
            <ToastContainer
            position='top-center'
            />
        <Routes>
            <Route element={<Home />} path="/" ></Route>
            <Route element={<Buisness />} path="/buisness" ></Route>
            <Route element={<Tax />} path="/tax" ></Route>
            <Route element={<Fund />} path="/fund" ></Route>
            <Route element={<Income />} path="/income" ></Route>
            <Route element={<Ngo />} path="/ngo" ></Route>
            <Route element={<TradeMark />} path="/trademark" ></Route>
            <Route element={<Software />} path="/it" ></Route>
            <Route path="/private_limited_company" element={<PrivateLimitedCompany />} />
            <Route path="/limited_liability_partnership" element={<LimitedLiabilityPartnership />} />
            <Route path="/one_persone_company" element={<OnePersoneCompany />} />
            <Route path="/sole_proprietorship" element={<SoleProprietorship />} />
            <Route path="/nidhi_company" element={<Nidhi_Company />} />
            <Route path="/producer_company" element={<ProducerCompany />} />
            <Route path="/partnership_firm" element={<PartnershipFirmRegistration />} />
            <Route path="/company_name_search" element={<CompanyNameSearch />} />
            <Route path="/wesite_development" element={<WebsiteDevelopment />} />
            <Route path="/digital_signature" element={<DigitalSignatureRegistration />} />
            <Route path="/apply_msme" element={<Apply_MSME_UdyamRegistrationOnline />} />
            <Route path="/iso_certification" element={<ISO_Certification />} />
            <Route path="/import_export" element={<ImporterExporterCodeRegistration />} />
            <Route path="/hallmark_registration" element={<HallmarkRegistration />} />
            <Route path="/bis_registration" element={<BIS_Registration />} />
            <Route path="/legal_metrology" element={<LegalMetrology />} />
            <Route path="/usa_incorporation" element={<US_Incorporation />} />
            <Route path="/singapore_incorporation" element={<SingaporeIncorporation />} />
            <Route path="/trademark_registration" element={<Trademark_Registration />} />
            <Route path="/search_for_trademark" element={<Search_For_Trademark />} />
            <Route path="/respond_objection" element={<Respond_To_TM_Objection />} />
            <Route path="/well_known_trademark" element={<Well_Known_Trademark />} />
            <Route path="/logo_design" element={<Logo_Design />} />
            <Route path="/indian_patent_search" element={<Indian_Patent_Search />} />
            <Route path="/provisonal_application" element={<Provisonal_Application />} />
            <Route path="/permanent_patent" element={<Permanent_Patent />} />
            <Route path="/copyright_infringement" element={<Copyright_Infringement />} />
            <Route path="/patent_infringement" element={<Patent_Infringement />} />
            <Route path="/trademark_infringement" element={<Trademark_Infringement />} />
            <Route path="/design_registration" element={<Design_Registration />} />
            <Route path='/copyright_registration' element={<Copyright_Registration />} />
            <Route element={<GST_registration />} path="/gst_registration" ></Route>
            <Route element={<GST_filinig />} path="/gst_filinig" ></Route>
            <Route element={<GST_advisory_portal />} path="/gst_advisory_portal" ></Route>
            <Route element={<GST_indirect_tax />} path="/gst_indirect_tax" ></Route>
            <Route element={<GST__rodtep />} path="/gst_rodtep" ></Route>
            <Route element={<Fundraising />} path="/fundraising" ></Route>
            <Route element={<Pitch_deck />} path="/pitch_deck" ></Route>
            <Route element={<Ngo1 />} path="/ngo1" ></Route>
            <Route element={<Section8 />} path="/section8" ></Route>
            <Route element={<Trust_Registration />} path="/trust_registration" ></Route>
            <Route element={<Society_registration />} path="/society_registration" ></Route>

            <Route element={<Ngo_Compliance />} path="/ngo_compliance" ></Route>
            <Route element={<Section_8_compliance />} path="/section_8_compliance" ></Route>
            <Route element={<Csr_1_filing />} path="/csr_1_filing" ></Route>
            <Route element={<Sec_80g_sec_12a />} path="/sec_80g_&_sec_12a" ></Route>
            <Route element={<Darpan_registration />} path="/darpan_registration" ></Route>
            <Route element={<PVT />} path="/pvt" ></Route>
            <Route element={<Limited_Liability_Partnership />} path="/llp" ></Route>
            <Route element={<CFSS />} path="/cfss" ></Route>
            <Route element={<Accounting_Booking />} path="/accounting_book" ></Route>
            <Route element={<Payroll_Maintenance />} path="/payroll_maintenance" ></Route>
            <Route element={<Tds />} path="/tds" ></Route>
            <Route element={<Individual_Tax />} path="/individual_tax" ></Route>
            <Route element={<Proprietorship_Tax_Return_Filing />} path="/Proprietorship_Tax_Return_Filing" ></Route>
            <Route element={<Income_Tax_Notice />} path="/Income_Tax_Notice" ></Route>
            <Route element={<Add_a_Director />} path="/Add_a_Director" ></Route>
            <Route element={<Remove_a_Director />} path="/Remove_a_Director" ></Route>
            <Route element={<Increase_Authorized_Capital />} path="/Increase_Authorized_Capital" ></Route>
            <Route element={<Close_the_Pvt_Ltd_Company />} path="/Close_the_Pvt_Ltd_Company" ></Route>
            <Route element={<Provident_Fund_Registration />} path="/Provident_Fund_Registration" ></Route>
            <Route element={<ESI_Registration />} path="/ESI_Registration" ></Route>
            <Route element={<Professional_Tax_Registration />} path="/Professional_Tax_Registration" ></Route>
            <Route element={<Shops_and_Establishments_License />} path="/Shops_and_Establishments_License" ></Route>
            <Route element={<ESOP />} path="/ESOP" ></Route>
            <Route element={<Posh />} path="/Posh" ></Route>
            <Route element={<Login />} path="/Login" ></Route>
            <Route element={<Signup />} path="/Signup" ></Route>
            <Route element={<Convert_a_Sole_Proprietorship_to_Private_Limited_Company />} path="/Convert_a_Sole_Proprietorship_to_Private_Limited_Company" ></Route>
            <Route element={<Compliance_Check_Secretarial_Audit />} path="/Compliance_Check_Secretarial_Audit" ></Route>
            <Route element={<Due_Diligence />} path="/Due_Diligence" ></Route>
            <Route element={<RBI_Compliance />} path="/RBI_Compliance" ></Route>
            <Route element={<Add_Designated_Partner />} path="/Add_Designated_Partner" ></Route>
            <Route element={<Changes_to_LLP_Agreement />} path="/Changes_to_LLP_Agreement" ></Route>
            <Route element={<Close_the_LLP />} path="/Close_the_LLP" ></Route>
            {/* {<PrivateRoute>
            </PrivateRoute>} */}
            <Route element={<Profile />} path="/Profile" ></Route>
            <Route element={<SoftwareCompanyRegister />} path="/software-signup" ></Route>
            {/* <Route element={<Profile />} path="/Profile" ></Route> */}
            <Route element={<Inventory_Software />} path="/Inventory_Software" ></Route>
            {/* <Route element={<Inventiry_Home />} path="/Inventiry_Home" ></Route> */}
            <Route element={<Slidebar />} path="/Slidebar" ></Route>
            <Route element={<Company_name />} path="/Company_name" ></Route>
            {/* parties */}
            <Route element={<Parties />} path="/Parties" ></Route>
            <Route element={<PartyInvoice />} path='/party/:id' />
            <Route element={<Items />} path="/Items" ></Route>
            <Route element={<Sale />} path="/Sale" ></Route>
            
            <Route element={<Purchase />} path="/Purchase" ></Route>
            {/* <Route path="/party/:partyId" component={PartyStatement} /> */}
            {/* <Route element={<PartyStatement/>} path="/Party_Statement" ></Route>
            <Route element={<PartyProfitLoss/>} path="/Party_Profit_Loss" ></Route>
            <Route element={<AllPartiesReport/>} path="/All_Parties_Report" ></Route>
            <Route element={<PartyReportByItem/>} path="/Party_Report_By_Item" ></Route>
            <Route element={<SalePurchaseByPartyReport/>} path="/SalePurchase_By_Party_Report" ></Route> */}
            

            
            <Route element={<Expenses />} path="/Expenses" ></Route>
            <Route element={<AddExpenseItem />} path='/add-expense-item' />
            <Route element={<Cash_Bank />} path="/Cash_Bank" ></Route>
            <Route element={<Apply_For_Loan />} path="/Apply_For_Loan" ></Route>
            <Route element={<Other_Products />} path="/Other_Products" ></Route>
            <Route element={<Request_A_Demo />} path="/Request_A_Demo" ></Route>
            <Route element={<Share_Feedback />} path="/Share_Feedback" ></Route>
            <Route element={<Trial_Info />} path="/Trial_Info" ></Route>
            <Route element={<Online_Store />} path="/Online_Store" ></Route>
            <Route element={<Bank_Account />} path="/Bank_Account" ></Route>
            <Route element={<Cash_In_Hand />} path="/Cash_In_Hand" ></Route>
            <Route element={<Cheques />} path="/Cheques" ></Route>
            <Route element={<Loan_Account />} path="/Loan_Account" ></Route>
            <Route element={<Software1 />} path="/Software" ></Route>
            <Route element={< SoftwareLogin />} path='/software-login' />
            {/* <PrivateRoute><</PrivateRoute> */}
            <Route element={<HomeDash />} path="/HomeDash" ></Route>
            <Route element={<MenuBar />} path="/MenuBar"></Route>
            <Route element={<Estimate />} path="/Estimate"></Route>
            <Route element={<Payment_In />} path="/PaymentIn"></Route>
            <Route element={<Sale_Order />} path="/Sale_Order"></Route>
            <Route element={<Delivery_Channal />} path="/Delivery_Channal"></Route>
            <Route element={<Sale_Return />} path="/Sale_Return"></Route>
            <Route element={<Purchase_Bills />} path="/Purchase_Bills"></Route>
            <Route element={<Payment_Out />} path="/Payment_Out"></Route>
            <Route element={<Purchase_Order />} path="/Purchase_Order"></Route>
            <Route element={<Purchase_Return />} path="/Purchase_Return"></Route>
            <Route element={<Barcode_Genarator />} path="/Generate_Barcode"></Route>
            <Route element={<Import_Items />} path="/Import_Items"></Route>
            <Route element={<Bulk_Update_Items />} path="/Bulk_Update_Items"></Route>
            <Route element={<Import_Parties />} path="/Import_Parties"></Route>
            <Route element={<Export_to_Tally />} path="/Export_to_Tally"></Route>
            <Route element={<Export_Items />} path="/Export_Items"></Route>
            <Route element={<Recycle_Bin />} path="/Recycle_Bin"></Route>
            <Route element={<Close_Financial_Year />} path="/Close_Financial_Year"></Route>
            <Route element={<Auto />} path="/Auto"></Route>
            <Route element={<DashOS />} path="/DashOS"></Route>
            <Route element={<Manage_Item />} path="/Manage_Item"></Route>
            <Route element={<Manage_Orders />} path="/Manage_Orders"></Route>
            <Route element={<Stor_Reports />} path="/Stor_Reports"></Route>
            <Route element={<AddCompanyForm />} path="/AddCompanyForm"></Route>
            <Route element={<LoginVendorLogin />} path="/LoginVendorLogin"></Route>
            <Route element={<VendorAllClint />} path="/VendorAllClint"></Route>
            <Route element={<AddClientForm />} path="/AddClientForm"></Route>
            <Route element={<Transaction />} path="/Transaction"></Route>
            <Route element={<TransactionTable />} path="/TransactionTable"></Route>
            <Route element={<VendorDashboard />} path='/vendor-dashboard' />
            <Route element={<VendorDocuments />} path='/vendor-documents' />
            <Route element={<VendorComplaints />} path='/vendor-complaints' />
            <Route element={<Privacy_RefundPolicy />} path='/privacy-n-refund-policy' />
            <Route element={<VendorClientsInformation />} path='/vendor-clients' />
            <Route element={<VendorFollowUp />} path='/vendor-follow-up' />
            <Route element={<BillingSoftware />} path="/billing-software/:invoiceId" />
            <Route element={<BillingSoftware />} path="/billing-software" />            
            <Route element={<Reports />} path='/reports' />
            <Route element={<IndividualReport />} path='/individual-report' />
            <Route element={<EditReport />} path='/edit-report' />
            <Route element={<AddPurchase />} path='/add-purchase' />
            <Route element={<AddPaymentOut />} path='/add-payment-out' />
            <Route element={<AddPurchaseOrder />} path='/add-purchase-order' />
            <Route element={<AddPurchaseReturn />} path='add-purchase-return' />
        </Routes>
        </>

    );
}; 