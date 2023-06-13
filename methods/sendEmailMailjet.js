const Mailjet = require ('node-mailjet')


  // console.log(req.body,"<re.body")
  const mailjet = new Mailjet(
    {
      apiKey: '076b899a768b68e72d80ceb3782f9857',
      apiSecret: '4747e613c6069f18427c7c61c3726d7b'
    }
  );
  
	// mailjet.connect("220c5c95d84300689d9f43b1bb911d0d","5a14fd5326534bde6125471727113e48")
  
module.exports=function(email,message,val,callback){
    let mess;
    let html;
    if(val==1){
        mess=message;
        html=`<h3>${message} :)<h3>`
    }
    else if(val==2){
        mess="Dear your Click Below to get yourself verified..........."
        html=`<a href="localhost:4000/verifymail/${message}">Click Here For Getting verified</a>`
    }
    else if(val==3){
        mess="Reset your new password by clicking on the link below"
        html=``
    }
    const request = mailjet
        .post('send', { version: 'v3.1' })

        .request({
          Messages: [
            {
              From: {
                Email: "missaashnaa1@gmail.com",
                Name: "Aashnaa Goswami"
              },
              To: [
                {
                  Email: email,
                  Name: "Aashnaa G"
                }
              ],
              Subject: "Hello User...!!",
              TextPart: "Dear User!"+message,
                HTMLPart: html
            }
          ]
        })

request
    .then((result) => {
        console.log(result.body)
       callback(null,result.body)
    })
    .catch((err) => {
        console.log(err.statusCode,null)
    })
}