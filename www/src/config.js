// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "7lct44r3vda8uea85v14rp62pr",     // CognitoClientID
  "api_base_url": "https://fw5mwcct3i.execute-api.ap-northeast-1.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-lambda-refarch-webapp.auth.ap-northeast-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d2wuxfi7hw58ci.amplifyapp.com"                                      // AmplifyURL
};

export default config;
