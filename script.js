let productList = [
    {
      name: "Cà phê đen đá",
      price: 58.0,
      imageURL:
        "https://product.hstatic.net/1000075078/product/1684482557_bg-product-1_40cb5702216b434d8bf8411fac229aa0_large.jpg",
      quantity: 10,
    },
    {
      name: "Cà Phê Đen Đá Túi (30 gói x 16g)",
      price: 110.0,
      imageURL:
        "https://product.hstatic.net/1000075078/product/1684482444_bg-product-22_6caf7d1330344740b30943de30fef59d_large.jpg",
      quantity: 10,
    },
    {
      name: "Cà phê đen đá ít đá",
      price: 39.0,
      imageURL:
        "https://product.hstatic.net/1000075078/product/1684482557_bg-product-1_40cb5702216b434d8bf8411fac229aa0_large.jpg",
      quantity: 10,
    },
    {
      name: "Cà phê đen đá không đá",
      price: 39.0,
      imageURL:
        "https://product.hstatic.net/1000075078/product/1684482557_bg-product-1_40cb5702216b434d8bf8411fac229aa0_large.jpg",
      quantity: 10,
    },
  ];
  
  let header = document.getElementById("head");
  header.innerHTML = `<img src="https://brademar.com/wp-content/uploads/2022/10/The-Coffee-House-Logo-PNG-2.png" alt="">
  <div id="buttonGroup"> 
          <div id="button">Cà phê</div>
          <div id="button">Trà</div>
          <div id="button">Menu</div>
          <div id="button">Chuyện nhà</div>
          <div id="button">Cảm hứng CloudFee</div>
          <div id="button">Cửa hàng</div>
          <div id="button">Tuyển dụng</div>
  </div>`
  
  let products = document.getElementsByClassName("product");
  console.log(products);
  
  function buildProductCard(cafe) {
    let card = document.createElement("div");
    card.className = "consum";
    Object.assign(card.style, {
        alignItem: "center",
    //   backgroundColor: "green",
    });
    card.innerHTML = `
      <img
      src="${cafe.imageURL}"
      alt=""
    />
    <div class="item">
      <div class="item-detail">
        <div class="name"><b>${cafe.name}</b></div>
        <div class="cost"><b>${cafe.price}₫</b></div>
      </div>
      <div class="item-desc">Số lượng ${cafe.quantity}</div>
    
    </div>
      `;
    let btnBox = document.createElement("div");
    btnBox.className = "bot-card";
  
    let btnAdd = document.createElement("button");
    let boldText = document.createElement("b");
    boldText.innerText = "Thêm";
  
    btnAdd.appendChild(boldText);
    btnBox.appendChild(btnAdd);
    card.appendChild(btnBox);
  
    btnBox.addEventListener("click", () => {
      if (cafe.quantity > 0) {
        cafe.quantity--;
        addToCart(cafe);
        card.innerHTML = `
          <img
          src="${cafe.imageURL}"
          alt=""
        />
        <div class="item">
          <div class="item-detail">
            <div class="name"><b>${cafe.name}</b></div>
            <div class="cost"><b>${cafe.price}₫</b></div>
          </div>
          <div class="item-desc">Số lượng ${cafe.quantity}</div>
  
        </div>
          `;
        btnAdd.appendChild(boldText);
        btnBox.appendChild(btnAdd);
        card.appendChild(btnBox);
      } else {
        alert("Hết sản phẩm rồi !!!!");
        return;
      }
    });
  
    return card;
  }
  
  let cartList = [];
  
  function addToCart(cafe) {
    let isExist = false;
    if (cartList.length == 0) {
      cartList.push({
        ...cafe,
        stock: 1,
        quantity: cafe.quantity,
      });
      console.log(cartList);
      return;
    }
    for (let i = 0; i < cartList.length; i++) {
      if (cartList[i].name == cafe.name) {
        cartList[i].quantity = cafe.quantity;
        cartList[i].stock += 1;
        console.log(cartList);
        isExist = true;
        return;
      }
    }
    if (!isExist) {
      cartList.push({
        ...cafe,
        quantity: cafe.quantity,
        stock: 1,
      });
      console.log(cartList);
    }
  }
  
  for (let j = 0; j < productList.length; j++) {
    products[0].appendChild(buildProductCard(productList[j]));
  }
  
  console.log(header);