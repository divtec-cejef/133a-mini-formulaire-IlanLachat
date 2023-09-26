/**
 * @author Steve Fallet
 * @since 2022.09.06
 */

'use strict';

//récupération du body
const body = document.querySelector('Body')
//Récupération de la liste déroulante
const listeBackground = body.querySelector('#bg');

body.style.backgroundImage = `url(./img/backgrounds/${listeBackground.value})`


listeBackground.addEventListener('change', function () {
    body.style.backgroundImage = `url(./img/backgrounds/${listeBackground.value})`
});

const formulaire = document.querySelector('form')
const txtMDP = document.querySelector('#motDePasse')
const txtConfirmeMDP = document.querySelector('#confirmer')
const btCreerCompte = document.querySelector('form button[type=submit]')

formulaire.addEventListener('submit', function (event) {
    event.preventDefault()
    if (txtMDP.value < 3  ||txtMDP.value !== txtConfirmeMDP.value) {
        btCreerCompte.classList.add('animate__shakeX')
        alert('Les mots de passe ne correspondent pas !');
        return;
    }
    btCreerCompte.classList.add('animate__hearBeat')
    formulaire.submit()
});

