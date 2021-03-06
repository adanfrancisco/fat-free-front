import React from 'react'


import {data} from './dataSource2'

export const TablaNormal = () => {
    const handleFocus = (event) => event.target.select();
    const handleClick = e => {
        console.log(e.target.dataset.value);
        return (
            <input 
            type="number" 
            onFocus={handleFocus}
            // value={value} 
            // onChange={onChange}  
            // onBlur={onBlur} 
            // onClick={onClick}
          />
            )
    }



    return (
        <>
                {data ?
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>DNI</th>
                                    <th>APELLIDO</th>
                                    <th>NOMBRES</th>
                                    <th>1INF</th>
                                    <th>2INF</th>
                                </tr>
                            </thead>
                            <tbody>
                            {data.map((user, index) => (
                                <tr key={user.dni} id={user.dni}>
                                    <td>{user.dni}</td>
                                    <td>{user.apellido}</td>
                                    <td>{user.nombre}</td>
                                    <td 
                                        onClick={handleClick}
                                        data-value={user.tr1}
                                    >{user.tr1}</td>
                                    <td
                                    onClick={handleClick}
                                        data-value={user.tr2}
                                    >{user.tr2}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                   :'aun no hay datos de alumnos'}
            
        </>
    )
}
