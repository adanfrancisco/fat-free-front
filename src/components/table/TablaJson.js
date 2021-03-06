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

    const [Valuex, setValuex] = useState(null);

    /**
     *
     * @param id - el id
     * @param currentValuex - el Valor Actual
     */
    const onEdit = ({ id, currentValuex, tr }) => {
        // console.log(id,' - ', currentValuex, '-', tr)

        setInEditMode({
            status: true,
            rowKey: id,
            col: tr
        })

        // console.log(inEditMode.status, '-', inEditMode.col, '-', inEditMode.rowKey )
        setValuex(currentValuex);
    }

 
    const updateInventory = ({ id, temp, col }) => {
        if (col === 1) {
            fetch(`${INVENTORY_API_URL}/${id}`, {
                method: "PATCH",
                body: JSON.stringify({
                    tr1: temp
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
            .then(response => response.json())
            .then(json => {
                // Resetea el modo Editar
                onCancel();

                // Actualizar los datos
                fetchInventory();
            })
        }
        else {
            fetch(`${INVENTORY_API_URL}/${id}`, {
                method: "PATCH",
                body: JSON.stringify({
                    tr2: temp
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
            .then(response => response.json())
            .then(json => {
                // Resetea el modo Editar
                onCancel();

                // Actualizar los datos
                fetchInventory();
            })
        }


    }

    /**
     *
     * @param id -el id
     * @param temp - el nuevo valor
     */
    const onSave = ({ id, temp, col }) => {
        console.log(`se va a actualizar el id: ${id} con el valor: ${temp} en la columna: ${col}`)
        updateInventory({ id, temp, col });
    }

    const onCancel = () => {
        // se resetea el estado
        setInEditMode({
            status: false,
            rowKey: null
        })
        setValuex(null);
    }

    //     const handleClick = e => {
    //         setValuex(e.target.value)

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
                        {/* <th>Action</th> */}
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item) => (
                            <tr key={item.id}>
                                <td>{item.apellido}</td>
                                <td>{item.nombres}</td>

                                <td
                                    onClick={() => onEdit({ id: item.id, currentValuex: item.tr1, tr: 1 })}
                                    data-value={item.tr1}
                                >
                                    {
                                        inEditMode.status && inEditMode.col === 1 && inEditMode.rowKey === item.id ? (
                                            <input value={Valuex}
                                                size="3"
                                                maxLength="2"

                                                onChange={(e) => setValuex(e.target.value)}
                                            />
                                        ) : (
                                                item.tr1
                                            )
                                    }
                                </td>
                                <td
                                    onClick={
                                        () => onEdit({ id: item.id, currentValuex: item.tr2, tr: 2 })}

                                    data-value={item.tr2}
                                >
                                    {
                                        inEditMode.status && inEditMode.col === 2 && inEditMode.rowKey === item.id ? (
                                            <input value={Valuex}
                                                size="3"
                                                maxLength="2"

                                                onChange={(e) => setValuex(e.target.value)}
                                            />
                                        ) : (
                                                item.tr2
                                            )
                                    }
                                </td>


                                {/* <td
                                data-value={item.tr2}
                                >
                                    {item.tr2}
                                    </td> */}

                                <td>
                                    {
                                        inEditMode.status && inEditMode.rowKey === item.id ? (
                                            <React.Fragment>
                                                <button
                                                    className={"btn-success"}
                                                    onClick={() => onSave({ id: item.id, temp: Valuex, col: inEditMode.col })}
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
                                        )
                                            : ''
                                        // (
                                        //         <button
                                        //             id="editar"
                                        //             className={"btn-primary"}
                                        //             onClick={() => onEdit({ id: item.id, currentValuex: item.tr1 })}
                                        //         >
                                        //             Editar
                                        //         </button>
                                        //     )
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
