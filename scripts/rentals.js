const baseURL = "https://kblomquist01.github.io/final/";
const linksURL = "https://kblomquist01.github.io/final/data/members.json";

const cards = document.querySelector('#cards');

async function getLinks() {
    const response = await fetch(linksURL, { mode: 'no-cors' });
    const data = await response.json();
    console.log(data);
    displayLinks(data.members);
  }

  const displayLinks = (members) => {
    members.forEach((member) => {
      
        let card = document.createElement('section');
        let fullName = document.createElement('p');
        let description = document.createElement('p')
    
        
        fullName.textContent = `${member.name}`;
  
       description.innerHTML = `<tr>
       <td>${member.name}</td>
       <td">${member.maxPersons}</td>
       <td">${member.Reservation.halfDay}</td>
       <td">${member.Reservation.fullDay}</td>
       <td">${member.WalkIn.halfDay}</td>
       <td">${member.WalkIn.halfDay}</td>

   </tr>`;
    
        
        card.appendChild(fullName);
        card.appendChild(description);
        cards.appendChild(card);
      }); 
        
  }

  
getLinks();