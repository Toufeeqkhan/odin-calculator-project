const changeTheme = () => {
    let rootArray = [
        {name : '--permanent-color', color1:'#fa5260', color2:'#fa5260'},
        {name : '--round-color', color1:'#f8e2e3', color2:'#5f605e'},
        {name : '--light-round-color', color1:'#efd6d9', color2:'#5f605e'},
        {name : '--dark-shadow-color', color1:'#efd6d9', color2:'#3b3b3b'},
        {name : '--body-color', color1:'white', color2:'#303030'},
        {name : '--input-area-color', color1:'#f8f8f8', color2:'#444444'},
        {name : '--button-color', color1:'black', color2:'white'},
        {name : '--num-hover-color', color1:'#fa5360', color2:'#fa5360'},
    ]
    rootArray.forEach(entry => {
        let name = entry.name
        let color1 = entry.color1
        let color2 = entry.color2
        let currentColor = getComputedStyle(document.documentElement).getPropertyValue(name)
        let newColor =  currentColor === color1 ? color2 : color1
        document.documentElement.style.setProperty(name,newColor)
    })
    
}