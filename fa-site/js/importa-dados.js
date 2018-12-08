
$.ajax(
  { url: 'http://jon-site-test.s3.amazonaws.com/dados.json',
   dataType: 'json',
   crossDomain: true,
   success: function (dados) {
      console.log(dados);
      montaTabela(dados);
      }
  })


  function montaTabela(dados) {

    
    for (var dados of dados) {
      var trTabela = document.createElement("tr");

      var tdInfoFoto = document.createElement("td");
      var tdInfoNome = document.createElement("td");
      var tdInfoFaceMatch = document.createElement("td");
      

      tdInfoNome.textContent = dados.name;
      tdInfoFaceMatch.textContent = dados.faceMatch;
      tdInfoFoto = document.createElement("img");
      tdInfoFoto.height = 100;
      tdInfoFoto.width = 100;
      tdInfoFoto.src = 'http://jon-images-test2.s3.amazonaws.com/' + dados.name + '.png';
     


      trTabela.appendChild(tdInfoFoto);
      trTabela.appendChild(tdInfoNome);
      trTabela.appendChild(tdInfoFaceMatch);
      
      var tabela = document.querySelector("#tabela-site");

      tabela.appendChild(trTabela);
    }
  }
