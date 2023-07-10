// import { Chart } from "chart.js";

const charts={}
document.querySelectorAll('chart').forEach((chart) =>{
  chart.style.display="block";
  const canvas=document.createElement("canvas")
  chart.appendChild(canvas)

  charts[chart.id]=new Chart(canvas, {type: chart.getAttribute("type"),chartData})
})

// initCharts()
// async function initCharts(){
//   const data=await getAlphaData() 
//   console.log(await getAlphaData())
//   charts.keys().forEach((chartName)=>{
//     switch(chartName){
//       case "statistics":
        
//         break
//       default:
//         break
//     }
//   })

// }

function chartData(type,labels=["A","B","C"],){
  return {
    type,
    data: {
      labels,
      datasets: [{
        label: 'No data',
        data: [],
        borderWidth: 0,
        backgroundColour:[

        ]

      }]
    }
  }
}



function getAlphaData(){
  const alphaAPIurl = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=PTPK36I3GLZ99QC5';
  fetch(alphaAPIurl)
    .then(response=>response.json())
    .then(data=>{
      return data
    })
    .catch(err=>{
      console.log("There is an Error: ",err)
    })
}

