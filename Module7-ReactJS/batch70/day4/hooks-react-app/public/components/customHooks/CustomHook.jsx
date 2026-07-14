import useFetch from "./useFetch.jsx";


function CustomHook() {
    const { data, loading, error } = useFetch("https://dummyjson.com/products");

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <ul>
            {data.products.map(item => (
                <li key={item.id}>{item.title}</li>
            ))}
        </ul>
    );
}

export default CustomHook;
