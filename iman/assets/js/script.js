function toggleMenu() {
    document.getElementById("mobileMenu").classList.toggle("active");
}
  
  document.addEventListener("DOMContentLoaded", function () {
    const languageToggle = document.getElementById("language-toggle");
    let currentLang = localStorage.getItem("lang") || "fr";
  
    function loadTranslations(lang) {
      fetch("assets/js/translations.json")
        .then(response => response.json())
        .then(data => {
          document.querySelector("#hero h2").textContent = data[lang].hero_title;
          document.querySelector("#hero p").textContent = data[lang].hero_text;
          document.querySelector(".cta-button").textContent = data[lang].cta_button;
          document.querySelector('nav a[href="#hero"]').textContent = data[lang].menu_home;
          document.querySelector('nav a[href="#programme"]').textContent = data[lang].menu_program;
          document.querySelector('nav a[href="#equipe"]').textContent = data[lang].menu_team;
          document.querySelector('.artistes-container h2').textContent = data[lang].program_title;
  
          // Artistes
          document.querySelectorAll('.artiste').forEach((artiste, index) => {
            const artistKey = Object.keys(data[lang].artistes)[index];
            const artistData = data[lang].artistes[artistKey];
            artiste.querySelector('h3').textContent = artistData.title;
            artiste.querySelector('span').textContent = artistData.year;
            artiste.querySelector('.description').textContent = artistData.description;
          });
  
          // Événements
          document.querySelectorAll('.event').forEach((event, index) => {
            const eventKey = Object.keys(data[lang].events)[index];
            const eventData = data[lang].events[eventKey];
            event.querySelector('h3').textContent = eventData.title;
            event.querySelector('span').textContent = eventData.time;
            event.querySelector('p').textContent = eventData.description;
          });
  
          // Équipe
          document.querySelector('#equipe h2').textContent = data[lang].team_title;
          document.querySelector('#equipe p').textContent = data[lang].team_description;
  
          document.querySelectorAll('.member-info').forEach((member, index) => {
            const memberData = data[lang].team_members[index];
            member.querySelector('.member-info h3').textContent = memberData.name;
            member.querySelector('.role').textContent = memberData.role;
            member.querySelector('.member-info .description').textContent = memberData.description;
          });
        });
    }
  
    loadTranslations(currentLang);
  
    languageToggle.addEventListener("click", function () {
      currentLang = currentLang === "fr" ? "en" : "fr";
      localStorage.setItem("lang", currentLang);
      loadTranslations(currentLang);
    });
  });
  