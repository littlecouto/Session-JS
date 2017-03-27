
window.onload = function(){

    var session = new Session();
    console.log(session);

    if(session.get('data') == null){

        session.set('nome', 'Vinícius Coutinho de Souza');
        session.set('data', {'user': 'Vinicius', 'age': 19, 'city': 'Taboão da Serra', 'state': 'SP'});

    }

    var nome = document.querySelector('#nome');
    var user = document.querySelector('#user');
    var age  = document.querySelector('#age');
    var state = document.querySelector('#state');
    var city = document.querySelector('#city');

    var data = session.get('data');

    nome.innerHTML = session.get('nome');
    user.innerHTML = data.user;
    age.innerHTML = data.age;
    state.innerHTML = data.state;
    city.innerHTML = data.city;


}