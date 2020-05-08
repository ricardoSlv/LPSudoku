
fs = require('fs');

try {
    fs.unlinkSync('vars.txt')
    fs.unlinkSync('singles.txt')
    fs.unlinkSync('obj.txt')
    fs.unlinkSync('bin.txt')
}
catch (error) {
    console.log("Couldn't delete file, probably didn't exist");
}

//----- O valor de xij é igual à soma de todos os valores que lá estiverem

//linha
for (i = 1; i <= 9; i++) {
    //coluna
    for (j = 1; j <= 9; j++) {
        //valor
        fs.appendFileSync(`./vars.txt`, `x${i}${j} = 1 ;\n`, 'ascii', (error) => { if (error) { return console.log(error); } });
        fs.appendFileSync(`./vars.txt`, `x${i}${j} = `, 'ascii', (error) => { if (error) { return console.log(error); } });
        for (k = 1; k <= 8; k++) {
            fs.appendFileSync(`./vars.txt`, `x${i}${j}_${k} + `, 'ascii', (error) => { if (error) { return console.log(error); } });
        }
        fs.appendFileSync(`./vars.txt`, `x${i}${j}_9 ; `, 'ascii', (error) => { if (error) { return console.log(error); } });
        fs.appendFileSync(`./vars.txt`, `\n`, 'ascii', (error) => { if (error) { return console.log(error); } });
    }
    fs.appendFileSync(`./vars.txt`, `\n`, 'ascii', (error) => { if (error) { return console.log(error); } });
}

//Em cada  a quadrado/linha/coluna a soma dos quadrados [1-9] = 1

// -- linhas --
//linha
for (line = 1; line <= 9; line++) {
    //valor
    for (val = 1; val <= 9; val++) {
        //coluna
        for (col = 1; col <= 8; col++) {
            fs.appendFileSync(`./singles.txt`, `x${line}${col}_${val} + `, 'ascii', (error) => { if (error) { return console.log(error); } });
        }
        fs.appendFileSync(`./singles.txt`, `x${line}9_${val} `, 'ascii', (error) => { if (error) { return console.log(error); } });
        fs.appendFileSync(`./singles.txt`, `= 1  ;\n`, 'ascii', (error) => { if (error) { return console.log(error); } });
    }
}

fs.appendFileSync(`./singles.txt`, `\n\n\n`, 'ascii', (error) => { if (error) { return console.log(error); } });


// -- colunas --
//linha
for (col = 1; col <= 9; col++) {
    //valor
    for (val = 1; val <= 9; val++) {
        //coluna
        for (line = 1; line <= 8; line++) {
            fs.appendFileSync(`./singles.txt`, `x${line}${col}_${val} + `, 'ascii', (error) => { if (error) { return console.log(error); } });
        }
        fs.appendFileSync(`./singles.txt`, `x9${col}_${val} `, 'ascii', (error) => { if (error) { return console.log(error); } });
        fs.appendFileSync(`./singles.txt`, `= 1  ;\n`, 'ascii', (error) => { if (error) { return console.log(error); } });
    }
}

fs.appendFileSync(`./singles.txt`, `\n\n\n`, 'ascii', (error) => { if (error) { return console.log(error); } });

// -- quadrados --
//quadrado
for (line = 0; line <= 2; line++) {
    for (col = 0; col <= 2; col++) {
        //iterar sobre o quadrado
        var squares = [[1, 1], [1, 2], [1, 3], [2, 1], [2, 2], [2, 3], [3, 1], [3, 2]]
        for (val = 1; val <= 9; val++) {
            for (square = 0; square <= 7; square++) {
                fs.appendFileSync(`./singles.txt`, `x${line * 3 + squares[square][0]}${col * 3 + squares[square][1]}_${val} + `, 'ascii', (error) => { if (error) { return console.log(error); } });
            }
            fs.appendFileSync(`./singles.txt`, `x${line * 3 + 3}${col * 3 + 3}_${val} `, 'ascii', (error) => { if (error) { return console.log(error); } });
            fs.appendFileSync(`./singles.txt`, `= 1  ;\n`, 'ascii', (error) => { if (error) { return console.log(error); } });
        }
    }
}

// -- funcao objetivo --

for (col = 1; col <= 9; col++) {
    //valor
    for (val = 1; val <= 9; val++) {
        //coluna
        for (line = 1; line <= 9; line++) {
            fs.appendFileSync(`./obj.txt`, `x${line}${col}_${val} + `, 'ascii', (error) => { if (error) { return console.log(error); } });
        }
    }
    fs.appendFileSync(`./obj.txt`, `\n`, 'ascii', (error) => { if (error) { return console.log(error); } });
}

// -- variavies binarias --

for (col = 1; col <= 9; col++) {
    //valor
    for (val = 1; val <= 9; val++) {
        //coluna
        for (line = 1; line <= 9; line++) {
            fs.appendFileSync(`./bin.txt`, `x${line}${col}_${val}, `, 'ascii', (error) => { if (error) { return console.log(error); } });
        }
    }
    fs.appendFileSync(`./bin.txt`, `\n`, 'ascii', (error) => { if (error) { return console.log(error); } });
}

//Alguns quadradosxyvalor=1

//Cada Quadrado tem de ter 1 valor






