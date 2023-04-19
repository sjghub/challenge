# challenge
### Created with CodeSandbox

##### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
#### * Node.js request body 값이 undefined인 경우에 해결하기 위해서 곰곰히 혼자 생각해보았지만 결국 구글링을하여 알아냈다...
##### --> 모르면 그냥 구글링하자...


참고 사이트: 
[에러일지](https://velog.io/@nemo/nodejs-request-body-undefined)
#### key point code



```c
app.use(express.json()); 
app.use(express.urlencoded( {extended : false } ));
```
##### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
##### * 오래시간동안 문제를 풀면서 GET과 POST의 사용 용도와 언제 사용해야 할 지 감을 잡았다. 다시 한번 GET과 POST에 대해서 정리해보자..
