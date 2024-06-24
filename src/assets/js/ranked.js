document.addEventListener('DOMContentLoaded', function () {
const alertSong = document.getElementById('alert-song');
const botao = document.querySelector('.btn');
const alert = document.querySelector('.alert');
const alertTitle = document.getElementById('alert-title');
const alertDesc = document.getElementById('alert-desc');
const result = document.getElementById('result');
const txtInputs = document.getElementById('text-inputs');
const victory = document.getElementById('victory');
const lowser = document.getElementById('lowser');
const btnCleanDisplay = document.getElementById('limpar');



var listenerBtn = [];
//Number buttons
listenerBtn.push(document.getElementById("num0"));
listenerBtn.push(document.getElementById("num1"));
listenerBtn.push(document.getElementById("num2"));
listenerBtn.push(document.getElementById("num3"));
listenerBtn.push(document.getElementById("num4"));
listenerBtn.push(document.getElementById("num5"));
listenerBtn.push(document.getElementById("num6"));
listenerBtn.push(document.getElementById("num7"));
listenerBtn.push(document.getElementById("num8"));
listenerBtn.push(document.getElementById("num9"));


btnCleanDisplay.onclick = function () {
  victory.value = "";
  lowser.value = "";
  victory.focus();
};


for (var i = 0; i < listenerBtn.length; i++) {
  listenerBtn[i].addEventListener("click", writeOnDisplay);
}

var selectedInput = null;
victory.focus();
if(victory.focus){
  selectedInput = victory;
}else{
  selectedInput = lowser;
}

if (victory && lowser) {
  
  victory.addEventListener('focus', function() {
    selectedInput = victory;
    
  });

  lowser.addEventListener('focus', function() {
    selectedInput = lowser;
  });

  for (var i = 0; i < listenerBtn.length; i++) {
    listenerBtn[i].addEventListener("click", writeOnDisplay);
  }

  function writeOnDisplay() {
    let lastDigit = this.textContent; 
    if (selectedInput) {
      selectedInput.value += lastDigit;
    }
  }
}

botao.addEventListener('click', () => {
    if((victory || lowser).value != ""){
      let ranked = 0;
      victoryValue = victory.value;
      lowserValue = lowser.value;
      ranked = victoryValue - lowserValue;
      console.log(ranked);

      switch (true) {
        case (ranked < 10):
          rankLevel = 'Ferro!';
          desc = `O Herói tem um saldo de <span class="highlight">${ranked} vitórias</span> e está no nível de <span class="rank">${rankLevel}!</span>`;
          showAlert("Resultado!", desc, 5000);
          break;
          case (ranked >= 11 && ranked <= 20):
            rankLevel = 'Bronze!';
            desc = `O Herói tem um saldo de <span class="highlight">${ranked} vitórias</span> e está no nível de <span class="rank">${rankLevel}!</span>`;
            showAlert("Resultado!", desc, 5000);
            break;
        case (ranked >= 21 && ranked <= 50):
          rankLevel = 'Prata!';
          desc = `O Herói tem um saldo de <span class="highlight">${ranked} vitórias</span> e está no nível de <span class="rank">${rankLevel}!</span>`;
          showAlert("Resultado!", desc, 5000);
            break;
        case (ranked >= 51 && ranked <= 80):
          rankLevel = 'Ouro!';
          desc = `O Herói tem um saldo de <span class="highlight">${ranked} vitórias</span> e está no nível de <span class="rank">${rankLevel}!</span>`;
          showAlert("Resultado!", desc, 5000);
            break;
        case (ranked >= 81 && ranked <= 90):
          rankLevel = 'Diamante!';
          desc = `O Herói tem um saldo de <span class="highlight">${ranked} vitórias</span> e está no nível de <span class="rank">${rankLevel}!</span>`;
          showAlert("Resultado!", desc, 5000);
            break;
        case (ranked >= 91 && ranked <= 100):
          rankLevel = 'Lendário!';
          desc = `O Herói tem um saldo de <span class="highlight">${ranked} vitórias</span> e está no nível de <span class="rank">${rankLevel}!</span>`;
          showAlert("Resultado!", desc, 5000);
            break;
        case (ranked >= 101):
          rankLevel = 'Imortal!';
          desc = `O Herói tem um saldo de <span class="highlight">${ranked} vitórias</span> e está no nível de <span class="rank">${rankLevel}!</span>`;
          showAlert("Resultado!", desc, 5000);
            break;
        default:
          desc = "Não foi possível calcular o saldo de vitórias!";
          showAlert("Atenção!",desc);
            break;
      }



    }else{
      showAlert("Atenção!","Todos os campos são obrigatórios!", 3000);
      alertSong.play();


    }

    function showAlert(title,desc,time) {
      if (!alert.classList.contains('card-alert')) {
        result.style.display = 'none';
        txtInputs.style.display = 'none';
        alert.style.display = 'block';
        alert.classList.add('card-alert');
        alertTitle.innerHTML = title;
        alertDesc.innerHTML = desc;
      }
      
      setTimeout(() => {
        alert.style.display = 'none';
        result.style.display = 'block';
        txtInputs.style.display = 'flex';
        victory.value = "";
        lowser.value = "";
        victory.focus();
        alert.classList.remove('card-alert');
      }, time);

      
    }
});
});
