function Title({ products }) {
    return <>{products.length == 0 && <h1>You don't have any products!</h1>}</>;
  }
  
  export default Title;
  