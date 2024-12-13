
// document.querySelectorAll('button').forEach(function(zahraa){
//     zahraa.onclick = function(event){
//         document.querySelector("#result").style.color = event.target.id ;
//     }
// })

// ===============================================

document.querySelectorAll('button').forEach(function(zahraa){
    zahraa.onclick = function(){
        document.querySelector("#result").style.color = zahraa.dataset.color ;
    }
})
// ======================================================================

// <h2 id="demo" class="mouse">Zahraa Yasser</h2>

var newTag = document.createElement('h2');

var myText = document.createTextNode('Zahraa Yasser');
newTag.appendChild(myText);
newTag.className ="mouse";
newTag.setAttribute("id","demo");

var locElement = document.querySelector('.pen');
locElement.insertBefore(newTag,locElement.children[1]);

document.querySelector('#demo').style.color = "red";





