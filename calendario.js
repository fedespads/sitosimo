let contimpegni = document.getElementById("contimpegni");

function AggImpegno(){
  const newDiv = document.createElement("div");
  contimpegni.appendChild(newDiv);
}

let piu = document.getElementById("piu").addEventListener("click", AggiungiImpegno);

let finepiu = document.getElementById("finepiu").addEventListener("click", FineAggiungiImpegno);

function AggiungiImpegno(){
  document.getElementById("muroblur").classList.add("active");
  document.getElementById("contaggiunta").classList.add("active");
}

function FineAggiungiImpegno(){
  
  document.getElementById("muroblur").classList.remove("active");
  document.getElementById("contaggiunta").classList.remove("active");
}