var ${widget.shortname}_timer_controller = { 
  init:function() { 
      $('#remaining').hide();      
      $( "#action" ).click(function(event, ui) {
          var text = $('#action .ui-btn-text').text();
          if (text == "Stop") {
              $('#action .ui-btn-text').text("Start");
              alert("Not currently able to stop a running timer");
          } else {
              $('#action .ui-btn-text').text("Stop");
              $('#remaining').show();
          }
      });
  }
};

$('#home').live('pageinit',function(event) { 
  ${widget.shortname}_timer_controller.init(); 
});
