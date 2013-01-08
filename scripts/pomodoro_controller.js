var ${widget.shortname}_timer_controller = { 
  init:function() { 
      $( "#action" ).click(function(event, ui) {
          alert("hi there");
      });
  }
};

$('#home').live('pageinit',function(event) { 
  ${widget.shortname}_timer_controller.init(); 
});
