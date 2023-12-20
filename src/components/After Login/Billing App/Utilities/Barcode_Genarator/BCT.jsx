import React, { useState } from 'react';

function BarcodeTable() {
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState('');
    const [newItemCode, setNewItemCode] = useState('');
    const [newHeader, setNewHeader] = useState('');
    const [newLine1, setNewLine1] = useState('');
    const [newLine2, setNewLine2] = useState('');

    const handleItemChange = (event) => {
        setNewItem(event.target.value);
    };

    const handleItemCodeChange = (event) => {
        setNewItemCode(event.target.value);
    };

    const handleHeaderChange = (event) => {
        setNewHeader(event.target.value);
    };

    const handleLine1Change = (event) => {
        setNewLine1(event.target.value);
    };

    const handleLine2Change = (event) => {
        setNewLine2(event.target.value);
    };

    const handleAddItem = () => {
        const newItemObject = {
            item: newItem,
            itemCode: newItemCode,
            header: newHeader,
            line1: newLine1,
            line2: newLine2
        };
        setItems([...items, newItemObject]);
        setNewItem('');
        setNewItemCode('');
        setNewHeader('');
        setNewLine1('');
        setNewLine2('');
    };

    const handleDeleteItem = (index) => {
        const updatedItems = [...items];
        updatedItems.splice(index, 1);
        setItems(updatedItems);
    };

    const handleUpdateItem = (index) => {
        const updatedItems = [...items];
        const updatedItem = {
            item: newItem,
            itemCode: newItemCode,
            header: newHeader,
            line1: newLine1,
            line2: newLine2
        };
        updatedItems[index] = updatedItem;
        setItems(updatedItems);
        setNewItem('');
        setNewItemCode('');
        setNewHeader('');
        setNewLine1('');
        setNewLine2('');
    };

    const handlePrintItem = (item) => {
        // Logic for printing the barcode item
        console.log('Printing item:', item);
    };

    return (
        <>
        <div width="100%">
            <h1>Barcode Table</h1>
                <table width="100%">
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Item Code</th>
                        <th>Header</th>
                        <th>Line 1</th>
                        <th>Line 2</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index) => (
                        <tr key={index}>
                            <td>{item.item}</td>
                            <td>{item.itemCode}</td>
                            <td>{item.header}</td>
                            <td>{item.line1}</td>
                            <td>{item.line2}</td>
                            <td>
                                <button onClick={() => handleDeleteItem(index)}>Delete</button>
                                <button onClick={() => handleUpdateItem(index)}>Update</button>
                                <button onClick={() => handlePrintItem(item)}>Print</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </>
    )
}
export default BarcodeTable