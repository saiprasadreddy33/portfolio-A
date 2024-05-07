"use strict";(self.webpackChunkportfolio_angular=self.webpackChunkportfolio_angular||[]).push([[727],{1727:(O,r,a)=>{a.r(r),a.d(r,{SkillsComponent:()=>k});var l=a(6895),c=a(1295),d=a(8159),p=a(7224),e=a(8274),g=a(2146);const m=["title"],u=["experience"];function f(i,o){if(1&i&&(e.TgZ(0,"dd")(1,"a"),e._uU(2),e.qZA()()),2&i){const t=o.$implicit;e.xp6(2),e.Oqu(t)}}function _(i,o){if(1&i&&(e.TgZ(0,"dd")(1,"a"),e._uU(2),e.qZA()()),2&i){const t=o.$implicit;e.xp6(2),e.Oqu(t)}}function h(i,o){if(1&i&&(e.TgZ(0,"dd")(1,"a"),e._uU(2),e.qZA()()),2&i){const t=o.$implicit;e.xp6(2),e.Oqu(t)}}let k=(()=>{class i{constructor(t,s){this.dsService=t,this.renderer=s,this.isMakisuOpen=!0,this.startingYear=2022,this.skills=p.HG}ngOnInit(){this.yearsOfExperience=(new Date).getFullYear()-this.startingYear,this.dsService.load("jquery").then(()=>{this.dsService.load("skills").then(()=>{this.loadMakisus()})}).catch(t=>{console.error("error loading scripts",t)})}toggleExperience(){this.isMakisuOpen=!this.isMakisuOpen,this.isMakisuOpen?(this.renderer.removeClass(this.experience.nativeElement,"fade-in"),this.renderer.addClass(this.experience.nativeElement,"fade-out")):(this.renderer.addClass(this.experience.nativeElement,"fade-in"),this.renderer.removeClass(this.experience.nativeElement,"fade-out"))}loadMakisus(){const t=window.jQuery;if(t.fn.makisu.enabled){const s=t(".tech-skills"),n=t(".mgmt-skills"),C=t(".soft-skills");s.makisu({selector:"dd",overlap:.85,speed:1.7}),n.makisu({selector:"dd",overlap:.6,speed:.85}),C.makisu({selector:"dd",overlap:.2,speed:.5}),t(".list").makisu("open"),t(".toggle").on("click",function(){t(".list").makisu("toggle")})}else console.error("Error loading Makisus")}ngAfterViewInit(){new d.Z("h1",{returnGenerated:!0,delimiter:"character",tag:"span",search:!1,customClass:"",aria:!0,debug:!1,name:"blast"});let t=this.titlePieces.nativeElement.children,s=0;for(const n of Array.from(t))setTimeout(()=>{this.renderer.addClass(n,"animated"),this.renderer.addClass(n,"bounceIn")},s),s+=100,setTimeout(()=>{this.renderer.removeClass(n,"animated"),this.renderer.removeClass(n,"bounceIn"),this.renderer.setStyle(n,"opacity",1),n.addEventListener("mouseenter",()=>{this.renderer.addClass(n,"animated"),this.renderer.addClass(n,"rubberBand")}),n.addEventListener("mouseleave",()=>{this.renderer.removeClass(n,"animated"),this.renderer.removeClass(n,"rubberBand")})},2e3)}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(g.M),e.Y36(e.Qsj))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-skills"]],viewQuery:function(t,s){if(1&t&&(e.Gf(m,5),e.Gf(u,5)),2&t){let n;e.iGM(n=e.CRH())&&(s.titlePieces=n.first),e.iGM(n=e.CRH())&&(s.experience=n.first)}},standalone:!0,features:[e.jDz],decls:32,vars:5,consts:[[1,"header"],["title",""],[1,"skills-section"],[1,"list","tech-skills"],[4,"ngFor","ngForOf"],[1,"list","mgmt-skills"],[1,"list","soft-skills"],[1,"experience-section"],["experience",""],["href","https://www.linkedin.com/in/madireddy-sai-prasad-reddy-b4b035176","target","_blank"],[1,"toggle",3,"click"]],template:function(t,s){1&t&&(e.TgZ(0,"header",0)(1,"h1",null,1),e._uU(3,"Skills and Experience"),e.qZA()(),e.TgZ(4,"section",2)(5,"dl",3)(6,"dt"),e._uU(7,"Tech Skills"),e.qZA(),e.YNc(8,f,3,1,"dd",4),e.qZA(),e.TgZ(9,"dl",5)(10,"dt"),e._uU(11,"Management Skills"),e.qZA(),e.YNc(12,_,3,1,"dd",4),e.qZA(),e.TgZ(13,"dl",6)(14,"dt"),e._uU(15,"Soft Skills"),e.qZA(),e.YNc(16,h,3,1,"dd",4),e.qZA(),e.TgZ(17,"div",7,8)(19,"p"),e._uU(20),e.qZA(),e.TgZ(21,"p"),e._uU(22," I have created successful responsive websites that are fast, easy to use, and built with best practices. The main area of my expertise is front-end development (HTML, CSS, JS, Angular). I have developed custom features and coded interactive layouts. "),e.qZA(),e.TgZ(23,"p"),e._uU(24," I am familiar with other popular libraries like React.js and backend technologies like Node.js. "),e.qZA(),e.TgZ(25,"p"),e._uU(26," Visit my "),e.TgZ(27,"a",9),e._uU(28,"LinkedIn "),e.qZA(),e._uU(29," profile for more details. "),e.qZA()(),e.TgZ(30,"a",10),e.NdJ("click",function(){return s.toggleExperience()}),e._uU(31),e.qZA()()),2&t&&(e.xp6(8),e.Q6J("ngForOf",s.skills.techSkills),e.xp6(4),e.Q6J("ngForOf",s.skills.mgmtSkills),e.xp6(4),e.Q6J("ngForOf",s.skills.softSkills),e.xp6(4),e.hij(" I have started my journey as a Developer in 2022, and nearly ",s.yearsOfExperience," years later, I\u2019ve the experience of doing some awesome work for retail and commerce clients as a Freelancer and in a Product based company I have collaborated with talented people to create web products for both business and consumer use. "),e.xp6(11),e.Oqu(s.isMakisuOpen?"Experience":"Skills"))},dependencies:[l.ez,l.sg,c.Bz],styles:[".header[_ngcontent-%COMP%]{text-align:center;position:absolute;z-index:1;width:100%;top:5%}.header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0;font-size:4rem;padding:5px 0}.experience-section[_ngcontent-%COMP%]{display:none;flex-direction:column;text-align:left;align-items:center;padding:190px 20px;justify-content:center}.experience-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding:20px 0;text-align:left}.fade-in[_ngcontent-%COMP%]{animation-name:FadeIn;animation-duration:3s;transition-timing-function:linear;display:block}.fade-out[_ngcontent-%COMP%]{animation-name:FadeOut;animation-duration:3s;transition-timing-function:linear}@keyframes FadeIn{0%{opacity:0}to{opacity:1}}@keyframes FadeOut{0%{opacity:1}to{opacity:0}}a[_ngcontent-%COMP%]{transition:all .25s cubic-bezier(.23,1,.32,1);cursor:pointer;color:#08fdd8;text-decoration:none}a[_ngcontent-%COMP%]:hover{opacity:.8}.list[_ngcontent-%COMP%]{-webkit-transform-style:preserve-3d;-moz-transform-stle:preserve-3d;transform-style:preserve-3d;text-transform:uppercase;position:absolute;margin-left:-140px;top:20%}.list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:block;color:#fff}.list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-indent:20px}.list[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%], .list[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%]{text-indent:10px;line-height:55px;background:#e0fbac;margin:0;height:55px;width:270px;color:#fff}.list[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%]{transform:translateZ(.3px);text-shadow:1px 1px 2px rgba(0,0,0,.2);font-size:15px}.list[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%]{border-top:1px dashed rgba(255,255,255,.3);line-height:35px;font-size:11px;height:35px;margin:0}.toggle[_ngcontent-%COMP%]{transform:translateZ(100px);box-shadow:0 1px 4px #00000026;border-radius:3px;text-transform:uppercase;letter-spacing:-1px;line-height:50px;margin-left:-70px;margin-top:-20px;background:#2b2b2b;text-align:center;font-size:12px;position:absolute;z-index:1;height:50px;bottom:10%;width:140px;color:#fff;left:50%}.toggle[_ngcontent-%COMP%]:hover{background:#e42692}.soft-skills[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%], .soft-skills[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%], .soft-skills[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background:#73c8a9}.tech-skills[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%], .tech-skills[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%], .tech-skills[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background:#e32551}.mgmt-skills[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%], .mgmt-skills[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%], .mgmt-skills[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background:#ffc219}.soft-skills[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background:#61c19e}.tech-skills[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background:#d31b46}.mgmt-skills[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background:#ffbb00}.tech-skills[_ngcontent-%COMP%]{transform:perspective(1200px) rotateY(40deg)!important;transform-origin:110% 25%;left:20%}.mgmt-skills[_ngcontent-%COMP%]{transform:perspective(600px) translateZ(1px)!important;left:50%}.soft-skills[_ngcontent-%COMP%]{transform:perspective(1200px) rotateY(-40deg)!important;transform-origin:-10% 25%;left:80%}"]}),i})()}}]);