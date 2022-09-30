const Engineer = require("../lib/Engineer");

test("Can create a github.", () => {
    const testGithub = "MattVlla";
    const employeeInstance = new Engineer("Matt", 1, "villa.matthew@yahoo.com", testGithub);
    expect(employeeInstance.github).toBe(testGithub);
});

test("Testing getGithub will return github.", () => {
    const testGithub = "MattVlla";
    const employeeInstance = new Engineer("Matt", 1, "villa.matthew@yahoo.com", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Testing role.", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("Matt", 1, "villa.matthew@yahoo.com", "MattVlla");
    expect(employeeInstance.getRole()).toBe(returnValue);
});