let mili=0;
let sec=0;
let min=0;
let lapcount=0;
let s;

function timer(){
    mili+=1;
    if(mili==100)
    {
        mili=0;
        sec++;
        if(sec==60)
        {
            sec=0;
            min++;
        }
    }
    let a=mili, b=sec, c=min;
    if(mili<10)
    {
        a="0"+mili;
    }
    if(sec<10)
    {
        b="0"+sec;
    }
    if(min<10)
    {
        c="0"+min;
    }

    document.getElementById("time").innerText=`${c}:${b}:${a}`;
}

function startclicked(event)
{
    let p=document.getElementById("buttons");
    p.replaceChild(stop,event.target);
    p.replaceChild(lap,p.children[0]);
    s=setInterval(timer,10);

}
function stopclicked(event)
{
    clearInterval(s);
    let p=document.getElementById("buttons");
    p.replaceChild(reset,p.children[0]);
    p.replaceChild(start,event.target);



    
}
function lapclicked(event)
{
    if(mili==0)
    {
        return;
    }
    let a=mili, b=sec, c=min;
    if(mili<10)
    {
        a="0"+mili;
    }
    if(sec<10)
    {
        b="0"+sec;
    }
    if(min<10)
    {
        c="0"+min;
    }



    lapcount++;

    let ele=document.createElement("div");
    ele.style.color="grey";

    let lt=document.createElement("span");
    lt.innerText="Lap "+lapcount;

    let rt=document.createElement("span");
    rt.innerText=`${c}:${b}:${a}`;


    
    ele.appendChild(lt);
    ele.appendChild(rt);
    ele.style.display="flex";
    ele.style.justifyContent="space-around";
    
    let hr=document.createElement("hr");
    hr.style.color="grey";
    
    let laps=document.getElementById("laps");

    laps.appendChild(ele);
    laps.appendChild(hr);
    
    
}
function resetclicked(event)
{
    document.getElementById("time").innerText="00:00:00";
    mili=0;
    sec=0;
    min=0;
    lapcount=0;

    let p=document.getElementById("laps");
    p.innerHTML="<hr class='hr'>";

    let bt=document.getElementById("buttons");
    bt.replaceChild(lap,bt.children[0]);





}




//start button
let start=document.createElement("button");
start.innerText="START";
start.setAttribute("class","button");
start.addEventListener("click",startclicked)
start.style.backgroundColor="#0b231a";
start.style.color="#33a13c";

//stop button
let stop=document.createElement("button");
stop.innerText="STOP";
stop.setAttribute("class","button");
stop.addEventListener("click",stopclicked)
stop.style.backgroundColor="#351614";
stop.style.color="red";


//lap button
let lap=document.createElement("button");
lap.innerText="LAP";
lap.setAttribute("class","button");
lap.addEventListener("click",lapclicked)
lap.style.backgroundColor="#353535";
lap.style.color="white";

//reset button
let reset=document.createElement("button");
reset.innerText="RESET";
reset.setAttribute("class","button");
reset.addEventListener("click",resetclicked)
reset.style.backgroundColor="#290606";
reset.style.color="red";

//lap element





document.getElementById("time").innerText="00:00:00";
let b=document.getElementById("buttons");
b.appendChild(lap);
b.appendChild(start);





