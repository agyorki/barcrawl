//Variables
const db = firebase.firestore();

const barList = document.querySelector('.collection');

// Setup Bars
const setupBars = (data) => {

    if (data.length) {
    let html = '';
      data.forEach(doc => {
        const bar = doc.data();
        const li = `
        <li class="collection-item avatar">
          <i class="material-icons circle grey lighten-4 black-text">local_bar</i>
          <span class="title">${bar.Name}</span>
          <p class="black-text">${bar.City}</p>
          <a href="#" class="secondary-content">
            <i class="material-icons black-text">arrow_forward</i>
          </a>
        </li>
        `;
        html += li;
      });
      barList.innerHTML = html;
    } else {


    }
  
  };
