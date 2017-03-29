/**
 * Simple assertion service for checking whether your result is really what you want.
 */
const expect = (() => {
    const anArray = input => {
        return Object.prototype.toString.call(input) === '[object Array]';
    };

    const anObject = input => {
        return typeof input === 'object' && !anArray(input);
    };

    const lengthy = input => {
        return anArray(input) && input.length > 0;
    };

    const nonEmptyObject = input => {
        return anObject(input) && Object.keys(input).length > 0;
    };

    const objectToHave = (input, what) => {
        return anObject(input) && {}.hasOwnProperty.call(input, what);
    };

    const arrayToHave = (input, what) => {
        return anArray(input) && input.indexOf(what) !== -1;
    };

    const present = input => {
        try {
            return (
                typeof input !== 'undefined' &&
                input !== null
            )
        } catch (e) {
            return false
        }

    };

    const string = input => {
        return present(input) && typeof input === 'string';
    };

    const arrayToHaveObject = (input, whatName, whatValue) => {
        if (anArray(input) && string(whatName) && string(whatName)) {
            for (const item of input) {
                return item[whatName] === whatValue
            }
        }

        return false
    };

    const truthy = input => {
        return (
            typeof input !== 'undefined' &&
            input === true
        )
    };

    const falsy = input => {
        return (
            typeof input !== 'undefined' &&
            input === false
        )
    };

    return {
        anArray,
        anObject,
        lengthy,
        truthy,
        string,
        falsy,
        objectToHave,
        arrayToHave,
        present,
        arrayToHaveObject,
        nonEmptyObject
    }
})();

export default expect;
