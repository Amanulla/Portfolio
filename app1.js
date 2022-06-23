// Get the modal

var modal = document.getElementsByClassName("myModal");
var btn = document.getElementsByClassName("myBtn");
var span = document.getElementsByClassName("close");

function setDataIndex() {

    for (i = 0; i < btn.length; i++)
    {
        btn[i].setAttribute('data-index', i);
        modal[i].setAttribute('data-index', i);
        span[i].setAttribute('data-index', i);
    }
    
}

window.onload = function() {

    setDataIndex();
};

for (i = 0; i < btn.length; i++)
{
    btn[i].onclick = function() {
        var ElementIndex = this.getAttribute('data-index',i);
        modal[ElementIndex].style.display = "block";
    };

    span[i].onclick = function() {
        var ElementIndex = this.getAttribute('data-index',i);
        modal[ElementIndex].style.display = "none";
    };

}


window.onclick = function(event) {
    if (event.target === modal[event.target.getAttribute('data-index')]) {
        modal[event.target.getAttribute('data-index')].style.display = "none";
    }
};


