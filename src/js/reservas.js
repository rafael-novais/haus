
document.querySelector("#reservar").addEventListener("click", (event) => {
    event.preventDefault();
    
    let nome = document.querySelector(".nome").value;
    let data = document.querySelector(".data").value;
    let hora = document.querySelector(".hora").value;
    let evento = document.querySelector(".evento").value;
    let convidados = document.querySelector(".convidados").value;
    let obs = document.querySelector(".obs").value;

    if(!nome || !data || !hora || !evento || !convidados || !obs){
        alert("Todos os campos são obrigatórios!");
        return;
    }


    let texto = 
    `Olá, gostaria de fazer uma reserva, aí vão minhas informações:%0A
     Nome: ${nome},%0A
     Data: ${data},%0A
     Hora: ${hora},%0A
     Comemoração: ${evento},%0A
     Numero convidados: ${convidados},%0A
     Observações: ${obs}
    `
    console.log(texto)

    let url = `https://api.whatsapp.com/send?phone=+5511945648357&text=${texto}`;

    window.location.href = url;

});