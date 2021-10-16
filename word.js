let answer=["I","C","E","B","E","R","G"];
let life=11,score=0;

const letter_btn=document.querySelector("#letter");
const clue_btn=document.querySelector("#clue");
const rule_btn=document.querySelector("#rules");
const submit_btn=document.querySelector("#submit");

const a1=document.querySelector("#ans1");
const a2=document.querySelector("#ans2");
const a3=document.querySelector("#ans3");
const a4=document.querySelector("#ans4");
const a5=document.querySelector("#ans5");
const a6=document.querySelector("#ans6");
const a7=document.querySelector("#ans7");

const b1=document.querySelector("#r1");
const b2=document.querySelector("#r2");
const b3=document.querySelector("#r3");
const b4=document.querySelector("#r4");
const b5=document.querySelector("#y1");
const b6=document.querySelector("#y2");
const b7=document.querySelector("#y3");
const b8=document.querySelector("#y4");
const b9=document.querySelector("#g1");
const b10=document.querySelector("#g2");
const b11=document.querySelector("#g3");
const b12=document.querySelector("#g4");

const answer_space=[a1,a2,a3,a4,a5,a6,a7];
const battery_btn=[b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12];
const alphabet=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

/*
Objective of alphabtn() function :
1. To create 26 buttons having english alphabets as text
2. To add event listener for on click event
*/
function alphabtn()
{
    for(let i=0;i<alphabet.length;i++){
        let button = document.createElement("button");
        button.innerHTML=alphabet[i];
        let btn=document.getElementsByTagName("div")[2];
        btn.appendChild(button);
        button.classList.add(".alphapanel");
        if((alphabet[i]==="I")||(alphabet[i]==="C")||(alphabet[i]==="E")||(alphabet[i]==="B")||(alphabet[i]==="R")||(alphabet[i]==="G")){
            button.addEventListener("click",function(){
                for(let j=0;j<answer.length;j++){
                    if(answer[j]===alphabet[i]){
                        score++;
                        answer_space[j].innerText=alphabet[i];
                        answer[j]=-1;
                        break;
                        
                    }
                }
            });
        }
        else{
            button.addEventListener("click",function(){
                if(life>=0){
                    alert("Oops! Wrong alphabet, you lost a life ;(");
                    battery_btn[life].style.display="none";
                    life--;
                }
                else{
                    alert("Oh no! You are out of lives.");
                }
            });
        }
    }
}

alphabtn();

//Objective : To display clue and reduce 1 life when clue button is being clicked
clue_btn.addEventListener("click",function(){
    if(life>=0){
        alert("You have only ONE clue");
        alert("Hint : It is something related to what covers about 71% of earth.       P.S. : You lost one life. Stay careful!");
        battery_btn[life].style.display="none";
        if(life>1){
            life--;
        }
    }
    else{
        alert("Oops! You don't have enough lives.");
    }
    
})

rule_btn.addEventListener("click",function(){
    alert("Rules :"+'\n'+"1. You have 12 lives."+'\n'+"2. Clue button will give a hint and 1 life will be reduced."+'\n'+"3. Letter reveal button will reveal a correct alphabet but you will lose 2 lives." +'\n'+"4. Batteries represent remaining lives and once they all disappear that means you are out of lives.");
});

//Objective : To reveal one correct letter when reveal button is being clicked and 2 lives will be reduced
letter_btn.addEventListener("click",function(){
    if(life>=1){
        for(let i=0;i<answer.length;i++){
            if(answer[i]!==-1){
                answer_space[i].innerText=answer[i];
                answer[i]=-1;
                score++;
                break;
            }
        }
        alert("You lost 2 lives!!");
        battery_btn[life].style.display="none";
        life--;
        battery_btn[life].style.display="none";
        life--;
    }
    else{
        alert("Oops! You don't have enough lives");
    }
});

submit_btn.addEventListener("click",function(){
    if(score===7){
        a1.classList.add(".hide");
        a2.classList.add(".hide");
        a3.classList.add(".hide");
        a4.classList.add(".hide");
        a5.classList.add(".hide");
        a6.classList.add(".hide");
        a7.classList.add(".hide");
        document.querySelector(".ans_btn").innerText="Congratulations! You got the answer right.";
        clue_btn.disabled=true;
        letter_btn.disabled=true;
        submit_btn.disabled=true;
        let element=document.querySelectorAll(".alphapanel button");
        for(let i=0;i<26;i++){
            element[i].disabled=true;
        }
    }

    else if(life===-1 || score!==6){
        a1.classList.add(".hide");
        a2.classList.add(".hide");
        a3.classList.add(".hide");
        a4.classList.add(".hide");
        a5.classList.add(".hide");
        a6.classList.add(".hide");
        a7.classList.add(".hide");
        document.querySelector(".ans_btn").innerText="You lost, try again. Better luck next time!";
        clue_btn.disabled=true;
        letter_btn.disabled=true;
        submit_btn.disabled=true;
        let element=document.querySelectorAll(".alphapanel button");
        for(let i=0;i<26;i++){
            element[i].disabled=true;
        }
    }
})
