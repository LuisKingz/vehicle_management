const configColumns = [
    {
        name: 'Nombre',
        selector: row => row.nombre,
        sortable: true,

    },
    {
        name: 'Usuario',
        selector: row => row.usuario,
        sortable: true,
    },
    {
        name: 'Rol',
        selector: row => row.rol,
        sortable: true,
    },
];

const paginationComponentOptions = {
    rowsPerPageText: 'Filas por página',
    rangeSeparatorText: 'de',
    selectAllRowsItemText: 'Todos',
    noRowsPerPage: false,
    noResultsText: 'No se encontraron registros',
    noResultsFoundText: 'No se encontraron registros',
    RowsText: 'Filas',
};

export { configColumns, paginationComponentOptions };