// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "6r5r1tp45am62etqkc1o6v5gtp",     // CognitoClientID
  "api_base_url": "https://bo34nez4ke.execute-api.ap-northeast-1.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-lambda-refarch-webapp-20211027.auth.ap-northeast-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d1hvmkduangchy.amplifyapp.com"                                      // AmplifyURL
};

export default config;
