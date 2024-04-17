import express,{request,response} from "express";

const app = express();
app.use(express.json())
const PORT = process.env.PORT || 3000;


app.get("/",((request,response)=>{


    response.status(201).send({mes:"Day Two Express Js Learning"})
}))

const mockProducts = [
    {
      id: 1,
      name: "Laptop",
      brand: "Apple",
      price: 1500,
      rating: 4.5,
      variants: [
        {
          color: "Silver",
          stock: 10,
        },
        {
          color: "Space Gray",
          stock: 5,
        },
        {
          color: "Gold",
          stock: 3,
        },
      ],
    },
    {
      id: 2,
      name: "Smartphone",
      brand: "Samsung",
      price: 800,
      rating: 4.3,
      variants: [
        {
          color: "Black",
          stock: 20,
        },
        {
          color: "White",
          stock: 15,
        },
        {
          color: "Blue",
          stock: 8,
        },
      ],
    },
    {
      id: 3,
      name: "Headphones",
      brand: "Sony",
      price: 100,
      rating: 4.8,
      variants: [
        {
          color: "Black",
          stock: 30,
        },
        {
          color: "White",
          stock: 25,
        },
        {
          color: "Red",
          stock: 12,
        },
      ],
    },
    {
      id: 4,
      name: "Smartwatch",
      brand: "Fitbit",
      price: 200,
      rating: 4.2,
      variants: [
        {
          color: "Black",
          stock: 18,
        },
        {
          color: "Silver",
          stock: 14,
        },
        {
          color: "Rose Gold",
          stock: 10,
        },
      ],
    },
  ]

  app.get("/api/products",(request,response)=>{
    const {query:{filter,value}}= request;
    if(!filter&&!value)return response.send(mockProducts);
    if(filter&&value)
    return response.send(mockProducts.filter((product)=>product[filter].includes(value)))

    return response.send(mockProducts);
  })

  app.post("/api/products",(request,response)=>{
    const {body}=request;
    const newProduct = {id:mockProducts[mockProducts.length-1].id+1,...body};
    mockProducts.push(newProduct);
    return response.status(201).send(newProduct);F


  })
app.listen(PORT, () => {
    console.log(`runing on port ${PORT}`);
  });