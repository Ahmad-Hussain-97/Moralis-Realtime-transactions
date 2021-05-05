Moralis.initialize("4wV2uVa7z7W6KUOZXSIp02XCqPE5Twr65JT5wswV"); // Application id from moralis.io
Moralis.serverURL = "https://ptl1krkgznpa.moralis.io:2053/server"; //Server url from moralis.io




async function login() {
    console.log("login clicked!");
    var user = await Moralis.Web3.authenticate();
    if(user)
    {
        console.log(user);
    }
 
}

async function listenToUpdates(){
    let query = new Moralis.Query("EthTransactions");
    let subscription =await query.subscribe
    subscription.on("create",(object)=>{
        console.log("New Transactions!!");
        console.log(object);
    })
}   

listenToUpdates();

document.getElementById("btn-login").onclick = login;
