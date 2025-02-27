/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    let copy = [...numbers];
    let len: number = copy.length;
    if (len == 0) {
        return [];
    }
    if (len === 1) {
        return [copy[0], copy[0]];
    }
    return [copy[0], copy.slice(-1)[0]];
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    return numbers.map((x) => x * 3);
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    return numbers.map((num) => (isNaN(Number(num)) ? 0 : Number(num)));
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    amounts = amounts.map((amount) =>
        amount.startsWith("$") ? amount.slice(1) : amount,
    );
    return amounts.map((num) => (isNaN(Number(num)) ? 0 : Number(num)));
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    messages = messages.filter(
        (sentence: string): boolean => !sentence.includes("?"),
    );
    return messages.map((yell) =>
        yell.endsWith("!") ? yell.toUpperCase() : yell,
    );
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    words = words.filter((word: string): boolean => word.length < 4);
    return words.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    return (
        colors.length === 0 ||
        colors
            .map((color) => color.toLowerCase())
            .every(
                (color) =>
                    color == "red" || color === "blue" || color === "green",
            )
    );
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
    addends.map((add) =>
        add === addends.slice(-1)[0] ?
            newArr.push(String(add))
        :   newArr.push(add + "+"),
    );
    addends.map((x) => (total += x));
    newArr.splice(0, 0, total + "=");
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
    let count: number = 0;
    const newArr = values.flatMap((value, index, arr) => {
        count += value > 0 ? value : 0;
        return value < 0 && arr.slice(0, index).every((x) => x > 0) ?
                [value, count]
            :   value;
    });
    return values.every((value) => value > 0) ? [...newArr, count] : newArr;
}
