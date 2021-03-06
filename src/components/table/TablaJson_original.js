// json-server --watch src/server/db.json --port 5000

import React, { useState, useEffect } from 'react';

const API_HOST = "http://localhost:5000";
const INVENTORY_API_URL = `${API_HOST}/inventory`;

export const TablaJson = () => {

    const [data, setData] = useState([]);

    const fetchInventory = () => {
        fetch(`${INVENTORY_API_URL}`)
            .then(res => res.json())
            .then(json => setData(json));
    }

    useEffect(() => {
        fetchInventory();
    }, []);


    const [inEditMode, setInEditMode] = useState({
        status: false,
        rowKey: null
    });

    const [unitPrice, setUnitPrice] = useState(null);

    /**
     *
     * @param id - The id of the product
     * @param currentUnitPrice - The current unit price of the product
     */
    const onEdit = ({ id, currentUnitPrice }) => {
        console.log(id,' - ', currentUnitPrice)

        setInEditMode({
            status: true,
            rowKey: id
        })
        setUnitPrice(currentUnitPrice);
    }

    /**
     *
     * @param id
     * @param newUnitPrice
     */
    const updateInventory = ({ id, newUnitPrice }) => {
        fetch(`${INVENTORY_API_URL}/${id}`, {
            method: "PATCH",
            body: JSON.stringify({
                unit_price: newUnitPrice
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(json => {
                // reset inEditMode and unit price state values
                onCancel();

                // fetch the updated data
                fetchInventory();
            })
    }

    /**
     *
     * @param id -The id of the product
     * @param newUnitPrice - The new unit price of the product
     */
    const onSave = ({ id, newUnitPrice }) => {
        updateInventory({ id, newUnitPrice });
    }

    const onCancel = () => {
        // reset the inEditMode state value
        setInEditMode({
            status: false,
            rowKey: null
        })
        // reset the unit price state value
        setUnitPrice(null);
    }

//     const handleClick = e => {
//         setUnitPrice(e.target.value)
        
//         console.log(e.target.dataset.value);
        
// }

    return (
        <div >
            <h1>Tabla</h1>
            <table>
                <thead>
                    <tr>
                        <th>Apellido</th>
                        <th>Nombres</th>
                        <th>TR1</th>
                        <th>TR2</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item) => (
                            <tr key={item.id}>
                                <td>{item.product_name}</td>
                                <td>{item.product_category}</td>
                                
                                <td
                                onClick={() => onEdit({ id: item.id, currentUnitPrice: item.unit_price })}
                                data-value={item.unit_price}
                                >
                                    {
                                        inEditMode.status && inEditMode.rowKey === item.id ? (
                                            <input value={unitPrice}
                                            size="3"
                                            maxlength="2"
                                            
                                            onChange={(e) => setUnitPrice(e.target.value)}
                                            />
                                            ) : (
                                                item.unit_price
                                                )
                                            }
                                </td>
                                <td
                                data-value={item.tr2}>{item.tr2}</td>
                                
                                <td>
                                    {
                                        inEditMode.status && inEditMode.rowKey === item.id ? (
                                            <React.Fragment>
                                                <button
                                                    className={"btn-success"}
                                                    onClick={() => onSave({ id: item.id, newUnitPrice: unitPrice })}
                                                >
                                                    Graba
                                            </button>

                                                <button
                                                    className={" btn-danger"}
                                                    style={{ marginLeft: 8 }}
                                                    onClick={() => onCancel()}
                                                >
                                                    Cancela
                                            </button>
                                            </React.Fragment>
                                        ) : (
                                                <button
                                                    id="editar"
                                                    className={"btn-primary"}
                                                    onClick={() => onEdit({ id: item.id, currentUnitPrice: item.unit_price })}
                                                >
                                                    Editar
                                                </button>
                                            )
                                    }
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}
