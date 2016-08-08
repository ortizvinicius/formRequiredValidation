(function formRequiredValidate(options){
  'use strict'
  
  var className = options.className || false;
  var focusFirstElement = options.focusFirstElement || false;
  
  var requiredElements = Array.prototype.slice.call(document.querySelectorAll("[required]"));
  var forms = [];
  
  requiredElements.forEach(function reqElementsForEach(reqElement, reqElementIndex){
    var form = reqElement.parentNode;
    
    if(!forms[form.id]){
      forms[form.id] = true;
      form.addEventListener("submit", function formSubmit(ev){
        var formRequiredElements = Array.prototype.slice.call(form.querySelectorAll("[required]"));
        var firstElement;
        
        formRequiredElements.forEach(function testRequiredElements(formReqElement, formReqElementIndex){
           if(formReqElement.value == ""){
             if(className) formReqElement.classList.add(className);
             if(!firstElement) firstElement = formReqElement;
           } else {
             if(className) formReqElement.classList.remove(className);
           }
           if(firstElement){
            ev.preventDefault();
            if(focusFirstElement) firstElement.focus();
           }
        });
          
      });
    }
                            
  });
  
})(
  {
    className: "invalid",
    focusFirstElement: true
  }
);
