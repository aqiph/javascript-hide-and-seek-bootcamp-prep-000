//getFirstSelector(selector)
function getFirstSelector(selector){
  return document.querySelector(selector)
}

//nestedTarget()
function nestedTarget(){
  return document.querySelector('#nested .target')
}

//increaseRankBy(n)
function increaseRankBy(n){
  let rankList = document.querySelectorAll('.ranked-list li');
  for (let i = 0; i<rankList.length;i++){
    rankList[i].innerHTML = parseInt(rankList[i].innerHTML) + n;
  }
}

//deepestChild()
function deepestChild(){
  let current = document.querySelector('div#grand-node');
  let next = current.children;
  while (next !== undefined){
    current = next;
    next = current.children;
  }
  return current
}

deepestChild()



