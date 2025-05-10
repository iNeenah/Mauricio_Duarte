let mauri = {
    fullName: "Duarte Mauricio",
    age: 23,
    profession: "Cybersecurity Specialist",
    skills: [
      "Nmap",
      "Burpsuite",
      "JhonTheRipper",
      "Hydra",
    ],
    isEmployed: false,
    contact: {
      email: "mauricio.duarte@gmail.com",
      location: "Misiones, Argentina"
    }
  };

function perfil(profile) { 
    return `Hello! My name is ${profile.fullName}. I am ${profile.profession} . I work with ${profile.skills}.I live in ${profile.contact.location}. I am ${profile.age} years old ` 

} 
console.log(perfil(mauri))

//usé plantillas literales en vez de concatenacion 