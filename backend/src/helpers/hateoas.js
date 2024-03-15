const HATEOAS = async (entity, data) => {
    const stockJoyas = data
    .map((item) =>{
        return{
            nombre: item.nombre,
            href: `http://localhost:3000/api/v1/${entity}/${item.id}`
        }
    })
    .slice(0,4);
    const totalJoyas = data.length;
    const dataHateoas = {totalJoyas, stockJoyas};
    return dataHateoas;
}

export default HATEOAS;