//首頁熱門商品左右移動

 function move(num){
    //取得幾個cards
    //取得當前值
    //for 迴圈設定每一個值
    var hotContrl=document.getElementsByClassName("card");
    for (let j = 0; j < hotContrl.length; j++) {
            hotContrl[j].style.right= `${num*1}px`;        
        }
        var xValue = parseInt(window.getComputedStyle(hotContrl[0]).getPropertyValue("right"));
        if (num==-1) {
            for (let i = 0; i < hotContrl.length; i++) { 
                
                hotContrl[i].style.transitionDuration = "1s";
                hotContrl[i].style.right= (xValue-150)+'px';
            }
       
        } else {
            for (let i = 0; i < hotContrl.length; i++) { 
                
                hotContrl[i].style.transitionDuration = "1s";
                hotContrl[i].style.right= (xValue+150)+'px';
            }
            
    }
    
 }
//顯示所有商品grid or list，點選按鈕時按鈕要變色
function showProducts(showType) {
    //找出該container id 
    //如過showType是grid顯示grid list隱藏，若是list顯示list grid隱藏
    //給予display的值
    //find btn background
    // five background value
    var listDiv = document.getElementById("list-content");
    var gridDiv = document.getElementById("grid-content");
    var listBtn = document.querySelector(".btn-items-list");
    var gridBtn = document.querySelector('.btn-items-grid');
    var btnColor = window.getComputedStyle(listBtn).getPropertyValue("background-color");
    if (showType == "list") {
        gridDiv.style.display="none";
        listDiv.style.display="block";
        listBtn.style.backgroundColor= "rgb(117,60,29)";
        gridBtn.style.backgroundColor='rgb(191, 144, 87)';
        showPage(1,'lists');
    } else {
        gridDiv.style.display="block";
        listDiv.style.display="none";
        listBtn.style.backgroundColor= "rgb(191, 144, 87)";
        gridBtn.style.backgroundColor='rgb(117,60,29)';
        showPage(1,'grids');
    }
}
//顯示分頁
// 取得ul li分頁
//取得每頁內容div 的id 
// 點選頁數時先間將原本的頁數隱藏 再顯示該頁數
//分頁樣式移除active class 該頁數增加active class
function showPage(pageNum,type) {
    var totalPage=2;
    var gridUl = document.getElementById("grids-pages").querySelectorAll(".page-item");
    var listUl = document.getElementById("lists-pages").querySelectorAll(".page-item");
    if (type =="grids") {
        for (var i=1;i<=totalPage;i++){
            document.getElementById("grid-page"+i).style.display="none";
            document.getElementById("grid-page"+pageNum).style.display="flex";
            
        }
        switch(pageNum){
            case 1:
                gridUl[0].classList.add("active");
                gridUl[1].classList.remove("active");
                break;
            case 2:
                gridUl[1].classList.add("active");
                gridUl[0].classList.remove("active");
        }
        
    } else {
        for (var i=1;i<=totalPage;i++){
            document.getElementById("list-page"+i).style.display="none";
            document.getElementById("list-page"+pageNum).style.display="block";
        }
        switch(pageNum){
            case 1:
                listUl[0].classList.add("active");
                listUl[1].classList.remove("active");
                break;
            case 2:
                listUl[1].classList.add("active");
                listUl[0].classList.remove("active");
        }
    }    
}
//顯示宅配或是超商
function showShipping() {
    //找area id
    //找input id 超商或宅配
    // 如果是超商 show cnvArea
    //如果是宅配 show homeDeliver
    if (document.getElementById("cnvDeliver").checked) {
        document.getElementById("cnvArea").style.display="block";
    } else if(document.getElementById("homeDeliver").checked) {
        document.getElementById("cnvArea").style.display="none";
        document.getElementById("homeDeArea").style.display="block";
    }
    
    
}
/////////////////購物車
//取得add to cart button數量
let carts =document.querySelectorAll('.addToCart');
//addeventlistener 每案一次都會執行 (和顯示購物車的div隱藏空的的div)
for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click',()=>{
        setCartNums(products[i]);
        totalPrice(products[i]);
    })
    
}
//console.log(carts);
//設定product資料
let products =[
    {
        id:1,
        name:"野莓巧克力蛋糕",
        price:80,
        inCart:0,
        sum:0,
        img:"img/cake1.jpg"
    },
    {
        id:2,
        name:"黑森林巧克力蛋糕",
        price:210,
        inCart:0,
        sum:0,
        img:"img/cake2.jpg"
    },{
        id:3,
        name:"奶油酥餅乾",
        price:150,
        inCart:0,
        sum:0,
        img:"img/cookie1.jpg"
    },{
        id:4,
        name:"阿薩姆紅茶餅乾",
        price:180,
        inCart:0,
        sum:0,
        img:"img/cookie2.jpg"
    },{
        id:5,
        name:"客製化蛋糕*4",
        price:290,
        inCart:0,
        sum:0,
        img:"img/customize1.jpg"
    },{
        id:6,
        name:"客製化蛋糕*2",
        price:180,
        inCart:0,
        sum:0,
        img:"img/customize2.jpg"
    },{
        id:7,
        name:"柳橙水果派",
        price:310,
        inCart:0,
        sum:0,
        img:"img/fruitPie.jpg"
    },{
        id:8,
        name:"小餅乾禮盒",
        price:180,
        inCart:0,
        sum:0,
        img:"img/giftBox.jpg"
    },{
        id:9,
        name:"藍莓派",
        price:290,
        inCart:0,
        sum:0,
        img:"img/pie1.jpg"
    },{
        id:10,
        name:"野莓塔",
        price:70,
        inCart:0,
        sum:0,
        img:"img/pie2.jpg"
    },{
        id:11,
        name:"五穀南瓜派",
        price:230,
        inCart:0,
        sum:0,
        img:"img/pie3.jpg"
    },{
        id:12,
        name:"紅豆派",
        price:220,
        inCart:0,
        sum:0,
        img:"img/pie4.jpg"
    },{
        id:13,
        name:"巧克力小蛋糕",
        price:75,
        inCart:0,
        sum:0,
        img:"img/smallCake.jpg"
    },{
        id:14,
        name:"熔岩巧克力蛋糕",
        price:90,
        inCart:0,
        sum:0,
        img:"img/smallCake1.jpg"
    },{
        id:15,
        name:"玫瑰蘋果塔",
        price:65,
        inCart:0,
        sum:0,
        img:"img/smallCake2.jpg"
    },{
        id:16,
        name:"黑咖啡小蛋糕",
        price:65,
        inCart:0,
        sum:0,
        img:"img/smallCake3.jpg"
    },{
        id:17,
        name:"Oreo杯子蛋糕",
        price:75,
        inCart:0,
        sum:0,
        img:"img/smallCake4.jpg"
    },{
        id:18,
        name:"紅花婚禮蛋糕",
        price:350,
        inCart:0,
        sum:0,
        img:"img/weddingCake.jpg"
    },{
        id:19,
        name:"3層式結婚蛋糕",
        price:410,
        inCart:0,
        sum:0,
        img:"img/weddingCake2.jpg"
    },{
        id:20,
        name:"典雅結婚蛋糕",
        price:310,
        inCart:0,
        sum:0,
        img:"img/weddingCake3.jpg"
    },{
        id:1,
        name:"野莓巧克力蛋糕",
        price:80,
        inCart:0,
        sum:0,
        img:"img/cake1.jpg"
    },
    {
        id:2,
        name:"黑森林巧克力蛋糕",
        price:210,
        inCart:0,
        sum:0,
        img:"img/cake2.jpg"
    },{
        id:3,
        name:"奶油酥餅乾",
        price:150,
        inCart:0,
        sum:0,
        img:"img/cookie1.jpg"
    },{
        id:4,
        name:"阿薩姆紅茶餅乾",
        price:180,
        inCart:0,
        sum:0,
        img:"img/cookie2.jpg"
    },{
        id:5,
        name:"客製化蛋糕*4",
        price:290,
        inCart:0,
        sum:0,
        img:"img/customize1.jpg"
    },{
        id:6,
        name:"客製化蛋糕*2",
        price:180,
        inCart:0,
        sum:0,
        img:"img/customize2.jpg"
    },{
        id:7,
        name:"柳橙水果派",
        price:310,
        inCart:0,
        sum:0,
        img:"img/fruitPie.jpg"
    },{
        id:8,
        name:"小餅乾禮盒",
        price:180,
        inCart:0,
        sum:0,
        img:"img/giftBox.jpg"
    },{
        id:9,
        name:"藍莓派",
        price:290,
        inCart:0,
        sum:0,
        img:"img/pie1.jpg"
    },{
        id:10,
        name:"野莓塔",
        price:70,
        inCart:0,
        sum:0,
        img:"img/pie2.jpg"
    },{
        id:11,
        name:"五穀南瓜派",
        price:230,
        inCart:0,
        sum:0,
        img:"img/pie3.jpg"
    },{
        id:12,
        name:"紅豆派",
        price:220,
        inCart:0,
        sum:0,
        img:"img/pie4.jpg"
    },{
        id:13,
        name:"巧克力小蛋糕",
        price:75,
        inCart:0,
        sum:0,
        img:"img/smallCake.jpg"
    },{
        id:14,
        name:"熔岩巧克力蛋糕",
        price:90,
        inCart:0,
        sum:0,
        img:"img/smallCake1.jpg"
    },{
        id:15,
        name:"玫瑰蘋果塔",
        price:65,
        inCart:0,
        sum:0,
        img:"img/smallCake2.jpg"
    },{
        id:16,
        name:"黑咖啡小蛋糕",
        price:65,
        inCart:0,
        sum:0,
        img:"img/smallCake3.jpg"
    },{
        id:17,
        name:"Oreo杯子蛋糕",
        price:75,
        inCart:0,
        sum:0,
        img:"img/smallCake4.jpg"
    },{
        id:18,
        name:"紅花婚禮蛋糕",
        price:350,
        inCart:0,
        sum:0,
        img:"img/weddingCake.jpg"
    },{
        id:19,
        name:"3層式結婚蛋糕",
        price:410,
        inCart:0,
        sum:0,
        img:"img/weddingCake2.jpg"
    },{
        id:20,
        name:"典雅結婚蛋糕",
        price:310,
        inCart:0,
        sum:0,
        img:"img/weddingCake3.jpg"
    }

]
//設定購物車商品數量美按一次會增加數字 存至localstorage
//如果數字為零時按下按鈕數字設為一 ，反之+1
//在放入購物車數字中
function setCartNums(product) {
    
    let productsNum = localStorage.getItem('cartNums');
    productsNum=parseInt(productsNum);
    if (productsNum){
        localStorage.setItem('cartNums',productsNum+1);
        document.querySelector('.badge').textContent=productsNum+1;
    }else{
        localStorage.setItem('cartNums',1);
        document.querySelector('.badge').textContent=1;
    }
    setProducts(product);
    
}
//設定商品資訊,數量,品名
//設定小計
//將數值轉為json字串
function setProducts(product) {
    let cartItems=localStorage.getItem('productsInCart');
    cartItems= JSON.parse(cartItems);
    
    if(cartItems !=null){
        if(cartItems[product.id]==undefined){
            cartItems={
                ...cartItems,
                [product.id]:product
            }
        }
        cartItems[product.id].inCart+=1;
        cartItems[product.id].sum=cartItems[product.id].price*cartItems[product.id].inCart;
    }else{
        product.inCart=1;
        product.sum+=product.price;
        cartItems={
            
            [product.id]:product
        }
        
    }
    localStorage.setItem('productsInCart',JSON.stringify(cartItems));
}
//計算價錢總金額
function totalPrice(product) {
    let cartCost = localStorage.getItem('totalPrice');
    if(cartCost !=null){
        cartCost=parseInt(cartCost);
        localStorage.setItem('totalPrice',cartCost+product.price);
    }else{
        localStorage.setItem('totalPrice',product.price);
    }
   
}

