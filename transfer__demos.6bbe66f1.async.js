"use strict";(self.webpackChunknicecode=self.webpackChunknicecode||[]).push([[2893],{9470:function(Z,d,e){e.r(d);var M=e(48305),s=e.n(M),a=e(85170),u=e(80868),p=e(68808),m=e(43010),g=function(){var v=(0,a.useState)([]),n=s()(v,2),c=n[0],D=n[1],l=(0,a.useState)([]),f=s()(l,2),h=f[0],K=f[1],A=function(){for(var r=[],_=[],t=0;t<20;t++){var o={key:t.toString(),title:"content".concat(t+1),description:"description of content".concat(t+1),chosen:t%2===0};o.chosen&&r.push(o.key),_.push(o)}D(_),K(r)};(0,a.useEffect)(function(){A()},[]);var C=function(r){K(r)},P=function(r,_){return(_==null?void 0:_.direction)==="left"?(0,m.jsx)(u.ZP,{size:"small",style:{float:"left",margin:5},onClick:A,children:"Left button reload"}):(0,m.jsx)(u.ZP,{size:"small",style:{float:"right",margin:5},onClick:A,children:"Right button reload"})};return(0,m.jsx)(p.Z,{dataSource:c,showSearch:!0,listStyle:{width:250,height:300},operations:["to right","to left"],targetKeys:h,onChange:C,render:function(r){return"".concat(r.title,"-").concat(r.description)},footer:P})};d.default=g},27053:function(Z,d,e){e.r(d);var M=e(15558),s=e.n(M),a=e(48305),u=e.n(a),p=e(85170),m=e(68808),g=e(43010),i=Array.from({length:20}).map(function(c,D){return{key:D.toString(),title:"content".concat(D+1),description:"description of content".concat(D+1)}}),v=i.filter(function(c){return Number(c.key)>10}).map(function(c){return c.key}),n=function(){var D=(0,p.useState)(v),l=u()(D,2),f=l[0],h=l[1],K=(0,p.useState)([]),A=u()(K,2),C=A[0],P=A[1],b=function(o,E,U){console.log("targetKeys:",o),console.log("direction:",E),console.log("moveKeys:",U),h(o)},r=function(o,E){console.log("sourceSelectedKeys:",o),console.log("targetSelectedKeys:",E),P([].concat(s()(o),s()(E)))},_=function(o,E){console.log("direction:",o),console.log("target:",E.target)};return(0,g.jsx)(m.Z,{dataSource:i,titles:["Source","Target"],targetKeys:f,selectedKeys:C,onChange:b,onSelectChange:r,onScroll:_,render:function(o){return o.title}})};d.default=n},39404:function(Z,d,e){e.r(d);var M=e(15558),s=e.n(M),a=e(48305),u=e.n(a),p=e(26068),m=e.n(p),g=e(67825),i=e.n(g),v=e(85170),n=e(68808),c=e(10538),D=e(13883),l=e(5e3),f=e(769),h=e(79932),K=e(39165),A=e.n(K),C=e(43010),P=["leftColumns","rightColumns"],b=function(S){var B=S.leftColumns,y=S.rightColumns,O=i()(S,P);return(0,C.jsx)(n.Z,m()(m()({},O),{},{children:function(R){var z=R.direction,x=R.filteredItems,$=R.onItemSelectAll,J=R.onItemSelect,N=R.selectedKeys,I=R.disabled,L=z==="left"?B:y,T={getCheckboxProps:function(F){return{disabled:I||F.disabled}},onSelectAll:function(F,H){var G=H.filter(function(V){return!V.disabled}).map(function(V){var q=V.key;return q}),w=F?A()(G,N):A()(N,G);$(w,F)},onSelect:function(F,H){var G=F.key;J(G,H)},selectedRowKeys:N};return(0,C.jsx)(c.Z,{rowSelection:T,columns:L,dataSource:x,size:"small",style:{pointerEvents:I?"none":void 0},onRow:function(F){var H=F.key,G=F.disabled;return{onClick:function(){G||I||J(H,!N.includes(H))}}}})}}))},r=["cat","dog","bird"],_=Array.from({length:20}).map(function(W,S){return{key:S.toString(),title:"content".concat(S+1),description:"description of content".concat(S+1),disabled:S%4===0,tag:r[S%3]}}),t=[{dataIndex:"title",title:"Name"},{dataIndex:"tag",title:"Tag",render:function(S){return(0,C.jsx)(D.Z,{children:S})}},{dataIndex:"description",title:"Description"}],o=[{dataIndex:"title",title:"Name"}],E=_.filter(function(W){return Number(W.key)>10}).map(function(W){return W.key}),U=function(){var S=(0,v.useState)(E),B=u()(S,2),y=B[0],O=B[1],X=(0,v.useState)([]),R=u()(X,2),z=R[0],x=R[1],$=function(j,Q,_e){console.log("targetKeys:",j),console.log("direction:",Q),console.log("moveKeys:",_e),O(j)},J=function(j,Q){console.log("sourceSelectedKeys:",j),console.log("targetSelectedKeys:",Q),x([].concat(s()(j),s()(Q)))},N=function(j,Q){console.log("direction:",j),console.log("target:",Q.target)},I=(0,v.useState)(!1),L=u()(I,2),T=L[0],k=L[1],F=(0,v.useState)(!1),H=u()(F,2),G=H[0],w=H[1],V=function(j){O(j)},q=function(j){k(j)},ee=function(j){w(j)};return(0,C.jsxs)(l.ZP,{theme:{components:{Transfer:{listWidth:40,listWidthLG:50,listHeight:30,itemHeight:20,itemPaddingBlock:10,headerHeight:18}}},children:[(0,C.jsx)(n.Z,{dataSource:_,titles:["Source","Target"],targetKeys:y,selectedKeys:z,onChange:$,onSelectChange:J,onScroll:N,render:function(j){return j.title}}),(0,C.jsx)(n.Z,{status:"error"}),(0,C.jsx)(n.Z,{status:"warning",showSearch:!0}),(0,C.jsx)(b,{dataSource:_,targetKeys:y,disabled:T,showSearch:G,onChange:V,filterOption:function(j,Q){return Q.title.indexOf(j)!==-1||Q.tag.indexOf(j)!==-1},leftColumns:t,rightColumns:o}),(0,C.jsxs)(f.Z,{style:{marginTop:16},children:[(0,C.jsx)(h.Z,{unCheckedChildren:"disabled",checkedChildren:"disabled",checked:T,onChange:q}),(0,C.jsx)(h.Z,{unCheckedChildren:"showSearch",checkedChildren:"showSearch",checked:G,onChange:ee})]})]})};d.default=U},32417:function(Z,d,e){e.r(d);var M=e(48305),s=e.n(M),a=e(85170),u=e(68808),p=e(43010),m=function(){var i=(0,a.useState)([]),v=s()(i,2),n=v[0],c=v[1],D=(0,a.useState)([]),l=s()(D,2),f=l[0],h=l[1],K=function(){for(var b=[],r=[],_=0;_<20;_++){var t={key:_.toString(),title:"content".concat(_+1),description:"description of content".concat(_+1),chosen:_%2===0};t.chosen&&b.push(t.key),r.push(t)}c(r),h(b)};(0,a.useEffect)(function(){K()},[]);var A=function(b,r,_){console.log(b,r,_),h(b)},C=function(b){var r=(0,p.jsxs)("span",{className:"custom-item",children:[b.title," - ",b.description]});return{label:r,value:b.title}};return(0,p.jsx)(u.Z,{dataSource:n,listStyle:{width:300,height:300},targetKeys:f,onChange:A,render:C})};d.default=m},61137:function(Z,d,e){e.r(d);var M=e(48305),s=e.n(M),a=e(85170),u=e(68808),p=e(43010),m=Array.from({length:10}).map(function(n,c){return{key:c.toString(),title:"content".concat(c+1),description:"description of content".concat(c+1)}}),g=m.filter(function(n){return Number(n.key)%3>1}).map(function(n){return n.key}),i=["Select All",function(n){var c=n.selectedCount,D=n.totalCount;return"".concat(c,"/").concat(D)}],v=function(){var c=(0,a.useState)(g),D=s()(c,2),l=D[0],f=D[1];return(0,p.jsx)(u.Z,{dataSource:m,targetKeys:l,onChange:f,render:function(K){return K.title},selectAllLabels:i})};d.default=v},54038:function(Z,d,e){e.r(d);var M=e(48305),s=e.n(M),a=e(85170),u=e(68808),p=e(79932),m=e(43010),g=function(){var v=(0,a.useState)(!1),n=s()(v,2),c=n[0],D=n[1],l=(0,a.useState)([]),f=s()(l,2),h=f[0],K=f[1],A=(0,a.useState)([]),C=s()(A,2),P=C[0],b=C[1];(0,a.useEffect)(function(){for(var _=[],t=[],o=0;o<2e3;o++){var E={key:o.toString(),title:"content".concat(o+1),description:"description of content".concat(o+1),chosen:o%2===0};E.chosen&&_.push(E.key),t.push(E)}b(_),K(t)},[]);var r=function(t,o,E){console.log(t,o,E),b(t)};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(u.Z,{dataSource:h,targetKeys:P,onChange:r,render:function(t){return t.title},oneWay:c,pagination:!0}),(0,m.jsx)("br",{}),(0,m.jsx)(p.Z,{unCheckedChildren:"one way",checkedChildren:"one way",checked:c,onChange:D})]})};d.default=g},56260:function(Z,d,e){e.r(d);var M=e(15558),s=e.n(M),a=e(48305),u=e.n(a),p=e(85170),m=e(68808),g=e(79932),i=e(43010),v=Array.from({length:20}).map(function(D,l){return{key:l.toString(),title:"content".concat(l+1),description:"description of content".concat(l+1),disabled:l%3<1}}),n=v.filter(function(D){return Number(D.key)%3>1}).map(function(D){return D.key}),c=function(){var l=(0,p.useState)(n),f=u()(l,2),h=f[0],K=f[1],A=(0,p.useState)([]),C=u()(A,2),P=C[0],b=C[1],r=(0,p.useState)(!1),_=u()(r,2),t=_[0],o=_[1],E=function(y,O,X){K(y),console.log("targetKeys: ",y),console.log("direction: ",O),console.log("moveKeys: ",X)},U=function(y,O){b([].concat(s()(y),s()(O))),console.log("sourceSelectedKeys: ",y),console.log("targetSelectedKeys: ",O)},W=function(y,O){console.log("direction:",y),console.log("target:",O.target)},S=function(y){o(y)};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(m.Z,{dataSource:v,titles:["Source","Target"],targetKeys:h,selectedKeys:P,onChange:E,onSelectChange:U,onScroll:W,render:function(y){return y.title},disabled:t,oneWay:!0,style:{marginBottom:16}}),(0,i.jsx)(g.Z,{unCheckedChildren:"disabled",checkedChildren:"disabled",checked:t,onChange:S})]})};d.default=c},71207:function(Z,d,e){e.r(d);var M=e(48305),s=e.n(M),a=e(85170),u=e(68808),p=e(43010),m=function(){var i=(0,a.useState)([]),v=s()(i,2),n=v[0],c=v[1],D=(0,a.useState)([]),l=s()(D,2),f=l[0],h=l[1],K=function(){for(var r=[],_=[],t=0;t<20;t++){var o={key:t.toString(),title:"content".concat(t+1),description:"description of content".concat(t+1),chosen:t%2===0};o.chosen&&r.push(o.key),_.push(o)}c(_),h(r)};(0,a.useEffect)(function(){K()},[]);var A=function(r,_){return _.description.indexOf(r)>-1},C=function(r){h(r)},P=function(r,_){console.log("search:",r,_)};return(0,p.jsx)(u.Z,{dataSource:n,showSearch:!0,filterOption:A,targetKeys:f,onChange:C,onSearch:P,render:function(r){return r.title}})};d.default=m},69869:function(Z,d,e){e.r(d);var M=e(85170),s=e(769),a=e(68808),u=e(43010),p=function(){return(0,u.jsxs)(s.Z,{direction:"vertical",children:[(0,u.jsx)(a.Z,{status:"error"}),(0,u.jsx)(a.Z,{status:"warning",showSearch:!0})]})};d.default=p},91046:function(Z,d,e){e.r(d);var M=e(48305),s=e.n(M),a=e(26068),u=e.n(a),p=e(67825),m=e.n(p),g=e(85170),i=e(68808),v=e(10538),n=e(13883),c=e(769),D=e(79932),l=e(39165),f=e.n(l),h=e(43010),K=["leftColumns","rightColumns"],A=function(E){var U=E.leftColumns,W=E.rightColumns,S=m()(E,K);return(0,h.jsx)(i.Z,u()(u()({},S),{},{children:function(y){var O=y.direction,X=y.filteredItems,R=y.onItemSelectAll,z=y.onItemSelect,x=y.selectedKeys,$=y.disabled,J=O==="left"?U:W,N={getCheckboxProps:function(L){return{disabled:$||L.disabled}},onSelectAll:function(L,T){var k=T.filter(function(H){return!H.disabled}).map(function(H){var G=H.key;return G}),F=L?f()(k,x):f()(x,k);R(F,L)},onSelect:function(L,T){var k=L.key;z(k,T)},selectedRowKeys:x};return(0,h.jsx)(v.Z,{rowSelection:N,columns:J,dataSource:X,size:"small",style:{pointerEvents:$?"none":void 0},onRow:function(L){var T=L.key,k=L.disabled;return{onClick:function(){k||$||z(T,!x.includes(T))}}}})}}))},C=["cat","dog","bird"],P=Array.from({length:20}).map(function(o,E){return{key:E.toString(),title:"content".concat(E+1),description:"description of content".concat(E+1),disabled:E%4===0,tag:C[E%3]}}),b=P.filter(function(o){return Number(o.key)%3>1}).map(function(o){return o.key}),r=[{dataIndex:"title",title:"Name"},{dataIndex:"tag",title:"Tag",render:function(E){return(0,h.jsx)(n.Z,{children:E})}},{dataIndex:"description",title:"Description"}],_=[{dataIndex:"title",title:"Name"}],t=function(){var E=(0,g.useState)(b),U=s()(E,2),W=U[0],S=U[1],B=(0,g.useState)(!1),y=s()(B,2),O=y[0],X=y[1],R=(0,g.useState)(!1),z=s()(R,2),x=z[0],$=z[1],J=function(T){S(T)},N=function(T){X(T)},I=function(T){$(T)};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(A,{dataSource:P,targetKeys:W,disabled:O,showSearch:x,onChange:J,filterOption:function(T,k){return k.title.indexOf(T)!==-1||k.tag.indexOf(T)!==-1},leftColumns:r,rightColumns:_}),(0,h.jsxs)(c.Z,{style:{marginTop:16},children:[(0,h.jsx)(D.Z,{unCheckedChildren:"disabled",checkedChildren:"disabled",checked:O,onChange:N}),(0,h.jsx)(D.Z,{unCheckedChildren:"showSearch",checkedChildren:"showSearch",checked:x,onChange:I})]})]})};d.default=t},38518:function(Z,d,e){e.r(d);var M=e(48305),s=e.n(M),a=e(15558),u=e.n(a),p=e(26068),m=e.n(p),g=e(67825),i=e.n(g),v=e(85170),n=e(2300),c=e(68808),D=e(39226),l=e(43010),f=["children"],h=["dataSource","targetKeys"],K=function(_,t){return _.includes(t)},A=function r(){var _=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return _.map(function(o){var E=o.children,U=i()(o,f);return m()(m()({},U),{},{disabled:t.includes(U.key),children:r(E,t)})})},C=function(_){var t=_.dataSource,o=_.targetKeys,E=i()(_,h),U=n.Z.useToken(),W=U.token,S=[];function B(){var y=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];y.forEach(function(O){S.push(O),B(O.children)})}return B(t),(0,l.jsx)(c.Z,m()(m()({},E),{},{targetKeys:o,dataSource:S,className:"tree-transfer",render:function(O){return O.title},showSelectAll:!1,children:function(O){var X=O.direction,R=O.onItemSelect,z=O.selectedKeys;if(X==="left"){var x=[].concat(u()(z),u()(o));return(0,l.jsx)("div",{style:{padding:W.paddingXS},children:(0,l.jsx)(D.Z,{blockNode:!0,checkable:!0,checkStrictly:!0,defaultExpandAll:!0,checkedKeys:x,treeData:A(t,o),onCheck:function(J,N){var I=N.node.key;R(I,!K(x,I))},onSelect:function(J,N){var I=N.node.key;R(I,!K(x,I))}})})}}}))},P=[{key:"0-0",title:"0-0"},{key:"0-1",title:"0-1",children:[{key:"0-1-0",title:"0-1-0"},{key:"0-1-1",title:"0-1-1"}]},{key:"0-2",title:"0-2"},{key:"0-3",title:"0-3"},{key:"0-4",title:"0-4"}],b=function(){var _=(0,v.useState)([]),t=s()(_,2),o=t[0],E=t[1],U=function(S){E(S)};return(0,l.jsx)(C,{dataSource:P,targetKeys:o,onChange:U})};d.default=b},33891:function(Z,d,e){var M=e(85170),s=e(73434),a=e.n(s),u=e(43010);function p(g,i,v){return typeof g=="boolean"?g:i===void 0?!!v:i!==!1&&i!==null}function m(g,i,v){var n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:(0,u.jsx)(a(),{}),c=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!1,D=p(g,i,c);if(!D)return[!1,null];var l=typeof i=="boolean"||i===void 0||i===null?n:i;return[!0,v?v(l):l]}d.Z=m},11943:function(Z,d,e){var M=e(26068),s=e.n(M),a=e(67825),u=e.n(a),p=e(26586),m=e(85170),g=e(43010),i=["style","noStyle","disabled"],v={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"},n=m.forwardRef(function(c,D){var l=function(r){var _=r.keyCode;_===p.Z.ENTER&&r.preventDefault()},f=function(r){var _=r.keyCode,t=c.onClick;_===p.Z.ENTER&&t&&t()},h=c.style,K=c.noStyle,A=c.disabled,C=u()(c,i),P={};return K||(P=s()({},v)),A&&(P.pointerEvents="none"),P=s()(s()({},P),h),(0,g.jsx)("div",s()(s()({role:"button",tabIndex:0,ref:D},C),{},{onKeyDown:l,onKeyUp:f,style:P}))});d.Z=n},18933:function(Z,d,e){var M=e(26068),s=e.n(M),a=e(85170),u=e(52600),p=e(37529),m=function(i,v){var n=a.useContext(u.Z),c=a.useMemo(function(){var l,f=v||p.Z[i],h=(l=n==null?void 0:n[i])!==null&&l!==void 0?l:{};return s()(s()({},typeof f=="function"?f():f),h||{})},[i,v,n]),D=a.useMemo(function(){var l=n==null?void 0:n.locale;return n!=null&&n.exist&&!l?p.Z.locale:l},[n]);return[c,D]};d.Z=m},92073:function(Z,d,e){e.d(d,{N:function(){return M}});var M=function(a){return{color:a.colorLink,textDecoration:"none",outline:"none",cursor:"pointer",transition:"color ".concat(a.motionDurationSlow),"&:focus, &:hover":{color:a.colorLinkHover},"&:active":{color:a.colorLinkActive}}}}}]);
