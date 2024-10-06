import { useState, useEffect } from "react";

let nextId = 0;

export default function List() {
  const [name, setName] = useState("");
  const [artists, setArtists] = useState([]);

  //   useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/todos/1")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //       });
  //   }, []);

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button
        onClick={() => {
          setArtists([...artists, { id: nextId++, name: name }]);
        }}
      >
        Add
      </button>
      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </>
  );
}

// import { useState } from "react";

// export default function Form() {
//   const [person, setPerson] = useState({
//     firstName: "Barbara",
//     lastName: "Hepworth",
//     email: "bhepworth@sculpture.com",
//     address: {
//       street: "Texas",
//       postCode: "1234",
//       address2: "13/5",
//     },
//   });

//   function handleFirstNameChange(e) {
//     // person.firstName = e.target.value;
//     setPerson({
//       ...person,
//       firstName: e.target.value,
//     });
//   }

//   function handleLastNameChange(e) {
//     setPerson({
//       ...person,
//       lastName: e.target.value,
//     });
//   }

//   function handleEmailChange(e) {
//     setPerson({
//       ...person,
//       email: e.target.value,
//     });
//   }

//   function handleChange(e) {
//     setPerson({
//       ...person,
//       [e.target.name]: e.target.value,
//     });
//   }

// function changeAddress(){
//     setPerson({
//         ...person,
//         address: {
//             ...person.address,
//             street:"Cal"
//         }
//     })
// }

//   return (
//     <>
//       <label>
//         First name:
//         <input
//           value={person.firstName}
//           name="firstName/>"
//         />
//       </label>
//       <br />
//       <label>
//         Last name:
//         <input
//           value={person.lastName}
//           name="lastName/>"
//         />
//       </label>
//       <br />
//       <label>
//         Email:
//         <input value={person.email} name="email"/>
//         </label>
//       <p>
//         {person.firstName} {person.lastName} ({person.email})
//       </p>
//       <button onClick={changeAddress}>Change</button>
//       <h1>{person.address.street}</h1>
//       <h1>{person.address.postCode}</h1>
//       <h1>{person.address.address2}</h1>
//     </>
//   );
// }
