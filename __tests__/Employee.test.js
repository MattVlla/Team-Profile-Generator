const Employee = require("../lib/Employee");

test("Can create an new employee.", () => {
    const employeeInstance = new Employee();
    expect(typeof(employeeInstance)).toBe("object");
})

test("Testing name.", () => {
    const name = "Matt";
    const employeeInstance = new Employee(name);
    expect(employeeInstance.name).toBe(name);
})

test("Testing ID.", () => {
    const id = 1;
    const employeeInstance = new Employee("Matt", id);
    expect(employeeInstance.id).toBe(id);
})

test("Testing email.", () => {
    const email = "villa.matthew@yahoo.com";
    const employeeInstance = new Employee("Matt", 1, email);
    expect(employeeInstance.email).toBe(email);
})



test("Gets name through getName method.", () => {
    const testName = "Matt";
    const employeeInstance = new Employee(testName);
    expect(employeeInstance.getName()).toBe(testName);
})

test("Can test ID through getID method.", () => {
    const testID = 1;
    const employeeInstance = new Employee("Matt", testID);
    expect(employeeInstance.getId()).toBe(testID);
})

test("Can test email through getEmail method.", () => {
    const testEmail = "villa.matthew@yahoo.com";
    const employeeInstance = new Employee("Matt", 1, testEmail);
    expect(employeeInstance.getEmail()).toBe(testEmail);
})

test("Testing role.", () => {
    const returnValue = "Employee";
    const employeeInstance = new Employee("Matt", 1, "villa.matthew@yahoo.com");
    expect(employeeInstance.getRole()).toBe(returnValue);
})