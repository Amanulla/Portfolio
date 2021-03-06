// *******JavaScript for DOM Elements******
const worksDetails = [
  {
    projectName: 'projectName',
    experience: { headding: 'headding', backEnd: 'Back End Dev', year: 2015 },
    snapshot: 'images/Snapshoot-Portfolio1.png',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required',
    languages: { css: 'css', html: 'html', js: 'JavaScript' },
    button: 'See Project',
  },
  {
    projectName: 'Multi-Post Stories',
    experience: { headding: 'Facebook', backEnd: 'Full Stack Dev', year: 2015 },
    snapshot: 'images/Snapshoot-Portfolio2.png',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    languages: { css: 'css', html: 'html', js: 'JavaScript' },
    button: 'See Project',
  },
  {
    projectName: 'Facebook 360',
    experience: { headding: 'Facebook', backEnd: 'Full Stack Dev', year: 2015 },
    snapshot: 'images/Snapshoot-Portfolio3.png',
    description: 'Exploring the future of media in Facebook first Virtual Reality app. A place to discover and enjoy 360 photos and videos on Gear.',
    languages: { css: 'css', html: 'html', js: 'JavaScript' },
    button: 'See Project',
  },
  {
    projectName: 'Uber Navigations',
    experience: { headding: 'Uber', backEnd: 'Lead Developer', year: 2015 },
    snapshot: 'images/Snapshoot-Portfolio4.png',
    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    languages: { css: 'css', html: 'html', js: 'JavaScript' },
    button: 'See Project',
  },
];

const detailsContainer = document.querySelector('#details-container');
worksDetails.forEach((detail) => {
  const cardDetails = document.createElement('div');
  cardDetails.classList.add('cardDetails');
  cardDetails.innerHTML = `
  <div class="details">
    <img class="snapshot" src=${detail.snapshot} alt="${detail.projectName}">
    
    <div class="works-skills">
        <h3 class="projectName">${detail.projectName}</h3>
        <ul class="experience-bx">
            <li class="headding">${detail.experience.headding}</li>
            <li class="back-end">${detail.experience.backEnd}</li>
            <li class="year">${detail.experience.year}</li>
        </ul>
        <p class="descriptive-paragraph">${detail.description}</p>
        <ul class="languages">
            <li class="html-language">${detail.languages.html}</li>
            <li class="css-language">${detail.languages.css}</li>
            <li class="JavaScript-language">${detail.languages.js}</li>
        </ul>
        <div class="project-btn">
            <button class="details-button" type="button">${detail.button}</button>
        </div>  
    </div>
  </div>
  `;

  detailsContainer.appendChild(cardDetails);
});

// *******JavaScript for Popup Window******

const detailsBtn = document.querySelectorAll('.details-button');
const popupDetails = document.querySelector('.popup-details');
const cancelX = document.querySelector('#cancel-X');

detailsBtn.forEach((n) => n.addEventListener('click', () => {
  n.classList.toggle('active');
  popupDetails.classList.toggle('active');
}));

cancelX.addEventListener('click', () => {
  popupDetails.classList.remove('active');
});
