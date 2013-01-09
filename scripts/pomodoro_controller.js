var ${widget.shortname}_timer_controller = { 
  init:function() { 
      $('#remaining').hide();      
      $('#stop').click(function(event, ui) {
          ${widget.shortname}_timer_controller.stop("Start Work");
      });
      $( "#action" ).click(function(event, ui) {
          var text = $('#action .ui-btn-text').text();
          if (text == "Start Break") {
              ${widget.shortname}_timer_controller.startBreak();
          } else {
              ${widget.shortname}_timer_controller.startWork();
          }
      });
  },

  totalSeconds: 3,
  timer: null,

  startWork:function() {
      ${widget.shortname}_timer_controller.stop("Start Break");
      ${widget.shortname}_timer_controller.totalSeconds = 25 * 60;             
      ${widget.shortname}_timer_controller.startTimer();
  },

  startBreak:function() {
      ${widget.shortname}_timer_controller.stop("Start Work");
      ${widget.shortname}_timer_controller.totalSeconds = 5 * 60;             
      ${widget.shortname}_timer_controller.startTimer();
  },

  startTimer:function() {
      $('#remaining').show();
      ${widget.shortname}_timer_controller.updateTimer();
      ${widget.shortname}_timer_controller.timer = window.setTimeout("${widget.shortname}_timer_controller.tick()", 1000); 
  },

  tick: function() {
      ${widget.shortname}_timer_controller.totalSeconds -= 1;
      ${widget.shortname}_timer_controller.updateTimer();

      if (${widget.shortname}_timer_controller.totalSeconds <= 0) {
          $("#completedSound")[0].play();
          ${widget.shortname}_timer_controller.stop();
      } else {
          ${widget.shortname}_timer_controller.timer = window.setTimeout("${widget.shortname}_timer_controller.tick()", 1000); 
      };
  },

  stop:function(nextAction) {
      clearTimeout(${widget.shortname}_timer_controller.timer);
      $('#action .ui-btn-text').text(nextAction); 
      $('#remaining').hide();
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
