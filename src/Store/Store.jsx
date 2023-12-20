import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { Auth_Reducer } from "../Redux/Auth/Auth.Reducer";
import { Signin_Reducer } from "../Redux/Singin/Signin.Reducer";
import { Profile_Reducer } from "../Redux/Profile/Profile.Reducer";
import { Firm_Reducer } from "../Redux/Firm/Firm.Reducer";
import { Vendor_Reducer } from "../Redux/Vender/Vendor.Reducer";
import { partiesReducer } from "../Redux/Parties/parties.reducer";
import { stockReducer } from "../Redux/Stocks/stock.reducer";
import { categoryReducer } from "../Redux/Category/category.reducer";

import { purchaseReducer } from "../Redux/Purchase/purchase.reducer";
import { purchaseOutReducer } from "../Redux/Purchaseout/purchaseout.reducer";
import { purchaseOrderReducer } from "../Redux/Purchaseorder/purchaseorder.reducer";
import { purchaseReturnReducer } from "../Redux/PurchaseReturn/purchaseReturn.reducer";
import { saleReportReducer } from "../Redux/SaleReport/saleReport.reducer";
import { purchaseReportReducer } from "../Redux/PurchaseReport/PurchaseReport.reducer";
import { reportReducer } from "../Redux/Report/Report.reducer";
import { partystatementReducer } from "../Redux/Partystatement/partystatement.reducer";
import { partyProfitLossReducer } from "../Redux/PartyProfitLoss/partyprofitloss.reducer";
import { allpartiesReducer } from "../Redux/AllPartiesReport/allparties.reducer";
import { partyReportByReducer } from "../Redux/PartyReportByItem/partyreportbyitem.reducer";
import { salepurchasebypartyReducer } from "../Redux/SalePurchaseBYParty/salepurchasebyparty.reducer";
import { saleInvoiceReducer } from "../Redux/SaleInvoice/saleInvoice.reducer";
import { invoiceReducer } from "../Redux/Invoice/invoice.reducer";
import { selectedItemsReducer } from '../components/After Login/Billing App/billingSoftware/selectedItems';




const rootReducer = combineReducers({
    Auth: Auth_Reducer,
    Signin: Signin_Reducer,
    Profile: Profile_Reducer,
    FirmRegistration: Firm_Reducer,
    Vendor: Vendor_Reducer,
    partiesReducer: partiesReducer,
    stockReducer: stockReducer,
    selectedItemsReducer: selectedItemsReducer,
    categoryReducer: categoryReducer,
    invoiceReducer: invoiceReducer,
    saleInvoiceReducer: saleInvoiceReducer,
    purchaseReducer:purchaseReducer,
    purchaseoutReducer:purchaseOutReducer,
    purchaseorderReducer: purchaseOrderReducer,
    purchaseReturn: purchaseReturnReducer,
    saleReportReducer: saleReportReducer,
    purchaseReportReducer: purchaseReportReducer,
    reportReducer: reportReducer,  partyProfitLossReducer: partyProfitLossReducer,
    allpartiesReducer: allpartiesReducer,
    partyReportByReducer: partyReportByReducer,
    salepurchasebypartyReducer: salepurchasebypartyReducer,
    partystatementReducer: partystatementReducer

})


export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
// export const store = createStore(rootReducer, applyMiddleware(thunk));