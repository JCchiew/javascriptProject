var index = 0;

function changeColor(){
    var color = ["red", "green", "blue", "black", "orange", "yellow"];

    document.getElementsByTagName("body")[0].style.background = color[index++];
    if(index % color.length == 0)
    {
        index = 0;
    }

}