function main(){
  $('.title').on('click', function(){
    $('.menu').fadeToggle(400);
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