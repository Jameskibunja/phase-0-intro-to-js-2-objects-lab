const employee = {
    name: 'Kibunja',
    streetAddress:'15 Nyeri',
};

function updateEmployeeWithKeyAndValue(employee){
    const newEmployee = {...employee};
    newEmployee['streetAddress'] = '11 Broadway';
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee){
    const streetAddress = 'delete employee.name'
    employee['streetAddress'] = '12 Broadway'
    return employee;
}

function deleteFromEmployeeByKey() {
    const newEmployee = {newEmployee}
    return newEmployee
}

function destructivelyDeleteFromEmployeeByKey(employee) {
    delete employee.name
    return employee
}