const configColumns = [
    {
        name: 'FOTO',
        cell: row => <img height="84px" width="56px" alt={row.name} src={row.url} />,
        sortable: false,

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
        cell: (row) => {
            const currentYear = new Date().getFullYear();
            const isOlderThanCurrentYear = row.tenencia < currentYear;
            const badgeClass = isOlderThanCurrentYear ? 'bg-danger' : 'bg-success';
            const text = isOlderThanCurrentYear ? 'PAGAR' : 'VIGENTE';

            return (
                <span className={`badge ${badgeClass}`}> {text + " " + row.tenencia}</span>
            );
        },
        sortable: true,
    },
    {
        name: "VERIFICACIÓN",
        cell: (row) => {
            const currentYear = new Date().getFullYear();
            const isOlderThanCurrentYear = row.tenencia < currentYear;
            const badgeClass = row.tipo === 'Automovil' ? isOlderThanCurrentYear ? 'bg-danger' : 'bg-success' : "bg-light text-dark";
            const text = row.tipo === 'Automovil' ? isOlderThanCurrentYear ? `PAGAR ${row.tenencia}` : `VIGENTE ${row.tenencia}` : 'No aplica';

            return (
                <span className={`badge ${badgeClass}`}> {text}</span>
            );
        },
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

const paginationComponentOptions = {
    rowsPerPageText: 'Filas por página',
    rangeSeparatorText: 'de',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'Todos',
    noRowsPerPage: false,
    noResultsText: 'No se encontraron registros',
    noResultsFoundText: 'No se encontraron registros',
    RowsText: 'Filas',
};

export { configColumns, paginationComponentOptions };