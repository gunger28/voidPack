
const workDiv = document.getElementById('mainElement')


const htmlDiv = document.getElementById('codeHtml')
htmlDiv.textContent = workDiv.outerHTML

const cssDiv = document.getElementById('codeCss')
cssDiv.textContent = workDiv.outerHTML

fetch('style.scss')
.then(response => response.text())
.then(text => cssDiv.textContent = text)