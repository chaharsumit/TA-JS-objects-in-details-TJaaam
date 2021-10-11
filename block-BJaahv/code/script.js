// Creating using function

/*
function createProjects(name, id, noOfProjects){
  let project = {};
  project.name = name;
  project.id = id;
  project.noOfProjects = noOfProjects;
  project.getProjects = function(){
    return project.noOfProjects;
  };
  project.changeName = function(name){
    project.name = name;
    return project.name;
  }
  project.incrementProject = function(value = 1){
    project.noOfProjects += value;
    return project.noOfProjects;
  }
  project.decrementProject = function(value = 1){
    project.noOfProjects -= value;
    return project.noOfProjects;
  }
  return project;
}

let project1 = createProjects('sumit', "abc", 10);

*/

// using object.create

/*

let projectMethods = {
  getProjects(){
    return this.noOfProjects;
  },
  changeName(name){
    this.name = name;
    return this.name;
  },
  incrementProject(value = 1){
    this.noOfProjects += value;
    return this.noOfProjects;
  },
  decrementProject(value = 1){
    this.noOfProjects -= value;
    return this.noOfProjects;
  },
};

function createProjects(name, id, noOfProjects){
  let project = Object.create(projectMethods);
  project.name = name;
  project.id = id;
  project.noOfProjects = noOfProjects;
  return project;
}

let project1 = createProjects('sumit', 'abc', 10);

*/

// PseudoClassical Pattern

/*

function CreateProjects(name, id, noOfProjects){
  this.name = name;
  this.id = id;
  this.noOfProjects = noOfProjects;
}

CreateProjects.prototype = {
  getProjects(){
    return this.noOfProjects;
  },
  changeName(name){
    this.name = name;
    return this.name;
  },
  incrementProject(value = 1){
    this.noOfProjects += value;
    return this.noOfProjects;
  },
  decrementProject(value = 1){
    this.noOfProjects -= value;
    return this.noOfProjects;
  },
}

let project1 = new CreateProjects('sumit', 'abc', 10);

*/

// Using Class Pattern

/*

class Project{
  constructor(name, id, noOfProjects){
    this.name = name;
    this.id = id;
    this.noOfProjects = noOfProjects;
  }
  getProjects(){
    return this.noOfProjects;
  }
  changeName(name){
    this.name = name;
    return this.name;
  }
  incrementProject(value = 1){
    this.noOfProjects += value;
    return this.noOfProjects;
  }
  decrementProject(value = 1){
    this.noOfProjects -= value;
    return this.noOfProjects;
  }
}

let project1 = new Project('sumit', 'abc', 10);

console.group(project1.name);
console.log(project1.id);
console.log(project1.getProjects());
console.log(project1.changeName('SUMIT'));
console.log(project1.incrementProject(10));
console.log(project1.decrementProject(10));
console.groupEnd();

*/