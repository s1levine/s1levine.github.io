/*function onPlayerReady(event) {
  event.target.playVideo();
}

function onPlayerStateChange(event) {
  if (event.data === 0) {
    $.fancybox.close();
  }
}

function onYouTubePlayerAPIReady() {
  $('.youtube').fancybox({
    beforeShow: function() {
	  var id = $.fancybox.inner.find('iframe').attr('id');
	  var player = new YT.Player(id, {
	    events: {
		  'onReady': onPlayerReady,
		  'onStateChange': onPlayerStateChange
		}
	  };
	}
  }
}*/

function main(){
  //onYouTubePlayerAPIReady();

  var open = false;
  
  $('.title').on('click', function(){
    $('.menu').fadeToggle(400);
	open = !open;
	if (open) {
	  $('body').css('background-image','url("../img/open.jpg")');
	}
	else {
	  $('body').css('background-image','url("../img/close.jpg")');
	}
	//console.log($('body').css('background-image'));
	
  });
  
  //Mute Audio When Opening Video/Tour
  $('.menu-item').on('click', function(){
    $('#bgmusic').prop("muted", true);
  });
  
  //Unmute Audio When Fancybox Closes
  $('.menu-item').fancybox({
    afterClose : function(){
	  $('#bgmusic').prop("muted", false);
	}
  });
}

$(document).ready(main);