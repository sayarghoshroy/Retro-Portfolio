var arr=["./pics/19.jpg","./pics/23.jpg","./pics/24.jpg","./pics/26.jpg","./pics/25.jpg","./pics/8.jpg","./pics/12.jpg","./pics/11.jpg","./pics/10.jpg","./pics/6.jpg","./pics/22.jpg","./pics/27.jpg","./pics/13.jpg"];
var nxt=0;
var flag=0;
var counter=setInterval(next,3000);

function change(k)
{
  document.getElementById("pic").src=arr[k];
  if(flag==0)
  {
    counter=clearInterval(counter);
    counter=setInterval(next,3000);
  }
}

function next()
{
  if(nxt==arr.length-1)
    nxt=0;
  else
    ++nxt;
  change(nxt);
}

function prev()
{
  if(nxt==0)
  {
    nxt=arr.length-1;
  }
  else
  {
    --nxt;
  }
  change(nxt);
}

function stop()
{
  flag=1;
  counter=clearInterval(counter);
}

function start()
{
  if(flag==1)
  {
    flag=0;
    counter=setInterval(next,3000);
  }
}
