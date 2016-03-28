$( document ).ready(function() {
	
	
$('#inline').hide();
    // 2. This code loads

  $( "li.cursos a img" )
  .mouseover(function() {
    $( this ).css( "opacity", "1" );
  })
  .mouseout(function() {
    $("li.cursos a img").css( "opacity", "0.5" );
  }); 


	$('li.cursos.gerenteEcomerce a img').click(function (e) {
		$('#basic-modal-content').modal();

		return false;
	});
	
    $(".moviecleae").on("click", function() {
        $('#inline').show();
         $('#inline').css("margin-top","-430px");										 
        $('.bannerPrincipal').css( "height", "800" );
        player.loadVideoById("6Afpey7Eldo", 0, "default");
    });


});

    var player;

    function onYouTubeIframeAPIReady() {
        player = new YT.Player('inline', {
            height: '800',
            width: '100%',
            videoId: '6Afpey7Eldo',
            playerVars: {
                'autoplay': 1,
                'controls': 1
            },
            events: {
                'onReady': onPlayerReady,
                    'onStateChange': onPlayerStateChange
            }
        });

    }

    var playerReady = false;
    // 4. The API will call this function when the video player is ready.
    function onPlayerReady(event) {
        playerReady = true;

    }


    // 5. The API calls this function when the player's state changes.
    //    The function indicates that when playing a video (state=1),
    //    the player should play for six seconds and then stop.
    function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.ENDED) {
           $('#inline').hide();
           $('.bannerPrincipal').css( "height", "438" );

        }
    }
