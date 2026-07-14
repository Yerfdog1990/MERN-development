import "../App.css"

const isAdmin = true;
const products = [{id:1, item:"Shoes"}, {id:2, item:"Clothes"}, {id:3, item:"Gadgets"}, {id:4, item:"Furniture"}, {id:5, item:"Books"}];
function ConditionalRendering(){

    return (
        <>
           <h1>ConditionalRendering</h1>
            {
                isAdmin ? <h2>This is an admin portal</h2> : <h2>This is a user portal</h2>
            }
            <h1>Rendering list</h1>
            <ul>
                {
                    products.map((product) => <li key={product.id}>{product.item}</li>)
                }
            </ul>
            <h1>Conditional styling</h1>
            <ul>
                {
                    products.map((product) => <li className={`${product.id % 2 === 0 ? "red" : "green"}`} key={product.id}>{product.item}</li>)
                }
            </ul>
        </>
    )
}

export default ConditionalRendering