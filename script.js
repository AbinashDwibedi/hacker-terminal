async function printData(lines){
        // let rand = 1 +  Math.random()*6;
        return new Promise((resolve,reject) =>{
              setTimeout(() => {
                resolve(lines);
              },2000);
        })
    }

let btn = document.querySelector("button");
btn.addEventListener(("click"),(e)=>{
    main()
    setTimeout(() => {
        document.querySelector(".pass").style.display = "block";
    }, 10500);
    
  })  
    async function main(){
        let line;
    let location = document.querySelector(".terminal-content");
    location.innerHTML = "wait...<br>";
    let arr = ["initializing hacking ...","Reading files ...", "password files detected ...", "sending all passwords to server ...", "cleaing up ..."]
    for(let i=0 ; i<arr.length;i++){
        line = await printData(arr[i]);
        location.insertAdjacentHTML("beforeend",(line + "<br>"));
        
    }

    }
    
    

