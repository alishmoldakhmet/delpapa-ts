import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { getEffectiveConstraintOfTypeParameter, textChangeRangeIsUnchanged } from 'typescript';


@Component({
  selector: 'app-newmain',
  templateUrl: './newmain.component.html',
  styleUrls: ['./newmain.component.css']
})
export class NewmainComponent implements OnInit {
  
  constructor() {}
  massiv:boolean;
  result:string;
  model:boolean;
  pages:boolean;
  first:number[];
  sum:number;
  cash:number;
  i:number;
  total_sum:number;
  total_price:number;
  options:any[];
  option:Options;
  ngOnInit(): void {
    this.massiv=false;
    this.result='';
    this.model=false;
    this.pages=true;
    this.first=[];
    for(this.i=0;this.i<50;this.i++){
      this.first[this.i]=0;
    }
    this.sum=this.first[0]+this.first[1];
    this.cash=0;
    this.total_price=0;
    this.total_sum=0;
    this.options=[];
    this.option={
      img:'',
      count:0,
      name:'',
      desc:'',
      price:'',

    }
  }
  
  
  changethePage(){
    this.pages=!this.pages;
    
  }
  deleteResult(){
    this.result='';
    this.options=[];
  }
  isEdit(){
  this.model=!this.model;
 }
  firstPlus(b:number){
   this.first[b]++;
   this.sum++;
   this.cash+=1500;
  }
  firstMinus(b:number){
    if(this.first[b]>0){
    this.first[b]--;
    this.sum--;
    this.cash-=1500;
    if(this.first[b]<0){
      this.first[b]=0;
    }
    if(this.sum<0){
      this.sum=0;
    }
    if(this.cash<0){
      this.cash=0;
    }
  }}
  toBasket(){
    // var mycontainer = ((document.querySelector("#orderss")) as HTMLElement);
    // console.log(mycontainer.innerText)
    this.result=' ';
    for(var i=0;i<50;i++){
      if(this.first[i]>0){
        
        var g = String(i);
        var img1 = (document.querySelector('#img-'+g)).getAttribute('src');
        var input1 = Number((document.getElementById('input-'+g) as HTMLElement).innerText);
        var price1 = (document.getElementById('price-'+g) as HTMLElement).innerText;
        var desc1 = (document.getElementById('desc-'+g) as HTMLElement).innerText;
        var name1 = (document.getElementById('name-'+g) as HTMLElement).innerText;
        this.option={
          img:img1,
          count:input1,
          name:name1,
          desc:desc1,
          price:price1
        }
        this.options.push(this.option);
      
      
      
      }
    }
    let DisplayMessage = '';
    this.options.forEach(function(item,i){
    
    DisplayMessage += `
      <li>
        <div>
          <div>
            <h10 class="item-name1">${item.name}  x${item.count} </h10>
            <p class="item_desc1" id="item-desc11" font-size='1px' !important;>${item.desc}</p>
            <label class="item-price1">${item.price}</label>
          </div>
          <div float='right'>
            <img class="sup-1 col-xs-5" id="img-1" src='${item.img}' width='107px' height='70px;' float='right' alt="789123">
          </div>
        </div>
      </li>
      
    `
       
        
    });
    this.result=DisplayMessage;
  }
  

}
interface Options{
  img:string;
  count:number;
  name:string,
  desc:string,
  price:string,
}






