import { Input } from "@chakra-ui/input";
import { Td, Tr } from "@chakra-ui/table";
import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";

const AddPurchaseItems = ({ index, items, setItems }) => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [rate, setRate] = useState(1);
  const [amount, setAmount] = useState(1);

  useEffect(() => {}, []);

  useEffect(() => {
    items[index].name = name;
    items[index].quantity = quantity;
    items[index].rate = rate;
    items[index].amount = amount;
    setItems(items);
  }, [name, quantity, rate, amount]);

  /**`
   *
   * @param {String} - index number of the table row where purchase item is shows
   */
  const deleteRow = () => {
    console.log(index)  
  };

  return (
    <>
      <Tr>
        <Td style={{ border: "1px solid gray" }}>{index + 1}</Td>
        <Td style={{ border: "1px solid gray" }}>
          <Input
            variant="unstyled"
            placeholder="Item Name"
            value={name}
            onChange={(e) => setName(e?.target?.value)}
          />
        </Td>
        <Td style={{ border: "1px solid gray" }}>
          <Input
            variant="unstyled"
            placeholder="Qty"
            value={quantity}
            onChange={(e) => setQuantity(+e?.target?.value)}
          />
        </Td>
        <Td style={{ border: "1px solid gray" }}>
          <Input
            variant="unstyled"
            placeholder="Enter Rate"
            value={rate}
            onChange={(e) => setRate(+e?.target?.value)}
          />
        </Td>
        <Td style={{ border: "1px solid gray" }}>
          <Input
            variant="unstyled"
            placeholder="Enter Amount"
            value={amount}
            onChange={(e) => setAmount(+e?.target?.value)}
          />
        </Td>
        <Td style={{ border: "1px solid gray" }}>
          <FaTrash onClick={deleteRow} />
        </Td>
      </Tr>
    </>
  );
};

export default AddPurchaseItems;
