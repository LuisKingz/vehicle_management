export const configColumns = [
    {
        name: 'FOTO',
        selector: row => row.foto,
        sortable: true,
        
    },
    {
        name: 'PLACA',
        selector: row => row.placa,
        sortable: true,

    },
    {
        name: 'MARCA',
        selector: row => row.marca,
        sortable: true,
    },
    {
        name: 'MODELO',
        selector: row => row.modelo,
        sortable: true,
    },
    {
        name: 'TIPO',
        selector: row => row.tipo,
        sortable: true,
    },
    {
        name: "TENENCIA",
        cell: (row) => [
            <span className={`badge ${row.tenencia === 'Alquilado' ? 'bg-danger' : 'bg-success'}`}>{row.tenencia}</span>
        ],
        sortable: true,
    },
    {
        name: "VERIFICACIÓN",
        selector: row => row.verificacion,
        sortable: true,
    },
    {
        name: "MANTENIMIENTO",
        selector: row => row.mantenimiento,
        sortable: true,
    },
    {
        name: "OBSERVACIONES",
        selector: row => row.observaciones,
        sortable: true,
    },
    {
        name: 'ACCIONES',
        cell: (row) => [
            <button data-id={row.placa} className="btn btn-warning btn-acciones">E</button>,
            <button data-id={row.placa} className="btn btn-danger btn-acciones">E</button>,
            <button data-id={row.placa} className="btn btn-info btn-acciones">D</button>
        ],
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
    }

];

