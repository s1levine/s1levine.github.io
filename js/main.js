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

  $('.title').on('click', function(){
    $('.menu').fadeToggle(400);
	//$('#subtitle').toggle(); //Replaces subtitle with menu
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