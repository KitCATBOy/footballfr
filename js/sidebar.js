const body = document.querySelector("body"),
      sidebar = body.querySelector(".sidebar"),
      toggle = body.querySelector(".toggle"),
      cherchBtn = body.querySelector(".cherche-box"),
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text");

      
        toggle.addEventListener("click", () => {
            sidebar.classList.toggle("close");

        }); /* ===== Ouvrir la side barre ===== */
        cherchBtn.addEventListener("click", () => {
            sidebar.classList.remove("close");

        }); /* ===== Fermer la side barre ===== */