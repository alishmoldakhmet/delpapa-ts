
let first = [];
for(var i=0;i<10;i++){
    first[i]=Number(0);
}
$(function(){
    $('.ret-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        arrows: false
      })
})
$(function(){
    $('.ret2-slider').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000
    })
})
var orders=[]
var total_sum=0;
var total_cash=0;
var model=false;
var model1=false;
var pages=false;
var pages2=false;
var isEdit = function (n) {
    if(n==0){
        if (model==false){
        $('.ret2').show();
        model=true;}
        else {
        $('.ret2').hide();
        model=false;
        }
    } 
    else if(n==1){
        
        if (model1==false){
        $('.ret3').show();
        model1=true;}
        else {
        $('.ret3').hide();
        model1=false;
        }
        
    }
    
}
var changethePage = function () {
    if (pages==false){
    $('.page2').show();
    $('.page1').hide();
    pages=true;}
    else{
    $('.page1').show();
    $('.page2').hide();
    pages=false;
    }
}
var changethePage2 = function () {
    if (pages2==false){
    $('.page3').show();
    $('.page1').hide();
    pages2=true;}
    else{
    $('.page1').show();
    $('.page3').hide();
    pages2=false;
    }
}
function dcW(variable) {
    document.write(variable);
}



function firstPlus(n){
    g=Number(n);
    price_1=(document.getElementById("price-"+g).innerText);
    var price_1 = Number(price_1.replace(" ", ""));
    first[g]+=1;
    total_sum+=1;
    total_cash+=price_1;
    document.getElementById("total_sum").innerText=total_sum;
    document.getElementById("total_cash").innerText=total_cash;
    document.getElementById("total_cash_m").innerText=total_cash;
    document.getElementById("input-"+g).innerText=first[g];

    
    toBasket();

}
function firstMinus(n){
    if(first[Number(n)]>0){
    g=Number(n);
    price_1=(document.getElementById("price-"+g).innerText);
    var price_1 = Number(price_1.replace(" ", ""));
    first[g]-=1;
    total_sum-=1;
    total_cash-=price_1;
    document.getElementById("total_sum").innerText=total_sum;
    document.getElementById("total_cash").innerText=total_cash;
    document.getElementById("total_cash_m").innerText=total_cash;
    document.getElementById("input-"+g).innerText=first[g];
    
    toBasket();
    }
}
function firstPlus_2(n){
    g=Number(n);
    price_1=(document.getElementById("price-"+g).innerText);
    var price_1 = Number(price_1.replace(" ", ""));
    first[g]+=1;
    total_sum+=1;
    total_cash+=price_1;
    document.getElementById("total_sum").innerText=total_sum;
    document.getElementById("total_cash").innerText=total_cash;
    document.getElementById("total_cash_m").innerText=total_cash;
    document.getElementById("input-"+g).innerText=first[g];
    document.getElementsByClassName("blue_count"+n).innerText=first[g];

    
    toBasket();

}
function firstMinus_2(n){
    if(first[Number(n)]>0){
    g=Number(n);
    price_1=(document.getElementById("price-"+g).innerText);
    var price_1 = Number(price_1.replace(" ", ""));
    first[g]-=1;
    total_sum-=1;
    total_cash-=price_1;
    document.getElementById("total_sum").innerText=total_sum;
    document.getElementById("total_cash").innerText=total_cash;
    document.getElementById("total_cash_m").innerText=total_cash;
    document.getElementById("input-"+g).innerText=first[g];
    document.getElementsByClassName("blue_count"+n).innerText=first[g];
    
    toBasket();
    }
}
function deleteResult(){
    orders=[];
}
function DeleteFromBasket(n){
    orders=[];
    g=Number(n);
    first[g]=0;
    document.getElementById("input-"+g).innerText=first[g];
    toBasket();
    
}
function toBasket(){
    deleteResult();
    var result='';
    for(var i=0;i<10;i++){
        if (first[i]>0){
            var g = String(i);
            var img1 = (document.querySelector('#img-'+g)).getAttribute('src');
            var input1 = Number((document.getElementById('input-'+g)).innerText);
            var price1 = (document.getElementById('price-'+g)).innerText;
            var desc1 = (document.getElementById('desc-'+g) ).innerText;
            var name1 = (document.getElementById('name-'+g)).innerText;
            var Order={
                img:img1,
                count:input1,
                name:name1,
                desc:desc1,
                price:price1
            }
            orders[i]=(Order);
        }
    }
    var DisplayMessage = '';
    orders.forEach(function(item,i){
    
    
    DisplayMessage += ` 
      <li>
        <div class='order_2''>
          <div class='order_words'>
            <h6 class="item-name1 str_order winston">${item.name}   <span class='winston' id='blue_count${i}'>x${item.count}</span>  
            <p class="item_desc1 str_order winston" font-size='1px' !important;>${item.desc}</p>
            <label class="item-price1 str_order winston">${item.price}</label>
            <div class='newbutton'><button class='new-button' type="button" onclick=firstMinus_2(${i})>-</button><button class='new-button' type="button" onclick=firstPlus_2(${i})>+</button></div>
            
          </div>
          
            <img class="col-xs-5" id="img_1" src='${item.img}' alt="789123">
            <span class='garbage far' onclick='DeleteFromBasket(${i})'><i class="far fa-trash-alt "></i></span>
        </div>
        <svg height="2" width="600">
        <line x1="0" y1="0" x2="600" y2="0" style="stroke:rgba(230, 230, 230, 1);stroke-width:88" />
        </svg>
      </li>
      `
    });
    result=DisplayMessage;
    var mycontainer = document.querySelector('#orderss');
    mycontainer.innerHTML=result;

}
var color_number=0;
var result2='';
function toHistory(){
    if(color_number==0){
        var c_n=0;
        color_number=1;
    }
    else if(color_number==1){
        var c_n=1;
        color_number=2;
    }
    else if(color_number==2){
        var c_n=2;
        color_number=0;
    }
    var now = new Date();
    var DisplayMessage2 = '';
    orders.forEach(function(item,i){
    DisplayMessage2+=`
    <li>
    <div class='order_2 c-n${c_n}'>
      <div class='order_words'>
        <h6 class="item-name1 str_order winston">${item.name}   <span class='winston' id='blue_count${i}'>x${item.count}</span>  
        <p class="item_desc1 str_order winston" font-size='1px' !important;>${item.desc}</p>
        <label class="item-price1 str_order winston">${item.price}</label>
      </div>
    </div>
    <svg height="2" width="600">
    <line x1="0" y1="0" x2="600" y2="0" style="stroke:rgba(230, 230, 230, 1);stroke-width:88" />
    </svg>
    </li>
      `
    
    });
    DisplayMessage2 = `<li><div class='current-time'>${now}</div></li>`+DisplayMessage2;
    result2+=DisplayMessage2;
    var mycontainer2 = document.querySelector('#orderss2');
    mycontainer2.innerHTML=result2;
    for(var i=0;i<4;i++){
        first[i]=Number(0);
        total_sum=0;
        total_cash=0;
        document.getElementById("input-"+i).innerText=0;
        document.getElementById("total_sum").innerText=0;
        document.getElementById("total_cash").innerText=0;
        document.getElementById("total_cash_m").innerText=0;
    }
    toBasket();

}
// \слайд шоу

