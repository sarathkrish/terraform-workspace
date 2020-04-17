const core = require('@actions/core');
const axios = require('axios');

try{
    const workSpaceName = core.getInput('workSpaceName');
    const organizationName = core.getInput('organizationName');
    const token = core.getInput('terraformToken');
    let request = { data : { attributes: { name : workSpaceName, type: "workspaces"}}};
    console.log("request:" + JSON.stringify(request));

    const hashiCorpEndpoint = "https://app.terraform.io/api/v2/organizations/"+organizationName+"/workspaces";
    const options = {
        headers: {'Content-Type': 'application/vnd.api+json',
                  'Authorization': 'Bearer '+token
                }       
    };

    axios.post(hashiCorpEndpoint, request, options)
      .then((response) => {
        console.log("success:"+response);
      }, (error) => {
        console.error("error:"+JSON.stringify(error));
        output = error;
      });

} catch(error){
    core.setFailed(error.message);
}