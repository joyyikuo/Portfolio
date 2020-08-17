var check_status = false;
var like_cnt = $("#like-cnt");
var like_parent = $(".like-container");
var mon_parent = $(".money-container");

var burst = new mojs.Burst({
  parent: like_parent,
  radius:   { 20: 60 },
  count: 15,
  angle:{0:30},

  children: {
    delay: 250,
    duration: 700,
    radius:{10: 0},
    fill:   [ '#ddca7e' ],
    easing:         mojs.easing.bezier(.08,.69,.39,.97)
  }
});

var burst_mon = new mojs.Burst({
  parent: mon_parent,
  radius: {20: 60 },
  count: 15,
  angle: {0:30},

  children: {
    delay: 250,
    duration: 700,
    radius:{10: 0},
    fill: ['#ddca7e'],
    easing: mojs.easing.bezier(.08,.69,.39,.97)
  }
});

$('#mon-cnt').click(function(){
  document.getElementById("mon-cnt").style.color = "#ddca7e";
  burst_mon.replay();
});

$("#like-cnt").click(function(){
  var t1 = new TimelineLite();
  var t2 = new TimelineLite();


  $('#p-metrics').toggle('fast', function() {
    // Animation complete.
    document.getElementById("metrics-view").scrollIntoView({
      block: "start",
      behavior: "smooth"
    });
  });

  if(!check_status){
    t1.set(like_cnt, {scale:0});
    t1.set('.like-btn', {scale: 0});
    t1.to(like_cnt, 0.6, {scale:1, background: '#ddca7e',ease: Expo.easeOut});
    t2.to('.like-btn', 0.65, {scale: 1, ease: Elastic.easeOut.config(1, 0.3)}, '+=0.2');
//    t1.timeScale(5);
    check_status=true;

  }
  else{
    t1.to(like_cnt, 1, {scale:1})
      .to(like_cnt, 1, {scale:1, background: 'rgba(20,20,20,0.3)', ease: Power4.easeOut});
    t1.timeScale(7);
    check_status=false;
  }

});
