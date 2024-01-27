let btn = document.getElementById('togglebtn');
let bulb = document.getElementById('bulb');
let mq = document.getElementById('mq');

btn.addEventListener('click' , togglebulb);
  function togglebulb(){
    if(btn.textContent.includes('On') && mq.textContent.includes("On") ){
            bulb.src = "on.png";
            btn.textContent = "Turn off";
            mq.textContent = "Turn off";
            btn.className = 'btn btn outline-success';
            btn.style.boxShadow = '3px 3px 4px 4px green';
            bulb.style.boxShadow = '3px 3px 4px 4px green';
            mq.style.boxShadow = '3px 3px 4px 4px green';
            mq.style.color = 'green';
}
else{
    bulb.src = "off.png";
            btn.textContent = "Turn On";
            mq.textContent = "Turn On";
            btn.className = 'btn btn outline-danger';
            btn.style.boxShadow = '3px 3px 4px 4px red';
            bulb.style.boxShadow = '3px 3px 4px 4px red';
            mq.style.boxShadow = '3px 3px 4px 4px red';
            mq.style.color = 'green';

}












}












