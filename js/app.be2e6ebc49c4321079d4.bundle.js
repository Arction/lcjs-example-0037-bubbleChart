(self.webpackChunk=self.webpackChunk||[]).push([[524],{44:(e,t,a)=>{const i=a(89),{lightningChart:d,PointShape:o,Themes:s}=i,r=d().ChartXY({theme:s[new URLSearchParams(window.location.search).get("theme")||"darkGold"]||void 0}).setTitle("Bubble Chart with 3 KPIs and data grouping");new Array(3).fill(0).map((e=>{const t=new Array(1e3);for(let e=0;e<1e3;e+=1){const a=Math.random(),i=Math.random(),d=Math.random(),o=1+19*d**3;t[e]={x:a,y:i,size:o,kpi3:d}}return t})).map(((e,t)=>{const a=r.addPointSeries({pointShape:o.Circle}).setName(`Group ${t+1}`).setPointFillStyle((e=>e.setA(100))).setIndividualPointSizeEnabled(!0).add(e).setCursorResultTableFormatter(((e,t,i,d,o)=>e.addRow(a.getName()).addRow(a.axisX.getTitle(),"",a.axisX.formatValue(o.x)).addRow(a.axisY.getTitle(),"",a.axisY.formatValue(o.y)).addRow("KPI 3","",o.kpi3.toFixed(3))));return a})),r.getDefaultAxisX().setTitle("KPI X").fit(!1),r.getDefaultAxisY().setTitle("KPI Y").fit(!1),r.addLegendBox().add(r)}},e=>{e.O(0,[502],(()=>(44,e(e.s=44)))),e.O()}]);