// import { TOGGLE_APPROVAL_STATUS } from "./Admin.Type";

// const dummyVendors = [
//   {
//     id: 1,
//     name: 'Vendor 1',
//     email: 'vendor1@example.com',
//     companyName: 'Company A',
//     registrationDate: '2023-08-01',
//     approvalStatus: 'Pending',
//   },
//   {
//     id: 2,
//     name: 'Vendor 2',
//     email: 'vendor2@example.com',
//     companyName: 'Company B',
//     registrationDate: '2023-08-02',
//     approvalStatus: 'Approved',
//   },
//   {
//     id: 3,
//     name: 'Vendor 1',
//     email: 'vendor1@example.com',
//     companyName: 'Company A',
//     registrationDate: '2023-08-01',
//     approvalStatus: 'Pending',
//   },
//   {
//     id: 4,
//     name: 'Vendor 2',
//     email: 'vendor2@example.com',
//     companyName: 'Company B',
//     registrationDate: '2023-08-02',
//     approvalStatus: 'Approved',
//   },
//   {
//     id: 5,
//     name: 'Vendor 1',
//     email: 'vendor1@example.com',
//     companyName: 'Company A',
//     registrationDate: '2023-08-01',
//     approvalStatus: 'Pending',
//   },
//   {
//     id: 6,
//     name: 'Vendor 2',
//     email: 'vendor2@example.com',
//     companyName: 'Company B',
//     registrationDate: '2023-08-02',
//     approvalStatus: 'Approved',
//   },
//   {
//     id: 7,
//     name: 'Vendor 1',
//     email: 'vendor1@example.com',
//     companyName: 'Company A',
//     registrationDate: '2023-08-01',
//     approvalStatus: 'Pending',
//   },
//   {
//     id: 8,
//     name: 'Vendor 2',
//     email: 'vendor2@example.com',
//     companyName: 'Company B',
//     registrationDate: '2023-08-02',
//     approvalStatus: 'Approved',
//   },
//   {
//     id: 9,
//     name: 'Vendor 1',
//     email: 'vendor1@example.com',
//     companyName: 'Company A',
//     registrationDate: '2023-08-01',
//     approvalStatus: 'Pending',
//   },
//   {
//     id: 10,
//     name: 'Vendor 2',
//     email: 'vendor2@example.com',
//     companyName: 'Company B',
//     registrationDate: '2023-08-02',
//     approvalStatus: 'Approved',
//   },
// ];

// const initialState = {
//   vendors: dummyVendors,
// };

// const vendorReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case TOGGLE_APPROVAL_STATUS:
//       const updatedVendors = state.vendors.map((vendor) =>
//         vendor.id === action.payload
//           ? {
//               ...vendor,
//               approvalStatus:
//                 vendor.approvalStatus === "Pending" ? "Approved" : "Pending",
//             }
//           : vendor
//       );
//       return { ...state, vendors: updatedVendors };
//     default:
//       return state;
//   }
// };

// export default vendorReducer;
