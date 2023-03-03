exports.pessoasPage = function(lista){
    var pagHTML = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8" />
        <link rel="stylesheet" href="w3.css">
        <title>Lista de Pessoas</title>
    </head>
    <body>
        <h2 class="w3-center">Lista de Pessoas</h2>
        <div class="w3-center">
        <button class="w3-button w3-gray w3-round-large w3-hover-red" onclick="window.location.href='/'">  Início</button>
        </div>
        <table class="w3-table w3-striped" width="80%">
            <tr>
                <th>Id</th>
                <th>Nome</th>
                <th>Idade</th>
                <th>Sexo</th>
                <th>Cidade</th>
            </tr>
            `
        
    for (let i=0; i < lista.length; i++){
        pagHTML +=  `
            <tr onClick="window.location.href='/pessoas/${lista[i].id}';" >
                <td>${lista[i].id}</td>
                <td>${lista[i].nome}</td>
                <td>${lista[i].idade}</td>
                <td>${lista[i].sexo}</td>
                <td>${lista[i].morada.cidade}</td>
            </tr>
            `
    }

    pagHTML +=  `
        </table> `

    pagHTML +=  `<p>Registos: ${lista.length}</p>`

    pagHTML +=  `
    </body>
    </html>
    `
    return pagHTML;
}

exports.paginaInicial = function(){
    var pagHTML = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8" />
        <link rel="stylesheet" href="w3.css">
        <title>Lista de Pessoas</title>
    </head>
    <body>
        <h2 class="w3-center">Lista de Pessoas</h2>
        <div class="w3-center">
        <button class="w3-button w3-gray w3-round-large w3-hover-red" onclick="window.location.href='/pessoas'">  Lista de Pessoas</button>
        <button class="w3-button w3-gray w3-round-large w3-hover-red" onclick="window.location.href='/sexo'">  Lista de Pessoas por Sexo</button>
        <button class="w3-button w3-gray w3-round-large w3-hover-red" onclick="window.location.href='/desporto'">  Lista de Pessoas por Desporto</button>
        <button class="w3-button w3-gray w3-round-large w3-hover-red" onclick="window.location.href='/profissao'">  Lista de Pessoas por Profissão</button>
        </div>
        `
        
    
    pagHTML +=  `
    </body>
    </html>
    `
    return pagHTML;
}

exports.paginaSexo = function(pessoas){
    var pagHTML = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8" />
        <link rel="stylesheet" href="w3.css">
        <title>Lista de Pessoas por Sexo</title>
    </head>
    <body>
        <h2 class="w3-center">Lista de Pessoas por Sexo</h2>
        <div class="w3-center">
        <button class="w3-button w3-gray w3-round-large w3-hover-red" onclick="window.location.href='/'"> Página Inícial </button>
        <button class="w3-button w3-gray w3-round-large w3-hover-red" onclick="window.location.href='/sexoM'"> Masculino </button>
        <button class="w3-button w3-gray w3-round-large w3-hover-red" onclick="window.location.href='/sexoF'"> Femínino </button>
        <button class="w3-button w3-gray w3-round-large w3-hover-red" onclick="window.location.href='/sexoO'"> Outro </button>
        </div>
        
        <table class="w3-table w3-striped" width="80%">
        <tr>
            <th>Masculino</th>
            <th>Feminino</th>
            <th>Outro</th>
        </tr>
        `
    
    masculino = 0;
    feminino = 0;
    outro = 0;
    for (let i=0; i < pessoas.length; i++){
        if (pessoas[i].sexo == "masculino"){
            masculino++;
        }
        else if (pessoas[i].sexo == "feminino"){
            feminino++;
        }
        else if (pessoas[i].sexo == "outro"){
            outro++;
        }
    }

    pagHTML += `
        <tr>
            <td>${masculino}</td>
            <td>${feminino}</td>
            <td>${outro}</td>
        </tr>
        `
    
        
    
    pagHTML +=  `
    </body>
    </html>
    `
    return pagHTML;
}

exports.pessoasPageSexo = function(lista){
    var pagHTML = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8" />
        <link rel="stylesheet" href="w3.css">
        <title>Lista de Pessoas</title>
    </head>
    <body>
        <h2 class="w3-center">Lista de Pessoas</h2>
        <div class="w3-center">
        <button class="w3-button w3-gray w3-round-large w3-hover-red" onclick="window.location.href='/'"> Página Inícial</button>
        <button class="w3-button w3-gray w3-round-large w3-hover-red" onclick="window.location.href='/sexoM'"> Masculino </button>
        <button class="w3-button w3-gray w3-round-large w3-hover-red" onclick="window.location.href='/sexoF'"> Femínino </button>
        <button class="w3-button w3-gray w3-round-large w3-hover-red" onclick="window.location.href='/sexoO'"> Outro </button>
        </div>
        <table class="w3-table w3-striped" width="80%">
            <tr>
                <th>Id</th>
                <th>Nome</th>
                <th>Idade</th>
                <th>Sexo</th>
                <th>Cidade</th>
            </tr>
            `
        
    for (let i=0; i < lista.length; i++){
        pagHTML +=  `
            <tr onClick="window.location.href='/pessoas/${lista[i].id}';" >
                <td>${lista[i].id}</td>
                <td>${lista[i].nome}</td>
                <td>${lista[i].idade}</td>
                <td>${lista[i].sexo}</td>
                <td>${lista[i].morada.cidade}</td>
            </tr>
            `
    }

    pagHTML +=  `
        </table>
    </body>
    </html>
    `
    return pagHTML;
}

