// import { Chart } from "chart.js";

const charts={}
const chartsData={
  statistics:chartData()
}
document.querySelectorAll('chart').forEach((chart) =>{
  chart.style.display="block";
  const canvas=document.createElement("canvas")
  chart.appendChild(canvas)

  const labels=chart.getAttribute("labels")
  const datasets= Array.from(chart.querySelectorAll("data")).map(dataset => (
    {
      ...Array.from(dataset.attributes).map(attriute=>(
        {
          [attriute.name]:attriute.value
        }
      ))
    }
    ))
  
  
  charts[chart.id]=new Chart(canvas, chartConfig(
    chart.getAttribute("type"),
    chartData(
      labels,
      datasets
    )
  ))
})

async function randomAPIChartData(){
  const timeSeriesData=await getAlphaData();
}
function chartConfig(type,data,options={}){
  return {type,data,options}
}
function chartData(labels,datasets){
  return { labels, datasets }
}

function dataset(label,data,extras={}){
  return{
    label,
    data,
    ...extras
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
   

