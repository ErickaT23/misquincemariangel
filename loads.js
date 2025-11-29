const guests = [
  { id: "1", name: "Sr. Elmer Bladimir García y fam.", passes: 5 },
  { id: "2", name: "Lic. Virgilio Fernández Vásquez", passes: 2 },
  { id: "3", name: "Amigos de Zona Vaquera", passes: 1 },
  { id: "4", name: "Señorita Alejandra Figueroa", passes: 2 },
  { id: "5", name: "Sr. Oscar Espina y fam.", passes: 5 },
  { id: "6", name: "Sr. Omero González", passes: 4 },
  { id: "7", name: "Señorita Kristhel Aguilar", passes: 2 },
  { id: "8", name: "Señorita Dulce Azucena Revolorio", passes: 1 },
  { id: "9", name: "Señorita Dayana Góngora Najarro", passes: 2 },
  { id: "10", name: "Sr. Gabriel Cabrera Franco", passes: 2 },
  { id: "11", name: "Sr. Mario Guerra y Esposa", passes: 2 },
  { id: "12", name: "Sr. Germán Arévalo y Marlen Arévalo", passes: 2 },
  { id: "13", name: "Fredy Gutiérrez y familia", passes: 3 },
  { id: "14", name: "Almita Lizano y Esposo", passes: 2 },
  { id: "15", name: "Señorita Emily Caal Tun", passes: 1 },
  { id: "16", name: "Señorita Monserrath Pérez", passes: 1 },
  { id: "17", name: "Señorita Hesmeralda Marion Pec", passes: 1 },
  { id: "18", name: "Señorita María Isabel Cuéllar Mas", passes: 1 },
  { id: "19", name: "Señorita Sussely Morales", passes: 1 },
  { id: "20", name: "Señorita Valentina Nicte Soza", passes: 1 },
  { id: "21", name: "Sr. David Alexander", passes: 1 },
  { id: "22", name: "Sr. Obed Portillo Alonzo", passes: 1 },
  { id: "23", name: "Señorita Gimena Gómez", passes: 3 },
  { id: "24", name: "Señorita Fernanda Aguirre", passes: 1 },
  { id: "25", name: "Señorita Katerin Mejía M", passes: 1 },
  { id: "26", name: "Señorita Naomi Orantes", passes: 2 },
  { id: "27", name: "Señorita Rosibeth", passes: 1 },
  { id: "28", name: "Señorita Onice", passes: 1 },
  { id: "29", name: "Señora Klelry Paredes", passes: 2 },
  { id: "30", name: "Sr. Cecilio Garrido", passes: 2 },
  { id: "31", name: "Señorita Rosybeth Sarceño Requena", passes: 1 },
  { id: "32", name: "Señorita Ónice Sofía Cruz Castro", passes: 1 },
  { id: "33", name: "Señorita Naomi Guzmán", passes: 1 },
  { id: "34", name: "Señorita Sophia Valentina Ramírez", passes: 1 },
  { id: "35", name: "Señorita Gabriela Romero Soza", passes: 1 },
  { id: "36", name: "Señorita Alba Sofía Salguero", passes: 1 },
  { id: "37", name: "Señorita Karla Vanegas", passes: 1 },
  { id: "38", name: "Sr. Leonel Meléndez", passes: 1 },
  { id: "39", name: "Sr. Fabián Gutiérrez", passes: 1 },
  { id: "40", name: "Señora Hiroma Che", passes: 1 },
  { id: "41", name: "Señorita Deysy Mayen", passes: 3 },
  { id: "42", name: "Sr. Luis Salguero y fam.", passes: 3 },
  { id: "43", name: "Sr. Max Monzón y fam.", passes: 5 },
  { id: "44", name: "Señora Rosalia Moreno", passes: 1 },
  { id: "45", name: "Tío Toñito Catalán", passes: 0 },
  { id: "46", name: "Tío Jorge Garrido", passes: 0 },
  { id: "47", name: "Tía Estela del Cid", passes: 0 },
  { id: "48", name: "Tía Otilia Morales", passes: 0 }
];

  
  document.addEventListener("DOMContentLoaded", () => {
  
    function getQueryParams() {
      const params = {};
      const queryString = window.location.search.substring(1);
      const pairs = queryString.split("&");
      for (const pair of pairs) {
        const [key, value] = pair.split("=");
        params[decodeURIComponent(key)] = decodeURIComponent((value || '').replace(/\+/g, ' '));
      }
      return params;
    }
  
    const queryParams = getQueryParams();
    const guestId = queryParams.id;
    const guest = guests.find(g => g.id === guestId);
  
    if (guest) {
      const invitationText = guest.passes > 1
        ? `¡${guest.name}, están invitados!`
        : `¡${guest.name}, estás invitado!`;
  
      document.getElementById('guest-name').textContent = invitationText;
      document.getElementById('passes').textContent = `${guest.passes} ${guest.passes === 1 ? 'persona' : 'personas'}`;
    } else {
      document.getElementById('guest-name').textContent = `¡Invitado no encontrado!`;
      const invitationInfo = document.querySelector('.invitation-info-section');
      if (invitationInfo) invitationInfo.style.display = 'none';
    }
  
  });
  