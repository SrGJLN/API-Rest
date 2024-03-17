import format from "pg-format";

const filterValues = {
    precio_max: "precio <=",
    precio_min: "precio >=",
    metal: " metal =",
    categoria: "categoria =",
}
const filtersKeys = Object.keys(filterValues);
const filterQuery = (entity, filters) => {
    const table = entity.toLowerCase();
    let query = format("SELECT * FROM %I  WHERE 1 = 1", table);

    const resultFilters = Object.keys(filters).filter((filterKey) => filtersKeys.includes(filterKey));
    const values = [];

    if (resultFilters.length > 0) {
        for (const key of resultFilters) {
            query += ` AND ${filterValues[key]} $${values.length + 1}`;
            values.push(filters[key]);
        }
    }
    return { query, values };
};

export default filterQuery;