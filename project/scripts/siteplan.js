
document.addEventListener("DOMContentLoaded", () => {
  // Navigation Menu Toggle
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");

  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
    menuToggle.innerHTML = navMenu.classList.contains("show") ? "&times;" : "&#9776;";
  });

  navMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("show");
      menuToggle.innerHTML = "&#9776;";
    });
  });

  // Footer updates
  document.getElementById("currentYear").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = document.lastModified;

  // Company data
  const companyData = [
    {
      section: 'hero',
      description: "We’re a global team of logistics professionals, drivers, analysts, and customer care specialists committed to service excellence.",
      image: "images/hero2.webp"
    },
    {
      section: 'history',
      history: "Founded in 2010, Edsarah Logistics has grown from a local courier to an international logistics provider. We’re passionate about delivering packages — and peace of mind — to our customers worldwide.",
      image: "images/her07.webp",
      values: [
        "Integrity in every delivery",
        "Customer-first approach",
        "Innovation through technology"
      ]
    },
    {
      section: 'adventures',
      gallery: [
        { src: "images/hero2.webp", caption: "Bonded Terminal" },
        { src: "images/hero1.webp", caption: "Efficient Delivery" },
        { src: "images/hero4.webp", caption: "Sea Haulage" },
        { src: "images/hero6.webp", caption: "Warehouse" },
        { src: "images/her07.webp", caption: "Freighting" }
      ]
    }
  ];

  // Populate Hero Section
  document.getElementById('hero-description').textContent = companyData[0].description;
  document.getElementById('hero-image').src = companyData[0].image;

  // Populate History Section
  document.getElementById('company-history').textContent = companyData[1].history;
  document.getElementById('company-image').src = companyData[1].image;
  const valuesList = document.getElementById('values-list');
  companyData[1].values.forEach(value => {
    const li = document.createElement('li');
    li.textContent = value;
    valuesList.appendChild(li);
  });

  // Populate Adventures Gallery
  const galleryContainer = document.getElementById('gallery');
  companyData[2].gallery.forEach(item => {
    const figure = document.createElement('figure');
    const img = document.createElement('img');
    img.src = item.src;
    img.alt = item.caption;
    const caption = document.createElement('figcaption');
    caption.textContent = item.caption;
    figure.appendChild(img);
    figure.appendChild(caption);
    galleryContainer.appendChild(figure);
  });

  // Appreciation Message
  const appreciationMessage = document.getElementById('appreciationMessage');
  let visitCount = parseInt(localStorage.getItem('visitCount') || 0) + 1;
  localStorage.setItem('visitCount', visitCount);
  if (visitCount >= 5) {
    appreciationMessage.innerHTML = `<p>Thank you for visiting us so many times! We appreciate your interest in Edsarah Logistics.</p>`;
  }

  // Contact Form Submission
  const form = document.getElementById("contactForm");
  const responseDiv = document.getElementById("formResponse");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const subscribe = document.getElementById("subscribe")?.checked || false;
    const purpose = document.querySelector('input[name="purpose"]:checked')?.value || "Not Specified";

    if (name && email && message) {
      const formData = {
        name,
        email,
        purpose,
        message,
        subscribe,
        submittedAt: new Date().toISOString()
      };

      let submissions = JSON.parse(localStorage.getItem("edsarah_submissions")) || [];
      submissions.push(formData);
      localStorage.setItem("edsarah_submissions", JSON.stringify(submissions));

      responseDiv.innerHTML = `<p style="color: green;">Thank you, ${name}! Your message has been saved locally.</p>`;
      form.reset();
    } else {
      responseDiv.innerHTML = `<p style="color: red;">Please fill out all fields.</p>`;
    }
  });

  // Management Team Section
  const managementTeam = [
    {
      name: "Oluwafunke Israel",
      title: "Chief Executive Officer",
      image: "images/funke.jpg"
    },
    {
      name: "Oluwadamilola Caris",
      title: "Chief Operating Officer",
      image: "images/israel.jpg"
    },
    {
      name: "Precious Treasure",
      title: "Group Managing Director",
      image: "images/preciuos.jpg"
    }
  ];

  const teamSection = document.querySelector('.management');
  managementTeam.forEach(member => {
    const figure = document.createElement('figure');
    const img = document.createElement('img');
    img.src = member.image;
    img.alt = member.title;
    const caption = document.createElement('figcaption');
    caption.textContent = `${member.name} - ${member.title}`;
    figure.appendChild(img);
    figure.appendChild(caption);
    teamSection.appendChild(figure);
  });
});

