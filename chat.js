(function(){
var url='https://abython.app.n8n.cloud/webhook/squarespace-chat';
var sid=null,msgc=0,isOpen=false;
function toggle(){
  isOpen=!isOpen;
  document.getElementById('chat-box').style.display=isOpen?'flex':'none';
  document.getElementById('chat-btn').textContent=isOpen?'✕':'💬';
  if(isOpen&&msgc===0){
    addMsg('bot',"Hello! I'm Abython's AI assistant. How can I help you today?");
    msgc=1;
  }
}
function addMsg(role,txt,isErr){
  var div=document.createElement('div');
  div.className='msg '+(role==='user'?'user-msg':'bot-msg')+(isErr?' error-msg':'');
  div.textContent=txt;
  var container=document.getElementById('chat-msgs');
  container.appendChild(div);
  container.scrollTop=container.scrollHeight;
}
function send(){
  var inp=document.getElementById('chat-inp');
  var msg=inp.value.trim();
  if(!msg) return;
  addMsg('user',msg);
  inp.value='';
  fetch(url,{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({sessionId:sid,message:msg,userData:{},messageCount:msgc})
  })
  .then(r=>r.json())
  .then(d=>{
    if(d.success&&d.botResponse){
      sid=d.sessionId;
      msgc=d.messageCount;
      addMsg('bot',d.botResponse);
    }else{
      addMsg('bot','Error: Invalid response',true);
    }
  })
  .catch(()=>addMsg('bot','Connection error. Please try again.',true));
}
document.getElementById('chat-btn').onclick=toggle;
document.getElementById('chat-send').onclick=send;
document.getElementById('chat-inp').onkeypress=e=>{if(e.key==='Enter')send();};
})();
