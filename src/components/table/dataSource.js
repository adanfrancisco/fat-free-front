import EditableCell from "./editableCell";
// import EditableCellA from "./editableCellAprobado";


export const columns = [
    {
      Header: 'DNI',
      accessor: 'dni'
    },
    {
      Header: 'Apellido',
      accessor: 'apellido'
    },
    {
      Header: 'Nombre',
      accessor: 'nombre',
    },
    {
      Header: '1INF',
      accessor: 'tr1',
      Cell: EditableCell
    },
    {
      Header: '2INF',
      accessor: 'tr2',
      Cell: EditableCell
    }
  ];
  
  export const data = [
    {
      dni:11222333,
      apellido: 'Gomez',
      nombre: 'Claudia',
      tr1: 9,
      tr2: 8,
    },
    {
      dni:1233443,
      apellido: 'Young',
      nombre: 'Martin',
      tr1: 4,
      tr2: 4,
    }, 
    {
      dni:33222444,
      apellido: 'Peralta',
      nombre: 'Jose',
      tr1: 4,
      tr2: 2,
    },
  ];