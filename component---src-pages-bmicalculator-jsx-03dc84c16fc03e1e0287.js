(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{OMve:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return m}));var n=a("dI71"),l=a("q1tI"),r=a.n(l),i=a("qhky"),o=a("rIun"),c=a("L6Je"),s=a("FOVU"),u=a("GR5B"),h=[{min:0,max:18.5,range:"Underweight"},{min:18.5,max:24.9,range:"Normal weight"},{min:25,max:29.9,range:"Overweight"},{min:30,max:Number.MAX_SAFE_INTEGER,range:"Obese"}],m=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),l=0;l<a;l++)n[l]=arguments[l];return(t=e.call.apply(e,[this].concat(n))||this).state={height:0,weight:0,bmi:null,bmiRange:""},t.handleInputChange=function(e){var a,n=e.target,l=n.name,r=n.value;t.setState(((a={})[l]=r,a))},t.onCalculate=function(){var e=t.state,a=e.height,n=e.weight;if(n&&a){var l=Math.pow(parseFloat(a)/100,2),r=(parseFloat(n)/l).toFixed(2),i=h.find((function(e){return e.min<r&&r<e.max}));console.log(r),t.setState({bmi:r,bmiRange:i.range})}},t}Object(n.a)(t,e);var a=t.prototype;return a.renderResults=function(){var e=this.state,t=e.bmi,a=e.bmiRange;return r.a.createElement(l.Fragment,null,t&&r.a.createElement(u.i,null,"Your BMI is ",t),a&&r.a.createElement(u.i,null,"You are ",a))},a.render=function(){var e=this.state,t=e.height,a=e.weight;return r.a.createElement(l.Fragment,null,r.a.createElement(c.a,null),r.a.createElement(i.a,{title:"OzCalculators | BMI Calculator"}),r.a.createElement(o.Parallax,{pages:2},r.a.createElement(s.a,{offset:0},r.a.createElement(u.a,null,"BMI Calculator"),r.a.createElement(u.i,null,"Scroll down to view important information regarding this BMI Calculator."),r.a.createElement(u.f,null,r.a.createElement(u.g,null,"Height in cm:"),r.a.createElement(u.e,{type:"text",name:"height",value:t,onChange:this.handleInputChange})),r.a.createElement(u.f,null,r.a.createElement(u.g,null,"Weight in kg:"),r.a.createElement(u.e,{type:"text",name:"weight",value:a,onChange:this.handleInputChange})),r.a.createElement(u.i,null,r.a.createElement(u.b,{onClick:this.onCalculate},"Calculate your BMI")),this.renderResults(),r.a.createElement(u.c,null,"Note: This calculator shouldn't be used for measuring BMI of children or pregnant women.")),r.a.createElement(s.a,{offset:1},r.a.createElement(u.d,null,"What is a BMI Calculator?"),r.a.createElement(u.i,null,"BMI can indicate if a person is underweight, healthy, overweight or obese. If a person's BMI is outside the healthy range, health risks may increase significantly."),r.a.createElement(u.i,null,"BMI doesn't measure body fat directly and does not take into account age, sex, ethnicity and body composition."),r.a.createElement(u.i,null,"This calculator shouldn't for measuring BMI for children or pregnant women."),r.a.createElement(u.i,null,"Disclaimer: While utmost care has been taken to keep this accurate, it should not be used as a conclusive tool for assessing health risks. Always speak with your doctor about health risks associated with your weight."))))},t}(l.Component)}}]);
//# sourceMappingURL=component---src-pages-bmicalculator-jsx-03dc84c16fc03e1e0287.js.map