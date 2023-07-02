function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }


$(function(){
    $(".my-carousel").owlCarousel({
        margin:0,
        items:1,
        loop:true,
        mouseDrag:false,
        autoplay:true,
        autoplayTimeout:1000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1,
            }, 
        }
    });


});