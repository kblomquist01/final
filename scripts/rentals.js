const baseURL = "https://kblomquist01.github.io/final/";
const linksURL = "https://kblomquist01.github.io/final/data/rentals.json";

const cards = document.querySelector('#rentals');

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
    displayLinks(data.Rentals);
  }

  const displayLinks = (members) => {
    members.forEach((member) => {
      

        let description = document.createElement('tr');
    
        
  
       description.innerHTML = `
       <td>${member.name}</td>
       <td>${member.maxPersons}</td>
       <td>${member.Reservation.halfDay}</td>
       <td>${member.Reservation.fullDay}</td>
       <td>${member.WalkIn.halfDay}</td>
       <td>${member.WalkIn.fullDay}</td>`;
       console.log(description);

      
        cards.appendChild(description);
      }); 
        
  }

  
getLinks();