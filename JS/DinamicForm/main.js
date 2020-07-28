var radioButtons = document.querySelectorAll('.form-check-label input'); 
var formPessoaFisica = document.getElementById('formPessoaFisica');
var formPessoaJuridica = document.getElementById('formPessoaJuridica');

function showPessoaFisica(){
    radioButtons[0].addEventListener('input', e => {
        formPessoaFisica.innerHTML = `<div class="form-group">
        <input class="form-control" type="text" placeholder="CPF">
    </div>

    <div class="form-group">
        <input class="form-control" type="text" placeholder="Nome completo">
    </div>

    <div class="form-group">
        <input class="form-control" type="text" placeholder="Senha">
    </div>

    <div class="form-group">
        <input class="form-control" type="text" placeholder="Confirme a senha">
    </div>`;
        formPessoaJuridica.innerHTML = "";
    });
}

function showPessoaJuridica(){
    radioButtons[1].addEventListener('input', e => {
        formPessoaJuridica.innerHTML = `<div class="form-group">
                    <input class="form-control" type="text" placeholder="CNPJ">
                </div>

                <div class="form-group">
                    <input class="form-control" type="text" placeholder="Razão social">
                </div>

                <div class="form-group">
                    <input class="form-control" type="text" placeholder="Nome fantasia">
                </div>

                <div class="form-group">
                    <input class="form-control" type="text" placeholder="Inscrição estadual">
                </div>

                <label>Dados pessoais</label>

                <div class="form-group">
                    <input class="form-control" type="text" placeholder="Nome completo">
                </div>

                <div class="form-group">
                    <input class="form-control" type="text" placeholder="Senha">
                </div>

                <div class="form-group">
                    <input class="form-control" type="text" placeholder="Confirme a senha">
                </div>`;
        formPessoaFisica.innerHTML = "";
    });
}
