import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Rating } from "primereact/rating";
import "../../../styles/DataTableDemo.css";

// Import the questions from the database
import { getAllQuestions } from "../../../services/questionServices";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ handleSubmit }) => {
  const [questions, setQuestions] = useState([]);
  // const productService = new ProductService();

  useEffect(() => {
    // productService.getProductsSmall().then(data => setProducts(data));
    // setProducts(
    //     [
    //         {"id": "1000","code": "f230fh0g3","name": "Bamboo Watch","description": "Product Description","image": "bamboo-watch.jpg","price": 65,"category": "Accessories","quantity": 24,"inventoryStatus": "INSTOCK","rating": 5},
    //         {"id": "1001","code": "nvklal433","name": "Black Watch","description": "Product Description","image": "black-watch.jpg","price": 72,"category": "Accessories","quantity": 61,"inventoryStatus": "INSTOCK","rating": 4},
    //         {"id": "1002","code": "zz21cz3c1","name": "Blue Band","description": "Product Description","image": "blue-band.jpg","price": 79,"category": "Fitness","quantity": 2,"inventoryStatus": "LOWSTOCK","rating": 3},
    //         {"id": "1003","code": "244wgerg2","name": "Blue T-Shirt","description": "Product Description","image": "blue-t-shirt.jpg","price": 29,"category": "Clothing","quantity": 25,"inventoryStatus": "INSTOCK","rating": 5},
    //         {"id": "1004","code": "h456wer53","name": "Bracelet","description": "Product Description","image": "bracelet.jpg","price": 15,"category": "Accessories","quantity": 73,"inventoryStatus": "INSTOCK","rating": 4},
    //         {"id": "1005","code": "av2231fwg","name": "Brown Purse","description": "Product Description","image": "brown-purse.jpg","price": 120,"category": "Accessories","quantity": 0,"inventoryStatus": "OUTOFSTOCK","rating": 4},
    //         {"id": "1006","code": "bib36pfvm","name": "Chakra Bracelet","description": "Product Description","image": "chakra-bracelet.jpg","price": 32,"category": "Accessories","quantity": 5,"inventoryStatus": "LOWSTOCK","rating": 3},
    //         {"id": "1007","code": "mbvjkgip5","name": "Galaxy Earrings","description": "Product Description","image": "galaxy-earrings.jpg","price": 34,"category": "Accessories","quantity": 23,"inventoryStatus": "INSTOCK","rating": 5},
    //         {"id": "1008","code": "vbb124btr","name": "Game Controller","description": "Product Description","image": "game-controller.jpg","price": 99,"category": "Electronics","quantity": 2,"inventoryStatus": "LOWSTOCK","rating": 4},
    //         {"id": "1009","code": "cm230f032","name": "Gaming Set","description": "Product Description","image": "gaming-set.jpg","price": 299,"category": "Electronics","quantity": 63,"inventoryStatus": "INSTOCK","rating": 3}
    //     ]
    // )

    getAllQuestions()
      .then((res) => {
        setQuestions(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleRating = (rowData, value) => {
    const filtredQuestions = questions.map((question) => {
      if (question.label === rowData.label) {
        return { ...question, reponse: value.value };
      } else {
        return { ...question };
      }
    });

    setQuestions(filtredQuestions);
  };

  const ratingBodyTemplate = (rowData) => {
    return (
      <Rating
        onChange={(value) => {
          handleRating(rowData, value);
        }}
        value={parseInt(rowData.reponse)}
        cancel={true}
      />
    );
  };

  const header = (
    <div className="table-header">
      Products
      {/* <Button icon="pi pi-refresh" /> */}
    </div>
  );
  const footer = (
    <div style={{ backGroundColor: "#A9A9A9" }}>
      {`In total there are ${questions ? questions.length : 0} questions.`}
    </div>
  );
  return (
    <>
      <div className="datatable-templating-demo ">
        <div className="card box shadow-8 m-3">
          <DataTable
            value={questions}
            header={header}
            footer={footer}
            responsiveLayout="scroll"
          >
            <Column field="label" header="Question" className=""></Column>          
            <Column
              field="rating"
              header="Reviews"
              body={ratingBodyTemplate}
            ></Column>
            {/* <Column header="Status" body={statusBodyTemplate}></Column> */}
          </DataTable>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap align-items-center justify-content-center">
        <Button label="Submit" icon="pi pi-check" onClick={() => {handleSubmit(questions)}} />
      </div>
    </>
  );
};