//更新購物車的數字，並在刷新網頁時讀取localstroage的資料
function loadCartNums() {
    let productsNum=localStorage.getItem('cartNums');
    if(productsNum){
        document.querySelector('.badge').textContent=productsNum;
    }
}
function displayCart() {
    let cartItems= localStorage.getItem('productsInCart');
    cartItems= JSON.parse(cartItems);
    let productTr = document.querySelector('tbody');
    if(cartItems){
        productTr.innerHTML=``;
        Object.values(cartItems).map(item=>{
            
            productTr.innerHTML+=`
                <tr>
                <td colspan="2"><img class="img-size" src="${item.img}" alt="">${item.name}</td>
                <td>${item.price}</td>
                <td>
                <button onclick='changeQuantity("decrease",${item.id})' class="quantity-btn">-</button>
                <label >${item.inCart}</label>
                <button onclick='changeQuantity("increase",${item.id})' class="quantity-btn">+</button>
                </td>
                <td>${item.sum}</td>
                <td><button onclick='removeItems(${item.id})' class="delete-btn">&times;</button></td>
            </tr>`;
        })
    }
}
function showCart(){
   let cartNums= localStorage.getItem('cartNums');
   let empty= document.getElementById('emptyCart');
   let haveProducts= document.getElementById('haveProduct');

   if (cartNums) {
       empty.style.display='none';
       haveProducts.style.display="block";
   } else{
       empty.style.display="block";
       haveProducts.style.display='none';
   }
   
}

