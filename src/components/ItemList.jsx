import Item from "./Item";

const ItemList = ({ items,onEditItem, onDeleteItem }) => {
    // your code here
    return (
        <div className="items-container">
            {items.map((item) => (
                <Item 
                key={item.id} 
                item={item} 
                onEdit={onEditItem}
                onDelete={onDeleteItem}
                />
            ))}
        </div>
    );
};

export default ItemList;