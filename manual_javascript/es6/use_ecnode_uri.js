// encodeURIComponent로 한글 인코딩 하기 
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () { // 요청에 대한 콜백
    if (xhr.readyState === xhr.DONE) { // 요청이 완료되면
        if (xhr.status === 200 || xhr.status ===201) { // 응답 코드가 200이나 201이면 
            console.log(xhr.responseText); // 서버에서 보내주는 값
        } else {
            console.error(xhr.responseText);   
        }
    }
};

xhr.open('GET', 'https://www.zerocho.com/api/search/' + encodeURIComponent('노드'));
xhr.send();
