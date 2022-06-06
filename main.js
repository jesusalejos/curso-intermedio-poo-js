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

const juan = new Student({
  email: "juanito@frijoles.co",
  name: "Juanito",
  learningPaths: [
    escuelaWeb,
    escuelaData,
  ],
});


// console.log(Object.keys(juan));
// console.log(Object.getOwnPropertyNames(juan));
// console.log(Object.values(juan));
// console.log(Object.entries(juan));
// console.log(Object.getOwnPropertyDescriptors(juan));

//Class 4

Object.seal(juan);
console.log(Object.getOwnPropertyDescriptors(juan));

Object.defineProperty(juan, "navigator", {
    value: "Chrome",
    enumerable: false,
    writable: true,
    configurable: true,
});

Object.defineProperty(juan, "editor", {
    value: "VSCode",
    enumerable: true,
    writable: false,
    configurable: true
});

Object.defineProperty(juan, "terminal", {
    value: "WSL",
    enumerable: true,
    writable: true,
    configurable: false,
});

Object.defineProperty(juan, "pruebNasa", {
    value: "marcianito",
    enumerable: false,
    writable: false,
    configurable: false,
});

console.log(Object.getOwnPropertyDescriptors(juan));