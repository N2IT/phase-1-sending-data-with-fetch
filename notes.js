// Add your code here
// fetch(destinationURL, configurationObject);

// const configurationObject = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json",
//       },
//       body: JSON.stringify({
//         dogName: "Byron",
//         dogBreed: "Poodle",
//       }),
//     };

//     fetch("http://localhost:3000/dogs", configurationObject);

    //another way to accomplish the same is to buid out the body of the request in a variable
    // const formData = {
    //     dogName: "Byron",
    //     dogBreed: "Poodle",
    //   };
      
    //   const configurationObject = {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //       "Accept": "application/json",
    //     },
    //     body: JSON.stringify(formData),
    //   };
      
    //   fetch("http://localhost:3000/dogs", configurationObject);

    //Now lets add the .then() to handle what happens after
    // const formData = {
    //     dogName: "Byron",
    //     dogBreed: "Poodle",
    //   };
      
    //   const configurationObject = {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //       "Accept": "application/json",
    //     },
    //     body: JSON.stringify(formData),
    //   };
      
    //   fetch("http://localhost:3000/dogs", configurationObject)
    //     .then(function (response) {
    //       return response.json();
    //     })
    //     .then(function (object) {
    //       console.log(object);
    //     });

        ///Catch()
        // const formData = {
        //     dogName: "Byron",
        //     dogBreed: "Poodle",
        //   };
          
        //   // method: "POST" is missing from the object below
        //   const configurationObject = {
        //     headers: {
        //       "Content-Type": "application/json",
        //       "Accept": "application/json",
        //     },
        //     body: JSON.stringify(formData),
        //   };
          
        //   fetch("http://localhost:3000/dogs", configurationObject)
        //     .then(function (response) {
        //       return response.json();
        //     })
        //     .then(function (object) {
        //       console.log(object);
        //     })
        //     .catch(function (error) {
        //       alert("Bad things! Ragnarők!");
        //       console.log(error.message);
        //     });