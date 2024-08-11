document.getElementById('html5').addEventListener('change', function() {
      let elements = document.querySelectorAll('.element');
      elements.forEach(function(element) {
        element.style.display = 'none';
      });
      
      let selectedValue = this.value;
      let selectedElement = document.getElementById(selectedValue);
      if (selectedElement) {
        selectedElement.style.display = 'block';
      }
    });
document.body.style.background ="red"
