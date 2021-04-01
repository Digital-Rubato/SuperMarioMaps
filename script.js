function initmap(){
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 34.66838425295052, lng: 135.43025783043265},
        zoom: 18,
        //zero for super zoomed out to 22 to super zoomed
        mapId: '2538776b6b1f7509',
        // turning off manual controls with FALSE
        mapTypeControl:false,
        fullscreenControl: false,
        streetViewControl: false
      });
    //   name
    // lat, long
    // img
    // scaledSize width, height
      const markers = [
          [
              "Yoshi\'s House",
              34.66838425295052,
              135.43025783043265,
              "yoshi_house.svg",
              38,31
          ],
          [
              "You are Here",
              34.6676711,
              135.4297887322531,
              "pointer.svg",
              30,
              47.8
          ],[
              "Ghost House",
              34.668327151,
              135.432927626,
              "ghosthouse.svg",
              40.48
          ],[
              "Castle",
              34.667756080,
              135.4313954789,
              "castle.svg",
              40,53

          ],[
              "Warp Pipe",
              34.667397388781,
              135.4322504977,
              "pipe.svg",
              38, 42.5
          ],[
              "Star World",
              34.667959023359,
              135.4286640095,
              "star.svg",
              38,
              38
          ],[
              "Donut Plains",
              34.66830355359945,
              135.4320565322381,
              "hill_with_eyes.svg",
              50,60.7
          ],
          [
            "Donut Plains",
            34.66829411443392,
            135.4320565322381,
            "hill_with_eyes.svg",
            50,60.7
        ],[
            "Donut Plains",
            34.6683781779677,
            135.4320565322381,
            "hill_with_eyes.svg",
            50,60.7
        ]
      ];

      for(let i = 0; i<markers.length; i++){
          const currMarker = markers[i];

          //   added constant to link eventlistener marker
      const marker = new google.maps.Marker({
        position: { lat: currMarker[1], lng: currMarker[2] },
        map,
        
        title: currMarker[0],
        icon: {
            url:currMarker[3],
            scaledSize: new google.maps.Size(currMarker[4], currMarker[5])
        },
        // animation of dropping icons
        animation: google.maps.Animation.DROP
      });
    //   pop up window
      const infowindow = new google.maps.InfoWindow({
        content: currMarker[0],
      });
    //   event listener on click
      marker.addListener("click", () => {
        infowindow.open(map, marker);
      });
      }

    
}

//34.66838425295052, 135.43025783043265