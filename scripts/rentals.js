const linksURL = "https://kblomquist01.github.io/final/data/rentals.json";

const cards = document.querySelector('#rentals');

async function getRentalData() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data.Rentals)
    displayRentals(data.Rentals);
  }

  const displayRentals = (prophets) => {
    prophets.forEach((prophet) => {
      
      let card = document.createElement('section');
      let fullName = document.createElement('p');
      let description = document.createElement('p')
      let portrait = document.createElement('img');
  
      
      fullName.textContent = `${prophet.name} ${prophet.lastname}`;

     description.innerHTML = `Date of Birth: ${prophet.birthdate}<br>Place of Birth: ${prophet.birthplace}`;
    
      portrait.setAttribute('src', prophet.imageurl);
      portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`); 
      portrait.setAttribute('loading', 'lazy');
      portrait.setAttribute('width', '340');
      portrait.setAttribute('height', '440');
  
      
      card.appendChild(fullName);
      card.appendChild(description);
      card.appendChild(portrait);
  
      cards.appendChild(card);
    }); 
  }
  
  getRentalData();