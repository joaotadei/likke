import{w as n}from"./index-2e0de06d.js";const c="/assets/poster-1-c981f585.png",p="/assets/poster-2-eb11aa87.png",m="/assets/poster-3-63c0c6c3.png",g="/assets/poster-4-58e87626.png";function t(r,s){return Math.floor(Math.random()*(s-r+1)+r)}const o={users:[{email:"trainee@test.com",pass:"5550123"},{email:"internship@test.com",pass:"5550123"}],items:[{img:c,title:"Programas de Trainee Fiscaltech"},{img:p,title:"Programas de Trainee 2023 - Supergasbras"},{img:m,title:"Programas de Trainee ROMI 2023"},{img:g,title:"NAE - Núcleo de Advocacia Empresarial"}]};class l{async get(s){await n(t(1,5));let e=o;return e=e.items,{data:[...new Array(t(8*3,8))].map((I,a)=>({...e[a%e.length],id:`${t(100,1e3).toString(16)}${t(100,1e3).toString(16)}${t(100,1e3).toString(16)}-${t(100,1e3).toString(16)}${t(100,1e3).toString(16)}`}))}}async post(s,e){await n(t(1,5));const i=o;if(s.match("signin")){if(i.users.findIndex(a=>a.email===e.email&&a.pass===e.pass)>-1)return{data:{token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"}};throw new Error("User Not Found")}else if(s.match("signup"))return{data:{token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"}}}}export{l as S};
