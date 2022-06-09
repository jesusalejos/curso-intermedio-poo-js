// Class 9

function isObject(subject) {
  return typeof subject == "object";
}

function isArray(subject) {
  return Array.isArray(subject);
}

function deepCopy(subject) {
  let copySubject;

  const subjectIsObject = isObject(subject);
  const subjectIsArray = isArray(subject);

  if (subjectIsArray) {
    copySubject = [];
  } else if (subjectIsObject) {
    copySubject = {};
  } else {
    return subject;
  }

  for (key in subject) {
    const keyIsObject = isObject(subject[key]);
    const IndexArray = isArray(subject[key]);

    if (keyIsObject) {
      copySubject[key] = deepCopy(subject[key]);
    } 

    else if (IndexArray){
        copySubject.push(subject[key]);
      } 

    else {
        copySubject[key] = subject[key];
      }
    
  }

  return copySubject;
}


// function SuperObject() {}
// SuperObject.isObject = function (subject) {
//   return typeof subject == "object";
// }
// SuperObject.deepCopy = function (subject) {
//   let copySubject;

//   const subjectIsObject = isObject(subject);
//   const subjectIsArray = isArray(subject);

//   if (subjectIsArray) {
//     copySubject = [];
//   } else if (subjectIsObject) {
//     copySubject = {};
//   } else {
//     return subject;
//   }

//   for (key in subject) {
//     const keyIsObject = isObject(subject[key]);

//     if (keyIsObject) {
//       copySubject[key] = deepCopy(subject[key]);
//     } else {
//       if (subjectIsArray) {
//         copySubject.push(subject[key]);
//       } else {
//         copySubject[key] = subject[key];
//       }
//     }
//   }

//   return copySubject;
// }

// function requiredParam(param) {
//   throw new Error(param + " es obligatorio");
// }

function LearningPath({
  name = requiredParam("name"),
  courses = [],
}) {
  this.name = name;
  this.courses = courses;
}

function Student({
  name = requiredParam("name"),
  email = requiredParam("email"),
  age,
  twitter,
  instagram,
  facebook,
  approvedCourses = [],
  learningPaths = [],
} = {}) {
  this.name = name;
  this.email = email;
  this.age = age;
  this.approvedCourses = approvedCourses;
  this.socialMedia = {
    twitter,
    instagram,
    facebook,
  };

  const private = {
    "_learningPaths": [],
  };

  Object.defineProperty(this, "learningPaths", {
    get() {
      return private["_learningPaths"];
    },
    set(newLp) {
      if (newLp instanceof LearningPath) {
        private["_learningPaths"].push(newLp);
      } else {
        console.warn("Alguno de los LPs no es una instancia dell prototipo LearningPath");
      }
    },
  });

  for (learningPathIndex in learningPaths) {
    this.learningPaths = learningPaths[learningPathIndex];
  }
}

const escuelaWeb = new LearningPath({ name: "Escuela de WebDev" });
const escuelaData = new LearningPath({ name: "Escuela de Data Science" });

//Class 3

// const juan = new Student({
//   email: "juanito@frijoles.co",
//   name: "Juanito",
//   learningPaths: [
//     escuelaWeb,
//     escuelaData,
//   ],
// });


// // console.log(Object.keys(juan));
// // console.log(Object.getOwnPropertyNames(juan));
// // console.log(Object.values(juan));
// // console.log(Object.entries(juan));
// // console.log(Object.getOwnPropertyDescriptors(juan));

// //Class 4

// Object.seal(juan);
// console.log(Object.getOwnPropertyDescriptors(juan));

// Object.defineProperty(juan, "navigator", {
//     value: "Chrome",
//     enumerable: false,
//     writable: true,
//     configurable: true,
// });

// Object.defineProperty(juan, "editor", {
//     value: "VSCode",
//     enumerable: true,
//     writable: false,
//     configurable: true
// });

// Object.defineProperty(juan, "terminal", {
//     value: "WSL",
//     enumerable: true,
//     writable: true,
//     configurable: false,
// });

// Object.defineProperty(juan, "pruebNasa", {
//     value: "marcianito",
//     enumerable: false,
//     writable: false,
//     configurable: false,
// });

// console.log(Object.getOwnPropertyDescriptors(juan));

// //Class 6

// const obj1 = {
//     a: 'a',
//     b: 'b',
//     c: {
//         d: 'd',
//         e: 'e',
//     },
// };

// // Shallow Copy con for
// const obj2 = {};
// for (prop in obj1) {
//     obj2[prop] = obj1[prop]; 
// }

// // Metodos de Object para hacer Shallow Copy
// const obj3 = Object.assign({}, obj1);
// const obj4 = Object.create(obj1);

// // class 7

