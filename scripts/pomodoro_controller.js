var ${widget.shortname}_timer_controller = { 
  init:function() { 
      $('#remaining').hide();      
      $( "#action" ).click(function(event, ui) {
          var text = $('#action .ui-btn-text').text();
          if (text == "Stop") {
              ${widget.shortname}_timer_controller.stop();
          } else {
              ${widget.shortname}_timer_controller.start();
          }
      });
  },

  totalSeconds: 3,
  start:function() {
      $('#action .ui-btn-text').text("Stop");              
      $('#remaining').show();
      ${widget.shortname}_timer_controller.updateTimer();
      window.setTimeout("${widget.shortname}_timer_controller.tick()", 1000); 
  },

  tick: function() {
      ${widget.shortname}_timer_controller.totalSeconds -= 1;
      ${widget.shortname}_timer_controller.updateTimer();

      if (${widget.shortname}_timer_controller.totalSeconds <= 0) {
          $("#completedSound")[0].play();
      } else {
          window.setTimeout("${widget.shortname}_timer_controller.tick()", 1000); 
      };
  },

  stop:function() {
      $('#action .ui-btn-text').text("Start");
      $('#remaining').hide();
      // TODO: cancel tick timeout
      alert("Not currently able to stop a running timer, although we do hide it");
  },

  updateTimer:function() {
      var seconds = ${widget.shortname}_timer_controller.totalSeconds;
      var hours = Math.floor(seconds / 3600);
      seconds -= hours * 3600;
      var minutes = Math.floor(seconds / 60);
      seconds -= minutes * 60;

      var timeStr = "";
      if (hours > 0) {
          timeStr = timeStr + ${widget.shortname}_timer_controller.addLeadingZero(hours) + ":";
      }
      timeStr = timeStr + ${widget.shortname}_timer_controller.addLeadingZero(minutes) + ":";
      timeStr = timeStr + ${widget.shortname}_timer_controller.addLeadingZero(seconds);

      $('#remaining').text(timeStr);
  },

  addLeadingZero:function(num) {
      return (num < 10) ? "0" + num : num;
  }
};

$('#home').live('pageinit',function(event) { 
  ${widget.shortname}_timer_controller.init(); 
});
