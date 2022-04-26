/*
    Napisz program, w którym sumujesz parzyste elementy kolekcji liczb,
    a otrzymany wynik prezentujesz w formacie JSON.
*/

const sumEvenNumbers = (numbers) => numbers
    .filter(x => x % 2 === 0)
    .reduce((x, y) => x + y);



const main = () => {
    const numbers = [1, 2, 3, 4];
    const json = JSON.stringify(
        {sum: sumEvenNumbers(numbers)}, null, 4
    );
    console.log(json);
}
main();
