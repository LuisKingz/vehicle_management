export const configColumns = [
    {
        name: 'Title',
        selector: row => row.title,
        sortable: true,

    },
    {
        name: 'Year',
        selector: row => row.year,
    },
    {
        name: 'ID',
        selector: row => row.id,
    },
    {
        name: 'Info',
        selector: row => row.info,
    },
    {
        name: 'Author',
        selector: row => row.author,
    }

];

