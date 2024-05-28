
    
    // alert(" you have one chance to flipp every card !")

    // var flipp= document.getElementById("card1").style.transform="rotateY(380deg)";
    // var flipp= document.getElementById("card2").style.transform="rotateY(380deg)";
    // var flipp= document.getElementById("card3").style.transform="rotateY(380deg)";
    // var flipp= document.getElementById("card4").style.transform="rotateY(380deg)";
    // var flipp= document.getElementById("card5").style.transform="rotateY(380deg)";
    // var flipp= document.getElementById("card6").style.transform="rotateY(380deg)";
    // var flipp= document.getElementById("card7").style.transform="rotateY(380deg)";
    // var flipp= document.getElementById("card8").style.transform="rotateY(380deg)";
    // var flipp= document.getElementById("card9").style.transform="rotateY(380deg)";



    


var card = document.querySelectorAll(".cell");
var front = document.querySelectorAll(".front");
var contenair = document.getElementById("contenair")
var score = document.getElementById("score")
var startBtn = document.getElementById("startBtn")
var clicks = document.getElementById("clicks")
var wins = document.getElementById("wins")

clicks.innerText=0 ;
score.innerText=0 ;
wins.innerText=0 ;

function startbuttn() {
    document.getElementById("start").style.display="none";
    for(let i=0 ; i<card.length ; i++){
        front[i].classList.add("showCards")
        setInterval(()=>{
            front[i].classList.remove("showCards")

        },3000)
    }
}

function replay() {
    score.innerText=0 ;
    for(let i=0 ; i<card.length ; i++){
        front[i].classList.add("front")
        front[i].classList.remove("flip")
        front[i].classList.remove("match")
        document.getElementById("win").style.display="none"
        
    }
    randomizeCards()
    startbuttn()
}







randomizeCards()

function randomizeCards() {
    card.forEach(c=>{

        const num = [...Array(card.length).keys()]
        const random = Math.floor(Math.random()*card.length)

        c.style.order = num[random]

    })
}



clickingCards()
function clickingCards() {
    for(let i=0 ; i<card.length ; i++){
        

        card[i].addEventListener("click", ()=> {
            clicks.innerText++
            console.log("clicked")
            front[i].classList.add("flip")
            const flipped = document.querySelectorAll(".flip")
            

            if( flipped.length == 2 ){

                contenair.style.pointerEvents="none"
                setInterval(()=>{
                    contenair.style.pointerEvents="all"

                },1000)
                match(flipped[0],flipped[1])
            }
        })
    }

}
match()

function match(cardOne,cardTwo) {
   
    if(cardOne.dataset.index == cardTwo.dataset.index){
        
        score.innerText++

        cardOne.classList.remove("flip")
        cardTwo.classList.remove("flip")

        cardTwo.classList.add("match")
        cardOne.classList.add("match")

        console.log("match")

        if (score.innerText == 4 ) {
            
            wins.innerText++ ;
            document.getElementById("win").style.display="block"}

    }else{

        setTimeout(() => {
            cardOne.classList.remove("flip")
            cardTwo.classList.remove("flip")
        }, 1000)

    }
}


