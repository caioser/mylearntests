var Test = {};
var trying = {};


/* =========== START practice stringEnds =========== */
    //my function
    function stringEnds(str, ending) {
    return ending.length === 0 ? true : str.slice(-ending.length) === ending ;
    }
    
    //learned function
    function strEnds(str, ending) {
        return str.endsWith(ending)
    }
    
    /* --------- TESTS ---------*/
    Test.stringEnds = function() {
        var tests = [
            ["abc", "bc"],
            ["abc", "d"],
            ["abcde", "cde"],
            ["abcde", "abc"],
            ["abcde", ""]
        ];
        var text = "=========================================\n"+
        "before learned 'endsWith()' function \n"+
        "used 'ending.length === 0 ? true : str.slice(-ending.length) === ending ;'";
        
        console.log(text);
    
        for (var i = 0; i < tests.length; i++) {
            console.log(tests[i]+" "+stringEnds(tests[i][0], tests[i][1]));
        }
    
        console.log("=========================================\nafter learned 'endsWith()' function");
        for (var i = 0; i < tests.length; i++) {
            console.log(tests[i]+" "+strEnds(tests[i][0], tests[i][1]));
        }
    }
/* =========== END practice stringEnds =========== */

    function x(pswd) {
        if (pswd === "473") {
            return "/15670895oediv/";
        } else {
            return "error";
        }
    }
/* =========== START practice listPrimeNumbersUpTo =========== */
    function listPrimeNumbersUpTo(n){
        var numerosPrimos = [];
        for (var i = 0; i <= n; i++) {
            var testCount = 0;
            for (var ii = n; ii > 0; ii--) {
                if (i%ii === 0) {
                    testCount += 1;
                }
            }
            if (testCount === 2) {
                numerosPrimos.push(i);
            }
        }
        return numerosPrimos;
    }

    /* --------- TESTS --------- */
    Test.listPrimeNumbersUpTo = function() {
        var times = [10, 30, 100, 200];
        for (var i = 0; i < times.length; i++) {
            console.log(listPrimeNumbersUpTo(times[i]));
        }
    }
/* =========== END practice listPrimeNumbersUpTo =========== */


/* =========== START practice isPalindrome =========== */
    function isPalindrome(palavra){    
        if (palavra === palavra.split("").reverse().join("")) {
            return "SIM, SOU PALÍNDROMO";
        } else {
            return "INFELIZMENTE, NÃO SOU PALÍNDROMO";
        }
    }
    /* --------- TESTS --------- */
    Test.isPalindrome = function() {
        var testes = ["mamam", "mirim", "rapar", "cairo"];
        for (var i = 0; i < testes.length; i++) {
            console.log(testes[i]+" "+isPalindrome(testes[i]));
        }
    }
/* =========== END practice isPalindrome =========== */


/* =========== START practice reverseWords =========== */
    function reverseWords(str) {
        return str.split(" ").map(el=>el.split("").reverse().join("")).join(" ");
    }
    Test.reverseWords = () => {
        var samples = [
            "The quick brown fox jumps over the lazy dog.",
            "apple",
            "a b c d",
            "double  spaced  words",
            "stressed desserts",
            "hello hello"
        ];

        for (var i = 0; i < samples.length; i++) {
            console.log(reverseWords(samples[i])+"\n"+samples[i]);
        }
    }
/* =========== END practice reverseWords =========== */