//商品數量-+扭功能
function changeQuantity(action,id) {
    let cartItems= localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    let totalPrice= localStorage.getItem("totalPrice");
    totalPrice = JSON.parse(totalPrice);
    let cartNums= localStorage.getItem("cartNums");
    cartNums = JSON.parse(cartNums);
    //數量、小計、totalPrice
    Object.values(cartItems).map(item=>{
        if(item.id===id){
            if(action==='decrease' && item.inCart>1){
                item.inCart--;
                item.sum=item.inCart*item.price;
                totalPrice-= parseInt(item.price) ;
                cartNums--;
            }else if(action==='increase'){
                item.inCart++;
                item.sum=item.inCart*item.price;
                totalPrice+= parseInt(item.price) ;
                cartNums++;
            }
            
            return item.inCart,item.sum;
        }
    })
    localStorage.setItem("totalPrice",JSON.stringify(totalPrice));
    localStorage.setItem('productsInCart',JSON.stringify(cartItems));   
    localStorage.setItem('cartNums',JSON.stringify(cartNums));   
}
//移除一項品項(購物車數量、總金額更新，小計和數量歸零)
function removeItems(id) {
    let cartItems= localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    let totalPrice= localStorage.getItem("totalPrice");
    totalPrice = JSON.parse(totalPrice);
    let cartNums= localStorage.getItem("cartNums");
    cartNums = JSON.parse(cartNums);
    let empty= document.getElementById('emptyCart');
   let haveProducts= document.getElementById('haveProduct');
    Object.values(cartItems).map(item=>{
        if (item.id === id){
            cartNums-=item.inCart;
            totalPrice-=item.sum;
            item.sum=0;
            item.inCart=0;
            localStorage.setItem("totalPrice",JSON.stringify(totalPrice));
            localStorage.setItem('cartNums',JSON.stringify(cartNums)); 
        }
        delete cartItems[id];
        if(cartNums==0){
            localStorage.clear();
        }
        return item.sum,item.inCart;
        
    })
    
    localStorage.setItem('productsInCart',JSON.stringify(cartItems));   
    
    
}
removeItems();
//商品價位總計
function showProductsSum() {
    let productsSumLabel=document.getElementById('productSum');
    let cartItems=localStorage.getItem('totalPrice');
    productsSumLabel.innerText=cartItems;
}
//顯示運費
function showShippingPrice() {
    let shippingPriceLabel = document.getElementById('shippingPrice');
    let familyMart = document.getElementById("familyMart");
    let seven = document.getElementById("seven-11");
    
    if (seven.checked) {
        shippingPriceLabel.innerText=seven.value;
    } else if(familyMart.checked){
        shippingPriceLabel.innerText=familyMart.value;
    } 
    
}
//顯示應付金額
function showTotPriceLabel() {
    let totalLsbel =document.getElementById('totPriceLabel');
    let shipLabel=parseInt(document.getElementById('shippingPrice').innerText) ;
    let productsLabel=parseInt(document.getElementById('productSum').innerText) ;
    totalLsbel.innerText=`NT$${shipLabel+productsLabel}`;
}
showCart();
loadCartNums();
displayCart();
showProductsSum();
showTotPriceLabel();


document.getElementById("seven-11").addEventListener('click',()=>{
    showShippingPrice();
    showTotPriceLabel();
});
document.getElementById("familyMart").addEventListener('click',()=>{
    showShippingPrice();
    showTotPriceLabel();
});
document.getElementById('homeDeliver').addEventListener('click',()=>{
    let TW = document.getElementById('TWarea');
    let shippingPriceLabel = document.getElementById('shippingPrice');
    
    if (TW.checked) {
        shippingPriceLabel.innerText=TW.value;
        showTotPriceLabel();
    } 
})
document.getElementById('aboard').addEventListener('click',()=>{
    let aboard = document.getElementById('aboard');
    let shippingPriceLabel = document.getElementById('shippingPrice');
    if(aboard.checked){
        shippingPriceLabel.innerText=aboard.value;
        showTotPriceLabel();
    }
    
})
document.getElementById('TWarea').addEventListener('click',()=>{
    let shippingPriceLabel = document.getElementById('shippingPrice');
    let TWarea = document.getElementById('TWarea');
    if(TWarea.checked){
        shippingPriceLabel.innerText=TWarea.value;
        showTotPriceLabel();
    }
})

