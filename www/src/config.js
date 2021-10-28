// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "1t2ln7bfeuugva9dbn14kqkkit",     // CognitoClientID
  "api_base_url": "https://n66dy1pkpj.execute-api.ap-northeast-1.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-lambda-refarch-webapp-20211027.auth.ap-northeast-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d12ctjgrklf017.amplifyapp.com"                                      // AmplifyURL
};

export default config;
