let next = document.querySelectorAll('.next')
let prev = document.querySelectorAll('.prev')


next.forEach(function(button) {
    button.addEventListener('click', function() {
      console.log('Next button clicked');
      let items = document.querySelectorAll('.item')
      document.querySelector('.slide').appendChild(items[0])
      //logic for moving slides forward here
    });
});
  
prev.forEach(function(button) {
    button.addEventListener('click', function() {
      console.log('Previous button clicked');
      let items = document.querySelectorAll('.item')
      document.querySelector('.slide').prepend(items[items.length-1])
      // Add your logic for moving slides backward here
    });
});