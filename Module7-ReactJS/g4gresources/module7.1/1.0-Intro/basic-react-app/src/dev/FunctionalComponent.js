import "../App.css";

const Header = ()=>{
    return (
        <div className="header">
            <div className="header-content">
                <h1 className="title">Shopify App</h1>
                <input type="text" placeholder="Search" className="search-input"/>
            </div>
            <nav>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Products</a></li>
                    <li><a href="">Orders</a></li>
                    <li><a href="">Customers</a></li>
                </ul>
            </nav>
        </div>

    )
}

function FunctionalComponent(){
    return (
        <>
            <Header/>
        </>
    )
}

export default FunctionalComponent
