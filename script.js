const formularioCep = document.querySelector('input');
const btnEnviar = document.querySelector('.btn');
let container = document.querySelector('.container');

formularioCep.addEventListener('keyup', handleCep);

function handleCep(e){
  e.preventDefault();
  let valueForm = formularioCep.value;
  buscarCep(valueForm);
}

function buscarCep(cep){
  let cepApi = fetch(`https://viacep.com.br/ws/${cep}/json/`);

  cepApi
  .then(r => {
    return r.json();
  })
  .then(b => {
    if(b){
      container.innerHTML = `Bairro: ${b.bairro}<br><br>Cep: ${b.cep}<br><br>ddd: ${b.ddd}<br><br>ibge: ${b.ibge}<br><br>localidade: ${b.localidade}<br><br>logradouro: ${b.logradouro}<br><br>siafi: ${b.siafi}<br><br>uf: ${b.uf}`;
      console.log(b);
    }
  }).catch((e)=>{
    container.innerHTML = 'Digite o o cep corretamente';
  })
}