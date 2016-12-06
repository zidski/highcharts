$(function() {
  var $document = $(document);
  var $r = $('input[type=range]');
  var $min = $('input[name="min"]');
  var $max = $('input[name="max"]');
  var $step = $('input[name="step"]');
  var output = document.querySelectorAll('output')[0];
	
  // set initial output value
  output.innerHTML = $r[0].value;
  
  // update output value
  $document.on('input', 'input[type="range"]', function(e) {
    output.innerHTML = e.currentTarget.value;
  });
  
  // Initialize
  $r.rangeslider({
    polyfill: false
  });
  
  // Example functionality to demonstrate programmatic attribute changes
  $document.on('click', '#js-example-change-attributes', function(e) {
    var attributes = {
    	min: $min[0].value,
      max: $max[0].value,
      step: $step[0].value
    };
    $r.attr(attributes);
    $r.rangeslider('update', true);
  });
});