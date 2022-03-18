//promisse: ECMAScript 2015
//async/await: ECMAScript 2017

//async
{
async function hello(nome){
    return `Hello, ${nome}`
}

const resultado = hello ("Joao")
resultado.then (res => console.log(res))


const { default: axios } = require('axios')
}

//await
{
    function fatorial(n){
        if (n<0) return Promise.reject("Valor não pode ser negativo")
        let res = 1
        for (let i = 2; i < n; i++) res *= i
        return Promise.resolve(res)
    }
}

async function chamadaComAsyncAwait(){
    try {
        const f1 = await fatorial(10)
        console.log(f1)
        const f2 = await fatorial(10)
        console.log(f2)        
    } catch (e) {
        console.log(e)
    }
}

chamadaComAsyncAwait();

// function chamadaComThenCatch(){
//     fatorial(10)
//         .then((res => console.log(res))
//         .catch(erro => console.log(erro)))
    
//     fatorial(-10)
//         .then(res => console.log(res))
//         .catch(erro => console.log(erro))
// }

// chamadaComThenCatch()

//uso API
{
    // require('dotenv').config()
    // const {PROTOCOL, BASE_URL, APPID, Q, CNT, UNITS, LANGUAGE} = process.env//DESESTRUITURAÇÃO, pega os atributos de um objeto
    
    // const url = `${PROTOCOL}://${BASE_URL}?q=${Q}&appid=${APPID}&cnt=${CNT}&units=${UNITS}&lang=${LANGUAGE}` // `${}` avalia oq tem dentro do 
    // // diferença entre maiusculo e minusculo = case ignore ou ignore case
    
    // axios.get(url)
    //     .then(res => {
        //         return res.data
        //     })
        
        //     .then (res =>{
            //         return res['list']
            //     })//esse res  é referente ao que retorna do then anterior
            
            //     .then (res =>{
                //         console.log(`${Q}`)
                //         res.forEach(elemento => {
                    //             console.log("Temp Min: " + elemento['main']['temp_min'])
                    //             console.log("Temp Max: " + elemento['main']['temp_max'])
                    //             console.log("Descricacao: " + elemento['weather'][0]['description'])
                    //         });
                    //     })
}