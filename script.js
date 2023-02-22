//1 display number in text box
function displayVal(num){
    // document.getElementById('display').value+=num;
    display.value+=num
    console.log(num);
}

//2 clear text box
function allClearDisplay(){
    // document.getElementById('display').value="";
    display.value="";

    //body color
    document.body.style.backgroundColor = ' #385585';
    
    //calculator background
    // mainDiv=document.getElementsByClassName(`maindiv1`).style.backgroundColor='black';
    // for(k=0;k<mainDiv.length;k++)
    // {
        //     mainDiv[k].style.backgroundColor='black';
        // }
        
    //input color
    document.getElementById(`display`).style.backgroundColor='#091a52';
    
    // maindiv
    document.querySelector(`.maindiv1`).style.backgroundColor='#646a8f';

    //number buttons
    numBtns=document.getElementsByClassName(`numBtn`);
    for(i=0;i<numBtns.length;i++)
    {
        numBtns[i].style.backgroundColor='#E0E0E0';
        numBtns[i].style.color='#000000';
        // numBtns[i].style.color='#383838';
    }

    //symbol button
    document.getElementById(`symbtn`).style.backgroundColor='#f9db96';

    //ac button
    document.getElementById(`acbtn`).style.backgroundColor='#f17916';
    document.getElementById(`acbtn`).style.color='#000000';

    //darkmode and backspace buttons
    actBtns=document.getElementsByClassName(`actbtn`);
    for(j=0;j<actBtns.length;j++)
    {
        
        actBtns[j].style.backgroundColor='#eaca15';
        actBtns[j].style.color='#000000';
    }

    //operations buttons
    opBtns=document.getElementsByClassName(`opbtn`);
    for(i=0;i<opBtns.length;i++)
    {
        opBtns[i].style.backgroundColor='#ea9d29';
        opBtns[i].style.color='#000000';
        // numBtns[i].style.color='#383838';
    }
}

//3 evaluate expression
function getResult()
{
    // exp=document.getElementById('display').value
    // exp=display.value;
    // output=eval(exp)
    // display.value=output;
    display.value=eval(display.value);
}

//4 Remove last item from text
function removeLast()
{
    display.value=display.value.slice(0,-1);

}

//5 dark Mode
function darkMode()
{
    //body color
    document.body.style.backgroundColor ='#031201';
    // document.body.style.backgroundColor ='#242424';
    
    //calculator background
    // mainDiv=document.getElementsByClassName(`maindiv1`).style.backgroundColor='black';
    // for(k=0;k<mainDiv.length;k++)
    // {
        //     mainDiv[k].style.backgroundColor='black';
        // }
        
    //input color
    document.getElementById(`display`).style.backgroundColor='#0c120c';

     
    // maindiv
    document.querySelector(`.maindiv1`).style.backgroundColor='#648f77';

    //number buttons
    numBtns=document.getElementsByClassName(`numBtn`);
    for(i=0;i<numBtns.length;i++)
    {
        numBtns[i].style.backgroundColor='#022222';
        numBtns[i].style.color='#f7f996';
        // numBtns[i].style.color='#383838';
    }
    

    
    //symbol button
    document.getElementById(`symbtn`).style.backgroundColor='#f5b623';

    //ac button
    document.getElementById(`acbtn`).style.backgroundColor='#7c1d0a';
    document.getElementById(`acbtn`).style.color='#ffffff';
    


    //darkmode and backspace buttons
    actBtns=document.getElementsByClassName(`actbtn`);
    for(j=0;j<actBtns.length;j++)
    {
        
        actBtns[j].style.backgroundColor='#093060';
        // actBtns[j].style.backgroundColor='#ba670a';
        actBtns[j].style.color='#ffffff';
    }

    //operations buttons
    opBtns=document.getElementsByClassName(`opbtn`);
    for(i=0;i<opBtns.length;i++)
    {
        opBtns[i].style.backgroundColor='#0e0e1c';
        opBtns[i].style.color='#f7f9f6';
        // numBtns[i].style.color='#383838';
    }

    

}

//6 enter equal
function enterKey()
{
    KeyboardEvent
}