 var write_btn = document.querySelector(".write_btn");

      var popup = document.querySelector(".modal_content");
      var close = popup.querySelector(".modal_content_close");

      var form = popup.querySelector("form");
      var name = popup.querySelector("[name=name]");
      var email = popup.querySelector("[name=email]");
      var message=popup.querySelector("[name=message]");

     
     

     write_btn.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.add("modal_content_show");

          if(storage_email){ email.value = storage_email;
            name.focus();}               
           else {
          name.focus();
        }

      });
console.log(name); 
      close.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.remove("modal_content_show");
           
      });

      form.addEventListener("submit", function(event) {
           event.preventDefault();
         localStorage.setItem("name", name.value);
         localStorage.setItem("email", email.value);
             });

      window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
          if (popup.classList.contains("modal_content_show")) {
            popup.classList.remove("modal_content_show");
            popup.classList.remove("modal_error");
          }
        }
      });