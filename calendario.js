let contimpegni = document.getElementById("contimpegni");
let cosa;
let aperta=0;
let materia;
function AggImpegno(){
  const newDiv = document.createElement("div");
  contimpegni.appendChild(newDiv);
}

document.getElementById("piu").addEventListener("click", function ApriAggiungiImpegno(){
  document.getElementById("muroblur").classList.add("active");
  document.getElementById("contaggiunta").classList.add("active");
});
document.getElementById("finepiu").addEventListener("click", function FineAggiungiImpegno(){
  document.getElementById("muroblur").classList.remove("active");
  document.getElementById("contaggiunta").classList.remove("active");
  document.getElementById("i").classList.remove("active");
});
document.getElementById("i").addEventListener("click",
function Interrog(){
  document.getElementById("i").classList.add("active");
  document.getElementById("v").classList.remove("active");
  cosa= 1;
});
document.getElementById("v").addEventListener("click",function Verifica(){
  document.getElementById("v").classList.add("active");
  document.getElementById("i").classList.remove("active");
  cosa= 2;
});
document.getElementById("casellamateria").addEventListener("click",function Casella(){
  document.getElementById("materie").classList.toggle("active");
  document.getElementById("imgfreccia").classList.toggle("active");
});


document.getElementById("materia1").addEventListener("click",function(){
  document.getElementById("testomateria").innerHTML=document.getElementById("materia1").innerHTML;
  materia = document.getElementById("materia1").innerHTML;
  
  document.getElementById("materie").classList.remove("active");
  document.getElementById("imgfreccia").classList.remove("active");
});
document.getElementById("materia2").addEventListener("click",function(){
  document.getElementById("testomateria").innerHTML=document.getElementById("materia2").innerHTML;
  materia = document.getElementById("materia2").innerHTML;
  document.getElementById("materie").classList.remove("active");
  document.getElementById("imgfreccia").classList.remove("active");
});
document.getElementById("materia3").addEventListener("click",function(){
  document.getElementById("testomateria").innerHTML=document.getElementById("materia3").innerHTML;
  materia = document.getElementById("materia3").innerHTML;
  document.getElementById("materie").classList.remove("active");
  document.getElementById("imgfreccia").classList.remove("active");
});
document.getElementById("materia4").addEventListener("click",function(){
  document.getElementById("testomateria").innerHTML=document.getElementById("materia4").innerHTML;
  materia = document.getElementById("materia4").innerHTML;
  document.getElementById("materie").classList.remove("active");
  document.getElementById("imgfreccia").classList.remove("active");
});
document.getElementById("materia5").addEventListener("click",function(){
  document.getElementById("testomateria").innerHTML=document.getElementById("materia5").innerHTML;
  materia = document.getElementById("materia5").innerHTML;
  document.getElementById("materie").classList.remove("active");
  document.getElementById("imgfreccia").classList.remove("active");
});
document.getElementById("materia6").addEventListener("click",function(){
  document.getElementById("testomateria").innerHTML=document.getElementById("materia6").innerHTML;
  materia = document.getElementById("materia6").innerHTML;
  document.getElementById("materie").classList.remove("active");
  document.getElementById("imgfreccia").classList.remove("active");
});
document.getElementById("materia7").addEventListener("click",function(){
  document.getElementById("testomateria").innerHTML=document.getElementById("materia7").innerHTML;
  materia = document.getElementById("materia7").innerHTML;
  document.getElementById("materie").classList.remove("active");
  document.getElementById("imgfreccia").classList.remove("active");
});
document.getElementById("materia8").addEventListener("click",function(){
  document.getElementById("testomateria").innerHTML=document.getElementById("materia8").innerHTML;
  materia = document.getElementById("materia8").innerHTML;
  document.getElementById("materie").classList.remove("active");
  document.getElementById("imgfreccia").classList.remove("active");
});
document.getElementById("materia9").addEventListener("click",function(){
  document.getElementById("testomateria").innerHTML=document.getElementById("materia9").innerHTML;
  materia = document.getElementById("materia9").innerHTML;
  document.getElementById("materie").classList.remove("active");
  document.getElementById("imgfreccia").classList.remove("active");
});
document.getElementById("materia10").addEventListener("click",function(){
  document.getElementById("testomateria").innerHTML=document.getElementById("materia10").innerHTML;
  materia = document.getElementById("materia10").innerHTML;
  document.getElementById("materie").classList.remove("active");
  document.getElementById("imgfreccia").classList.remove("active");
});
document.getElementById("materia11").addEventListener("click",function(){
  document.getElementById("testomateria").innerHTML=document.getElementById("materia11").innerHTML;
  materia = document.getElementById("materia11").innerHTML;
  document.getElementById("materie").classList.remove("active");
  document.getElementById("imgfreccia").classList.remove("active");
});
document.getElementById("materia12").addEventListener("click",function(){
  document.getElementById("testomateria").innerHTML=document.getElementById("materia12").innerHTML;
  materia = document.getElementById("materia12").innerHTML;
  document.getElementById("materie").classList.remove("active");
  document.getElementById("imgfreccia").classList.remove("active");
});
document.getElementById("materia13").addEventListener("click",function(){
  document.getElementById("testomateria").innerHTML=document.getElementById("materia13").innerHTML;
  materia = document.getElementById("materia13").innerHTML;
  document.getElementById("materie").classList.remove("active");
  document.getElementById("imgfreccia").classList.remove("active");
});
document.getElementById("materia14").addEventListener("click",function(){
  document.getElementById("testomateria").innerHTML=document.getElementById("materia14").innerHTML;
  materia = document.getElementById("materia14").innerHTML;
  document.getElementById("materie").classList.remove("active");
  document.getElementById("imgfreccia").classList.remove("active");
});


