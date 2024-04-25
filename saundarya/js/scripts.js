const slides=document.querySelector(".sliderdiv").children;
const slideprev=document.querySelector(".slideprev");
const slidenext=document.querySelector(".slidenext");
const slideindicator=document.querySelector(".slideindicator");
let index=0;


  slideprev.addEventListener("click",function(){
      prevSlide();
      updateCircleIndicator(); 
      resetTimer();
  })

  slidenext.addEventListener("click",function(){
     nextSlide(); 
     updateCircleIndicator();
     resetTimer();
     
  })

  // create circle indicators
   function circleIndicator(){
       for(let i=0; i< slides.length; i++){
         const div=document.createElement("div");
               div.innerHTML=i+1;
               div.setAttribute("onclick","indicateSlide(this)")
               div.id=i;
               if(i==0){
                 div.className="active";
               }
              slideindicator.appendChild(div);
       }
   }
   circleIndicator();

   function indicateSlide(element){
        index=element.id;
        changeSlide();
        updateCircleIndicator();
        resetTimer();
   }
    
   function updateCircleIndicator(){
     for(let i=0; i<slideindicator.children.length; i++){
       slideindicator.children[i].classList.remove("active");
     }
     slideindicator.children[index].classList.add("active");
   }

  function prevSlide(){
     if(index==0){
       index=slides.length-1;
     }
     else{
       index--;
     }
     changeSlide();
  }

  function nextSlide(){
     if(index==slides.length-1){
       index=0;
     }
     else{
       index++;
     }
     changeSlide();
  }

  function changeSlide(){
           for(let i=0; i<slides.length; i++){
              slides[i].classList.remove("active");
           }

      slides[index].classList.add("active");
  }

  function resetTimer(){
      // when click to indicator or controls button 
      // stop timer 
      clearInterval(timer);
      // then started again timer
      //timer=setInterval(autoPlay,4000);
  }

 
 //function autoPlay(){
    // nextSlide();
    // updateCircleIndicator();
// }

 //let timer=setInterval(autoPlay,4000);







