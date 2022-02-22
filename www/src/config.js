// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "52g5bik8si1l621e6gur13cuj2",     // CognitoClientID
  "api_base_url": "https://guenliande.execute-api.ap-northeast-1.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoapporigin-refarch-origin.auth.ap-northeast-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d19zh2enfjhtlm.amplifyapp.com"                                      // AmplifyURL
};

export default config;
