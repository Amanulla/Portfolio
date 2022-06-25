
const projects = [
  {
    projectName: 'projectName',
    experience: { headding: 'headding', backEnd: 'Back End Dev', year: 2015 },
    featureImage: 'images/Snapshoot-Portfolio1.png',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required',
    languages: { css: 'css', html: 'html', js: 'JavaScript' },
    button: 'See Project',
  },
  {
    projectName: 'Multi-Post Stories',
    experience: { headding: 'Facebook', backEnd: 'Full Stack Dev', year: 2015 },
    featureImage: 'images/Snapshoot-Portfolio2.png',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    languages: { css: 'css', html: 'html', js: 'JavaScript' },
    button: 'See Project',
  },
  {
    projectName: 'Facebook 360',
    experience: { headding: 'Facebook', backEnd: 'Full Stack Dev', year: 2015 },
    featureImage: 'images/Snapshoot-Portfolio3.png',
    description: 'Exploring the future of media in Facebook first Virtual Reality app. A place to discover and enjoy 360 photos and videos on Gear.',
    languages: { css: 'css', html: 'html', js: 'JavaScript' },
    button: 'See Project',
  },
  {
    projectName: 'Uber Navigations',
    experience: { headding: 'Uber', backEnd: 'Lead Developer', year: 2015 },
    featureImage: 'images/Snapshoot-Portfolio4.png',
    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    languages: { css: 'css', html: 'html', js: 'JavaScript' },
    button: 'See Project',
  },
];

projects.forEach((detail) => {
  const details = document.createElement('div');
  details.classList.add('details');
  details.innerHTML = `
  <div class="myModal">
    <img class="featureImage" src=${detail.featureImage} alt="${detail.projectName}">
    
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

  // ----------------------------------------------------------------------------------------------------

<div class="modal myModal">
    <div class="modal-content container1">

      <div class="item1">
        <h2>Uber Navigation</h2>
      </div>
      <span id="close" class="close item">&times;</span>
      <div class="item2">
        <p>
          <span class="inrow1"><b>UBER</b> </span><span class="inrow"><img src="images/Counter.png"
              alt="counter1"></span><span class="inrow"> Lead developer </span><span class="inrow"><img
              src="images/Counter.png" alt="counter"></span><span class="inrow1"> 2018</span>
        </p>
      </div>
      <div class="item3">
        <img class="space" src="images/Snapshoot3.png" alt="2nd project immage">
      </div>
      <div class="item4">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae nunc sit amet mi interdum
          sollicitudin eget ac risus. Nullam condimentum elementum urna, ultricies tincidunt ante pellentesque et.
          Phasellus vitae massa nisl. Curabitur erat tellus, convallis feugiat est vel, faucibus congue turpis.
          Pellentesque nec dolor eu magna ullamcorper mattis. Praesent ut ipsum imperdiet, dictum lorem in,
          dignissim purus. Vestibulum finibus lacus et massa fringilla luctus. Aenean convallis sit amet est in
          elementum. Sed et auctor mauris.
        </p>
      </div>
      <div class="item5">
        <ul>
          <li>html</li>
          <li class="back4">Ruby on rails</li>
          <li>css</li>
          <li>javascript</li>

        </ul>
      </div>
      <div class="item6">
        <a href="https://amanulla.github.io/portfolio-desktop/" class="button4"> See
            live <img src="images/Icon.png" alt="see live icon image"></a>
        <a href="https://github.com/Amanulla/portfolio-desktop/blob/main/index.html" class="button4"> See Source <img
              src="images/Frame.png" alt="see source icon image"></a>
      </div>

    </div>
  </div>

  // ----------------------------------------------------------------------------------------------------

  detailsContainer.appendChild(details);
});

// *******JavaScript for Popup Window******

var modal = document.getElementsByClassName('myModal');
var btn = document.getElementsByClassName('myBtn');
var span = document.getElementsByClassName('close');

function setDataIndex() {
  for (i = 0; i < btn.length; i++) {
    btn[i].setAttribute('data-index', i);
    modal[i].setAttribute('data-index', i);
    span[i].setAttribute('data-index', i);
  }
}

for (i = 0; i < btn.length; i++) {
  btn[i].onclick = function () {
    var ElementIndex = this.getAttribute('data-index');
    modal[ElementIndex].style.display = 'block';
  };

  span[i].onclick = function () {
    var ElementIndex = this.getAttribute('data-index');
    modal[ElementIndex].style.display = 'none';
  };
}

window.onload = function () {
  setDataIndex();
};

window.onclick = function (event) {
  if (event.target === modal[event.target.getAttribute('data-index')]) {
    modal[event.target.getAttribute('data-index')].style.display = 'none';
  }
};