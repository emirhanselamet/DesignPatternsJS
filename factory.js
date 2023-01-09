function Developer(name) {
    this.name = name;
    this.type = "Developer"
}
function Tester(name) {
    this.name = name;
    this.type = "Tester"
}

function EmployeeFactory() {
    this.create = (name, type) => {
        switch (type) {
            case 1:
                return new Developer(name);
                break;
            case 2:
                return new Tester(name)
                break;
            default:
                break;
        }
    }
}

function say() {
    console.log(this.name + " " + this.type);
}

const employeeFactory = new EmployeeFactory();
const employees = [];

employees.push(employeeFactory.create("Emirhan", 1));
employees.push(employeeFactory.create("Kerem", 2));

employees.forEach(e => {
    say.call(e)
})