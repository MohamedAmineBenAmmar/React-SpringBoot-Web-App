import React, { useState, useEffect } from "react";
import { OrderList } from "primereact/orderlist";
import "../../../styles/OrderListDemo.css";

const QuestionsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // productService.getProductsSmall().then(data => setProducts(data));
    setProducts([
      [
        {
          id: "1000",
          code: "f230fh0g3",
          name: "Bamboo Watch",
          description: "Product Description",
          image: "bamboo-watch.jpg",
          price: 65,
          category: "Accessories",
          quantity: 24,
          inventoryStatus: "INSTOCK",
          rating: 5,
        },
        {
          id: "1001",
          code: "nvklal433",
          name: "Black Watch",
          description: "Product Description",
          image: "black-watch.jpg",
          price: 72,
          category: "Accessories",
          quantity: 61,
          inventoryStatus: "INSTOCK",
          rating: 4,
        },
        {
          id: "1002",
          code: "zz21cz3c1",
          name: "Blue Band",
          description: "Product Description",
          image: "blue-band.jpg",
          price: 79,
          category: "Fitness",
          quantity: 2,
          inventoryStatus: "LOWSTOCK",
          rating: 3,
        },
        {
          id: "1003",
          code: "244wgerg2",
          name: "Blue T-Shirt",
          description: "Product Description",
          image: "blue-t-shirt.jpg",
          price: 29,
          category: "Clothing",
          quantity: 25,
          inventoryStatus: "INSTOCK",
          rating: 5,
        },
        {
          id: "1004",
          code: "h456wer53",
          name: "Bracelet",
          description: "Product Description",
          image: "bracelet.jpg",
          price: 15,
          category: "Accessories",
          quantity: 73,
          inventoryStatus: "INSTOCK",
          rating: 4,
        },
        {
          id: "1005",
          code: "av2231fwg",
          name: "Brown Purse",
          description: "Product Description",
          image: "brown-purse.jpg",
          price: 120,
          category: "Accessories",
          quantity: 0,
          inventoryStatus: "OUTOFSTOCK",
          rating: 4,
        },
        {
          id: "1006",
          code: "bib36pfvm",
          name: "Chakra Bracelet",
          description: "Product Description",
          image: "chakra-bracelet.jpg",
          price: 32,
          category: "Accessories",
          quantity: 5,
          inventoryStatus: "LOWSTOCK",
          rating: 3,
        },
        {
          id: "1007",
          code: "mbvjkgip5",
          name: "Galaxy Earrings",
          description: "Product Description",
          image: "galaxy-earrings.jpg",
          price: 34,
          category: "Accessories",
          quantity: 23,
          inventoryStatus: "INSTOCK",
          rating: 5,
        },
        {
          id: "1008",
          code: "vbb124btr",
          name: "Game Controller",
          description: "Product Description",
          image: "game-controller.jpg",
          price: 99,
          category: "Electronics",
          quantity: 2,
          inventoryStatus: "LOWSTOCK",
          rating: 4,
        },
        {
          id: "1009",
          code: "cm230f032",
          name: "Gaming Set",
          description: "Product Description",
          image: "gaming-set.jpg",
          price: 299,
          category: "Electronics",
          quantity: 63,
          inventoryStatus: "INSTOCK",
          rating: 3,
        },
      ],
    ]);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const itemTemplate = (item) => {
    return (
      <div className="product-item">
        <div className="image-container">
          <img
            src={`images/product/${item.image}`}
            onError={(e) =>
              (e.target.src =
                "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
            }
            alt={item.name}
          />
        </div>
        <div className="product-list-detail">
          <h5 className="mb-2">{item.name}</h5>
          <i className="pi pi-tag product-category-icon"></i>
          <span className="product-category">{item.category}</span>
        </div>
        <div className="product-list-action">
          <h6 className="mb-2">${item.price}</h6>
          {item.inventoryStatus !== undefined && (
            <span
              className={`product-badge status-${item.inventoryStatus.toLowerCase()}`}
            >
              {item.inventoryStatus}
            </span>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="orderlist-demo">
      <div className="card">
        <OrderList
          value={products}
          header="List of Products"
          dragdrop
          listStyle={{ height: "auto" }}
          dataKey="id"
          itemTemplate={itemTemplate}
          //onChange={(e) => setProducts(e.value)}
        ></OrderList>
      </div>
    </div>
  );
};

export default QuestionsList;
