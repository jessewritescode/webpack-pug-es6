import template from 'pug-loader!./index.pug';
import $ from 'jquery';
import './index.css';

const main = () => {
  $('body').html(template());
};

export default main;