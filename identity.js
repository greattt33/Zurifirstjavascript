function identity(name,country,height,hobby){
    this.name=name,
    this.country=country,
    this.height=height,
    this.hobby= [hobby]
}

const person= new identity( 'dayo', 'Nigeria', 1.65, ['football','games']);

console.log(person);