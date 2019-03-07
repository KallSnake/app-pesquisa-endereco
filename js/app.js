let endereco = document.getElementById("endereco");
let bairro = document.getElementById("bairro");
let cidade = document.getElementById("cidade");
let uf = document.getElementById("uf");



function getDadosEnderecoPorCEP(cep) {

    
    // console.log(cep);


    let url = "https://viacep.com.br/ws/" + cep + "/json/unicode/";


    // console.log(url);
                

    let xmlHttp = new XMLHttpRequest();


    xmlHttp.open("GET", url);


    // controlando o status da requisição
    xmlHttp.onreadystatechange = () => {


        if ( xmlHttp.readyState == 4 && xmlHttp.status == 200 ) {


            // console.log(xmlHttp.responseText);

            let dadosJSONText = xmlHttp.responseText;
            let dadosJSONObj = JSON.parse(dadosJSONText);


            // console.log(dadosJSONObj);

            /*
            console.log(dadosJSONObj.logradouro);
            console.log(dadosJSONObj.bairro);
            console.log(dadosJSONObj.localidade);
            console.log(dadosJSONObj.uf);
            */


            endereco.value = dadosJSONObj.logradouro;
            bairro.value = dadosJSONObj.bairro;
            cidade.value = dadosJSONObj.localidade;
            uf.value = dadosJSONObj.uf;
            

        } 

    }

    xmlHttp.send();

}