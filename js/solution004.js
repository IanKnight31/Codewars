//Kata: Get Planet Name BY ID, 8kyu 
//

//Starter code 

// function getPlanetName(id){
//     var name;
//     switch(id){
//       case 1:
//         name = 'Mercury';
//       case 2:
//         name = 'Venus';
//       case 3:
//         name = 'Earth';
//       case 4:
//         name = 'Mars';
//       case 5:
//         name = 'Jupiter';
//       case 6:
//         name = 'Saturn';
//       case 7:
//         name = 'Uranus';
//       case 8:
//         name = 'Neptune';
//     }
    
//     return name;
//   }

//So whenever we test this function with any number we get 'Neptune', so that tells me that no matter the number the function is running all the cases until the end when it hits neptune.
//I think its simply missing the break keyword after each case. 



function getPlanetName(id){
    var name;
    switch(id){
      case 1:
        name = 'Mercury';
        break;
      case 2:
        name = 'Venus';
        break;
      case 3:
        name = 'Earth';
        break;
      case 4:
        name = 'Mars';
        break;
      case 5:
        name = 'Jupiter';
        break;
      case 6:
        name = 'Saturn';
        break;
      case 7:
        name = 'Uranus';
        break;
      case 8:
        name = 'Neptune';
        break;
    }
    
    return name;
  }

  //Indeed our function works with the break keyword