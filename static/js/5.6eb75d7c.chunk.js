(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[5],{256:function(e,t){},257:function(e,t,a){},259:function(e,t,a){},289:function(e,t,a){},296:function(e,t,a){"use strict";a.r(t);var n=a(31),s=a(32),r=a(33),i=a(34),c=a(2),l=a.n(c),o=a(28),d=(a(100),a(79)),h=(a(256),a(293)),j=a(105),u=a(230),b=a(290),v=(a(257),a(6)),p=function(e){Object(r.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(n.a)(this,a);for(var s=arguments.length,r=new Array(s),i=0;i<s;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).setClass=function(t){var a=e.props.eventsList&&e.props.eventsList.find((function(e){return t.getDay()===new Date(e.start).getDay()&&t.getMonth()===new Date(e.start).getMonth()&&t.getDate()===new Date(e.start).getDate()}));return a?a.colorName:""},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return Object(v.jsx)(b.a,{tileClassName:function(t){t.activeStartDate;var a=t.date;t.view;return e.setClass(a)}})}}]),a}(c.Component),O=a(298),m=(a(259),function(e){Object(r.a)(a,e);var t=Object(i.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.item,a=e.eventTypeList,n=new Date(t.date),s=n.getHours(),r=n.getMinutes();r<10&&(r="0"+r);var i="AM";s>12&&(s-=12,i="PM");var c=new Date(t.date),l=c.getHours(),o=c.getMinutes();o<10&&(o="0"+o);var d="AM";l>12&&(l-=12,d="PM");var h=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"][n.getMonth()],j=n.getDate(),u=a&&a.indexOf(t.type);return Object(v.jsxs)("div",{children:[Object(v.jsx)(O.a,{style:{backgroundColor:["#F08080","#ADD8E6","#FFFACD","#87CEFA","#20B2AA","#FFA07A","#00FA9A","#FFE4E1","#DA70D6","#FFF5EE","#87CEEB","#F5DEB3","#F0F8FF","#FF7F50"][u]},className:"event-card",children:Object(v.jsxs)(O.a.Body,{children:[Object(v.jsx)(O.a.Title,{children:t.eventName}),Object(v.jsx)("h3",{className:"event-type",children:t.type}),Object(v.jsxs)("p",{className:"event-time",children:[s+":"+r+" "+i+" ","-"," "+l+":"+o+" "+d]}),Object(v.jsx)("p",{children:t.ageGroup})]})}),Object(v.jsx)(O.a,{className:"event-card date-card",children:Object(v.jsxs)(O.a.Body,{className:"date-body",children:[Object(v.jsx)("h3",{className:"event-type month",children:h}),Object(v.jsx)("h3",{className:"event-type date",children:j})]})})]})}}]),a}(c.Component)),g=a(260),f={width:"50%",height:"35%"},y=function(e){Object(r.a)(a,e);var t=Object(i.a)(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).displayMarkers=function(){return s.state.stores.map((function(e,t){return Object(v.jsx)(g.Marker,{id:t,position:{lat:e.latitude,lng:e.longitude},onClick:function(){return console.log("Clicked me..!")}},t)}))},s.state={stores:[{lat:38.63912,lng:-90.232401},{latitude:38.655232,longitude:-90.29778},{latitude:38.590357,longitude:-90.21929}]},s}return Object(s.a)(a,[{key:"render",value:function(){return Object(v.jsx)("div",{children:Object(v.jsx)(g.Map,{google:this.props.google,zoom:8,style:f,initialCenter:{lat:38.62727,lng:-90.19789},children:this.displayMarkers()})})}}]),a}(c.Component),x=Object(g.GoogleApiWrapper)({apiKey:"AIzaSyCr1KVRKL2WDdO9B6Drm6JMaL6bKKrElHQ"})(y),C=a(39),E=a(4),A=a(294),M=a(229),D=a(231),k=a(291),N=function(e){Object(r.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(n.a)(this,a);for(var s=arguments.length,r=new Array(s),i=0;i<s;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={selectedOption:null},e.handleChange=function(t){var a=t.value;e.props.handleClick(a),e.setState({selectedOption:t,value:a})},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.eventTypeList,t=this.state.selectedOption,a=[];return e.map((function(e){a.push({value:e,label:e})})),Object(v.jsx)(k.a,{value:t,onChange:this.handleChange,options:a})}}]),a}(l.a.Component),L=function(e){Object(r.a)(a,e);var t=Object(i.a)(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).onChange=function(e){var t=e.target.name,a=e.target.value;s.setState({value:Object(E.a)(Object(E.a)({},s.state.value),{},Object(C.a)({},t,a))})},s.handleClick=function(e){s.setState({value:Object(E.a)(Object(E.a)({},s.state.value),{},{type:e})})},s.submit=function(e){e.preventDefault();var t=d.a.database().ref("items"),a={Date:s.state.value.date,Type:s.state.value.type,Event_Name:s.state.value.name};t.push(a),s.setState({value:{name:"",iso4217Code:"",symbol:"",subunit:"",isActive:!0},nameError:"",iso4217CodeError:"",symbolError:"",subunitError:""})},s.closeModel=function(){s.setState({value:{name:"",iso4217Code:"",symbol:"",subunit:"",isActive:!0},nameError:"",iso4217CodeError:"",symbolError:"",subunitError:""}),s.props.AddModalClose()},s.state={name:"",value:{name:"",type:"",symbol:"",date:"",isActive:!0},items:[],nameError:"",iso4217CodeError:"",symbolError:"",subunitError:""},s}return Object(s.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(C.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=this.props.eventTypeList;return Object(v.jsx)("div",{children:Object(v.jsxs)(A.a,{show:this.props.show,onHide:this.closeModel,animation:!1,size:"lg",backdrop:"static",className:"detailModal",children:[Object(v.jsx)(A.a.Header,{style:{fontSize:"35px",backgroundColor:"#f0f3f5"},closeButton:!0,children:Object(v.jsx)(A.a.Title,{children:Object(v.jsx)("span",{style:{fontSize:"20px"},children:"Add Event"})})}),Object(v.jsx)(A.a.Body,{children:Object(v.jsx)(M.a,{children:Object(v.jsxs)(D.a,{children:[Object(v.jsx)(h.a,{children:Object(v.jsxs)(j.a,{lg:12,md:12,sm:12,xs:12,children:[Object(v.jsx)("div",{children:Object(v.jsxs)(D.a.Group,{controlId:"name",children:[Object(v.jsx)(D.a.Label,{children:"Event Name "}),Object(v.jsx)(D.a.Control,{type:"text",autoComplete:"off",name:"name",onChange:this.onChange,value:this.state.value.name}),Object(v.jsx)("div",{className:"errStyle",children:this.state.nameError})]})}),Object(v.jsx)("div",{children:Object(v.jsxs)(D.a.Group,{controlId:"symbol",children:[Object(v.jsx)(D.a.Label,{children:" Event Type "}),Object(v.jsx)(N,{handleClick:this.handleClick,eventTypeList:e&&e}),Object(v.jsx)("div",{className:"errStyle",children:this.state.symbolError})]})}),Object(v.jsx)("div",{children:Object(v.jsxs)(D.a.Group,{controlId:"date",children:[Object(v.jsx)(D.a.Label,{children:" Date Picker "}),Object(v.jsx)(D.a.Control,{type:"date",autoComplete:"off",name:"date",onChange:this.onChange,value:this.state.value.date}),Object(v.jsx)("div",{className:"errStyle",children:this.state.symbolError})]})})]})})," "]})})}),Object(v.jsx)(A.a.Footer,{style:{backgroundColor:"#f0f3f5"},children:Object(v.jsx)(u.a,{type:"submit",onClick:this.submit,children:"Submit"})})]})})}}]),a}(c.Component),F=(a(289),function(e){Object(r.a)(a,e);var t=Object(i.a)(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).colors=["highlight1","highlight2","highlight3","highlight4","highlight5","highlight6","highlight7","highlight8","highlight9","highlight10","highlight11","highlight12","highlight13","highlight14"],s.AddModalShow=function(){s.setState({addModal:!0})},s.AddModalClose=function(){s.setState({addModal:!1})},s.state={addModal:!1,limit:2},s}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchEvents(),this.props.fetchEventTypes()}},{key:"render",value:function(){var e=this,t=this.props,a=t.eventsList,n=t.eventTypeList;return a&&a.map((function(t){var a=n&&n.indexOf(t.type);t.colorName=e.colors[a]})),Object(v.jsxs)("div",{className:"div-event",children:[Object(v.jsxs)(h.a,{children:[Object(v.jsxs)(j.a,{lg:4,md:4,sm:12,xs:12,className:"",children:[Object(v.jsx)("div",{children:Object(v.jsx)("h4",{children:"Calendar"})}),Object(v.jsx)(p,{eventsList:a&&a})," "]}),Object(v.jsxs)(j.a,{lg:8,md:8,sm:12,xs:12,children:[Object(v.jsxs)(h.a,{children:[Object(v.jsx)(j.a,{lg:6,md:6,sm:6,xs:6,children:Object(v.jsx)("div",{children:Object(v.jsx)("h2",{children:"Events"})})}),Object(v.jsx)(j.a,{lg:6,md:6,sm:6,xs:6,children:Object(v.jsx)("div",{className:"div-create",children:Object(v.jsxs)("h6",{children:["Create event"," ",Object(v.jsx)(u.a,{onClick:this.AddModalShow,variant:"outline-primary",size:"sm",children:"+"})," "]})})})]}),Object(v.jsxs)(h.a,{children:[" ",a&&a.map((function(e,t){return Object(v.jsx)(j.a,{lg:4,md:6,sm:6,xs:12,className:"cards",children:Object(v.jsx)(m,{item:e,eventTypeList:n})},t)}))]})]})]}),Object(v.jsx)(L,{show:this.state.addModal,AddModalClose:this.AddModalClose,eventTypeList:n}),Object(v.jsx)(h.a,{children:Object(v.jsx)(x,{})})]})}}]),a}(c.Component)),T=a(29),S=function(e){Object(r.a)(a,e);var t=Object(i.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return Object(v.jsx)(F,{fetchEvents:this.props.fetchEvents,eventsList:this.props.EventsList,fetchEventTypes:this.props.fetchEventTypes,eventTypeList:this.props.EventTypeList})}},{key:"componentDidMount",value:function(){var e=this;d.a.database().ref("Mastersheet").on("value",(function(t){var a=t.val(),n=[];for(var s in a)n.push({id:a[s].ID,title:a[s].Event_Name,type:a[s].Type,address:a[s].Address,ageGroup:a[s].Agegroup,date:a[s].Date,eventName:a[s].Event_Name,insta:a[s].Event_Host_Insta,descript:a[s].Descript,website:a[s].Website,start:a[s].Date,end:a[s].Date,lat:a[s].lat,lng:a[s].lng});console.log(n),e.setState({items:n})}))}}]),a}(c.Component);t.default=Object(o.c)((function(e){return{EventsList:e.EventsReducer.EventsList,EventTypeList:e.EventsReducer.EventTypeList}}),(function(e){return{fetchEvents:function(){e(Object(T.g)())},fetchEventTypes:function(){e(Object(T.f)())}}}))(S)}}]);
//# sourceMappingURL=5.6eb75d7c.chunk.js.map