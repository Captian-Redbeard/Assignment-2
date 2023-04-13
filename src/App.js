import "./App.css";
import logo from "./logo.png";
import React, { useState, useEffect } from "react";
import items from "./Cats.json";
import { Products } from "./Products";
import { Categories } from "./Categories";
<<<<<<< HEAD
import Shop from "./shop";
=======

>>>>>>> d7c06e9d7d5604421fbe2a13c62f3d5bd9821d7e
export const App = () => {

  console.log("Step 1: After reading file :");
  const [ProductsCategory, setProductsCategory] = useState(Products);
  const [query, setQuery] = useState("");
  const [view, setView] = useState(1);
  const [ProductsUnfiltered, setProductsUnfiltered] = useState(Products);
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  


  //SHOP FUNCTIONS
  useEffect(() => {
    total();
  }, [cart]);
  
  const total = () => {
    let totalVal = 0;
    for (let i = 0; i < cart.length; i++) {
      totalVal += cart[i].price;
    }
    setCartTotal(totalVal);
  };
  
  const addToCart = (el) => {
    setCart([...cart, el]);
  };
  const removeFromCart = (el) => {
    let hardCopy = [...cart];
    hardCopy = hardCopy.filter((cartItem) => cartItem.id !== el.id);
    setCart(hardCopy);
  };
  
  const cartItems = cart.map((el) => (
    <div key={el.id}>
      <img class="img-fluid" src={el.image} width={30} />
      {el.title}${el.price}
    </div>
  ));
  const listItems = items.map((el) => (
    <div key={el.id}>
      <img class="img-fluid" src={el.image} width = {100} />
      {el.title}
      {el.category}
      {el.price}
      <button type="button" onClick={() => removeFromCart(el)}>-</button>{" "}
      <button type="button" variant="light" onClick={() => addToCart(el)}>{" "}+{" "}</button>
    </div>
  ));

  function howManyofThis(id) {
    let hmot = cart.filter((cartItem) => cartItem.id === id);
    return hmot.length;
  }
  //--------------------------

  
  //APP Functions
  function handleClick(tag) {
    console.log("Step 4 : in handleClick", tag);
    let filtered = Products.filter((cat) => cat.category === tag);
    setProductsCategory(filtered);
    // ProductsCategory = filtered;
    console.log("Step 5 : ", Products.length, ProductsCategory.length);
  }

  function clearFilter() {
    setProductsCategory(ProductsUnfiltered);
    setQuery("");
  }


  function takeToValidation() {
    window.location.href = "FormValidation.html";
    setTimeout(() => {
      console.log("Delayed message!");
    }, 10000);
    
  }


  const handleChange = (e) => {
    setQuery(e.target.value);
    console.log(
      "Step 6 : in handleChange, Target Value :",
      e.target.value,
      " QueryValue :",
      query
    );
    const results = ProductsCategory.filter((eachProduct) => {
      if (e.target.value === "") return ProductsCategory;
      return eachProduct.title
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
    });
    setProductsCategory(results);
  };

  //Renders
  const render_products = (ProductsCategory) => {
    return (
      <div className="category-section fixed">
        {console.log("Step 3 : in render_products ")}
        <h2
          className="text-3xl font-extrabold tracking-tight text-gray-600 category-title"
        >
          Products ({ProductsCategory.length})
        </h2>
        <div
          className="m-6 p-3 mt-10 ml-0 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-6 xl:gap-x-10"
          style={{ maxHeight: "800px", overflowY: "scroll" }}
        >
          {/* Loop Products */}
          {ProductsCategory.map((product, index) => (
            <div key={index} className="group relative shadow-lg">
              <div
                className="min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden lg:aspect-none group-hover:-translate-y-2 h-auto"
              >
                <img
                  alt="Product Image"
                  src={product.image}
                    />
              </div>
              <div className="flex justify-between p-3">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      <span style={{ fontSize: "16px", fontWeight: "600" }}>
                        {product.title}
                      </span>
                    </a>
                    <p>Tag - {product.category}</p>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Rating: {" "}
                    {product.rating.rate}
                  </p>
                </div>
                <p
                  className="text-sm font-medium text-green-600"
                >
                  ${product.price}
                </p>
              </div>
              <div className="flex justify-between p-3">
              <button class="small-gray-button" type="button" onClick={() => removeFromCart(cartItems)}>-</button>
              <p className="mt-1 text-sm text-gray-500">{howManyofThis(product.id)}</p>
              <button type="button" variant="light" onClick={() => addToCart(cartItems)}>+</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const render_shop = () => {
    return (
      <div>
        {" "}
        {listItems}
        <div>Items in Cart :</div>
        <div>{cartItems}</div>
        <div>Order total to pay :{cartTotal}</div>
        <a href="./FormValidation.html">
          <button class="gray-button-small">Confirm</button>
        </a>
      </div>
    );
    }

  const render_app = () => {
    return (
      <div className="flex fixed flex-row">
        {console.log(
          "Step 2 : ReturnApp :",
          Products.length,
          ProductsCategory.length
        )}
        <div
          className="h-screen bg-slate-800 p-3 xl:basis-1/5"
          style={{ minWidth: "65%" }}
        >
          <img
            style={{ borderRadius: "10px" }}
            src={logo}
            alt="Sunset in the mountains"
            width={450}
            height={600}
          />
          <div className="px-6 py-4">
            <h1 className="text-3xl mb-2 font-bold text-white">
              {" "}
              Assignment 02: Store Cart
            </h1>
            <p className="text-gray-700 text-white">
              by -{" "}
              <b style={{ color: "orange" }}>
                Kyle Kohl: Software Engineer & Spencer Thiele: Software Engineer
              </b>
            </p>
            <div className="py-5">
            <button
                class="gray-button-small"
                onClick={() => {
                  clearFilter();
                }}
              >
                Clear Filters
              </button>
            </div>
            <div className="">
              {Categories ? <p className="text-white">Tags : </p> : ""}
              {Categories.map((tag) => (
                <button
                  key={tag}
                  className="inline-block bg-amber-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mt-2"
                  onClick={() => {
                    handleClick(tag);
                  }}
                >
                  {tag}
                </button>
              ))}
            </div>
            <div className="py-5">
              <input type="search" value={query} onChange={handleChange} />
            </div>
            <div className="py-10 px-2">
              <button
                class="white-button"
                onClick={() => {
                  //takeToValidation();
                  setView(2);
                }}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
        <div className="ml-5 p-10 xl:basis-4/5">
          {console.log(
            "Before render :",
            Products.length,
            ProductsCategory.length
          )}
          {render_products(ProductsCategory)}
        </div>
      </div>
    );
  }


  const render_validation = () => {
    return (
      <div>
        <div class="container">

        <div class="row">
          <div class="col-2"></div>

          <div class="col-8">

            <h1>Checkout Form Validation</h1>

            <div id="liveAlertPlaceholder"></div>

            <form class="row g-3" id="checkout-form">

              //full name
              <div class="col-md-6">
                <label for="inputName" class="form-label">Full Name</label>
                <input type="text" class="form-control" id="inputName"></input>
                <div class="valid-feedback">
                  Looks good!
                </div>
                <div class="invalid-feedback">
                  Must be like, "John Doe"
                </div>
              </div>

              //Email
              <div class="col-md-6">
                <label for="inputEmail4" class="form-label">Email</label>
                <input type="email" class="form-control" id="inputEmail4"></input>
                <div class="valid-feedback">
                  Looks good!
                </div>
                <div class="invalid-feedback">
                  Must be like, "abc@xyz.efg"
                </div>
              </div>

              //Credit Card
              <div class="col-12">
                <label for="inputCard" class="form-label">Card</label>
                <div class="input-group mb-3">
                  <span class="input-group-text" id="basic-addon1"><i class="bi-credit-card-fill"></i></span>
                  <input type="text" id="inputCard" class="form-control" placeholder="XXXX-XXXX-XXXX-XXXX"
                    aria-label="Username" aria-describedby="basic-addon1"></input>
                  <div class="valid-feedback">
                    Looks good!
                  </div>
                  <div class="invalid-feedback">
                    Must be like, "7777-7777-7777-7777"
                  </div>
                </div>
              </div>

              <div class="col-12">
                <label for="inputAddress" class="form-label">Address</label>
                <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"></input>
              </div>
              <div class="col-12">
                <label for="inputAddress2" class="form-label">Address 2</label>
                <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"></input>
              </div>
              <div class="col-md-6">
                <label for="inputCity" class="form-label">City</label>
                <input type="text" class="form-control" id="inputCity"></input>
              </div>
              <div class="col-md-4">
                <label for="inputState" class="form-label">State</label>
                <select id="inputState" class="form-select">
                  <option selected>Choose...</option>
                </select>
              </div>
              <div class="col-md-2">
                <label for="inputZip" class="form-label">Zip</label>
                <input type="text" class="form-control" id="inputZip"></input>
              </div>
              <div class="col-12">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" id="gridCheck"></input>
                  <label class="form-check-label" for="gridCheck">
                    Check me out
                  </label>
                </div>
              </div>
              <div class="col-12">
                <button type="submit" class="btn btn-success"> <i class="bi-bag-check"></i> Order</button>
              </div>
            </form>


            <div class="card collapse" style="width: 18rem;">
              <div class="card-body">
                <h5 class="card-title">Order summary</h5>
                <p class="card-text">Here is a summary of your order.</p>
              </div>
              <ul class="list-group list-group-flush">

              </ul>
              <a href="" onclick="location.reload()" class="btn btn-secondary"> <i class="bi-arrow-left-circle"></i>
                Return</a>
            </div>


            <footer class="bd-footer py-4 py-md-5 mt-5 bg-light">
              <div class="container py-4 py-md-5 px-4 px-md-3">
                <div class="row">
                  <div class="col-lg-12 mb-3">
                    <b>SE/Com-S 319</b> Javascript form validation.
                  </div>

                </div>
              </div>
            </footer>

          </div>

          <div class="col-2"></div>


        </div>

        </div>

        <script type="text/javascript" src="script.js"></script>

      </div>
    );
  }



  //Render Choice
  if(view == 0)
  {
    return (
      <h1>Secondary view</h1>
    );
  }
  else if(view == 1)
  {
    return (
    <div>
      {render_app()}
    </div>
    );
  }
  else if(view == 2)
  {
    return (
      <div>
        {render_shop()}
      </div>
      );
  }
  else if(view == 3)
  {
    
  }

}; //end App
