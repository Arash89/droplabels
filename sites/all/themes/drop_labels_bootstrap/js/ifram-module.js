console.log("ifram-module.js -  first line");
// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');	  
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

if (!Array.prototype.findIndex) {
  Array.prototype.findIndex = function(predicate) {
    'use strict';
    if (this == null) {
      throw new TypeError('Array.prototype.findIndex called on null or undefined');
    }
    if (typeof predicate !== 'function') {
      throw new TypeError('predicate must be a function');
    }
    var list = Object(this);
    var length = list.length >>> 0;
    var thisArg = arguments[1];
    var value;

    for (var i = 0; i < length; i++) {
      value = list[i];
      if (predicate.call(thisArg, value, i, list)) {
        return i;
      }
    }
    return -1;
  };
}

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
//var player;
var droplabelsObjects = [];
var arashkan = 1;
var droplabelsReady = 0;

var droplabels = function (id, playList, indexToShow, apiGotenInf, player, isPlayListSet, intervalId) {
  if (id === undefined) {
    id = 0;
  }

  if (playList === undefined) {
    playList = "";
  }

  if (indexToShow === undefined) {
    indexToShow = 0;
  }

  if (apiGotenInf === undefined) {
    apiGotenInf = [];
  }

  if (player === undefined) {
    player = null;
  }

  if (isPlayListSet === undefined) {
    isPlayListSet = false;
  }

  if (intervalId === undefined) {
    intervalId = 0;
  }

  this.id = id;
  this.playList = playList;
  this.indexToShow = indexToShow;
  this.apiGotenInf = apiGotenInf;
  this.player = player;
  this.isPlayListSet = isPlayListSet;
  this.intervalId = intervalId;
  
};

function onYouTubeIframeAPIReady() {
console.log("ifram-module.js - line 32 onYouTubeIframeAPIReady function");
  //  filling the players objects palylists here or in jQuery().ready if droplabelsReady variable 
  //  has the right value (1 for hear and -1 for jQuery.ready)
  if (droplabelsReady === 1) {
    var i = 0;
    var len = droplabelsObjects.length;
    for (i = 0; i < len; i++) {
        droplabelsObjects[i].player = new YT.Player('player_droplabels' + droplabelsObjects[i].id, {
          height: '390',
          width: '640',
          videoId: '',
          playerVars: {
                html5: 1
              },
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });

    }// End for
  } //End if
  else {
    droplabelsReady = -1;
  }


}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
console.log("ifram-module.js - line 46 onPlayerReady function");
console.log("droplabels.playList::::" + droplabels.playList);

var thePlayer = event.target;
var thePlayerIndex = droplabelsObjects.findIndex(function (elem, index, arr) {
  return elem.player === thePlayer;
});
console.warn(thePlayerIndex);
  if (droplabelsObjects[thePlayerIndex].isPlayListSet === false || droplabelsObjects[thePlayerIndex].isPlayListSet === undefined) {

    event.target.cuePlaylist({
      list:droplabelsObjects[thePlayerIndex].playList,
      index: droplabelsObjects[thePlayerIndex].indexToShow          
    });


    droplabelsObjects[thePlayerIndex].isPlayListSet = true;

  }

}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
function onPlayerStateChange(event) {
console.log("ifram-module.js - line 68 onPlayerStateChange function");
        //console.log(player.getPlayerState());
        console.log(event.target.getPlayerState());
        // -1 – unstarted
        // 0 – ended
        // 1 – playing
        // 2 – paused
        // 3 – buffering
        // 5 – video cued

        if (event.target.getPlayerState() === 5) {
          //console.log(event.target.getPlaylist());

          var thePlayer = event.target;
          var thePlayerIndex = droplabelsObjects.findIndex(function (elem, index, arr) {
            return elem.player === thePlayer;
          });

          // It get an Array of the video IDs of a play list
          // So you now new how many vide any plany list has
          droplabelsObjects[thePlayerIndex].apiGotenInf = event.target.getPlaylist();
          // Number of videoes in a play list
          var numVideos = droplabelsObjects[thePlayerIndex].apiGotenInf.length;
          var numOfSucssesses = 0;
          console.warn("apiGotenInf+++" + droplabelsObjects[thePlayerIndex].apiGotenInf );

          droplabelsObjects[thePlayerIndex].apiGotenInf.forEach(function(elem, ind, arr) {

          var yt_api_key = "AIzaSyCpyqOnhgxrJCad1QE5f8yDTnuYAdyYMdU";
            
          yt_video_id = "qdpujvLvGvU";
          var yt_snippet_endpoint = "https://www.googleapis.com/youtube/v3/videos?part=snippet&id=" + elem + "&key=" + yt_api_key;
          console.warn(yt_snippet_endpoint);
            jQuery.ajax({
                    type: 'GET',
                    url: yt_snippet_endpoint,
                    success: function (data) {
                      var myObj = {};
                      myObj.id = elem;
                      myObj.pict = data.items[0].snippet.thumbnails.high.url;
                      myObj.title = data.items[0].snippet.title;
                      arr[ind] = myObj;
                      numOfSucssesses++;
                      if (numOfSucssesses === numVideos) {
                        
                        angular.element(document.getElementById('app-player-droplabels-id')).scope().sliderSet(droplabelsObjects[thePlayerIndex]);
                      }
                    },
                    async:true
                  });


          });
          //setTimeout(function(){console.log(droplabelsObjects[thePlayerIndex].apiGotenInf);},1000);
        }// end if

}


console.log("ifram-module.js -  Last line");


jQuery("document").ready(function(){

  if (droplabelsReady === -1) {
    var i = 0;
    var len = droplabelsObjects.length;
    for (i = 0; i < len; i++) {
        droplabelsObjects[i].player = new YT.Player('player_droplabels' + droplabelsObjects[i].id, {
          height: '390',
          width: '640',
          videoId: '',
          playerVars: {
                html5: 1
              },
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });

    }// End for
    droplabelsReady = 0;
  } //End if
  else {
    droplabelsReady = 1;
  }

});

