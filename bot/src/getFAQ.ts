const fetch = require("node-fetch");
const { CognitiveServicesCredentials } = require("@azure/ms-rest-azure-js");  
const { QnAMakerRuntimeClient } = require("@azure/cognitiveservices-qnamaker-runtime");
require("dotenv").config()

const get_QA_answer_test = async (question: string): Promise<void> => {
    // POST request with body equal on data in JSON format
    const QNAMAKER_KEY = process.env["QNAMAKER_KEY"] || "<QNAMAKER_KEY>";
    const QNAMAKER_ENDPOINT = process.env["QNAMAKER_ENDPOINT"] || "<QNAMAKER_ENDPOINT>";
    const kbid = process.env["QNAMAKER_KNOWLEDGE_BASE_ID"] || "<QNAMAKER_KNOWLEDGE_BASE_ID>";

    const cognitiveServicesCredentials = new CognitiveServicesCredentials(QNAMAKER_KEY);
    const client = new QnAMakerRuntimeClient(cognitiveServicesCredentials, QNAMAKER_ENDPOINT);
    const customHeaders = { Authorization: `EndpointKey ${QNAMAKER_KEY}` };
        
    // Maximum number of answer to retreive
    const top = 1;
    
    // Find only answers that contain these metadata
    // const strictFilters = [{ name: "editorial", value: "chitchat" }];
    try {
        const result = await client.runtime.generateAnswer(
            kbid,
            { question, top },
            { customHeaders }
        );
        // default returns top 1 
        return result["answers"][0].answer
    } catch (error) {
        console.log(error)
    }

}
  
export { get_QA_answer_test };