// const objectComplex = JSON.stringify(obj1);
// const obj5 = JSON.parse(objectComplex);
// obj1.a ="AAAAAA"
// obj5.a = "EiEiEi"
// console.log(obj1);
// console.log(obj5);

//more about class 9

// const obj1 = {
//     a: 'a',
//     b: 'b',
//     c: {
//         d: 'd',
//         e: 'e',
//     },
// };

// function isObject(subject) {
//   return typeof subject == "object";
// }

// function isArray(subject) {
//   return Array.isArray(subject);
// }

// function deepCopy(subject) {
//   let copySubject;

//   const subjectIsObject = isObject(subject);
//   const subjectIsArray = isArray(subject);

//   if (subjectIsArray) {
//     copySubject = [];
//   } else if (subjectIsObject) {
//     copySubject = {};
//   } else {
//     return subject;
//   }

//   for (key in subject) {
//     const keyIsObject = isObject(subject[key]);
//     const IndexArray = isArray(subject[key]);

//     if (keyIsObject) {
//       copySubject[key] = deepCopy(subject[key]);
//     } 

//     else if (IndexArray){
//         copySubject.push(subject[key]);
//       } 

//     else {
//         copySubject[key] = subject[key];
//       }
    
//   }

//   return copySubject;
// }

// let obj2 = deepCopy(obj1)

// console.log(obj2)

//Class 10

// const studentBase = {
//   name: undefined,
//   email: undefined,
//   age: undefined,
//   approvedCourse: undefined,
//   learningPaths: undefined,
//   socialMedia: {
//       twitter: undefined,
//       instagram: undefined,
//       facebook: undefined,
//   }
// };

// const carlos = deepCopy(studentBase);
// // Object.defineProperty(carlos, "name", {
// //     value: "Carlitos",
// //     configurable: false,
// // });
// Object.seal(carlos); // Es lo mismo que lo de arriba pero mas easy
// carlos.name = "Carlitos";

// Object.isSealed(carlos); // Nos muestra con True o False si todas las propiedades estan selladas
// Object.isFrozen(carlos); // Nos muestra con True o False si todas las propiedades estan congeladas

// console.log(carlos);

//Class 11

/* Codigo Deep Copy */

// Requerimientos de parametros obligatorios
function requiredParam(param){
  throw new Error(param + " Campo obligatorio");
}

// Fabrica de estudiantes
// function createStudent({
//   name = requiredParam("name"),
//   email = requiredParam("email"),
//   age,
//   twitter,
//   instagram,
//   facebook,
//   approvedCourses = [],
//   learningPaths = [],
// } = {}) {
//   return {
//       name,
//       age,
//       email,
//       approvedCourses,
//       learningPaths,
//       socialMedia: {
//           twitter,
//           instagram,
//           facebook,
//       },
//   };
// }

// const carlos = createStudent({
//   name: 'Carlito',
//   age: 20,
//   email: 'carlito@mazzarolito.com',
//   twitter: 'carlitosmzz',
// }); // {}

// class 12

// function requiredParam(param){throw new Error(param+" es obligatorio");}

// function createStudent({
//   name=requiredParam("name"),
//   email=requiredParam("email"),
//   age,
//   twitter,
//   instagram,
//   facebook,
//   approvedCourses=[],
//   learningPaths=[],
// }={})
// {
//   const private={
//     "_name":name,
//   };
//   const public={
//     email,
//     age,
//     approvedCourses,
//     learningPaths,
//     socialMedia:{
//       twitter,
//       instagram,
//       facebook,
//     },
//     readName()
//     {return private["_name"];
//   },
//   changeName(newName){
//     private["_name"]=newName;
//   },};

//   Object.defineProperty(public,"readName",{
//     writable:false,
//     configurable:false,});
//   Object.defineProperty(public,"changeName",{
//     writable:false,
//     configurable:false,});

    // In the previous not work object.freeze() for the function scope. 

//     return public;}

// const juan=createStudent({email:"juanito@frijoles.co",name:"Juanito"});

// class 13

function requiredParam(param){throw new Error(param+" es obligatorio");}

function createStudent({
  name=requiredParam("name"),
  email=requiredParam("email"),
  age,
  twitter,
  instagram,
  facebook,
  approvedCourses=[],
  learningPaths=[],
}={})
{
  const private={
    "_name":name,
  };

  const public={
    email,
    age,
    approvedCourses,
    learningPaths,
    socialMedia:{
      twitter,
      instagram,
      facebook,
    },

    get name (){
      return private["_name"]
    },

    set name (newName){
      if (newName.length != 0) {
        return private["_name"]
      }
      else {
        console.warn("Tu nombre debe tener al menos un caracter")
      }
      
    }
  }
    return public
};

const juan=createStudent({email:"juanito@frijoles.co",name:"Juanito"});