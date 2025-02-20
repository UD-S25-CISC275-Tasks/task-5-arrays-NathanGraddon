/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    let newArr: number[] = [];
    let len: number = numbers.length;
    if (len == 0) {
        return [];
    }
    if (len == 1) {
        return [numbers[0], numbers[0]];
    } else {
        newArr.push(numbers[0], numbers.slice(-1)[0]);
    }
    return newArr;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    let newArr: number[] = [];
    for (let num of numbers) {
        newArr.push(num * 3);
    }
    return newArr;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    let convert: number[] = [];
    for (let num of numbers) {
        if (Number(num) && !isNaN(Number(num))) {
            convert.push(Number(num));
        } else {
            convert.push(0);
        }
    }
    return convert;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    let convert: number[] = [];
    for (let amount of amounts) {
        if (amount.startsWith("$")) {
            amount = amount.slice(1);
        }
        if (Number(amount) && !isNaN(Number(amount))) {
            convert.push(Number(amount));
        } else {
            convert.push(0);
        }
    }
    return convert;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    let fix: string[] = [];
    for (let message of messages) {
        if (message.endsWith("!")) {
            message = message.toUpperCase();
        }
        if (!message.endsWith("?")) {
            fix.push(message);
        }
    }
    return fix;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    let count: number = 0;
    for (let word of words) {
        if (word.length < 4) {
            count++;
        }
    }
    return count;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length == 0) {
        return true;
    }
    for (let color of colors) {
        if (
            color.toLowerCase() !== "red" &&
            color.toLowerCase() !== "blue" &&
            color.toLowerCase() !== "green"
        ) {
            return false;
        }
    }
    return true;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length == 0) {
        return "0=0";
    }
    let total: number = 0;
    let newArr: string[] = [];
    for (let add of addends) {
        if (add == addends.slice(-1)[0]) {
            newArr.push(String(add));
        } else {
            newArr.push(add + "+");
        }
        total += add;
    }
    newArr.splice(0, 0, total + "=");
    console.log(newArr.join);
    return newArr.join().split(",").join("");
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    let newArr: number[] = [];
    let count: number = 0;
    for (let value of values) {
        if (value > 0) {
            count += value;
        }
        if (value < 0 && newArr.every((value) => value > 0)) {
            newArr.push(value, count);
        } else {
            newArr.push(value);
        }
    }
    if (newArr.every((value) => value > 0)) {
        newArr.push(count);
    }
    return newArr;
}
