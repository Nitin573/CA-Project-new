
// ParentComponent.jsx

import React, { useState } from 'react';
import Sold_ShipTo from './Sold_ShipTo';
import ItemsTable from './ItemsTable';

const ParentComponent = () => {
  // const [selectedItems, setSelectedItems] = useState();


  
  const handleSelectedPartyId = (partyId) => {
    setSelectedPartyId(partyId);
    console.log('Selected Party ID in Parent:', partyId);
  };

  const handleselectedItems = (itemId, itemName, itemCategory) => {
    setSelectedItems({ id: itemId, name: itemName, category: itemCategory });
    console.log('Selected Items in Parent:', { id: itemId, name: itemName, category: itemCategory });
  };
  return (
    <>
      <Sold_ShipTo handleSelectedPartyId={handleSelectedPartyId} />
      {/* <ItemsTable selectedItems={handleselectedItems} /> */}
      
    </>
  );
};

export default ParentComponent;