exports.paginaDesporto = function(pessoas){

    const desportos = {}

    pessoas.forEach(pessoa => {
        if (pessoa && pessoa.desportos){
            pessoa.desportos.forEach(desporto => {
                if (desportos[desporto]) {
                    desportos[desporto] += 1
                } else {
                    desportos[desporto] = 1
                }
            })
        }
    })

    var pagHTML = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8" />
        <link rel="stylesheet" href="w3.css">
        <title>Desportos</title>
    </head>
    <body>
        <h2 class="w3-center">Desportos</h2>
        <div class="w3-center">
        <button class="w3-button w3-gray w3-round-large w3-hover-red" onclick="window.location.href='/'"> Página Inícial</button>
        </div>
        <table class="w3-table w3-striped" width="80%">
            <tr>
                <th>Desporto</th>
                <th>Praticantes</th>
            </tr>
            `


    const desportosSorted = Object.entries(desportos).sort((a, b) => b[1] - a[1]);
    
        // loop through the desportos object and add a row for each sport
        desportosSorted.forEach(([desporto, numPraticantes]) => {
            pagHTML += `
                <tr onClick="window.location.href= '/desporto/${desporto}';" >
                    <td>${desporto}</td>
                    <td>${numPraticantes}</td>
                </tr>`
        })

    pagHTML +=  `
        </table>
    </body>
    </html>
    `
    return pagHTML;
}

exports.pessoasPageDesporto = function(lista){
        var pagHTML = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8" />
            <link rel="stylesheet" href="../w3.css">
            <title>Lista de Pessoas</title>
        </head>
        <body>
            <h2 class="w3-center">Lista de Pessoas</h2>
            <div class="w3-center">
            <button class="w3-button w3-gray w3-round-large w3-hover-red" onclick="window.location.href='/'">  Início</button>
            </div>
            <table class="w3-table w3-striped" width="80%">
                <tr>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Idade</th>
                    <th>Sexo</th>
                    <th>Cidade</th>
                </tr>
                `
            
        for (let i=0; i < lista.length; i++){
            pagHTML +=  `
                <tr onClick="window.location.href='/pessoas/${lista[i].id}';" >
                    <td>${lista[i].id}</td>
                    <td>${lista[i].nome}</td>
                    <td>${lista[i].idade}</td>
                    <td>${lista[i].sexo}</td>
                    <td>${lista[i].morada.cidade}</td>
                </tr>
                `
        }
    
        pagHTML +=  `
            </table> `
    
        pagHTML +=  `<p>Registos: ${lista.length}</p>`
    
        pagHTML +=  `
        </body>
        </html>
        `
        return pagHTML;
}

exports.paginaProfissao = function(pessoas){

    const profissao = {}

    pessoas.forEach(pessoa => {
        if (pessoa && pessoa.profissao){
                if (profissao[pessoa.profissao]) {
                    profissao[pessoa.profissao] += 1
                } else {
                    profissao[pessoa.profissao] = 1
                }
            }})
        

    var pagHTML = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8" />
        <link rel="stylesheet" href="w3.css">
        <title>Desportos</title>
    </head>
    <body>
        <h2 class="w3-center">Desportos</h2>
        <div class="w3-center">
        <button class="w3-button w3-gray w3-round-large w3-hover-red" onclick="window.location.href='/'"> Página Inícial</button>
        </div>
        <table class="w3-table w3-striped" width="80%">
            <tr>
                <th>Desporto</th>
                <th>Praticantes</th>
            </tr>
            `


    const desportosSorted = Object.entries(profissao).sort((a, b) => b[1] - a[1]);
    
        // loop through the desportos object and add a row for each sport
        for(let i = 0; i < 10; i++){
            pagHTML += `
                <tr onClick="window.location.href= '/profissao/${desportosSorted[i][0]}';" >
                    <td>${desportosSorted[i][0]}</td>
                    <td>${desportosSorted[i][1]}</td>
                </tr>`
        }

    pagHTML +=  `
        </table>
    </body>
    </html>
    `
    return pagHTML;
}

exports.pessoasPageProfissao = function(lista){
    var pagHTML = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8" />
        <link rel="stylesheet" href="../w3.css">
        <title>Lista de Pessoas</title>
    </head>
    <body>
        <h2 class="w3-center">Lista de Pessoas</h2>
        <div class="w3-center">
        <button class="w3-button w3-gray w3-round-large w3-hover-red" onclick="window.location.href='/'">  Início</button>
        </div>
        <table class="w3-table w3-striped" width="80%">
            <tr>
                <th>Id</th>
                <th>Nome</th>
                <th>Idade</th>
                <th>Sexo</th>
                <th>Cidade</th>
            </tr>
            `
        
    for (let i=0; i < lista.length; i++){
        pagHTML +=  `
            <tr onClick="window.location.href='/pessoas/${lista[i].id}';" >
                <td>${lista[i].id}</td>
                <td>${lista[i].nome}</td>
                <td>${lista[i].idade}</td>
                <td>${lista[i].sexo}</td>
                <td>${lista[i].morada.cidade}</td>
            </tr>
            `
    }

    pagHTML +=  `
        </table> `

    pagHTML +=  `<p>Registos: ${lista.length}</p>`

    pagHTML +=  `
    </body>
    </html>
    `
    return pagHTML;
}

