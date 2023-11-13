var likes=document.getElementsByClassName('like')
console.log(likes)
for(let i=0;i<likes.length;i++)


 {
     let like=likes[i]
     like.addEventListener('click',function(){

     
         if(like.style.color=='red'){
             like.style.color='black';
         }else
            like.style.color='red'

     
    } )
}
//plus button 

    let plus = document.getElementsByClassName('plus-btn')
    var qt = document.getElementsByClassName('Quant')

    for(let i=0;i<plus.length;i++){
        plus[i].addEventListener('click',function (){
            qt[i].value++ 
            total()
        })
        

    }
    //min button 
    let minus = document.getElementsByClassName('minus-btn')
    console.log(minus)
    var qt = document.getElementsByClassName('Quant')
    for(let i=0;i<minus.length;i++){
        minus[i].addEventListener('click', function(){
            if(qt[i].value >1){
                qt[i].value--
                total()
            }
        })
    }
    //delete function 

    let del = document.querySelectorAll('.delete')

    for (let i=0;i<del.length;i++){
    
        del[i].addEventListener('click' , function (){
        del[i].parentElement.remove();
        total()
        })
        console.log(del)

    }// total function 
     function total(){
         var total=document.getElementById('finalPrice')
         var item=document.getElementsByClassName('Item')
var sum=0
         for (i=0;i<item.length;i++)

         {
        sum =sum +  item[i].querySelector(".Quant").value *item[i].querySelector('.price').innerHTML 
        console.log(sum)
         }
         return(total.value=sum)
        }

