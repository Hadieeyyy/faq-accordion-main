document.querySelectorAll(".accordion-heading").forEach(header => {
    header.addEventListener("click", () => {
      const panel = header.nextElementSibling; // get the panel right after the clicked heading
  
      // Close all other panels
      document.querySelectorAll(".panel").forEach(item => {
        if (item !== panel) {
          item.style.maxHeight = null;
        }
      });
  
      // Toggle this panel
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  });

//___________________________________

// document.querySelectorAll(".accordion-heading").forEach(header => {
//     header.addEventListener("click", () => {

      


//       const content = document.querySelectorAll(".panel");
  
//       if (content.style.maxHeight) {
//         content.style.maxHeight = null; 
//       } else {
//         document.querySelectorAll(".panel").forEach(item => {
//           item.style.maxHeight = null;
//         });
  
//         content.style.maxHeight = "500px";
//          // content.style.maxHeight = content.scrollHeight + "px";
//       }


//     });
//   });