exports.personalPage = function(data){
    console.log(data)
    var pagHtml = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8" />
        <link rel="stylesheet" href="../w3.css">
        <title>Página Pessoal</title>
    </head>
    <body>
    <div class="w3-center">
        <button class="w3-button w3-gray w3-round-large w3-hover-red" onclick="window.location.href='/'">  Início</button>
        </div>
        `

    pagHtml += `<div class='person'>`
    pagHtml += "<h2>" + data[0].nome + "</h2>";
    pagHtml += "<p><b>Idade:</b> " + data[0].idade + "</p>";
    pagHtml += "<p><b>Sexo:</b> " + data[0].sexo + "</p>";  
    pagHtml += "<div class='address'>";
    pagHtml += "<p><b>Cidade:</b> " + data[0].morada.cidade + "</p>";
    pagHtml += "<p><b>Distrito:</b> " + data[0].morada.distrito + "</p>";
    pagHtml += "</div>";
    pagHtml += "<p><b>BI</b>: " + data[0].BI + "</p>";
    pagHtml += "<p><b>Descrição:</b> " + data[0].descrição + "</p>";
    pagHtml += "<p><b>Profissão:</b> " + data[0].profissao + "</p>";
    pagHtml += "<div class='political-party'>";
    pagHtml += "<p><b>Partido político:</b> " + data[0].partido_politico.party_abbr + " - " + data[0].partido_politico.party_name + "</p>";
    pagHtml += "</div>";
    pagHtml += "<p><b>Religião:</b> " + data[0].religiao + "</p>";
    pagHtml += "<div class='sports'>";
    pagHtml += "<p><b>Desportos:</b> " + data[0].desportos.join(", ") + "</p>";
    pagHtml += "</div>";
    pagHtml += "<div class='animals'>";
    pagHtml += "<p><b>Animais de estimação:</b> " + data[0].animais.join(", ") + "</p>";
    pagHtml += "</div>";
    pagHtml += "<div class='public-figures'>";
    pagHtml += "<p><b>Figuras públicas portuguesas favoritas:</b> " + data[0].figura_publica_pt.join(", ") + "</p>";
    pagHtml += "</div>";
    pagHtml += "<p><b>Marca de carro preferida:</b> " + data[0].marca_carro + "</p>";
    pagHtml += "<div class='favorite-destinations'>";
    pagHtml += "<p><b>Destinos favoritos:</b> " + data[0].destinos_favoritos.join(", ") + "</p>";
    pagHtml += "</div>";
    pagHtml += "<div class='attributes'>";
    pagHtml += "<p><b>Fumador:</b> " + (data[0].atributos.fumador ? "Sim" : "Não") + "</p>";
    pagHtml += "<p><b>Gosta de cinema:</b> " + (data[0].atributos.gosta_cinema ? "Sim" : "Não") + "</p>";
    pagHtml += "<p><b>Gosta de viajar:</b>" + (data[0].atributos.gosta_viajar ? "Sim" : "Não") + "</p>";
    pagHtml += "<p><b>Acorda cedo:</b> " + (data[0].atributos.acorda_cedo ? "Sim" : "Não") + "</p>";
    pagHtml += "<p><b>Gosta de ler:</b> " + (data[0].atributos.gosta_ler ? "Sim" : "Não") + "</p>";
    pagHtml += "<p><b>Gosta de música:</b> " + (data[0].atributos.gosta_musica ? "Sim" : "Não") + "</p>";
    pagHtml += "<p><b>Gosta de comer:</b> " + (data[0].atributos.gosta_comer ? "Sim" : "Não") + "</p>";
    pagHtml += "<p><b>Gosta de animais de estimação:</b> " + (data[0].atributos.gosta_animais_estimacao ? "Sim" : "Não") + "</p>";
    pagHtml += "<p><b>Gosta de dançar:</b> " + (data[0].atributos.gosta_dancar ? "Sim" : "Não") + "</p>";
    pagHtml += "<p><b>Comida Favorita:</b> " + data[0].atributos.comida_favorita + "</p>";

    pagHtml +=  `
    </body>
    </html>
    `

        return pagHtml;
}
