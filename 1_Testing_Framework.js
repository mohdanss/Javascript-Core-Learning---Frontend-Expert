function describe(testSuiteName, func) {
    console.log(`beginning test suite ${testSuiteName}`);
    try {
        func();
        console.log(`successfully completed test suite ${testSuiteName}`);
    } catch (error) {
        const { testCaseName, errMessage } = error;
        console.error(`failed running test suite ${testSuiteName} on ` +
            `test case ${testCaseName} with error message ${errMessage}`
        );
    }
}

function it(testCaseName, func) {
    console.log(`beginning test case ${testCaseName}`);
    try {
        func();
        console.log(`successfully completed test case ${testCaseName}`);
    } catch (errMessage) {
        throw { testCaseName, errMessage };
    }
}

function expect(actual) {
    return new ExpectedFunctions(actual);
}

class ExpectedFunctions
{
    constructor(actual)
    {
        this.actual = actual;
        this.stringifiedActual = JSON.stringify(actual);
    }

    toExist()
    {
        if (this.actual == null) {
            throw `expected value to exist but got ${this.stringifiedActual}`;
        }
    }

    toBe(expected)
    {
        if (this.actual !== expected) {
            throw `expected ${this.stringifiedActual} to be ${JSON.stringify(expected)}`;
        }
    }

    toBeType(type)
    {
        if (typeof this.actual !== type) {
            throw `expected ${this.stringifiedActual} to be of type ${type} but got ${typeof this.actual}`;
        }
    }
}
