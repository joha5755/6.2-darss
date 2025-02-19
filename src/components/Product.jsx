function Product({ product, deleteBtn }) {
    return (
      <li className="list-item">
        <img src={product.images[0]} alt="" width={100} height={100} />
        <h2 className="name">{product.title}</h2>
        <p className="category">Category: {product.category}</p>
        <button className="btn" onClick={() => deleteBtn(product.id)}>
          Delete
        </button>
      </li>
    );
  }
  export default Product;
  