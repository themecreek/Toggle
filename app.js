(function(){
  var render;  
  var options = INSTALL_OPTIONS;
  render = function() {
    if (options.customize) {
    $(function() {
    $('input[type="checkbox"]').bootstrapToggle({
      on: options.on,
      off: options.off,
	  size: 'large',
	  onstyle: 'success',
	  offstyle: 'danger'
    });
    });
        
    } else {
    $(function() {
    $('input[type="checkbox"]').bootstrapToggle();
    });
    }
        


  };
 if (document.readyState === 'loading')
    window.addEventListener('DOMContentLoaded', render);
  else
    render();
 
  INSTALL_SCOPE = {
      setOptions: function(opts) {
      options = opts;
      render();
    }
  };
})();
