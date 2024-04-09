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
      

        let description = document.createElement('tr')
    
        
        fullName.textContent = `${member.name}`;
  
       description.innerHTML = 
       `<td>${member.name}</td>
       <td">${member.maxPersons}</td>
       <td">${member.Reservation.halfDay}</td>
       <td">${member.Reservation.fullDay}</td>
       <td">${member.WalkIn.halfDay}</td>
       <td">${member.WalkIn.halfDay}</td>`;
    
      
        cards.appendChild(description);
      }); 
        
  }

  
getLinks();