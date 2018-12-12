/**
 * @name main.js
 * @description Point d'entrée principal dans l'application Javascript
 */
import { Login } from './../../src/user/login.class';
import { LoginController } from '../../src/user/login/loginController.class';
import { StoriesController} from '../../src/stories/storiesController.class';
 
let title = document.getElementById('main-title');
title.innerHTML = 'Hello Javascript';

//Controleur des stories
const controllerStories = new StoriesController
controllerStories.getView();

//@version 1.0.1 Passage par controleur
const controller = new LoginController();
controller.getView();

//Creer une instance de Login
const login = new Login();