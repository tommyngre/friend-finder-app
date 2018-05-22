function drawOptions(){

  $('select').each(function () {
    let html = 
    `
    <option value="" disabled selected>Choose one</option>
    <option value="1">1 (worst)</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5 (best)</option>

    `;

    $(this).append(html);

  });

}

$(document).ready(function(){
  drawOptions();
})