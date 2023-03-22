import{_ as e,c as t,a,w as l,b as o,d as s,e as p,r,o as c}from"./404.md.78e04946.js";const k=JSON.parse('{"title":"Detecting Other Entities","description":"","frontmatter":{"title":"Detecting Other Entities","category":"Tutorials","tags":["intermediate"]},"headers":[{"level":2,"title":"minecraft:entity_sensor","slug":"minecraft-entity-sensor","link":"#minecraft-entity-sensor","children":[]},{"level":2,"title":"/execute","slug":"execute","link":"#execute","children":[]},{"level":2,"title":"Molang, BP Animations & Animation Controllers","slug":"molang-bp-animations-animation-controllers","link":"#molang-bp-animations-animation-controllers","children":[]}],"relativePath":"entities/detecting-other-entities.md"}'),D={name:"entities/detecting-other-entities.md"},F=o("p",null,"You might have thought about making your entities fire an event when other entities are nearby. This article details the various known ways to do so.",-1),y=o("h2",{id:"minecraft-entity-sensor",tabindex:"-1"},[s("minecraft:entity_sensor "),o("a",{class:"header-anchor",href:"#minecraft-entity-sensor","aria-hidden":"true"},"#")],-1),i=o("p",null,"This is probably the most basic way to detect other entities. The main issues is it only accepts one entry and testing if the entity is out of range can be very tricky. Because it's an entity component, you can just place into your entity behavior file and edit the Minecraft filters. Here's a demonstration:",-1),C=p("",4),u=p("",3),A=p("",2),b=p("",4),m=p("",3),d=p("",2),_=p("",2),q=p("",1);function h(f,g,v,E,T,B){const n=r("CodeHeader");return c(),t("div",null,[F,y,i,a(n,null,{default:l(()=>[s("BP/entities/my_entity.json#components")]),_:1}),C,a(n,null,{default:l(()=>[s("BP/animations/detection_animation.json")]),_:1}),u,a(n,null,{default:l(()=>[s("BP/animation_controllers/pig_animation_controllers.json")]),_:1}),A,a(n,null,{default:l(()=>[s("BP/entities/my_entity.json#description")]),_:1}),b,a(n,null,{default:l(()=>[s("BP/animations/detection_animation.json")]),_:1}),m,a(n,null,{default:l(()=>[s("BP/animations/detection_animation.json")]),_:1}),d,a(n,null,{default:l(()=>[s("BP/animation_controllers/pig_animation_controllers.json")]),_:1}),_,a(n,null,{default:l(()=>[s("BP/entities/my_entity.json#description")]),_:1}),q])}const x=e(D,[["render",h]]);export{k as __pageData,x as default};
