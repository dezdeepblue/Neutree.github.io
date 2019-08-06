
window.onload = function () {

}

$(document).ready(function(){
	$('#fullpage').fullpage({
		sectionsColor : ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90'],
		'navigation': true,
		'navigationPosition': 'right',
		'navigationTooltips': ['  ', '  '],
		lazyLoading: true
	});

  	document.getElementById("mail").onclick = function MailInfo(){
    	alert("\n\n\n\n\n\n\n\n  dezdeepblue@gmail.com \n\n\n\n\n\n");
  	}

    //Remove the default contextmenu event, otherwise it will appear at the same time as the right-click event
    document.oncontextmenu = function(e){
       e.preventDefault();
    };
    document.getElementById("body_").onmousedown = function(e){
       if(e.button ==2){
//           alert("You Clicked Right Button");
       }else if(e.button ==0){
//           alert("You clicked Left Button");
       }else if(e.button ==1){
//           alert("You Clicked the Wheel");
       }
    }
    onResized();
    $(window).resize(function() {
      onResized();
    });

});


function AddBackground(){//http://www.htmleaf.com/jQuery/Layout-Interface/201506182060.html
    var number = 50;
    var width = document.body.clientWidth;
    if(width>1366)
        number = 70;
    else{
      if(width > 500)
        width = 500;
      number = width*width*width/2000000;
    }
    $(".page-header-bg").jParticle({
      background: " linear-gradient(120deg, #155799, #159957)",
      color: "#E6E6E6",
      particlesNumber: number,
      particle: {
        color: "white",
        minSize: 2,
        maxSize: 10,
      }
    });
};

function onResized(){
    //Reset the header background size
    $(".page-header-bg").css("height",$(document).height());
    $(".page-header-bg").removeJParticle();
    AddBackground();
}
