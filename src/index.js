import template from 'pug-loader!./index.pug';
import $ from 'jquery';
import './index.scss';


/**
 * Drive our  code.
 */
$(() => {
  $('body').html(template());


  });

});
