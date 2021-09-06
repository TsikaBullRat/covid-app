const precautions =[
    {
        id: 0,
        text:"How can I stay safe during the covid season",
        textshort: "Stay Safe",
        img:"",
    },
    {
        id: 1,
        text:"Sanitize with alcohol-based hand rub.",
        textshort: "Sanitize",
        img:require("../res/sanitize.png"),
    },
    {
        id: 2,
        text:"Wash your hands with soap regularly",
        textshort: "Wash hands",
        img:require("../res/wash_hands.png"),
    },
    {
        id: 3,
        text:"Maintain at least 1 metre distance between yourself and others",
        textshort: "Distance",
        img:"",
    },
    {
        id: 4,
        text:"Avoid touching your face.",
        textshort: "Avoid your face",
        img:"",
    },
    {
        id: 5,
        text:"Cover your mouth and nose when coughing or sneezing.",
        textshort: "Cover",
        img:"",
    },
    {
        id: 6,
        text:"Stay home if you feel unwell.",
        textshort: "Stay home",
        img:"",
    },
    {
        id: 7,
        text:"Refrain from activities that weaken the lungs.",
        textshort: "Lung care",
        img:require("../res/lungs.png"),
    },
    {
        id: 8,
        text:"Avoid unnecessary travel.",
        textshort: "Avoid travel",
        img:"",
    },
    {
        id: 9,
        text:"Avoid large groups of people.",
        textshort: "Avoid groups",
        img:"",
    },
    {
        id: 10,
        text:"Wear a mask in public, heavly crowded areas.",
        textshort: "Wear a mask",
        img:"",
    },
    {
        id: 11,
        text:"Get vaccinated to minimize your risk of being infected.",
        textshort: "Vaccinate",
        img:require("../res/vaccinate.png"),
    }
]

const getData = async(Callback) =>{
    const data = await fetch("https://corona-stats.mobi/api/json.2.0.php?key=z9OPIVQStmHLhZdRwokn")
    const stats = await data.json()
    data.catch(err=>console.log(err))

    // const data = new XMLHttpRequest()
    // data.open('GET', 'https://corona-stats.mobi/api/json.2.0.php?key=z9OPIVQStmHLhZdRwokn')
    // const stats = data.send('')

    // fetch("https://corona-stats.mobi/api/json.2.0.php?key=z9OPIVQStmHLhZdRwokn")
    //     .then(data=>data.json())
    //     .then(data=>Callback(data))
    //     .catch(err=>console.log(err))

    // const myReq = new Request('https://corona-stats.mobi/api/json.2.0.php?key=z9OPIVQStmHLhZdRwokn')
    // Callback(stats)

    // console.log(myReq.mode)

    // const data = await fetch("https://covid-za-api.herokuapp.com/cases/confirmed")
    // const stats = await data.json()

    console.log(stats)
  }

export { precautions, getData }