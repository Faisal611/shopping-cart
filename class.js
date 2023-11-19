class Support  {
    name;
    city = 'bd'
    dse = 'this is java'
    constructor(name,city) {
        this.name = name;
        this.city = city
    }

    supportFunction () {
        console.log(this.name,'start a support session')
    }
}
const ami =  new Support ('amir', 'satk');
const tumi =  new Support ('faisal', 'jossor');
// console.log(ami);
// console.log(tumi);
ami.supportFunction();