const masks = {
    cpf(value){
        return value.replace(/\D/g, '')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d{1,2})/, '$1-$2')
            .replace(/(-\d{2})\d+?$/, '$1');
    },

    cnpj(value){
        return value.replace(/\D/g, '')
            .replace(/(\d\d)(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1/$2')
            .replace(/(\d{4})(\d)/, '$1-$2')
            .replace(/(-\d{2})\d+?$/, '$1');
    }, 
    phone(value){
        return value.replace(/\D/g, '')
            .replace(/(\d{2})(\d)/, '($1) $2')
            .replace(/(\d{4})(\d)/, '$1-$2')
            .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
            .replace(/(-\d{4})\d+?$/, '$1');
    }, 
    cep(value){
        return value.replace(/\D/g, '')
            .replace(/(\d{5})(\d)/, '$1-$2')
            .replace(/(-\d{3})\d+?$/, '$1');
    }, 
    pis(value){
        return value.replace(/\D/g, '')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{5})(\d)/, '$1.$2')
            .replace(/(\d{5}\.)(\d{2})(\d)/, '$1$2-$3')
            .replace(/(-\d)\d+?$/, '$1');
    }, 


}


//dataset retorna o valor do atributo data que está na tag
document.querySelectorAll('input').forEach(($input) => {
    const field = $input.dataset.js; 

    //O addEventListenner input serve para ver o que é digitado no input.
    $input.addEventListener('input', (e) => {
        e.target.value = masks[field](e.target.value); 
    }, false);
})