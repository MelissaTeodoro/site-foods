/* SlideShow */
window.onload = function(){
    var index = 0;
    
    carousel();
    
    function carousel() {
        var i;
        var image = document.getElementsByClassName('slides');
        for(i = 0; i < image.length; i++) {
            image[i].style.display = "none";
        }
        index++
        if (index > image.length) {index = 1}    
        image[index-1].style.display = "block";
    
        setTimeout(carousel, 4000);
    }
}