const HATEOAS = async (data) => {
    const stockJoyas = data.map((item) =>{
        return{
            nombre: item.nombre,
            href: `http://localhost:3000/api/v1/joyas/${item.id}`,
        }
    })
    
    const totalJoyas = data.length;
    const stockTotal = data.reduce((acc, cur) => (acc += cur.stock), 0);
    const dataHateoas = {totalJoyas, stockTotal,stockJoyas};
    return dataHateoas;
};

export default HATEOAS;