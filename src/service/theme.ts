
export const getColorMode = () => {
    let mode = JSON.parse(localStorage.getItem("colorMode") || '{}');
    if(mode){
      
    }
    else {
      console.log("No color mode is here!");
    }
    
}


export const setColorMode = (userMode: string) => {
  localStorage.setItem("colorMode", JSON.stringify(userMode));
}
