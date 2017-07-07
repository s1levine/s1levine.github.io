function onPlayerReady(event) {
  event.target.playVideo();
}

function onPlayerStateChange(event) {
  if (event.data === 0) {
    $.fancybox.close();
	$('#bgmusic').prop("muted", false);
}

function onYouTubePlayerAPIReady(){
   $(document).ready(function() {
     $(".fancybox")
	   .attr('rel', 'gallery')
	   .fancybox({
	     openEffect  : 'none',
		 closeEffect : 'none',
		 nextEffect  : 'none',
		 prevEffect  : 'none',
		 padding     : 0,
		 margin      : 50,
		 beforeShow  : function() {
		   // Find the iframe ID
		   var id = $.fancybox.inner.find('iframe').attr('id');
           // Create video player object and add event listeners
		   var player = new YT.Player(id, {
		     events: {
			   'onReady': onPlayerReady,
			   'onStateChange': onPlayerStateChange
			 }
		   });
		 }
	   });
	 });
}

function main(){
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