/**
 * @name main.js
 * @description Point d'entrée principal dans l'application Javascript
 */
import { Login } from './../../src/user/login.class';
 
let title = document.getElementById('main-title');
title.innerHTML = 'Hello Javascript';

//Creer une instance de Login
const login = new Login();