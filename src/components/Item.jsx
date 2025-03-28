const Item = ({ item, onEdit, onDelete }) => {
    return (
        <div className="item-container">
            <div className="item-details">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>Price: ${item.price}</p>
            </div>
            <div className="item-actions">
                <button 
                    className="edit-btn"
                    onClick={() => onEdit(item)}
                >
                    Edit
                </button>
                <button 
                    className="delete-btn"
                    onClick={() => onDelete(item.id)}
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default Item;