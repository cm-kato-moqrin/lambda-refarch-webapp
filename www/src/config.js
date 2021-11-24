// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "3ll4n6fiqvauabnkdjdqboj5qm",     // CognitoClientID
  "api_base_url": "https://fl224npo25.execute-api.ap-northeast-1.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-lambda-refarch-webapp.auth.ap-northeast-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d30m4t22p0p48u.amplifyapp.com"                                      // AmplifyURL
};

export default config;
