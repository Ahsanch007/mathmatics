document.querySelectorAll(".js-accordion-toggle").forEach(function(e){e.addEventListener("click",function(){e.setAttribute("aria-expanded",!("true"===e.getAttribute("aria-expanded")))})});