export function formatDate(date){
    const dateObj = new Date(date);
    return dateObj.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric"
    });
}