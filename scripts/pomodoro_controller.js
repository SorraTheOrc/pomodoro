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
          alert("Times Up!");
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
      $('#remaining').text(${widget.shortname}_timer_controller.totalSeconds);
  }
};

$('#home').live('pageinit',function(event) { 
  ${widget.shortname}_timer_controller.init(); 
});
