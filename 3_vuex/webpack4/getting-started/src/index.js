import _ from 'lodash'
import $ from 'jquery'
import Vue from 'vue'
import ChartJS from 'chart-js'
// import { 사용할 변수, 함수 } from '파일 경로'

function component() {
  var element = document.createElement('div');

  /* lodash is required for the next line to work */
  element.innerHTML = _.join(['Hello','webpack'], ' ');

  return element;
}

document.body.appendChild(component());